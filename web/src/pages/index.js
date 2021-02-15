import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero";
import Projects from "../components/projects";
import Tools from "../components/tools";
import Contact from "../components/contact";

const IndexPage = ({ data }) => {

  const { sanityHero, allSanityProject, allSanityTool } = data;

  return (
    <Layout>
      <SEO title="Portfolio" />
      <Hero hero={sanityHero} />
      <Projects projects={allSanityProject} />
      <Tools tools={allSanityTool} />
      <Contact />
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
        projectUrl
      }
    }
  }
  allSanityTool {
    edges {
      node {
        title
        id
        logo {
          asset {
            url
          }
        }
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