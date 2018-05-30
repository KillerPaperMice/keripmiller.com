module.exports = {
  siteMetadata: {
    title: `Keri Can Code`
  },
  plugins: [
    `gatsby-plugin-react-next`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Monoton`,
          `source sans pro\:400` // you can also specify font weights and styles
        ]
      }
    }
  ]
};
