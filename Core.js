//Use latest fork to get latest features

process.on('uncaughtException', console.error)
require("./config")
const ytdl = require('ytdl-core')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, WAFlag } = require('@adiwajshing/baileys')
const zMiku = require("@adiwajshing/baileys")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
const path = require('path')
const os = require('os')
const { AnimeWallpaper } = require("anime-wallpaper")
 const { TiktokDownloader } = require('./lib/tiktokdl') 
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const hx = require("hxz-api")
const hxz = require('./lib/hxz-api')
const bdr = require('rumus-bdr')
const yogipw = require("tod-api")
const { color, bgcolor } = require('./lib/color')
const thiccysapi = require('textmaker-thiccy')
const toHur = require('@develoka/angka-terbilang-js')
const mathjs = require('mathjs')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const { EmojiAPI } = require("emoji-api")
const imgbbUploader = require('imgbb-uploader')
const primbon = new Primbon()
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require('./lib/limit.js');
const emoji = new EmojiAPI()
const { smsg, formatp, tanggal, GIFBufferToVideoBuffer, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const { aiovideodl } = require('./lib/scraper.js')
const cheerio = require ("cheerio");
const textpro = require('./lib/textpro')
const { detikNews } = require('./lib/detik')
const { wikiSearch } = require('./lib/wiki.js');
const { Gempa } = require("./lib/gempa.js");
const ms = require('ms')
 let { covid } = require('./lib/covid.js') 
const { jadwaltv }= require('./lib/jadwaltv');
const { MikuTiktok } = require('./lib/tiktokmikudl');
const maker = require('mumaker')
const xfarrapi = require('xfarr-api')
const { hentai } = require('./lib/scraper2.js')
let { msgFilter } = require('./lib/antispam')
const { mediafireDl } = require('./lib/mediafire.js')
const {
getRegisteredRandomId,
addRegisteredUser,
createSerial,
checkRegisteredUser
} = require('.register.js')

global.prem = require("./database/premium.json")
/*const command = ${prefix}
const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
 Miku.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${tik}%*` }, { quoted: m })

const cal = ['ja','vllt','nein']
					const tiik = cal[Math.floor(Math.random() * can.length)]
 Miku.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${tiik}%*` }, { quoted: m })
*/

const _ = require('lodash')
const yargs = require('yargs/yargs')
var low
try {
  low = require('lowdb')
} catch (e) {
  low = require('./lib/lowdb')
}

const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')
const { 
  yta, 
  ytv, 
  searchResult 
 } = require('./lib/ytdl')

let banUser = JSON.parse(fs.readFileSync('./database/banUser.json'));
let banchat = JSON.parse(fs.readFileSync('./database/banChat.json'));

 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/bounty.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/blood.json'))

global.prem = require("./lib/premium.js")
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile(`src/database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read()
  global.db.READ = false
  global.db.data = {
    users: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    sticker: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    ...(global.db || {})
}

let lolkey = global.lolhuman
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []

let pendaftar = JSON.parse(fs.readFileSync('./storage/user/user.json'))
let balance = JSON.parse(fs.readFileSync('./database/balance.json'))
let ssewa = JSON.parse(fs.readFileSync('./database/sewa.json'))
let ban = JSON.parse(fs.readFileSync('./database/ban.json'))
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))
const _autostick = JSON.parse(fs.readFileSync('./database/autostickpc.json'))
let _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/level.json'))
let limit = JSON.parse(fs.readFileSync('./database/limit.json'))
let setik = JSON.parse(fs.readFileSync('./src/sticker.json'))
let vien = JSON.parse(fs.readFileSync('./src/audio.json'))
let imagi = JSON.parse(fs.readFileSync('./src/image.json'))
let videox = JSON.parse(fs.readFileSync('./src/video.json'))
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
let _sewa = require("./lib/sewa");
const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'))

const isRegistered = checkRegisteredUser(m.sender)
const time = moment.tz('Asia/Kolkata').format('DD/MM HH:mm:ss')
const ucap = moment(Date.now()).tz('Asia/Kolkata').locale('id').format('a')
var buln = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var myHari = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var tgel = new Date();
var hri = tgel.getDate();
var bulnh = tgel.getMonth();
var thisHari = tgel.getDay(),
    thisDaye = myHari[thisHari];
var yye = tgel.getYear();
var syear = (yye < 1000) ? yye + 1900 : yye;
const jangwak = (hri + '' + buln[bulnh] + '' + syear)
const janghar = (thisDaye)

module.exports = Miku = async (Miku, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
const prefix = global.prefa
const isCmd = body.startsWith(prefix)
const notCmd = body.startsWith('')
const command = isCmd ? body.slice(1).trim().split(' ')[0].toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"

const botNumber = await Miku.decodeJid(Miku.user.id)
const isCreator = [botNumber, ...global.Owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = args.join(" ")
const from = m.chat
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
const groupMetadata = m.isGroup ? await Miku.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isUser = pendaftar.includes(m.sender)
const isBan = banUser.includes(m.sender)
const isBanChat = m.isGroup ? banchat.includes(from) : false
const isPremium = isCreator || isCreator || prem.checkPremiumUser(m.sender, premium);
const isRakyat = isCreator || global.rkyt.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const AntiLink = m.isGroup ? ntilink.includes(from) : false
const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
const antiWame = m.isGroup ? ntwame.includes(from) : false
const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
const isLeveling = m.isGroup ? _leveling.includes(from) : false
autoreadsw = true
const content = JSON.stringify(m.message)
const q = args.join(' ')

const isQuotedVideo = m.mtype === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = m.mtype === 'extendedTextMessage' && content.includes('audioMessage')




const mongoose = require("mongoose");


/*
/////////// -  DM chatbot (Delete this part to turn off DM Chat Bot) - //////////////////
if (!isCmd && !m.isGroup){
    const botreply = await axios.get(`http://api.brainshop.ai/get?bid=168758&key=Ci7eNhtxpxxDB5FQ&uid=[uid]&msg=[${budy}]`)
    txt = `${botreply.data.cnt}`
    m.reply(txt)
    }
//////////////////////////////////////////////////////////////////////////////////////
*/
_sewa.expiredCheck(Miku, sewa)

const reply = (teks) => {
            Miku.sendMessage(m.chat, { text: teks},{ quoted: m})
        }
        
        const replay = (teks) => {
            Miku.sendMessage(m.chat, { text: teks}, { quoted: m})
        }
        

function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
            }
            
		
if (m.message) {
addBalance(m.sender, randomNomor(574), balance)
console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }

        if (isCmd && !isUser){
			pendaftar.push(m.sender)
			fs.writeFileSync('./storage/user/user.json', JSON.stringify(pendaftar))
        } 

            const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
               }
            }

            const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
                }
            }

            const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
                }
             }

            const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
                }
            }

            const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
                }
            }

            const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/level.json', JSON.stringify(_level))
            }

            const getUserRank = (userId) => {
    let position = null
    let found = false
    _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === userId) {
            position = i
            found = true
        }
    })
    if (found === false && position === null) {
        const obj = { id: userId, xp: 0, level: 1 }
        _level.push(obj)
        fs.writeFileSync('./database/level.json', JSON.stringify(_level))
        return 99
    } else {
        return position + 1
    }
}

const xpGain = new Set()

const isGained = (userId) => {
    return !!xpGain.has(userId)
}

const addCooldown = (userId) => {
    xpGain.add(userId)
    setTimeout(() => {
        return xpGain.delete(userId)
    }, 60000) 
}

var levelRole = getLevelingLevel(m.sender)
        var role = 'Copper V'
        if (levelRole <= 5) {
            role = 'Copper IV'
        } else if (levelRole <= 10) {
            role = 'Copper III'
        } else if (levelRole <= 15) {
            role = 'Copper II'
        } else if (levelRole <= 20) {
            role = 'Copper I'
        } else if (levelRole <= 25) {
            role = 'Silver V'
        } else if (levelRole <= 30) {
            role = 'Silver IV'
        } else if (levelRole <= 35) {
            role = 'Silver III'
        } else if (levelRole <= 40) {
            role = 'Silver II'
        } else if (levelRole <= 45) {
            role = 'Silver I'
        } else if (levelRole <= 50) {
            role = 'Gold V'
        } else if (levelRole <= 55) {
            role = 'Gold IV'
        } else if (levelRole <= 60) {
            role = 'Gold III'
        } else if (levelRole <= 65) {
            role = 'Gold II'
        } else if (levelRole <= 70) {
            role = 'Gold I'
        } else if (levelRole <= 75) {
            role = 'Platinum V'
        } else if (levelRole <= 80) {
            role = 'Platinum IV'
        } else if (levelRole <= 85) {
            role = 'Platinum III'
        } else if (levelRole <= 90) {
            role = 'Platinum II'
        } else if (levelRole <= 95) {
            role = 'Platinum I'
        } else if (levelRole < 100) {
            role = 'Exterminator'
        }

        var levelRoles = getLevelingLevel(m.sender)
        var roles = 'Cop V'
        if (levelRoles <= 5) {
            roles = 'Cop IV'
        } else if (levelRoles <= 10) {
            roles = 'Cop III'
        } else if (levelRoles <= 15) {
            roles = 'Cop II'
        } else if (levelRoles <= 20) {
            roles = 'Cop I'
        } else if (levelRoles <= 25) {
            roles = 'Sil V'
        } else if (levelRoles <= 30) {
            roles = 'Sil IV'
        } else if (levelRoles <= 35) {
            roles = 'Sil III'
        } else if (levelRoles <= 40) {
            roles = 'Sil II'
        } else if (levelRoles <= 45) {
            roles = 'Sil I'
        } else if (levelRoles <= 50) {
            roles = 'Gol V'
        } else if (levelRoles <= 55) {
            roles = 'Gol IV'
        } else if (levelRoles <= 60) {
            roles = 'Gol III'
        } else if (levelRoles <= 65) {
            roles = 'Gol II'
        } else if (levelRoles <= 70) {
            roles = 'Gol I'
        } else if (levelRoles <= 75) {
            roles = 'Plat V'
        } else if (levelRoles <= 80) {
            roles = 'Plat IV'
        } else if (levelRoles <= 85) {
            roles = 'Plat III'
        } else if (levelRoles <= 90) {
            roles = 'Plat II'
        } else if (levelRoles <= 95) {
            roles = 'Plati I'
        } else if (levelRoles < 100) {
            roles = 'Exter'
        }
   
                        if (m.isGroup && isLeveling && isUser && Miku.public) {
                                const currentLevel = getLevelingLevel(m.sender)
                                const checkId = getLevelingId(m.sender)
                                try {
                                        addCooldown(m.sender)
                                        if (currentLevel === undefined && checkId === undefined) addLevelingId(m.sender)
                                        const amountXp = Math.floor(Math.random() * 10) + 200
                                        const requiredXp = 200 * (Math.pow(2, currentLevel) - 1)
                                        const getLevel = getLevelingLevel(m.sender)
                                        addLevelingXp(m.sender, amountXp)
                                        if (requiredXp <= getLevelingXp(m.sender)) {
                                        addLevelingLevel(m.sender, 1)
teks = `「 *User Level UP* 」\n\n@${m.sender.split("@")[0]} got leveled up!!\n\n*User XP*: ${getLevelingXp(m.sender)}\n*Level*: ${getLevel} -> ${getLevelingLevel(m.sender)}\n*Role*: ${role} \n\n`
Miku.sendMessage(m.chat, {text: teks, mentions:[m.sender]}, {quoted:m})
}

                        } catch (err) {
                                console.error("❌ An error occured !")
                        }
                }
                if (prefix && command) {
                                const currentLevel = getLevelingLevel(m.sender)
                                const checkId = getLevelingId(m.sender)
                                try {
                                        
                                        if (currentLevel === undefined && checkId === undefined) addLevelingId(m.sender)
                                        const amountXp = Math.floor(Math.random() * 10) + 30
                                        const requiredXp = 30 * (Math.pow(2, currentLevel) - 1)
                                        const getLevel = getLevelingLevel(m.sender)
                                        addLevelingXp(m.sender, amountXp)
                                        if (requiredXp <= getLevelingXp(m.sender)) {
                                        addLevelingLevel(m.sender, 1)
                                        }
                                        
                        } catch (err) {
                                console.error("❌ An error occured !")
                        }
                }

if (autoreadsw) {
		if (from === 'status@broadcast') {
		Miku.chatRead(from)
	}
	}

if (global.autoreadpmngc) {
if (command) {
await Miku.sendPresenceUpdate('composing', m.chat)
Miku.sendReadReceipt(from, m.sender, [m.key.id])}
}
/*
  if (global.autoReadGc) {
  if (m.isGroup) { Miku.sendReadReceipt(m.chat, m.sender, [m.key.id]) }
}
*/

  if (global.autoReadAll) { if (m.chat) { Miku.sendReadReceipt(m.chat, m.sender, [m.key.id]) }
  }

    if (global.autoRecord) { if (m.chat) { Miku.sendPresenceUpdate('recording', m.chat) }
}

  if (global.autoTyping) { if (m.chat) { Miku.sendPresenceUpdate('composing', m.chat) }
}

  if (global.available) { if (m.chat) { Miku.sendPresenceUpdate('available', m.chat) }
  }

const hariRaya = new Date('6 1, 2022 00:00:00')
			const sekarang = new Date().getTime();
			const Selisih = hariRaya - sekarang;
			const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
			const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
			const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
			const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
			const ultah = `${jhari}Day ${jjam}Hour ${mmmenit}Minute ${ddetik}Second`
			
async function hitungmundur(bulan, tanggal) { 
          let from = new Date(`${bulan} ${tanggal}, 2022 00:00:00`).getTime();
          let now = Date.now();
          let distance = from - now;
          let days = Math.floor(distance / (1000 * 60 * 60 * 24));
          let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          let seconds = Math.floor((distance % (1000 * 60)) / 1000);
          return days + "Day " + hours + "Hour " + minutes + "Minute " + seconds + "Second"
        }
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
let user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false
		if (!('templateDocument' in setting)) setting.templateDocument = true
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: false,
		templateGif: false,
		templateMsg: false,
		templateDocument: true,
	    }
} catch (err) {
console.error(err)
}

const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
 "orderMessage": {
"orderId": orid, 
"thumbnail": img, 
"itemCount": itcount, 
"status": "INQUIRY", 
"surface": "CATALOG", 
"orderTitle": title, 
"message": text, 
"sellerJid": sellers, 
"token": tokens, 
"totalAmount1000": ammount, 
"totalCurrencyCode": "IDR", 
}
}), { userJid: jid })
Miku.relayMessage(jid, order.message, { messageId: order.key.id})
}


const { 
addInventoriDarah, 
cekDuluJoinAdaApaKagaDiJson, 
addDarah, 
kurangDarah, 
getDarah 
}  = require('./storage/user/blood.js')
const { 
cekInventoryAdaAtauGak, 
addInventori,  
addBesi, 
addEmas, 
addEmerald,
addUmpan,
addPotion,
kurangBesi, 
kurangEmas, 
kurangEmerald, 
kurangUmpan,
kurangPotion,
getBesi, 
getEmas, 
getEmerald,
getUmpan,
getPotion
} = require('./storage/user/exchange.js')
const { 
addInventoriMonay, 
cekDuluJoinAdaApaKagaMonaynyaDiJson, 
addMonay,
kurangMonay, 
getMonay 
} = require('./storage/user/money.js')
const { 
addInventoriLimit, 
cekDuluJoinAdaApaKagaLimitnyaDiJson, 
addLimit, 
kurangLimit, 
getLimit 
} = require('./storage/user/limit.js')
const { 
cekDuluHasilBuruanNya, 
addInventoriBuruan, 
addIkan,
addAyam, 
addKelinci, 
addDomba, 
addSapi,
addGajah,
kurangIkan,
kurangAyam, 
kurangKelinci, 
kurangDomba, 
kurangSapi,
kurangGajah,
getIkan,
getAyam, 
getKelinci, 
getDomba,
getSapi,
getGajah
} = require('./storage/user/prey.js')
let DarahAwal =  global.rpg.darahawal
const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
const isCekDarah = getDarah(m.sender)
const isUmpan = getUmpan(m.sender)
const isPotion = getPotion(m.sender)
const isIkan = getIkan(m.sender)
const isAyam = getAyam(m.sender)
const isKelinci = getKelinci(m.sender)
const isDomba = getDomba(m.sender)
const isSapi = getSapi(m.sender)
const isGajah = getGajah(m.sender)
const isMonay = getMonay(m.sender)
const isLimit = getLimit(m.sender)
const isBesi = getBesi(m.sender)
const isEmas = getEmas(m.sender)
const isEmerald = getEmerald(m.sender)
const isInventory = cekInventoryAdaAtauGak(m.sender)
const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
const ikan = ['🐟','🐠','🐡']

const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const hariiini = moment.tz('Asia/Jakarta').format('DD MMMM YYYY')
const barat = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const tengah = moment.tz('Asia/Makassar').format('HH:mm:ss')
const timur = moment.tz('Asia/Jayapura').format('HH:mm:ss')
   
 

        let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]

if (!isRakyat) {
rkyt.push(m.sender.split("@")[0])
}

global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/CheemsBot/visits')
jumlahcmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/CheemsBot${moment.tz('Asia/Kolkata').format('DDMMYYYY')}/visits`)
jumlahharian = `${dataa.value}`
}
 

let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
reply(`
Pls try not to tag him!
He's in away from keyboard ${reason ? 'with reason ' + reason : 'no reason'}
During ${clockString(new Date - afkTime)}
`.trim())
}

if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
reply(`
Pls try not to tag him!
He's Offline ${user.afkReason ? ' after ' + user.afkReason : ''}
During ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}


if (m.mtype === 'groupInviteMessage') {
teks = `I can't join the group untill my *Owner* ask me to join. Type *-owner* to get owner number and ask him.`
sendOrder(m.chat, teks, "436764242454", fs.readFileSync('./Assets/pic10.jpg'), `${watermark}`, `${BotName}`, "916909137213@s.whatsapp.net", "AR7zJt8MasFx2Uir/fdxhkhPGDbswfWrAr2gmoyqNZ/0Wg==", "99999999999999999999")
}


