export async function ipTracker() {
  let response = await fetch("https://get.geojs.io/v1/ip/geo.js"), trackData = {};

  if (response.ok) { 
    let result = await response.text();
    console.log('result', result)
    trackData["ip"] = result.match(/"ip":"([^"]+)"/)[1];
        trackData["country"] = result.match(/"country":"([^"]+)"/)[1];
        trackData["city"] = result.match(/"city":"([^"]+)"/)[1];
        trackData["country_code"] = result.match(/"country_code":"([^"]+)"/)[1];
        trackData["longitude"] = result.match(/"longitude":"([^"]+)"/)[1];
        trackData["latitude"] = result.match(/"latitude":"([^"]+)"/)[1];
  } else {
    alert("HTTP-Error: " + response.status);
  }
  // let response2 = await fetch("https://get.geojs.io/v1/ip/geo.js")
  //     .then((response) => response.text())
  //     .then((result) => {
  //       console.log('result', result)
  //       console.log("country", result.match(/"country":"([^"]+)"/)[1]);
  //       console.log("object", typeof result);
  //       trackData["ip"] = result.match(/"ip":"([^"]+)"/)[1];
  //       trackData["country"] = result.match(/"country":"([^"]+)"/)[1];
  //       trackData["city"] = result.match(/"city":"([^"]+)"/)[1];
  //       trackData["timezone"] = result.match(/"timezone":"([^"]+)"/)[1];

  //       // Send Data with webhook
  //       window.localStorage.setItem("ipTracker", JSON.stringify(trackData));
  //     });
}

