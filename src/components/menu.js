import React from "react"
import { Link } from "gatsby"

export default () =>
<div>
    <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
    <h3 style={{ textAlign: `center` }}>Samir B - Portfolio</h3>
    </Link>
    <ul style={{ listStyle: `none`, width: `100%`, textAlign: `center`, margin: `0`}}>
    <ListLink to="/">Home</ListLink>
    <ListLink to="/about/">About</ListLink>
    <ListLink to="/contact/">Contact</ListLink>
    </ul>
</div>