const free = 500
let handler = async (m) => {
  if (new Date - global.db.data.users[m.sender].lastclaim < 86400000) throw 'You\'ve claimed your daily claim today'
  global.db.data.users[m.sender].exp += free
  m.reply(`+${free} XP`)
  global.db.data.users[m.sender].lastclaim = new Date * 1
}

handler.owner = false


module.exports = handler

