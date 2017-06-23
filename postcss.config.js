module.exports = {
  plugins: [
    require("postcss-cssnext")({
      features: {
        customProperties: {
          variables: {
            colorPrimary: "#51a9f2"
          }
        }
      }
    })
  ]
};
