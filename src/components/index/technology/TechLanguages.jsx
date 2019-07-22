import React from "react"
import ExpandableCard from "../ExpandableCard"
import BadgedItems from "../../BadgedItems"
import { StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allTechLanguagesJson {
          nodes {
            text
            stars
          }
        }
      }
    `}
    render={data => (
      <ExpandableCard
        icon="far/compass"
        title="Comprehensive experience"
        description={
          <>
            Over the years, I've learnt a wide!!! variety of{" "}
            <strong>languages</strong>, <strong>frameworks</strong> and{" "}
            <strong>patterns</strong>
          </>
        }
        buttonIcon="fas/code"
        buttonText="Main languages"
        buttonClass="btn-primary"
        childBlockId="it-languages-details"
      >
        <div className="card-body">
          <BadgedItems
            items={data.allTechLanguagesJson.nodes}
            badgeStyle="badge-primary"
          />
        </div>
      </ExpandableCard>
    )}
  />
)
