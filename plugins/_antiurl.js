
let handler = m => m

let linkRegexhttp = /http?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/i
let linkRegexhttps = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/i
handler.before = function (m, { isAdmin, isBotAdmin, isOwner }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let sender = global.DATABASE.data.chats[m.sender]
  let isLinkhttp = linkRegexhttp.exec(m.text)
  let isLinkhttps = linkRegexhttps.exec(m.text)

  if (chat.antiUrl && isLinkhttp) {
    if (global.opts) {
      if (isAdmin || !isBotAdmin || isOwner){		  
	  }else{
		m.reply('delete link!!\nGroup link detected\nSorry We have to kick you becasue you broke our rules' )
		this.groupRemove(m.chat, [m.sender])
		}return true
	}
  }else if (chat.antiUrl && isLinkhttps) {
    if (global.opts) {
      if (isAdmin || !isBotAdmin){		  
	  }else{
		m.reply('delete!!\nlink detected\nSorry We have to kick you becasue you broke our rules' )
		this.groupRemove(m.chat, [m.sender])
		}return true
	}
  }
  return true
}

module.exports = handler
