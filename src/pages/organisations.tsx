import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { PartnerLogosQueryQuery } from "graphql-types"
import _ from "lodash"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PARTNER_LOGOS_QUERY = graphql`
  query PartnerLogosQuery {
    allFile(
      filter: { relativeDirectory: { eq: "orgs" } }
      sort: { fields: name }
    ) {
      nodes {
        id
        name
        childImageSharp {
          fixed(
            width: 200
            height: 200
            fit: CONTAIN
            background: "rgba(255,255,255,1)"
          ) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`

const URLS = {
  kriva: "https://www.kriva.org",
  bikearea: "https://www.bikearea.org",
  mtbbg: "https://www.mtb-bg.com",
  vratsa: "http://vratsatrails.com",
  bikeventures: "https://bike-ventures.com",
  bluerock: "https://www.facebook.com/BLUEROCKMTB",
  alabak: "https://www.facebook.com/alabak.info",
  trynskotd: "https://www.facebook.com/tourismtransko",
  ustremeni: "https://ustremeni.blogspot.com",
  endurowarriors: "https://www.facebook.com/EnduroWarriors/",
  ustrem: "https://www.facebook.com/USTREM.CYCLING",
  skala: "https://clubskala.org/",
  ridersunited: "https://www.facebook.com/RidersUnitedTeam/",
}

export default function OrgsPage() {
  const query = useStaticQuery<PartnerLogosQueryQuery>(PARTNER_LOGOS_QUERY)

  return (
    <Layout>
      <SEO title="Организации" />
      <h1>Организации, подкрепящи инициативата</h1>
      <h6 className="text-muted">
        Ако желате да заявите подкрепа на проекта с логото на вашата
        организация, <Link to="/contacts">пишете ни!</Link>
      </h6>
      <div className="">
        {_.chunk(query.allFile.nodes, 4).map(logos => {
          return (
            <div className="row mt-5">
              {logos.map(logo => {
                const url = URLS[logo.name as keyof typeof URLS]

                return (
                  <div className="col-lg-3">
                    <div>
                      {url ? (
                        <a href={url} target="_blank" rel="noreferrer">
                          <Img
                            fixed={logo.childImageSharp?.fixed as any}
                            key={logo.id}
                            className="mx-auto d-block mt-3 mb-3"
                          />
                        </a>
                      ) : (
                        <Img
                          fixed={logo.childImageSharp?.fixed as any}
                          key={logo.id}
                          className="mx-auto d-block mt-3 mb-3"
                        />
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </Layout>
  )
}
