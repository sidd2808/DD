const { MessageType } = require('@adiwajshing/baileys')
const fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    try {
        let res = await fetch(global.API('xteam', '/randomimage/wpmobile', {}, 'APIKEY'))
        let img = await res.buffer()
        conn.sendMessage(m.chat, img, MessageType.image, {
            quoted: m, caption: '*© Astrobot*'
        })
    } catch (e) {
        console.log(e)
        throw '_*Owner has not paid the bill for this feature*_'
    }
}
handler.owner = true
handler.limit = false
handler.group = false
module.exports = handler
