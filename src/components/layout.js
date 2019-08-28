import React from "react"
import { Link } from "gatsby"
const ListLink = props => (
  <li style={{ display: `inline-block`, padding: `0 1rem`}}>
    <Link to={props.to} style={linkStyles} activeStyle={activeStyles}>{props.children}</Link>
  </li>
)

const linkStyles = {
  display: `inline-block`,
  textDecoration: `none`,
  textShadow: `none`,
  color: `rgb(170, 255, 255)`,
}

const activeStyles = {
  textDecoration: `none`,
  textShadow: `none`
}

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h2 style={{ textAlign: `center` }}>Samir B Portfolio</h2>
      </Link>
      <ul style={{ listStyle: `none`, width: `100%`, textAlign: `center`, margin: `0`}}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
    {children}
  </div>
)