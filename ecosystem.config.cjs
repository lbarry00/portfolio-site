module.exports = {
  apps: [
    {
      name: "portfolio-site",
      script: "./server.js",
      env: {
        NODE_ENV: "development",
        HTTP_PORT: 3000,
        HTTPS_PORT: 4000,
        USE_HTTPS: false
      },
      env_production: {
        NODE_ENV: "production",
        HTTP_PORT: 80,
        HTTPS_PORT: 443,
        USE_HTTPS: true
      }
    }
  ]
};
