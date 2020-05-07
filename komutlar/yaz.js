const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
var prefix = ayarlar.prefix;

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
const etiketle = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`:pencil: **Lütfen Yazmak İstediğiniz** **\`Yazıyı\`** **Yazın.**\n\n:gear: **__Doğru Kullanım:__**\n\n**\`${prefix}yaz <yazı>\`**`)
if (mesaj.length < 1) return message.channel.send(etiketle);
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['say', 'söyle'],
  permLevel: 0
};

exports.help = {
  name: 'yaz',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};
