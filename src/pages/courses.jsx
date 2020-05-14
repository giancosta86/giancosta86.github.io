import React from "react"
import Page from "../templates/Page"
import { CourseReport } from "@giancosta86/omnicourse"
import allCourses from "../data/courses/all-courses"
import loader from "./loader.gif"

export default () => {
  return (
    <Page title="Courses and books" bodyClass="courses">
      <div className="d-flex flex-column justify-content-center min-height-100">
        <h1>Courses and books</h1>

        <CourseReport
          loader={
            <img
              alt="Loading..."
              src={loader}
              style={{
                width: "50%",
                height: "20%",
                margin: "10% auto"
              }}
            />
          }
          sourceData={allCourses}
          rootLabel="Period:"
          className="course-report flex-1"
        />
      </div>
    </Page>
  )
}
