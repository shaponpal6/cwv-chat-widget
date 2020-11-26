const converted = {
    ".wpcwv-messageWrapper": {
      margin: ["0", "2px 0px"],
      lineHeight: "20px",
      width: "auto",
      clear: "both",
      position: "relative",
      padding: "10px 15px",
      display: "flex",
      flexShrink: 0,
      marginTop: "9px"
    },
    ".wpcwv-avaterWrapper": {
      boxSizing: "border-box",
      margin: "0",
      padding: "0",
      color: ["rgba(0,0,0,.85)", "#fff"],
      fontSize: "14px",
      fontVariant: "tabular-nums",
      lineHeight: [1.5715, "32px"],
      listStyle: "none",
      fontFeatureSettings: '"tnum","tnum"',
      position: "relative",
      display: "inline-block",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textAlign: "center",
      verticalAlign: "middle",
      background: "#ccc",
      width: "32px",
      height: "32px",
      borderRadius: "50%"
    },
    ".wpcwv-avaterWrapper img": {
      display: "block",
      width: "100%",
      height: "100%",
      objectFit: "cover"
    },
    '.wpcwv-avaterWrapper img[src^="//"], .wpcwv-avaterWrapper img[src^=http]': {
      display: "block"
    },
    ".wpcwv-avaterWrapper figcaption": {
      color: "#999",
      fontSize: "60%",
      zIndex: 0
    },
    '.wpcwv-avaterWrapper img[src^="//"]+figcaption, .wpcwv-avaterWrapper img[src^=http]+figcaption': {
      display: "none"
    },
    ".wpcwv-messageContainer": { width: "100%", marginLeft: "5px" },
    ".wpcwv-messageHeader": { marginBottom: "5px", display: "block" },
    ".wpcwv-messageSender": { color: "#999", fontSize: "14px" },
    ".wpcwv-messageHeader time": { color: "#999", margin: "0 5px" },
    ".wpcwv-senderMessage": {
      color: "#333",
      background: "rgb(240, 242, 247)",
      fontSize: "1.6em",
      display: "inline-block",
      clear: "both",
      position: "relative",
      padding: "5px 10px",
      borderRadius: "3px",
      lineHeight: "1",
      wordBreak: "break-word",
      whiteSpace: "pre-line",
      overflowWrap: "break-word"
      
    },
    ".wpcwv-admin .wpcwv-senderMessage::after": {
      top: "0",
      left: "-9px",
      content: '""',
      position: "absolute",
      borderRight: "10px solid #E0F2F1",
      borderBottom: "15px solid transparent"
    },
    ".wpcwv-client": { float: "right" },
    ".wpcwv-client .wpcwv-messageContainer": {
      marginLeft: 0
    },
    ".wpcwv-client .wpcwv-senderMessage, .wpcwv-client .wpcwv-messageHeader": {
      width: '100%',
      textAlign: 'right'
    },
    
  }
export default converted;  