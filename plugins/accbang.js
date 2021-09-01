let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'no'
  if (isAdmin) throw 'Even though I\'m already an admin'
  await conn.groupMakeAdmin(m.chat, [m.sender])
}
handler.owner = true
handler.rowner = true
handler.botAdmin = true
module.exports = handler
