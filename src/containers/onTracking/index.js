import React, { useContext, useState, useRef, useEffect } from "react";
import { withFirebase } from "../../firebase";
import config, { isExist, getConfig } from "../../config";
import PropTypes from "prop-types";
import { browserInfo } from "../../libs/tracking/browserInfo";
import { detect } from "detect-browser";
import { uid, getCookie, setCookie } from "../../functions/helper";

function OnTracking({ firebase }) {
  if (!getConfig("tracking", false)) return <></>;

  const [sessionId, setSessionId] = useState(
    sessionStorage.getItem("cwvChatSessionId")
  );
  const [pageViewId, setPageViewId] = useState(getCookie("cwvChatPageViewId"));

  /**
   * Initialized Session ID and page view id
   */
  useEffect(() => {
    const pageId = 1 * new Date();
    setCookie("cwvChatPageViewId", pageId);
    setPageViewId(pageId);
    if (!sessionId) {
      const sessionId = uid();
      sessionStorage.setItem("cwvChatSessionId", sessionId);
      setSessionId(sessionId);
    }
    
    if (sessionId && pageViewId) {
      let trackData = {};
      trackData["pageViewId"] = pageViewId;
      trackData["clientId"] = sessionId;
      trackData["lastUpdated"] = new Date().toISOString();
      const browser = getConfig("browserInfo", false) ? detect() : {};

      if (getConfig("locationInfo", false)) {
        const fatchData = fetch("https://get.geojs.io/v1/ip/geo.js")
          .then((response) => response.text())
          .then((result) => {
            // Track IP
            if (getConfig("ip", false))
              trackData["ip"] = result.match(/"ip":"([^"]+)"/)[1];
            //Track Country
            if (getConfig("country", false))
              trackData["country"] = result.match(/"country":"([^"]+)"/)[1];
            // Track City
            if (getConfig("city", false))
              trackData["city"] = result.match(/"city":"([^"]+)"/)[1];
            // Track Country Code
            if (getConfig("country_code", false))
              trackData["country_code"] = result.match(
                /"country_code":"([^"]+)"/
              )[1];
            // Track Longitude
            if (getConfig("longitude", false))
              trackData["longitude"] = result.match(/"longitude":"([^"]+)"/)[1];
            // Track latitude
            if (getConfig("latitude", false))
              trackData["latitude"] = result.match(/"latitude":"([^"]+)"/)[1];

              console.log('object', Date.now())

              // Save Data
            firebase.updateVisitorsListMap(sessionId, {
              ...trackData,
              ...browser,
            });
          });
      } else {
        //Save data
        firebase.updateVisitorsListMap(sessionId, {
          ...trackData,
          ...browser,
        });
      }
      console.log("track", { ...trackData, ...browser });
    }
          

    return () => {};
  }, []);

  // Get current active template.
  // const template = await firebase.remoteConfig.getAll();
  // console.log('template', template)

  // firebase.remoteConfig.defaultConfig = {
  //   app_super_awesome_feature: false,
  // };
  // firebase.remoteConfig
  //   .fetchAndActivate()
  //   .then(() => {
  //     let superAwesomeFeature = firebase.remoteConfig
  //       .getValue("app_super_awesome_feature")
  //       .asBoolean();
  //     let test_awesome_feature = firebase.remoteConfig.getValue(
  //       "test_awesome_feature"
  //     );
  //     console.log("test_awesome_feature>>>>>>>>>>>>>", test_awesome_feature);
  //     console.log(
  //       `[💪] We've Got the superAwesomeFeature flag as : ${superAwesomeFeature}, with type: ${typeof superAwesomeFeature}`
  //     );
  //     if (superAwesomeFeature) {
  //       console.log(`[🥳] Showing discount popup!`);
  //       $("#discountModal").modal();
  //     } else {
  //       console.log(`[😢] I didn't get any discounts yet ..`);
  //     }
  //   })
  //   .catch((err) => {
  //     console.log(`[🆘] Error in Paradise ! `);
  //     console.error(err);
  //   });

  return <></>;
}
OnTracking.propTypes = {
  firebase: PropTypes.object.isRequired,
};
export default withFirebase(OnTracking);
