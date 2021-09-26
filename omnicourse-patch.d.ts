declare module "@giancosta86/omnicourse" {
  import React from "react"

  interface CourseReportProps {
    loader: React.ReactElement<any, any>
    sourceData: any
    rootLabel: String
    className: String
  }

  declare const CourseReport: React.SFC<CourseReportProps>
}
