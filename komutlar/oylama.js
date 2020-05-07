const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
var prefix = ayarlar.prefix;

 exports.run = (client, message, args) => {
     if(message.channel.type == "dm")  return;
  if(message.channel.type !== "text") return;
   
const yetkinyok = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription("<a:anlasilmadi:705508503678091406> **Bu Komutu Kullanabilmek İçin** **`Mesajları Yönet`** **İznine Sahip Olmalısın.**")
       if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(yetkinyok)

   message.delete();

   let question = args.join(' ');

   let user = message.author.username

   if (!question) return message.channel.sendEmbed(

     new Discord.RichEmbed()
    
     .setColor("#c3c3c3")
     .setDescription(`:pencil: **Lütfen Yazmak İstediğiniz** **\`Yazıyı\`** **Yazın.**\n\n:gear: **__Doğru Kullanım:__**\n\n**\`${prefix}oylama <yazı>\`**`))

     message.channel.sendEmbed(

       new Discord.RichEmbed()

       .setColor("#c3c3c3")

         .addField(`:bar_chart: **Oylama**`, `**${question}**`)).then(function(message) {

         message.react('✅');

         message.react('❌');

       });

     };

     exports.conf = {
       enabled: true,
       guildOnly: false,
       aliases: ['oylama'],

  permLevel: 0,
           kategori: "Yetkili"

};

exports.help = {
  name: 'oylama',
  description: 'Oylama yapmanızı sağlar.',
  usage: 'oylama <oylamaismi>'
};