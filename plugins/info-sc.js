import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*https://github.com/dejoeypoe/Sad-Bot*\nChat Own:wa.me/+62 813-9026-0036\nSilahkan follow github saya dibawah ,Terimakasih`
conn.sendButtonDoc(m.chat, str, wm, 'Thanks','Bilek', ftextt, m)
}
handler.command = handler.help = ['sc']
handler.tags = ['info']

export default handler
