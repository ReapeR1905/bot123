const Discord = require('discord.js');
const fs = require('fs');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
var prefix = ayarlar.prefix;

exports.run = async (receivedMessage, msg, args) => {  
const yetkinyok = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription("<a:anlasilmadi:705508503678091406> **Bu Komutu Kullanabilmek İçin** **`Üyeleri Yasakla`** **İznine Sahip Olmalısın.**")
  if (!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.send(yetkinyok);
  //if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(`Bu komutu kullanabilmek için **Üyeleri Yasakla** iznine sahip olmalısın!`);
  
  let user = msg.mentions.users.first();
  let reason = args.slice(1).join(' ') || 'Sebepsiz'
  //let modLog = JSON.parse(fs.readFileSync("./jsonlar/mLog.json", "utf8"));
const modlogyok = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`<a:anlasilmadi:705508503678091406> **Lütfen Mod Log Kanalını Ayarlayın.**`)
  if (db.has(`log_${msg.guild.id}`) === false) return msg.channel.send(modlogyok);
  let modlog = msg.guild.channels.get(db.fetch(`log_${msg.guild.id}`).replace("<#", "").replace(">", ""));
const etiketle = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`:label: **Lütfen Yasaklamak İstediğiniz Kişiyi Etiketleyin.**\n\n:gear: **__Doğru Kullanım:__**\n\n**\`${prefix}yasakla @kullanıcı <sebep>\`**\n\n**\`${prefix}yasakla @kullanıcı\`**`)
if(!user) return msg.channel.send(etiketle)
const kendini = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`:label: **Lütfen Kendin Dışında Birisini Etiketle.**\n\n:gear: **__Doğru Kullanım:__**\n\n**\`${prefix}yasakla @kullanıcı <sebep>\`**\n\n**\`${prefix}yasakla @kullanıcı\`**`)
  if (user.id === msg.author.id) return msg.channel.send(kendini);
  /*if (user.highestRole.calculatedPosition > message.member.highestRole.calculatedPosition - 1) {
			return message.reply(`Bu kişinin senin rollerinden/rolünden daha yüksek rolleri/rolü var.`);
		}*/
  //if (!message.guild.member(user).bannable) return message.channel.send(`Bu kişiyi sunucudan yasaklayamıyorum çünkü \`benden daha yüksek bir role sahip\` ya da \`bana gerekli yetkileri vermedin\`.`);
  
  db.set(`ban_${user.id}`, {yetkili: msg.author.id, sebep: reason, banzaman: Date.now()})

  const embed = new Discord.RichEmbed()
  .setColor("#c3c3c3")
  .addField(':no_entry_sign: İşlem:', 'Yasaklama', true)
  .addField(':bust_in_silhouette: Yasaklanan Kullanıcı:', `<@${user.id}>`, true)
  .addField(':briefcase: Yasaklayan Yetkili:', `<@${msg.author.id}>`, true)
  .addField(':pencil: Yasaklama Sebebi:', "" + reason + "", false)
  modlog.send(embed);

if (reason) {

 const embed3 = new Discord.RichEmbed()
 .setColor("#c3c3c3")
 .setDescription(`:no_entry_sign: **\`${msg.guild.name}\`** **Adlı Sunucuda** **\`${reason}\`** **Sebebi İle Yasaklandın!**`)
 .setImage('https://media.giphy.com/media/H99r2HtnYs492/giphy.gif')
  msg.guild.members.get(user.id).send(embed3)
}
else {
 const embed3 = new Discord.RichEmbed()
 .setColor("#c3c3c3")
 .setDescription(`:no_entry_sign: **\`${msg.guild.name}\`** **Adlı Sunucuda** **\`Sebepsiz Yere\`** **Yasaklandın!**`)
 .setImage('https://media.giphy.com/media/H99r2HtnYs492/giphy.gif')
  msg.guild.members.get(user.id).send(embed3)
}
  
   //if (!message.guild.member(user).bannable) return message.reply('Yetkilileri yasaklayamam!');
  msg.guild.ban(user, 2);
if (reason) {
const embed2 = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`:no_entry_sign: <@${user.id}> **Adlı Kullanıcı** **\`${reason}\`** **Sebebi İle Yasaklandı.**`)
.setImage('https://media.giphy.com/media/H99r2HtnYs492/giphy.gif')
msg.channel.send(embed2)
}

else {  
  const ban3 = new Discord.RichEmbed()
  .setColor("#c3c3c3")
  .setDescription(`:no_entry_sign: <@${user.id}> **Adlı Kullanıcı Yasaklandı.**`)
  .setImage('https://media.giphy.com/media/H99r2HtnYs492/giphy.gif')
  msg.channel.send(ban3)
}
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ban','yasakla','banla'],
  permLevel: 0,
  kategori: "moderasyon",
};

exports.help = {
  name: 'yasakla',
  description: 'İstediğiniz Kullanıcıyı Sunucudan Yasaklarsınız.',
  usage: 'yasakla @Kullanıcı <sebep> | yasakla @Kullanıcı',
 
};