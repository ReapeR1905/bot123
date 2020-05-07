const Discord = require('discord.js');
const weather = require('weather-js');
const ayarlar = require('../ayarlar.json')
var prefix = ayarlar.prefix;

exports.run = (client, message, args) => {
  weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
      if (err) message.channel.send(err);
      if (result === undefined || result.length === 0) {
          message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`:pencil: **Lütfen Bir** **\`Şehir\`** **İsmi Giriniz.**\n\n:gear: **__Doğru Kullanım:__**\n\n**\`${prefix}havadurumu <şehir>\`**`).setColor('#c3c3c3'));
          return;
      }
      var current = result[0].current;
      var location = result[0].location;
      const embed = new Discord.RichEmbed()
          .setDescription(`**${current.skytext}**`)
          .setThumbnail(current.imageUrl)
          .setColor("#c3c3c3")
          .addField(':timer: Zaman Dilimi:',`UTC${location.timezone}`, true)
          .addField(':thermometer: Derece Türü:',location.degreetype, true)
          .addField(':fire: Sıcaklık:',`${current.temperature} Derece`, true)
          .addField(':white_sun_cloud: Hava:', `${current.feelslike}`, true)
          .addField(':dash: Rüzgar:',current.winddisplay, true)
          .addField(':droplet: Nem:', `${current.humidity}%`, true)
          message.channel.send({embed});
  })
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hd'],
  permLevel: "0"
};

exports.help = {
  name: "havadurumu",
  description: "Girdiğiniz Şehirin Hava Durumunu Gösterir.",
  usage: "havadurumu <şehir>"
};