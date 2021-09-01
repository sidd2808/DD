let handler = async (m, { conn, args, usedPrefix }) => {
  let res = await conn.revokeInvite(m.chat)
  m.reply('Group Link Reset *Successfully!* \n \n _The New Link:_\nhttps://chat.whatsapp.com/' + res.code)
}
handler.help = ['reset']
handler.tags = ['group']
handler.command = /^reset?$/i
handler.group = true

handler.admin = true
handler.botAdmin = true
handler.owner = true
module.exports = handler
