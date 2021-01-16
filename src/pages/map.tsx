import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const MapPage = () => (
  <Layout>
    <SEO title="Карта" />
    <h2>Карта на маркирани отсечки и маршрути в България</h2>
    <div className="embed-responsive embed-responsive-1by1">
      <iframe
        title="map"
        src="https://www.google.com/maps/d/u/0/embed?mid=1N4eyP8qLkS3S-FI2UtY2lT6gJ-zPU_7a"
      ></iframe>
    </div>
  </Layout>
)

export default MapPage
