const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
    let emojiname = args[0];
    const emoji = (message.guild.emojis.find("name", `${emojiname}`))
const isim = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`:pencil: **Lütfen** **\`Emoji İsmi\`** **Belirtiniz.**\n\n:gear: **__Doğru Kullanım:__**\n\n**\`${prefix}emojibilgi <emojiisimi>\`**`)
    if (!emojiname) return message.channel.send(isim)
    const embed = new Discord.RichEmbed()
    .setColor("#c3c3c3")
    .setThumbnail(`${emoji.url}`)
    .addField(":smiley: **Emojinin İsmi:**", `${emojiname}`)
    .addField(":id: **Emoji ID:**", `${emoji.id}`)
    .addField(":link: **Link:**", `${emoji.url}`)
    message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['emojiinfo'],
    permLevel: 0
}
exports.help = {
    name: 'emojibilgi',
    description: 'İsmini Yazdığınız Emoji Hakkında Bilgi Verir.',
    usage: 'emojibilgi <emojiismi>'
}