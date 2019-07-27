module.exports = {
  siteMetadata: {
    title: "Gianluca Costa's Creations",
    description: "Gianluca Costa's website",
    motto: "Elegance always matters",
    url: "https://gianlucacosta.info"
  },

  plugins: [
    "gatsby-plugin-react-helmet",

    "gatsby-plugin-sass",

    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/markdown`
      }
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/data`
      }
    },

    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-prismjs"
          }
        ]
      }
    },

    "gatsby-transformer-json"
  ]
}
