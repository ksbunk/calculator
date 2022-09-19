const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    proxy: 'https://localhost:5001'
  },
  outputDir: '../API/wwwroot',
  transpileDependencies: true
})
