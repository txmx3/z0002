const fs = require("fs")
const chalk = require("chalk")

global.available = true
global.autoReadGc = true
global.autoReadAll = false
global.antitags = true


global.Owner = ['493023180366','4917662927731']  // -- Add multiple numbers like  ['918101967835','919357940276','917896587453']
global.OwnerNumber = ['493023180366','4917662927731']  // -- Add multiple numbers like  ['918101967835','919357940276','917896587453']
global.ownertag = ['493023180366','4917662927731'  // -- Add multiple numbers like  ['918101967835','919357940276','917896587453']
global.BotName = "Max Miku-MD_v2.2"
global.packname = "Erstellt für User"
global.author = "MkM Inc."
global.OwnerName = "Max"
global.BotSourceCode = "https://github.com/FantoX001/Miku-MD" // -- Please don't change -- //
global.SupportGroupLink = "https://chat.whatsapp.com/JcBzjRIxM5UHfuJbt0KrWt"  // -- Please don't change -- //
global.sessionName = "session"  // -- Don't change otherwise bot will not work -- //



global.prefa = ['!'] // Prefix ---  change it to anythong you want except '@' //


global.location = "West-Berlin"
global.reactmoji = "❤️"
global.themeemoji = "💖"
global.vidmenu = { url: 'https://c.tenor.com/YGuLegQWubwAAAPo/miku-nakano-gotoubun-no-hanayome.mp4' }
global.websitex = "https://github.com/a"
global.lolhuman = "Max"


global.BotLogo = fs.readFileSync("./Assets/pic1.jpg")
global.Thumb = fs.readFileSync("./Assets/pic9.jpg")
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg")
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg")


global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


global.mess = {
    jobdone: 'Job erledigt...',
    useradmin: 'Tut mir leid, nur *Gruppen-Admins* können diesen Befehl verwenden *Baka*!',
    botadmin: 'Tut mir leid, ich kann diesen Befehl nicht ausführen, ohne ein *Admin* dieser Gruppe zu sein.',
    botowner: 'Nur mein *Eigentümer* kann diesen Befehl verwenden, Baka!',
    grouponly: 'Dieser Befehl gilt nur für *Groups*, Baka!',
    privateonly: 'Dieser Befehl ist nur für *Private Chat*, Baka gedacht!',
    botonly: 'Nur der *Bot selbst* kann diesen Befehl verwenden!',
    waiting: 'Chotto Matte...',
    nolink: 'Bitte gib mir *link*, Baka!',
    error: 'An error occurd!',
    banned: 'Es ist Ihnen *verboten*, Befehle zu verwenden!',
    bangc: 'Diese Gruppe ist von der Verwendung von Befehlen *gesperrt*!',
    nonsfw: 'Sei kein perverser Baka 👉👈! Dies ist keine NSFW-aktivierte Gruppe!'
    
}


global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}


global.APIs = {
	zenz: 'https://zenzapis.xyz',
}
global.APIKeys = {
	'https://zenzapis.xyz': '5d1197db351b',
}


global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
