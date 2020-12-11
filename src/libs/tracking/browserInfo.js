import {ipTracker} from './ipTracking'

/**
 * Track userAgent
 *
 * @return {name, version, page, screenX, screenY} 
 */
export function browserInfo() {
  var ua = navigator.userAgent,
    tem,
    M =
      ua.match(
        /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
      ) || [];
  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return { name: "IE", version: tem[1] || "" };
  }
  if (M[1] === "Chrome") {
    tem = ua.match(/\bOPR|Edge\/(\d+)/);
    if (tem != null) {
      return { name: "Opera", version: tem[1] };
    }
  }
  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, "-?"];
  if ((tem = ua.match(/version\/(\d+)/i)) != null) {
    M.splice(1, 1, tem[1]);
  }

   /**
   * Detect Device
   */
  function getOS() {
    var userAgent = window.navigator.userAgent,
      platform = window.navigator.platform,
      macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
      windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
      iosPlatforms = ["iPhone", "iPad", "iPod"],
      os = null,
      data = { desktop: {}, laptop: {}, mobile: {} };
  
    if (macosPlatforms.indexOf(platform) !== -1) {
      data["deviceType"] = 'Desktop';
      data["platform"] = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      data["platform"] = 'iOS';
      data["deviceType"] = 'Mobile';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {     
      data["platform"] = 'Windows';
      data["deviceType"] = 'Desktop';
    } else if (/Android/.test(userAgent)) {
      os = "Android";
      data["deviceType"] = 'Mobile';
      data["mobile"] = { os, platform };
    } else if (!os && /Linux/.test(platform)) {
      os = "Linux";
      data["desktop"] = { os, platform };
    }
  
    return data;
  }

  // console.log('ipTracker()',  ipTracker())
  
  return {
    name: M[0],
    version: M[1],
    page: window.location.href,
    screenX: window.screen.width,
    screenY: window.screen.height,
    referrer: document.referrer ?? window.location.href,
    platform: navigator.platform ,
    os: getOS(),
  };
}
