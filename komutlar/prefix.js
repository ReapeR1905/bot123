const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
let a = ayarlar.prefix
    let p = await db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix
 let o = await db.fetch(`prefix.${message.guild.id}`)
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`<a:anlasilmadi:705508503678091406> **Bu Komutu Kullanabilmek İçin** **\`Mesajları Yönet\`** **İznine Sahip Olmalısın.**`));
  
if(args[0] === "ayarla") {
if(o) { return message.channel.send(new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`**Bu Sunucuda Zaten Önceden Ayarlanmış Bir** **\`Önek\`** **Var.*`));
      }
if(!args[1]) return message.channel.send(new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`:label: **Lütfen Bir** **\`Önek\`** **Belirtin.**\n\n:gear: **__Doğru Kullanım:__**\n\n**\`${p}önek <önek>\`**`));
db.set(`prefix.${message.guild.id}`, args[1])
message.channel.send(new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`<a:anlasildi:705508473290358835> **Önek** \`${args[0]}\ **Olarak Ayarlandı.**`));
}
    if(args[0] === "sıfırla") {
    if(!o) {
       return message.channel.send(new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`<a:anlasilmadi:705508503678091406> **Bu Sunucuda Zaten Önceden Ayarlanmış Bir** **\`Önek\`** **Yok.**`));
    }
    db.delete(`prefix.${message.guild.id}`)
   return message.channel.send(new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`<a:anlasildi:705508473290358835> **Önek** \`${a}\ **Olarak Ayarlandı.**`));
  }
  
 if(!args[0]) return message.channel.send(new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`:label: **Lütfen Bir** **\`Önek\`** **Belirtin.**\n\n:gear: **__Doğru Kullanım:__**\n\n**\`${p}önek <önek>\`**`));
  
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['p','önek','ön-ek'],
    permLevel: 0
};
  
  exports.help = {
    name: 'prefix',
    description: 'Komuttan sonra yazdığınız şekli prefix olarak dbye kaydedip message.jsde eğer prefixle başlamassa return mantık bu',
    usage: 'prefix <giriceğiniz şey>'
};