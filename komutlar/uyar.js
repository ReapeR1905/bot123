const Discord = require('discord.js');
const fs = require('fs');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {
const yetkinyok = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription("<a:anlasilmadi:705508503678091406> **Bu Komutu Kullanabilmek İçin** **`Mesajları Yönet`** **İznine Sahip Olmalısın.**")
if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(yetkinyok);
  
  const db = require('quick.db');
  

  
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ') || 'Sebepsiz'
const modlogyok = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`<a:anlasilmadi:705508503678091406> **Lütfen Mod Log Kanalını Ayarlayın.**`)
  if (db.has(`log_${message.guild.id}`) === false) return message.channel.send(modlogyok);
  let modlog = message.guild.channels.get(db.fetch(`log_${message.guild.id}`).replace("<#", "").replace(">", ""));
  const etiketle = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`:label: **Lütfen Uyarmak İstediğiniz Kişiyi Etiketleyin.**\n\n:gear: **__Doğru Kullanım:__**\n\n**\`${prefix}uyar @kullanıcı <sebep>\`**\n\n**\`${prefix}uyar @kullanıcı\`**`)
  if (message.mentions.users.size < 1) return message.channel.send(etiketle);
  const kendini = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`<a:anlasilmadi:705508503678091406> **Kendini Uyaramazsın.**\n\n:gear: **__Doğru Kullanım:__**\n\n**\`${prefix}uyar @kullanıcı <sebep>\`**\n\n**\`${prefix}uyar @kullanıcı\`**`)
  if (user.id === message.author.id) return message.channel.send(kendini);
  
  //if (!message.guild.member(user).roles.has(muteRole)) return message.reply('Bu kişi zaten susturulmuş!');
  
  const embed = new Discord.RichEmbed()
  .setColor("#c3c3c3")
  .addField(':warning: Yapılan İşlem:', 'Uyarma')
  .addField(':bust_in_silhouette: Uyarılan Kullanıcı:', `<@${user.id}>`)
  .addField(':briefcase: Uyaran Yetkili:', `<@${message.author.id}>`)
  .addField(':pencil: Uyarı Sebebi:', "" + reason + "")
  modlog.send(embed);

if (reason) {
  const yeni = new Discord.RichEmbed()
  .setColor("#c3c3c3")
  .setDescription(`**${message.guild.name}** Adlı Sunucuda **\`${reason}\`** **Sebebi İle Uyarıldın!** \n**Kuralları Ciğnemeye Devam Eder İsen Susturulabilir, Atılabilir Veya Yasaklanabilirsin!**`)
  message.guild.members.get(user.id).send(yeni)
} else {
  const yeni = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(`**${message.guild.name}** Adlı Sunucuda **\`Sebepsiz yere\`** **Uyarıldın!** \n**Kuralları Ciğnemeye Devam Eder İsen Susturulabilir, Atılabilir Veya Yasaklanabilirsin!**`)
  message.guild.members.get(user.id).send(yeni)
}

if (reason) {
  const embed3 = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(`:warning: <@${user.id}> **Adlı Kullanıcı** **\`${reason}\`** **Sebebi İle Başarıyla Uyarıldı!** `)
  message.channel.send(embed3)
} else {
  const embed3 = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(`:warning: <@${user.id}> **Adlı Kullanıcı** **\`Sebepsiz Yere\`** **Başarıyla Uyarıldı!** `)
}

  db.add(`uyarılar_${user.id}`, 1)
  const uyarılar = await db.fetch(`uyarılar_${user.id}`)

  if(uyarılar > 2){
    message.guild.members.get(user.id).kick();
  }if (uyarılar > 4) {
    user.ban();
  };
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["warn", "uyarı-ver"],
  permLevel: 1,
    kategori: "moderasyon"
};

exports.help = {
  name: 'uyar',
  category: 'moderasyon',
  description: 'İstediğiniz kişiyi uyarır.',
  usage: 'uyar <@kişi-etiket> <sebep>'
};