const Discord = require('discord.js');


exports.run = function(client, message) {
            if(message.channel.type == "dm")  return;
  if(message.channel.type !== "text") return;
    const embed = new Discord.RichEmbed()
        .setColor("#c3c3c3")
        .setTitle(`${message.guild.name}`)
        .setImage(message.guild.iconURL)

    message.channel.send(embed);

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'servericon', 
  description: 'Sunucu Resmini Gösterir.',
  usage: 'servericon'
};