if (AntiLink) {
    linkgce = await Miku.groupInviteCode(from)
    if (budy.includes(`https://chat.whatsapp.com/`)) {
    reply(`\`\`\`「  Antilink System  」\`\`\`\n\nNo action will be because you sent this group's link.`)
    } else if (isUrl(m.text)) {
    bvl = `\`\`\`「  *Antilink System*  」\`\`\`\n\nAdmin has sent a link so no action is taken.`
    if (isAdmins) return reply(bvl)
    if (m.key.fromMe) return reply(bvl)
    if (isCreator) return reply(bvl)
    kice = m.sender
    await Miku.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
    Miku.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka Has been removed for sending link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
    } else {
    }
    }
 
    if (antiWame)
    if (budy.includes(`wa.me`)) {
  if (!isBotAdmins) return
  bvl = `\`\`\`「 _'wa.me' PM link Detected!_  」\`\`\`\n\nLink sent by Admin so no action is taken!`
  if (isAdmins) return reply(bvl)
  if (m.key.fromMe) return reply(bvl)
  if (isCreator) return reply(bvl)
  kice = m.sender
  await Miku.groupParticipantsUpdate(m.chat, [kice], 'remove')
  Miku.sendMessage(from, {text:`\`\`\`「 'wa.me' PM link Detected! 」\`\`\`\n\n@${kice.split("@")[0]} Baka Has been removed for sending link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
  } else {
  }
  if (antiWame)
  if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 'wa.me' PM link Detected! 」\`\`\`\n\nLink sent by Admin so no action is taken!`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await Miku.groupParticipantsUpdate(m.chat, [kice], 'remove')
Miku.sendMessage(from, {text:`\`\`\`「 'wa.me' PM link Detected! 」\`\`\`\n\n@${kice.split("@")[0]}  Baka Has been removed for sending link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}

if (antiVirtex) {
    if (budy.length > 3500) {
    reply(`*Caution!*\n\n`.repeat(300))
    reply(`\`\`\`Virus Detected !!\`\`\`\n\nRevoving sender...`)
    if (!isBotAdmins) return reply(mess.botAdmin)
    Miku.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    }
    }


    if (AntiLink) {
        if (!isBotAdmins) return
        linkgce = await Miku.groupInviteCode(from)
        if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
        reply(`\`\`\`「  Antilink System  」\`\`\`\n\nNo action will be taken because you sent this group's link!`)
        } else if (isUrl(m.text)) {
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nAdmin has sent a group link so no action will be taken!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await Miku.groupParticipantsUpdate(m.chat, [kice], 'remove')
        Miku.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka has been removed for sending link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        }

        
        if (AntiLinkYoutubeVid)
        if (budy.includes("https://youtu.be/")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」」\`\`\`\n\nLink sent by Admin so no action will be taken!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await Miku.groupParticipantsUpdate(m.chat, [kice], 'remove')
        Miku.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka has been removed for sending Yt video link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkYoutubeChannel)
           if (budy.includes("https://youtube.com/")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nLink sent by Admin so no action will be taken!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await Miku.groupParticipantsUpdate(m.chat, [kice], 'remove')
        Miku.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka has been removed for sending Yt channel link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkInstagram)
           if (budy.includes("https://www.instagram.com/")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nLink sent by Admin so no action will be taken!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await Miku.groupParticipantsUpdate(m.chat, [kice], 'remove')
        Miku.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka has been removed for sending Instagram link in this group! No promotion is allowed!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkFacebook)
           if (budy.includes("https://facebook.com/")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nLink sent by Admin so no action will be taken!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await Miku.groupParticipantsUpdate(m.chat, [kice], 'remove')
        Miku.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka has been removed for sending Facebook link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkTelegram)
           if (budy.includes("https://t.me/")){
        if (AntiLinkTelegram)
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nLink sent by Admin so no action will be taken!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await Miku.groupParticipantsUpdate(m.chat, [kice], 'remove')
        Miku.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka has been removed for sending Telegram link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkTiktok)
           if (budy.includes("https://chat.whatsapp.com/${linkgce}")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nLink sent by Admin so no action will be taken!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await Miku.groupParticipantsUpdate(m.chat, [kice], 'remove')
        Miku.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka has been removed for sending Tiktok link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkTwitter)
           if (budy.includes("https://twitter.com/")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nLink sent by Admin so no action will be taken!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await Miku.groupParticipantsUpdate(m.chat, [kice], 'remove')
        Miku.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka has been removed for sending Twitter link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkAll)
           if (budy.includes("https://")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nLink sent by Admin so no action will be taken!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await Miku.groupParticipantsUpdate(m.chat, [kice], 'remove')
        Miku.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka has been removed for sending links in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        

if (m.mtype == 'viewOnceMessage') {
	if (!db.data.chats[m.chat].antionce) return
 teks = `「 *Anti ViewOnce Message* 」
${themeemoji} Name : ${m.pushName}
${themeemoji} User : @${m.sender.split("@")[0]}
${themeemoji} Clock : ${moment.tz('Europe/Berlin').format('HH:mm:ss')} 
${themeemoji} Date : ${moment.tz('Europe/Berlin').format('DD/MM/YYYY')}
${themeemoji} MessageType : ${m.mtype}`
Miku.sendTextWithMentions(m.chat, teks, m)
await sleep(500)
m.copyNForward(m.chat, true, { readViewOnce: true }).catch(_ => reply(`Maybe it's been opened by a bot`))
}


if (!Miku.public) {
if (!m.key.fromMe) return
}


setInterval(() => {
fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
}, 60 * 1000)

//reset limit every 24 hours
let cron = require('node-cron')
    cron.schedule('00 12 * * *', () => {
    let user = Object.keys(global.db.users)
    let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
    for (let jid of user) global.db.users[jid].limit = limitUser
    console.log('Reseted Limit')
    }, {
    scheduled: true,
    timezone: "Europe/Berlin"
    })

    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
      kuis = true
      jawaban = tebaklagu[m.sender.split('@')[0]]
      if (budy.toLowerCase() == jawaban) {
      await Miku.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `🎮 Guess The Song 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, `${global.BotName}`, m)
      delete tebaklagu[m.sender.split('@')[0]]
      } else reply('*Wrong answer!*')
      }

      if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
        kuis = true
        jawaban = tebakgambar[m.sender.split('@')[0]]
        if (budy.toLowerCase() == jawaban) {
        await Miku.sendButtonText(m.chat, [{ buttonId: 'guess picture', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `🎮 Guess The Picture 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, `${global.BotName}`, m)
        delete tebakgambar[m.sender.split('@')[0]]
        } else reply('*Wrong answer!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
          kuis = true
          jawaban = tebakkata[m.sender.split('@')[0]]
          if (budy.toLowerCase() == jawaban) {
          await Miku.sendButtonText(m.chat, [{ buttonId: 'guess word', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `🎮 Guess The Word 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, `${global.BotName}`, m)
          delete tebakkata[m.sender.split('@')[0]]
          } else reply('*Wrong answer!*')
          }
          
          if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
          kuis = true
          jawaban = caklontong[m.sender.split('@')[0]]
          deskripsi = caklontong_desk[m.sender.split('@')[0]]
          if (budy.toLowerCase() == jawaban) {
          await Miku.sendButtonText(m.chat, [{ buttonId: 'guess saying', buttonText: { displayText: 'Guess The Saying' }, type: 1 }], `🎮 Guess The Saying 🎮\n\nCorrect Answer 🎉\n*${deskripsi}*\n\nWant to play again? press the button below`, `${global.BotName}`, m)
          delete caklontong[m.sender.split('@')[0]]
          delete caklontong_desk[m.sender.split('@')[0]]
          } else reply('*Wrong answer!*')
          }
          
          if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
          kuis = true
          jawaban = tebakkalimat[m.sender.split('@')[0]]
          if (budy.toLowerCase() == jawaban) {
          await Miku.sendButtonText(m.chat, [{ buttonId: 'guess sentence', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `🎮 Guess The Sentence 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, `${global.BotName}`, m)
          delete tebakkalimat[m.sender.split('@')[0]]
          } else reply('*Wrong answer!*')
          }
          
          if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
          kuis = true
          jawaban = tebaklirik[m.sender.split('@')[0]]
          if (budy.toLowerCase() == jawaban) {
          await Miku.sendButtonText(m.chat, [{ buttonId: 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `🎮 Guess The Lyrics 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, `${global.BotName}`, m)
          delete tebaklirik[m.sender.split('@')[0]]
          } else reply('*Wrong answer!*')
          }
          
          if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
          kuis = true
          jawaban = tebaktebakan[m.sender.split('@')[0]]
          if (budy.toLowerCase() == jawaban) {
          await Miku.sendButtonText(m.chat, [{ buttonId: 'riddles', buttonText: { displayText: 'Riddles' }, type: 1 }], `🎮 Riddles 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, `${global.BotName}`, m)
          delete tebaktebakan[m.sender.split('@')[0]]
          } else reply('*Wrong answer!*')
          }
          
          if (('family100'+m.chat in _family100) && isCmd) {
          kuis = true
          let room = _family100['family100'+m.chat]
          let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
          let isSurender = /^((me)?give up|surr?ender|surrender)$/i.test(m.text)
          if (!isSurender) {
          let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
          if (room.terjawab[index]) return !0
          room.terjawab[index] = m.sender
          }
          let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
          let caption = `
          Answer the following questions :\n${room.soal}\n\n\nThere is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(some answers have spaces)` : ''}
          ${isWin ? `All Answers Answered` : isSurender ? 'Surrender!' : ''}
          ${Array.from(room.jawaban, (jawaban, index) => {
          return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
          }).filter(v => v).join('\n')}
          ${isSurender ? '' : `Perfect Player`}`.trim()
          Miku.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
          if (isWin || isSurender) delete _family100['family100'+m.chat]
          }
          
          
          this.suit = this.suit ? this.suit : {}
          let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
          if (roof) {
          let win = ''
          let tie = false
          if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|oke?|reject|dont want|later|no(pe)?can|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
          if (/^(reject|dont want|later|n|no(pe)?can)/i.test(m.text)) {
          Miku.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rejected the suit, the suit is canceled`, m)
          delete this.suit[roof.id]
          return !0
          }
          roof.status = 'play'
          roof.asal = m.chat
          clearTimeout(roof.waktu)
          
          Miku.sendText(m.chat, `Suit has been sent to chat
          @${roof.p.split`@`[0]} dan 
          @${roof.p2.split`@`[0]}

          Please choose a suit in the respective chat"
          Click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
          if (!roof.pilih) Miku.sendText(roof.p, `Please select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
          if (!roof.pilih2) Miku.sendText(roof.p2, `Please select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
          roof.waktu_milih = setTimeout(() => {
          if (!roof.pilih && !roof.pilih2) Miku.sendText(m.chat, `Both players don't want to play,\nSuit canceled`)
          else if (!roof.pilih || !roof.pilih2) {
          win = !roof.pilih ? roof.p2 : roof.p
          Miku.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} don't choose suit, game over`, m)
          }
          delete this.suit[roof.id]
          return !0
          }, roof.timeout)
          }
          let jwb = m.sender == roof.p
          let jwb2 = m.sender == roof.p2
          let g = /scissors/i
          let b = /rock/i
          let k = /paper/i
          let reg = /^(scisors|rok|peper)/i
          if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
          roof.pilih = reg.exec(m.text.toLowerCase())[0]
          roof.text = m.text
          reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
          if (!roof.pilih2) Miku.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
          }
          if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
          roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
          roof.text2 = m.text
          reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
          if (!roof.pilih) Miku.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
          }
          let stage = roof.pilih
          let stage2 = roof.pilih2
          
          if (roof.pilih && roof.pilih2) {
            clearTimeout(roof.waktu_milih)
            if (b.test(stage) && g.test(stage2)) win = roof.p
            else if (b.test(stage) && k.test(stage2)) win = roof.p2
            else if (g.test(stage) && k.test(stage2)) win = roof.p
            else if (g.test(stage) && b.test(stage2)) win = roof.p2
            else if (k.test(stage) && b.test(stage2)) win = roof.p
            else if (k.test(stage) && g.test(stage2)) win = roof.p2
            else if (stage == stage2) tie = true
            Miku.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}
            @${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
            @${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
            `.trim(), m, { mentions: [roof.p, roof.p2] })
            delete this.suit[roof.id]
            }
            }

            async function cerpen (category) {
              return new Promise((resolve, reject) => {
                  let title = category.toLowerCase().replace(/[()*]/g, "")
                  let judul = title.replace(/\s/g, "-")
                  let page = Math.floor(Math.random() * 5)
                  axios.get('http://cerpenmu.com/category/cerpen-'+judul+'/page/'+page)
                  .then((get) => {
                      let $ = cheerio.load(get.data)
                      let link = []
                      $('article.post').each(function (a, b) {
                          link.push($(b).find('a').attr('href'))
                      })
                      let random = link[Math.floor(Math.random() * link.length)]
                      axios.get(random)
                      .then((res) => {
                          let $$ = cheerio.load(res.data)
                          let hasil = {
                              title: $$('#content > article > h1').text(),
                              author: $$('#content > article').text().split('Short Story: ')[1].split('Category: ')[0],
                              kategori: $$('#content > article').text().split('Category: ')[1].split('\n')[0],
                              lolos: $$('#content > article').text().split('Passed moderation on: ')[1].split('\n')[0],
                              cerita: $$('#content > article > p').text()
                          }
                          resolve(hasil)
                      })
                  })
              })
          }

          if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
            await reply(`「 *Math Quiz* 」\n\n 🎉 Correct Answer 🎉\n\nWant to play again? send ${prefix}math mode`)
            delete kuismath[m.sender.split('@')[0]]
            } else reply('*Wrong answer!*')
            }

            if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
              let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
              let { text, mentionedJid } = hash
              let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
              userJid: Miku.user.id,
              quoted: m.quoted && m.quoted.fakeObj
              })
              messages.key.fromMe = areJidsSameUser(m.sender, Miku.user.id)
              messages.key.id = m.key.id
              messages.pushName = m.pushName
              if (m.isGroup) messages.participant = m.sender
              let msg = {
              ...chatUpdate,
              messages: [proto.WebMessageInfo.fromObject(messages)],
              type: 'append'
              }
              Miku.ev.emit('messages.upsert', msg)
              }
          


              const textImg = (teks) => {
                Miku.sendMessage(m.chat, { text :teks, }, {quoted: m, thumbnail: fs.readFileSync('./Assets/pic4.jpg')}) 
                }
                
               
             
                const ftoko = {
                key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
                },
                message: {
                "productMessage": {
                "product": {
                "productImage":{
                "mimetype": "image/jpeg",
                "jpegThumbnail": BotLogo
                },
                "title": `${global.OwnerName}`, 
                "description": `${global.BotName}`, 
                "currencyCode": "USD",
                "priceAmount1000": "2000",
                "retailerId": `${global.WaterMark}`,
                "productImageCount": 1
                },
                "businessOwnerJid": `0@s.whatsapp.net`
                }
                }
                }

                const fgi = {
                  key: { 
                        fromMe: false,
                       participant: `0@s.whatsapp.net`, ...(from ? 
                  { remoteJid: "916909137213-1613049930@g.us" } : {}) 
                               },
                  message: { 
                                "videoMessage": { 
                                "title": `Miku`,
                                "h": `Miku`,
                                'duration': '99999', 
                                'gifPlayback': 'true', 
                                'caption': `Sebastian`,
                                'jpegThumbnail': fs.readFileSync('./Assets/miku.mp4')
                                       }
                                      }
                                   } 

//FAKEREPLY TROLI
const ftroli = {
  key : {
  participant : '0@s.whatsapp.net'
  },
  message: {
  orderMessage: {
  itemCount : 1,
  status: 1,
  surface : 1,
  message: `${global.OwnerName}`, 
  orderTitle: `${global.BotName}`,
  thumbnail: BotLogo, //Pic
  sellerJid: '0@s.whatsapp.net'
  
  }
  }
  }
  //FAKEREPLY LOCATION
  const flokasi = {
  key : {
   participant : '0@s.whatsapp.net'
  },
  message: {
  locationMessage: {
  name: `${global.location}`,
  jpegThumbnail: BotLogo
  }
  }
  }
  //FAKEREPLY DOCUMENT
  const fdocs = {
  key : {
   participant : '0@s.whatsapp.net'
  },
  message: {
  documentMessage: {
  title: `${global.BotName}`, 
  jpegThumbnail: BotLogo
  }
  }
  }
  //FAKEREPLY VIDEO
  const fvideo = {
  key: { 
  fromMe: false,
  participant: `0@s.whatsapp.net`, ...(from ? 
  { remoteJid: "916909137213-1613049930@g.us" } : {}) 
  },
  message: { 
  "videoMessage": { 
  "title": `${global.BotName}`,
  "h": `${global.OwnerName}`,
  'seconds': '30', 
  'caption': `${global.WaterMark}`,
  'jpegThumbnail': BotLogo
  }
  }
  }
  //FAKEREPLY GROUPINVITE
  const fgclink = {
  "key": {
  "fromMe": false,
  "participant": "0@s.whatsapp.net",
  "remoteJid": "0@s.whatsapp.net"
  },
  "message": {
  "groupInviteMessage": {
  "groupJid": "916909137213-1616169743@g.us",
  "inviteCode": `${global.OwnerName}`,
  "groupName": `${global.BotName}`, 
  "caption":`${global.WaterMark}`, 
  'jpegThumbnail': BotLogo
  }
  }
  }
  //FAKEREPLY GIF
  const fgif = {
  key: { 
  fromMe: false,
  participant: `0@s.whatsapp.net`, ...(from ? 
  { remoteJid: "916909137213-1613049930@g.us" } : {}) 
  },
  message: { 
   "videoMessage": { 
   "title":`${global.BotName}`,
   "h": `${global.OwnerName}`,
   'seconds': "30", 
   'gifPlayback': 'true', 
   'caption': `${global.WaterMark}`,
   'jpegThumbnail': BotLogo
  }
  }
  } 
  //FAKEREPLY TEXT WITH THUMBNAIL
  const ftextt = {
  key: { 
  fromMe: false,
  participant: `0@s.whatsapp.net`, ...(from ? 
  { remoteJid: "916909137213-1613049930@g.us" } : {}) 
  },
  message: { 
  "extendedTextMessage": {
   "text":`${global.OwnerName}`,
  "title": `${global.BotName}`,
   'jpegThumbnail': BotLogo
  }
  } 
  }
  //FAKEREPLY VN
  const fvn = {
  key: { 
  fromMe: false,
  participant: `0@s.whatsapp.net`, ...(from ? 
  { remoteJid: "916909137213-1613049930@g.us" } : {}) 
  },
  message: { 
  "audioMessage": {
  "mimetype":"audio/ogg; codecs=opus",
  "seconds": "9999999999999999",
  "ptt": "true"
  }
  } 
  }
  l = 1
  monospace = '```'
  const timestampe = speed();
  const latensie = speed() - timestampe
  const levelMenu = getLevelingLevel(m.sender)
  const xpMenu = getLevelingXp(m.sender)
  const uangku = getBalance(m.sender, balance)
  const reqXp  = 200 * (Math.pow(2, getLevelingLevel(m.sender)) - 1)
  const jumlahUser = pendaftar.length
    if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
    if (!isInventory){ addInventori(m.sender) }
    if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }


    const menulist = `
    Konichiwa ${pushname} hallo👋. Ich bin ${global.BotName}, ein Bot entwickelt von : Sebastian um Ihre WhatsApp-Nutzung auf die nächste Stufe zu bringen.
        
       「 System Info 」
    
    Speed : ${latensie.toFixed(4)} miliseconds
    Up Time : ${runtime(process.uptime())}
    Bot Name : ${global.BotName}
    Owner Name : ${global.OwnerName}
    𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : *
    𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : ${Object.keys(global.db.users).length}
    
    
       「 User Info 」
    
    User Level: ${levelMenu}
    User XP : ${xpMenu} \ ${reqXp}
    User Role : ${role}
    
    
       「 User Bank 」
    
    User Balance : ${uangku}
    Iron : ${getBesi(m.sender)}
    Gold : ${getEmas(m.sender)}
    Emarald : ${getEmerald(m.sender)}
    Potion : ${getPotion(m.sender)}
    
    
    Type *-menu* or press any button below to start using *${global.BotName}*
    
    ©️ *${global.BotName}* All Rights Reserved by: *Sebastian*
    `
        const qtod = m.quoted? "true":"false"
        
        

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
/*
let mikuaudio = JSON.parse(fs.readFileSync('/Assets/Audio'));
	
for (let anju of mikuaudio){
				if (budy === anju){
					result = fs.readFileSync(`./Assets/Audio/baka.mp3`)
					Miku.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
					}
			}
        
*/

	
//Some special chat replies
	
 let smallinput = budy.toLowerCase()
    if (smallinput.includes('¢')) {
      reply (`Hello *${pushname}*, Ich bin *${BotName}*. Kann ich dir iirgendwie helfen ?`);
    } 

    if( smallinput.includes('¢') || smallinput.includes('a2') || smallinput.includes('¢') || smallinput.includes('¢')){
      reply (`PONG Speed : ${latensie.toFixed(3)} miliseconds.`);
    } 
   
    if (smallinput=='¢') {
      reply (`Hello *${pushname}*, I am *${BotName}*, a WhatsApp bot made by *Sebastian* and curbarently being hosted by *${OwnerName}*.  type  *${prefix}help* to get my full command list.`);
    }

    if (smallinput=='lol') {
        reply (`*XD*`)
    }

    if (smallinput=='user') {
        reply (`Alle User von diesem bot 𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : ${Object.keys(global.db.users).length}`)
    }
    
     if (smallinput=='test') {
	Miku.sendMessage(from, { react: { text: "😊" , key: m.key }})
        reply (`Ich arbeite schon !!`)
    }

    if (smallinput.includes('Guten Morgen ') || smallinput.includes('good morning')) {
      reply (`🌝was willst du jetzt 🌚`);
    }

    if (smallinput.includes('gute nacht')) {
      reply (`gute nacht ;)`);
    }

    if (smallinput.includes('¢')|| smallinput.includes('¢') || smallinput.includes('¥')) {
      reply (`Yai endlich wider da *${pushname}*`);
    }      
  


switch(command) {


case 'me': case 'profile': case 'p': case 'm':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
     

     var flob = await getBuffer(picak+'User Profile')
     var bio= await Miku.fetchStatus(m.sender)
     var bioo = bio.status
     const adn= isAdmins? "True":"False"
     
     try {
        
        pfp=await Miku.profilePictureUrl(m.sender, 'image')
    
          } catch (e) {
     
      pfp ='https://wallpapercave.com/wp/wp10524580.jpg'
    }

     const profilexx = `*「  Profile Info  」*\n\n*User Name* : ${pushname}\n*Bio* : ${bioo}\n*Group Admin Status* : ${adn}\n*Level* : ${levelMenu}\n*Exp* : ${xpMenu} out of ${reqXp}\n*Role* : ${role}`
 


let buttonspro = [
    {buttonId: `${prefix}soulmate`, buttonText: {displayText: 'Your Soulmate'}, type: 1}
    ]
            let buttonMessage = {
                image: { url: pfp },
                caption: profilexx,
                footer: `${BotName}`,
                buttons: buttonspro,
                headerType: 4
            }
        Miku.sendMessage(m.chat,buttonMessage,{quoted:m})
        	
            break

case 'register':
                if (isRegistered) return reply('Du bist bereits registriert')
                if (!q.includes('|')) return reply('Falsches Format!')
                const namaUser = q.substring(0, q.indexOf('|') - 0)
                const umurUser = q.substring(q.lastIndexOf('|') + 1)
                const serialUser = createSerial(20)
                if(isNaN(umurUser)) return reply('Das Alter muss eine Zahl sein!!')
                if (namaUser.length >= 30) return m.reply(`Warum ist dein Name so lang, es ist ein Name oder ein Zug`)
                if (umurUser > 100) return m.reply(`your age is too  old maximum 100 years`)
                if (umurUser < 6) return m.reply(`your age is too young minimum 6 years`)
				mzd = `Sie haben sich mit den folgenden Informationen registriert:\n\n⭔ Name : ${namaUser}\n⭔ Alter : ${umurUser}\n⭔ Nummer : wa.me/${m.sender.split("@")[0]}\n⭔ ? : ${barat}\n⭔ ID : ${serialUser}`
               zharzx = fs.readFileSync('./media/image/reg.jpg')
                veri = m.sender
                if (!m.isGroup) {
                    addRegisteredUser(m.sender, namaUser, umurUser, serialUser)
                    Miku.sendMessage(m.chat, {image: zharzx, caption: mzd}, {quoted: m})
                    
                } else {
                    addRegisteredUser(m.sender, namaUser, umurUser, serialUser)
                    Miku.sendMessage(m.chat, {image: zharzx, caption: mzd}, {quoted: m})
                    
                }
    reply(` Du wurdest erfolgreich Registert , Vielen Dank! `)
break

  case 'registercheck': case 'checkregister':
  if (isBan) return reply(mess.banned )
  if (isBanChat) return reply(mess.bangc)
  reply(` *Deine Registrierten Daten sind:*\n\n_Name:_ ${namaUser}\n\n_Alter:_ ${umurUser}\n\n_Nummer:_ wa.me/${m.sender.split("@")[0]}\n\n_:?_ ${barat}\n\n_ID :_ ${serialUser}\n\n Das sind alle von dir eingetragenen Daten !`)
break

    /*
case 'addprem':
				if (!isCreator) return m.reply(mess.owner)
				{ q, args } {
				if (args.length < 2)
				return m.reply(
				`Penggunaan :\n*#addprem* @tag waktu\n*${prefix}addprem* nomor waktu\n\nContoh : #addprem @tag 30d`
				);
				if (m.mentionedJid.length !== 0) {
				for (let i = 0; i < m.mentionedJid.length; i++) {
				prem.addPremiumUser(m.mentionedJid[0], args[1], isPremium);
						}
				Miku.sendMessage(m.chat, { text: "Sukses Premium" }, { quoted: fkontak });
					} else {
				prem.addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
				Miku.sendMessage(m.chat, { text: "Sukses Via Nomor" }, { quoted: fkontak });
						}
					}
break

case 'delprem':
				if (!isCreator) return m.reply(mess.owner)
				{ q, args, arg } {
				if (args.length < 1) return reply(`Penggunaan :\n*${prefix}delprem* @tag\n*#delprem* nomor`);
				if (m.mentionedJid.length !== 0) {
					for (let i = 0; i < m.mentionedJid.length; i++) {
						premium.splice(prem.getPremiumPosition(m.mentionedJid[i], isPremium), 1);
						fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
					}
					Miku.sendMessage(m.chat, { text: "Sukses Delete" }, { quoted: fkontak });
				} else {
				premium.splice(prem.getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
				fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
				Miku.sendMessage(m.chat, { text: "Sukses Via Nomer" }, { quoted: fkontak });
				}
				}
break

case 'listprem': {
			if (!isCreator) return m.reply(mess.owner)
			let data = require("./database/premium.json")
			let txt = `*------「 LIST PREMIUM 」------*\n\n`
                    for (let i of data) {
                txt += `*Nomer : ${i.id}*\n*Expired : ${i.expired} Second*\n\n`
                }
            m.reply(txt)
			}
break
  
case'slot': case 'spin': {
    if (isBan) return replay(mess.banned);
    if (isBanChat) return replay(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    var today = new Date();
if (today.getDay() == 6 || today.getDay() == 5 || today.getDay() == 0){
    if (text == 'help') return replay(`*1:* Use ${prefix}slot to play\n\n*2:* You must have 💎100 in your wallet\n\n*3:* If you don't have money in wallet then withdraw from your bank\n\n*4:* If you don't have money in your bank too then use economy features to gain money`)
    if (text == 'money') return replay(`*1:* Small Win --> +💎20\n\n*2:* Small Lose --> -💎20\n\n*3:* Big Win --> +💎100\n\n*4:* Big Lose --> -💎50\n\n*5:* 🎉 JackPot --> +💎1000`)
    const fruit1= ["🥥", "🍎", "🍇"]
    const fruit2 = ["🍎", "🍇", "🥥"]  
    const fruit3 = ["🍇", "🥥", "🍎"]         
    const fruit4 = ["🍇", "🥥", "🍎"]
    const lose = ['*You suck at playing this game*\n\n_--> 🍍-🥥-🍎_', '*Totally out of line*\n\n_--> 🥥-🍎-🍍_', '*Are you a newbie?*\n\n_--> 🍎-🍍-🥥_']
    const smallLose = ['*You cannot harvest coconut 🥥 in a pineapple 🍍 farm*\n\n_--> 🍍>🥥<🍍_', '*Apples and Coconut are not best Combo*\n\n_--> 🍎>🥥<🍎_', '*Coconuts and Apple are not great deal*\n\n_--> 🥥>🍎<🥥_']
    const won = ['*You harvested a basket of*\n\n_--> 🍎+🍎+🍎_', '*Impressive, You must be a specialist in plucking coconuts*\n\n_--> 🥥+🥥+🥥_', '*Amazing, you are going to be making pineapple juice for the family*\n\n_--> 🍍+🍍+🍍_']             
    const near = ['*Wow, you were so close to winning pineapples*\n\n_--> 🍎-🍍+🍍_', '*Hmmm, you were so close to winning Apples*\n\n_--> 🍎+🍎-🍍_']          
    const jack = ['*🥳 JackPot 🤑*\n\n_--> 🍇×🍇×🍇×🍇_', '*🎉 JaaackPooot!*\n\n_--> 🥥×🥥×🥥×🥥_', '*🎊 You Just hit a jackpot worth 💎1000*']
    const user = m.sender
    const cara = "cara"
    const k = 100
    const balance1  = await eco.balance(user, cara)
    
    if (k > balance1.wallet) return replay(`You are going to be spinning on your wallet, you need at least 💎100`);
    const f1 = fruit1[Math.floor(Math.random() * fruit1.length)];
    const f2 = fruit2[Math.floor(Math.random() * fruit2.length)];
    const f3 = fruit3[Math.floor(Math.random() * fruit3.length)];
    const f4 = fruit4[Math.floor(Math.random() * fruit4.length)];
    const mess1 = lose[Math.floor(Math.random() * lose.length)];
    const mess2 = won[Math.floor(Math.random() * won.length)];
    const mess3 = near[Math.floor(Math.random() * near.length)];
    const mess4 = jack[Math.floor(Math.random() * jack.length)];
    const mess5 = smallLose[Math.floor(Math.random() * smallLose.length)];
    
    if ((f1 !== f2) && f2 !== f3){
       const deduct1 = await eco.deduct(user, cara, 50);
              replay(`${mess1}\n\n*Big Lose -->* _💎50_`)
    }
    else if ((f1 == f2) && f2 == f3){
       const give1 = await eco.give(user, cara, 100); 
             replay(`${mess2}\n*_Big Win -->* _💎100_`)
    }
    else if ((f1 == f2) && f2 !== f3){
       const give2 = await eco.give(user, cara, 20);
             replay(`${mess3}\n*Small Win -->* _💎20_`)
    }
    else if ((f1 !== f2) && f1 == f3){
       const deduct2 = await eco.deduct(user, cara, 20);
             replay(`${mess5}\n\n*Small Lose -->* _💎20_`)
    }
    else if ((f1 !== f2) && f2 == f3){
       const give4 = eco.give(user, cara, 20); 
             replay(`${mess3}\n\n*Small Win -->* _💎20_`)
    }
    else if (((f1 == f2) && f2 == f3) && f3 == f4){
       const give5 = eco.give(user, cara, 1000);
            replay(`${mess4}\n\n_🎊 JackPot --> _💎1000_`)
    }
    else { 
            replay(`Do you understand what you are doing?`)
    }
 }
 else{
        replay(`*You can only play this game during weekends*\n\n*🌿 Friday*\n*🎏 Saturday*\n*🎐 Sunday*`)
 }
}
break
*/
/*
case 'ttc': case 'ttt': case 'tictactoe': {
    if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
    let TicTacToe = require("./lib/tictactoe")
    this.game = this.game ? this.game : {}
    if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return replay(`You Are Still In The Game`)
    let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
    if (room) {
    reply('Partner found!')
    room.o = m.chat
    room.game.playerO = m.sender
    room.state = 'PLAYING'
    let arr = room.game.render().map(v => {
    return {
    X: '❌',
    O: '⭕',
    1: '1️⃣',
    2: '2️⃣',
    3: '3️⃣',
    4: '4️⃣',
    5: '5️⃣',
    6: '6️⃣',
    7: '7️⃣',
    8: '8️⃣',
    9: '9️⃣',
    }[v]
    })
    let str = `Room ID: ${room.id}
${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}
Waiting @${room.game.currentTurn.split('@')[0]}
Type *surrender* to surrender and admit defeat`
    if (room.x !== room.o) await Miku.sendText(room.x, str, m, { mentions: parseMention(str) } )
    await  Miku.sendText(room.o, str, m, { mentions: parseMention(str) } )
    } else {
    room = {
    id: 'tictactoe-' + (+new Date),
    x: m.chat,
    o: '',
    game: new TicTacToe(m.sender, 'o'),
    state: 'WAITING'
    }
    if (text) room.name = text
    reply('Waiting For Partner' + (text ? ` Type The Command Below ${prefix}${command} ${text}` : ''))
    this.game[room.id] = room
    }
    }
    break	
*/    
		

case 'banchat': case 'bangroup':{
if (isBan) return reply(mess.banned)	 			
if (!isCreator) return replay(mess.botowner)
if (args[0] === "on") {
if (isBanChat) return replay('This Group is Already Banned from using me!')
banchat.push(from)
replay('This Group has been banned from using me!')
var groupe = await Miku.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Miku.sendMessage(from, {text: `\`\`\`「 Notice 」\`\`\`\n\nThis group is banned from using bot. So, here nobody can use me anymore!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!isBanChat) return replay('This Group is Already Banned from using me!')
let off = banchat.indexOf(from)
banchat.splice(off, 1)
replay('This Group has been *unbanned* from using me!')
} else {
  let buttonsntnsfw = [
  { buttonId: `${prefix}bangroup on`, buttonText: { displayText: 'Ban' }, type: 1 },
  { buttonId: `${prefix}bangroup off`, buttonText: { displayText: 'Unban' }, type: 1 }
  ]
  await Miku.sendButtonText(m.chat, buttonsntnsfw, `Please choose any Button below.\n\n *On / Off*`, `${global.BotName }`, m)
  }
  }
  break




case 'nsfwmenu':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!AntiNsfw) return reply(mess.nonsfw)
        reply(` *━━━〈  📛 NSFW Menu 📛  〉━━━*\n\n ${prefix}ass\n${prefix}cum\n${prefix}glasses\n${prefix}pussy\n${prefix}yuri\n${prefix}loli\n${prefix}blonde\n${prefix}tree\n${prefix}food\n${prefix}nude\n${prefix}sex\n${prefix}foxgirl\n${prefix}twogirls\n${prefix}genshin\n${prefix}bed\n${prefix}schooluniform\n${prefix}twogirls\n${prefix}dress\n${prefix}horns\n${prefix}blowjobgif\n${prefix}hentaivideo\n${prefix}trap\n${prefix}hneko\n${prefix}hwaifu\n\nversuche den befehl mal mit (${prefix}gig (befehl) )`)
    break

case 'reaction': case 'react': case 'reactions': case 'r':
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)
            reply(` *━━━〈  📍 Reactions 📍  〉━━━*\n\n${prefix}bonk\n${prefix}cry\n${prefix}bully\n${prefix}cuddle\nhug\n${prefix}kiss\n${prefix}lick\n${prefix}pat\n${prefix}smug\n${prefix}yeet\n${prefix}blush\n${prefix}smile\n${prefix}wave\n${prefix}highfive\n${prefix}handhold\n${prefix}nom\n${prefix}glomp\n${prefix}bite\n${prefix}slap\n${prefix}kill\n${prefix}happy\n${prefix}wink\n${prefix}poke\n${prefix}dance\n${prefix}cringe`)
        break   
    
case 'p':
case 'a':
  if (isBan) {
    return reply(mess.banned);
  }	 			
  if (isBanChat) {
    return reply(mess.bangc);
  }
 Miku.sendMessage(from, { react: { text: "👥️" , key: m.key }})
  reply(`*「 System Info 」*\n\nSpeed: ${latensie.toFixed(4)}ms
            
Uptime: ${runtime(process.uptime())}

Bot Name: ${global.BotName}
                
Owner Name: ${global.OwnerName}
		
Total Users: ${Object.keys(global.db.users).length}`);
  break;



        break
		
		
/*case 'schäm': case 'schem': case 'scham': case 'sch':
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)
            reply(`${pushname} geht in die ecke und schämt sich `)
        break
        */
     
case 'ping': case 'a2': case 'p': case 'a': case 'a3': case 'aping': case 'ping1': case 'p1': case 'p2': case 'p3':
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)
            reply(` *「 System Info 」*
	    
                Speed : ${latensie.toFixed(4)}		
                Up Time : ${runtime(process.uptime())}		
                Bot Name : ${global.BotName}		
                Owner Name : ${global.OwnerName}		
		            𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : ${Object.keys(global.db.users).length}		
                Session ID: *${global.sitzung}* `)	
        break             
	
case 'uptime': case 'ut': case 'oz': case 'onlinezeit':
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)
            reply(` Online : ${runtime(process.uptime())} `)
break
		
case 'online':
        if (isBan) return reply(mess.banned)
        if (isBanChat) return reply(mess.bangc)
            reply(` Hi *${pushname}* , ich bin derzeit online,
	            Ich bin auch online seit:
		    ${runtime(process.uptime())} `)
break 
		
case 'skript': case 'script': case 'sc': case 'sk':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
if (!isCreator) return replay(mess.botowner)
reply(` Den Skript des Bots findest du hier:\n${global.skript} `)		
break

/*
case 'ownergruppen': case 'teamgruppen': case 'og': case 'ow': case 'tgr':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
if (!isCreator) return replay(mess.botowner)
reply (` Meine Ownergruppen:\n\nMkM Ankündigsgruppe:\n${global.ankundigung}\n\nChatgruppe:\n${global.chatgr}\nSupport:\n${global.supportgrp}\nMkM Werbegruppe:\n${global.werbunggr}\n\nMkM NSFW-Gruppe:\n${global.nsfwgr}\n\nMkM Bewerbungen:\n${global.bewerbunggrp}\n\nMkM Test-1:\n${global.test1}\n\nMkM Test-2:\n${global.test2}\n\nAnime-Family:\n${global.animefchatgrp} `)
break
		
case 'chatgruppe': case 'chatgrp':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
if (!isCreator) return replay(mess.botowner)
reply(` Chatgruppe:\n${global.chatgr} `)		
break
		
case 'supportgruppe': case 'supgrp':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
reply(`MkM,Miku Supportgruppe:\n${global.support} `)	
break
		
case 'werbegruppe': case 'werbegrp':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
reply(`MkM Werbegruppe:\n${global.werbunggr} `)
break
		
case 'nsfwgruppe': case 'nsfwgrp':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
if (!isCreator) return replay(mess.botowner)
if (!isRegistered) return reply (global.register)
reply(`MkM NSFW-Gruppe:\n${global.nsfwgr} `)		
break
		
case 'bewerbunggruppe': case 'bewerbegruppe': case 'bewerbunggrp': case 'teamanfragegrp': case 'teambewerbunggruppe': case 'teambewerbunggrp': case 'teamanfragegruppe':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
reply(`MkM Bewerbungen:\n${global.bewerbung} `)		
break
		
case 'test1gruppe': case 'test1grp': case 'botest1grp': case 'bottest1gruppe':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
reply(`MkM Test-1:\n${global.test1} `)		
break
		
case 'test2gruppe': case 'test2grp': case 'botest2grp': case 'bottest2gruppe':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
if (!isCreator) return replay(mess.botowner)
reply(`MkM Test-2:\n${global.test2} `)
break
		
case 'teamgruppe': case 'teamgrp':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
if (!isCreator) return replay(mess.botowner)
reply(` MkM-Teamgruppe:\n${global.teamgr} `)
break
		
case 'mikuontop': case 'mikuot':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
if (!isCreator) return replay(mess.botowner)
reply(` Mikuontopgruppe:\n${global.mikuot} `)
break
		
case 'betatest': case 'botbetatest': case 'bbt':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
if (!isCreator) return replay(mess.botowner)
reply(` MkM,Miku_Beta-Testgruppe:\n${global.betatest} `)
break

  case 'promoteme':
  if (isBan) return reply(mess.banned)
  if (isBanChat) return reply(mess.bangc)
  if (!isCreator) return reply(mess.botowner)
  reply(` ${prefix}promote ${wa.me.split('@')[0]} `)
  break
    
case 'botsgruppe': case 'botsgrp':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
if (!isCreator) return replay(mess.botowner)
reply(` MkM-Botsgruppe:\n${global.botsgr} `)
break

case 'suprqgrp': case 'supportanfragegruppe': case 'supportrequestgruppe': case 'suprequestgrp':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
if (!isCreator) return replay(mess.botowner)
reply(` MkM-SupportAnfragegruppe:\n${global.supportanfragegr} `)
break
		
case 'commandgrp': case 'commandsgrp': case 'befehlgruppe': case 'mcgrp': case 'mikucgrp':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
if (!isCreator) return replay(mess.botowner)
reply(` MkM-Commandgruppe:\n${global.mikucommand} `)
break

case 'ochatgrp': case 'ownerchatgrp': case 'ownerchatgruppe':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
if (!isCreator) return replay(mess.botowner)
reply(` MkM-OwnerChatgruppe:\n${global.ownerchatgr} `)
break
		
case 'ideengrp': case 'ideengruppe': case 'ideagrp':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
if (!isCreator) return replay(mess.botowner)
reply(` MkM-Ideen:\n${global.ideen} `)
break
		
case 'animechatgrp': case 'animechat': case 'animechatgruppe':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
reply(` Anime-Chatgruppe:\n\n${global.animefchatgrp} `)
break
		
case 'Umfragegr': case 'Umfragegrp': case 'Umfrageruppe':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
reply(` MkM-Umfragegruppe:\n\n${global.umfragengrp} `)
break

case 'allgrouplinks': case 'allgrplinks': case 'allgrpl': case 'agl':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
if (!isCreator) return replay(mess.botowner)
reply(` Alle Eingetragn Gruppenlinks:\n\nMkM-Chatgruppe:\n\n${global.chatgrp}\n\nMkM-Ankündigung:\n\n${global.ankundigung}\n\nMkM-Werbegruppe:\n\n${global.werbunggrp}\n\nsfw-gruppe:\n\n${global.nsfwgrp}\n\nMkM-Broadcast:\n\n${global.broadcastgrp}\n\nSupport-Gruppe:\n\n${global.supportgrp}\n\nMkM-Bewerbung:\n\n${global.bewerbunggrp}\n\nMkM-Test_1:\n\n${global.test1}\n\nMkM-Test_2:\n\n${global.test2}\n\nMkM-Beta_Test:\n\n${global.betatest}\n\nMkM-MikuOnTop:\n\n${global.mikuot}\n\nMkM-TeamGruppe:\n\n${global.teamgrp}\n\nMkM-BotsGruppe:\n\n${global.botsgrp}\n\nMkM-SupportAnfragen:\n\n$[global.supportanfragengrp}\n\nMkM-Miku_Command,Befehl:\n\n${global.mikucommand}\n\nMkM-OwnerChatGruppe:\n\n${global.ownerchatgrp}\n\nMkM-IdeenGruppe:\n\n${global.ideengrp}\n\nAnime-Gruppe:\n\n${global.animefchatgrp}\n\nMkM-Umfragen:\n\n${global.umfragengrp} `)
break
*/

case 'idee': case 'idea': case 'ideeanfrage': case 'ia': case 'ir': case 'idearequest':
	 if (isBan) return reply(mess.banned)	 			        
	if (isBanChat) return reply(mess.bangc)

        Miku.sendMessage(`120363079632648987@g.us`, {text:`*── 「 Idee 」 ──*\n\n*Von*: ${pushname}\n*nummer*:  wa.me//${m.sender}\n*Message*: ${q}`})

        replay(`Ich habe deine Idee Weitergeleitet . Das MkM Bot-Team bedankt sich für deine Anfrage `)
break

case 'i': case 'selflink': case 'whatsapplink': case 'walink': case '@link':
 if (isBan) return reply(mess.banned)	 			        
if (isBanChat) return reply(mess.bangc)
reply(` 「 Links 」\n wa.me:\n\nwa.me//${m.sender}\n\nmit"@"\n\n@+${m.sender} `)
break 

case'xp':
        if (isBan) return reply(mess.banned)	 			      
	if (isBanChat) return reply(mess.bangc)
            reply(`*「  LEVEL  」*\n\n*User Name* : ${pushname}\n*Level* : ${levelMenu}\n*Exp* : ${xpMenu} out of ${reqXp}\n`)
break
		
case 'groupp': case 'gruppe': case 'ggroup': case 'grpp': case 'ggrp':
if(isBan) return reply(mess.banned)
if(isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(mess.grouponly)
reply(` 「 Group 」
name: ${metadata.subject}
Beschreibung: ${metadata.desc} `)		
break 

case 'userbank': case 'userb': case 'buser': case 'bankuser':
if(isBan) return reply(mess.banned)
if(isBanChat) return reply(mess.bangc)
reply(` 「 User Bank 」


    User Balance : ${uangku}
    Iron : ${getBesi(m.sender)}
    Gold : ${getEmas(m.sender)}
    Emarald : ${getEmerald(m.sender)}
    Potion : ${getPotion(m.sender)} `)
break
		
case 'userbalance': case 'userba': case 'ubalance':
if(isBan) return reply(mess.banned)
if(isBanChat) return reply(mess.bangc)
reply (` User Balance: ${uangku} `)		
break 
		
case 'uiron': case 'useriron': case 'ironuser': case 'inuser':
if(isBan) return reply(mess.banned)
if(isBanChat) return reply(mess.bangc)
reply (` User Iron: ${getBesi(m.sender)} `)		
break 
	
case 'ugold': case 'usergold': case 'golduser': case 'gduser':
if(isBan) return reply(mess.banned)
if(isBanChat) return reply(mess.bangc)
reply(` User Gold: ${getEmas(m.sender)} `)		
break
		
case 'uemarald': case 'useremarald': case 'emaralduser': case 'emuser':
if(isBan) return reply(mess.banned)
if(isBanChat) return reply(mess.bangc)
reply(` User Emarald: ${getEmerald(m.sender)} `)		
break
		
case 'upotion': case 'userpotion': case 'potionuser': case 'ptuser':
if(isBan) return reply(mess.banned)
if(isBanChat) return reply(mess.bangc)
reply(` User Potion: ${getPotion(m.sender)} `)
break
		
case 'userl': case 'userlvl': case 'userlevel': case 'luser': case 'lvluser': case 'leveluser':
if(isBan) return reply(mess.banned)
if(isBanChat) return reply(mess.bangc)
reply (` User Level: ${levelMenu} `)		
break
		
case 'userxp': case 'uxp': case 'xpu': case 'xpuser':
if(isBan) return reply(mess.banned)
if(isBanChat) return reply(mess.bangc)
reply(` User XP: ${xpMenu} \n ${reqXp} `)		
break 

case 'userrole': case 'urole': case 'roleuser': case 'ruser':
if(isBan) return reply(mess.banned)
if(isBanChat) return reply(mess.bangc)
reply(` User-Role: ${role} `)	
break

case 'userinfo': case 'useri': case 'infouser': case 'iuser': case 'userinfos':
if(isBan) return reply(mess.banned)
if(isBanChat) return reply(mess.bangc)
reply(` 「 User Info 」

    User Level: ${levelMenu}
    User XP : ${xpMenu} \ ${reqXp}
    User Role : ${role} `)
break

case 'bn': case 'botname': case 'botn': case 'bname':
      if (isBan) return reply(mess.banned)
      if (isBanChat) return reply(mess.bangc)
           reply (` Hallo, ich mein Name ist\n\n*${global.BotName}*\n\nNote:\n"ed" bedeutet Edition. `)
break 
		
case 'Bweb': case 'Bwebsite': case 'BWS': case 'ownerweb': case 'oweb': case 'ownerwebsite': case 'owebsite':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
reply(` Die B-Website meines owners bzw. Inhabers ist:\n\nbumpee.co/adv8w9mnho `)
break
		
case 'session': case 'sessionid': case 'sitzung':
if(isBan) return reply (mess.banned)
if (isBanChat) return reply(mess.bangc)
reply(` Die Session-Id, des Bots ist: *${global.sitzung}* `)
break

case 'Gweb': case 'Gwebsite': case 'GWS': case 'oweb': case 'ownerwebsite': case 'owebsite':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
reply(` Die Google-Website meines owners bzw. Inhabers ist:\n\nhttps://sites.google.com/view/max2-community-website `)
break

case 'sup': case 'support': case 'frage': case '!': case 'supportanfrage': case 'sa':

        if (isBan) return reply(mess.banned)	 			        
	if (isBanChat) return reply(mess.bangc)

        Miku.sendMessage(`120363076992082059@g.us`, {text:`*── 「 REPORT 」 ──*\n\n*Von*: ${pushname}\n*nummer*:  wa.me//${m.sender}\n*Message*: ${q}`})

        replay(`Ich habe deine Frage an die Supportgruppe weitergegeben. Bitte warte bis sie deine Frage beantwortet haben, die Antwort siehst du hier :https://chat.whatsapp.com/DOnXPARAhdg3qptwUlPuye`)
break
	
case 'asup': case 'asupport': case 'afrage': case 'a!': case 'asupportanfrage': case 'asa':

        if (isBan) return reply(mess.banned)	 			        
	if (isBanChat) return reply(mess.bangc)

        Miku.sendMessage(`120363076992082059@g.us`, {text:`*── 「 REPORT Answer 」 ──*\n\n*Message*: ${q}\n\n\n*Eure/r*:\n${pushname}`})

        replay(` Antwort erfolgreich gesendet! `)		
break
		
case 'Bug': case 'bugreport': case 'report': case 'bgre': case 'br': case 'bra':

        if (isBan) return reply(mess.banned)	 			        	
	if (isBanChat) return reply(mess.bangc)
        Miku.sendMessage(`120363076992082059@g.us`, {text:`*── 「 Bug-Report 」 ──*\n\n*Von*: ${pushname}\n*nummer*:  wa.me//${m.sender}\n*Message*: ${q}`})
        replay(`Ich habe deine Fehlermeldung an die Gruppe der Besitzer weitergeleitet. Das Team bedankt sich für deine Fehlermeldung `)
break

case 'team': case 'listt': case 'tlist': case 'teamlist':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
if (!isCreator) return replay(mess.botowner)
reply(` Das MkM-Team:\n\n\n Inhaber:\n\n1. ${global.owner1}\n2. ${global.owner2}\n3. ${global.owner3}\n\nStlv.Inhaber/In:\n\n1. ${global.owner4}\n\nManage:\n\n1. ${global.manage}\n\nSupport:\n\n1. ${global.support1}\n2. ${global.support2}\n3. ${global.support3}\n4. ${global.support4}\n5. ${global.support5}\n6. ${global.support6}\n\nHost:\n\n1. ${global.host1}`)
break

case 'botowner': case 'botowners': case 'ownerlist': case 'listowner':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
if (!isCreator) return replay(mess.botowner)
reply (` Die MkM-Owner:\n\n1.  ${global.owner1}\n2. ${global.owner2}\n3. ${global.owner3}\n4. ${global.owner4} `)
break 

case 'manager': case 'managerin': case 'tmanage': case 'manageteam': case 'maanaget':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
if (!isCreator) return replay(mess.botowner)
reply(` Der Manager des MkM-Teams ist derzeit:\n\n ${global.manage} `)
break

case 'supporter': case 'supporterin': case 'tsup': case 'supt': case 'supteam': case 'supportteam': case 'lsup': case 'listsup': case 'suplist':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
if (!isCreator) return replay(mess.botowner)
reply (` Supporter/in:\n\n1. ${global.support1}\n2. ${global.support2}\n3. ${global.support3}\n4. ${global.support4} `)
break 
		
case 'developer': case 'developerin': case 'devs': case 'tdev': case 'ldev': case 'devteam': case 'developerteam': case 'listdev': case 'devlist':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
if (!isCreator) return replay(mess.botowner)
reply (` Developer/in:\n\n${global.dev} `)
break
		
case 'ankündigungen': case 'ankündigung':
if (isBan) return reply(mess.banned)	 			        
if (isBanChat) return reply(mess.bangc)
reply (` Ankündigung(-en) werden hier rein gesendet:\n\nchat.whatsapp.com/G0nG2wuUtug4dI12WgXWNt\n\nVielen Dank `)
break
		
case'lul': case 'chatowner': case 'ochat': case 'chatt': case 'chatrq': case 'chatrequest': case 'crq': case 'chatanfrage': case 'ca':
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)

        Miku.sendMessage(`493023180366@s.whatsapp.net`, {text:`── 「 Chat-Anfrage 」 ──\n\n*Von*: ${pushname}\n*nummer*:  wa.me//${m.sender}\n*Message*: ${q}\n *Antwort* :`})
        replay(`ich habe diese nachricht an mein owner weitergeleitet`)
break

case 'chatgruppe': case 'chatgroup': case 'cgr': case 'chatgr':
if (isBan) return reply(mess.banned)	
if (isBanChat) return reply(mess.bangc)
reply (` Den Link zur Chatgruppe findest du hier:\n\n${global.chatgr}\n\nVielen Dank `)
break 
	
case 'supchat': case 'chatgruppesupport': case 'supch': case 'chatsup':
if (isBan) return reply(mess.banned)	
if (isBanChat) return reply(mess.bangc)
reply (` Den Link zum Support-Chat findest du hier:\n\n${global.support}\n\nVielen Dank `)	
break
		
case 'kontakt': case 'contact': case 'kowner': case 'cowber':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
if (!isCreator) return replay(mess.botowner)
reply(` Die Website meines Owners ist:\n\nbumpee.co/adv8w9mnho\n\nDie Google-Website meines Owners lautet:\n\nsites.google.com/view/max2-community-website\n\nDer Telegram Account meines Inhabers lautet:\nhttps://t.me/Anonymeradmin\n\nDer Tiktok Account meines Owners ist:\nhttps://www.tiktok.com/@T_x_m_x_2\n\n\nDie E-Mail meines Owners ist:\nMax.public.community@gmail.com\n\nVielen Dank für deine Anfrage :) `)
break 

case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow2': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case '.': case '3dstone2': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rockart': case 'bloodglas': case 'halloween': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpinkart': case 'sand': case 'glue': case '1917': case 'leaves': case 'demon': 
case '3dneon': case '3dspace': case '3dstone': case 'bookeh': case 'carbon': case 'curcuit': case 'glitch2': case 'glitch3':
case 'lion': case 'magma': case 'matrix': case 'neongreen': case 'scifi': case 'thunder': case 'thunder2': case 'wall':
	case 'grunge': case '3dpaint': case 'pinggold': case 'liquid': case 'burger':
	case 'cage': case 'party': case 'comic': case 'topography': case 'orange': case 'valentine':
	case 'lightglow': case 'thor': case '3d_deepsea': case 'm_black': case 'graffititext':
	case 'neonlightgalaxy': case '3dmarvel': case 'marvelstudiometal': case 'marvelstudio':
	case 'roadwarning': case 'advancedglow': case 'brakewall': case 'glitch3': case '3dbox': case 'waterdrop':
	case 'lion3': case 'papercut2': case 'transformer2': case 'harrypot2': case 'window2': case 'blackpinkneon2':
	case 'pornhub3': case 'blackpink4': case 'glitch4': case 'glitch5': case 'glitch6': case '3dspace2': case 'lion4':
	case '3dneon3': case 'neon4': case 'holographic3': case 'bear3': case 'wolf3': case 'joker3': case 'dropwater3':
	case 'summertime3': case 'neonlight5': case 'thewall3': case 'natural2': case 'carbon3': case 'pencil3': case 'textmaker3':
	case 'textmaker4': case 'hooror2': case 'whitebear3': case 'thunder4': case 'neon6': case 'matrix4': case 'sky3': case 'magma4':
	case 'sand4': case 'pencil5': case 'metallic3': case 'graffititext5': case 'steel3': case 'harrypotter6': case 'underwater4':
	case 'luxury3': case 'glue5': case 'fabric3': case 'neonlight7': case 'lava5': case 'toxic3': case 'ancient3': case 'chrismas4':
	case 'scifi4': case 'rainbow4': case 'classic3': case 'watercolor5': case 'halloween4': case 'halloweenfire3': case 'foggy3':
	case 'marvel6': case 'skeleton4': case 'sketch3': case 'wonderful3': case 'batman3': case 'juice4':
  /*
  1
  */
    case 'business7': case 'thor7': case 'deepsea7': case 'batman7': case 'diamond7': case 'flag_3D-2': case 'american_3d_flag':
case 'scifi_3D-2': case 'rainbow_3D-2': case 'pipe_3D-2': case 'halloween8': case 'spooky8': case 'horror8':
/*
2
*/
case 'sketch6': case 'bluecircuit5': case 'space5': case 'metallic5': case 'glossy7': case 'captain_america-2':
case 'scifi9': case '8bit-2': case 'green_horror-2': case 'transformer4': case 'berry5': case 'layered4': case 'thunder9':
/*
3
*/
case 'magma8': case 'stone6': case 'neon8': case 'glitch8': case 'glitch9': case 'harry_potter-2': case 'embossed5': 
case 'brokenglass5': case 'artpaper-2': case 'bw-2': case 'gradient-3': case '3D_glossy-2': case '3D_beach-2':
/*
4
*/
case 'watercolor5': case '3D-Multicolor': case 'foggy6': case 'neon_devil-2': case '3D-Underwater-2': case 'mascot-logo-2': 
case 'graffiti8': case 'graffiti-wall-2': case 'graffiti9': case 'christmas7': case 'technology-neon-2': case 'snow6': case 'cloud5':
/*
5
*/
case '3D-luxury-2': case '3D-gradient-2': case 'blackpink5': case 'vintage6': case 'real-cloud-2': case 'cloud-sky-2': case 'sand-beach-2': 
case 'sand-writing-2': case 'sand-engraved-2': case 'summery-sand-2': case 'birthday5': case '3D-glue-2':
/*
5
*/
case '3D-space-2': case 'metal-dark-2': case 'tiktok-style-2': case 'a-stone-2': case 'galaxy-style-2': case '1917style5': 
case '80s-retro': case '3D-Minion3': case 'pornhub8': case 'dexposure': case '3D-holo-2': case 'avengers8': case 'metal-purple-2':
/*
6
*/
case 'marvel-metal-2': case 'deluxe-silver-2': case 'luxury_metal-2': case 'glossyblue4': case 'glossycarbon5': 
case 'fabric7': case 'newyear6': case 'newyeargif3': case 'color-balloon-2': case '3D-metal-2':
/*
7
*/
case 'avatargold4': case '3D_metalsilver-2': case '3D_rosegold-2': case '3D_metalgold-2': case '3D_metalgalaxy-2': case '3D-Christmas-2': 
case 'blood_text-2': case 'halloweenfire7': case 'metaldarkgold7': case 'wolf_logo-6': 
case 'lion_logo-6': case 'wolf_logo-7': case 'wolf_logo_galaxy-2': case 'ninja7':
/*
8
*/
case 'joker7': case 'wicker7': case 'natural_leaves-2': case 'sparkle7': case 'skeleton7': case 'red_balloon-2': case 'purple_balloon-2': 
case 'pink_balloon-2': case 'green_balloon-2': case 'cyan_balloon-2': case 'gold_balloon-2': case 'steel7':
/*
9
*/
case 'ultragloss4': case 'denim4': case 'decor_green-2': case 'peridot_stone-2': case 'rock5': case 'lava8': case 'yellow_glass-2': 
case 'purple_glass-2': case 'orange_glass-2': case 'green_glass-2': case 'cyan_glass-2': case 'blue_glass-2':
/*
10
*/
case 'red_glass-2': case 'shinypurple_glass-2': case 'captain-america-2': case 'r2-d2_2': case 'rainbow_eq-2': case 'toxic7': case 'sparklepink_jewelery-2': 
case 'sparkleblue_jewelery-2': case 'sparklegreen_jewelery-2': case 'sparklepurple_jewelery-2': case 'sparklegold_jewelery-2': case 'sparklered_jewelery-2': 
/*
11
*/
case 'sparklecyan_jewelery-2': case 'purple_glass-2': case 'decorative-glass-2': case 'chocolate_cake-2': case 'strawberry6': case 'koi_fish-2': 
case 'bread6': case 'matrix_style-2': case 'horror_blood-2': case 'neonlight6': case 'thunder6': case '3d_box-2': case 'neon6':
/*
12
*/
case 'road_warning-2': case '3d_steel-2': case 'bokeh6': case 'green_neon-2': case 'free_advanced_glow-2': case 'break_wall-2': 
case 'christmax_gift-2': case 'honey6': case 'plastic_bag_drug-2': case 'horror_gift-2': case 'marble_slabs-2': case 'marble6':
/*
13
*/
case 'ice_cold-2': case 'fruit_juice-2': case 'rusty_metal-2': case 'abstra_gold-2': case 'biscuit7': case 'bagel6': case 'wood7': 
case 'sci--fi_2': case 'metal_rainbow-2': case 'purple_gem-2': case 'shiny_metal-2': case 'yellow_jewelery-2': case 'silver_jewelery-2':
/*
14
*/
case 'red_jewelery-2': case 'purple_jewelery-2': case 'orange_jewelery-2': case 'green_jewelery-2': case 'cyan_jewelery-2': case 'blue_jewelery-2': 
case 'hot_metal-3': case 'hexa_golden-3': case 'blue_glitter-2': case 'purple_glitter-2': case 'pink_glitter-2': case 'green_glitter-2':
/*
15
*/
case 'silver_glitter-2': case 'gold_glitter-2': case 'bronze_glitter-2': case 'eroded_metal-2': case 'carbon9': case 'pink_candy-2': 
case 'blue_metal-2': case 'blue_gem-2': case 'black_metal-2': case '3d_glowing_metal-2': case '3d_chrome-2':
/*
b
*/
	case 'marvel-01': case 'luxury_metal-2': case 'deluxe_gold-2': case 'neon01': case '3D_metal-3':
	case '3D_metal-4': case '3D-metal-rose-2': case 'blue_balloon-2': case 'decor_purple-2': case 'dropwater8':{             if (!q) throw `Example : ${prefix + command} ${global.ownername}`
             reply( `${mess.waiting} `)
          let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone2/.test(command)) link = 'https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rockart/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/halloween/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpinkart/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'   
	        if (/3dneon/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
		if (/3dspace/.test(command)) link = 'https://textpro.me/create-space-3d-text-effect-online-985.html'
		if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
		if (/bookeh/.test(command)) link = 'https://textpro.me/bokeh-text-effect-876.html'
		if (/carbon/.test(command)) link = 'https://textpro.me/carbon-text-effect-833.html'
		if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
		if (/glitch2/.test(command)) link = 'https://textpro.me/create-a-glitch-text-effect-online-free-1026.html'
		if (/glitch3/.test(command)) link = 'https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html'
		if (/lion/.test(command)) link = 'https://textpro.me/create-lion-logo-mascot-online-938.html'
		if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
		if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
		if (/neongreen/.test(command)) link = 'https://textpro.me/green-neon-text-effect-874.html'
		if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
		if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
		if (/thunder2/.test(command)) link = 'https://textpro.me/create-thunder-text-effect-online-881.html'
		if (/wall/.test(command)) link = 'https://textpro.me/break-wall-text-effect-871.html'
		if (/grunge/.test(command)) link = 'https://textpro.me/grunge-metallic-3d-text-effect-online-1115.html'
		if (/3dpaint/.test(command)) link = 'https://textpro.me/create-3d-multicolor-paint-text-effect-online-1114.html'
		if (/pinkgold/.test(command)) link = 'https://textpro.me/create-pink-soft-gold-text-effect-online-1113.html'
		if (/liquid/.test(command)) link = 'https://textpro.me/create-3d-liquid-metal-text-effect-1112.html'
		if (/burger/.test(command)) link = 'https://textpro.me/create-burger-3d-text-effect-1111.html'
		if (/cage/.test(command)) link = 'https://textpro.me/create-cage-text-effect-online-1110.html'
		if (/party/.test(command)) link = 'https://textpro.me/party-text-effect-with-the-night-event-theme-1105.html'
		if (/comic/.test(command)) link = 'https://textpro.me/create-3d-comic-text-effects-online-1091.html'
		if (/topography/.test(command)) link = 'https://textpro.me/create-artistic-typography-online-1086.html'
		if (/orange/.test(command)) link =  'https://textpro.me/create-a-3d-orange-juice-text-effect-online-1084.html'
		if (/valentine/.test(command)) link = 'https://textpro.me/create-realistic-golden-text-effect-on-red-sparkles-online-1082.html'
		if (/lightglow/.test(command)) link = 'https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html'
		if (/thor/.test(command)) link = 'https://textpro.me/create-thor-logo-style-text-effect-online-1064.html'
		if (/3d_deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
		if (/m_black/.test(command)) link = 'https://textpro.me/create-a-metallic-text-effect-free-online-1041.html'
		if (/graffititext/.test(command)) link = 'https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html'
		if (/neonlightgalaxy/.test(command)) link = 'https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html'
		if (/3dmarvel/.test(command)) link = 'https://textpro.me/create-3d-avengers-logo-online-974.html'
		if (/marvelstudiometal/.test(command)) link = 'https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html'
		if (/marvelstudio/.test(command)) link = 'https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html'
		if (/roadwarning/.test(command)) link = 'https://textpro.me/road-warning-text-effect-878.html'
		if (/advancedglow/.test(command)) link = 'https://textpro.me/free-advanced-glow-text-effect-873.html'
		if (/brakewall/.test(command)) link = 'https://textpro.me/break-wall-text-effect-871.html'
		if (/glitch3/.test(command)) link = 'https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html'
		if (/3dbox/.test(command)) link = 'https://textpro.me/3d-box-text-effect-online-880.html'
		if (/waterdrop/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
		if (/lion3/.test(command)) link = 'https://textpro.me/create-lion-logo-mascot-online-938.html'
		if (/papercut2/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
		if (/tranformer2/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
		if (/harrypot2/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
		if (/window2/.test(command)) link = 'https://textpro.me/write-text-on-foggy-window-online-free-1015.html'
		if (/blackpinkneon2/.test(command)) link = 'https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html'
		if (/pornhub3/.test(command)) link = 'https://textpro.me/pornhub-style-logo-online-generator-free-977.html'
		if (/blackpink4/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
		if (/glitch4/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
		if (/glitch5/.test(command)) link = 'https://textpro.me/create-a-glitch-text-effect-online-free-1026.html'
		if (/glitch6/.test(command)) link = 'https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html'
		if (/3dspace2/.test(command)) link = 'https://textpro.me/create-space-3d-text-effect-online-985.html'
		if (/lion4/.test(command)) link = 'https://textpro.me/create-lion-logo-mascot-online-938.html'
		if (/3dneon3/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
		if (/neon4/.test(command)) link = 'https://textpro.me/neon-text-effect-online-879.html'
		if (/holographic3/.test(command)) link = 'https://textpro.me/holographic-3d-text-effect-975.html'
		if (/bear3/.test(command)) link = 'https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html'
		if (/wolf3/.test(command)) link = 'https://textpro.me/create-wolf-logo-galaxy-online-936.html'
		if (/joker3/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
		if (/dropwater3/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
		if (/summertime3/.test(command)) link = 'https://textpro.me/create-a-summer-neon-light-text-effect-online-1076.html'
		if (/neonlight5/.test(command)) link = 'https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html'
		if (/thewall3/.test(command)) link = 'https://textpro.me/break-wall-text-effect-871.html'
		if (/natural2/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
		if (/carbon3/.test(command)) link = 'https://textpro.me/carbon-text-effect-833.html'
		if (/pencil3/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
		if (/textmaker3/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
		if (/textmaker4/.test(command)) link = 'https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html'
		if (/hooror2/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
		if (/whitebear3/.test(command)) link = 'https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html'
		if (/thunder4/.test(command)) link = 'https://textpro.me/create-thunder-text-effect-online-881.html'
		if (/neon6/.test(command)) link = 'https://textpro.me/neon-light-text-effect-online-882.html'
		if (/matrix4/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
		if (/sky3/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
		if (/magma4/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
		if (/sand4/.test(command)) link = 'https://textpro.me/sand-writing-text-effect-online-990.html'
		if (/pencil5/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
		if (/metallic3/.test(command)) link = 'https://textpro.me/create-a-metallic-text-effect-free-online-1041.html'
		if (/graffititext5/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
		if (/steel3/.test(command)) link = 'https://textpro.me/steel-text-effect-online-921.html'
		if (/harrypotter6/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
		if (/underwater4/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
		if (/luxury3/.test(command)) link = 'https://textpro.me/3d-luxury-gold-text-effect-online-1003.html'
		if (/glue5/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
		if (/fabric3/.test(command)) link = 'https://textpro.me/fabric-text-effect-online-964.html'
		if (/neonlight7/.test(command)) link ='https://textpro.me/neon-light-glitch-text-generator-online-1063.html'
		if (/lava5/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
		if (/toxic3/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
		if (/ancient3/.test(command)) link = 'https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html'
		if (/chrismas4/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
		if (/scifi4/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
		if (/rainbow4/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
		if (/classic3/.test(command)) link = 'https://textpro.me/video-game-classic-8-bit-text-effect-1037.html'
		if (/watercolor5/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
		if (/halloween4/.test(command)) link = 'https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html'
		if (/halloweenfire3/.test(command)) link = 'https://textpro.me/sand-writing-text-effect-online-990.html'
		if (/foggy3/.test(command)) link = 'https://textpro.me/write-text-on-foggy-window-online-free-1015.html'
		if (/marvel6/.test(command)) link = 'https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html'
		if (/skeleton4/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
		if (/sketch3/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
		if (/wonderful3/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
		if (/batman3/.test(command)) link = 'https://textpro.me/make-a-batman-logo-online-free-1066.html'
		if (/juice4/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
    if(/buisness7/.test(command)) link = "https://textpro.me/3d-business-sign-text-effect-1078.html"
if(/thor7/.test(command)) link = "https://textpro.me/create-thor-logo-style-text-effect-online-1064.html"
if(/deepsea7/.test(command)) link = "https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html"
if(/batman7/.test(command)) link = "https://textpro.me/make-a-batman-logo-online-free-1066.html"
if(/diamond7/.test(command)) link = "https://textpro.me/create-a-quick-sparkling-diamonds-text-effect-1077.html"
if(/flag-3D-2/.test(command)) link = "https://textpro.me/free-online-country-flag-3d-text-effect-generator-1052.html"
if(/american_3d_flag/.test(command)) link = "https://textpro.me/create-american-flag-3d-text-effect-online-1051.html"
if(/scifi_3D-2/.test(command)) link = "https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html"
if(/rainbow_3D-2/.test(command)) link = "https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html"
if(/pipe_3D-2/.test(command)) link = "https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html"
if(/halloween8/.test(command)) link = "https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html"
if(/spooky8/.test(command)) link = "https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html"
if(/horror8/.test(command)) link = "https://textpro.me/create-a-cinematic-horror-text-effect-1045.html"
 if(/sketch6/.test(command)) link = "https://textpro.me/create-a-sketch-text-effect-online-1044.html"
 if(/bluecircuit5/.test(command)) link = "https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html"
 if(/space5/.test(command)) link = "https://textpro.me/create-space-text-effects-online-free-1042.html"
 if(/metallic5/.test(command)) link = "https://textpro.me/create-a-metallic-text-effect-free-online-1041.html"
 if(/glossy7/.test(command)) link = "https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html"
 if(/captain_america-2/.test(command)) link = "https://textpro.me/create-a-captain-america-text-effect-free-online-1039.html"
 if(/scifi9/.test(command)) link = "https://textpro.me/create-science-fiction-text-effect-online-free-1038.html"
 if(/8bit-2/.test(command)) link = "https://textpro.me/video-game-classic-8-bit-text-effect-1037.html"
 if(/green_horror-2/.test(command)) link = "https://textpro.me/create-green-horror-style-text-effect-online-1036.html"
 if(/transformer4/.test(command)) link = "https://textpro.me/create-a-transformer-text-effect-online-1035.html"
 if(/berry5/.test(command)) link = "https://textpro.me/create-berry-text-effect-online-free-1033.html"
 if(/layered4/.test(command)) link = "https://textpro.me/create-layered-text-effects-online-free-1032.html"
 if(/thunder9/.test(command)) link = "https://textpro.me/online-thunder-text-effect-generator-1031.html"
  if(/magma8/.test(command)) link = "https://textpro.me/create-a-magma-hot-text-effect-online-1030.html"
  if(/stone6/.test(command)) link = "https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html"
  if(/neon8/.test(command)) link = "https://textpro.me/create-3d-neon-light-text-effect-online-1028.html"
  if(/glitch8/.test(command)) link = "https://textpro.me/create-impressive-glitch-text-effects-online-1027.html"
  if(/glitch9/.test(command)) link = "https://textpro.me/create-a-glitch-text-effect-online-free-1026.html"
  if(/harry_potter-2/.test(command)) link = "https://textpro.me/create-harry-potter-text-effect-online-1025.html"
  if(/embossed5/.test(command)) link = "https://textpro.me/create-embossed-text-effect-on-cracked-surface-1024.html"
  if(/brokenglass5/.test(command)) link = "https://textpro.me/broken-glass-text-effect-free-online-1023.html"
  if(/artpaper-2/.test(command)) link = "https://textpro.me/create-art-paper-cut-text-effect-online-1022.html"
  if(/bw-2/.test(command)) link = "https://textpro.me/create-artistic-black-and-white-status-and-quote-with-your-photos-1021.html"
  if(/gradient-3/.test(command)) link = "https://textpro.me/online-3d-gradient-text-effect-generator-1020.html"
  if(/3D_glossy-2/.test(command)) link = "https://textpro.me/create-a-3d-glossy-metal-text-effect-1019.html"
  if(/3D_beach2/.test(command)) link = "https://textpro.me/create-3d-realistic-text-effect-on-the-beach-online-1018.html"
   if(/watercolor5/.test(command)) link = "https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html"
   if(/3D-Multicolor/.test(command)) link = "https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html"
   if(/foggy6/.test(command)) link = "https://textpro.me/write-text-on-foggy-window-online-free-1015.html"
   if(/neon_devil-2/.test(command)) link = "https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html"
   if(/3D-Unterwater-2/.test(command)) link = "https://textpro.me/3d-underwater-text-effect-generator-online-1013.html"
   if(/mascot-logo-2/.test(command)) link = "https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html"
   if(/graffiti8/.test(command)) link = "https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html"
   if(/graffiti-wall-2/.test(command)) link = "https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html"
   if(/graffiti9/.test(command)) link = "https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html"
   if(/christmas7/.test(command)) link = "https://textpro.me/create-a-christmas-holiday-snow-text-effect-1007.html"
   if(/technology-neon-2/.test(command)) link = "https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html"
   if(/snow6/.test(command)) link = "https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html"
   if(/cloud5/.test(command)) link = "https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html"
    if(/3D-luxury-2/.test(command)) link = "https://textpro.me/3d-luxury-gold-text-effect-online-1003.html"
    if(/3D-gradient/.test(command)) link = "https://textpro.me/3d-gradient-text-effect-online-free-1002.html"
    if(/blackpink5/.test(command)) link = "https://textpro.me/create-blackpink-logo-style-online-1001.html"
    if(/vintage6/.test(command)) link = "https://textpro.me/create-realistic-vintage-style-light-bulb-1000.html"
    if(/real-cloud-2/.test(command)) link = "https://textpro.me/create-realistic-cloud-text-effect-online-free-999.html"
    if(/cloud-sky-2/.test(command)) link = "https://textpro.me/create-a-cloud-text-effect-in-the-sky-online-997.html"
    if(/sand-beach-2/.test(command)) link = "https://textpro.me/write-in-sand-summer-beach-free-online-991.html"
    if(/sand-writing-2/.test(command)) link = "https://textpro.me/sand-writing-text-effect-online-990.html"
    if(/sand-engraved-2/.test(command)) link = "https://textpro.me/sand-engraved-3d-text-effect-989.html"
    if(/summery-sand-2/.test(command)) link = "https://textpro.me/create-a-summery-sand-writing-text-effect-988.html"
    if(/birthday5/.test(command)) link = "https://textpro.me/foil-balloon-text-effect-for-birthday-987.html"
    if(/3D-glue-2/.test(command)) link = "https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html"
     if(/3D-space-2/.test(command)) link = "https://textpro.me/create-space-3d-text-effect-online-985.html"
     if(/metal-dark-2/.test(command)) link = "https://textpro.me/metal-dark-gold-text-effect-984.html"
     if(/tiktok-style-2/.test(command)) link = "https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html"
     if(/a-stone-2/.test(command)) link = "https://textpro.me/create-a-stone-text-effect-online-982.html"
     if(/galaxy-style-2/.test(command)) link = "https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html"
     if(/1917style5/.test(command)) link = "https://textpro.me/1917-style-text-effect-online-980.html"
     if(/80s-retro/.test(command)) link = "https://textpro.me/80-s-retro-neon-text-effect-online-979.html"
     if(/3D-Minion3/.test(command)) link = "https://textpro.me/minion-text-effect-3d-online-978.html"
     if(/pornhub8/.test(command)) link = "https://textpro.me/pornhub-style-logo-online-generator-free-977.html"
     if(/dexposure/.test(command)) link = "https://textpro.me/double-exposure-text-effect-black-white-976.html"
     if(/3D-holo-2/.test(command)) link = "https://textpro.me/holographic-3d-text-effect-975.html"
     if(/avengers8/.test(command)) link = "https://textpro.me/create-3d-avengers-logo-online-974.html"
     if(/metal-purple-2/.test(command)) link = "https://textpro.me/metal-purple-dual-effect-973.html"
      if(/marvel-metal-2/.test(command)) link = "https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html"
      if(/marvel-01/.test(command)) link = "https://textpro.me/create-logo-style-marvel-studios-online-971.html"
      if(/deluxe-silver-2/.test(command)) link = "https://textpro.me/deluxe-silver-text-effect-970.html"
      if(/luxury_metal-2/.test(command)) link = "https://textpro.me/color-full-luxury-metal-text-effect-969.html"
      if(/glossyblue4/.test(command)) link = "https://textpro.me/glossy-blue-metal-text-effect-967.html"
      if(/deluxe_gold-2/.test(command)) link = "https://textpro.me/deluxe-gold-text-effect-966.html"
      if(/glossycarbon5/.test(command)) link = "https://textpro.me/glossy-carbon-text-effect-965.html"
      if(/fabric7/.test(command)) link = "https://textpro.me/fabric-text-effect-online-964.html"
      if(/neon01/.test(command)) link = "https://textpro.me/neon-text-effect-online-963.html"
      if(/newyear6/.test(command)) link = "https://textpro.me/new-year-cards-3d-by-name-960.html"
      if(/newyeargif3/.test(command)) link = "https://textpro.me/happ-new-year-card-firework-gif-959.html"
      if(/color-balloon-2/.test(command)) link = "https://textpro.me/fullcolor-balloon-text-effect-958.html"
      if(/3D-metal-2/.test(command)) link = "https://textpro.me/create-text-logo-3d-metal-online-957.html"
       if(/avatargold4/.test(command)) link = "https://textpro.me/create-avatar-gold-online-956.html"
       if(/3D-metal-4/.test(command)) link = "https://textpro.me/text-logo-3d-metal-silver-946.html"
       if(/3D-metal-rose_2/.test(command)) link = "https://textpro.me/text-logo-3d-metal-rose-gold-945.html"
       if(/3D_metalgold-2/.test(command)) link = "https://textpro.me/text-logo-3d-metal-gold-944.html"
       if(/3D_metalgalaxy-2/.test(command)) link = "https://textpro.me/text-logo-3d-metal-galaxy-943.html"
       if(/3D-Christmas-2/.test(command)) link = "https://textpro.me/xmas-cards-3d-online-942.html"
       if(/blood_text-2/.test(command)) link = "https://textpro.me/blood-text-on-the-frosted-glass-941.html"
       if(/halloweenfire7/.test(command)) link = "https://textpro.me/halloween-fire-text-effect-940.html"
       if(/metaldarkgold7/.test(command)) link = "https://textpro.me/metal-dark-gold-text-effect-online-939.html"
       if(/lion_logo-6/.test(command)) link = "https://textpro.me/create-lion-logo-mascot-online-938.html"
       if(/wolf_logo-6/.test(command)) link = "https://textpro.me/create-wolf-logo-black-white-937.html"
       if(/wolf_logo_galaxy-2/.test(command)) link = "https://textpro.me/create-wolf-logo-galaxy-online-936.html"
       if(/ninja7/.test(command)) link = "https://textpro.me/create-ninja-logo-online-935.html"
	if(/joker7/.test(command)) link = "https://textpro.me/create-logo-joker-online-934.html"
        if(/wicker7/.test(command)) link = "https://textpro.me/wicker-text-effect-online-932.html"
        if(/natural_leaves-2/.test(command)) link = "https://textpro.me/natural-leaves-text-effect-931.html"
        if(/sparkle7/.test(command)) link = "https://textpro.me/firework-sparkle-text-effect-930.html"
        if(/skeleton7/.test(command)) link = "https://textpro.me/skeleton-text-effect-online-929.html"
        if(/red_balloon-2/.test(command)) link = "https://textpro.me/red-foil-balloon-text-effect-928.html"
        if(/purple_balloon_2/.test(command)) link = "https://textpro.me/purple-foil-balloon-text-effect-927.html"
        if(/pink_balloon-2/.test(command)) link = "https://textpro.me/pink-foil-balloon-text-effect-926.html"
        if(/green_balloon-2/.test(command)) link = "https://textpro.me/green-foil-balloon-text-effect-925.html"
        if(/cyan_balloon-2/.test(command)) link = "https://textpro.me/cyan-foil-balloon-text-effect-924.html"
        if(/blue_balloon-2/.test(command)) link = "https://textpro.me/blue-foil-balloon-text-effect-923.html"
        if(/gold_balloon-2/.test(command)) link = "https://textpro.me/gold-foil-balloon-text-effect-922.html"
        if(/steel7/.test(command)) link = "https://textpro.me/steel-text-effect-online-921.html"
         if(/ultragloss4/.test(command)) link = "https://textpro.me/ultra-gloss-text-effect-online-920.html"
         if(/denim4/.test(command)) link = "https://textpro.me/denim-text-effect-online-919.html"
         if(/decor_green-2/.test(command)) link = "https://textpro.me/decorate-green-text-effect-918.html"
         if(/decor_purple-2/.test(command)) link = "https://textpro.me/decorate-purple-text-effect-917.html"
         if(/peridot_stone-2/.test(command)) link = "https://textpro.me/peridot-stone-text-effect-916.html"
         if(/rock5/.test(command)) link = "https://textpro.me/rock-text-effect-online-915.html"
         if(/lava8/.test(command)) link = "https://textpro.me/lava-text-effect-online-914.html"
         if(/yellow_glass-2/.test(command)) link = "https://textpro.me/yellow-glass-text-effect-913.html"
         if(/purple_glass-2/.test(command)) link = "https://textpro.me/purple-glass-text-effect-912.html"
         if(/orange_glass-2/.test(command)) link = "https://textpro.me/orange-glass-text-effect-911.html"
         if(/green_glass-2/.test(command)) link = "https://textpro.me/green-glass-text-effect-910.html"
         if(/cyan_glass-2/.test(command)) link = "https://textpro.me/cyan-glass-text-effect-909.html"
         if(/blue_glass-2/.test(command)) link = "https://textpro.me/blue-glass-text-effect-908.html"
          if(/red_glass-2/.test(command)) link = "https://textpro.me/red-glass-text-effect-907.html"
          if(/shinypurple_glass-2/.test(command)) link = "https://textpro.me/purple-shiny-glass-text-effect-906.html"
          if(/captain-america-2/.test(command)) link = "https://textpro.me/captain-america-text-effect-905.html"
          if(/r2-d2_2/.test(command)) link = "https://textpro.me/robot-r2-d2-text-effect-903.html"
          if(/rainbow_eq-2/.test(command)) link = "https://textpro.me/rainbow-equalizer-text-effect-902.html"
          if(/toxic7/.test(command)) link = "https://textpro.me/toxic-text-effect-online-901.html"
          if(/sparklepink_jewelery-2/.test(command)) link = "https://textpro.me/pink-sparkling-jewelry-text-effect-899.html"
          if(/sparkleblue_jewelery-2/.test(command)) link = "https://textpro.me/blue-sparkling-jewelry-text-effect-898.html"
          if(/sparklegreen_jewelery-2/.test(command)) link = "https://textpro.me/green-sparkling-jewelry-text-effect-897.html"
          if(/sparklepurple_jewelery-2/.test(command)) link = "https://textpro.me/purple-sparkling-jewelry-text-effect-896.html"
          if(/sparkegold_jewelery-2/.test(command)) link = "https://textpro.me/gold-sparkling-jewelry-text-effect-895.html"
          if(/sparklered_jewelery-2/.test(command)) link = "https://textpro.me/red-sparkling-jewelry-text-effect-894.html"
           if(/sparklecyan_jewelery-2/.test(command)) link = "https://textpro.me/cyan-sparkling-jewelry-text-effect-893.html"
           if(/purple_glass-2/.test(command)) link = "https://textpro.me/purple-glass-text-effect-online-892.html"
           if(/decorative_glass-2/.test(command)) link = "https://textpro.me/decorative-glass-text-effect-891.html"
           if(/chocolate_cake-2/.test(command)) link = "https://textpro.me/chocolate-cake-text-effect-890.html"
           if(/strawberry6/.test(command)) link = "https://textpro.me/strawberry-text-effect-online-889.html"
           if(/koi_fish-2/.test(command)) link = "https://textpro.me/koi-fish-text-effect-online-888.html"
           if(/bread6/.test(command)) link = "https://textpro.me/bread-text-effect-online-887.html"
           if(/matrix_style-2/.test(command)) link = "https://textpro.me/matrix-style-text-effect-online-884.html"
           if(/horror_blood-2/.test(command)) link = "https://textpro.me/horror-blood-text-effect-online-883.html"
           if(/neonlight6/.test(command)) link = "https://textpro.me/neon-light-text-effect-online-882.html"
           if(/thunder6/.test(command)) link = "https://textpro.me/create-thunder-text-effect-online-881.html"
           if(/3d_box-2/.test(command)) link = "https://textpro.me/3d-box-text-effect-online-880.html"
           if(/neon6/.test(command)) link = "https://textpro.me/neon-text-effect-online-879.html"
            if(/road_warning-2/.test(command)) link = "https://textpro.me/road-warning-text-effect-878.html"
            if(/3d_steel-2/.test(command)) link = "https://textpro.me/3d-steel-text-effect-877.html"
            if(/bokeh6/.test(command)) link = "https://textpro.me/bokeh-text-effect-876.html"
            if(/free_advanced_glow-2/.test(command)) link = "https://textpro.me/free-advanced-glow-text-effect-873.html"
            if(/dropwater8/.test(command)) link = "https://textpro.me/dropwater-text-effect-872.html"
            if(/break_wall-2/.test(command)) link = "https://textpro.me/break-wall-text-effect-871.html"
            if(/christmax_gift-2/.test(command)) link = "https://textpro.me/chrismast-gift-text-effect-869.html"
            if(/honey6/.test(command)) link = "https://textpro.me/honey-text-effect-868.html"
            if(/plastic_bag_drug-2/.test(command)) link = "https://textpro.me/plastic-bag-drug-text-effect-867.html"
            if(/horror_gift-2/.test(command)) link = "https://textpro.me/horror-gift-text-effect-866.html"
            if(/marble_slabs-2/.test(command)) link = "https://textpro.me/marble-slabs-text-effect-864.html"
            if(/marble6/.test(command)) link = "https://textpro.me/marble-text-effect-863.html"
             if(/ice_cold-2/.test(command)) link = "https://textpro.me/ice-cold-text-effect-862.html"
             if(/fruit_juice-2/.test(command)) link = "https://textpro.me/fruit-juice-text-effect-861.html"
             if(/rusty_metal-2/.test(command)) link = "https://textpro.me/rusty-metal-text-effect-860.html"
             if(/abstra_gold-2/.test(command)) link = "https://textpro.me/abstra-gold-text-effect-859.html"
             if(/biscuit7/.test(command)) link = "https://textpro.me/biscuit-text-effect-858.html"
             if(/bagel6/.test(command)) link = "https://textpro.me/bagel-text-effect-857.html"
             if(/wood7/.test(command)) link = "https://textpro.me/wood-text-effect-856.html"
             if(/sci--fi_2/.test(command)) link = "https://textpro.me/sci-fi-text-effect-855.html"
             if(/metal_rainbow-2/.test(command)) link = "https://textpro.me/metal-rainbow-text-effect-854.html"
             if(/purple_gem-2/.test(command)) link = "https://textpro.me/purple-gem-text-effect-853.html"
             if(/shiny_metal-2/.test(command)) link = "https://textpro.me/shiny-metal-text-effect-852.html"
             if(/yellow_jewelery-2/.test(command)) link = "https://textpro.me/yellow-jewelry-text-effect-851.html"
              if(/sliver_jewelery-2/.test(command)) link = "https://textpro.me/silver-jewelry-text-effect-850.html"
              if(/red_jewelery-2/.test(command)) link = "https://textpro.me/red-jewelry-text-effect-849.html"
              if(/purple_jewelery-2/.test(command)) link = "https://textpro.me/purple-jewelry-text-effect-848.html"
              if(/orange_jewelery-2/.test(command)) link = "https://textpro.me/orange-jewelry-text-effect-847.html"
              if(/green_jewelery-2/.test(command)) link = "https://textpro.me/green-jewelry-text-effect-846.html"
              if(/cyan_jewlery-2/.test(command)) link = "https://textpro.me/cyan-jewelry-text-effect-845.html"
              if(/blue_jewelery-2/.test(command)) link = "https://textpro.me/blue-jewelry-text-effect-844.html"
              if(/hot_metal-3/.test(command)) link = "https://textpro.me/hot-metal-text-effect-843.html"
              if(/hexa_golden-3/.test(command)) link = "https://textpro.me/hexa-golden-text-effect-842.html"
              if(/blue_glitter-2/.test(command)) link = "https://textpro.me/blue-glitter-text-effect-841.html"
              if(/purple_glitter-2/.test(command)) link = "https://textpro.me/purple-glitter-text-effect-840.html"
              if(/pink_glitter-2/.test(command)) link = "https://textpro.me/pink-glitter-text-effect-839.html"
              if(/green_glitter-2/.test(command)) link = "https://textpro.me/green-glitter-text-effect-838.html"
               if(/silver_glitter-2/.test(command)) link = "https://textpro.me/silver-glitter-text-effect-837.html"
               if(/gold_glitter-2/.test(command)) link = "https://textpro.me/gold-glitter-text-effect-836.html"
               if(/bronze_glitter-2/.test(command)) link = "https://textpro.me/bronze-glitter-text-effect-835.html"
               if(/eroded_metal-2/.test(command)) link = "https://textpro.me/eroded-metal-text-effect-834.html"
               if(/carbon9/.test(command)) link = "https://textpro.me/carbon-text-effect-833.html"
               if(/pink_candy-2/.test(command)) link = "https://textpro.me/pink-candy-text-effect-832.html"
               if(/blue_metal-2/.test(command)) link = "https://textpro.me/blue-metal-text-effect-831.html"
               if(/blue_gem-2/.test(command)) link = "https://textpro.me/blue-gem-text-effect-830.html"
               if(/black_metal-2/.test(command)) link = "https://textpro.me/black-metal-text-effect-829.html"
               if(/3d_glowing_metal-2/.test(command)) link = "https://textpro.me/3d-glowing-metal-text-effect-828.html"
               if(/3d_chrome-2/.test(command)) link = "https://textpro.me/3d-chrome-text-effect-827.html"
let anutexpro = await maker.textpro(link, q)
                Miku.sendMessage(m.chat, { image: { url: anutexpro }, caption: `Made by *${global.botname}*\n_Official MkM Bot Inc._` }, { quoted: m })
             }
             break

case 'owners': case 'mods':
if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
reply(`     🧣  *${global.BotName} Mods*  🧣


〽️ ${global.owner1}

〽️ ${global.owner2}

〽️ ${global.owner3}

〽️ ${global.owner4}


📛 *Don't Spam them to avoid Blocking !*

🎀 For any help, type *${prefix}support* and ask in group.

*💫 Thanks for Using ${global.BotName}. 💫* `)
break
		
case 'welcome':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
reply(` Hey ${pushname} , ich bin ${global.sitzung}  `)
break

case 'bctext2': case 'broadcasttext2': case 'bc2':
  if (!isCreator) throw mess.owner
  if (!text) throw `Enter text`
    var data = await store.chats.all()
 for (let i of data) {
  Miku.sendMessage(i.id, {text: `${global.OwnerName}'s Broadcast\n\nMessage : ${q}` })
                               await sleep(1000)
               }
break
		
case 'purge':{mess
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)     
if (!m.isGroup) return replay(mess.grouponly)     
if (!isBotAdmins) return replay(mess.botadmin)     
if (!isAdmins && !isCreator) return replay(mess.useradmin)
const delay = time => new Promise(res=>setTimeout(res,time));let mentioned = participants.map(v => v.jid)
for (let member of mentioned) {           Miku.groupParticipantsUpdate(m.chat, [member], 'remove')      }    }
break
    
case 'limituser': case 'userlimit': case 'limit':
            if (isBan) return reply(mess.banned)	 			
            if (isBanChat) return reply(mess.bangc)
            {      
               let txt = `「 *All User Limit* 」\n\n`
                 for (let i of _limit){
                 txt += ` *User ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
                 }
                reply(txt)       
              }
             break
		

/*case 'hentaigroup': case 'hent': case 'sus': case 'LUL':
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)
            reply(`*Hentai gruppe*
	          https://chat.whatsapp.com/FMDqCkfLfbkHA3oaxtuAc9`)
        break
        */




case 'lv': case 'l': case 'lvl': case 'level': case 'xp':
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)
            reply(`*「  LEVEL  」*\n\n*User Name* : ${pushname}\n*Level* : ${levelMenu}\n*Exp* : ${xpMenu} out of ${reqXp}\n`)
break

    /*
  case 'write1':
    const fs = require('fs')
    Miku.sendMessage(m.chat, {
    	react: {
    		text: ${command},
    		key: m.key
    	}
    })

    reply(`
┌〔 Liste schreiben 〕
├ document
├ text
└────
`).trim()
    if (!args[0]) throw teks
    if (args[0] === 'document') {
        if(!args[1]) throw `Beispiel: ${prefix + command} document plugins/haruno.js`
        let saveas = await m.text.replace(`${usedPrefix + command} document ${args[1]} `, '')
        fs.writeFileSync(`./${args[1]}`, saveas)
        Miku.sendButton(m.chat, `Erfolgreich gespeichert als ${args[1]}`, wm, 'Neustart', '.restart')
    } else if (args[0] === 'text') {
        if (!args[1]) throw `Geben Sie einen Dateinamen und ein Ziel ein.\n${usedPrefix + command} plugins/join.js`
        require('fs').writeFileSync(`./${args[1]}`, m.text)
        Miku.sendButton(m.chat, `Erfolgreich gespeichert als ${args[1]}.`, wm, 'Neustart', '.restart')
    } else {
        throw teks
    }
break




/*case 'lul4': case 'lul3': case 'lul2': case 'lul':
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)

        Miku.sendMessage(`436764242454@s.whatsapp.net`, {text:`── 「 owner report 」 ──\n\n*Von*: ${pushname}\n*nummer*:  wa.me//${m.sender}\n*Message*: ${q}\n *Antwort* :`})
        replay(`ich habe diese nachricht an mein owner weitergeleitet`)

	 Miku.sendMessage(`491632225167@s.whatsapp.net`, {text:`── 「 owner report 」 ──\n\n*Von*: ${pushname}\n*nummer*:  wa.me//${m.sender}\n*Message*: ${q}\n *Antwort* :`})

	Miku.sendMessage(`493023180366@s.whatsapp.net`, {text:`── 「 owner report 」 ──\n\n*Von*: ${pushname}\n*nummer*:  wa.me//${m.sender}\n*Message*: ${q}\n *Antwort* :`})
 break




case 'grr': case 'ka': case 'magic': case 'ma':
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)
        Miku.sendMessage(`120363048485755289@g.us`, {text:`── 「 magic 」 ──\n\n*Von*: ${pushname}\n*nummer*:  wa.me//${m.sender}\n*Message*: ${q}\n *Antwort* : \n `})
        replay(`Ich habe deine nachricht in magics gruppe weitergeleitet `)
        break
	
		
case 'ide': case 'i': case 'idee': case 'ideee':
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)
        Miku.sendMessage(`120363079632648987@g.us`, {text:`── 「 Idee 」 ──\n\n*Von*: ${pushname}\n*nummer*:  wa.me//${m.sender}\n*Message*: ${q}\n *Antwort* : \n *geantwortet von* : `})
        replay(`Ich habe deine Idee an meine Besitzer weitergegeben.`)
        break
        */


		

case 'sup': case 'support': case 'frage': case '!':
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)

        Miku.sendMessage(`120363043511491681@g.us`, {text:`── 「 REPORT 」 ──\n\n*Von*: ${pushname}\n*nummer*:  wa.me//${m.sender}\n*Message*: ${q}`})
        replay(`Ich habe deine Frage an meine Besitzer weitergegeben. Bitte warte bis sie deine Frage beantwortet haben, die Antwort siehst du hier :https://chat.whatsapp.com/DOnXPARAhdg3qptwUlPuye`)
break
		
		
  /*case 'ow': case 'ownergruppen': case 'og': case 'gruppen':
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)
	if (!isBotAdmins) return replay(mess.botadmin)
            reply(`*MkM Gruppen*
		Chatt: https://chat.whatsapp.com/HaH0LDojg3MC5Lgz17BDSS 
		Werbe: https://chat.whatsapp.com/JlO7hNBJcsX2qOhMjpKul8
 		Support: https://chat.whatsapp.com/DOnXPARAhdg3qptwUlPuye`)
        break
  */

  case 'pmuser': case 'pruser': case 'pmus': case 'pmchats': case 'chats': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!isCreator) return replay(mess.botowner)
 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v)
 let teks = ` 「  Miku's pm user list  」\n\nTotal ${anu.length} users are using Miku in personal chat.`
 for (let i of anu) {
  teks += `\n\nProfile : @${i.id.split('@')[0]}\nChat : ${i.unreadCount}\nLastchat : ${moment(i.conversationTimestamp * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`
 }
 Miku.sendTextWithMentions(m.chat, teks, m)
 }
 break

  case 'gruppen': case 'groups': case 'gruppenchats': case 'grc': case 'grpc': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!isCreator) return replay(mess.botowner)
 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
 let teks = ` 「  Miku's group user list  」\n\nTotal ${anu.length} users are using bot in Groups.`
 for (let i of anu) {
  let metadata = await Miku.groupMetadata(i)
  if (metadata.owner === "undefined") {
  loldd = false
  } else {
  loldd = metadata.owner
  }
  teks += `\n\nName : ${metadata.subject ? metadata.subject : "undefined"}\nOwner : ${loldd ? '@' + loldd.split("@")[0] : "undefined"}\nID : ${metadata.id ? metadata.id : "undefined"}\nMade : ${metadata.creation ? moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss') : "undefined"}\nMember : ${metadata.participants.length ? metadata.participants.length : "undefined"}`
 }
 Miku.sendTextWithMentions(m.chat, teks, m)
 }
break

case 'react': {
                if (!isCreator) throw mess.admin
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                Miku.sendMessage(m.chat, reactionMessage)
            }
break

/*
case 'bping': case 'bbotstatus': case 'bstatusbot': case 'batst': {
				

                let buffimg = await (await fetch(`https://avatars.githubusercontent.com/u/64305844?v=4`)).buffer()
                const used = process.memoryUsage()
                let timestamp = speed()
                let latensi = speed() - timestamp
                
                neww = performance.now()
                oldd = performance.now()
                respon = `ᴘɪɴɢ: ${latensi.toFixed(4)} sec`.trim()
               
Miku.sendMessage(m.chat, { text: respon, contextInfo:{"externalAdReply": {"title": `---${linkNAME}---`,"body": `𝙍𝙪𝙣𝙩𝙞𝙢𝙚 : ${runtime(process.uptime())} >>>ᴄʟɪᴄᴋ ʜᴇʀᴇ<<<`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": buffimg,"sourceUrl": `${linkmsgurl}`}}}, { quoted: m})

            }
            
            break
            
                        case 'bping2': {
				
                const used = process.memoryUsage()
                let buffimg = await (await fetch(`https://avatars.githubusercontent.com/u/64305844?v=4`)).buffer()

                let timestamp = speed()
                let latensi = speed() - timestamp
                
                neww = performance.now()
                oldd = performance.now()
                respon = `
                
>>>ʙᴏᴛ ᴀᴄᴛɪᴠᴇ
ᴘɪɴɢ: ${latensi.toFixed(3)} sec
Yeeee!! You Found it!!
Here is a Bonous Command!!
\nUse \`\`\`Cosplay\`\`\`\n
`.trim()
               
m.reply(respon)
            }
break
*/

/*
case 'addmsg': {
                if (!m.quoted) m.reply(m.chat, 'Reply Message You Want To Save In Database', m)
                if (!text) m.reply(m.chat, `Example : ${prefix + command} nama file`, m)
                let msgs = global.global.global.db.ase
                if (text.toLowerCase() in msgs) m.reply(m.chat, `'${text}'has been registered in the message list`, m)
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Successfully added message in message list as '${text}'
    
Access with ${prefix}getmsg ${text}
View list of Messages With ${prefix}listmsg`)
            }
break

case 'getmsg': {
                if (!text) m.reply(m.chat, `Example : ${prefix + command} file name\n\nView message list with ${prefix}listmsg`, m)
                let msgs = global.global.global.db.ase
                if (!(text.toLowerCase() in msgs)) m.reply(m.chat, `'${text}' not listed in the message list`, m)
                alienalfa.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
break

case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.global.global.db.ase).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ Name : ${i.nama}\n⬡ Type : ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
break

case 'delmsg': case 'deletemsg': {
	        let msgs = global.global.global.db.ase
	        if (!(text.toLowerCase() in msgs))  throw `'${text}' not listed in the message list`
		delete msgs[text.toLowerCase()]
		m.reply(`Successfully removed '${text}' from message list`)
            }
break
  */

 case 'bchat': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!q) return replay(`Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete`)
                if (args[0] === 'mute') {
                    Miku.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    Miku.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    Miku.chatModify({  archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    Miku.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    Miku.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    Miku.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    Miku.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
break

 /*case 'achatinfo': case 'ainfochat': {
                if (!m.quoted) return reply(`Reply Message`)
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) return replay(`The Message Was Not Sent By A Bot!`)
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `🔮 @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━🔮 *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} 🔮 *Status :* ${read ? 'Read' : 'Sent'}\n\n`
                }
                Miku.sendTextWithMentions(m.chat, teks, m)
            }
break

            case 'bcgc': case 'bcgroup': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!text) return replay(`Where Is The Text?\n\nExample : ${prefix + command} Nexus Handsome`)
                let getGroups = await Miku.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Sent Broadcast To ${anu.length} Group Chat, Finish Time ${anu.length * 1.5} Seconds`)
                for (let i of anu) {
                    await sleep(1500)
                      let txt = `「 GOJO-SATORU HERE🎉 」\n\n${text}`
                      Miku.sendMessage(i, txt, Miku.user.name, global.thumb, btn)
                    }
                reply(`Successful Sending Broadcast To ${anu.length} Group(s)`)
            }
            break
            */

case 'afk3': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`${m.pushName} Has Gone Afk/Offline${text ? ': ' + text : ''}`)
            }
break

case 'shutdown':
        if (!isCreator) return reply(mess.botowner);
        reply(`Bye...`);
        await sleep(3000);
        process.exit();
break

 case 'bcgrup':
        if (!isOwner) return reply(mess.owner);
        if (!q) return reply(`Teks Nya Bang?`);
        try {
          anu = await store.chats.all().map((v) => v.id);
          for (let yoi of anu) {
            if (yoi.includes('@g.us')) {
              das.sendMessage(yoi, {
                text: `\n\n${q}`,
              });
            }
          }
          reply(`Succes`);
        } catch (error) {
          sendCreator(JSON.stringify(error.message, null, 2));
          sendCreator(JSON.stringify(error, null, 2));
        }
        reply(`Succes`);
        break 

/*
  case 'bcgrup':
        if (!isOwner) return reply(mess.owner);
        if (!q) return reply(`Teks Nya Bang?`);
        try {
          anu = await store.chats.all().map((v) => v.id);
          for (let yoi of anu) {
            if (yoi.includes('@g.us')) {
              das.sendMessage(yoi, {
                text: `\n\n${q}`,
              });
            }
          }
          reply(`Succes`);
        } catch (error) {
          sendCreator(JSON.stringify(error.message, null, 2));
          sendCreator(JSON.stringify(error, null, 2));
        }
        reply(`Succes`);
break
/*
*/

case 'addmsg': case 'savemsg': {
            	if (isBan) return reply(mess.ban)
	            if (isBanChat) return reply(mess.bangc)
                if (!m.quoted) return reply(`Reply Message You Want To Save In Database`)
                if (!text) return reply(`Example : ${prefix + command} File Name`)
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) return reply(`'${text}' Has Been Registered In The Message List`)
                msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Successfully Added Message In Message List As '${text}'
    
Access With ${prefix}getmsg ${text}
View List Of Messages With ${prefix}listmsg`)
            } 
break

case 'getmsg': case 'getsave': {
            	if (isBan) return reply(mess.banned)
	if (isBanChat) return reply(mess.bangc)
                if (!text) return reply(`Example : ${prefix + command} file name\n\nView Message List With ${prefix}listmsg`)
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return reply(`'${text}' Not Listed In The Message List`)
                Miku.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
break

 case 'listmsg': case 'listsave': {
            	if (isBan) return reply(mess.banned)
	if (isBanChat) return reply(mess.bangc)
                let msgs = JSON.parse(fs.readFileSync('./database/datenbank2/text1.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 DATABASE LIST 」\n\n'
		for (let i of seplit) {
		    teks += `${themeemoji} *Name :* ${i.nama}\n${themeemoji} *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        reply(teks)
	    }
break

case 'delmsg': case 'deletemsg': {
            	if (isBan) return reply(mess.banned)
	if (isBanChat) return reply(mess.bangc)
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return reply(`'${text}' Not Listed In The Message List`)
		delete msgs[text.toLowerCase()]
		reply(`Delete Successfully '${text}' From The Message list`)
            }
break

case 'tagme': {
	if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
Miku.sendMessage(m.chat, {text:`@${m.sender.split("@")[0]}`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
}
break

case 'bchatinfo': {
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.quoted) replay('Reply Message')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) return replay('The message was not sent by a bot!')
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `${global.themeemoji} @${i.userJid.split('@')[0]}\n`
teks += ` ┗━${global.themeemoji} *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ${global.themeemoji} *Status :* ${read ? 'Read' : 'Sent'}\n\n`
}
Miku.sendTextWithMentions(m.chat, teks, m)
}
break

case 'abcgc': case 'abcgroup': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return replay(mess.owner)
if (!args.join(" ")) return replay(`Where is the text?\n\nExample : ${prefix + command} ${global.ownername}`)
let getGroups = await Miku.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
replay(`Send broadcast to ${anu.length} group chat, time's up ${anu.length * 1.5} second`)
for (let i of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'YouTube 🍓',
url: `${global.websitex}`
}
}, {
urlButton: {
displayText: 'Script 🍜',
url: `${global.botscript}`
}
}, {
quickReplyButton: {
displayText: 'Bot Status 🚀',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'Menu 🐰',
id: 'menu'
}  
}, {
quickReplyButton: {
displayText: 'Owner 😈',
id: 'owner'
}
}]
let txt = `*「 ${global.ownername}'s Broadcast」*\n\n${text}`
Miku.send5ButImg(i, txt, `${global.botname}`, log0, btn, thum)
}
replay(`Successfully Sent Broadcast To ${anu.length} Group`)
}
break

case 'ringtone': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.banned)
            if (!args.join(" ")) return reply(`Example: ${prefix}ringtone black over`)
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		Miku.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
break

case 'asetppbot': case 'asetbotpp': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return replay(mess.owner)
if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
let media = await Miku.downloadAndSaveMediaMessage(quoted)
await Miku.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
reply("${mess.waiting}")
}
break

case 'aautoblock': {
    if (!isCreator) throw mess.owner
    if (args[0] === "on") {
    if (db.settings[botNumber].autoblock) return reply(`*Autoblock already on okay*`)
    db.settings[botNumber].autoblock = true
    reply(`*Autoblock on*`)
    } else if (args[0] === "off") {
    if (!db.settings[botNumber].autoblock) return reply(`*Autoblock Already off okay*`)
    db.settings[botNumber].autoblock = false
    reply(`*Autoblock off*`)
    } else {
     let drips = [
    { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
    { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
      ]
      await Miku.sendButtonText(m.chat, drips, `*▊▊ _AUTOBLOCK_ ▊▊*`, Miku.user.name, m)
    }
      } 
  break

case 'ablock': {
        	if (isBan) return reply(mess.ban)	 			
          if (isBanChat) return reply(mess.banChat)
		if (!isCreator) return replay(`${mess.owner}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Miku.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
break

 case 'aunblock': {
        	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
		if (!isCreator) return replay(`${mess.owner}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Miku.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
break

    /*
 case 'speedtest': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) reply(stdout)
        if (stderr.trim()) reply(stderr)
            }
            }
break
    */


 case 'cbcgc': case 'cbcgroup': {
if (!isCreator) throw mess.owner
if (!text) throw `Text ?\n\nExample : ${prefix + command} Text`
let getGroups = await Miku.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Sendet Broadcast in  ${anu.length} Group Chat, ~~~ ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
let txt = `「 Broadcast Bot 」\n\n${text}`
let buttons = [{ buttonId: 'donasi', buttonText: { displayText: 'a' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: 'b' }, type: 1 }]
await Miku.sendButtonText(i, buttons, txt, nyoutube, m, {quoted: fkontak})
}
m.reply(`Send Broadcast in ${anu.length} Group`)
}
break

case 'hahaha': {
                reactionMessage = {
                    react: {
                        text: '❤',
                        key: m.key
                    }
                }
                Miku.sendMessage(m.chat, reactionMessage)
            }
break

case 'myip': {
                if (!isCreator) throw mess.owner
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                      reply("🔎 My public IP address is: " + ip);
                    })
                })
            }
break

case 'myip2': {
                if (!isCreator) throw mess.owner
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        reply("🔎 My public IP address is: " + ip);
                    })
                })
            }
break

case 'tagme2': {
            if (!m.isGroup) throw mess.group
            let me = m.sender
            let jawab = `*@${me.split('@')[0]}*`
            let ments = [me]
            let buttons = [{ buttonId: 'rules', buttonText: { displayText: '❗Rules' }, type: 1 }]
            Miku.sendMessage(m.chat, {react: {text: kloadq,key: m.key}})
            await Miku.sendButtonText(m.chat, buttons, jawab, nyoutube, m, {mentions: ments, quoted: fkontak})
            }
break

case 'kick2': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Miku.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
break

case 'add2': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Miku.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
break

case 'promote2': case 'addadmin2': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Miku.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
break

case 'demote2': case 'deladmin2': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Miku.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
break

 case 'block3': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Miku.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
break

/*
case 'unblock3': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Miku.u�pdateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
break
*/

case 'setname2': case 'setsubject2': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await Miku.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
break

case 'setdesc2': case 'setdesk2': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await Miku.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
break

case 'totag': {
               if (!m.isGroup) throw mess.group
               if (!isBotAdmins) throw mess.botAdmin
               if (!isAdmins) throw mess.admin
               if (!m.quoted) throw `Antwortnachricht mit Bildunterschrift ${prefix + command}`
               Miku.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
break

 case 'listonline2': case 'liston2': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    Miku.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
break

case 'ebinary2': {
            if (!text) throw `Example : ${prefix + command} text`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            m.reply(eb)
        }
break
    
case 'dbinary2': {
            if (!text) throw `Example : ${prefix + command} text`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            m.reply(db)
        }
break

case 'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                Miku.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await Miku.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, Miku.user.name, m)
            }
break



case 'ping3': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Reaktionsgeschwindigkeit ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}
💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
break

 case 'emojimix3': {
			 if (!isRegistered) return m.reply('Sie haben sich noch nicht registriert! Bitte registriere dich mit ${prefix}registriername|alter!')
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
		if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await Miku.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
break

case 'emojimix4': {
			if (!isRegistered) return m.reply('Sie haben sich noch nicht registriert! Bitte registriere dich mit ${prefix}registriername|alter!')
	    if (!text) throw `Example : ${prefix + command} 😅`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await Miku.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
break

    
    

case 'film': case 'movie': case 'moviesearch':
if (isBan) return reply(mess.banned)
	if (isBanChat) return reply(mess.bangc)
	reply(mess.waiting)
if (!q) return reply(`Please enter a Movie search term...\nExample: ${prefix}movie Spiderman`)
xfarrapi.Film(q)
    .then(data => {console.log(data)
    let krl = `*Search Term:* ${q}\n\n`
			    for (let i of data) {
                krl += (`-----------------------------------------------------------------------------\n\n\n*Movie Name:* ${i.judul}\n *Quality :* ${i.quality}\n *Type : ${i.type}*\n *Uploaded on :* ${i.upload}\n *Source URL :* ${i.link}\n\n\n`)
                }
               Miku.sendMessage(from, { image: { url: data[0].thumb}, caption: krl }, { quoted: fdocs })
});
break


case 'aspeedtest': {
            reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python Speed1.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) reply(stdout)
        if (stderr.trim()) reply(stderr)
            }
            }
break

case 'bspeedtest': {
            reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python Speed2.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) reply(stdout)
        if (stderr.trim()) reply(stderr)
            }
            }
break

/*
case 'cspeedtest': {
            reply('Testing Speed...')
            let cp = require('child_process')
            let { promisi�fy } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python Speed3.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) reply(stdout)
        if (stderr.trim()) reply(stderr)
            }
            }
break
*/

case 'dspeedtest': {
            reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python Speed4.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) reply(stdout)
        if (stderr.trim()) reply(stderr)
            }
            }
break


case 'espeedtest': {
            reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python Speed5.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) reply(stdout)
        if (stderr.trim()) reply(stderr)
            }
            }
break

  /*
  case 'addowner': case 'delowner': {

    const json = JSON.parse(fs.readFileSync('./src/owner.json'))
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    else who = args[0] ? args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
    if (json.includes(who)) throw `${await Miku.getName(who)} ist noch kein owner!`
    let index = json.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
    json.splice(index, 1)
    fs.writeFileSync('./src/owner.json', JSON.stringify(json))
    m.reply(`${await Miku.getName(who)} ist kein owner mehr!`)

    delete require.cache[require.resolve('../config')]
    require('../config')

}
break
*/


case 'wallpaper': case 'animewallpaper': case 'animewall': case 'wal': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args.join(" ")) return reply("Please enter a term to search!")
const { AnimeWallpaper } =require("anime-wallpaper")
const wall = new AnimeWallpaper();
const pages = [1,2,3,4];
const random=pages[Math.floor(Math.random() * pages.length)]
        const wallpaper = await wall .getAnimeWall4({ title: q, type: "sfw", page: pages }).catch(() => null);
        const i = Math.floor(Math.random() * wallpaper.length);
		
let buttons = [
            {buttonId: `${prefix}wallpaper ${args.join(" ")}`, buttonText: {displayText: 'gib Mehr !!!'}, type: 1}
        ]
        let buttonMessage = {
            image: {url:wallpaper[i].image},
            caption: `*Search term:* ${q}`,
            footer: `${BotName}`,
            buttons: buttons,
            headerType: 4
        }
        Miku.sendMessage(m.chat, buttonMessage, { quoted: m })
    }
    break


case 'wikimedia': case 'wikiimage': {
	if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
                if (!args.join(" ")) return reply("What picture are you looking for??")
		let { wikimedia } = require('./lib/scraper')
        anu = await wikimedia(args)
        hasil = anu[Math.floor(Math.random() * anu.length)]
        let buttons = [
            {buttonId: `${prefix}wikimedia ${args.join(" ")}`, buttonText: {displayText: 'Next Image'}, type: 1}
        ]
        let buttonMessage = {
            image: { url: hasil.image },
            caption: `Title : ${hasil.title}\nSource : ${hasil.source}\nMedia Url : ${hasil.image}`,
            footer: `${BotName}`,
            buttons: buttons,
            headerType: 4
        }
        Miku.sendMessage(m.chat, buttonMessage, { quoted: m })
    }
    break

case 'quotesimagexxx': case 'qoutesimagexxx': case 'quoteimage':
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
				   let cok = await fetchJson(`http://api.lolhuman.xyz/api/random/quotesimage?apikey=${lolkey}`)
				   reply(mess.waiting)
				  Miku.sendMessage(m.chat, { image: { url: cok }, caption: 'Here it is...' }, { quoted: m })
				  break

case 'quotesanime': case 'quoteanime': case 'animequote': case 'animequotes':{
		let { quotesAnime } = require('./lib/scraper')
        let anu = await quotesAnime()
        hasil = anu[Math.floor(Math.random() * anu.length)]
        let buttons = [
            {buttonId: `${prefix}quotesanime`, buttonText: {displayText: 'NOCH EINS bitte'}, type: 1}
        ]
        let buttonMessage = {
            text: `_${hasil.quotes}_\n\nBy '${hasil.karakter}', ${hasil.anime}\n\n- ${hasil.up_at}`,
            footer: 'Miku',
            buttons: buttons,
            headerType: 2
        }
        Miku.sendMessage(m.chat, buttonMessage, { quoted: m })
    }
    break


case 'animestory': { 
	if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
await fetchJson(`https://api.jikan.moe/v4/anime?q=${q}`)
.then((res) =>{
console.log(res)   
let sections = []   
  for (let i of res.data) {
  const list = {title: `${i.title}`,
  rows: [
	    {
	     title: `${i.title}\n\n`, 
	     rowId: `${prefix}animesearch ${i.mal_id}`,
	     description: `${i.synopsis}`
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  Miku.sendMessage(
      from, 
      {
       text: "Anime Search",
       footer: BotName,
       title: OwnerName,
       buttonText: "Search Results",
       sections
      }, { quoted : m }
    )  
})
}
  break


  case 'grupsetting':
    case 'groupsetting':{
        if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
            let sections = []
            let com = [`group open`,`leveling on`,`antilinkgc on`,`antilinktg on`,`antilinktt on`,`antilinkytch on`,`antilinkytvid on`,`antilinkig on`,`antilinkfb on`,`antilinktwit on`,`antilinkall on`,`antiwame on`]
            let comm = [`group close`,`leveling off`,`antilinkgc off`,`antilinktg off`,`antilinktt off`,`antilinkytch off`,`antilinkytvid off`,`antilinkig on`,`antilinkfb off`,`antilinktwit off`,`antilinkall off`,`antiwame off`]
            let listnya = [`Group open/close`,`Leveling on/off`,`Antilink Group on/off`,`Antilink Telegram on/off`,`Antilink Tiktok on/off`,`Antilink Youtube Channel on/off`,`Antilink Youtube Video on/off`,`Antilink Instagram on/off`,`Antilink Facebook on/off`,`Antilink Twitter on/off`,`Antilink All on/off`,`Anti Wame on/off`]
            let suruh = [`Enable`, `Disable`]
            let fiturname = [`Group`,`Leveling`,`Antilink Group`,`Antilink Telegram`,`Antilink Tiktok`,`Antilink Youtube Channel`,`Antilink Youtube Video`,`Antilink Instagram`,`Antilink Facebook`,`Antilink Twitter`,`Antilink All`,`Anti Wame`,`Auto Revoke`]
            let startnum = 0; let startnu = 0; let startn = 0;let start = 0
            let startnumm = 1
            for (let x of com) {
                const yy = {title: `${listnya[startnum++]}`,
            rows: [
               {
                title: `${suruh[0]}`,
                description: `Activate ${fiturname[startnu++]}`,
                rowId: `${prefix}${x}`
              },{
                title: `${suruh[1]}`,
                description: `Deactivate ${fiturname[startn++]}`,
                rowId: `${prefix}${comm[start++]}`
              }
            ]
           }
                sections.push(yy)
            }
            const sendm =  Miku.sendMessage(
from, 
{
text: "Group Settings",
footer: BotName,
title: "Set your group settings here...",
buttonText: "Click Button",
sections
}, { quoted : m }
)  
}
break

		
case 'animesearchxxx': case 'anime':{
    await fetchJson(`https://api.jikan.moe/v4/anime/${q}`)
    .then((res) => {
    let txt = `   _Anime Search Engine_ \n\n*Title:* *${res.data.title}*\n*English:* *${res.data.title_english}*\n*Japanese:* *${res.data.title_japanese}*\n�*Anime Type:* *${res.data.type}*\n*Adaptation:* *${res.data.source}*\n*Total Episode:* *${res.data.episodes}*\n*Status:* *${res.data.status}*\n*Ongoing:* *${res.data.airing ? 'Yes' : 'No'}*\n*Aired:* *${res.data.aired.string}*\n*Duration:* *${res.data.duration}*\n*Rating:* *${res.data.rating}*\n*Score:* *${res.data.score}*\n*Rank:* *${res.data.rank}*\n*Main Producer:* *${res.data.producers.name}*\n*Studio:* *${res.data.studios[0].name}* `
    Miku.sendMessage(from, { image : { url : res.data.images.jpg.image_url}, caption : txt}, {quoted :m }) 
    })
    }
    break
		

case 'coffee': case 'kopi': {
        if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
                let buttons = [
                        {buttonId: `${prefix}coffee`, buttonText: {displayText: '>>'}, type: 1}
                    ]
                    let buttonMessage = {
                        image: { url: 'https://coffee.alexflipnote.dev/random' },
                        caption: `Here is your Coffee...`,
                        footer: `${BotName}`,
                        buttons: buttons,
                        headerType: 4
                    }
                    Miku.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                break

 

case 'emojimix': {
	   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!q) reply(`*Example :* ${prefix + command} 🦉+🤣`)
let [emoji1, emoji2] = q.split`+`
let kuntuh = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of kuntuh.results) {
let encmedia = await Miku.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break

case 'getcase':
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (m.isGroup) reply(mess.privateonly)
if (!isCreator) return reply(mess.botowner)
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("Core.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
replay(`${getCase(q)}`)
break


 case 'emoji': {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args.join(" ")) return reply('Wo ist das Emoji?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await Miku.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption: `Hier ist es ...`}, {quoted:m})
await Miku.sendMessage(from, {text:"Antworten Sie mit -s auf dieses Bild, um einen Aufkleber zu erstellen"}, {quoted:mese})
})
}
break

/*
case 'delete': case 'del':{
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.quoted) return
 let { chat, fromMe, id, isBaileys } = m.quoted
 if (!isBaileys) return replay('How can i delete messages of other person? Baka!')
 Miku.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
 }
 break
*/

 case 'deleteall': case 'delall': case 'delete': case 'del': case 'd': {
 if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (!m.quoted) return reply('Please mention a message baka!')
 let { chat, fromMe, id} = m.quoted

const key = {
    remoteJid: m.chat,
    fromMe: false,
    id: m.quoted.id,
    participant: m.quoted.sender
}

await Miku.sendMessage(m.chat, { delete: key })
 }
 break



 case 'listpc': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!isCreator) return replay(mess.botowner)
 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v)
 let teks = ` 「  Miku's pm user list  」\n\nTotal ${anu.length} users are using Miku in personal chat.`
 for (let i of anu) {
  teks += `\n\nProfile : @${i.id.split('@')[0]}\nChat : ${i.unreadCount}\nLastchat : ${moment(i.conversationTimestamp * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`
 }
 Miku.sendTextWithMentions(m.chat, teks, m)
 }
 break

 case 'listgc': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
 let teks = ` 「  Miku's group user list  」\n\nTotal ${anu.length} users are using bot in Groups.`
 for (let i of anu) {
  let metadata = await Miku.groupMetadata(i)
  if (metadata.owner === "undefined") {
  loldd = false
  } else {
  loldd = metadata.owner
  }
  teks += `\n\nName : ${metadata.subject ? metadata.subject : "undefined"}\nOwner : ${loldd ? '@' + loldd.split("@")[0] : "undefined"}\nID : ${metadata.id ? metadata.id : "undefined"}\nMade : ${metadata.creation ? moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss') : "undefined"}\nMember : ${metadata.participants.length ? metadata.participants.length : "undefined"}`
 }
 Miku.sendTextWithMentions(m.chat, teks, m)
 }
 break

 case 'afk': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 let user = global.db.users[m.sender]
 user.afkTime = + new Date
 user.afkReason = args.join(" ")
 replay(`${m.pushName} ist jetzt weg von whatsApp.\nAFK Reason : ${args.join(" ") ? args.join(" ") : ''}`)
 }
 break


 case 'fliptext': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (args.length < 1) return replay(`Example:\n${prefix}fliptext ${OwnerName}`)
 quere = args.join(" ")
 flipe = quere.split('').reverse().join('')
 replay(`\`\`\`「  Text Flipper Tool  」\`\`\`\n*Input text :*\n${quere}\n*Fliped text :*\n${flipe}`)
 }
 break

 case 'toletter': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!Number(args[0])) return replay(`Example:\n${prefix}toletter 956`)
 try {
 quere = args.join(" ")
 convertes = await toHur(quere)
 replay(`\`\`\`「  Word Maker Tool  」\`\`\`\n*Input Number :*\n${quere}\n*Converted Alphabet :*\n${convertes}`)
 } catch {
 replay(`Error!`)
 }
 }

   case 'leveling':
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isAdmins && !isCreator) return reply(mess.useradmin)
 if (args.length < 1) return reply('Type on to *Enable*\nType off to *Disable*')
 if (args[0] === 'on'){
 if (isLeveling) return reply(`Already activated`)
 _leveling.push(from)
 fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
 reply('Leveling activated')
 } else if (args[0] === 'off'){
 let anu = _leveling.indexOf(from)
 _leveling.splice(anu, 1)
 fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
 reply('Leveling deactivated')
 } 
 break

 case 'antilinkgc': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLink) return replay('Already activated')
 ntilink.push(from)
 replay('Activated _Antilink_ in this group.')
 var groupe = await Miku.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 Miku.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLink) return replay('Already deactivated!')
 let off = ntilink.indexOf(from)
 ntilink.splice(off, 1)
 replay('Deactivated _Antilink_ in this group!')
 } else {
   let buttonsntilink = [
   { buttonId: `${prefix}antilinkgc on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `${prefix}antilinkgc off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await Miku.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off`, `${global.BotName}`, m)
   }
   }
   break


   case 'antilinkyoutubevideo': case 'antilinkyoutubevid': case 'antilinkytvid': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkYoutubeVid) return replay('Already activated')
 ntilinkytvid.push(from)
 replay('Activated youtube video antilink !')
 var groupe = await Miku.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 Miku.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkYoutubeVid) return replay('Already deactivated')
 let off = ntilinkytvid.indexOf(from)
 ntilinkytvid.splice(off, 1)
 replay('Deactivated youtube video antilink !')
 } else {
   let buttonsntilink = [
   { buttonId: `${prefix}antilinkyoutubevideo on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `${prefix}antilinkyoutubevideo off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await Miku.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off`, `${global.BotName}`, m)
   }
   }
   break
		
		

     case 'antilinkyoutubech': case 'antilinkyoutubechannel': case 'antilinkytch': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkYoutubeChannel) return replay('Already activated')
 ntilinkytch.push(from)
 replay('Activated youtube channel antilink !')
 var groupe = await Miku.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 Miku.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkYoutubeChannel) return replay('Already deactivated')
 let off = ntilinkytch.indexOf(from)
 ntilinkytch.splice(off, 1)
 replay('Deactivated youtube channel antilink !')
 } else {
   let buttonsntilink = [
   { buttonId: `${prefix}antilinkyoutubech on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `${prefix}antilinkyoutubech off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await Miku.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off`, `${global.BotName}`, m)
   }
   }
   break


   case 'antilinkinstagram': case 'antilinkig': case 'antilinkinsta': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkInstagram) return replay('Already activated')
 ntilinkig.push(from)
 replay('Activated instagram antilink !')
 var groupe = await Miku.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 Miku.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkInstagram) return replay('Already deactivated')
 let off = ntilinkig.indexOf(from)
 ntilinkig.splice(off, 1)
 replay('Deactivated instagram antilink !')
 } else {
   let buttonsntilink = [
   { buttonId: `${prefix}antilinkinstagram on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `${prefix}antilinkinstagram off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await Miku.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off`, `${global.BotName}`, m)
   }
   }
   break

   case 'antilinkfacebook': case 'antilinkfb': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkFacebook) return replay('Already activated')
 ntilinkfb.push(from)
 replay('Activated facebook antilink !')
 var groupe = await Miku.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 Miku.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkFacebook) return replay('Already deactivated')
 let off = ntilinkfb.indexOf(from)
 ntilinkfb.splice(off, 1)
 replay('Deactivated facebook antilink !')
 } else {
   let buttonsntilink = [
   { buttonId: `${prefix}antilinkfacebook on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `${prefix}antilinkfacebook off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await Miku.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off `, `${global.BotName}`, m)
   }
   }
   break


   case 'antilinktelegram': case 'antilinktg': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkTelegram) return replay('Already activated')
 ntilinktg.push(from)
 replay('Activated telegram antilink !')
 var groupe = await Miku.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 Miku.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkTelegram) return replay('Already deactivated')
 let off = ntilinkig.indexOf(from)
 ntilinkig.splice(off, 1)
 replay('Deactivated telegram antilink in this group')
 } else {
   let buttonsntilink = [
   { buttonId: `${prefix}antilinktelegram on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `${prefix}antilinktelegram off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await Miku.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off `, `${global.BotName}`, m)
   }
   }
   break


   case 'antilinktiktok': case 'antilinktt': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkTiktok) return replay('Already activated')
 ntilinktt.push(from)
 replay('Activated tiktok antilink !')
 var groupe = await Miku.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 Miku.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkTiktok) return replay('Already deactivated')
 let off = ntilinktt.indexOf(from)
 ntilinktt.splice(off, 1)
 replay('Deactivated tiktok antilink !')
 } else {
   let buttonsntilink = [
   { buttonId: `${prefix}antilinktiktok on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `${prefix}antilinktiktok off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await Miku.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn �to enable\nOff to disable`, `${global.BotName}`, m)
   }
   }
   break

   case 'antilinktwt': case 'antilinktwitter': case 'antilinktwit': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkTwitter) return replay('Already activated')
 ntilinktwt.push(from)
 replay('Activated twitter antilink in this group !')
 var groupe = await Miku.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 Miku.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkTwitter) return replay('Already deactivated')
 let off = ntilinktwt.indexOf(from)
 ntilinktwt.splice(off, 1)
 replay('Deactivated twitter antilink !')
 } else {
   let buttonsntilink = [
   { buttonId: `${prefix}antilinktwt on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `${prefix}antilinktwt off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await Miku.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.BotName}`, m)
   }
   }
   break


   case 'antilinkall': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkTwitter) return replay('Already activated')
 ntilinkall.push(from)
 replay('Enabled all antilink !')
 var groupe = await Miku.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 Miku.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkAll) return replay('Already deactivated')
 let off = ntilinkall.indexOf(from)
 ntilinkall.splice(off, 1)
 replay('Disabled all antilink !')
 } else {
   let buttonsntilink = [
   { buttonId: `${prefix}antilinkall on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `${prefix}antilinkall off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await Miku.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.BotName}`, m)
   }
   }
   break


   case 'antiwame': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (antiWame) return replay('Already activated')
 ntwame.push(from)
 replay('Activated antiwame !')
 var groupe = await Miku.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 Miku.sendMessage(from, {text: `\`\`\`*「  Warning  」*\`\`\`\n\nAntilink is enabled!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!antiWame) return replay('Already deactivated')
 let off = nttoxic.indexOf(from)
 ntwame.splice(off, 1)
 replay('Deactivated antiwame !')
 } else {
   let buttonsntwame = [
   { buttonId: `${prefix}antiwame on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `${prefix}antiwame off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await Miku.sendButtonText(m.chat, buttonsntwame, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.BotName}`, m)
   }
   }
   break


   case 'nsfw': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiNsfw) return replay('Bereits aktiviert')
 ntnsfw.push(from)
 replay('Aktivierte NSFW-Befehle!')
 var groupe = await Miku.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 Miku.sendMessage(from, {text: `\`\`\`「 Notice 」\`\`\`\n\Die NSFW-Funktion (not safe for work) wurde in dieser Gruppe aktiviert, was bedeutet, dass jeder hier auf die Befehle für Erwachsene zugreifen kann!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiNsfw) return replay('Already deactivated')
 let off = ntnsfw.indexOf(from)
 ntnsfw.splice(off, 1)
 replay('Disabled NSFW Commands!')
 } else {
   let buttonsntnsfw = [
   { buttonId: `${prefix}nsfw on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `${prefix}nsfw off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await Miku.sendButtonText(m.chat, buttonsntnsfw, `Bitte klicken Sie auf die Schaltfläche unten\n\nOn to enable\nOff to disable`, `${global.BotName}`, m)
   }
   }
   break


   case 'ban': {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!isCreator) return replay(mess.botowner)
if (!args[0]) return replay(`Wählen Sie „add“ oder „del“ (zum Sperren hinzufügen, zum Entsperren löschen). Zum Beispiel: Antworten Sie mit *${prefix}ban add* auf den Benutzer, den Sie sperren möchten.`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banUser.includes(orgnye)
if (args[0] === "add") {
if (isBane) return ads('Benutzer ist bereits gesperrt.')
banUser.push(orgnye)
replay(`Der Benutzer wurde erfolgreich gesperrt.\nReason:\n${text} `)
} else if (args[0] === "del") {
if (!isBane) return ads('Benutzer wurde bereits entbannt.')
let delbans = banUser.indexOf(orgnye)
banUser.splice(delbans, 1)
replay(`Der Benutzer wurde erfolgreich entbannt.`)
} else {
replay("Error")
}
}
break


case 'listonline': case 'listaktif': case 'here':{
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
 let online = [...Object.keys(store.presences[id]), botNumber]
 let liston = 1
 Miku.sendText(m.chat, '  「 *Online Members* 」\n\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
 }
 break


		case'tagadmins': case 'admins': case 'admin': case 'tag': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly) 
 Miku.sendMessage(from, { react: { text: "🗿" , key: m.key }})
 if (!text) return replay(`*Bitte schreiben sie eine nachricht für die admins.*`)
 let teks = `*「 Tag Admins 」*
  
 *Message : ${text}*\n\n`
 for (let mem of groupAdmins) {
 teks += `🗿 @${mem.split('@')[0]}\n`
 }
 Miku.sendMessage(m.chat, { text: teks, mentions: groupAdmins}, { quoted: m })
 }
 break
		


case 'happymod': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!args.join(" ")) return replay(`Example : ${prefix + command} Kinemaster`)
 yogipw.happymod(args.join(" ")).then(async(res) => {
 teks = '```「 HappyMod Search Engine 」```'
 for (let i of res) {
 teks += `\n\n${i.name}\n`
 teks += `${i.link}`
 }
 let buttons = [
 {buttonId: `${prefix}menu`, buttonText: {displayText: '✨Menu✨'}, type: 1}
 ]
 let buttonMessage = {
 image: {url:res[0].icon},
 jpegThumbnail: Thumb,
 caption: teks,
 footer: `${global.BotName}`,
 buttons: buttons,
 headerType: 4
 }
 Miku.sendMessage(m.chat, buttonMessage, { quoted: m })
 })
 }
 break


 case 'yts': case 'ytsearch': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!args.join(" ")) return replay(`E�xample : -yts Heat waves`)
 let yts = require("yt-search")
 let search = await yts(args.join(" "))
 let teks = '```「 YouTube search Engine 」```\n\n Search Term: '+text+'\n\n'
 let no = 1
 for (let i of search.all) {
 teks += `Result No : ${no++}\n\nTitle : ${i.title}\n\nViews : ${i.views}\n\nDuration : ${i.timestamp}\n\nUploaded : ${i.ago}\n\nAuthor : ${i.author.name}\n\nUrl : ${i.url}\n\n\n-----------------------------------------------------------------------------\n\n\n`
 }
 Miku.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
 }
 break

 case 'setname': case 'setsubject': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (!text) return replay('Bitte geben Sie -setname <Neuer Gruppenname> ein, um diesen Gruppennamen zu ändern')
 await Miku.groupUpdateSubject(m.chat, text).then((res) => replay(mess.jobdone)).catch((err) => replay(jsonformat(err)))
 }
 break

case 'block': {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
     if (!isCreator) return reply(mess.botowner)
     let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
     await Miku.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
 }
 break

case 'unblock': {
            if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
     if (!isCreator) return reply(mess.botowner)
     let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
     await Miku.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
 }
 break

 case 'setdesc': case 'setdesk': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (!text) return replay('Pls enter -setname <New Group Description>  to change this Group Description.')
 await Miku.groupUpdateDescription(m.chat, text).then((res) => replay(mess.jobdone)).catch((err) => replay(jsonformat(err)))
 }
 break

 case 'setgrouppp': case 'setgruppp': case 'setgcpp': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
 if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command} to change the Profile Pic of this group.`)
 if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command} to change the Profile Pic of this group.`)
 let media = await Miku.downloadAndSaveMediaMessage(quoted)
 await Miku.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
 replay(mess.jobdone)
 }
 break

 case 'tag':
case 'tagall':
case 'all':
case 'gutenmorgen':
{
  if (isBan) return reply(mess.banned);	 			
  if (isBanChat) return reply(mess.bangc);
  if (!m.isGroup) return reply(mess.grouponly);
  if (!isAdmins && !isCreator) return reply(mess.useradmin);
  let teks = `「 _Tag All_ 」
  
