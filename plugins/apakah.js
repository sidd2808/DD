let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
*Question:* ${m.text}
*Answer:* ${pickRandom(['Yes', 'Probably yes', 'Probably', 'Maybe not', 'No', 'No way'])}
`.trim(), m, m.mentionedJid ? {
  contextInfo: {
    mentionedJid: m.mentionedJid
  }
} : {})
}

handler.owner = true


module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

