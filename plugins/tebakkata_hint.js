let handler = async (m, { conn }) => {
    conn.tebakkata = conn.tebakkata ? conn.tebakkata : {}
    let id = m.chat
    if (!(id in conn.tebakkata)) throw false
    let json = conn.tebakkata[id][1]
    let ans = json.result.jawaban.trim()
    let clue = ans.replace(/[AIUEO]/g, '_')
    m.reply('```' + clue + '```')
}
handler.owner = true
module.exports = handler