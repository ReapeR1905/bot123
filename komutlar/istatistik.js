const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [Gün], H [Saat], m [Dakika], s [Saniye]");
const istatistik = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription("**İSTATİSTİKLER**")
.addField(`${client.emojis.get("705891151466463312")} Geliştirici:`, `!                        ReapeRツ#6564`, true)
.addField(`:satellite: Gecikme:`, `${client.ping}`, true)
.addField(`:busts_in_silhouette: Kullanıcı Sayısı:`, `${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
.addField(`:clipboard: Sunucu Sayısı:`, `${client.guilds.size.toLocaleString()}`, true)
.addField(`:floppy_disk: Bellek Kllanımı:`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
.addField(`:stopwatch: Çalışma Süresi:`, `${duration}`, true)
msg.channel.send(istatistik)
//  msg.channel.sendCode("asciidoc", `= İSTATİSTİKLER =
//• Bellek kullanımı :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
//• Çalışma süresi   :: ${duration}
//• Kullanıcılar     :: ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}
//• Sunucular        :: ${client.guilds.size.toLocaleString()}
//• Kanallar         :: ${client.channels.size.toLocaleString()}
//• Discord.JS sürüm :: v${Discord.version}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot durum', 'i', 'bi', 'istatistikler', 'kullanımlar', 'botdurum', 'bd', 'istatisik', 'stats', 'stat'],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',
  description: 'Botun istatistik gösterir.',
  usage: 'istatistik'
};