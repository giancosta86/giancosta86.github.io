import React from "react"
import ExpandableCard from "../ExpandableCard"
import BadgedItems from "../../BadgedItems"
import { StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query MyQuery {
        allHumanLanguagesJson {
          nodes {
            badge
            text
          }
        }
      }
    `}
    render={data => (
      <ExpandableCard
        icon="fas/globe"
        title="Human languages"
        description={
          <>
            ...convey <strong>different viewpoints</strong>, which is paramount.
            I'm also fond of <b>morphology</b> and <b>phonetics</b>
          </>
        }
        buttonIcon="fas/atlas"
        buttonText="Language passport"
        buttonClass="btn-success"
        childBlockId="human-languages-details"
      >
        <div className="card-body">
          <BadgedItems
            items={data.allHumanLanguagesJson.nodes}
            badgeStyle="badge-success"
          />
        </div>
      </ExpandableCard>
    )}
  />
)
