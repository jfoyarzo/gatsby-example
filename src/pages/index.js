import * as React from "react"
import Layout from "./layout"
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
export const Head = () => <title>Home Page</title>
export default IndexPage

