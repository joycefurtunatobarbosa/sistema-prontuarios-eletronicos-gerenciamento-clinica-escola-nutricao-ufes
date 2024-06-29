const { defineConfig } = require('@vue/cli-service')
// const { baseUrl } = require('../vue.config')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: [
      'all',
    ],
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  // publicPath: "Prontuarios_Eletronicos_CEN"
})