*Message : ${args.join(" ") ? args.join(" ") : 'no message'}*\n\n`;
  for (let mem of participants) {
    teks += `» @${mem.id.split('@')[0]}\n`;
  }
  Miku.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m });
}
break;


		

 case 'hidetag': {
  if (isBan) return reply(mess.banned);
  if (isBanChat) return reply(mess.bangc);
  if (!m.isGroup) return reply(mess.grouponly);
  if (!isAdmins && !isCreator) return reply(mess.useradmin);
  Miku.sendMessage(m.chat, { text : args.join(" ") ? args.join(" ") : '' , mentions: participants.map(a => a.id)}, { quoted: m });
  break;
}

		

     case 'purge':{
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!m.isGroup) return replay(mess.grouponly)
     if (!isBotAdmins) return replay(mess.botadmin)
     if (!isAdmins && !isCreator) return replay(mess.useradmin)

        const delay = time => new Promise(res=>setTimeout(res,time));

        let users = (await Miku.fetchGroupMetadataFromWA(m.chat)).participants.map(u => u.jid)
        for (let user of users){

            await Miku.groupParticipantsUpdate(m.chat, [user], 'remove')
            await delay(3000)
        }
    }
     break




    case 'nowa':  case 'stalk': case 'stalknumber':{
        if (isBan) return reply(mess.banned)
        if (!args[0]) return reply(`Verwenden Sie den Befehl like : ${prefix}stalk <number>xxx`)
        var inputnumber = args[0]
        if (!inputnumber.includes('x')) return reply('Sie haben x nicht hinzugefügt')
        reply(`Suche nach WhatsApp-Konto im angegebenen Bereich...`)
        reply(`Bitte warten Sie, während ich Details abrufe...`)
        function countInstances(string, word) {
        return string.split(word).length - 1;
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx;
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        } else if (random_length == 4) {
            randomxx = 10000
        }
        var nomerny = `*『 Liste der WhatsApp-Nummern 』*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Nummern ohne WhatsApp-Konto innerhalb des von Ihnen angegebenen Bereichs*\n`
        for (let i = 0; i < randomxx; i++) {
        var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
        var status1 = nu[Math.floor(Math.random() * nu.length)]
        var status2 = nu[Math.floor(Math.random() * nu.length)]
        var status3 = nu[Math.floor(Math.random() * nu.length)]
        var dom4 = nu[Math.floor(Math.random() * nu.length)]
        var rndm;
        if (random_length == 1) {
        rndm = `${status1}`
        } else if (random_length == 2) {
        rndm = `${status1}${status2}`
        } else if (random_length == 3) {
        rndm = `${status1}${status2}${status3}`
        } else if (random_length == 4) {
        rndm = `${status1}${status2}${status3}${dom4}`
        }
        var anu = await Miku.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`);
        var anuu = anu.length !== 0 ? anu : false
        try {
        try {
        var anu1 = await Miku.fetchStatus(anu[0].jid)
        } catch {
        var anu1 = '401'
        }
        if (anu1 == '401' || anu1.status.length == 0) {
        nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
        } else {
        nomerny += `🎀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n🔹 *Bio :* ${anu1.status}\n🔸 *Updated On :* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n`
        }
        } catch {
        nowhatsapp += `${number0}${i}${number1}\n`
        }
        }
        reply(`${nomerny}${nobio}${nowhatsapp}`)
        }
        break







 case 'grouplink': case 'gclink': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 let response = await Miku.groupInviteCode(m.chat)
 Miku.sendMessage(m.chat, {text:`*Group Name:* *${groupMetadata.subject}* \n\n*Group Link :* \nhttps://chat.whatsapp.com/${response}l`, "contextInfo": {
 mimetype: "image/jpeg",
 text: `${global.OwnerName}`,
 "forwardingScore": 1000000000,
 isForwarded: true,
 sendEphemeral: true,
 "externalAdReply": {
 "title": `${global.BotName}`,
 "body": `${global.WaterMark}`,
 "previewType": "PHOTO",
 "thumbnailUrl": Thumb,
 "thumbnail": Thumb,
 "sourceUrl": `${global.websitex}`
 }}}, { quoted: m, detectLink: true })
 }
 break


 case 'resetlinkgc':
    case 'resetlinkgroup':
    case 'resetlinkgrup':
    case 'revoke':
    case 'resetlink':
    case 'resetgrouplink':
    case 'resetgclink':
    case 'resetgruplink': {
       if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!isBotAdmins) return replay(mess.botadmin)
    if (!isAdmins && !isCreator) return replay(mess.useradmin)
    Miku.groupRevokeInvite(m.chat)
    }
    break


    case 'group': case 'hzm': {
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!m.isGroup) return replay(mess.grouponly)
     if (!isBotAdmins) return replay(mess.botadmin)
     if (!isAdmins && !isCreator) return replay(mess.useradmin)
     if (args[0] === 'close'){
     await Miku.groupSettingUpdate(m.chat, 'announcement').then((res) => replay(`Gruppe wurde geschlossen!`)).catch((err) => replay(jsonformat(err)))
     } else if (args[0] === 'open'){
     await Miku.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replay(`Gruppe wurde geöffnet!`)).catch((err) => replay(jsonformat(err)))
     } else {
     let buttons = [
     { buttonId: `${prefix}group open`, buttonText: { displayText: 'Open' }, type: 1 },
     { buttonId: `${prefix}group close`, buttonText: { displayText: 'Close' }, type: 1 }
     ]
     let buttonMessage = {
     image: BotLogo,
     jpegThumbnail: Thumb,
     caption: `*「 ${global.BotName} 」*\n\n_Group Setting Changer tool_:`,
     footer: `${BotName}`,
     buttons: buttons,
     headerType: 4
     }
     Miku.sendMessage(m.chat, buttonMessage, { quoted: m })
     }
     }
     break

     case 'promote': {
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!m.isGroup) return replay(mess.grouponly)
     if (!isBotAdmins) return replay(mess.botadmin)
     if (!isAdmins && !isCreator) return replay(mess.useradmin)
     let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
     await Miku.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => replay(jsonformat(res))).catch((err) => replay(jsonformat(err)))
     }
     break

     case 'demote': {
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!m.isGroup) return replay(mess.grouponly)
     if (!isBotAdmins) return replay(mess.botadmin)
     if (!isAdmins && !isCreator) return replay(mess.useradmin)
     let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
     await Miku.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => replay(jsonformat(res))).catch((err) => replay(jsonformat(err)))
     }
     break

     case 'remove': case 'geh': case 'disrespectet': case 'tschüß': case 'hinfort': case 'flieg': case 'tschüss':{
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!m.isGroup) return replay(mess.grouponly)
     if (!isBotAdmins) return replay(mess.botadmin)
     if (!isAdmins && !isCreator) return replay(mess.useradmin)
     let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
     await Miku.groupParticipantsUpdate(m.chat, [users], 'remove')
     }
     break
		
		
     case 'add':{     			
     if (!m.isGroup) return replay(mess.grouponly)
     if (!isBotAdmins) return replay(mess.botadmin)
     let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
     if (users.length == 0) return replay(`Bitte geben Sie die Nummer der Person ein, die Sie zu dieser Gruppe hinzufügen möchten`)
     await Miku.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => replay(`Benutzer erfolgreich hinzugefügt!`)).catch((err) => replay(`Cannot add that user to this group!`))
     }
     break


     case 'join': {
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!args[0]) return replay(`Where's the link?`)
     vdd = args[0]
     let vcc = vdd.split("https://chat.whatsapp.com/")[1]
     if (!vcc) return replay("Link invalid!")
     if (isCreator) {
     await Miku.groupAcceptInvite(vcc).then(async(res) => replay(jsonformat(res))).catch(_ => _)
     replay("Succes!")
     } else {
     Miku.query({
     tag: "iq",
     attrs: {
     type: "get",
     xmlns: "w:g2",
     to: "@g.us"
     },
     content: [{ tag: "invite", attrs: { code: vcc } }]
     }).then(async(res) => {
     sizny = res.content[0].attrs.size
     if (sizny < 5) {
     teks = `Tut mir leid, munimun 20 Mitglieder sind in einer Gruppe erforderlich, um einen Bot hinzuzufügen!`
     sendOrder(m.chat, teks, "667140254502463", fs.readFileSync('./Assets/pic7.jpg'), `${global.packname}`, `${global.BotName}`, "4915212908434@s.whatsapp.net", "AR6NCY8euY5cbS8Ybg5Ca55R8HFSuLO3qZqrIYCT7hQp0g==", "99999999999999999999")
     } else if (sizny > 20) {
     await Miku.groupAcceptInvite(vcc).then(async(res) => replay(jsonformat(res))).catch(_ => _)
     replay("Joined !")
     } else {
     replay("Error")
     }
     }).catch(_ => _)
     }
     }
     break

  
     case 'volume': {
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!args.join(" ")) return reply(`Example: ${prefix + command} 10`)
     media = await Miku.downloadAndSaveMediaMessage(quoted, "volume")
     if (isQuotedAudio) {
     rname = getRandom('.mp3')
     exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
     fs.unlinkSync(media)
     if (err) return reply('Error!')
     jadie = fs.readFileSync(rname)
     Miku.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
     fs.unlinkSync(rname)
     })
     } else if (isQuotedVideo) {
     rname = getRandom('.mp4')
     exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
     fs.unlinkSync(media)
     if (err) return reply('Error!')
     jadie = fs.readFileSync(rname)
     Miku.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
     fs.unlinkSync(rname)
     })
     } else {
     reply("Bitte senden Sie nur Video-/Audiodatei!")
     }
     }
     break

     case 'tempo': {
        if (isBan) return reply(mess.banned)
        if (isBanChat) return reply(mess.bangc)
        if (!args.join(" ")) return reply(`Example: ${prefix + command} 10`)
        var req = args.join(' ')
        media = await Miku.downloadAndSaveMediaMessage(quoted, "tempo")
        if (isQuotedAudio) {
        ran = getRandom('.mp3')
        exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
        fs.unlinkSync(media)
        if (err) return reply('Error!')
        hah = fs.readFileSync(ran)
        Miku.sendMessage(from, {audio:hah, mimetype:'audio/mp4', ptt:true}, {quoted:m})
        fs.unlinkSync(ran)
        })
        } else if (isQuotedVideo) {
        ran = getRandom('.mp4')
        exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
        fs.unlinkSync(media)
        if (err) return reply('Error!')
        hah = fs.readFileSync(ran)
        Miku.sendMessage(from, {video:hah, mimetype:'video/mp4'}, {quoted:m})
        fs.unlinkSync(ran)
        })
        } else {
        reply("Bitte senden Sie nur Video-/Audiodatei!")
        }
        }
        break

        case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
            try {
            let set
            if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:widt�h=2:g=20'
            if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
            if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
            if (/earrape/.test(command)) set = '-af volume=12'
            if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
            if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
            if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
            if (/reverse/.test(command)) set = '-filter_complex "areverse"'
            if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
            if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
            if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
            if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
            if (/audio/.test(mime)) {
            reply(mess.waiting)
            let media = await Miku.downloadAndSaveMediaMessage(quoted)
            let ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
            fs.unlinkSync(media)
            if (err) return reply(err)
            let buff = fs.readFileSync(ran)
            Miku.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
            fs.unlinkSync(ran)
            })
            } else reply(`Pls mention any audio you want to modify _${prefix + command}_`)
            } catch (e) {
            reply(e)
            }
            break


