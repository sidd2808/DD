let handler = async (m, { command, text }) => {
  let ter = command[1].toLowerCase()
  let txt = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : text ? text : m.text
  await m.reply(txt.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
}
handler.owner = true
handler.owner = true
module.exports = handler
