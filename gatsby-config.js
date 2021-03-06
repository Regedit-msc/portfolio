module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ay's Portfolio`,
        short_name: `Ayfolio`,
        start_url: `/`,
        background_color: ` #f5f4dc;`,
        theme_color: ` #000000`,
        display: `standalone`,
        icon: 'src/images/android-chrome-192x192.png',
        icon_options: {
          purpose: `maskable`,
        },
      },
    },
  ],
};
