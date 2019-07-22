import fs from "fs"
import util from "util"

const writeFile = util.promisify(fs.writeFile)

export const saveToJson = (path, object) =>
  writeFile(path, JSON.stringify(object))

export const ensureDirectorySync = path => {
  try {
    fs.mkdirSync(path)
  } catch {
    //Just do nothing
  }
}
