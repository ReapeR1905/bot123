const Discord = require('discord.js');
const fs = require('fs');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

exports.run = (client, message, args) => {

const yetkinyok = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription("<a:anlasilmadi:705508503678091406> **Bu Komutu Kullanabilmek İçin** **`Mesajları Yönet`** **İznine Sahip Olmalısın.**")
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(yetkinyok);
  
  let user = message.mentions.users.first();
  const etiketle = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`:label: **Lütfen Uyarmak İstediğiniz Kişiyi Etiketleyin.**\n\n:gear: **__Doğru Kullanım:__**\n\n**\`${prefix}uyarı-kaldır @kullanıcı <sebep>\`**\n\n**\`${prefix}uyarı-kaldır @kullanıcı\`**`)
  if (message.mentions.users.size < 1) return message.channel.send(etiketle);
  
const zatenyok = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`<a:anlasilmadi:705508503678091406> **Bu Sunucuda Zaten ** **\`Uyarısı\`** **Yok.**`)
  if (db.has(`uyarılar_${user.id}`) === false) return message.channel.send(zatenyok)
  
  db.delete(`uyarılar_${user.id}`)
const basarili = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`<a:anlasildi:705508473290358835> <@${user.id}> **Adlı Kullanıcının Tüm Uyarıları Kaldırıldı.**`)
  message.channel.send({basarili})
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["warnd-delete", "uyarı-sil"],
  permLevel: 1,
    kategori: "moderasyon"
};

exports.help = {
  name: 'uyarı-kaldır',
  category: 'moderasyon',
  description: 'İstediğiniz kişinin uyarılarını kaldırır.',
  usage: 'uyarı-kaldır <@kullanıcı>'
};