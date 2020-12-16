import React, { useEffect } from "react";
import { withFirebase } from "../../firebase";
import { getConfig } from "../../config";
import PropTypes from "prop-types";

function ActionTracker({ firebase, route }) {
  if (!getConfig("onTracking", false)) return <></>;


  /**
   * Initialized Session ID and page view id
   */
  useEffect(() => {
      firebase.auth.onAuthStateChanged((user) => {
        if (user) {
          var uid = user.uid;
          console.log('uid 222 :>> ', uid);
          // Add action Listener
          
          firebase.getMessageDocs().onSnapshot(
            {
              includeMetadataChanges: true,
            },
            function (doc) {
              const action = doc.data();
              console.log('doc 222:>> ', doc);
              console.log('doc data22222 :>> ', doc.data());
              
            });

        } 
      });

    return () => {
        var actionUnsubscribe = firebase.getMessageDocs().onSnapshot(function () {});
        actionUnsubscribe();
        console.log('actionUnsubscribe :>> ', actionUnsubscribe());
    };
  }, []);

  return <></>;
}
ActionTracker.propTypes = {
  firebase: PropTypes.object.isRequired,
};
export default withFirebase(ActionTracker);
