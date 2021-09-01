let fetch = require('node-fetch')

let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.siapakahaku = conn.siapakahaku ? conn.siapakahaku : {}
    let id = m.chat
    if (id in conn.siapakahaku) {
        conn.reply(m.chat, 'There are still unanswered questions in this chat', conn.siapakahaku[id][0])
        throw false
    }
    let res = await fetch(global.API('xteam', '/game/siapakahaku', {}, 'APIKEY'))
    if (res.status !== 200) throw await res.text()
    let json = await res.json()
    if (!json.status) throw json
    let caption = `
Who am I? ${json.result.question}

Timeout *${(timeout / 1000).toFixed(2)} seconds*
Type ${usedPrefix}who for help
Bonus: ${points} XP
`.trim()
    conn.siapakahaku[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.siapakahaku[id]) conn.reply(m.chat, `Time is up!\nThe answer is*${json.result.jawaban}*`, conn.siapakahaku[id][0])
            delete conn.siapakahaku[id]
        }, timeout)
    ]
}
handler.owner = true

module.exports = handler