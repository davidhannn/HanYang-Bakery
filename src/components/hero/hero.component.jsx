import React from "react"
import BackgroundImage from "gatsby-background-image"
import Img from 'gatsby-image'

import logo from "../../images/logo2.png"

import { graphql, useStaticQuery } from "gatsby"

import './hero.styles.scss';


const Hero = () => {
  const data = useStaticQuery(graphql`
 query {
    allContentfulHeroSection {
      edges {
        node {
          heroImage {
            resize (width: 1000, height: 500) {
              src
            }
          }
        }
      }
    }
  }
  `)

  return (
      <section id="hero">
          <div className="hero-main-container">
            {console.log(data.allContentfulHeroSection.edges)}
            {data.allContentfulHeroSection.edges.map((edge) => (
    
              <img className="hero-image" src={edge.node.heroImage[0].resize.src} />
            ))}
          </div>
    </section>
  )
}


// export const query = graphql`
// {
//   allContentfulHeroSection {
//     edges {
//       node {
//         heroImage {
//           resize {
//             src
//           }
//         }
//       }
//     }
//   }
// }
// `



export default Hero
