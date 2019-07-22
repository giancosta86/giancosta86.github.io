module.exports = {
  siteMetadata: {
    title: "Gianluca Costa's Creations",
    description: "Gianluca Costa's website",
    motto: "Elegance always matters",
    url: "https://gianlucacosta.info"
  },

  plugins: [
    "gatsby-plugin-sass",

    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/markdown`
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

    "gatsby-transformer-json",

    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/data`
      }
    },

    "gatsby-plugin-react-helmet"
  ]
}
