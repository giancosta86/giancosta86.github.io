import { generateMarkdownPages } from "./generators/markdown-pages-generator"
import { generateJsonNewsFeed } from "./generators/news-generator"
import { generateCourseService } from "./generators/course-service-generator"

export const createPages = ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  return generateMarkdownPages(graphql, createPage)
    .then(() => reporter.success("Markdown pages generated"))
    .then(() => generateJsonNewsFeed(graphql))
    .then(() => reporter.success("JSON news feed generated"))
    .then(() => generateCourseService())
    .then(() => reporter.success("Course service generated"))
}
