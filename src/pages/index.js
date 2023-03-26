import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
      <Layout pageTitle="Home Page">
      <p>I'm making this following the Gatsby tutorial</p>
      <StaticImage
        alt="Chikorita, a tuxedo cat, she's crazy"
        src="../images/Chikorita.jpeg"
      />
      </Layout>
  )
}
export const Head = () =>  <Seo title="Home Page" />
export default IndexPage

