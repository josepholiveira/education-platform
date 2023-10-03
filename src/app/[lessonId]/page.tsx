import { MDXRemote } from 'next-mdx-remote/rsc'
import { MDXComponents } from '@/helpers/mdx-components'

const source = `# Hello World

This is from Server Components!


<H1>Hello world!</H1>
`

export default async function LessonPage() { 
  return (
    <main>
      <MDXRemote
        source={source}
        components={MDXComponents}
      />
    </main>
  )
}