import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const TestPage = () => (
  <Layout>
    <h1>Hi dziady</h1>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default TestPage
