import React from "react"
import Header from "../components/header"
import Menu from "../components/menu"
export default () => (
<div class="container">
  <div>
    <Menu />
    <Header headerText="Contact" />
    <p>Send us a message!</p>
  </div>
</div>
)