case 'calculator': case 'cal': case 'calculate':{
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (args.length < 1) return reply(`*Example :*\n${prefix}calculator 2*5\n\n`)
let qsd = args.join(" ")
if (typeof mathjs.evaluate(qsd) !== 'number') {
reply('Error')
} else {
reply(`\`\`\`「 _Calculator Tool_ 」\`\`\`\n\n*Input :* ${qsd}\n*Calculation Result :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
}
}
break

case 'public': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!isCreator) return reply(mess.owner)
 Miku.public = true
 reply('Ich bin jetzt öffentlich zugänglich!')
 Miku.setStatus(`Mode : Public`)
 }
 break
 
 case 'self': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!isCreator) return reply(mess.botowner)
 Miku.public = false
 reply('Nur der Besitzer kann mich jetzt benutzen!')
 Miku.setStatus(`Mode : Self`)
 }
 break


case 'toimage': case 'toimg': {
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!m.quoted) return reply('Reply Image')
if (!/webp/.test(mime)) return reply(`Antwortaufkleber mit Bildunterschrift *${prefix + command}*`)
reply(mess.waiting)
let media = await Miku.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
Miku.sendMessage(m.chat, { image: buffer }, { quoted: m})
fs.unlinkSync(ran)
})
}
break

case 'tomp4': case 'tovideo': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.quoted) return reply('Reply Image')
 if (!/webp/.test(mime)) return reply(`Antwortaufkleber mit Bildunterschrift *${prefix + command}*`)
 reply(mess.waiting)
 let { webp2mp4File } = require('./lib/uploader')
 let media = await Miku.downloadAndSaveMediaMessage(quoted)
 let webpToMp4 = await webp2mp4File(media)
 await Miku.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Here it is...' } }, { quoted: m })
 await fs.unlinkSync(media)
 }
 break

case 'toaud': case 'toaudio': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Senden/Antworten von Video/Audio, das Sie in MP3 konvertieren möchten, mit Untertitel ${prefix + command}`)
 if (!m.quoted) return reply(`Senden/Antworten von Video/Audio, das Sie in MP3 konvertieren möchten, mit Untertitel ${prefix + command}`)
 reply(mess.waiting)
 let media = await quoted.download()
 let { toAudio } = require('./lib/converter')
 let audio = await toAudio(media, 'mp4')
 Miku.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
 }
break

case 'tomp3': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (/document/.test(mime)) return reply(`Senden/Antworten von Video/Audio, das Sie in MP3 konvertieren möchten, mit Untertitel ${prefix + command}`)
 if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Senden/Antworten von Video/Audio, das Sie in MP3 konvertieren möchten, mit Untertitel ${prefix + command}`)
 if (!m.quoted) return reply(`Senden/Antworten von Video/Audio, das Sie in MP3 konvertieren möchten, mit Untertitel ${prefix + command}`)
 reply(mess.waiting)
 let media = await quoted.download()
 let { toAudio } = require('./lib/converter')
 let audio = await toAudio(media, 'mp4')
 Miku.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Converted By ${global.BotName} (${m.id}).mp3`}, { quoted : m })
 }
