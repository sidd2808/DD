let handler = async (m, { conn, text }) => {
  if (!text) throw 'No text'
  m.reply(text, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}
handler.help = ['tag <text>']
handler.tags = ['admins']
handler.owner = true
handler.admin = true
handler.group = true
handler.command = /^tag$/i

module.exports = handler
