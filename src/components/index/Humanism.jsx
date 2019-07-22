import React from "react"
import HumanLanguages from "./humanism/HumanLanguages"
import Music from "./humanism/Music"
import Philosophy from "./humanism/Philosophy"
import Literature from "./humanism/Literature"
import SoftSkills from "./humanism/SoftSkills"
import Originality from "./humanism/Originality"

export default () => (
  <section id="humanism" className="min-height-100">
    <div>
      <h1>Humanism</h1>

      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-4">
            <HumanLanguages />
          </div>

          <div className="col-12 col-sm-6 col-lg-4">
            <Music />
          </div>

          <div className="col-12 col-sm-6 col-lg-4">
            <Philosophy />
          </div>

          <div className="col-12 col-sm-6 col-lg-4">
            <Literature />
          </div>

          <div className="col-12 col-sm-6 col-lg-4">
            <SoftSkills />
          </div>

          <div className="col-12 col-sm-6 col-lg-4">
            <Originality />
          </div>
        </div>
      </div>
    </div>
  </section>
)
