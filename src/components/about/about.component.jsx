import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"
import { ImPhone } from "react-icons/fa"

import './about.styles.scss';

const About = () => {
  return (
    <section id="about">
      <div className="about-info">
        <div className="left-column">
          <h2 className="section-title">HanYang Bakery</h2>
          <div className="paragraph-wrap">
            <p>
              HanYang Bakery is one of the best and longest running Korean bakeries in
              Orange County. All snacks are created every
              morning with the freshest ingredients to create the healthiest and delicious Korean snacks
              around.
            </p>
          </div>
        </div>
        <div className="right-column">
          <div className="contact-info">
            <div className="info-item">
              <h4 className="item-title">Contact Us</h4>
              <div className="info-data">Phone: (714)-537-5150 </div>
            </div>
            <div className="info-item">
              <h4 className="item-title">Location</h4>
              <div className="info-data">
                <p>
                  9732 Garden Grove Blvd. #7 <br /> Garden Grove, CA 92844
                </p>
              </div>
            </div>
            <div className="info-item">
              <h4 className="item-title">Hours</h4>
              <div className="info-data">
                <p>
                  Monday: Closed <br />
                  Tuesday - Sunday: 7:00 AM - 5:00PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <section id="about">
    //     <div className="section-container">
    //         <h2>HanYang</h2>
    //         <h3>한양</h3>
    //         <p>HanYang Bakery is one of the longest running bakeries in Orange County. All snacks are created using the freshest ingredients each morning to make the healthiest and delicious Korean snacks around</p>
    //     </div>
    // </section>
  )
}

export default About
