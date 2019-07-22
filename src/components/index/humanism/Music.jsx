import React from "react"
import ExpandableCard from "../ExpandableCard"
import BadgedItems from "../../BadgedItems"
import links from "../../../data/links.json"
import SmartIcon from "../../SmartIcon"
import { StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMusicJson {
          nodes {
            text
            stars
          }
        }
      }
    `}
    render={data => (
      <ExpandableCard
        icon="fas/music"
        title="Music"
        description={
          <>
            I adore music - from <b>classical</b> to <b>modern</b>; I started
            studying its <b>grammar</b>, as a hobby, at the age of 9
          </>
        }
        buttonIcon="fas/guitar"
        buttonText="Amateur performer"
        buttonClass="btn-success"
        childBlockId="music-details"
      >
        <div className="card-body">
          <BadgedItems
            items={data.allMusicJson.nodes}
            badgeStyle="badge-success"
          />
        </div>

        <div className="d-flex justify-content-center align-items-center mb-4">
          <a href={links.youTube} className="btn btn-success btn-sm">
            <SmartIcon icon="fab/youtube" /> Watch my YouTube channel
            <SmartIcon className="spaced" icon="fas/arrow-circle-right" />
          </a>
        </div>
      </ExpandableCard>
    )}
  />
)
