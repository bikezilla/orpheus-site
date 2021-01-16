import { graphql, useStaticQuery } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AdvicesPage = () => {
  const query = useStaticQuery<GatsbyTypes.AdvicesQueryQuery>(graphql`
    query AdvicesQuery {
      mdx(frontmatter: { title: { eq: "advices" } }) {
        body
        tableOfContents(maxDepth: 4)
      }
    }
  `)

  return (
    <Layout tableOfContents={query!.mdx!.tableOfContents}>
      <SEO title="Полезни съвети" />
      <div className="guide">
        <MDXRenderer>{query!.mdx!.body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export default AdvicesPage
