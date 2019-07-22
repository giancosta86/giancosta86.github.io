import React from "react"
import SmartIcon from "../SmartIcon.jsx"
import { StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allFeaturedProjectsJson {
          nodes {
            gitHubName
            title
            screenshotExtension
            descriptionHtml
            hasWebsiteArea
          }
        }
      }
    `}
    render={data => (
      <section id="featured-projects" className="min-height-100">
        <div>
          <h1>Featured projects</h1>

          <div
            id="featured-projects-carousel"
            className="carousel ml-lg-5 mr-lg-5 slide mt-4"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              {data.allFeaturedProjectsJson.nodes.map((project, index) => (
                <li
                  key={project.gitHubName}
                  data-target="#featured-projects-carousel"
                  data-slide-to={index}
                  className={index === 0 ? "active" : ""}
                />
              ))}
            </ol>

            <div className="carousel-inner">
              {data.allFeaturedProjectsJson.nodes.map((project, index) => {
                let title = project.title || project.gitHubName
                let screenshotExtension = project.screenshotExtension || "png"
                let className = `carousel-item ${index === 0 ? "active" : ""}`

                return (
                  <div key={title} className={className}>
                    <img
                      src={`/images/screenshots/${project.gitHubName}.${screenshotExtension}`}
                      className="d-block"
                      alt={`Screenshot of ${title}`}
                    />

                    <div className="carousel-caption">
                      <h5>{title}</h5>

                      <p
                        dangerouslySetInnerHTML={{
                          __html: project.descriptionHtml
                        }}
                      />

                      <div className="buttons">
                        {project.hasWebsiteArea && (
                          <a
                            href={`https://gianlucacosta.info/${project.gitHubName}/`}
                            className="btn btn-primary btn-sm mr-2"
                          >
                            <SmartIcon icon="fas/globe" /> Website
                          </a>
                        )}

                        <a
                          href={`https://github.com/giancosta86/${project.gitHubName}`}
                          className="btn btn-success btn-sm"
                        >
                          <SmartIcon icon="fab/github" /> GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    )}
  />
)
