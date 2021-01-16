import { graphql, useStaticQuery } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const GuidePage = () => {
  const query = useStaticQuery<GatsbyTypes.GuideQueryQuery>(graphql`
    query GuideQuery {
      mdx(frontmatter: { title: { eq: "guide" } }) {
        body
        tableOfContents(maxDepth: 4)
      }
    }
  `)

  if (!query) return <div>Not found!</div>

  return (
    <Layout tableOfContents={query!.mdx!.tableOfContents}>
      <SEO title="Правилник" />
      <div className="guide">
        <MDXRenderer>{query!.mdx!.body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export default GuidePage
