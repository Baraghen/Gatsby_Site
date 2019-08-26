import React from "react"
import Header from "../components/header"
import Menu from "../components/menu"
export default () => (
<div class="container">
  <div>
    <Menu />
    <Header headerText="This is my Gatsby Site" />
    <p>Cool beans.</p>
  </div>
</div>
)