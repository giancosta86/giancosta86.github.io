import React from "react"
import ExpandableCard from "../ExpandableCard"
import BadgedItems from "../../BadgedItems"
import SmartIcon from "../../SmartIcon"
import { StaticQuery, graphql } from "gatsby"
import links from "../../../data/links.json"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allTechExperienceJson {
          nodes {
            icon
            text
            badge
            badgeIcon
          }
        }
        allTechAreasJson {
          nodes {
            icon
            text
            stars
          }
        }
      }
    `}
    render={data => (
      <ExpandableCard
        icon="fas/laptop-code"
        title="IT passionate since 1998"
        description={
          <>
            I started my journey in Information Technology{" "}
            <strong>at the age of 12</strong>
          </>
        }
        buttonIcon="fas/user-cog"
        buttonText="Hi-tech passion"
        buttonClass="btn-primary"
        childBlockId="it-details"
      >
        <div className="card-body">
          <div className="mb-4">
            <BadgedItems
              items={data.allTechExperienceJson.nodes}
              badgeStyle="badge-primary"
            />
          </div>

          <section>
            <h5>Technological areas</h5>

            <BadgedItems
              items={data.allTechAreasJson.nodes}
              badgeStyle="badge-primary"
            />
          </section>

          <div className="d-flex justify-content-center mt-4">
            <a href={links.cvPath} className="btn-primary btn-sm">
              <SmartIcon icon="fas/file-download" /> Download CV
            </a>
          </div>
        </div>
      </ExpandableCard>
    )}
  />
)
