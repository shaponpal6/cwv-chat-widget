import { uid, getCookie, setCookie } from "../../functions/helper";
import { browserInfo } from "./browserInfo";

export function VisitorTracking() {
  var state = {},
    pageViewId = 1 * new Date(),
    sessionId;

  /**
   * Initialized Session ID
   */
  function init() {
    sessionId = sessionStorage.getItem("dissectSessionId");
    setCookie("dissectPageViewId", pageViewId);
    if (!sessionId) {
      sessionId = uid();
      sessionStorage.setItem("dissectSessionId", sessionId);
    }
    state["sessionId"] = sessionStorage.getItem("dissectSessionId");
    state["currentPageViewId"] = getCookie("dissectPageViewId");
  }

  /**
   * Collect Tracking Data
   */
  function getTrackingData() {
    return browserInfo();
  }
}
