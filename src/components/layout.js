import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./navbar/navbar.component"
import Footer from "./footer/footer.component"

import "./bootstrap.min.css"
import "./layout.scss"

const Layout = ({ children }) => (
  <Fragment>
    <Navbar />
    <div className="main">
      {children}
    </div>
    {/* <Footer /> */}
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
