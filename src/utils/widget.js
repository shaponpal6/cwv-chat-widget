const converted = {
  ".wpcwv-container h1": {
    fontWeight: "bold",
    fontSize: "2em",
    lineHeight: "2em"
  },
  ".wpcwv-container h2": {
    fontWeight: "bold",
    fontSize: "1.8em",
    lineHeight: "1.8em"
  },
  ".wpcwv-container h4": {
    fontWeight: "bold",
    fontSize: "1.4em",
    lineHeight: "1.4em"
  },
  ".wpcwv-container p": {
    fontSize: "1.2em",
    fontWeight: 400,
    lineHeight: "1.4em"
  },
  ".wpcwv-theme": {
    color: "#fff",
    background: "linear-gradient(135deg, rgb(42, 39, 218), rgb(0, 204, 255))",
    boxShadow: "5px 5px 15px rgba(0,0,0, .3)"
  },
  ".wpcwv-container": { height: "100vh", width: "100%" },
  ".wpcwv-startButton": {
    position: "absolute",
    width: "112px",
    height: "140px",
    bottom: "20px",
    display: "flex",
    WebkitBoxAlign: "center",
    alignItems: "center",
    WebkitBoxPack: "center",
    justifyContent: "center",
    pointerEvents: "none",
    zIndex: 99999,
    right: "0px",
    left: "auto"
  },
  ".wpcwv-widgetButton": {
    width: "60px",
    height: "60px",
    backgroundSize: "130% 130%",
    position: "relative",
    willChange: "transform",
    borderRadius: "28px"
  },
  ".wpcwv-widgetWraper": {
    display: "flex",
    flexDirection: "column",
    width: "372px",
    maxHeight: "calc(100% - 47px)",
    height: "calc(100% - 47px)",
    position: "fixed",
    bottom: "20px",
    right: "20px",
    pointerEvents: "auto",
    overflow: "hidden",
    zIndex: 99999
  },
  ".wpcwv-chatWidget, .wpcwv-chatDashboard, .wpcwv-kbWraper": {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxHeight: "calc(100% - 47px)",
    height: "calc(100% - 47px)",
    borderRadius: "10px",
    pointerEvents: "auto",
    boxShadow: "5px 5px 15px rgba(0,0,0, .3)",
    overflow: "hidden",
    zIndex: 99999
  },
  ".cwv-shadow": {
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)"
  },
  ".wpcwv-button": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "initial",
    cursor: "pointer",
    borderWidth: "0px",
    borderStyle: "initial",
    borderColor: "initial",
    borderImage: "initial",
    outline: "none"
  },
  ".wpcwv-buttonDashboardClose": {
    float: "right",
    background: "#31f89b",
    padding: "2px 8px",
    color: "#fff",
    borderRadius: "4px",
    marginTop: "3px"
  },
  ".wpcwv-buttonPrimary": {
    backgroundColor: "dodgerblue",
    padding: "10px 25px",
    color: "white",
    borderRadius: "15px",
    textAlign: "center",
    transition: "all .2s",
    overflow: "auto",
    marginBottom: "15px",
    cursor: "pointer",
    fontSize: "1.8em",
    fontWeight: "bold",
    letterSpacing: ".1em"
  },
  ".wpcwv-buttonPrimary:hover": { backgroundColor: "SteelBlue" },
  ".wpcwv-aniSVGRight:hover svg": {
    animation: "cwvSVGRightFadeoutAnination 1s"
  },
  "@keyframes cwvSVGRightFadeoutAnination": {
    "0%, 100%": { opacity: 1, transform: "translateX(0%)" },
    "50%": { opacity: 0, transform: "translateX(100%)" },
    "70%": { opacity: 0, transform: "translateX(-100%)" }
  }
}
export default converted;