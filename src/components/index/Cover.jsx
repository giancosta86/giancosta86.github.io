import React from "react"
import BlogMenu from "../BlogMenu"
import ContactsMenu from "../ContactsMenu"
import gian from "./images/gian.jpg"
import SmartIcon from "../SmartIcon"
import { StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            motto
          }
        }
      }
    `}
    render={data => (
      <div
        id="cover"
        className="d-flex justify-content-center align-items-center min-height-100"
      >
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9">
              <div className="jumbotron m-3 mt-4 mb-4">
                <div className="container-fluid">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-8 col-sm-4">
                      <img
                        className="rounded-circle img-fluid mb-3"
                        src={gian}
                        alt="Gianluca Costa's portrait"
                      />
                    </div>

                    <div className="col-12 col-sm-8">
                      <blockquote className="font-italic text-center">
                        {data.site.siteMetadata.motto}
                      </blockquote>

                      <hr className="mt-md-4 mb-md-4" />

                      <div className="container-fluid">
                        <div className="row justify-content-center mb-n3">
                          <div className="col-12 col-lg-auto mb-3 d-flex justify-content-center">
                            <a
                              className="btn btn-primary btn-lg center-block"
                              href="#technology"
                            >
                              <SmartIcon icon="fas/chevron-circle-down" />{" "}
                              Discover
                            </a>
                          </div>

                          <div className="col-12 col-lg-auto mb-3 d-flex justify-content-center">
                            <div className="btn-group dropdown">
                              <button
                                type="button"
                                className="btn btn-success btn-lg dropdown-toggle"
                                data-toggle="dropdown"
                              >
                                <SmartIcon icon="fas/pen-nib" /> Blog
                              </button>

                              <BlogMenu />
                            </div>
                          </div>

                          <div className="col-12 col-lg-auto mb-3 d-flex justify-content-center">
                            <div className="btn-group dropdown">
                              <button
                                type="button"
                                className="btn btn-info btn-lg dropdown-toggle"
                                data-toggle="dropdown"
                              >
                                <SmartIcon icon="fas/satellite-dish" /> Contacts
                              </button>

                              <ContactsMenu />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  />
)
