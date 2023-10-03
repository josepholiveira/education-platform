import { MDXRemote } from 'next-mdx-remote/rsc'
import { MDXComponents } from '@/helpers/mdx-components'
import React from 'react';
import path from 'path';
import fs from 'fs/promises';
import matter from 'gray-matter';


export  const loadBlogPost = React.cache(async (slug: string) => {
  const rawContent = await readFile(
    `/content/posts/${slug}.mdx`
  );

  const { data: frontmatter, content } =
    matter(rawContent);

  return { frontmatter, content };
})

function readFile(localPath: string) {
  return fs.readFile(
    path.join(process.cwd(), localPath),
    'utf8'
  );
}


export default async function LessonPage({ params }: { params: { slug : string}}) {
  const { slug } = params
  
  const myPost = await loadBlogPost(slug)

  return (
    <main className="mx-auto max-w-screen-lg p-6 py-12">
      <h1 className="mb-8">{myPost.frontmatter.title}</h1>
      <MDXRemote
        source={myPost.content}
        components={MDXComponents}
      />
    </main>
  )
}