import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero.component"
import About from "../components/about/about.component"
import Menu from "../components/menu/menu.component"
import Products from "../components/products/products.component"
import Contact from "../components/contact/contact.component"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Hero
      img={data.img.childImageSharp.fluid}
      title="HanYang Bakery"
      styleClass="default-background"
    />
    <About />
    <Menu items={data.menu} />
    <Products />
    <Contact />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    menu: allContentfulFoodItem {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          category
          image {
            fixed(width: 50, height: 50) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage
