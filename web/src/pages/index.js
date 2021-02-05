import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero";
import Projects from "../components/projects";

import Todo from "../components/todo";

const IndexPage = ({ data }) => {

  const { sanityHero, allSanityProject } = data;

  return (
    <Layout>
      <SEO title="Portfolio" />
      <Hero hero={sanityHero} />
      <Projects projects={allSanityProject} />
      <Todo />
    </Layout>
  )
}

export default IndexPage


export const query = graphql`
query MyQuery {
  allSanityProject {
    edges {
      node {
        id
        name
        description
      }
    }
  }
  sanityHero {
    title
    description
  }
}
`