let { WAMessageProto } = require('@adiwajshing/baileys')
let handler = async (m, { command, usedPrefix, text }) => {
    let M = WAMessageProto.WebMessageInfo
    let which = command.replace(/add/i, '')
    if (!m.quoted) throw 'Reply message!'
    if (!text) throw `Use *${usedPrefix}list${which}* to see the list`
    let msgs = global.db.data.msgs
    if (text in msgs) throw `'${text}' telah terdaftar di list pesan`
    msgs[text] = M.fromObject(await m.getQuotedObj()).toJSON()
    m.reply(`Successfully added message in message list as '${text}'
    
Akses dengan ${usedPrefix}get${which} ${text}`)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'add' + v + ' <text>')
handler.tags = ['database']
handler.command = /^add(vn|msg|video|audio|img|sticker)$/
handler.owner = true
module.exports = handler