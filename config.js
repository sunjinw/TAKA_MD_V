//#ENJOY BRO😍
// Credit: KERM|KgTech
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "diorrebero84@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Ch77a/TAKA_MD_V";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vark1I1AYlUR1G8YMX31";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vark1I1AYlUR1G8YMX31";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/vci8Frt.jpeg";
global.devs = "https://wa.me/237659079843 , https://wa.me/22665653323";
global.sudo = process.env.SUDO || "237659079843";
global.owner = process.env.OWNER_NUMBER || "22665653323";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/vci8Frt.jpeg,https://i.imgur.com/oG6RiCF.jpeg,https://i.imgur.com/uZLV84s.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kata-session.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTIONeyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMENIdTVRQk9BYlNFcnJ6TXpaYkxWOStuYjBmc0V2RFROZVdoRVdxOVBGTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ1lRUGp3elJBOUJYYUtWckJNRUlvbExLZUp1eVcweStiWFFVOHUvTG13VT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2T0hZMzg0TGI5czl6TUs0Vy9haHFYWWhBZVdpeVFIQ2U0dVVnc0hLSUVjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZR2VoR2FEL2dlZ0VXNlJFWmthRnFpY2lqdm03L3BPTTdUVVpLd0tLcFNrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldPU3BvODZCL3A1NkhvcTFrL1JKditIUjNCWUl5K1JDYTZXRW9rY2lZRnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpQMitnbFFmRnNvc3M4UUpCTkNlM0EzNUtjOTg1WFJwUTlELzQ1YVlSQ2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0hOSGhpNDR5QUtlQmVEdkxVVFhSa2JNMXlQQk1DS29mSzJRWitmT2RWQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY2dreGFIcVU4c2h5YUlvK1M3MUgzRG1JeXJ6SUx1cGFBZTZCVHNwVGlYaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhXNVdYSHB2Q0pQZEVhNXY5Q1hERXhLUGJUanJqUWk2TXBxVTNNcTdqdVZtR2xmNjNpdGk3VTFGY1hWdmtPYUFoUkFTSHYwOHZ4aWJWRk1GU3FEOGl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY2LCJhZHZTZWNyZXRLZXkiOiJldnh2UHF3bkFLclFMVDJMd0RTVFVZdVBGT1lHQzNwc3gvUWw1T3RzQVo4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIyNjY1NjUzMzIzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjZCMjBCRjY5MENGQ0U1NDA0RDczOEQ3MDM3QjI2RUY5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzE2ODk0NDh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjJCV1RTVkp2VEYyeTR5cjNiNmtOU2ciLCJwaG9uZUlkIjoiNDRlOGEzOGMtNTIyMS00ZDRmLWFhOTktZDQ2ZjMxNDg4OWVmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndobjZObUhPalQ2VWxhMXRWSGFOcHB4eEk1WT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGdGszekUwSnU0RE1uTk1rWEFOcWllTlM3Mlk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRkExUlZQQk0iLCJtZSI6eyJpZCI6IjIyNjY1NjUzMzIzOjEyQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOZkU0dWNIRU5mMzNia0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJGdGZLczVZejlDcTFrenM5UU1rWDNSU1UyM0xHY3dobVZONVFvenhVbTNBPSIsImFjY291bnRTaWduYXR1cmUiOiJzYUJpZU9rZEVnMzJwK2RsQ0IxUzl5cVNhV21SNEFtODlMLzM0dXhpK1JPZldTODBZUjNaYUhyQ2wvekZhTnNucjNoaHE2SXlTemhiMERGU0MxV1JCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoieWVVMDhXZXRBM3ZnU2t3czlnV1dmWjlIc21BdFpuRFE4azNTendpZ1JhQWxJZ0Y1UU01NzdSNnlhMW1ZR2dzV3ZVcUFxb21HZ3lFWThLN2NobVhkaUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjY2NTY1MzMyMzoxMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSYlh5ck9XTS9RcXRaTTdQVURKRjkwVWxOdHl4bk1JWmxUZVVLTThWSnR3In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMxNjg5NDQ1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUluViJ9 || "`BRAND PRODUCT OF ☞⌜TAKA_TECH⌝☜`",
  author: process.env.PACK_AUTHER || "꧁•༆$ℭ𝔥𝔯𝔦𝔰_𝔇𝔦𝔬𝔯🚹࿇꧂",
  packname: process.env.PACK_NAME || "TAKA MD",
  botname: process.env.BOT_NAME || "ᵏᵍ┘TAKA_𝙼𝙳_𝚅𖤐",
  ownername: process.env.OWNER_NAME || "☞⌜TAKA_TECH☜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "TAKA").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
