/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    serverBuildTarget: "node-cjs",
    server: "./server/index.js",
    ignoredRouteFiles: ["**/.*"],
    future: {
      v3_lazyRouteDiscovery: true
    }
  };
  