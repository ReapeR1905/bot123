const Discord = require('discord.js')
const db = require('quick.db')
const fs = require('fs')
const ayarlar = require('../ayarlar.json')
var prefix = ayarlar.prefix;
 
exports.run = async (client, message, args) => {
        if(!args[0]) {
                const embed = new Discord.RichEmbed()
                        .setDescription(`<a:anlasilmadi:705508503678091406> **Lütfen Geçerli Bir Sayı Belirtiniz.**\n\n**__Doğru Kullanım:__**\n\n**\`${prefix}at <sayı> #Kanal\`**`)
                        .setColor("#c3c3c3")
                message.channel.send({embed})
                return
  }
 
        let profil = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
  var mentionedChannel = message.mentions.channels.first();
  const s1 = new Discord.RichEmbed()
  .setDescription('Sayaç kanalı belirtmelisiniz!')
  .setColor("#c3c3c3")
                        .setTimestamp()
  if (!mentionedChannel && args[0] !== "sıfırla") return message.channel.send(s1);
 
 
        if(args[0] === "sıfırla") {
                if(!profil[message.guild.id]) {
                        const embed = new Discord.RichEmbed()
                                .setDescription(`<a:anlasilmadi:705508503678091406> **Bu Sunucuda Zaten Önceden Ayarlanmış Bir** **\`Sayaç\`** **Kanalı Yok.**`)
                                .setColor("#c3c3c3")
                        message.channel.send({embed})
                        return
                }
                delete profil[message.guild.id]
                fs.writeFile("./ayarlar/sayac.json", JSON.stringify(profil), (err) => {
                        console.log(err)
                })
                const embed = new Discord.RichEmbed()
                        .setDescription(`<a:anlasildi:705508473290358835> **Sayaç Mesaj Kanalı Sıfırlandı.**`)
                        .setColor("#c3c3c3")
                message.channel.send({embed})
                return
        }
 
        if(isNaN(args[0])) {
                const embed = new Discord.RichEmbed()
                        .setDescription(`<a:anlasilmadi:705508503678091406> **Lütfen, geçerli bir sayı belirtiniz.**\n\n**__Doğru Kullanım:__**\n\n**\`${prefix}at <sayı> #Kanal\`**`)
                        .setColor("#c3c3c3")
                message.channel.send({embed})
                return
        }
 
        if(args[0] <= message.guild.memberCount) {
                const embed = new Discord.RichEmbed()
                        .setDescription(`<a:anlasilmadi:705508503678091406> **Lütfen,** **\`[${message.guild.memberCount}]\`** **Sayısından Daha Yüksek Bir Değer Belirtiniz.**\n\n**__Doğru Kullanım:__**\n\n**\`${prefix}at <sayı> #Kanal\`**`)
                        .setColor("#c3c3c3")
                message.channel.send({embed})
                return
        }
 
        if(!profil[message.guild.id]){
                profil[message.guild.id] = {
                        sayi: args[0],
      kanal: mentionedChannel.id
                };
        }
       
        profil[message.guild.id].sayi = args[0]
  profil[message.guild.id].kanal = mentionedChannel.id
       
        fs.writeFile("./ayarlar/sayac.json", JSON.stringify(profil), (err) => {
                console.log(err)
        })
 
        const embed = new Discord.RichEmbed()
                .setDescription(`<a:anlasildi:705508473290358835> **Sayaç Mesaj Kanalı** ${mentionedChannel} **Olarak Ayarlandı.**\n**Sayaç Sayısı İse** **\`${args[0]}\`** **Olarak Ayarlandı.**`)//(`Sayaç, başarılı bir şekilde \`${args[0]}\` olarak ayarlandı, sayaç kanalı ise ${mentionedChannel} olarak ayarlandı!`)
                .setColor("#c3c3c3")
        message.channel.send({embed})
}
 
exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ['sayaç-ayarla'],
        permLevel: 2,
        kategori: "moderasyon"
}
 
exports.help = {
        name: 'sayaç-ayarla',
        description: 'Sayaç, ayarlar!',
        usage: 'sayaç-ayarla [sayı/sıfırla] [kanal]'
}