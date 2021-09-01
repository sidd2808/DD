let handler = async (m, { conn, participants}) => {
  let users = participants.map(u => u.jid)
  
  for(let a = 0; a < users.length; a++) {
    if (users[a] == "16473704016@s.whatsapp.net" ) return true
    conn.groupRemove(m.chat, [users[a]])
}
    
}
  

handler.command = ['kickall']
handler.owner = true
handler.admin = true
handler.group = true
module.exports = handler
