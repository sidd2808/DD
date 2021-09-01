let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let type = (args[0] || '').toLowerCase()
  let isAll = false
  let isUser = false
  switch (type) {
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admins', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break
    case 'detect':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admins', m, conn)
        throw false
      }
      chat.detect = isEnable
      break
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admins', m, conn)
          throw false
        }
      }
      chat.delete = isEnable
      break
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admins', m, conn)
          throw false
        }
      }
      chat.delete = !isEnable
      break
    case 'autodelvn':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admins', m, conn)
          throw false
        }
      }
      chat.autodelvn = isEnable
      break
    case 'document':
      chat.useDocument = isEnable
      break
    case 'public':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admins', m, conn)
          throw false
        }
      }
      chat.antiLink = isEnable
      break
    case 'antiurl':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admins', m, conn)
          throw false
        }
      }
        chat.antiUrl = isEnable
        break
      case 'antisticker':
          if (m.isGroup) {
            if (!(isAdmin || isOwner)) {
              global.dfail('admins', m, conn)
              throw false
            }
          }
          chat.antiSticker = isEnable
          break
        case 'antivulgar':
          if (m.isGroup) {
            if (!(isAdmin || isOwner)) {
              global.dfail('admins', m, conn)
              throw false
            }
          }
            chat.antiVulgar = isEnable
            break
    default:
      if (!/[01]/.test(command)) throw `
List option: welcome | antilink | antiurl | antisticker

Example:
${usedPrefix}enable welcome
${usedPrefix}disable welcome
`.trim()
      throw false
  }
  m.reply(`
*${type}* successfully *${isEnable ? 'Enabled' : 'Disabled'}* ${isAll ? 'for this bot' : isUser ? '' : 'for this chat'}
`.trim())
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i

module.exports = handler