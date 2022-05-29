const { defineConfig } = require('@vue/cli-service')
module.exports = {
  transpileDependencies: true,
  devServer: {
    proxy: 'https://socialout-develop.herokuapp.com/',
  }
}
