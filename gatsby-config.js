const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    title: 'Tech Blog',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-postcss-sass',
      options: {
        postCssPlugins: [autoprefixer()],
      },
    },
  ],
}
