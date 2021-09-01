const { createHash } = require('crypto')
let handler = async function (m, { args }) {
  if (!args[0]) throw 'Serial Number?'
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw 'Incorrect Serial Number'
  user.registered = false
  m.reply(`Unreg berhasil!`)
}

handler.owner = true

module.exports = handler

