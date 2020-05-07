const Discord = require('discord.js');
const oneLine = require('common-tags').oneLine;
const ascii = require('figlet');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

exports.run = function(client, message, args) {

  const db = require('quick.db');
  
  
  var yazi = args.slice(0).join(' ');
const etiketle = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`:pencil: **Lütfen Yazmak İstediğiniz** **\`Yazıyı\`** **Yazın.**\n\n:gear: **__Doğru Kullanım:__**\n\n**\`${prefix}dans <yazı>\`**`)
if(!yazi) return message.channel.send(etiketle)
const az = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`:pencil: **Lütfen En Az** \`1 Harf\`** Uzunluğunda Yazı Yazınız.**`)
  if (yazi.length < 1) return message.channel.send()
const cok = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`:pencil: **Lütfen En Çok** \`8 Harf\`** Uzunluğunda Yazı Yazınız.**`)
  if (yazi.length > 8) return message.channel.send(cok)
  
   ascii(yazi, {
        font: 'Dancing Font',
        horizontalLayout: 'fitted',
        verticalLayout: 'fitted'
      },
      function(err, data) {
        if (err) {
          message.reply(`HATA ${err}`)
          console.error(err)
        }
     
     message.channel.send('```css\n' + data + '\n```');

     
      })
  
};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ["dans-ascii"],
  permLevel: 0,
    kategori: "eğlence",
};

exports.help = {
  name: 'dans',
  description: 'Yazdığınız Cümleyi Dans(Ascii) Şekilde Gösterir.',
  usage: 'dans <yazı>',

}; 