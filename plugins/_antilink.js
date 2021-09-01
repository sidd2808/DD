let handler = m => m

let linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
handler.before = function (m, { isAdmin, isBotAdmin, isOwner }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)
  
  
  if (chat.antiLink && isGroupLink) {
    if (isAdmin || !isBotAdmin || isOwner) return true
    m.reply('Group Link detected!\n_We have to kick you_\nFor breaking Group Rules')
    this.groupRemove(m.chat, [m.sender])
  }
  return true
}

module.exports = handler