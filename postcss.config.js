module.exports = {
  plugins: [
    require("postcss-cssnext")({
      features: {
        autoprefixer: false,
        customProperties: {
          variables: {
            colorPrimary: "#51a9f2"
          }
        }
      }
    })
  ]
};
