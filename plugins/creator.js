function handler(m) {
  //This is just an example, don't comment -_-
  // F this.sendContact(m.chat, '919413966915', 'The Cyber Geek', m)
  this.sendContact(m.chat, '919413966915', 'The Cyber Geek', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
