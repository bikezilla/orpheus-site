import { graphql, useStaticQuery } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const VarvaraPage = (props: any) => {
  const query = useStaticQuery<GatsbyTypes.VarvaraQueryQuery>(graphql`
    query VarvaraQuery {
      mdx(frontmatter: { title: { eq: "varvara" } }) {
        body
        tableOfContents
      }
    }
  `)

  if (!query) return <div>Not found!</div>

  return (
    <Layout location={props.location.pathname}>
      <SEO title="Варвара" />
      <div className="guide">
        <MDXRenderer>{query!.mdx!.body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export default VarvaraPage
