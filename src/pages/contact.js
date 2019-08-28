import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Container from "../components/container"
export default () => (
  <Layout>
    <Container>
    <Header headerText="Contact" />
    <p>Send us a message!</p>
    </Container>
  </Layout>
)