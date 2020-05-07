const ayarlar = require("../ayarlar.json")

var prefix = ayarlar.prefix;

exports.run = async (client, message, args, prefix) => {
  const moment = require('moment');
        const Discord = require('discord.js');
        const embed1 = new Discord.RichEmbed()
.addField("» Bağlantılar", `:telephone_receiver: [Destek Sunucusu!](https://discord.gg/3SWxCjg)\n:envelope: [Sunucuna Ekle!](https://discordapp.com/oauth2/authorize?client_id=689488666090930180&scope=bot&permissions=2146958847)`)
            .setThumbnail(client.user.avatarURL)
            .setColor('#c3c3c3')
    let convite = args[0]
    if(!args[0]) return message.channel.send(embed1)
    var invite = await client.fetchInvite(args[0]).catch(err => {
       if(err.code === 10006) return message.channel.send(embed1)
    })

    if(!invite) return message.channel.send(embed1)

    let guildIcon = `https://cdn.discordapp.com/icons/${invite.guild.id}/${invite.guild.icon}.jpg`

      const embed = new Discord.RichEmbed()
      .setAuthor(invite.guild.name, guildIcon)
      .setThumbnail(guildIcon)
      .setDescription(`Davet Linki [Tıkla](${invite.url}) `)
      .setColor("#c3c3c3")
      .addField(`ID:`, invite.guild.id)
      .addField(`Üye Sayısı:`, invite.memberCount)
      .addField(`Davet Kanalı:`, '`#' + invite.channel.name + '`' + ` (${invite.channel.id})`)
      .addField(`Davetiye Sahibi:`, '`' + invite.inviter.tag + '`' + ` (${invite.inviter.id})`)
      .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
      .setTimestamp()
      message.channel.send(embed)
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["dbilgi","inviteinfo","davetbilgi"],
  permLevel: 0
};

module.exports.help = {
  name: 'davet',
  description: 'Destek Sunucusunu Ve Davet Linkini Atar.',
  usage: 'davet '
};
//
