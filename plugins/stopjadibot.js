let handler  = async (m, { conn }) => {
  await conn.reply(m.chat, 'Goodbye bot :\')', m)
    conn.close()
  
}
handler.help = ['stop']
handler.tags = ['owner']
handler.command = /^(stop)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = true

handler.fail = null

module.exports = handler

