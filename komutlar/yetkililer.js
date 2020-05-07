const Discord = require("discord.js");

exports.run = async (client, message) => {

  var str = "";
  for (var i = 0; i < message.guild.members.size; i++) {
    if (
      message.guild.members.array()[i].hasPermission("MANAGE_MESSAGES") &&
      message.guild.members.array()[i].presence.status === "dnd" &&
      !message.guild.members.array()[i].user.bot
    ) {
      str += `***Rahatsız Etmeyin*** | ${
        message.guild.members.array()[i].user.tag
      }\n`;
    } else if (
      message.guild.members.array()[i].hasPermission("MANAGE_MESSAGES") &&
      message.guild.members.array()[i].presence.status === "online" &&
      !message.guild.members.array()[i].user.bot
    ) {
      str += `***Çevrimiçi*** | ${
        message.guild.members.array()[i].user.tag
      }\n`;
    } else if (
      message.guild.members.array()[i].hasPermission("MANAGE_MESSAGES") &&
      message.guild.members.array()[i].presence.status === "idle" &&
      !message.guild.members.array()[i].user.bot
    ) {
      str += `***Boşta*** | ${
        message.guild.members.array()[i].user.tag
      }\n`;
    } else if (
      message.guild.members.array()[i].hasPermission("MANAGE_MESSAGES") &&
      message.guild.members.array()[i].presence.status === "offline" &&
      !message.guild.members.array()[i].user.bot
    ) {
      str += `***Çevrimdışı*** | ${
        message.guild.members.array()[i].user.tag
      }\n`;
    }
  }

  var embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${message.guild.name} - Sunucu Yetkilileri`)
    .setDescription(
      str.replace(
        message.guild.owner.user.tag,
        `${message.guild.owner.user.tag} - **[Sunucu Sahibi]**`
      )
    )
    .setThumbnail(message.guild.iconURL)
    .setFooter(
      'NOT: Bu komut sunucudaki "Mesajları Yönet" iznine sahip kullanıcıları listeler.'
    );
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yetkililer",
  description: "yetkililer",
  usage: "yetkililer"
};