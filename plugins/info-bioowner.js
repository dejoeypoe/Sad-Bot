let handler = async (m, { conn }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*💌 Nama* : Joey
*✉️ Nama RL* : Zoe
*♂️ Gender* : Male
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 5 Dec
*🎨 Umur* : -
*🧮 Status* : Mahasiswa
*🧩 Hobby* : Ngegame, Nonton anime, Ngodeng, Desain, Bikin Art
*💬 Sifat* : 999+
*🗺️ Alamat* : Surakarta, Jawa Tengah, Indonesia
*❤️ Suka* : Hitam, kucing, kamu
*💔 Benci* : autis, anak epep, seleb, so keren

*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : @zoex.yz
*🇫  Facebook* : Mythicaly Myth
*🏮 Chanel Youtube* : Sementara Belom Ada
*🐈 Github:* dejoeypoe

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler
