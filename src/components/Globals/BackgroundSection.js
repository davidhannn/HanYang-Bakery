import React from "react"
import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ img, styleClass, title, children }) => {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <div className="hero-section">
        <h1 className="hero-title">{title}</h1>
        <h3>Authentic Korean Dessert</h3>
      </div>
    </BackgroundImage>
  )
}

BackgroundSection.defaultProps = {
  title: "default title",
  styleClass: "default-background",
}

export default BackgroundSection
