let { spawn }  = require('child_process');
let handler  = async (m, { conn }) => {
  if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
  if (global.conn.user.jid == conn.user.jid) {
    await m.reply('Resetting the Bot...\nPlease wait about 1 minute')
    await global.db.write()
    process.send('reset')
  } else throw '_eeeeeiiittsssss..._'
}

handler.owner = true


module.exports = handler

