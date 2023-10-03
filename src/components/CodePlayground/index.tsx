"use client"
import { Sandpack } from "@codesandbox/sandpack-react";
import { sandpackDark } from "@codesandbox/sandpack-themes";

export interface CodePlaygroundProps {}

export default function CodePlayground(props: CodePlaygroundProps) {
  return (
    <Sandpack 
      template="nextjs" 
      
      files={{
        '/pages/index.js': {
          code: `import { motion } from 'framer-motion';

export default function Page() {
  return (
    <main>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ color: "purple" }}
      >
        Este elemento começará invisível e aparecerá suavemente!
      </motion.div>
    </main>
  )
}
          `,
          active: true,
          hidden: false,
          
        },
      
        '/teste.js': {
          code: `export default () => {
  return <button>Hello</button>
};`,
        }
      }}
      customSetup={{ 
        dependencies: { 
          "framer-motion": "latest" 
        },
        entry: "/index.tsx",

      }}
      theme={sandpackDark} 
      options={{
        layout: "preview",
        showTabs: true,
        showConsoleButton: true,
        showLineNumbers: true,
        showRefreshButton: true,
        showInlineErrors: true,
        resizablePanels: true,
      }} 

    />
  )
}