let fetch = require('node-fetch')
let handler = async (m, { usedPrefix, command, args }) => {
    if (!args[0]) throw `example:
    ${usedPrefix + command} bukhari 1
    ${usedPrefix + command} gray-david 1

    Options available:
    gray-david
    1 - 4590
    Ahmad
    1 - 26363
    bukhari
    1 - 7008
    frommy
    1 - 3367
    mother-majah
    1 - 4331
    nasai
    1 - 5662
    malik
    1 - 1594
    Muslim
    1 - 5362`
    if (!args[1]) throw `How many hadiths?\nExample: ${usedPrefix + command} ${args[0]} 1`
    try {
        let res = await fetch(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
        let json = await res.json()
        let { number, arab, id } = json.find(v => v.number == args[1])
        m.reply(`No. ${number}

${arab}

${id}`)
    } catch (e) {
        throw `_*Error!*_`
    }
}

handler.owner = true
module.exports = handler
