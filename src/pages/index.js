import * as React from "react"
import Layout from "./layout"

const IndexPage = () => {
  return (
      <Layout pageTitle="Home Page">
      <p>I'm making this following the Gatsby tutorial</p>
      </Layout>
  )
}
export const Head = () => <title>Home Page</title>
export default IndexPage

