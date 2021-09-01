let fetch = require('node-fetch')

let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.caklontong = conn.caklontong ? conn.caklontong : {}
    let id = m.chat
    if (id in conn.caklontong) {
        conn.reply(m.chat, 'There are still unanswered questions in this chat', conn.caklontong[id][0])
        throw false
    }
    let res = await fetch(global.API('zahir', '/api/kuis/caklontong', {}, 'apikey'))
    if (res.status !== 200) throw await res.text()
    let json = await res.json()
    let caption = `
${json.result.soal}

Timeout *${(timeout / 1000).toFixed(2)} seconds*
Type ${usedPrefix}calo for help
Bonus: ${points} XP
`.trim()
    conn.caklontong[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.caklontong[id]) conn.reply(m.chat, `Time is up!\nThe answer is*${json.result.jawaban}*\n${json.result.deskripsi}`, conn.caklontong[id][0])
            delete conn.caklontong[id]
        }, timeout)
    ]
}

handler.owner = true
module.exports = handler