break


case 'togif': case 'getgif':{
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.quoted) return reply('Reply Image')
 if (!/webp/.test(mime)) return reply(`Antwortaufkleber mit Bildunterschrift *${prefix + command}*`)
 reply(mess.wait)
 let { webp2mp4File } = require('./lib/uploader')
 let media = await Miku.downloadAndSaveMediaMessage(quoted)
 let webpToMp4 = await webp2mp4File(media)
 await Miku.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Konvertiert von Webp zu Gif' }, gifPlayback: true }, { quoted: m })
 await fs.unlinkSync(media)
 }
 break


 case 'tourl': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 reply(mess.wait)
 let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
 let media = await Miku.downloadAndSaveMediaMessage(quoted)
 if (/image/.test(mime)) {
 let anu = await TelegraPh(media)
 reply(util.format(anu))
 } else if (!/image/.test(mime)) {
 let anu = await UploadFileUgu(media)
 reply(util.format(anu))
 }
 await fs.unlinkSync(media)
 }
 break


 case 'owner': case 'creator': case 'mod': case 'mods':{
    Miku.sendContact(m.chat, global.Owner, m)
    }
    break

case 'translate': case 'trans': {
    if (isBan) return reply(mess.banned)
    if (!args.join(" ")) return replay("Pls enter any text to translate")
    tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=de&kata=${args.join(" ")}`)
    Infoo = tes.info
    Detek = tes.translate
    replay(`Input : ${Detek}\nTranslation Results : ${Infoo}`)
    }
    break


case 'gimage': case 'gig': case 'googleimage':{
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args[0]) return reply("Enter a search term to get Google Image!")
let gis = require('g-i-s')
gis(args.join(" "), async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `${prefix}gimage ${args.join(" ")}`, buttonText: {displayText: 'uii'}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption: `「 _Google Image Search_ 」

_Search Term_ : ${text}
_Media Url_ : ${images}`,
footer: `${global.BotName}`,
buttons: buttons,
headerType: 4,

}
Miku.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break


case 'google': case 'search': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!args[0]) return reply(`Example: ${prefix + command} <query>\nUses : ${prefix + command} apa arti cinta`)
 let google = require('google-it')
 google({'query': args.join(" ")}).then(res => {
 let teks = `「 *Google Search Engine* 」\n\n*Search term:* ${text}\n\n\n`
 for (let g of res) {
 teks += `*Title* : ${g.title}\n\n`
 teks += `*Description�* : ${g.snippet}\n\n`
 teks += `*Link* : ${g.link}\n\n\n        -----------------------------------------------------------------------------\n\n`
 } 
 reply(teks)
 })
 }
 break

 case 'igdl': case 'instagram': case 'instagramreels': case 'igreels': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!args[0]) return reply(`Example :\n${prefix + command} https://www.instagram.com/p/CcvJGuxh9VI/?igshid=YmMyMTA2M2Y=`)
 try {
 hx.igdl(args[0]).then(async(resed) => {
 ini_anu = []
 anu_list = []
 textbv = `「 _Instagram Downloader_ 」\n\nUsername : ${resed.user.username ? resed.user.name : "undefined"}\nFollowers : ${resed.user.followers}`
 urut = 1
 for (let i = 0; i < resed.medias.length; i++) {
 ini_anu.push({
  "type": resed.medias[i].fileType,
  "url": resed.medias[i].url
 })
 }
 ilod = 1
 for (let i of ini_anu) {
 anu_list.push({buttonId: `${prefix}ig ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
 }
 textbv += `\n\n_Select the media below to download_`
 let buttons = anu_list
 let buttonMessage = {
 image:BotLogo,
 jpegThumbnail:Thumb,
 caption: textbv,
 footer: `${global.BotName}`,
 buttons: buttons,
 headerType: 4
 }
 Miku.sendMessage(from, buttonMessage, {quoted:m})
 })
 } catch (err) {
 reply("An Error Occured!")
 }
 }
 break

 case 'ig': {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (args[0] === "mp4") {
Miku.sendMessage(from, {video:{url:args[1]}, caption:'Here it is...', mimetype:'video/mp4'}, {quoted:m})
} else if (args[0] === "jpg") {
Miku.sendMessage(from, {image:{url:args[1]}, caption:'Here it is...'}, {quoted:m})
} else {
reply("Error! ")
}
}
break

case 'mp4' : {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args[0]) return reply(`Pls provide link!`)
try {
Miku.sendMessage(from, {video:{url:args[0]}, caption:"Succes!", contextInfo:{externalAdReply:{
title:`${global.BotName}`,
body:`${global.OwnerName}`,
thumbnail: BotLogo,
mediaType:2,
mediaUrl: `${global.websitex}`,
sourceUrl: `${global.websitex}`
}}}, {quoted:m})
} catch {
reply("Link error!")
}
}
break

case 'jpeg': {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
 if (!args[0]) return reply(`Please provide link!`)
 try {
 Miku.sendMessage(from, {image:{url:args[0]}, caption:"Success!"}, {quoted:m})
 } catch {
 reply("Link error")
 }
 }
 break
	
            case 'bctext2': case 'broadcasttext2': case 'bc2':
			    if (!isCreator) throw mess.owner
		            if (!text) throw `Enter text`
		                            var data = await store.chats.all()
                            for (let i of data) {
                               XeonBotInc.sendMessage(i.id, {text: `${ownername}'s Broadcast\n\nMessage : ${q}` })
                               await sleep(1000)
                            }
                            break

 case 'igtv': {	            
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
                 if (!text) return reply(`Please provide link!`)
                 const { instagramdl, instagramdlv2, instagramdlv3 } = require('@bochilteam/scraper')
                 if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply('*Invalid link!*')
                 instagramdlv3(`${text}`).then(async (data) => {            
                 var buf = await getBuffer(data[0].thumbnail)        
                 Miku.sendMessage(m.chat, { video: { url: data[0].url }, jpegThumbnail:buf, caption: `${BotName}`}, { quoted: m })
                 }).catch((err) => {
                     reply(mess.error)
                 })
             }
             break
             
case 'twitter': case 'td': case 'twitterdl': {     
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)	             
             if (!text) return reply(`Please provide link!`)
                if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(`*Invalid link!*`)
                xfarrapi.Twitter(`${text}`).then(async (data) => {                    
                    let txt = `「 _Twitter Downloader_ 」\n\n`
                    txt += `*Title :* ${data.title}\n`
                    txt += `*Quality :* ${data.medias[1].quality}\n`
                    txt += `*Type :* ${data.medias[1].extension}\n`
                    txt += `*Size :* ${data.medias[1].formattedSize}\n`
                    txt += `*Duration :* ${data.medias.length}\n`
                    txt += `*URL :* ${data.url}\n\n`
                    txt += `*${BotName}*`
                buf = await getBuffer(data.thumbnail)    
                Miku.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })
                for (let i of data.medias) {
                Miku.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `*${text}*`}, { quoted: m })
                }
                }).catch((err) => {
                    reply(mess.error)
                })
            }
            break

case 'twittermp3': case 'twitteraudio': { 
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)	             
             if (!text) return reply(`Please provide link!`)
                if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(`*Invalid link!*`)
                xfarrapi.Twitter(`${text}`).then(async (data) => {
                Miku.sendMessage(m.chat, { audio: { url: data.medias[1].url }, mimetype: 'audio/mp4'}, { quoted: m })
                }).catch((err) => {
                    reply(mess.reply)
                })
            }
            break

case 'twitterxx': case 'twdlxx': case 'twmp4xx': {
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args[0]) return reply(`Example :\n${prefix + command} https://twitter.com/cinema21/status/1517754155644821504?t=rUnbyqwh4vAE1QXMXlsVeQ&s=19`)
try {
let lotwit = await aiovideodl(args[0])
teks = `「 _Twitter Downloader_ 」
Caption : ${lotwit.title ? lotwit.title : "undefined"}
Type : ${lotwit.medias[1].extension}
Size : ${lotwit.medias[1].formattedSize}
Link : ${lotwit.medias[1].url}
_Please choose the video quality_`
let buttons = [
{buttonId: `${prefix}twitter ${lotwit.medias[0].url}`, buttonText: {displayText: `Quality ${lotwit.medias[0].quality}`}, type: 1},
{buttonId: `${prefix}twitter ${lotwit.medias[2].url}`, buttonText: {displayText: `Quality ${lotwit.medias[2].quality}`}, type: 1}
]
let buttonMessage = {
video: {url:lotwit.medias[1].url},
caption: teks,
footer: `${pushname}`,
buttons: buttons,
headerType: 4,

}
Miku.sendMessage(from, buttonMessage, {quoted:m})
} catch {
reply("Link Error!")
}
}
break

