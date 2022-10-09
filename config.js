/**
   * Create By Dika Ardnt.
   * Recode By YSS×Hxq Dev
   * Contact Me on wa.me/6282113821188
   * Follow https://github.com/YSS×Hxqdev
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
}

// Other
global.owner = ['60105081734', '447455729469', '601165173404', '601172962289', '01172882179', '01118638092', '601157352008']
global.ownernomer = '60105081734', '447455729469', '601165173404', '601172962289', '01172882179', '01118638092', '601157352008'
global.premium  = ['60105081734', '447455729469', '601165173404', '601172962289', '01172882179', '01118638092', '601157352008']
global.packname = 'Sticker  YSS×Hxq'
global.author = 'YSS×Hxq'
global.sessionName = 'nazedev'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'Done',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: '⚠︎𝙼𝙸𝚂𝚂𝙸𝙽𝙶_𝙿𝙴𝚁𝙼𝙸𝚂𝚂𝙸𝙾𝙽⚠︎',
    premime: 'Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 25
}
global.thumb = fs.readFileSync('./lib/naze.png')
global.vaze = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
