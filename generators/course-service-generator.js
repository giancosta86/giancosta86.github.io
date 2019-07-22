import path from "path"
import { saveToJson } from "../src/utils/fs-utils"
import allCourses from "../src/data/courses/all-courses"

const CourseServiceFile = path.resolve("public/courses.json")

export const generateCourseService = () =>
  saveToJson(CourseServiceFile, allCourses)
