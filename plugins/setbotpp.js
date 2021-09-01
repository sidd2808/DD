/*Please Use But Help Tidy Up :v Made: Viewers
*/

let handler = async (m, { conn, args }) => {
    let bot = conn.user.jid // Bot
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
      let img = await conn.downloadM(q)
      if (!img) throw `*Photo not found*`
     conn.updateProfilePicture (bot, img)
    conn.reply(m.chat, 'The Bot\'s Profile Photo has been changed!', m)
	}
    }
handler.help = ['setbotpp']
handler.tag = ['owner']
handler.command = /^(setbotpp)$/i
handler.owner = true

module.exports = handler
