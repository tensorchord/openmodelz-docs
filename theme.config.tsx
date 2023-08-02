import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: <img src="/logo.svg" style={{width: "140px"}} alt='modelz' />,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="OpenModelZ" />      
      <meta property="og:description" content="Simplify machine learning deployment for any cloud (GCP, AWS, or others), your home lab, or even a single machine." />      
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    </>
  ),

  darkMode: false,

  chat: {
    link: 'https://discord.gg/F4WnzqmeNj',
  },
  project: {
    link: 'https://github.com/tensorchord/openmodelz',
  },
  docsRepositoryBase: 'https://github.com/tensorchord/openmodelz-docs/tree/main',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – OpenModelZ'
      }
    }
  },
  banner: {
    key: 'modelz-release',
    text: (
      <a href="https://github.com/tensorchord/openmodelz" target="_blank" rel="noreferrer">
        🎉 OpenModelZ is open sourced! →
      </a>
    )
  },
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  sidebar: {
    defaultMenuCollapseLevel: 3,
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <p className="mt-6 text-xs">
          © {new Date().getFullYear()} TensorChord Inc.
        </p>
      </div>
    )
  }
}

export default config
