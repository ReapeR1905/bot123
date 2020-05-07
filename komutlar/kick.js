const Discord = require('discord.js');
const fs = require('fs');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {

  const db = require('quick.db');
  

  const yetkinyok = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription("<a:anlasilmadi:705508503678091406> **Bu Komutu Kullanabilmek İçin** **`Üyeleri At`** **İznine Sahip Olmalısın.**")
  if (!message.guild.members.get(client.user.id).hasPermission("KICK_MEMBERS")) return message.channel.send(yetkinyok)
  //if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply(`Bu komutu kullanabilmek için **Üyeleri At** iznine sahip olmalısın!`);
  
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ') || 'Sebepsiz'
  const modlogyok = new Discord.RichEmbed()
  .setColor("#c3c3c3")
  .setDescription("<a:anlasilmadi:705508503678091406> **Lütfen Mod Log Kanalını Ayarlayın.**")
  if (db.has(`log_${message.guild.id}`) === false) return message.channel.send(modlogyok);
  let modlog = message.guild.channels.get(db.fetch(`log_${message.guild.id}`).replace("<#", "").replace(">", ""));
const etiketle = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`:label: **Lütfen Atmak İstediğiniz Kişiyi Etiketleyin.**\n\n:gear: **__Doğru Kullanım:__**\n\n**\`${prefix}at @kullanıcı <sebep>\`**\n\n**\`${prefix}at @kullanıcı\`**`)
  if (message.mentions.users.size < 1) return message.channel.send(etiketle);
const kendini = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`<a:anlasilmadi:705508503678091406> **Kendini Atamazsın.**\n\n:gear: **__Doğru Kullanım:__**\n\n**\`${prefix}at @kullanıcı <sebep>\`**\n\n**\`${prefix}at @kullanıcı\`**`)
  if (user.id === message.author.id) return message.reply(kendini);
  /*if (user.highestRole.calculatedPosition > message.member.highestRole.calculatedPosition - 1) {
			return message.reply(`Bu kişinin senin rollerinden/rolünden daha yüksek rolleri/rolü var.`);
		}*/
  //if (!message.guild.member(user).kickable) return message.channel.send(`Bu kişiyi sunucudan atamıyorum çünkü \`benden daha yüksek bir role sahip\` ya da \`bana gerekli yetkileri vermedin\`.`);
 
  const embed = new Discord.RichEmbed()
  .setColor("#c3c3c3")
  .addField(':no_entry_sign: İşlem:', 'Atma', true)
  .addField(':bust_in_silhouette: Atılan Kullanıcı:', `<@${user.id}>`, true)
  .addField(':briefcase: Atan Yetkili:', `<@${message.author.id}>`, true)
  .addField(':pencil: Atma Sebebi:', "" + reason + "", false)
  modlog.send(embed);
if (reason) {
  const embed3 = new Discord.RichEmbed()
  .setColor("#c3c3c3")
  .setDescription(`:no_entry_sign: **\`${message.guild.name}\`** **Adlı Sunucuda** **\`${reason}\`** **Sebebi İle Atıldın!**\n\n**Kuralları çiğnemeye devam eder isen susturulabilir, uyarılabilir, tekrar atılabilir veya yasaklanabilirsin!**`)
  message.guild.members.get(user.id).send(embed3)
} else {

  const embed4 = new Discord.RichEmbed()
  .setColor("#c3c3c3")
  .setDescription(`:no_entry_sign: **\`${message.guild.name}\`** **Adlı Sunucuda** **\`Sebepsiz Yere\`** **Atıldın!** \n\n**Kuralları çiğnemeye devam eder isen susturulabilir, uyarılabilir, tekrar atılabilir veya yasaklanabilirsin!**`)
  message.guild.members.get(user.id).send(embed4)
}
  
  message.guild.member(user).kick();
if (reason) {
  const embed2 = new Discord.RichEmbed()
  .setColor("#c3c3c3")
  .setDescription(`:no_entry_sign: <@${user.id}> **Adlı Kullanıcı** **\`${reason}\`** **Sebebi İle Atıldı!**`)
  message.channel.send(embed2)
} else {
  const embed2 = new Discord.RichEmbed()
  .setColor("#c3c3c3")
  .setDescription(`:no_entry_sign: <@${user.id}> **Adlı Kullanıcı Sebepsiz Yere Atıldı!**`)
  message.channel.send(embed2)
}
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kick'],
  permLevel: 2,
    kategori: "moderasyon",
 
};

exports.help = {
  name: 'at',
  description: 'İstediğiniz kişiyi sunucudan atar.',
  usage: 'at <@kullanıcı> <sebep>',
 
};