let handler  = async (m, { conn, command, text }) => {
  let type = command.replace(/^set(menu|help|\?)/, '').toLowerCase()
  if (type == '') {
    if (text) {
      conn.menu = text
      conn.reply(m.chat, 'Menu set successfully\n' + info, m)
    } else {
      conn.menu = {}
      conn.reply(m.chat, 'Menu reset', m)
    }
  } else {
    conn.menu = typeof conn.menu == 'object' ? conn.menu : {}
    if (text) {
      conn.menu[type] = text
      conn.reply(m.chat, 'Menu ' + type + ' successfully set\n' + info, m)
    } else {
      delete conn.menu[type]
      conn.reply(m.chat, 'Menu ' + type + ' reset', m)
    }
  }
}

handler.owner = true


module.exports = handler

let info = `
Universal:
%% (%)
%p (Prefix)
%exp (Current Exp)
$maxexp (Exp To Level Up)
%totalexp (Total Exp)
%xp4levelup (Exp needed to levelup)
%limit (Limit)
%name (Name)
%weton (Today's Weton)
%week (Day)
%date (Date)
%time (Hour)
%uptime (Uptime Bot)
%rtotalreg (Number of registered users in database)
%totalreg (Number of Users in the database)
%npmname
%npmdesc
%version
%github

Header & Footer Menu Section:
%category (Category)

Body Menu Section:
%cmd (Command)
%islimit (If command is limited)
`.trim()
