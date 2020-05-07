const Discord = require('discord.js');
   const superagent = require('superagent');
const ayarlar = require('../ayarlar.json')
var prefix = ayarlar.prefix;

    exports.run = async(client, message, args) => {
const sehirgir = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`:pencil: **Lütfen Namaz Vaktini Görmek İstediğin Şehirin İsmini Küçük Harflerle Yaz.**\n\n:gear: **__Doğru Kullanım:__**\n\n**\`${prefix}namazvakti <şehir> \`**`)
    if(!args[0]) return message.channel.send(sehirgir)
    let {body} = await superagent 
    .get(`https://namazapi.glitch.me/namaz?sehir=${args[0]}`);
const hata = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`<a:anlasilmadi:705508503678091406> **Bir Hata Oluştu Lütfen Daha Sonra Tekrar Dene.**`)
    if(!{body}) return message.channel.send(hata)
const sehir = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`<a:anlasilmadi:705508503678091406> **Lütfen Geçerli Bir Şehir Gir.**\n\n:gear: **__Doğru Kullanım:__**\n\n**\`${prefix}namazvakti <şehir> \`**`)
    if(body.hata) return message.channel.send(sehir)
    const embed = new Discord.RichEmbed()
    .setColor('#c3c3c3')
    .setTitle(`:place_of_worship: Belirtilen Şehir İçin Namaz Vakitleri:`)
    .addField(`:clock4: İmsak:`, body.İmsak, true)
    .addField(`:clock6: Sabah:`, body.Güneş, true)
    .addField(`:clock1: Öğle:`, body.Öğle, true)
    .addField(`:clock5: İkindi:`, body.İkindi, true)
    .addField(`:clock8: Akşam:`, body.Akşam, true)
    .addField(`:clock10: Yatsı:`, body.Yatsı, true)
    .setFooter(`Bu Namaz Vakitleri ${body.tarih} Tarihi İçin Listelenmiştir.`)
    message.channel.send(embed)
    }
    exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'namazvakti',
};