case 'twddlxx': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 let buttons = [
 {buttonId: `${prefix}menu`, buttonText: {displayText: '✨Menu✨'}, type: 1}
 ]
 let buttonMessage = {
 video: {url:args[0]},
 caption: "Here it is...",
 footer: `${pushname}`,
 buttons: buttons,
 headerType: 4,

 }
 Miku.sendMessage(from, buttonMessage, {quoted:m})
 }
 break

 case 'fbdl': case 'fb': case 'facebook': case 'fbmp4': {     	    
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
              if (!text) return reply(`Please provide the link!\n\nExample: ${prefix}facebook https://www.facebook.com/groups/599913174599515/permalink/705467384044093/`)
                 if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(`Invalid link!`)
             let bocil = require('@bochilteam/scraper')  
                 bocil.facebookdlv2(`${text}`).then(async (data) => {                   
                     let txt = `「 _Facebook Downloader_ 」\n\n`
                     txt += `*Title :* ${data.title}\n`
                     txt += `*Quality :* ${data.result[0].quality}\n`
                     txt += `*Description:* ${data.description}\n`
                     txt += `*URL :* ${text}\n\n`
                 buf = await getBuffer(data.thumbnail)    
                 Miku.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })         
                 for (let i of data.result) {     
                 Miku.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `*Quality :* ${i.quality}`}, { quoted: m })
                 }          
                 }).catch((err) => {
                     reply(mess.error)
                 })
             }
             break

case 'fbmp3': case 'facebookmp3': case 'facebookaudio': {
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
                  if (!text) return reply(`Please provide the link!\n\nExample: ${prefix + command} https://www.facebook.com/groups/599913174599515/permalink/705467384044093/`)
                  if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(`Invalid link!`)
  let noh = require('@bochilteam/scraper')                
  noh.savefrom(`${text}`).then(async (anu) => {  
  Miku.sendMessage(m.chat, { audio: { url: anu.url[0].url }, mimetype: 'audio/mp4' }, { quoted: m })      
                }).catch((err) => {
                    reply(mess.error)
                })
            }
            break


case 'facebookxx': case 'fbdlxxx': case 'fbmp4xxx': case 'fbxxx': {
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args[0]) return reply(`Example :\n${prefix + command} https://fb.watch/cAX2dep-BZ/`)
try {
let resd = await aiovideodl(args[0])
teks = `「 _Facebook Downloader_ 」
Type : video/${resd.medias[0].extension}
Quality : ${resd.medias[0].quality}
Size : ${resd.medias[0].formattedSize}
_Click the button below to download_`
let buttons = [
{buttonId: `${prefix}fbdl ${resd.medias[1].url}`, buttonText: {displayText: 'QualityHD'}, type: 1}
]
let buttonMessage = {
video: {url:resd.medias[0].url},
caption: teks,
footer: `${pushname}`,
buttons: buttons,
headerType: 4,

}
Miku.sendMessage(from, buttonMessage, {quoted:m})
} catch {
reply("Link invalid!")
}
}
break

case 'fbddlxx': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 let buttons = [
 {buttonId: `${prefix}menu`, buttonText: {displayText: 'Menu'}, type: 1}
 ]
 let buttonMessage = {
 video: {url:args[0]},
 caption: "Done!",
 footer: `${pushname}`,
 buttons: buttons,
 headerType: 4,

 }
 Miku.sendMessage(from, buttonMessage, {quoted:m})
 }
 break

 case 'tiktok': case 'tt':{
    if (isBan) return reply(mess.banned)
  if (isBanChat) return reply(mess.bangc)
if (!q) return reply('Bitte geben Sie den Link an !')
reply(mess.wait)
if (!q.includes('tiktok')) return reply(`Ungültiger Tiktok-Link!`)
 const musim_rambutan = await MikuTiktok(`${q}`).catch(e => {
reply(mess.error) 
} )
 console.log(musim_rambutan)
 const mikutiktokop = musim_rambutan.result.watermark
texttk = `_Please choose the button below_`
let buttons = [
{buttonId: `${prefix}ttnowm ${q}`, buttonText: {displayText: 'Wasserzeichenfrei'}, type: 1},
{buttonId: `${prefix}ttaud ${q}`, buttonText: {displayText: 'Audio '}, type: 1}
]
let buttonMessage = {
video: {url:mikutiktokop},
caption: texttk,
footer: `${BotName}`,
buttons: buttons,
headerType: 4,

}
Miku.sendMessage(from, buttonMessage, {quoted:m})
}
break

case 'tiktoknowm': case 'ttnowm': case 'ttv':{
    if (isBan) return reply(mess.banned)
  if (isBanChat) return reply(mess.bangc)
if (!q) return reply('Bitte geben Sie den Link an !')
reply(mess.wait)
if (!q.includes('tiktok')) return reply(`Das ist kein Tiktok-Link!`)
 const musim_rambutan = await MikuTiktok(`${q}`).catch(e => {
reply(mess.error) 
} )
 console.log(musim_rambutan)
 const mikutiktoknowm = musim_rambutan.result.nowatermark
  Miku.sendMessage(from, { video: { url: mikutiktoknowm }, caption: "Hier ist es..." }, { quoted: m })
 }
break

case 'tiktokaudio':
case 'tiktokmusic':
case 'ttaud':{
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
if (!q) return reply('Where is the audio?')
if (!q.includes('tiktok')) return reply(`Das ist kein Tiktok-Link!`)
 const musim_rambutan = await MikuTiktok(`${q}`).catch(e => {
reply(mess.error) 
} )
 console.log(musim_rambutan)
 const mikutiktokaudio = musim_rambutan.result.nowatermark
  Miku.sendMessage(from, { audio: { url: mikutiktokaudio }, mimetype: 'audio/mp4' }, { quoted: m })
 }
break



              

case 'music': case 'play': case 'song': case 'ytplay': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 const YT=require('./lib/ytdlcore')
 const { isUrl, fetchBuffer } = require('./lib/Function')

 if(!text) return Miku.sendMessage(from,{text:"Bitte geben Sie den zu spielenden Songnamen ein!"},{quoted:m})
 let yts = require("yt-search")
 let search = await yts(text)
 let anu = search.videos[0]
 let buttons = [
 {buttonId: `${prefix}ytad ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
 {buttonId: `${prefix}ytvd ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}

 ]
 let buttonMessage = {
 image: { url: anu.thumbnail },
 caption: `「  _Miku Youtube Player 2.0_  」

*Titel :* ${anu.title}

*Dauer :* ${anu.timestamp}
*Zuschauer :* ${anu.views}
*Hochgeladen :* ${anu.ago}
*Kanal :* ${anu.author.name}
*Url :* ${anu.url}`,
 Fusszeile: `${global.BotName}`,
 buttons: buttons,
 headerType: 4,

 }
 Miku.sendMessage(m.chat, buttonMessage, { quoted: m })
 }
 break

 case 'ytad': {
    const getRandom = (ext) => {
        return `${Math.floor(Math.random() * 10000)}${ext}`;
      };
        if (args.length === 0) {
          reply(`❌ URL is empty! \nSend ${prefix}yta url`);
          return;
        }
        let urlYt = args[0];
        if (!urlYt.startsWith("http")) {
          reply(`❌ Give youtube link!`);
          return;
        }
        let infoYt = await ytdl.getInfo(urlYt);
        //100 MIN
        if (infoYt.videoDetails.lengthSeconds >= 180000) {
          reply(`❌ Video too big!`);
          return;
        }
        let titleYt = infoYt.videoDetails.title;
        let randomName = getRandom(".mp3");
      
        const stream = ytdl(urlYt, {
          filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
        }).pipe(fs.createWriteStream(`./${randomName}`));
        console.log("Audio downloading ->", urlYt);
        // reply("Downloading.. This may take upto 1890 min!");
        await new Promise((resolve, reject) => {
          stream.on("error", reject);
          stream.on("finish", resolve);
        });
      
        let stats = fs.statSync(`./${randomName}`);
        let fileSizeInBytes = stats.size;
        // Convert the file size to megabytes (optional)
        let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
        console.log("Audio downloaded ! Size: " + fileSizeInMegabytes);
        if (fileSizeInMegabytes <= 4000000) {
            Miku.sendMessage(
             m.chat,
            {
              audio: fs.readFileSync(`./${randomName}`),
              fileName: titleYt + ".mp3",
              mimetype: "audio/mpeg",
            },
            { quoted:m }
          );
        } else {
          m.reply(`❌ File size bigger 🌚than 4000mb.`);
        }
       fs.unlinkSync(`./${randomName}`);
    }
break 
 case 'ytvd': {
    const getRandom = (ext) => {
        return `${Math.floor(Math.random() * 10000)}${ext}`;
      };
        if (args.length === 0) {
          m.reply(`❌ URL is empty! \nSend ${prefix}ytv url`);
          return;
        }
        let urlYt = args[0];
        if (!urlYt.startsWith("http")) {
          m.reply(`❌ Give youtube link!`);
          return;
        }
        let infoYt = await ytdl.getInfo(urlYt);
        //30000 MIN
        if (infoYt.videoDetails.lengthSeconds >= 180000) {
          m.reply(`❌ Video file too big!`);
          return;
        }
        let titleYt = infoYt.videoDetails.title;
        let randomName = getRandom(".mp4");
      
        const stream = ytdl(urlYt, {
          filter: (info) => info.itag == 22 || info.itag == 18,
        }).pipe(fs.createWriteStream(`./${randomName}`));
        //22 - 1080p/720p and 18 - 360p
        console.log("Video downloading ->", urlYt);
        // re�ply("Downloading.. This may take upto 5000 min!");
        await new Promise((resolve, reject) => {
          stream.on("error", reject);
          stream.on("finish", resolve);
        });
      
        let stats = fs.statSync(`./${randomName}`);
        let fileSizeInBytes = stats.size;
        // Convert the file size to megabytes (optional)
        let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
        console.log("Video downloaded ! Size: " + fileSizeInMegabytes);
        if (fileSizeInMegabytes <= 1000) {
        Miku.sendMessage(
            m.chat,
            {
              video: fs.readFileSync(`./${randomName}`),
              caption: `${titleYt}`,
            },
            { quoted: m }
          );
        } else {
          m.reply(`❌ File size bigger than 40mb.`);
        }
      
        fs.unlinkSync(`./${randomName}`);
    }
break
 case 'ytmp3': case 'ytmusic':  case 'ytmp4': case 'ytvideo': case 'ytdl':{
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!args[0]) return reply(mess.nolink)

 const YT=require('./lib/ytdlcore')
 if(!text) return Miku.sendMessage(from,{text:"Bitte geben Sie einen gültigen YouTube-Link an!"},{quoted:m})
 let yts = require("yt-search")
 let search = await yts(text)
 let anu = search.videos[0]
 let buttons = [
 {buttonId: `${prefix}ytad ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
 {buttonId: `${prefix}ytvd ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}

 ]
 let buttonMessage = {
 image: { url: anu.thumbnail },
 caption: `「  _Miku Youtube Downloader 2.0_  」

*Title :* ${anu.title}

*Duration :* ${anu.timestamp}
*Viewers :* ${anu.views}
*Uploaded :* ${anu.ago}
*Channel :* ${anu.author.name}
*Url :* ${anu.url}`,
 footer: `${global.BotName}`,
 buttons: buttons,
 headerType: 4,

 }
 Miku.sendMessage(m.chat, buttonMessage, { quoted: m })
 }
 break
 case 'ytvd2': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 const YT=require('./lib/ytdlcore')
    const ytmp4play2 = await YT.mp4(text)
    let vidduration =ytmp4play2.duration;
    if (vidduration > 50000) return reply('Cant send videos longer than *300 min*')
 Miku.sendMessage(from, {video:{url:ytmp4play2.videoUrl}, mimetype:"video/mp4", caption:'Downloaded by *Miku MD*',}, {quoted:m})
 }
 break



case 'couplepp':  case 'ppcouple': case 'pb': case 'paarbild': {
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
         reply(mess.waiting)
         let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
         let random = anu[Math.floor(Math.random() * anu.length)]
         Miku.sendMessage(m.chat, { image: { url: random.male }, caption: `Für ihm...` }, { quoted: m })
         Miku.sendMessage(m.chat, { image: { url: random.female }, caption: `Für sie...` }, { quoted: m })
     }
 break



case 'pinterest': case 'pin': {
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
 if (!args.join(" ")) return reply("Bitte geben Sie einen Suchbegriff ein!")
 try {
 hx.pinterest(args.join(" ")).then(async(res) => {
 imgnyee = res[Math.floor(Math.random() * res.length)]
 let buttons = [
 {buttonId: `${prefix}pinterest ${args.join(" ")}`, buttonText: {displayText: '>>'}, type: 1}
 ]
 let buttonMessage = {
 image: { url: imgnyee },
 caption:  `Title : ` + args.join(" ") + `\nMedia Url : `+imgnyee,
 footer: `${global.BotName}`,
 buttons: buttons,
 headerType: 4,
 
 }
 Miku.sendMessage(m.chat, buttonMessage, { quoted: m })
 }).catch(_ => _)
 } catch {
 reply("Error")
 }
 }
 break



case 'swm': case 'take': case 'stickerwm': case 'steal': case 'meins':{
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
if (!args.join(" ")) return reply(`Use command: -steal Miku|By: sebastian`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
Miku.downloadAndSaveMediaMessage(quoted, "gifee")
Miku.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Miku.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds is allowed!')
let media = await quoted.download()
let encmedia = await Miku.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 seconds is allowed!`)
}
}
break




case 'smeme': case 'stickermeme': case 'stickmeme': {
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
let { TelegraPh } = require('./lib/uploader')
if (!text) return reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
if (text.includes('|')) return reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
if (!/image/.test(mime)) return reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
reply(mess.wait)
mee = await Miku.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await Miku.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break

case 'sgif': case 'sticker': case 's': {
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
 if (/image/.test(mime)) {
 let media = await quoted.download()
 let encmedia = await Miku.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
 await fs.unlinkSync(encmedia)
 } else if (/video/.test(mime)) {
 if ((quoted.msg || quoted).seconds > 100) return reply('Maximum 100 seconds!')
 let media = await quoted.download()
 let encmedia = await Miku.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
 await fs.unlinkSync(encmedia)
 } else {
 reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
 }
 }
 break

case 'wiki':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
if (args.length < 1) return reply('Wonach suchen Sie?? ')
const res2 = await wikiSearch(q).catch(e => {
return reply('Error Result nicht gefunden!') 
}) 
const result2 = `*Title :* ${res2[0].judul}\n*Wiki :* ${res2[0].wiki}`
Miku.sendMessage(from, { image : { url : res2[0].thumb }, caption : result2}) 
break

case 'earthquake':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
const tres = await Gempa()
var { Waktu, Lintang, Bujur, Magnitude, Kedalaman, Wilayah, Map } = tres.result
console.log(Map)
const captt = `Zeit : ${Waktu}\nLatitude : ${Lintang}\nLongitude : ${Bujur}\nRegion : ${Wilayah}`
Miku.sendMessage(from, { image : { url : Map }, caption : captt})
break

case 'covidinfo':
case 'covid':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
const c = await covid()
var { kasus, kematian, sembuh } = c[0]
Miku.sendMessage(from, {text : `Case : ${kasus}\n\nDead : ${kematian}\n\nHealed : ${sembuh}`}, m)
break


case 'couple': case 'ship': case 'paar': {
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(`${mess.grouponly}`)
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Ohh ich sehe 👀💖...`
let menst = [orang, jodoh]
let buttons = [
{ buttonId: '❤️', buttonText: { displayText: 'Glückwünsche ❤️' }, type: 1 }
]
await Miku.sendButtonText(m.chat, buttons, jawab, Miku.user.name, m, {mentions: menst})
}
break

case 'soulmate': case 'Seelenverwandte': {
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(`${mess.grouponly}`)
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `👫 Soulmates
@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let ments = [me, jodoh]
let buttons = [
{ buttonId: '❤️', buttonText: { displayText: 'Sei mein Seelenverwandter ❤️' }, type: 1 }
]
await Miku.sendButtonText(m.chat, buttons, jawab, Miku.user.name, m, {mentions: ments})
}
break

case 'handsomecheck':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
				if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Fantox`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
Miku.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*` }, { quoted: m })
					break
case 'beautifulcheck':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
				if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Fantox`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
Miku.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${tik}%*` }, { quoted: m })
					break

case 'awesomecheck':
  case 'greatcheck':
    case 'gaycheck':
      case 'cutecheck':
          case 'lesbiancheck':
             case 'hornycheck':
                 case 'prettycheck':
                    case 'lovelycheck':
                      case 'uglycheck':
                        if (isBan) return reply(mess.banned)
                        if (isBanChat) return reply(mess.bangc)
				if (!text) return replay(`Tag Someone, Example : ${prefix + command} @nummer`)
					const sangeh = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
Miku.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${sange}%*` }, { quoted: m })
					break


case 'charactercheck':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
					if (!text) return replay(`Tag Someone, Example : ${prefix + command} @nummer`)
					const Mikutttt =['Mitfühlend','Großzügig','Mürrisch','Horny','Versöhnlich','Gehorsam','Gut','Einfach','Gutherzig','Geduldig','UwU','oben, ohnehin','Hilfreich']
					const taky = Mikutttt[Math.floor(Math.random() * Mikutttt.length)]
					Miku.sendMessage(from, { text: `Character Check : ${q}\nAnswer : *${taky}*` }, { quoted: m })
				     break
                   
 case 'dare':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
                   const dare =[
         "eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink",
         "spill people who make you pause",
         "call crush/pickle now and send ss",
         "Drop-Only-Emote jedes Mal, wenn Sie 1 Tag lang auf gc/pc tippen.",
         "say Welcome to Who Wants To Be a Millionaire! to all the groups you have",
         "call ex saying miss",
         "sing the chorus of the last song you played",
         "vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I miss🥺👉🏼👈🏼",
         "Bang on the table (which is at home) until you get scolded for being noisy",
         "Tell random people - I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing",
         "mention ex's name",
         "make 1 rhyme for the members!",
         "send ur whatsapp chat list",
         "chat random people with gheto language then ss here",
         "tell your own version of embarrassing things",
         "tag the person you hate",
         "Pretending to be possessed, for example: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.",
         "change name to *I AM DONKEY* for 24 hours",
         "shout *ma chuda ma chuda ma chuda* in front of your house",
         "snap/post boyfriend photo/crush",
         "tell me your boyfriend type!",
         "say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here",
         "record ur voice that read *titar ke age do titar, titar ke piche do titar*",
         "prank chat ex and say *i love u, please come back.* without saying dare!",
         "chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*",
         "change the name to *I am a child of randi* for 5 hours",
         "type in bengali 24 hours",
         "Use selmon bhoi photo for 3 days",
         "drop a song quote then tag a suitable member for that quote",
         "send voice note saying can i call u baby?",
         "ss recent call whatsapp",
         "Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!",
         "pop to a group member, and say fuck you",
         "Act like a chicken in front of ur parents",
         "Pick up a random book and read one page out loud in vn n send it here",
         "Open your front door and howl like a wolf for 10 seconds",
         "Take an embarrassing selfie and paste it on your profile picture",
         "Let the group choose a word and a well known song. You have to sing that song and send it in voice note",
         "Walk on your elbows and knees for as long as you can",
         "sing national anthem in voice note",
         "Breakdance for 30 seconds in the sitting room😂",
         "Tell the saddest story you know",
         "make a twerk dance video and put it on status for 5mins",
         "Eat a raw piece of garlic",
         "Show the last five people you texted and what the messages said",
         "put your full name on status for 5hrs",
         "make a short dance video without any filter just with a music and put it on ur status for 5hrs",
         "call ur bestie, bitch",
         "put your photo without filter on ur status for 10mins",
         "say i love oli london in voice note🤣🤣",
         "Send a message to your ex and say I still like you",
         "call Crush/girlfriend/bestie now and screenshot here",
         "pop to one of the group member personal chat and Say you ugly bustard",
         "say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist",
         "send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy",
         "write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here",
         "use any bollywood actor photo as ur pfp for 3 days",
         "put your crush photo on status with caption, this is my crush",
         "change name to I AM� GAY for 5 hours",
         "chat to any contact in whatsapp and say i will be ur bf/gf for 5hours",
         "send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl",
         "slap ur butt hardly send the sound of slap through voice note😂",
         "state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world",
         "shout bravooooooooo and send here through voice note",
         "snap your face then send it here",
         "Send your photo with a caption, i am lesbian",
         "shout using harsh words and send it here through vn",
         "shout you bastard in front of your mom/papa",
         "change the name to i am idiot for 24 hours",
         "slap urself firmly and send the sound of slap through voice note😂",
         "say i love the bot owner Fantox through voice note",
         "send your gf/bf pic here",
         "make any tiktok dance challenge video and put it on status, u can delete it after 5hrs",
         "breakup with your best friend for 5hrs without telling him/her that its a dare",
          "tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare",
          "say i love depak kalal through voice note",
          "write i am feeling horny and put it on status, u can delete it only after 5hrs",
          "write i am lesbian and put it on status, u can delete only after 5hrs",
          "kiss your mommy or papa and say i love you😌",
          "put your father name on status for 5hrs",
          "send abusive words in any grup, excepting this grup, and send screenshot proof here"
     ]
                   const Mikudareww = dare[Math.floor(Math.random() * dare.length)]
                   buffer = await getBuffer(`https://wallpapercave.com/wp/wp10524609.jpg`)
                   Miku.sendMessage(from, { image: buffer, caption: '*You have chosen Dare*\n\n'+ Mikudareww }, {quoted:m})
                   break
                       

case 'truth': 
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
                           const truth =[
                 "Have you ever liked anyone? How long?",
                 "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
                 "apa ketakutan terbesar kamu?",
                 "Have you ever liked someone and felt that person likes you too?",
                 "What is the name of your friend's ex-girlfriend that you used to secretly like?",
                 "Have you ever stolen money from your father or mom? The reason?",
                 "What makes you happy when you're sad?",
                 "Ever had a one sided love? if so who? how does it feel bro?", 
                 "been someone's mistress?",
                 "the most feared thing",
                 "Who is the most influential person in your life?",
                 "what proud thing did you get this year", 
                 "Who is the person who can make you awesome", 
                 "Who is the person who has ever made you very happy?", 
                 "Who is closest to your ideal type of partner here", 
                 "Who do you like to play with??", 
                 "Have you ever rejected people? the reason why?",
                 "Mention an incident that made you hurt that you still remember", 
                 "What achievements have you got this year??",
                 "What's your worst habit at school??",
                 "What song do you sing most in the shower",
                 "Have you ever had a near-death experience",
                 "When was the last time you were really angry. Why?",
                 "Who is the last person who called you",
                 "Do you have any hidden talents, What are they",
                 "What word do you hate the most?",
                 "What is the last YouTube video you watched?",
                 "What is the last thing you Googled",
                 "Who in this group would you want to swap lives with for a week",
                 "What is the scariest thing thats ever happened to you",
                 "Have you ever farted and blamed it on someone else",
                 "When is the last time you made someone else cry",
                 "Have you ever ghosted a friend",
                 "Have you ever seen a dead body",
                 "Which of your family members annoys you the most and why",
                 "If you had to delete one app from your phone, which one would it be",
                 "What app do you waste the most time on",
                 "Have you ever faked sick to get home from school",
                 "What is the most embarrassing item in your room",
                 "What five items would you bring if you got stuck on a desert island",
                 "Have you ever laughed so hard you peed your pants",
                 "Do you smell your own farts",
                 "have u ever peed on the bed while sleeping ðŸ¤£ðŸ¤£",
                 "What is the biggest mistake you have ever made",
                 "Have you ever cheated in an exam",
                 "What is the worst thing you have ever done",
                 "When was the last time you cried",
                 "whom do you love the most among ur parents", 
                 "do u sometimes put ur finger in ur nosetrilðŸ¤£", 
                 "who was ur crush during the school days",
                 "tell honestly, do u like any boy in this grup",
                 "have you ever liked anyone? how long?",
                 "do you have gf/bf','what is your biggest fear?",
                 "have you ever liked someone and felt that person likes you too?",
                 "What is the name of your ex boyfriend of your friend that you once liked quietly?",
                 "ever did you steal your mothers money or your fathers money",
                 "what makes you happy when you are sad",
                 "do you like someone who is in this grup? if you then who?",
                 "have you ever been cheated on by people?",
                 "who is the most important person in your life",
                 "what proud things did you get this year",
                 "who is the person who can make you happy when u r sad",
                 "who is the person who ever made you feel uncomfortable",
                 "have you ever lied to your parents",
                 "do you still like ur ex",
                 "who do you like to play together with?",
                 "have you ever stolen big thing in ur life? the reason why?",
                 "Mention the incident that makes you hurt that you still remember",
                 "what achievements have you got this year?",
                 "what was your worst habit at school?",
                 "do you love the bot creator Fantox?",
                 "have you ever thought of taking revenge from ur teacher?",
                 "do you like current prime minister of ur country",
                 "you non veg or veg",
                 "if you could be invisible, what is the first thing you would do",
                 "what is a secret you kept from your parents",
                 "Who is your secret crush",
                 "whois the last person you creeped on social media",
                 "If a genie granted you three wishes, what would you ask for",
                 "What is your biggest regret",
                 "What animal do you think you most look like",
                 "How many selfies do you take a day",
                 "What was your favorite childhood show",
                 "if you could be a fictional character for a day, who would you choose",
                 "whom do you text the most",
                 "What is the biggest lie you ever told your parents",
                 "Who is your celebrity crush",
                 "Whats the strangest dream you have ever had",
                 "do you play pubg, if you then send ur id number"
             ]
                           const mikutruthww = truth[Math.floor(Math.random() * truth.length)]
                           buffer = await getBuffer(`https://wallpapercave.com/wp/wp10524609.jpg`)
                           Miku.sendMessage(from, { image: buffer, caption: '*You have chosen Truth*\n'+ mikutruthww }, {quoted:m})
                           break
                       
 /////////NSFW comm/////////////////                          

//let bjif = await GIFBufferToVideoBuffer(bjf) 

case 'loli2' :  {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    
reply(mess.waiting)
 waifudhgd = await getBuffer(`https://fantox-apis.vercel.app/loli  `)     
 let nsfwapireply = [
    {buttonId: `${prefix}${command}`, buttonText: {displayText: `>>`}, type: 1},
    ]
  let nsfwapimess = {
   image: {url:waifudhgd.data.url},
   caption:  `Here it is...`,
  buttons: nsfwapireply,
  headerType: 1
  }     
            await Miku.sendMessage(m.chat, nsfwapimess, { quoted:m }).catch(err => {
                    return('Error!')
                })
            }
break


case 'blonde' : case 'ass' : case 'tree' :  case 'food' :  case 'cum' : case 'genshin' :
    case 'horns' : case 'nude' : case 'bed' : case 'glasses':  case 'dress': 
     case 'schooluniform': case 'loli': case 'orgy': case 'sex': 
    case 'pussy': case 'twogirls': case 'foxgirl': case 'yuri': 
{
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!AntiNsfw) return reply(mess.nonsfw)
    
    reply(mess.waiting)
     waifudhgd = await axios.get(`https://fantox-apis.vercel.app/${command}`)     
     let nsfwapireply = [
        {buttonId: `${prefix}${command}`, buttonText: {displayText: `>>`}, type: 1},
        ]
      let nsfwapimess = {
       image: {url:waifudhgd.data.url},
       caption:  `Here it is...`,
      buttons: nsfwapireply,
      headerType: 1
      }     
                await Miku.sendMessage(m.chat, nsfwapimess, { quoted:m }).catch(err => {
                        return('Error!')
                    })
                }
    break



case 'blowjobgif': case 'bj' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)
bjd = await axios.get(`https://api.waifu.pics/nsfw/blowjob`)         
  let bjf = await getBuffer(bjd.data.url)
let bjif = await GIFBufferToVideoBuffer(bjf)   
        await Miku.sendMessage(m.chat,{video: bjif, gifPlayback:true},{ quoted:m }).catch(err => {
                    return reply('error..')
                                    })
break

case 'hentaivid': case 'hentaivideo': case 'hv': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)
anu = await hentai()
result912 = anu[Math.floor(Math.random(), anu.length)]
Miku.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `Title : ${result912.title}\nCategory : ${result912.category}\n$Mimetype : ${result912.type}\nViews : ${result912.views_count}\nShares : ${result912.share_count}\nSource : ${result912.link}\nMedia Url : ${result912.video_1}` }, { quoted: m })
}
break

case 'trap' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
 let trapbot = [
    {buttonId: `${prefix}trap`, buttonText: {displayText: `>>`}, type: 1},
    ]
  let button2Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here it is...`,
  buttons: trapbot,
  headerType: 1
  }     
            await Miku.sendMessage(m.chat, button2Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break

case 'hentai-neko' :
case 'hneko' :
case 'hn' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
 let hnekobot = [
    {buttonId: `${prefix+command}`, buttonText: {displayText: `>>`}, type: 1},
    ]
  let button3Messages = {
   image: {url:waifudd.data.url},
   caption:  `Nyaah...`,
  buttons: hnekobot,
  headerType: 1
  }      
            await Miku.sendMessage(m.chat, button3Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break

case 'hentai-waifu' :
case 'hwaifu' :
case 'hh' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
 let nwaifubot = [
    {buttonId: `${prefix+command}`, buttonText: {displayText: `>>`}, type: 1},
    ]
  let button4Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here it is...`,
  buttons: nwaifubot,
  headerType: 1
  }      
            await Miku.sendMessage(m.chat, button4Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break



/////////////////////////// NFFW end /////////////////////

case 'smug2':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/smug`)
                           var wbuttsss = [
        {buttonId: `${prefix}smug2`, buttonText: {displayText: `>>`}, type: 1},
        ]
      let button1ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here it is...`,
      footer: `${global.BotName}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await Miku.sendMessage(m.chat, button1ssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break

case 'foxgirls' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)							
 waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)
                           var wbuttsss = [
        {buttonId: `${prefix}foxgirl`, buttonText: {displayText: `>>`}, type: 1},
        ]
      let button12ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Awooo...`,
      footer: `${global.BotName}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await Miku.sendMessage(m.chat, button12ssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break   

case 'animenom' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)
    waifudd = await axios.get(`https://waifu.pics/api/sfw/nom`)
 let xxhnekobot = [
    {buttonId: `${prefix}animenom`, buttonText: {displayText: `>>`}, type: 1},
    ]
  let xx1button3Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here it is...`,
  buttons: xxhnekobot,
  headerType: 1
  }      
            await Miku.sendMessage(m.chat, xx1button3Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break

case 'waifu3':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)
                           var wbuttsss = [
        {buttonId: `${prefix}waifu3`, buttonText: {displayText: `>>`}, type: 1},
        ]
      let button112ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here it is...`,
      footer: `${global.BotName}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await Miku.sendMessage(m.chat, button112ssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break



case 'crossplay': case 'crosplay': case 'cosplay':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
                const buttons = [
        {buttonId: `${prefix}crossplay`, buttonText: {displayText: '>>'}, type: 1},
            ]               
        const cosplybutton = {
        image: {url: 'https://hanzz-web.herokuapp.com/api/randomimage/cosplay'},
        caption: "Guess who am i...",
        footer: `${global.BotName}`,
        buttons: buttons,
        headerType: 4
        }
                  
        await Miku.sendMessage(m.chat,cosplybutton, { quoted:m }).catch(err => {
            return('Error!')
        })  

        break




case 'neko2':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)							
   waifud = await axios.get('https://waifu.pics/api/sfw/neko')
                var wbutsss = [
        {buttonId: `${prefix}neko2`, buttonText: {displayText: `>>`}, type: 1},
        ]
      let buttonssMessage = {
       image: {url:waifud.data.url},
       caption:  `Here it is...`,
      footer: `${global.BotName}`,
      buttons: wbutsss,
      headerType: 4
      }
            await Miku.sendMessage(m.chat,buttonssMessage, { quoted:m }).catch(err => {
                    return('Error!')
                })               
                break



case 'feed':
case 'meow':
case 'tickle':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)							
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
                           var wbuttsss = [
        {buttonId: `${prefix+command}`, buttonText: {displayText: `>>`}, type: 1},
        ]
      let buttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here it is...`,
      footer: `${global.BotName}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await Miku.sendMessage(m.chat, buttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

case 'cry':  case 'handhold':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} ${command}ed with themself!`
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} ${command}ed with @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		Miku.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break

case 'nom':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} is eating with themself!`
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} is eating with @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		Miku.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break

case 'hug':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} hugged themself!`
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} hugged @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		Miku.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break


case 'dance':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} is dancing alone!!`
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} is dancing with @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		Miku.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break

case 'kill': case 'pat': case 'lick': case 'kiss': case 'bite':
case 'bully': case 'bonk': case 'poke': case 'slap':
case 'happy':
case 'cuddle': case 'kick':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} ${command}ed themselves!!`
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} ${command}ed  @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		Miku.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break



case 'yeet':
case 'wink': case 'smile':
case 'wave': case 'blush': case 'smug': case 'glomp':
case 'cringe': case 'highfive':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} ${command}ed at themself!`
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} ${command}ed at @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		Miku.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': case 'kiss': case 'bite': case 'yeet':
case 'bully': case 'bonk': case 'wink': case 'poke': case 'nom': case 'slap': case 'smile':
case 'wave': case 'blush': case 'smug': case 'glomp': case 'happy': case 'dance':
case 'cringe': case 'cuddle': case 'highfive': case 'handhold': case 'kick':


    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)						
resggh = await axios.get(`https://nekos.life/api/v2/img/${command}`)         
let resffj = await getBuffer(resggh.data.url)
let resmain = await GIFBufferToVideoBuffer(resffj)   
      await Miku.sendMessage(m.chat,{video: resmain, gifPlayback:true},{ quoted:m }).catch(err => {
                  return reply('error..')
                                  })
break






case 'megumin':
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)							
ud = await axios.get('https://waifu.pics/api/sfw/megumin')
var wbutsss = [
    {buttonId: `${prefix}megumin`, buttonText: {displayText: `>>`}, type: 1},
         ]
      let buttonzMessage = {
      image: {url:ud.data.url},
       caption:  `Hier ist es ...`,
      footer: `${global.BotName}`,
          buttons: wbutsss,
     headerType: 4
                      }
await Miku.sendMessage(m.chat,buttonzMessage, { quoted:m }).catch(err => {
     return('Error!')
    })               
break     

