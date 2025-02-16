import { createRequestHandler } from "@remix-run/netlify";

export default createRequestHandler({
  getLoadContext() {
    // Optional: Provide custom context to loaders
    return {};
  },
});
