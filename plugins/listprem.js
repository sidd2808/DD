/*
   Please Pack
   But help tidy up :v
   Made: Miaweers
*/

const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
  let prem = global.prems.map(v => v.replace(/[^0-9]/g, '')  + '@s.whatsapp.net').filter(v => v != conn.user.jid)
conn.sendMessage(m.chat, `「 List Premium 」` + `\n` + prem.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, MessageType.extendedText, { contextInfo: { mentionedJid: prem } })
}

handler.owner = true

module.exports = handler
