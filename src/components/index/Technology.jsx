import React from "react"
import Passion from "./technology/Passion"
import Education from "./technology/Education"
import TechLanguages from "./technology/TechLanguages"
import Courses from "./technology/Courses"
import OpenSource from "./technology/OpenSource"
import OperatingSystems from "./technology/OperatingSystems"

export default () => (
  <section id="technology" className="min-height-100">
    <div>
      <h1>Technology</h1>

      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-4">
            <Passion />
          </div>

          <div className="col-12 col-sm-6 col-lg-4">
            <Education />
          </div>

          <div className="col-12 col-sm-6 col-lg-4">
            <TechLanguages />
          </div>

          <div className="col-12 col-sm-6 col-lg-4">
            <Courses />
          </div>

          <div className="col-12 col-sm-6 col-lg-4">
            <OpenSource />
          </div>

          <div className="col-12 col-sm-6 col-lg-4">
            <OperatingSystems />
          </div>
        </div>
      </div>
    </div>
  </section>
)