case 'awoo':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    reply(mess.waiting)						
 waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)
 var wbuttsss = [
    {buttonId: `${prefix}awoo`, buttonText: {displayText: `>>`}, type: 1},
    ]
  let button1Messages = {
   image: {url:waifudd.data.url},
   caption:  `Hier ist es ...`,
   footer: `${global.BotName}`,
  buttons: wbuttsss,
  headerType: 2
  }       
            await Miku.sendMessage(m.chat, button1Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break


case 'animewall2': case 'animewallpaper2': case 'animehintergrund':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    reply(mess.waiting)						
const { AnimeWallpaper } =require("anime-wallpaper")
if(!q) return reply('Bitte geben Sie einen Suchbegriff ein !')
const wall = new AnimeWallpaper();
    const pages = [1,2,3,4];
        const random=pages[Math.floor(Math.random() * pages.length)]
        const wallpaper = await wall
            .getAnimeWall4({ title: q, type: "sfw", page: pages })
            .catch(() => null);
const i = Math.floor(Math.random() * wallpaper.length);
var walb = [
        {buttonId: `${prefix}animewall2 ${q}`, buttonText: {displayText: `>>`}, type: 1},        
        ]
      let wal = {
       image: {url:wallpaper[i].image},
       caption: `*Suchbegriff :* ${q}`,
      footer: `${global.BotName}`,
      buttons: walb,
      headerType: 4
      }     
            await Miku.sendMessage(m.chat, wal,{ quoted:m }).catch(err => {
                    return('Error!')
                })          
break


case 'anime':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
	    if(!q) return reply(`Please proide a search term!\n\n*Example:* ${prefix}anime naruto`)
reply(mess.waiting)							
const { Anime } =require("@shineiichijo/marika")
    const client = new Anime();
     let anime = await client.searchAnime(q)
    let Ergebnis = anime.data[0];
    console.log(result)
   let details = `*Titel:* ${result.title}\n`;
    details += `*Format:* ${result.type}\n`;
    details += `*Status:* ${result.status.toUpperCase().replace(/\_/g, " ")}\n`;
    details += `*Folgen insgesamt:* ${result.episodes}\n`;
    details += `*Dauer:* ${result.duration}\n`;
    details += `*Genres:*\n`;
    for (let i = 0; i < result.genres.length; i++) {
      details += `\t\t\t\t\t\t\t\t${result.genres[i].name}\n`;
    }
    details += `*Basiert auf:* ${result.source.toUpperCase()}\n`;
    details += `*Studios:*\n`;
    for (let i = 0; i < result.studios.length; i++) {
      details += `\t\t\t\t\t\t\t\t${result.studios[i].name}\n`;
    }
    details += `*Producers:*\n`;
    for (let i = 0; i < result.producers.length; i++) {
      details += `\t\t\t\t\t\t\t\t\t\t${result.producers[i].name}\n`;
    }
    details += `*Premiered on:* ${result.aired.from}\n`;
    details += `*Beendet am:* ${result.aired.to}\n`;
    details += `*Beliebt:* ${result.popularity}\n`;
    details += `*Favoriten:* ${result.favorites}\n`;
    details += `*Wertung:* ${result.rating}\n`;
    details += `*Rank:* ${result.rank}\n\n`;
    if (result.trailer.url !== null)
      details += `*Trailer:* ${result.trailer.url}\n\n`;
    details += `*URL:* ${result.url}\n\n`;
    if (result.background !== null)
      details += `*Background:* ${result.background}\n\n`;

Miku.sendMessage(m.chat,{image:{url:result.images.jpg.large_image_url},caption:details},{quoted:m})   
break

case 'manga':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)							
const { Manga } =require("@shineiichijo/marika")
const manga = new Manga();
if(!q) return reply(`Bitte geben Sie einen Suchbegriff ein!\n\n_Example:_ ${prefix}manga naruto`)
let srh = await manga.searchManga(q)
    let mang = `*Title:* ${srh.data[0].title}\n`;
    mang += `*Status:* ${srh.data[0].status}\n`;
    mang += `*Gesamt Bände:* ${srh.data[0].volumes}\n`;
    mang += `*Gesamt Kapitel:* ${srh.data[0].chapters}\n`;
    mang += `*Genres:*\n`;
    for (let i = 0; i < srh.data[0].genres.length; i++) {
      mang += `\t\t\t\t\t\t\t\t${srh.data[0].genres[i].name}\n`;
    }
    mang += `*Published on:* ${srh.data[0].published.from}\n`;
    mang += `*Score:* ${srh.data[0].scored}\n`;
    mang += `*Popularity:* ${srh.data[0].popularity}\n`;
    mang += `*Favorites:* ${srh.data[0].favorites}\n`;
    mang += `*Authors:*\n`;
    for (let i = 0; i < srh.data[0].authors.length; i++) {
      mang += `\t\t\t\t\t\t\t\t\t${srh.data[0].authors[i].name} (${srh.data[0].authors[0].type})\n`;
    }
    mang += `\n*URL:* ${srh.data[0].url}\n\n`;
    if (srh.data[0].background !== null)
      mang += `*Background:* ${srh.data[0].background}`;
    mang += `*Description:* ${srh.data[0].synopsis.replace(
      /\[Written by MAL Rewrite]/g,
      ""
    )}`;
Miku.sendMessage(m.chat,{image:{url:srh.data[0].images.jpg.large_image_url},caption:mang},{quoted:m})   
break



case 'waifu' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)	
    waifuddd = await axios.get('https://waifu.pics/api/sfw/waifu')
 var wbuttsssr = [
    {buttonId: `${prefix}waifu`, buttonText: {displayText: `Brauch Mehr`}, type: 1},
    ]
        let button4Messagess = {
        image: {url:waifuddd.data.url},
        caption: 'More than one waifu will definitely ruin your Laifu!',
        buttons: wbuttsssr,
        headerType: 4
         }     
                                  
    await Miku.sendMessage(m.chat, button4Messagess, { quoted:m }).catch(err => {
        return('error..')
        })
break

case 'neko' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)	
    waifuddd = await axios.get('https://waifu.pics/api/sfw/neko')
 var wbuttsssr = [
    {buttonId: `${prefix}neko`, buttonText: {displayText: `>>`}, type: 1},
    ]
        let buttonMessagessf = {
        image: {url:waifuddd.data.url},
        caption: 'Nyaa...',
        buttons: wbuttsssr,
        headerType: 2
         }     
                                  
    await Miku.sendMessage(m.chat, buttonMessagessf, { quoted:m }).catch(err => {
        return('error..')
        })
break


case 'loli1' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)	
    waifuddd = await axios.get('https://waifu.pics/api/sfw/shinobu')
 var wbuttsssr = [
    {buttonId: `${prefix}loli`, buttonText: {displayText: `>>`}, type: 1},
    ]
        let buttonMessagessfgr = {
        image: {url:waifuddd.data.url},
        caption: 'Dont be a lolicon !',
        buttons: wbuttsssr,
        headerType: 2
         }     
                                  
    await Miku.sendMessage(m.chat, buttonMessagessfgr, { quoted:m }).catch(err => {
        return('error..')
        })
break


case 'lyrics': case 'liedertext':{
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
if (!text) return reply(`Befehlsverwendung: ${prefix}lyrics Donner`)
reply(mess.waiting)	
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
reply(`
*Title :* ${result.title}
*Author :* ${result.author}
*Url :* ${result.link}

*Lyrics :* ${result.lyrics}

`.trim())
}
break
	
		

case "zitate" :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
var res = await Quotes()
teks = `\n*Author:* ${res.author}\n`
teks += `\n*Quotes:*\n`
teks += `${res.quotes}\n`

replay(teks)
break

case "darkjoke":
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
var res = await Darkjokes()
teks = "\nDarkjokes"
Miku.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : m })
break

case 'leavegc': case 'leavegroup': case 'bye': case 'verlasse': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
        reply(mess.waiting)
                    if (!isCreator) return replay(`${mess.botowner}`)
                    await Miku.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
                break


case 'bc': case 'broadcast': case 'bcall': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
if (!isCreator) return replay(mess.botowner)
if (!args.join(" ")) return replay(`Please enter some text to broadcast! \n\nExample : ${prefix + command} ${global.OwnerName}`)
let anu = await store.chats.all().map(v => v.id)
replay(`Send Broadcast To ${anu.length} Chat\nTime's up ${anu.length * 1.5} second`)
for (let yoi of anu) {
await sleep(1500)
let btn = [{
quickReplyButton: {
displayText: 'Menu',
id: '-menu'
}  
}, {
quickReplyButton: {
displayText: 'Bot Owner',
id: '-owner'
}
}]
let txt = `「 *${global.OwnerName}'s Broadcast* 」\n\n${text}`
Miku.send5ButImg(yoi, txt, `${global.BotName}`, BotLogo, btn, Thumb)
}
replay('Sendung gesendet !')
}
break  
		
  /*case 'beta':
    case 'hm':{
        if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
            let sections = []
            let com = [`self`,`bangroup on`,`h`,`awoo`,`waifu3`,`feed`,`loli1`,`antilinkig `,`antilinkfb `,`neko`,`animenom`,`nsfw on`]
	    let comm = [`public`,`bangroup off`,`help`,`foxgirls`,`pb`,`tickle`,`waifu`,`antilinkig `,`antilinkfb`,`neko2`,`megumin`,`nsfw off`]
            let listnya = [`self/public`,`ban gruppe,unban gruppe`,`help`,`foxgirl`,`wauifu,pb`,`feed,tickle`,`loli,waifu`,`nicht drücken`,`nicht drücken`,`neko,neko2`,`animenom,megumin`,`nsfw`]
	    let suruh = [`1😁`, `2😁`]
            let fiturname = [`self/public`,`ban gruppe`,`menü`,`foxgirl`,`wauifu,pb`,`feed,tickle`,`loli,waifu`,`nicht drücken`,`nicht drücken`,`neko,neko2`,`animenom,megumin`,`nsfw`,`Auto Revoke`]
            let startnum = 0; let startnu = 0; let startn = 0;let start = 0
            let startnumm = 1
            for (let x of com) {
                const yy = {title: `${listnya[startnum++]}`,
            rows: [
               {
                title: `${suruh[0]}`,
                description: ` ${fiturname[startnu++]}`,
                rowId: `${prefix}${x}`
              },{
                title: `${suruh[1]}`,
                description: ` ${fiturname[startn++]}`,
                rowId: `${prefix}${comm[start++]}`
              }
            ]
           }
                sections.push(yy)
            }
            const sendm =  Miku.sendMessage(
from, 
{
text: "anime bilder und weiteres",
footer: BotName,
title: "hier kannst du anime bilder mit einem klick kriegen",
buttonText: "Click Button",
sections
}, { quoted : m }
)  
}
break
*/

		


/*case 'help': case 'h': case 'menu': case 'allmenu': case 'listmenu': case 'hilfe':{
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
      
 const helpmenu = `Konichiwa *${pushname}* Senpai,

Ich bin *Miku Nakano*, ein von *Sebastian* entwickelter Bot.

🔰 Mein Präfix ist:  ${prefix}

Hier ist die Liste meiner Befehle.

*━━━〈  neues Menü  〉━━━*


${prefix}beta
${prefix}hm lol

 
 
 *━━━〈  🎆 Core 🎆  〉━━━*

${prefix}Afk
${prefix}speak
${prefix}miku
${prefix}stalk
${prefix}profile
${prefix}help
${prefix}delete
${prefix}deleteall
${prefix}listgc
${prefix}listpc
${prefix}welcome
${prefix}admin 
 
 *━━━〈  🎀 Owner 🎀  〉━━━*

${prefix}self
${prefix}public
${prefix}ban
${prefix}bangroup
${prefix}verlasse
${prefix}join
${prefix}block
${prefix}unblock
${prefix}broadcast 

 *━━━〈  ⭕ Group ⭕  〉━━━*
 
${prefix}promote
${prefix}demote
${prefix}revoke
${prefix}remove
${prefix}tagall
${prefix}hidetag
${prefix}groupsetting
${prefix}grouplink
${prefix}setgcpp
${prefix}setname
${prefix}setdesc
${prefix}group
${prefix}nsfw
${prefix}remove 

 *━━━〈  ➰ Anti Link ➰  〉━━━*
 
${prefix}antilinkgc
${prefix}antilinktg
${prefix}antilinktt
${prefix}antilinkytch
${prefix}antilinkytvid
${prefix}antilinkig
${prefix}antilinkfb
${prefix}antilinktwit
${prefix}antilinkall
${prefix}antiwame

 *━━━〈  🔍 Search 🔍  〉━━━*

${prefix}play
${prefix}ytmp3
${prefix}ytmp4
${prefix}yts
${prefix}lyrics
${prefix}google
${prefix}gimage
${prefix}pinterest
${prefix}image
${prefix}weather
${prefix}movie
${prefix}wallpaper
${prefix}searchgc
${prefix}happymod
${prefix}wikimedia
${prefix}ringtone
${prefix}anime
${prefix}animestory
${prefix}manga
${prefix}ringtone  

 *━━━〈   support   〉━━━*
${prefix}sup
${prefix}support
${prefix}frage

 *━━━〈  🔰 Convert 🔰  〉━━━*

${prefix}sticker
${prefix}toimg
${prefix}tovideo
${prefix}togif
${prefix}steal
${prefix}stickermeme
${prefix}emojimix
${prefix}tourl
${prefix}tomp3
${prefix�}toaudio

 *━━━〈  🔉 Audio 🔉  〉━━━*

${prefix}bass
${prefix}tempo
${prefix}blown
${prefix}deep
${prefix}earrape
${prefix}fast
${prefix}fat
${prefix}nightcore
${prefix}reverse
${prefix}robot
${prefix}slow
${prefix}squirrel

 *━━━〈  📍 Reactions 📍  〉━━━*

${prefix}bonk
${prefix}cry
${prefix}bully
${prefix}cuddle
${prefix}hug
${prefix}kiss
${prefix}lick
${prefix}pat
${prefix}smug
${prefix}yeet
${prefix}blush
${prefix}smile
${prefix}wave
${prefix}highfive
${prefix}handhold
${prefix}nom
${prefix}glomp
${prefix}bite
${prefix}slap
${prefix}kill
${prefix}happy
${prefix}wink
${prefix}poke
${prefix}dance
${prefix}cringe

 *━━━〈  🌌 Downloader 🌌  〉━━━*

${prefix}play
${prefix}ytmp3
${prefix}ytmp4
${prefix}ytvideo
${prefix}mediafire
${prefix}instagram
${prefix}igtv
${prefix}facebook
${prefix}fbmp3
${prefix}twitter
${prefix}twittermp3
${prefix}tiktok
${prefix}tiktokaudio
${prefix}tiktoknowm
${prefix}mediafire  

 *━━━〈  🈴 Weeb 🈴  〉━━━*

${prefix}crosplay
${prefix}waifu
${prefix}loli
${prefix}neko
${prefix}ppcouple
${prefix}feed
${prefix}foxgirl
${prefix}feed
${prefix}meow
${prefix}tickle
${prefix}wallpaper
${prefix}coffee
${prefix}animenom
${prefix}waifu3
${prefix}neko2
${prefix}feed
${prefix}meow
${prefix}tickle
${prefix}migumin
${prefix}awoo
${prefix}animewallpaper2
${prefix}anime
${prefix}manga

 *━━━〈  ♨️ Informative ♨️  〉━━━*

${prefix}animequote
${prefix}quote
${prefix}covid
${prefix}earthquake
${prefix}wiki

 *━━━〈  🎗 Others 🎗  〉━━━*

${prefix}stickermeme
${prefix}quotes
${prefix}darkjoke 

 *━━━〈  🎐 Fun 🎐  〉━━━*

${prefix}schäm
${prefix}reaction
${prefix}truth
${prefix}dare
${prefix}couple
${prefix}soulmate
${prefix}handsomecheck
${prefix}beautifulcheck
${prefix}awesomecheck
${prefix}greatcheck
${prefix}gaycheck
${prefix}cutecheck
${prefix}lesbiancheck
${prefix}hornycheck
${prefix}prettycheck
${prefix}lovelycheck
${prefix}uglycheck
${prefix}charactercheck

 *━━━〈  🪁 Essentials 🪁  〉━━━*

 ${prefix}say
 ${prefix}translate
 ${prefix}fliptext
 ${prefix}toletter
 ${prefix}Wetter

 *━━━〈  💥 NSFW 💥  〉━━━*
 
Wir haben ne hentai gruppe wenn du da rein willst dan mach ${prefix}sus dan kommt der link bitte beachtet das der bot nicht gekick wird

Geben Sie " *${prefix}nsfw* " ein und aktivieren Sie dann NSFW (nur Administrator!)



    「 System Info 」
    
Speed : ${latensie.toFixed(4)} miliseconds

Up Time : ${runtime(process.uptime())}

Bot Name : ${global.BotName}

Owner Name : ${global.OwnerName}

𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : XAIOMI 12 T Pro 〈Userland〉

𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : ${Object.keys(global.db.users).length}
    
    
    *「 User Info 」*
Use Name: : ${pushname} 

User Level: ${levelMenu}

User XP : ${xpMenu} \ ${reqXp}

User Role : ${role}


 『  *${global.BotName}*  』
Powered by: *Sebastian*

 🔰 Um einen dieser Befehle zu verwenden, geben Sie ein
 " *${prefix}<Befehlsname>* ".`
    

 let buttonshelpm = [
    {buttonId: `${prefix}owner`, buttonText: {displayText: 'Bot Owner'}, type: 1}
    ]
                let buttonMessage = {
                    video:fs.readFileSync('./system/miku2.mp4'),gifPlayback:false,
                    caption: helpmenu,
                    footer: `${BotName}`,
                    buttons: buttonshelpm,
                    headerType: 4
                    
                }
            Miku.sendMessage(m.chat, buttonMessage,{ quoted:m })
                }
break
*/

case 'help': case 'h': case 'menu': case 'allmenu': case 'listmenu': case 'hilfe': case 'mu':{
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    reply (` Konichiwa *${pushname}* Senpai,
Ich bin *Miku Nakano*, ein von *MkM Inc.* entwickelter Bot.

Ich befinde mich derzeit in der Version 4, Edition 1.

Es können daher einige Fehler auftreten, bitte kontaktieren, kontaktiert
dann die Owner, den Owner oder schreibt eine Nachricht in die Supportgruppe.
*Vielen Dank*

🔰 Mein Präfix ist:  ${prefix}
Hier ist die Liste meiner Befehle.

Eigene Befehle(v4):

*━━━〈  Own/New(Beta)  〉━━━*
 _Bot_:
 bn , botname
 
 _Idee_:
 idee , idea , ia
 ideeanfrage , ir
 idearequest
 
 mm
 mmenu
 makerm
 makermenu
 
 i
 selflink
 whatsapplink
 walink
 @link
 
 *━━━〈  User  〉━━━*
 
 _Userbank:_
 userbank
 buser , bankuser
 
 uiron , useriron
 ironuser , inuser
 ugold , gduser
 golduser , usergold
 emaralduser , emuser
 
 upotion , userpotion
 potionuser  , ptuser
 
 userbalance
 userba , ubalance
 
 _Level:_
 userxp , uxp
 xpu , xpuser
 userl , userlvl
 userlevel , luser
 lvluser , leveluser
 lvl , l , xp , level
 
 _Benutzer:_
 userinfo , useri
 iuser , user
 userinfos
 userrole , urole
 roleuser , ruser
 
 *━━━〈  😎 Bot 😎 〉━━━*
 
  a , a2 , a3
  p , p1
  p2 , p3
  online , uptime
  ping , aping
  session , sessionid
  sitzung , oz
  onlinezeit , ut
  
*━━━ 〈 👥️ Gruppen👥️  〉━━━*

 grc , grpc
 gruppe , groupp
 ggroup , ggrp
 grpp
 
 *━━━〈  Gruppenlinks 〉━━━*
 
 ownergruppen , og
 ow , teamgruppen
 
 ankündigung , ankündigungen
 
 chatgruppe , chatgroup
 cgr , chatgr
 
 supchat , supch
 chatgruppesupport
 
 _Support_:
 supgrp
 supportgruppe
 
 _Werbegruppe_:
 werbegruppe
 werbegrp
 
 Umfragegr
 Umfragegrp
 Umfrageruppe
 
 _Teambewerbung_:
 bewerbunggruppe
 bewerbegruppe
 bewerbunggrp
 teamanfragegrp
 teambewerbunggrp
 _Bot-Test_:
 test1gruppe
 test1grp
 bottest1grp
 bottest1gruppe
 
 *━━━〈  ❓️ Support ❓️  〉━━━*
 
 sup , support
 frage ,sa
 supportanfrage
 bug , bgr
 bugreport
 
 
 *━━━〈  🎆 Core 🎆  〉━━━*
 
 afk , speak
 miku, stalk
 profile , help
 delete , deleteall
 welcome , admin
 
 *━━━〈  ⭕ Group ⭕  〉━━━*
 
 promote , demote, 
 revoke , remove
 tagall , hidetag
 groupsetting, tag
 grouplink , geh
 setgcpp , setname
 setdesc , group
 nsfw , remove 
 
 *━━━〈  ➰ Anti Link ➰  〉━━━*
 
 antilinkgc , antilinktg
 antilinktt , antilinkytch
 antilinkytvid , antilinkig
 antilinkfb , antilinktwit
 antilinkall , antiwame
 
 *━━━〈  🔍 Search 🔍  〉━━━*
 
 play , ytmp3
 tmp4 , yts
 lyrics , google
 gimage , pinterest
 image , weather , wt
 movie , wallpaper 
 searchgc , happymod
 wikimedia , ringtone
 anime , animestory
 manga , ringtone 
 
 *━━━〈  🔰 Convert 🔰  〉━━━*
 
sticker , toimg
tovideo , togif
steal , stickermeme 
emojimix , tourl
tomp3 , toaudio

 *━━━〈  🔉 Audio 🔉  〉━━━*
 
bass , tempo
blown , deep
earrape , fast
fat , nightcore 
reverse , robot
slow , squirrel

 *━━━〈  📍 Reactions 📍  〉━━━*
 
bonk , cry
bully , cuddle
hug , kiss
lick , pat
smug , yeet
blush , smile
wave , highfive
handhold , nom 
glomp , bite
slap , kill
happy , wink
poke , dance
cringe

 *━━━〈  🌌 Downloader 🌌  〉━━━*
 
play , ytmp3
ytmp4 , ytvideo
instagram , igtv
facebook , fbmp3
twitter , twittermp3
tiktok , tiktokaudio 
tiktoknowm , mediafire

 *━━━〈  🈴 Weeb 🈴  〉━━━*
 
crosplay , waifu
loli , neko , ppcouple
feed , foxgirl , feed
meow , tickle , wallpaper
coffee , animenom , waifu3
neko2 , feed , meow
tickle , migumin , awoo
animewallpaper2 , anime 
manga

 *━━━〈  ♨️ Informative ♨️  〉━━━*
 
animequote , quote
covid , earthquake
wiki

 *━━━〈  🎗 Others 🎗  〉━━━*
 
quotes
stickermeme
darkjoke 

 *━━━〈  🎐 Fun 🎐  〉━━━*
 
reaction , truth
dare , couple
soulmate , handsomecheck
beautifulcheck , awesomecheck 
greatcheck , gaycheck 
cutecheck , lesbiancheck
hornycheck , prettycheck 
lovelycheck , uglycheck
charactercheck

 *━━━〈  🪁 Essentials 🪁  〉━━━*
 
 say , translate 
 fliptext , toletter
 wetter , wt
 
 *━━━〈  💥 NSFW 💥  〉━━━*
 
🍁 Geben Sie " *${prefix}nsfw* " ein und aktivieren Sie dann NSFW (nur Administrator!)

🍁Geben Sie dann „*${prefix}nsfwmenu*“ ein, um eine vollständige Liste der NSFW-Befehle zu erhalten.
       「 System Info 」
    
    Speed : ${latensie.toFixed(4)} miliseconds
    Up Time : ${runtime(process.uptime())}
    Bot Name : Miku-Max_v3-ed_1
    Owner Name : ${global.OwnerName}
    𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : Amazon AWS
    𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : ${Object.keys(global.db.users).length}
    
    
       「 User Info 」
    
    User Level: ${levelMenu}
    User XP : ${xpMenu} \ ${reqXp}
    User Role : ${role}
    
    
       「 User Bank 」
    
    User Balance : ${uangku}
    Iron : ${getBesi(m.sender)}
    Gold : ${getEmas(m.sender)}
    Emarald : ${getEmerald(m.sender)}
    Potion : ${getPotion(m.sender)}
    
 『  *${global.sitzung}*  』
 
 Powe�red by: *MkM Inc.*
 🔰 Um einen dieser Befehle zu verwenden, geben Sie ein
 " *${prefix}<Befehlsname>* ".
 
 🔰 Geben Sie " *${prefix}help* " ein, um die vollständige Befehlsliste zu erhalten.`)
	
	

let buttonshelpm = [
    {buttonId: `${prefix}owner`, buttonText: {displayText: 'Bot Owner'}, type: 1}
    ]
                let buttonMessage = {
                    video:fs.readFileSync('./system/miku2.mp4'),gifPlayback:true,
                    caption: helpmenu,
                    footer: `${BotName}`,
                    buttons: buttonshelpm,
                    headerType: 4

                }
            Miku.sendMessage(m.chat, buttonMessage,{ quoted:m })
                }
break

case 'mm': case 'mmenu': case 'makerm': case 'makermenu':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
reply(` Hi ${pushname} ,
Du bist im Maker-Menu gelandet.
All Rights Reserved by *MkM Bot Inc.*
Ich bin *Miku Nakano*, ein von *MkM Inc.* entwickelter Bot.
Ich befinde mich derzeit in der Version 4, Edition 1.

Es können daher einige Fehler auftreten, bitte kontaktieren, kontaktiert
dann die Owner, den Owner oder schreibt eine Nachricht in die Supportgruppe.
*Vielen Dank*
🔰 Mein Präfix ist:  ${prefix}

*Benutzung: "${prefix} Befehl <text>"\nBeispiel:${prefix}ice Hallo*
Hier ist die Liste der Maker-Menu Befehle:

*━━━〈  Schrift-Maker  〉━━━*

Hier eine Lister der Miku:\nMakermenu Befehle,\nbzw. Eine Liste der Befehle:


1. ${prefix}mm1
1. ${prefix}makermenu1

2. ${prefix}mm2
2. ${prefix}makermenu2

3. ${prefix}mm3
3. ${prefix}makermenu3

4. ${prefix}mm4
4. ${prefix}makermenu4

5. ${prefix}mm5
5. ${prefix}makermenu5

6. ${prefix}mm6
6. ${prefix}makermenu6

7. ${prefix}mm7
7. ${prefix}makermenu7


8. ${prefix}mm8
8. ${prefix}makermen8

9. ${prefix}mm9
9. ${prefix}makermenu9

10. ${prefix}mm10
10. ${prefix}makermenu10

11. ${prefix}mm11
11. ${prefix}makermenu11

15. ${prefix}mm15
15. ${prefix}makermenu15

『  *${global.sitzung}*  』

 Powered by: *MkM Inc.*
 🔰 Um einen dieser Befehle zu verwenden, geben Sie ein
 " *${prefix}<Befehlsname>* ".
 
 🔰 Geben Sie " *${prefix}help* " ein, um die vollständige Befehlsliste zu erhalten.`)
		
break
case 'mm1': case 'mmenu1': case 'makerm1': case 'makermenu1':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
reply(` Hi ${pushname} ,
Du bist im Maker-Menu gelandet.
All Rights Reserved by *MkM Bot Inc.*
Ich bin *Miku Nakano*, ein von *MkM Inc.* entwickelter Bot.
Ich befinde mich derzeit in der Version 4, Edition 1.
Es können daher einige Fehler auftreten, bitte kontaktieren, kontaktiert
dann die Owner, den Owner oder schreibt eine Nachricht in die Supportgruppe.
*Vielen Dank*
🔰 Mein Präfix ist:  ${prefix}
*Benutzung: "${prefix} Befehl <text>"\nBeispiel:${prefix}ice Hallo*
Hier ist die Liste der Maker-Menu Befehle:

*━━━〈  Schrift-Maker  〉━━━*

1. candy       <text>
2. 3dneon      <text>
3. 3dspace     <text>
4. 3dstone     <text>
5. christmas   <text>
6. 3dchristmas <text>
7. sparklechristmas <text>
8. deepsea     <text>
9. scifi       <text>
10. rainbow2   <text>
11 . waterpipe <text>
12. spooky     <text>
13. pencil     <text>
14. circuit    <text>
15. discovery  <text>
16. metalic    <text>
17. fiction    <text>
18. demon      <text>
19. transformer <text>
20. berry      <text>
21. thunder    <text>
22. 3dstone2   <text>
23. neonlight  <text>
24. glitch     <text>
25. harrypotter  <text>
26. brokenglass <text>
27. papercut    <text>
28. watercolor  <text>
29. multicolor  <text>
30. neondevil   <text>
31. underwater    <text>
32. graffitibike  <text>
33. snow          <text>
34. cloud         <text>
『  *${global.sitzung}*  』
 Powered by: *MkM Inc.*
 🔰 Um einen dieser Befehle zu verwenden, geben Sie ein
 " *${prefix}<Befehlsname>* ".
 🔰 Geben Sie " *${prefix}help* " ein, um die vollständige Befehlsliste zu erhalten.`)
		
break
		
case 'mm2': case 'mmenu2': case 'makerm2': case 'makermenu2':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
reply(` Hi ${pushname} ,
Du bist im Maker-Menu gelandet
All Rights Reserved by *MkM Bot Inc.*
Ich bin *Miku Nakano*, ein von *MkM Inc.* entwickelter Bot.
Ich befinde mich derzeit in der Version 4, Edition 1.
Es können daher einige Fehler auftreten, bitte kontaktieren, kontaktiert
dann die Owner, den Owner oder schreibt eine Nachricht in die Supportgruppe.
*Vielen Dank*
🔰 Mein Präfix ist:  ${prefix}
*Benutzung: "${prefix} Befehl <text>"\nBeispiel:${prefix}ice Hallo*
Hier ist die Liste der Maker-Menu Befehle:

*━━━〈  Schrift-Maker  〉━━━*

35. honey         <text>
36. ice           <text>
37. fruitjuice    <text>
38. biscuit       <text>
39. wood          <text>
40. chocolate     <text>
41. strawberry    <text>
42. matrix        <text>
43. blood         <text>
44. dropwater     <text>
45. toxic         <text>
46. lava          <text>
47. rockart       <text>
48. bloodglas     <text>
49. alloween      <text>
50. darkgold      <text>
51. joker         <text>
52. wicker        <text>
53. firework      <text>
54. skeleton      <text>
55. blackpinkart  <text>
56. sand          <text>
57. glue          <text>
58. 1917          <text>
59. leves         <text>
60. demon         <text>
61. 3dneon    <text>
62. 3dspace   <text>
63. 3dstone   <text>
64. bookeh    <text>
65. carbon    <text>
66. curcuit   <text>
67. glitch2   <text>
68. glitch3   <text>
69. lion      <text>
70. magma     <text>
『  *${global.sitzung}*  』
 Powered by: *MkM Inc.*
 🔰 Um einen dieser Befehle zu verwenden, geben Sie ein
 " *${prefix}<Befehlsname>* ".
 🔰 Geben Sie " *${prefix}help* " ein, um die vollständige Befehlsliste zu erhalten.`)
		
break

case 'mm3': case 'mmenu3': case 'makerm3': case 'makermenu3':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
reply(` Hi ${pushname} ,
Du bist im Maker-Menu gelandet.
All Rights Reserved by *MkM Bot Inc.*
Ich bin *Miku Nakano*, ein von *MkM Inc.* entwickelter Bot.
Ich befinde mich derzeit in der Version 4, Edition 1.
Es können daher einige Fehler auftreten, bitte kontaktieren, kontaktiert
dann die Owner, den Owner oder schreibt eine Nachricht in die Supportgruppe.
*Vielen Dank*
🔰 Mein Präfix ist:  ${prefix}
*Benutzung: "${prefix} Befehl <text>"\nBeispiel:${prefix}ice Hallo*
Hier ist die Liste der Maker-Menu Befehle:

*━━━〈  Schrift-Maker  〉━━━*

71. matrix    <text>
72. neongreen <text>
73. scifi     <text>
74. thunder   <text>
75. thunder2  <text>
76. wall      <text>
77. grunge    <text>
78. 3dpaint   <text>
79. pinggold  <text>
80. liquid    <text>
81. burger    <text>
82. cage      <text>
83. party     <text>
84. comic     <text>
85. topography  <text>
86. orange    <text>
87. valentine <text>
88. lightglow <text>
89. thor      <text>
90. 3d_deepsea  <text>
91.  m_black     <text>
92.  graffititext    <text>
93.  neonlightgalaxy <text>
94.  3dmarvel    <text>
95.  marvelstudiometal <text>
96.  marvelstudio <text>
97.  roadwarning  <text>
98.  advancedglow <text>
99.  brakewall    <text>
100. glitch3      <text>
101. 3dbox        <text>
102. waterdrop    <text>
103. lion3        <text>
104. papercut2    <text>
105. transformer2 <text>
『  *${global.sitzung}*  』
 Powered by: *MkM Inc.*
 🔰 Um einen dieser Befehle zu verwenden, geben Sie ein
 " *${prefix}<Befehlsname>* ".
 🔰 Geben Sie " *${prefix}help* " ein, um die vollständige Befehlsliste zu erhalten.`)
		
break

case 'mm4': case 'mmenu4': case 'makerm4': case 'makermenu4':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
reply(` Hi ${pushname} ,
Du bist im Maker-Menu gelandet.
All Rights Reserved by *MkM Bot Inc.*
Ich bin *Miku Nakano*, ein von *MkM Inc.* entwickelter Bot.
Ich befinde mich derzeit in der Version 4, Edition 1.
Es können daher einige Fehler auftreten, bitte kontaktieren, kontaktiert
dann die Owner, den Owner oder schreibt eine Nachricht in die Supportgruppe.
*Vielen Dank*
🔰 Mein Präfix ist:  ${prefix}
*Benutzung: "${prefix} Befehl <text>"\nBeispiel:${prefix}ice Hallo*
Hier ist die Liste der Maker-Menu Befehle:

*━━━〈  Schrift-Maker  〉━━━*

106. harrypot2    <text>
107. window2      <text>
108. blackpinkneon2   <text>
109. (pornhub3)   <text>
110. blackpink4   <text�>
111. glitch4   <text>
112. glitch5   <text>
113. glitch6   <text>
114. 3dspace2  <text>
115. lion4     <text>
116. 3dneon3   <text>
117. neon4     <text>
118. holographic3  <text>
119. bear3     <text>
120. wolf3     <text>
121. joker3    <text>
122. dropwater3    <text>
123. summertime3   <text>
124. neonlight5    <text>
125. thewall3  <text>
126. natural3  <text>
127. carbon3   <text>
128. pencil3   <text>
129. textmaker3    <text>
130. (textmaker4)  <text>
131. hooror2    <text>
132. whitebear3 <text>
133. thunder4   <text>
134. neon6      <text>
135. matrix4    <text>
136. sky3       <text>
137. magma4     <text>
138. sand4      <text>
139. pencil5    <text>
140. metallic3  <text>
『  *${global.sitzung}*  』
 Powered by: *MkM Inc.*
 🔰 Um einen dieser Befehle zu verwenden, geben Sie ein
 " *${prefix}<Befehlsname>* ".
 🔰 Geben Sie " *${prefix}help* " ein, um die vollständige Befehlsliste zu erhalten.`)
		
break
		
case 'mm5': case 'mmenu5': case 'makerm5': case 'makermenu5':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
reply(` Hi ${pushname} ,
Du bist im Maker-Menu gelandet.
All Rights Reserved by *MkM Bot Inc.*
Ich bin *Miku Nakano*, ein von *MkM Inc.* entwickelter Bot.
Ich befinde mich derzeit in der Version 4, Edition 1.
Es können daher einige Fehler auftreten, bitte kontaktieren, kontaktiert
dann die Owner, den Owner oder schreibt eine Nachricht in die Supportgruppe.
*Vielen Dank*
🔰 Mein Präfix ist:  ${prefix}
*Benutzung: "${prefix} Befehl <text>"\nBeispiel:${prefix}ice Hallo*
Hier ist die Liste der Maker-Menu Befehle:

*━━━〈  Schrift-Maker  〉━━━*

141. graffititext5 <text>
142. steel3     <text>
143. harrypotter6  <text>
144. underwater4   <text>
145. luxury3    <text>
146. glue5      <text>
147. fabric3    <text>
148. neonlight7 <text>
149. lava5      <text>
150. toxic3     <text>
151. ancient3   <text>
152. chrismas4  <text>
153. scifi4     <text>
154. rainbow4   <text>
155. classic3   <text>
156. watercolor5   <text>
157. halloween4 <text>
158. halloweenfire3 <text>
159. foggy3     <text>
160. marvel6    <text>
161. skeleton4  <text>
162. sketch3    <text>
163. wonderful3 <text>
164. batman3    <text>
165. juice4     <text>
166. buisness7  <text>
167. thor7      <text>
168. deepsea7   <text>
169. batman7    <text>
170. diamond7   <text>
171. flag_3D-2  <text>
172. american_3d_flag <text>
173. scifi_3D-2 <text>
174. rainbow_3D-2     <text>
175. pipe_3D-2  <text>
『  *${global.sitzung}*  』
 Powered by: *MkM Inc.*
 🔰 Um einen dieser Befehle zu verwenden, geben Sie ein
 " *${prefix}<Befehlsname>* ".
 🔰 Geben Sie " *${prefix}help* " ein, um die vollständige Befehlsliste zu erhalten.`)
		
