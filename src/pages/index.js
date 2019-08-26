import React from "react"
import Header from "../components/header"
import Menu from "../components/menu"
export default () => (
<div class="container">
    <Menu />
    <div>
        <Header headerText="Hello and welcome to my Gatsby Site"/>
        <p>What a world.</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
</div>
)