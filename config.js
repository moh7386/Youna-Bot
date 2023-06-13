const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "Enter-MongoURI-HERE"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.github = 'https://github.com/SamPandey001/Secktor-Md'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '919628516236'
global.devs = '919628516236';
global.website = 'https://github.com/SamPandey001/Secktor-Md' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://raw.githubusercontent.com/SecktorBot/Brandimages/main/logos/SocialLogo%201.png'
module.exports = {
  botname: process.env.BOT_NAME || '𝐒𝐞𝐜𝐤𝐭𝐨𝐫 𝐁𝐨𝐭𝐭𝐨',
  ownername:process.env.OWNER_NAME || 'SamPandey001',
  sessionName: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUIveFc5TkRyT3MvWXRFTExRbVhVVFRRQ2pDZ3ZGc2Niek9mbHhEb2NHZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVlEzN3d6bjBSUm1yTHJORCtWMm15Vm1lTStjUFNpVW9tRmhkMTE1akZ3Zz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlRWxTUXYzVFlMeURYcmF0SHhOMGVXY0FtTUFVTGdSNmZtZGNiZHhJOTBJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFVnJUTXlMSDZNN3RSZ1hNNWZ2VVBtQ3hxVGtkL3RuRit4bHhOYThhRUZRPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVBeW1hZGpiM0hMYXkzd2Z1RGo2RXU5cmJZN0RIR1k3R2lsMzlETjVzWDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitYS0JjTTdaaXRDZVQ0RXBHbzlDUTRJTjY2WWJYTThrd1ArWjlGY2lkd0U9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVdCtMQ2xzVUlXdnpwL3R1MjZKUk5SbElpZ0lmQWNqU2hpMGN0RzJjbzBzUmNvTE9ibTUvTmhOd2NiRFFjUXV6SWJyR21ybWwzVzV6V2NsRllhd21EZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjQ0LCJhZHZTZWNyZXRLZXkiOiJlS3lrVnFSN0VmSWI3TEQvbVpCWENsbUFDOXd3MGhYQzR4R1pEcFFNTG1FPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNdW04TEVIRU9mWW5hTUdHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im1iYit2Y2cxSUIxeE15VlBPWTQxZXdlaS9iSzRUVDdBNnJqVjhWVmloUlU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlBjcmpKQ1RPREMwUzA4YU9xUjBhZ3RwU1NMaC80WEdIWHVDZ3lZc3VEZUE3TjFmVGdYMStTcFM5TmVqejFmRFNFemZQOUNMNFFoUm5MeHZLeU9EZ0R3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiI1T0hRRm5waU41ZCtxN3pITUh0MXlnMHlsdDZFK2tNVGFHeVZYcjVDMnk5ZTkvL1YyaWFJbklmc3dyWExyVitSdVMvVDdLci9MR1RjSUtSbnFDTXVEdz09In0sIm1lIjp7ImlkIjoiMTQwNDQwMDAwOTg6MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJJa3JhbSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxNDA0NDAwMDA5ODoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlptMi9yM0lOU0FkY1RNbFR6bU9OWHNIb3YyeXVFMCt3T3E0MWZGVllvVVYifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE2ODQ0OTk1NjN9',
  author: process.env.PACK_INFO.split(";")[0] || 'author', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'false',
  packname: process.env.PACK_INFO.split(";")[1] || 'Name',
  autoreaction: process.env.AUTO_REACTION || 'off',
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'false',
  antifake : process.env.FAKE_COUNTRY_CODE || '',
  readmessage: process.env.READ_MESSAGE || false,
  HANDLERS: process.env.PREFIX || ['.'],
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "flase",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  BRANCH: 'main',
  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || '',
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || 'OPENAI_KEY',
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'SECKTOR',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
