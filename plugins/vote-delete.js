let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) throw `_*no voting in this group!*_\n\n*${usedPrefix}startivote* - to start voting`
    delete conn.vote[id]
    m.reply(`Done!`)

}
handler.owner = true

module.exports = handler