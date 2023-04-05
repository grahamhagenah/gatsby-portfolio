/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: 'Graham Hagenah',
    siteUrl: `https://grahamhagenah.com`,
    description: `Graham's web projects`
  },
  flags: {
    FAST_REFRESH: true
  },
  plugins: [
    'gatsby-plugin-styled-components',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-fix-fouc`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Barlow\:200,300,400,500,600,700,800`,
          `Roboto\:200,300,400,500,600,700,800`
        ],
        display: 'block'
      }
    },
    {
      // this is the name of the plugin you are adding
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'pgp8v8g9',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};