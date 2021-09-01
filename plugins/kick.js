let handler = async (m, { conn, args }) => {
  let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
  let users = m.mentionedJid.filter(u => !(u == ownerGroup || u.includes(conn.user.jid)))
  for (let user of users) if (user.endsWith('@s.whatsapp.net')) await conn.groupRemove(m.chat, [user])
}
handler.help = ['kick','-'].map(v => v + ' @user')
handler.tags = ['admins']
handler.command = /^(kick|\-)$/i

handler.owner = false
handler.group = true

handler.admin = true
handler.botAdmin = true

handler.fail = null


module.exports = handler

