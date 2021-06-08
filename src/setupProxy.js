const {createProxyMiddleware} = require('http-proxy-middleware');
 
module.exports = function(app) {
  app.use('/api', createProxyMiddleware({ 
    target: 'http://localhost:8000',//后台服务器地址
    changeOrigin: true,
    pathRewrite: {
    '/': '',
    },}))
}