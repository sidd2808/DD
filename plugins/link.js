let handler = async (m, { conn, args }) => {
  let group = m.chat
  if (/^[0-9]{5,16}-[0-9]+@g\.us$/.test(args[0])) group = args[0]
  if (!/^[0-9]{5,16}-[0-9]+@g\.us$/.test(group)) throw 'Can only be opened in groups'
  let groupMetadata = await conn.groupMetadata(group)
  if (!groupMetadata) throw 'groupMetadata is undefined :\\'
  if (!'participants' in groupMetadata) throw 'participants is not defined :('
  let me = groupMetadata.participants.find(user => user.jid === conn.user.jid)
  if (!me) throw 'I\'m not in that group :('
  if (me.isAdmin !== true) throw 'I\'m not admin 😢'
  m.reply('https://chat.whatsapp.com/' + await conn.groupInviteCode(group))
}
handler.help = ['linkgroup', 'grpl']
handler.tags = ['group']
handler.command = /^linkgroup|grpl?$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler

