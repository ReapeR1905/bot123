const Discord = require('discord.js');
const ms = require('parse-ms');

exports.run = async(client, message, args) => {
  let okul = new Date('2020-06-01:8:00')
    let zaman = ms(okul - Date.now())
const okull = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`:cold_face: **Okulun Açılmasına** **\`${zaman.days}\`** **Gün** **\`${zaman.hours}\`** **Saat** **\`${zaman.minutes}\`** **Dakika Kaldı!** :comet: `)
    message.channel.send(okull)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["okul"],
  permLevel: 0
};

exports.help = {
  name: 'okulsayacı',
  description: 'Okula Kaç Gün Kaldı Gösterir',
usage: "okulsayacı"
};