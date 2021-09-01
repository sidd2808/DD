const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')
let handler = async (m, { conn, text }) => {
  let [t1, t2] = text.split `|`
  if (!t1) throw 'No Text'
  if (!t2) {
    t2 = t1
    t1 = ''
  }
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `Unknown Mimetype`
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} is not supported`
  let img = await q.download()
  let link = await uploadImage(img).catch(e => uploadFile(img))
  conn.sendFile(m.chat, global.API('https://api.memegen.link', `/images/custom/${encodeURIComponent(t1)}/${encodeURIComponent(t2)}.png`, {
    background: link
  }), 'meme.png', `Here :|`, m)
}
handler.owner = true

module.exports = handler
