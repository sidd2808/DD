let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm... where\'s the url?'
  global.API('xteam', '/dl/smule', {
    url: args[0]
  }, 'APIKEY')
  conn.sendFile(m.chat, undefined, '', '', m)
}
handler.owner = true
handler.disabled = true
module.exports = handler
