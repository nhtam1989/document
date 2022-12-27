module.exports = {
  siteMetadata: {
    title: `Document by nhtam@gmail.com`,
    sidebarConfig: {
      forcedNavOrder: [
        "/introduction",
        "/document",
        "/codeblock",
      ],
      ignoreIndex: true
    }
  },
  plugins: [{ resolve: `gatsby-theme-document` }]
};
