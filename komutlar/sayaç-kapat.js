const Discord = require('discord.js')
const fs = require('fs')
const ayarlar = require('../ayarlar.json')
var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
const yetkinyok = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription("<a:anlasilmadi:705508503678091406> **Bu Komutu Kullanabilmek İçin** **`Yönetici`** **İznine Sahip Olmalısın.**")
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(yetkinyok)
    let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
        if(!sayac[message.guild.id]) {
            const embed = new Discord.RichEmbed()
                .setDescription(`<a:anlasilmadi:705508503678091406> **Bu Sunucuda Zaten Önceden Ayarlanmış Bir** **\`Sayaç\`** **Kanalı Yok.`)
                .setColor("#c3c3c3")
                .setTimestamp()
            message.channel.send({embed})
            return
        }
        delete sayac[message.guild.id]
        fs.writeFile("./ayarlar/sayac.json", JSON.stringify(sayac), (err) => {
            console.log(err)
        })
        const embed = new Discord.RichEmbed()
            .setDescription(`<a:anlasildi:705508473290358835> **Sayaç Mesaj Kanalı Sıfırlandı.**`)
            .setColor("#c3c3c3")
            .setTimestamp()
        message.channel.send({embed})
        return
    }

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['sayaçsıfırla'],
  permLevel: 0
};

exports.help = {
  name: 'sayaç-sıfırla', 
  description: 'Sayaçı, sıfırlar!',
  usage: 'sayaç-sıfırla'
};