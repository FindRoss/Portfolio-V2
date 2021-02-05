import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero";
import Projects from "../components/projects";

import Todo from "../components/todo";

const IndexPage = ({ data }) => {

  // <h2>{data.sanityProject.name}</h2>

  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Projects />
      <Todo />
    </Layout>
  )
}

export default IndexPage


export const query = graphql`
query MyQuery {
  sanityProject {
    name
  }
}

`