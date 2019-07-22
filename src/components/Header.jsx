import React from "react"
import BlogMenu from "./BlogMenu"
import ContactsMenu from "./ContactsMenu"
import WebsiteMenu from "./WebsiteMenu"
import { Link, StaticQuery, graphql } from "gatsby"
import links from "../data/links.json"
import classNames from "classnames"
import css from "./Header.module.scss"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <nav
        className={classNames(
          css.siteNav,
          "navbar navbar-expand-md navbar-light bg-light p-0 pl-md-2 pr-1"
        )}
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarMenu"
        >
          <img src={"/favicon.ico"} alt="Website icon" />
        </button>

        <a className={css.navbarBrand} href="/">
          <div className="d-flex align-items-center">
            <img
              className="d-none d-md-inline mr-2"
              src={"/favicon.ico"}
              alt="Website icon"
            />
            <span className="font-italic">{data.site.siteMetadata.title}</span>
          </div>
        </a>

        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/#cover">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/#technology">
                Technology
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/#humanism">
                Humanism
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/#featured-projects">
                Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={links.courses}>
                Courses
              </Link>
            </li>

            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
              >
                Blog
              </button>
              <BlogMenu />
            </li>

            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
              >
                Website
              </button>

              <WebsiteMenu />
            </li>

            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
              >
                Contacts
              </button>

              <ContactsMenu />
            </li>
          </ul>
        </div>
      </nav>
    )}
  />
)
