import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import Section from "../components/section"
import Header from "../components/header"
import { Doughnut } from "react-chartjs-2"
import { Pie } from "react-chartjs-2"
import { Bar } from "react-chartjs-2"

const doughnutData = {
    labels: ["Installed", "Not installed"],
    datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2"],
        data: [11, 298]
    }]
}

const doughnutOptions = {
    title: {
        display: true,
        text: 'Installed steam games on my home computer'
    }
}

const pieData = {
    labels: ["Fighting", "MOBA", "Rouge-like", "Management", "Action RPG", "Couch Co-Op", "FPS"],
    datasets: [{
        label: "Currently installed",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#f8e879","#9c7f54"],
        data: [4, 1, 2, 1, 1, 1, 1]
    }]
}

const pieOptions = {
    title: {
        display: true,
        text: 'Genres of installed steam games'
    }
}

const barData = {
    labels: ["Fighting", "MOBA", "Rouge-like", "Management", "Action RPG", "Couch Co-Op", "FPS"],
    datasets: [{
        label: "Total time played (hours)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#f8e879","#9c7f54"],
        data: [506, 1474, 59, 2, 133,2,8]
    }]
}

const barOptions = {
    legend: { display: false },
    title: {
        display: true,
        text: "Total time played (hours) by genre"
    }
}

export default () => (
<Layout>
    <Container>
        <Header headerText="Just a couple of charts" />
        <Section>
            <Doughnut data={doughnutData} options={doughnutOptions} />
        </Section>
        <Section>
            <Pie data={pieData} options={pieOptions} />
        </Section>
        <Section>
            <Bar data={barData} options={barOptions} />
        </Section>
    </Container>
</Layout>
)



