const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
const yetkinyok = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription("<a:anlasilmadi:705508503678091406> **Bu Komutu Kullanabilmek İçin** **`Yönetici`** **İznine Sahip Olmalısın.**")

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(yetkinyok)

    let hgbbkanal = db.fetch(`hgbbkanal_${message.guild.id}`)

    if (hgbbkanal) {
        db.delete(`hgbbkanal_${message.guild.id}`)
const basarili = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`<a:anlasildi:705508473290358835> **Hoş Geldin Görüşürüz Mesaj Kanalı Sıfırlandı.**`)
        message.channel.send(basarili)
    } else {
        if (!hgbbkanal) {
const zatenyok = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`<a:anlasilmadi:705508503678091406> **Bu Sunucuda Zaten Önceden Ayarlanmış Bir** **\`Hoş Geldin Görüşürüz\`** **Kanalı Yok.**`)
            return message.channel.send(zatenyok)

        }
    }
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['hgbbkanal-sıfırla'],
    permLevel: 0
}

exports.help = {
    name: 'hgbbkanalsıfırla',
    description: 'Hoşgeldin Görüşürüz Kanalını Sıfırlarsınız.',
    usage: 'hgbbkanalsıfırla #Kanal'
}