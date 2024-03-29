const os = require('os');
const path = require('path');

const AgoraRtcEngine = require('agora-electron-sdk').default

const sdkLogPath = path.resolve(os.homedir(),"./test.log") 
const addOnPath = path.resolve(os.homedir(),"./addon.log") 

// 填入你的 App ID
const APPID = "";
// 填入你的 Token
const token = null;

let rtcEngine = new AgoraRtcEngine()

// 初始化 AgoraRtcEngine 实例
rtcEngine.initialize(APPID)

rtcEngine.setLogFile(sdkLogPath)
rtcEngine.setAddonLogFile(addOnPath)

rtcEngine.on('error', (err, msg) => {
  console.log("Error!")
})

// 填入的频道名必须与生成临时 Token 时填入的频道名一致
// 加入频道
rtcEngine.joinChannel(token, "aaa", null, 123456)
