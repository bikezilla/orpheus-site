/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

interface MetaItem {
  name: string
  content: string
}

const SITE_METADATA_QUERY = graphql`
  query SiteMetadataQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

function SEO({
  description,
  lang,
  meta = [],
  title,
}: {
  description?: string
  lang?: string
  meta?: MetaItem[]
  title: string
}) {
  const { site } = useStaticQuery<GatsbyTypes.SiteMetadataQueryQuery>(
    SITE_METADATA_QUERY
  )

  const metaDescription =
    description || site?.siteMetadata?.description || "default description"
  const defaultTitle = site?.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site?.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

export default SEO
