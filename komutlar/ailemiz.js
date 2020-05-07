const Discord = require("discord.js")
exports.run = (bot, message) => {
const izinyok = new Discord.RichEmbed()
.setDescription("<a:anlasilmadi:705508503678091406> **Bu Komutu Yalnızca Botun Sahibi Kullanabilir!**")
if (message.author.id != "389074834648334336") return message.channel.send(izinyok);
  const guildArray = bot.guilds.array()
  while (guildArray.length) {
    const embed = new Discord.RichEmbed();
    const guilds = guildArray.splice(0,25);
    for (const guild of guilds) {
      embed.addField(`**${guild.name}** - ÜYE SAYISI : **${guild.memberCount}**`, guild.id);
      embed.setColor('#c3c3c3')
      embed.setTitle('Ailemiz')
      embed.setDescription(`**Ailemde** **\`${bot.guilds.size}\`** **Tane Sunucu Var!** :partying_face:`)
      message.delete();
    }
    message.channel.send({embed: embed});
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ailemiz'],
  permLevel: 0
};

exports.help = {
  name: "ailemiz",
  description: "Botun Ekli Olduğu Sunucuları Görürsünüz.",
  usage: "ailemiz"
};