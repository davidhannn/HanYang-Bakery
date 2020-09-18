import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./Globals/Navbar"

import "./bootstrap.min.css"
import "./layout.scss"

const Layout = ({ children }) => (
  <Fragment>
    <Navbar />
    {children}
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
