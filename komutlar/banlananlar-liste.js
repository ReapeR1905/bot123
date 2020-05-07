const Discord = require('discord.js')
exports.run = (bot, message, args) =>
{
  let Discord = require('discord.js');
    var userlist = message.guild.fetchBans();
   userlist.then(collection =>
   {
     if(collection.first() == null)
     {
       const embed = new Discord.RichEmbed()
       .setTitle(`Banlanan Kullanıcı Bulunamadı`)
       .setColor("#c3c3c3");
       message.channel.send({embed});
     }
     else
     {
       const embed = new Discord.RichEmbed()
       .setTitle(":no_entry_sign: Sunucudan Yasaklananlar :no_entry_sign:")
       .setColor("#c3c3c3");
       for(userlist of collection)
       {
           var user = userlist[1];
           embed.addField(` **${user.tag}**`, `_________ _____________`);
       }
       message.channel.send({embed});
     }
   });
 }
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["banlılar","banliste"],
  permLevel: 0
};
module.exports.help = {
  name: 'yasaklananlar',
  description: 'Sunucundan Yasaklanan Kullanıcıları Gösterir.',
  usage: 'yasaklananlar'
};
