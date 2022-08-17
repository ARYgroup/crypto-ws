import React from "react"
import Navigation from "./navigation"

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Navigation />
      {children}
    </div>
  )
}

export default Layout
