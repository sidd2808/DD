let handler = m => m


handler.before = function (m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
  let sticker = m.mtype;
  if (chat.antiSticker){
  if(sticker == "stickerMessage"){
    if (isAdmin || !isBotAdmin ) return true
      conn.reply(m.chat, 'Sticker detected!\n_We have to kick you_\nFor breaking Group Rules')
      this.groupRemove(m.chat, [m.sender])
  }
}
  return true
}

module.exports = handler

