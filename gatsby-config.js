module.exports = {
  siteMetadata: {
    title: `Document by nhtam@gmail.com`,
    sidebarConfig: {
      forcedNavOrder: [
        "/introduction",
        "/codeblock",
      ],
      ignoreIndex: true
    }
  },
  plugins: [{ resolve: `gatsby-theme-document` }]
};
