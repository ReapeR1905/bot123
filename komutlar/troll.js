const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(" ");
  const embed = new Discord.RichEmbed()
    .setAuthor("")
    .setColor("#c3c3c3")
    .setDescription(`** ${mesaj} ` + message.author.username + " xdjxdjjxdjd")
    .setImage(`https://media1.giphy.com/media/8oh42nM14t50Q/giphy.gif `);
  return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: false,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "troll",
  description: "troll gif atar.",
  usage: "troll"
};
