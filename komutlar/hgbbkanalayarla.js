const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
const yetkinyok = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription("<a:anlasilmadi:705508503678091406> **Bu Komutu Kullanabilmek İçin** **`Yönetici`** **İznine Sahip Olmalısın.**")

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(yetkinyok)

    let hgbbkanal = db.fetch(`hgbbkanal_${message.guild.id}`)

    if (!hgbbkanal) {
        let kanal = message.mentions.channels.first();
const kanalyok = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`:label: **Lütfen Bir** **\`Kanal\`** **Belirtin.**\n\n:gear: **__Doğru Kullanım:__**\n\n**\`${prefix}hgbbkanalayarla #Kanal\`**`)
        if (!kanal) return message.channel.send(kanalyok)
        db.set(`hgbbkanal_${message.guild.id}`, kanal.id)
const basarili = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`<a:anlasildi:705508473290358835> **Hoş Geldin Görüşürüz Mesaj Kanalı** \`${kanal}\ **Olarak Ayarlandı.**`)
        message.channel.send(basarili)

    } else {
        if (hgbbkanal) {

const zatenvar = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`**Bu Sunucuda Zaten Önceden Ayarlanmış Bir** **\`Hoş Geldin Görüşürüz\`** **Kanalı Var.**`)

            return message.channel.send(zatenvar)

        }
    }
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['hgbbkanal-ayarla'],
    permLevel: 0
}

exports.help = {
    name: 'hgbbkanalayarla',
    description: 'Hoşgeldin Görüşürüz Kanalını Ayarlarsınız',
    usage: 'hgbbkanalayarla #Kanal'
}