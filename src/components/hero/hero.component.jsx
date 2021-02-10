import React from "react"
import BackgroundImage from "gatsby-background-image"
import Img from 'gatsby-image'

import logo from "../../images/logo2.png"

import { graphql } from "gatsby"

import './hero.styles.scss';

// export const query = graphql`

// `

const Hero = ({ img, styleClass, title, children }) => {
  return (
      <section id="hero">
          <div className="hero-main-container">
          <div className="hero-left-container"> 
                <img src={logo} />
                <h4>Authentic Korean Snacks</h4>
                <button className="hero-container-button">Explore Menu</button>
          </div>
          <div className="hero-right-container">
              <div className="img-container">
                <Img fluid={img} imgStyle={{ objectFit: "contain" }}/>
              </div>
                {/* <div className="hero-section">
                    <h1 className="hero-title">{title}</h1>
                    <h3>Authentic Korean Dessert</h3>
                </div> */}
          </div>
          </div>
    </section>
  )
}



export default Hero
