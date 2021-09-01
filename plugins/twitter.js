let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm ... where\'s the url?'
  global.API('xteam', '/dl/twitter', {
    url: args[0]
  }, 'APIKEY')
  conn.sendFile(m.chat, undefined, '', '', m)
}
handler.owner = true

module.exports = handler
