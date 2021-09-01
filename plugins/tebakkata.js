let fetch = require('node-fetch')

let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakkata = conn.tebakkata ? conn.tebakkata : {}
    let id = m.chat
    if (id in conn.tebakkata) {
        conn.reply(m.chat, 'There are still unanswered questions in this chat', conn.tebakkata[id][0])
        throw false
    }
    let res = await fetch(global.API('xteam', '/game/tebakkata', {}, 'APIKEY'))
    if (res.status !== 200) throw await res.text()
    let json = await res.json()
    if (!json.status) throw json
    let caption = `
${json.result.soal}

Timeout *${(timeout / 1000).toFixed(2)} seconds*
Type ${usedPrefix}tap for help
Bonus: ${points} XP
`.trim()
    conn.tebakkata[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakkata[id]) conn.reply(m.chat, `Time is up!\nThe answer is *${json.result.jawaban}*`, conn.tebakkata[id][0])
            delete conn.tebakkata[id]
        }, timeout)
    ]
}
handler.owner = true

module.exports = handler