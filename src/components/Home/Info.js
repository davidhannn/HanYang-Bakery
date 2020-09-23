import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"
import { ImPhone } from "react-icons/fa"

const Info = () => {
  return (
    <section>
      <div className="about-info">
        <div className="left-column">
          <h2 className="section-title">Welcome to HanYang Bakery</h2>
          <div className="paragraph-wrap">
            <p>
              HanYang Bakery is one of the best and only Korean bakeries in
              Orange County. All ingredients are freshly created in-house every
              morning to create the healthiest and delicious Korean snacks
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
          {/* <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                About Page
              </button>
            </Link> */}
        </div>
      </div>
    </section>
  )
}

export default Info
