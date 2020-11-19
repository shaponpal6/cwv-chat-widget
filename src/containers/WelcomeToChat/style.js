const converted = {
    ".wpcwv-welcomeMessage": {
      backgroundColor: "rgb(255, 255, 255)",
      maxWidth: "340px",
      position: "absolute",
      bottom: "40px",
      boxShadow: "5px 5px 15px rgba(0,0,0, .3)",
      display: "flex",
      flexDirection: "column",
      zIndex: 9999,
      maxHeight: "calc(100% - 76px)",
      right: "48px",
      marginLeft: "20px",
      padding: "0px 30px 11px 24px",
      borderRadius: "10px",
      transition: "all .4s"
    },
    ".wpcwv-wmBody": {
      maxWidth: "290px",
      fontSize: "17px",
      position: "relative",
      overflowWrap: "break-word",
      whiteSpace: "pre-line",
      padding: "19px 38px 19px 0px",
      background: "rgb(255, 255, 255)",
      overflow: "hidden auto"
    },
    ".wpcwv-wmBody h2": {
      marginBottom: "10px",
      fontWeight: "bold",
      lineHeight: "1.4em",
      fontSize: "1.8em"
    },
    ".wpcwv-wmHeader": {
      cssFloat: "right",
      display: "block",
      position: "absolute",
      right: "25px",
      top: "0px",
      opacity: 0,
      transition: "0.8s"
    },
    ".wpcwv-welcomeMessage:hover .wpcwv-wmHeader": {
      opacity: 1,
      boxShadow: "5px 5px 25px rgba(0,0,0, .5)",
      transform: "translate(0, -3px)"
    },
    ".wpcwv-welcomeMessage:hover": {
      boxShadow: "5px 5px 25px rgba(0,0,0, .5)",
      transform: "translate(0, -3px)"
    },
    ".wpcwv-btnClose": { marginRight: "-20px", marginTop: "5px" }
  }

  export default converted;