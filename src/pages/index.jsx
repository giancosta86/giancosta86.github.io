import React from "react"
import Page from "../templates/Page"
import Cover from "../components/index/Cover"
import Technology from "../components/index/Technology"
import Humanism from "../components/index/Humanism"
import FeaturedProjects from "../components/index/FeaturedProjects"

export default () => (
  <Page bodyClass="home">
    <Cover />

    <Technology />

    <Humanism />

    <FeaturedProjects />
  </Page>
)
