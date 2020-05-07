const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')
var prefix = ayarlar.prefix;
exports.run = function(client, message, args) {
const yetkinyok = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription("<a:anlasilmadi:705508503678091406> **Bu Komutu Kullanabilmek İçin** **`Mesajları Yönet`** **İznine Sahip Olmalısın.**")
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(yetkinyok);
const etiketle = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`:broom: **Lütfen Silinecek Mesaj Miktarını Yazın.**\n\n:gear: **__Doğru Kullanım:__**\n\n**\`${prefix}sil <miktar>\`**`)
if(!args[0]) return message.channel.send(etiketle);
  let modlog = message.guild.channels.get(db.fetch(`log_${message.guild.id}`).replace("<#", "").replace(">", ""));
const modlogyok = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`<a:anlasilmadi:705508503678091406> **Lütfen Mod Log Kanalını Ayarlayın.**`)
  if (db.has(`log_${message.guild.id}`) === false) return message.channel.send(modlogyok);        
message.channel.bulkDelete(args[0]).then(() => {
const mutemesaj = new Discord.RichEmbed()
  .setColor("#c3c3c3")
  .setDescription(` **\`${args[0]}\`** **Tane Mesaj Silindi.**`)
  message.channel.send(mutemesaj).then(msg => msg.delete(5000));
    const botunmesajyonet = new Discord.RichEmbed()
    let messagecount = parseInt(args.join(' '));
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
    const sohbetsilindi = new Discord.RichEmbed()
    .setColor('#c3c3c3')
    .addField(':wastebasket: Eylem:', 'Mesaj Silme', true)
    .addField(':briefcase: Mesajı Silen Yetkili: ', `${message.author.username}`, true)
    .addField(':broom: Silinen Mesaj', + `${messagecount}`, true)
    return modlog.send(sohbetsilindi)
    console.log("**Sohbet " + message.member + " tarafından silindi! **").then(msg => msg.delete(5000));

})
}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 0
};

exports.help = {
  name: 'sil',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'sil <silinicek mesaj sayısı>'
};
//