break
		
case 'mm6': case 'mmenu6': case 'makerm6': case 'makermenu6':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
reply(` Hi ${pushname} ,
Du bist im Maker-Menu gelandet.
All Rights Reserved by *MkM Bot Inc.*
Ich bin *Miku Nakano*, ein von *MkM Inc.* entwickelter Bot.
Ich befinde mich derzeit in der Version 4, Edition 1.
Es können daher einige Fehler auftreten, bitte kontaktieren, kontaktiert
dann die Owner, den Owner oder schreibt eine Nachricht in die Supportgruppe.
*Vielen Dank*
🔰 Mein Präfix ist:  ${prefix}
*Benutzung: "${prefix} Befehl <text>"\nBeispiel:${prefix}ice Hallo*
Hier ist die Liste der Maker-Menu Befehle:

*━━━〈  Schrift-Maker  〉━━━*

176. halloween8 <text>
177. spooky8    <text>
178. horror8    <text
179. sketch6    <text>
180. bluecircuit5     <text>
181. space5    <text>
182. metallic5 <text>
183. glossy7   <text>
184. captain_america-2 <text>
185. scifi9    <text>
186. 8bit-2    <text>
187. green_horror-2    <text>
188. transformer4      <text>
189. berry5    <text>
190. layered4  <text>
191. thunder9  <text>
192. magma8    <text>
193. stone6    <text>
194. neon8     <text>
195. glitch8   <text>
196. glitch9   <text>
197. harry_potter-2   <text>
198. embossed5 <text>
199. brokenglass5     <text>
200. artpaper-2 <text>
201. bw-2       <text>
202. gradient-3 <text>
203. 3D_glossy-2      <text>
204. 3D_beach2  <text>
205. watercolor5      <text>
206. 3D-Multicolor    <text>
207. foggy6     <text>
208. neon_devil-2     <text>
209. 3D-Unterwater-2  <text>
『  *${global.sitzung}*  』
 Powered by: *MkM Inc.*
 🔰 Um einen dieser Befehle zu verwenden, geben Sie ein
 " *${prefix}<Befehlsname>* ".
 🔰 Geben Sie " *${prefix}help* " ein, um die vollständige Befehlsliste zu erhalten.`)
		
break
		
case 'mm7': case 'mmenu7': case 'makerm7': case 'makermenu7':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
reply(` Hi ${pushname} ,
Du bist im Maker-Menu gelandet.
All Rights Reserved by *MkM Bot Inc.*
Ich bin *Miku Nakano*, ein von *MkM Inc.* entwickelter Bot.
Ich befinde mich derzeit in der Version 4, Edition 1.
Es können daher einige Fehler auftreten, bitte kontaktieren, kontaktiert
dann die Owner, den Owner oder schreibt eine Nachricht in die Supportgruppe.
*Vielen Dank*
🔰 Mein Präfix ist:  ${prefix}
*Benutzung: "${prefix} Befehl <text>"\nBeispiel:${prefix}ice Hallo*
Hier ist die Liste der Maker-Menu Befehle:

*━━━〈  Schrift-Maker  〉━━━*

210. mascot-logo-2    <text>
211. graffiti8   <text>
212. graffiti-wall-2   <text>
213. graffiti9   <text>
214. christmas7  <text>
215. technology-neon-2 <text>
216. snow6   <text>
217. cloud5  <text>
217. 3D-luxury-2  <text>
218. 3D-gradient  <text>
219. blackpink5   <text>
220. vintage6     <text>
221. real-cloud-2 <text>
222. cloud-sky-2  <text>
223. sand-beach-2 <text>
224. sand-writing-2  <text>
225. sand-engraved-2 <text>
226. summery-sand-2  <text>
227. bithday5     <text>
228. 3D-glue-2    <text>
229. 3D-space-2   <text>
230. metal-dark-2 
231. tiktok-stayle-2
232. a-stone-2
233. glalxy-style-2
234. 1917style5
235. 80s-retro
236. 3D-Minion3
237. pornhub8
238. dexposurw
239. 3D-holo-2
240. avengers8
『  *${global.sitzung}*  』
 Powered by: *MkM Inc.*
 🔰 Um einen dieser Befehle zu verwenden, geben Sie ein
 " *${prefix}<Befehlsname>* ".
 🔰 Geben Sie " *${prefix}help* " ein, um die vollständige Befehlsliste zu erhalten.`)
		
break

case 'mm8': case 'mmenu8': case 'makerm8': case 'makermenu8':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
reply(` Hi ${pushname} ,
Du bist im Maker-Menu gelandet.
All Rights Reserved by *MkM Bot Inc.*
Ich bin *Miku Nakano*, ein von *MkM Inc.* entwickelter Bot.
Ich befinde mich derzeit in der Version 4, Edition 1.
Es können daher einige Fehler auftreten, bitte kontaktieren, kontaktiert
dann die Owner, den Owner oder schreibt eine Nachricht in die Supportgruppe.
*Vielen Dank*
🔰 Mein Präfix ist:  ${prefix}
*Benutzung: "${prefix} Befehl <text>"\nBeispiel:${prefix}ice Hallo*
Hier ist die Liste der Maker-Menu Befehle:

*━━━〈  Schrift-Maker  〉━━━*

241. metal-purple-2
242. marvel-metal-2
243. deluxe-selver-2
244. luxury_metal-2
245. glossyblue4
246. glossycarbon5
247. fabric7
248. newyear6
249. newyeagif3
250. color-balloon-2
251. 3D-metal-2
252. avatargold4
253. 3D_metalsilver-2
254. 3D_rosegold-2
255. 3D_metalgold-2
256. 3D_metalgalax<-2
257. 3D-Christmas-2
258. blood_text-2
259. halloweenfire7
260. metaldarkgold7
261. wolf_logo-6
262. lion_logo-7
263. wolf_logo_galaxy-2
264. ninja7
265. joker7
『  *${global.sitzung}*  』
 Powered by: *MkM Inc.*
 🔰 Um einen dieser Befehle zu verwenden, geben Sie ein
 " *${prefix}<Befehlsname>* ".
 🔰 Geben Sie " *${prefix}help* " ein, um die vollständige Befehlsliste zu erhalten.`)
		
break

case 'mm9': case 'mmenu9': case 'makerm9': case 'makermenu9':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
reply(` Hi ${pushname} ,
Du bist im Maker-Menu gelandet.
All Rights Reserved by *MkM Bot Inc.*
Ich bin *Miku Nakano*, ein von *MkM Inc.* entwickelter Bot.
Ich befinde mich derzeit in der Version 4, Edition 1.
Es können daher einige Fehler auftreten, bitte kontaktieren, kontaktiert
dann die Owner, den Owner oder schreibt eine Nachricht in die Supportgruppe.
*Vielen Dank*
🔰 Mein Präfix ist:  ${prefix}
*Benutzung: "${prefix} Befehl <text>"\nBeispiel:${prefix}ice Hallo*
Hier ist die Liste der Maker-Menu Befehle:

*━━━〈  Schrift-Maker  〉━━━*

266. wicker7
267. natural_leaves-2
268. sparkle7
269. skel�eton7
270. red_balloon-2
271. purple_balloon-2
272. pink_balloon-2
273. green_balloon-2
274. cyan_balloon-2
275. gold_balloon-2
276. steel7
277. ultragloss4
279. denim4
280. decor_green-2
281. peridot_stone-2
282. rock5
283. lava8
284. yellow_glass-2
285. purple_glass-2
286. orange_glass-2
287. green_glass-2
288. cyan_glass-2
289. blue_glass-2
290. red_glass-2
291. shinypurple_glass-2
292. captain-america-2
293. r2-d2_2
294. rainbow_eq-2
295. toxic7
296. sparklepink_jewelery-2
297. sparkleblue_jewelery-2
298. sparklegreen_jewelery-2
299. sparklepurple_jewelery-2
『  *${global.sitzung}*  』
 Powered by: *MkM Inc.*
 🔰 Um einen dieser Befehle zu verwenden, geben Sie ein
 " *${prefix}<Befehlsname>* ".
 🔰 Geben Sie " *${prefix}help* " ein, um die vollständige Befehlsliste zu erhalten.`)
		
break

case 'mm10': case 'mmenu10': case 'makerm10': case 'makermenu10':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
reply(` Hi ${pushname} ,
Du bist im Maker-Menu gelandet.
All Rights Reserved by *MkM Bot Inc.*
Ich bin *Miku Nakano*, ein von *MkM Inc.* entwickelter Bot.
Ich befinde mich derzeit in der Version 4, Edition 1.
Es können daher einige Fehler auftreten, bitte kontaktieren, kontaktiert
dann die Owner, den Owner oder schreibt eine Nachricht in die Supportgruppe.
*Vielen Dank*
🔰 Mein Präfix ist:  ${prefix}
*Benutzung: "${prefix} Befehl <text>"\nBeispiel:${prefix}ice Hallo*
Hier ist die Liste der Maker-Menu Befehle:

*━━━〈  Schrift-Maker  〉━━━*

300. sparklegold_jewelry-2
301. sparklered_jewelery-2
302. sparklecyan_jewelery-2
303. purple_glass-2
304. decorative-glass-2
305. chocolatw_cake-2
306. strawberry
307. koi_fish-2
308. bread6
309. matrix_style-2
310. horror_blood-2
311. neonlight6
312. thunder6
313. 3d_box-2
314. neon6
315. road_warning-2
316. 3d_steel-2
317. bokeh6
318. green_neon-2
319. free_advanced_glow-2
320. break_wall-2
321. christmax_gift-2
322. honey6
323. plastic_bag_drug-2
324. horror_gift-2
325. marble_slabs-2
326. marble6
327. ice_cold-2
328. fruit_juice-2
329. rusty_metal-2
330. abstra_gold-2
331. biscuit7
332. bagel6
333. wood7
334. sci--fi_2
335. metal_rainbow-2
『  *${global.sitzung}*  』
 Powered by: *MkM Inc.*
 🔰 Um einen dieser Befehle zu verwenden, geben Sie ein
 " *${prefix}<Befehlsname>* ".
 🔰 Geben Sie " *${prefix}help* " ein, um die vollständige Befehlsliste zu erhalten.`)
		
break

case 'mm11': case 'mmenu11': case 'makerm11': case 'makermenu11':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
reply(` Hi ${pushname} ,
Du bist im Maker-Menu gelandet.
All Rights Reserved by *MkM Bot Inc.*
Ich bin *Miku Nakano*, ein von *MkM Inc.* entwickelter Bot.
Ich befinde mich derzeit in der Version 4, Edition 1.
Es können daher einige Fehler auftreten, bitte kontaktieren, kontaktiert
dann die Owner, den Owner oder schreibt eine Nachricht in die Supportgruppe.
*Vielen Dank*
🔰 Mein Präfix ist:  ${prefix}
*Benutzung: "${prefix} Befehl <text>"\nBeispiel:${prefix}ice Hallo*
Hier ist die Liste der Maker-Menu Befehle:

*━━━〈  Schrift-Maker  〉━━━*

336. purple_gem-2
337. shiny_metal-2
338. yellow_jewelery-2
339. silver_jewelery-2
340. red_jewelery-2
341. purple_jewelery-2
342. orange_jewelery-2
343. green_jewelery-2
344. cyan_jewelery-2
345. blue_jewelery-2
346. hot_metal-3
347. hexa_golden-3
348. blue_glitter-2
349. purple_glitter-2
350. pink_glitter-2
351. green_glitter-2
352. silver_glitter-2
353. gold_glitter-2
354. bronze_glitter-2
355. eroded_metal-2
356. carbon9
357. pink_candy-2
358. blue_metal-2
359. blue_gem-2
360. black_metal-2
361. 3d_glowing_metal-2
362. 3d_chrome-2
363. marvel-01
『  *${global.sitzung}*  』
 Powered by: *MkM Inc.*
 🔰 Um einen dieser Befehle zu verwenden, geben Sie ein
 " *${prefix}<Befehlsname>* ".
 🔰 Geben Sie " *${prefix}help* " ein, um die vollständige Befehlsliste zu erhalten.`)
		
break

case 'mm15': case 'mmenu15': case 'makerm15': case 'makermenu15':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
reply(` Hi ${pushname} ,
Du bist im Maker-Menu gelandet.

All Rights Reserved by *MkM Bot Inc.*

Ich bin *Miku Nakano*, ein von *MkM Inc.* entwickelter Bot.

Ich befinde mich derzeit in der Version 4, Edition 1.

Es können daher einige Fehler auftreten, bitte kontaktieren, kontaktiert
dann die Owner, den Owner oder schreibt eine Nachricht in die Supportgruppe.
*Vielen Dank*

🔰 Mein Präfix ist:  ${prefix}

*Benutzung: "${prefix} Befehl <text>"\nBeispiel:${prefix}ice Hallo*

Hier ist die Liste der Maker-Menu Befehle:

*━━━〈  Schrift-Maker  〉━━━*

1. candy       <text>
2. 3dneon      <text>
3. 3dspace     <text>
4. 3dstone     <text>
5. christmas   <text>
6. 3dchristmas <text>
7. sparklechristmas <text>
8. deepsea     <text>
9. scifi       <text>
10. rainbow2   <text>
11 . waterpipe <text>
12. spooky     <text>
13. pencil     <text>
14. circuit    <text>
15. discovery  <text>
16. metalic    <text>
17. fiction    <text>
18. demon      <text>
19. transformer <text>
20. berry      <text>
21. thunder    <text>
22. 3dstone2   <text>
23. neonlight  <text>
24. glitch     <text>
25. harrypotter  <text>
26. brokenglass <text>
27. papercut    <text>
28. watercolor  <text>
29. multicolor  <text>
30. neondevil   <text>
31. underwater    <text>
32. graffitibike  <text>
33. snow          <text>
34. cloud         <text>
35. honey         <text>
36. ice           <text>
37. fruitjuice    <text>
38. biscuit       <text>
39. wood          <text>
40. chocolate     <text>
41. strawberry    <text>
42. matrix        <text>
43. blood         <text>
44. dropwater     <text>
45. toxic         <text>
46. lava          <text>
47. rockart       <text>
48. bloodglas     <text>
49. alloween      <text>
50. darkgold      <text>
51. joker         <text>
52. wicker        <text>
53. firework      <text>
54. skeleton      <text>
55. blackpinkart  <text>
56. sand          <text>
57. glue          <text>
58. 1917          <text>
59. leves         <text>
60. demon         <text>
61. 3dneon    <text>
62. 3dspace   <text>
63. 3dstone   <text>
64. bookeh    <text>
65. carbon    <text>
66. curcuit   <text>
67. glitch2   <text>
68. glitch3   <text>
69. lion      <text>
70. magma     <text>
71. matrix    <text>
72. neongreen <text>
73. scifi     <text>
74. thunder   <text>
75. thunder2  <text>
76. wall      <text>
77. grunge    <text>
78. 3dpaint   <text>
79. pinggold  <text>
80. liquid    <text>
81. burger    <text>
82. cage      <text>
83. party     <text>
84. comic     <text>
85. topography  <text>
86. orange    <text>
87. valentine <text>
88. lightglow <text>
89. thor      <text>
90. 3d_deepsea  <text>
91.  m_black     <text>
92.  graffititext    <text>
93.  neonlightgalaxy <text>
94.  3dmarvel    <text>
95.  marvelstudiometal <text>
96.  marvelstudio <text>
97.  roadwarning  <text>
98.  advancedglow <text>
99.  brakewall    <text>
100. glitch3      <text>
101. 3dbox        <text>
102. waterdrop    <text>
103. lion3        <text>
104. papercut2    <text>
105. transformer2 <text>
106. harrypot2    <text>
107. window2      <text>
108. blackpinkneon2   <text>
109. (pornhub3)   <text>
110. blackpink4   <text>
111. glitch4   <text>
112. glitch5   <text>
113. glitch6   <text>
114. 3dspace2  <text>
115. lion4     <text>
116. 3dneon3   <text>
117. neon4     <text>
118. holographic3  <text>
119. bear3     <text>
120. wolf3     <text>
121. joker3    <text>
122. dropwater3    <text>
123. summertime3   <text>
124. neonlight5    <text>
125. thewall3  <text>
126. natural3  <text>
127. carbon3   <text>
128. pencil3   <text>
129. textmaker3    <text>
130. (textmaker4)  <text>
131. hooror2    <text>
132. whitebear3 <text>
133. thunder4   <text>
134. neon6      <text>
135. matrix4    <text>
136. sky3       <text>
137. magma4     <text>
138. sand4      <text>
139. pencil5    <text>
140. metallic3  <text>
141. graffititext5 <text>
142. steel3     <text>
143. harrypotter6  <text>
144. underwater4   <text>
145. luxury3    <text>
146. glue5      <text>
147. fabric3    <text>
148. neonlight7 <text>
149. lava5      <text>
150. toxic3     <text>
151. ancient3   <text>
152. chrismas4  <text>
153. scifi4     <text>
154. rainbow4   <text>
155. classic3   <text>
156. watercolor5   <tex�t>
157. halloween4 <text>
158. halloweenfire3 <text>
159. foggy3     <text>
160. marvel6    <text>
161. skeleton4  <text>
162. sketch3    <text>
163. wonderful3 <text>
164. batman3    <text>
165. juice4     <text>
166. buisness7  <text>
167. thor7      <text>
168. deepsea7   <text>
169. batman7    <text>
170. diamond7   <text>
171. flag_3D-2  <text>
172. american_3d_flag <text>
173. scifi_3D-2 <text>
174. rainbow_3D-2     <text>
175. pipe_3D-2  <text>
176. halloween8 <text>
177. spooky8    <text>
178. horror8    <text
179. sketch6    <text>
180. bluecircuit5     <text>
181. space5    <text>
182. metallic5 <text>
183. glossy7   <text>
184. captain_america-2 <text>
185. scifi9    <text>
186. 8bit-2    <text>
187. green_horror-2    <text>
188. transformer4      <text>
189. berry5    <text>
190. layered4  <text>
191. thunder9  <text>
192. magma8    <text>
193. stone6    <text>
194. neon8     <text>
195. glitch8   <text>
196. glitch9   <text>
197. harry_potter-2   <text>
198. embossed5 <text>
199. brokenglass5     <text>
200. artpaper-2 <text>
201. bw-2       <text>
202. gradient-3 <text>
203. 3D_glossy-2      <text>
204. 3D_beach2  <text>
205. watercolor5      <text>
206. 3D-Multicolor    <text>
207. foggy6     <text>
208. neon_devil-2     <text>
209. 3D-Unterwater-2  <text>
210. mascot-logo-2    <text>
211. graffiti8   <text>
212. graffiti-wall-2   <text>
213. graffiti9   <text>
214. christmas7  <text>
215. technology-neon-2 <text>
216. snow6   <text>
217. cloud5  <text>
217. 3D-luxury-2  <text>
218. 3D-gradient  <text>
219. blackpink5   <text>
220. vintage6     <text>
221. real-cloud-2 <text>
222. cloud-sky-2  <text>
223. sand-beach-2 <text>
224. sand-writing-2  <text>
225. sand-engraved-2 <text>
226. summery-sand-2  <text>
227. bithday5     <text>
228. 3D-glue-2    <text>
229. 3D-space-2   <text>
230. metal-dark-2 
231. tiktok-stayle-2
232. a-stone-2
233. glalxy-style-2
234. 1917style5
235. 80s-retro
236. 3D-Minion3
237. pornhub8
238. dexposurw
239. 3D-holo-2
240. avengers8
241. metal-purple-2
242. marvel-metal-2
243. deluxe-selver-2
244. luxury_metal-2
245. glossyblue4
246. glossycarbon5
247. fabric7
248. newyear6
249. newyeagif3
250. color-balloon-2
251. 3D-metal-2
252. avatargold4
253. 3D_metalsilver-2
254. 3D_rosegold-2
255. 3D_metalgold-2
256. 3D_metalgalax<-2
257. 3D-Christmas-2
258. blood_text-2
259. halloweenfire7
260. metaldarkgold7
261. wolf_logo-6
262. lion_logo-7
263. wolf_logo_galaxy-2
264. ninja7
265. joker7
266. wicker7
267. natural_leaves-2
268. sparkle7
269. skeleton7
270. red_balloon-2
271. purple_balloon-2
272. pink_balloon-2
273. green_balloon-2
274. cyan_balloon-2
275. gold_balloon-2
276. steel7
277. ultragloss4
279. denim4
280. decor_green-2
281. peridot_stone-2
282. rock5
283. lava8
284. yellow_glass-2
285. purple_glass-2
286. orange_glass-2
287. green_glass-2
288. cyan_glass-2
289. blue_glass-2
290. red_glass-2
291. shinypurple_glass-2
292. captain-america-2
293. r2-d2_2
294. rainbow_eq-2
295. toxic7
296. sparklepink_jewelery-2
297. sparkleblue_jewelery-2
298. sparklegreen_jewelery-2
299. sparklepurple_jewelery-2
300. sparklegold_jewelry-2
301. sparklered_jewelery-2
302. sparklecyan_jewelery-2
303. purple_glass-2
304. decorative-glass-2
305. chocolatw_cake-2
306. strawberry
307. koi_fish-2
308. bread6
309. matrix_style-2
310. horror_blood-2
311. neonlight6
312. thunder6
313. 3d_box-2
314. neon6
315. road_warning-2
316. 3d_steel-2
317. bokeh6
318. green_neon-2
319. free_advanced_glow-2
320. break_wall-2
321. christmax_gift-2
322. honey6
323. plastic_bag_drug-2
324. horror_gift-2
325. marble_slabs-2
326. marble6
327. ice_cold-2
328. fruit_juice-2
329. rusty_metal-2
330. abstra_gold-2
331. biscuit7
332. bagel6
333. wood7
334. sci--fi_2
336. purple_gem-2
337. shiny_metal-2
338. yellow_jewelery-2
339. silver_jewelery-2
340. red_jewelery-2
341. purple_jewelery-2
342. orange_jewelery-2
343. green_jewelery-2
344. cyan_jewelery-2
345. blue_jewelery-2
346. hot_metal-3
347. hexa_golden-3
348. blue_glitter-2
349. purple_glitter-2
350. pink_glitter-2
351. green_glitter-2
352. silver_glitter-2
353. gold_glitter-2
354. bronze_glitter-2
355. eroded_metal-2
356. carbon9
357. pink_candy-2
358. blue_metal-2
359. blue_gem-2
360. black_metal-2
361. 3d_glowing_metal-2
362. 3d_chrome-2
363. marvel-01

『  *${global.sitzung}*  』


 Powered by: *MkM Inc.*
 
 🔰 Um einen dieser Befehle zu verwenden, geben Sie ein
 " *${prefix}<Befehlsname>* ".
 🔰 Geben Sie " *${prefix}help* " ein, um die vollständige Befehlsliste zu erhalten.`)
		
break

case 'oh': case 'omenu': case 'ownermenu': case 'omu':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
if (!isCreator) return replay(mess.botowner)
reply(` Hi ${pushname} ,
Du bist im Ownermenu gelandet.

All Rights Reserved by *MkM Bot Inc.*

Ich bin *Miku Nakano*, ein von *MkM Inc.* entwickelter Bot.

Ich befinde mich derzeit in der Version 4, Edition 1.

Es können daher einige Fehler auftreten, bitte kontaktieren, kontaktiert
dann die Owner, den Owner oder schreibt eine Nachricht in die Supportgruppe.
*Vielen Dank*

🔰 Mein Präfix ist:  ${prefix}

Hier ist die Liste der Owner Befehle:

*━━━〈  🎀 Owner 🎀  〉━━━*


 self , public
 ban , bangroup
 verlasse , join
 block , unblock
 broadcast(...)
 bctext2 , bc2
 
 _ban_:
 ban add (hinzufügen)
 ban del (entfernen)
 
 botowner
 botowners
 ownerlist
 listowner
 
 allgrouplinks
 allgrplinks
 allgrpl , agl
 
 gruppenchats
 
 *━━━〈  Inhaber  〉━━━*
 
 _Websites_:
 Gweb , Gwebsite
 Bweb , Bwebsite
 oweb , owebsite 
 GWS , BWS
 ownerwebsite
 _Teamliste_:
 team , teamlist
 listt , tlist
 supporter/in
 tsup , supt
 supteam , supportteam
 listsup , suplist
 developer/in , devs
 tdev ,  devt
 devteam , listdev
 developerteam , devlist
 
 
 _Extras_:
 script , skript
 sc , sk
 groups , pmuser
 gruppenchats
 listgc , listpc
 pruser , pmuser
 pmchats , chats
 
 *━━━〈  👥️Gruppen👥️  〉━━━*
 
 _Botgruppe_:
 botsgruppe , botsgrp
 
 _Supportanfragengruppe_:
 suprqgrp , suprqgruppe
 supportanfragegruppe
 supportanfragegruppe
 
 _Befehle - Miku_:
 commandgrp , cmgrp
 commandsgrp , mikucgrp
 
 _Ownerchatgruppe_:
 ochatgrp , ownerchatgrp
 ownerchatgruppe
 
 _Ideegruppe_:
 ideengrp , ideengruppe
 ideagrp
 
 _Teamgruppe_:
 teamgruppe , teamgrp
 
 _Miku on top_:
 mikuontop , mikuot
 
 _Testgruppen_:
 botbetatest
 betatest , bbt
 test2grp , bottest2grp
 
 _Supportgruppe_:
 supgrp , supportgruppe
 
 _Werbegruppe_:
 werbegruppe , werbegrp
 
 _NSFW-Gruppe_:
 nsfwgruppe , nsfwgrp
 
 _Chatgruppe_:
 chatgruppe , chagrp
 
 _Dieses Menu ist erst seit 
 MkM-Miku Version 4 verfügbar_
 
 『  *${global.sitzung}*  』

 
 Powered by: *MkM Inc.*
 
 🔰 Um einen dieser Befehle zu verwenden, geben Sie ein
 " *${prefix}<Befehlsname>* ".
 🔰 Geben Sie " *${prefix}help* " ein, um die vollständige Befehlsliste zu erhalten.`)
		
break

case '':
    if(isCmd){
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)

      mikupic ='https://wallpapercave.com/wp/wp6299451.jpg'
    
        
 const needhelpmenu = `Brauchst du Hilfe, ${pushname} Senpai? Geben Sie *${prefix}help* ein wenn sie meine befehlsliste sehen wollen .`
     
         let butRun = [
                {buttonId: `${prefix}help`, buttonText: {displayText: 'Help'}, type: 1}
                ]
                let buttonMessage = {
                    video:fs.readFileSync('./Assets/pic7.jpg'),gifPlayback:true,
                    caption: needhelpmenu,
                    footer: `${global.BotName}`,
                    buttons: butRun,
                    headerType: 4
                }
            Miku.sendMessage(m.chat,buttonMessage,{quoted:m})
                }
break



case 'miku':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)

const txt = `Liebst du Miku? Dann sind wir gleich.`
const mikuarray= [
            "https://c.tenor.com/SOeIW-QVZvoAAAPo/scared-the-quintessential-quintuplets.mp4",
            "https://c.tenor.com/FDe7lTs0xvMAAAPo/miku-nakano-nakano-miku.mp4",
            "https://c.tenor.com/IWKYIP6AMIgAAAPo/miku-nakano-the-quintessential-quintuplets.mp4",
            "https://c.tenor.com/qE3H_Ae_jTQAAAPo/miku-nakano-nakano.mp4",
            "https://c.tenor.com/9ijVngbm_ZMAAAPo/itsuki-nakano-the-quintessential-quintuplets.mp4",
            "https://c.tenor.com/Fz9xGVR_FHAAAAPo/miku-nakano-nakano-miku.mp4",
            "https://c.tenor.com/ALV6SZoJZb8AAAPo/gotoubun-corada.mp4",
            "https://c.tenor.com/QHefpWiqvN4AAAPo/blush-anime.mp4",
            "https://c.tenor.com/NJVFjOYEcsIAAAPo/miku-gotoubun.mp4",
            "https://c.tenor.com/DA88NW5x_0wAAAPo/miku-nakano-stare.mp4",
            "https://c.tenor.com/zNTH_-ks3GEAAAPo/miku-nakano.mp4",
            "https://c.tenor.com/V9XEKQYRwrEAAAPo/miku-nakano-the-quintessential-quintuplets.mp4",
            "https://c.tenor.com/GDH4WFhELpAAAAPo/anime-pout.mp4",
            "https://c.tenor.com/ME0cvLQiW0kAAAPo/nakano-miku-go-toubun-no-hanayome.mp4",
            "https://c.tenor.com/d5pE_0GJUf0AAAPo/miku-nakano.mp4",
            "https://c.tenor.com/zNTH_-ks3GEAAAPo/miku-nakano.mp4",
            "https://c.tenor.com/pCgBkgDBbnIAAAPo/nakano-miku-go-toubun-no-hanayome.mp4",
            "https://c.tenor.com/6GTU3JEtpKoAAAPo/miku-nakano-the-quintessential-quintuplets.mp4",
            "https://c.tenor.com/XNbmenhVucMAAAPo/5toubun-no-hanayome-gotoubun-no-hanayome.mp4",
            "https://c.tenor.com/lyMqrhEK4scAAAPo/%EC%98%A4%EB%93%B1%EB%B6%84-5%EB%93%B1%EB%B6%84.mp4",
            "https://c.tenor.com/vQ9TpmdjfWAAAAPo/cuteness-overload.mp4",
            "https://c.tenor.com/PHngM6-NJVwAAAPo/miku-quintessential.mp4",
            "https://c.tenor.com/yniTgeiOo4gAAAPo/miku-nakano.mp4",
            "https://c.tenor.com/AULffc4ZKFIAAAPo/miku-god-miku.mp4",
            "https://c.tenor.com/Y8Y1GbmQSOIAAAPo/miku-nakano-quintessential-quintuplets.mp4",
            "https://c.tenor.com/m0EjrelpOfkAAAPo/miku-nakano-nakano-miku.mp4",
            "https://c.tenor.com/x6RTarQTMzoAAAPo/miku-nakano.mp4",
            "https://c.tenor.com/hUzZGMltInkAAAPo/gotoubun-corada.mp4",
            "https://c.tenor.com/9-7azOBpr84AAAPo/miku-nakano-and-i-love-you.mp4",
            "https://c.tenor.com/Ed5IC_yxZkoAAAPo/miku-nakano-gotoubun-no-hanayome.mp4",
            "https://c.tenor.com/hDKieuZGiU0AAAPo/miku-nakano.mp4",
            "https://c.tenor.com/WD8L3QLO024AAAPo/whaatt-the-quintessential-quintuplets.mp4"
            
            ]
        
            const mikuselection = mikuarray[Math.floor(Math.random()*mikuarray.length)]
        
            Miku.sendMessage(from,{video:{url:mikuselection},gifPlayback:true,caption:txt},{quoted:m})
		
		
 case "sayger":  case "sayde": {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)

    if (!args[0]) return reply("Please give me a text so that i can speak it!")
      
      let texttosay = text
        ? text
        : m.quoted && m.quoted.text
        ? m.quoted.text
        : m.text;
      const SpeakEngine = require("google-tts-api"); 
      const texttospeechurl = SpeakEngine.getAudioUrl(texttosay, {lang: "de", slow: false, host: "https://translate.google.com",});
      Miku.sendMessage(m.chat,{audio: {url: texttospeechurl,},mimetype: "audio/mpeg",fileName: `MikuSpeechEngine.mp3`,},{quoted: m,});
    }
    break
		
		
 case "sayeng":  case "sayen": {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)

    if (!args[0]) return reply("Please give me a text so that i can speak it!")
      
      let texttosay = text
        ? text
        : m.quoted && m.quoted.text
        ? m.quoted.text
        : m.text;
      const SpeakEngine = require("google-tts-api"); 
      const texttospeechurl = SpeakEngine.getAudioUrl(texttosay, {lang: "en", slow: false, host: "https://translate.google.com",});
      Miku.sendMessage(m.chat,{audio: {url: texttospeechurl,},mimetype: "audio/mpeg",fileName: `MikuSpeechEngine.mp3`,},{quoted: m,});
    }
    break




 case "tts":  case "texttospeech":  case "say":  case "speak": case "sag": {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)

    if (!args[0]) return reply("Please give me a text so that i can speak it!")
      
      let texttosay = text
        ? text
        : m.quoted && m.quoted.text
        ? m.quoted.text
        : m.text;
      const SpeakEngine = require("google-tts-api"); 
      const texttospeechurl = SpeakEngine.getAudioUrl(texttosay, {lang: "de", slow: false, host: "https://translate.google.com",});
      Miku.sendMessage(m.chat,{audio: {url: texttospeechurl,},mimetype: "audio/mpeg",fileName: `MikuSpeechEngine.mp3`,},{quoted: m,});
    }
    break;


		 case 'wetter':
        if (isBan) return reply(mess.banned)
        if (!args[0]) return reply("Enter your location to search weather.")
         myweather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args.join(" ")}&units=metric&appid=e409825a497a0c894d2dd975542234b0&language=tr`)

        const weathertext = `           🌤 *Wetterbericht* 🌤  \n\n🔎 *Standort suchen:* ${myweather.data.name}\n*💮 Land:* ${myweather.data.sys.country}\n🌈 *Wetter:* ${myweather.data.weather[0].description}\n🌡️ *Temperatur:* ${myweather.data.main.temp}°C\n❄️ *Mindest Temperatur:* ${myweather.data.main.temp_min}°C\n📛 *Hochste Temperatur:* ${myweather.data.main.temp_max}°C\n💦 *Humidity:* ${myweather.data.main.humidity}%\n🎐 *Wind:* ${myweather.data.wind.speed} km/h\n`
        Miku.sendMessage(from, { video: { url: 'https://media.tenor.com/bC57J4v11UcAAAPo/weather-sunny.mp4' }, gifPlayback: true, caption: weathertext }, { quoted: m })

        break



default:

    if(isCmd){
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)
        reply (`Kein solcher Befehl programmiert *${pushname}* senpai! mach *${prefix}help* um meine vollständige Befehlsliste zu erhalten!`)

    }	 			


if (budy.startsWith('=>')) {
if (!isCreator) return reply(mess.botowner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
Miku.sendMessage(from, {image:ErrorPic, caption:String(e)}, {quoted:m})
}
}
if (budy.startsWith('>')) {
if (!isCreator) return reply(mess.botowner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await Miku.sendMessage(from, {image:ErrorPic, caption:String(err)}, {quoted:m})
}
}


                
if (budy.startsWith('$')) {
if (!isCreator) return replay(mess.botowner)
exec(budy.slice(2), (err, stdout) => {
if(err) return Miku.sendMessage(from, {image:ErrorPic, caption:String(err)}, {quoted:m})
if (stdout) return replay(stdout)
})
}


if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
Miku.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}
}catch (err) {
Miku.sendMessage(`${ownertag}@s.whatsapp.net`, util.format(err), {quoted:m})
console.log(err)
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
