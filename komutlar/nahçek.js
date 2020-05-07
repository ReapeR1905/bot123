const Discord = require('discord.js');
const ayarlar = ('../ayarlar.json')
var prefix = ayarlar.prefix;

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
const etiketle = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`<a:anlasildi:705508473290358835> **Lütfen El Haraketi Çekmek İstediğiniz Kişiyi Etiketleyin.**\n\n:gear: **__Doğru Kullanım:__**\n\n**\`${prefix}nahçek @Kullanıcı \`**`)
	if (mesaj.length < 1) return message.reply(etiketle);
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor("#36393F")
    .setDescription(`** ${mesaj} ` + message.author.username + ' Sana El Hareketi Çekti!**')
	.setImage(`https://media.discordapp.net/attachments/564174551299391489/600608844984614912/nahcek.gif`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'nahçek',
  description: 'İstediğiniz Kişiye Çekiç Atarsınız.',
  usage: 'nahçek'
};