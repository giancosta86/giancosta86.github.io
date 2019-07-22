require("@babel/register")({
  presets: ["@babel/env"]
})

module.exports = require("./gatsby-node-es6.js")
