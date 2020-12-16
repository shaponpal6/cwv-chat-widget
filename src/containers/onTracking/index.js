import React, { useContext, useState, useRef, useEffect } from "react";
import { withFirebase } from "../../firebase";
import config, { isExist, getConfig } from "../../config";
import PropTypes from "prop-types";
import { browserInfo } from "../../libs/tracking/browserInfo";
import { detect } from "detect-browser";
import { uid, getCookie, setCookie } from "../../functions/helper";

function OnTracking({ firebase }) {
  const collectionID = getConfig("collectionID", false) ? config.collectionID : 'cwvCollection-default';
  localStorage.setItem('cwvActiveSession', collectionID)
  if (!getConfig("tracking", false)) return <></>;


  // const [sessionId, setSessionId] = useState(
  //   sessionStorage.getItem("cwvChatSessionId")
  // );
  // const [pageViewId, setPageViewId] = useState(getCookie("cwvChatPageViewId"));

  /**
   * Initialized Session ID and page view id
   */
  useEffect(() => {
    const pageId = 1 * new Date();
    setCookie("cwvChatPageViewId", pageId);
    // setPageViewId(pageId);

    const addTrackingDataWithNewUser = (trackingID, data) => {
      if (firebase.getCurrentUser()) {
        console.log("User Signed in>>>", firebase.getUserID());
      } else {
        firebase.auth
          .signInAnonymously()
          .then(() => {
            console.log("Signed in success>>>");
            doTracking();
            if (firebase.getCurrentUser()) {
              var uid = firebase.getUserID();
              firebase.updateVisitorsListMap(trackingID, uid, data);
              console.log("User Signed in>>>", firebase.getUserID());
            }
          })
          .catch((error) => {
            console.log("signInAnonymously signin Error", error);
          });
        // firebase.auth.onAuthStateChanged((user) => {
        //   if (user) {
        //     var uid = user.uid;
        //     console.log('user', user)
        //     console.log('uid', uid)
        //     data['uid'] = uid;
        //     //firebase.updateVisitorsListMap(uid, data);
        //     const cursor = firebase.db.collection("visitors").doc("collectionId");
        //     // const cursor = firebase.db.collection("visitors").doc("collectionId").collection('tracking').doc(uid);
        //     cursor.set({
        //       "visitors": { [uid]: data }
        //     }, { merge: true });
        //   } else {
        //   }
        // });
      }
    };

    const doTracking = (action) => {
      if (!(action && action.hasOwnProperty("trackingID") && action.trackingID))
        return;
      let trackData = {};
      let trackingID = action.trackingID ?? collectionID;
      // trackData["pageViewId"] = pageViewId;
      // trackData["clientId"] = sessionId;
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

            console.log("trackData with IP", trackData);

            addTrackingDataWithNewUser(trackingID, {
              ...trackData,
              ...browser,
            });
          });
      } else {
        addTrackingDataWithNewUser(trackingID, { ...trackData, ...browser });
      }
    };

    if (getConfig("tracking", false)) {
      firebase.auth.onAuthStateChanged((user) => {
        if (user) {
          var uid = user.uid;
          console.log('uid :>> ', uid);
          // Add action Listener
          
          // if(route !=='chatWidget'){
          // firebase.getMessageDocs().onSnapshot(
          //   {
          //     includeMetadataChanges: true,
          //   },
          //   function (doc) {
          //     const action = doc.data();
          //     console.log('doc :>> ', doc);
          //     console.log('doc data :>> ', doc.data());
              
          //   });
          // }else{
          //   var actionUnsubscribe = firebase.getMessageDocs().onSnapshot(function () {});
          //   actionUnsubscribe();
          //   console.log('actionUnsubscribe :>> ', actionUnsubscribe());
          // }

        } else {
          // Add Tracking Listener
          firebase.getAction("tracking").onSnapshot(
            {
              includeMetadataChanges: true,
            },
            function (doc) {
              const action = doc.data();
              // check session and do tracking with collection
              if (
                action &&
                action.hasOwnProperty("sessionEnd") &&
                action.sessionEnd &&
                action.hasOwnProperty("status") &&
                action.status === "on"
              ) {
                console.log("doc>>>", doc);
                console.log("doc>>>", action);
                doTracking(action);
              }
            }
          );
        }
      });
    }

    // if (!sessionId) {
    //   const sessionId = uid();
    //   sessionStorage.setItem("cwvChatSessionId", sessionId);
    //   setSessionId(sessionId);
    // }

    return () => {
      var unsubscribe = firebase
        .getAction("tracking")
        .onSnapshot(function () {});
      unsubscribe();
    };
  }, []);

  console.log("firebase", firebase);

  // const remoteConfig = firebase.remoteConfig;
  // remoteConfig.settings = {
  //   fetchTimeMillis: 1, // One min before timing out while fetching
  //   minimumFetchIntervalMillis: 1, // very short interval for fields expiration.s
  // };
  // remoteConfig.defaultConfig = {
  //   cwv_tracking: { ID: 1, lastUpdated: "", type: "fatch_visitors" },
  // };
  // remoteConfig
  //   .fetchAndActivate()
  //   .then(() => {
  //     let superAwesomeFeature = remoteConfig.getValue("cwv_tracking");
  //     console.log("superAwesomeFeature>>", superAwesomeFeature);
  //     // console.log(`11111 >>> ${superAwesomeFeature}, with type: ${typeof superAwesomeFeature}`);
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
