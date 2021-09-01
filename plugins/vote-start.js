let handler = async (m, { conn, text, usedPrefix }) => {
    conn.vote = conn.vote ? conn.vote : {}
    let id = m.chat
    if (id in conn.vote) {
        throw `_There are still votes in this chat!_\n\n*${usedPrefix}deletevotes* - to delete votes`
    }
    m.reply(`Vote starts!\n\n*${usedPrefix}upvote* - for yes\n*${usedPrefix}devote* - for no\n*${usedPrefix}checkvote* - to check vote\n*${usedPrefix}deletevote * - to delete votes`)
    conn.vote[id] = [
        text,
        [],
        []
    ]
}
handler.owner = true
module.exports = handler