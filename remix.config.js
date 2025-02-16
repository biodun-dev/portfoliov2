/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    serverBuildTarget: "cloudflare-pages",
    server: "./server/index.js",
    ignoredRouteFiles: ["**/.*"],
    future: {
      v3_lazyRouteDiscovery: true
    }
  };
  