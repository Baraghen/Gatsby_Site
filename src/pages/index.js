import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import Header from "../components/header"
import webshop from "../img/webshop.png"
import journal from "../img/journal.png"
import Project from "../components/project"

export default () => (
<Layout>
    <Container>
        <Header headerText="Cool stuff I've made" />
        <Project
      projectname="Webshop"
      thumbnail={webshop}
      excerpt="This is a webshop that I made during my time at Nackademin. It was part of our Javascript 2 course and this assignment was meant to teach us the basics of localStorage."
      projectlink="https://baraghen.github.io/webshop/index.html"
      projectlinktext="Link to my project"
      />
    
    <Project
      projectname="Journal"
      thumbnail={journal}
      excerpt="This is a journal that I made as part of another assignment at Nackademin. This time the focus was on data bases using MySql"
      projectlink={journal}
      projectlinktext="Enlarge image"
      />
    </Container>
</Layout>
)