const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json')
var prefix = ayarlar.prefix;
exports.run = async (bot, message, args) => {
const izinyok = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription("<a:olmaz:705508451916447804> Bu Komutu Yalnızca Botun Sahibi Kullanabilir!")
if (message.author.id != "389074834648334336") return message.channel.send(izinyok);
 
  let nesne = args[0]
const ID = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`:pencil: **Lütfen İstediğiniz Kullanıcının** **\`ID'sini\`** **Girin.**\n\n:gear: **__Doğru Kullanım:__**\n\n**\`${prefix}goldçıkar <ID>\`**`)
  if (!nesne) return message.channel.send(ID)
  
  db.delete(`gold_${nesne}`)
  const golddegil = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`<a:anlasilmadi:705508503678091406>**\`${nesne}\`** **ID'li Kullanıcı Artık Premium Üye Değil.**`)
  
  message.channel.send(golddegil)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};
exports.help = {
  name: 'goldçıkar',
  description: '[Admin Komutu]',
  usage: 'goldçıkar <ID>'
};