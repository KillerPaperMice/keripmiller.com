/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import { anchorate } from "anchorate";

exports.onRouteUpdate = () => {
  anchorate({
    scroller: function(element) {
      if (!element) return false;
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      return true;
    }
  });
};
