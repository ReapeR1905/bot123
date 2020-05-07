const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  const yetkinyok = new Discord.RichEmbed()
  .setColor("#c3c3c3")
  .setDescription(`<a:anlasilmadi:705508503678091406> **Bu Komutu Kullanabilmek İçin** **\`Sunucuyu Yönet\`** **İznine Sahip Olmalısın.**`)
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(yetkinyok)
  
  let capslock = await db.fetch(`capslock_${message.guild.id}`)
  if (capslock) {
    db.delete(`capslock_${message.guild.id}`)
const acik = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`<a:anlasilmadi:705508503678091406> **Büyük Harf Engelleme Sistemi** **\`Devre Dışı\`** **Bırakıldı.**`)
    message.channel.send(acik)
  }
 
  if (!capslock) {
    db.set(`capslock_${message.guild.id}`, 'acik')
const kapali = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`<a:anlasildi:705508473290358835> **Büyük Harf Engelleme Sistemi** **\`Aktif\`** **Edildi.**`)
    message.channel.send(kapali)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['capslock-engel'],
  permLevel: 0
};

exports.help = {
  name: 'capslock-engelleme',
  category: 'Moderasyon komutları!',
  description: 'Büyük Harf Kullanmayı Engeller.',
  usage: 'capslock-engelleme'
};