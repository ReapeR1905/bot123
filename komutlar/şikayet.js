const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
var prefix = ayarlar.prefix;
const id = '705494056855142501'

exports.run = (client, message, args) => {
    const bildiri = args.join(" ")
    if (!args[0]) {
        const embed = new Discord.RichEmbed()
            .setDescription(`:pencil: **Lütfen Yazmak İstediğiniz** **\`Yazıyı\`** **Yazın.**\n\n:gear: **__Doğru Kullanım:__**\n\n**\`${prefix}öneri <yazı>\`**`)
            .setColor("#c3c3c3")
        message.channel.send({embed})
        return
    }
  
    const embed = new Discord.RichEmbed()
        .setDescription(`<a:anlasildi:705508473290358835> **Şikayetiniz Bot Geliştiricisine İletilmiştir.**`)
        .setColor("#c3c3c3")
    message.channel.send({embed})
    
    message.channel.createInvite({maxAge: 0}).then(async (invite) => {
        const embed = new Discord.RichEmbed()
            .addField(`:rage: Eylem:`, `Şikayet Bildirme`)
            .addField(`:bust_in_silhouette: Kullanıcı:`, message.author.tag)
            .addField(`:id: Kullanıcının ID'si:`, message.author.id)
            .addField(`:label: Sunucunun İsmi:`, message.guild.name)
            .addField(`:id: Sunucunun ID'si:`, message.guild.id)
            .addField(`:link: Sunucunun Davet Linki:`, `[Tıkla](${invite.url})`)
            .addField(`:pencil: Şikayeti:`, `${bildiri}`)
            .setColor("#c3c3c3")
        client.channels.get(id).send({embed})
    })
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['rapor', 'raporla', 'tavsiye', 'tavsiyeet', 'tavsiyet', 'öner', 'öneri', 'bildir'],
    permLevel: 0,
  kategori: "bot"
}

exports.help = {
    name: 'şikayet',
    description: 'Bot geliştiricisine hataları raporlamayı/tavsiye vermeyi/öneri iletmeyi sağlar.',
    usage: 'şikayet [bildiri]'
}