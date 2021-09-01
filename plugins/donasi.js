let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [081515860089]
│ • Telkomsel [081334177340]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay, OVO, Dana [081515860089]
│ • https://saweria.co/Nurutomo
╰────
`.trim()) // Add yourself if you want

handler.owner = true
module.exports = handler
