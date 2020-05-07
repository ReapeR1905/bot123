const Discord = require("discord.js");
const ms = require("ms");
const client = new Discord.Client();
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

exports.run = async (receivedMessage, msg, args) => {
const yetkinyok = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription("<a:anlasilmadi:705508503678091406> **Bu Komutu Kullanabilmek İçin** **`Üyeleri Sustur`** **İznine Sahip Olmalısın.**")
     if (!msg.member.hasPermissions("MUTE_MEMBERS")) return msg.channel.send(yetkinyok)
var mod = msg.author
  let reason = args.slice(2).join(' ') || 'Sebepsiz'
  let user = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
const etiketle = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`:label: **Lütfen Susturmak İstediğiniz Kişiyi Etiketleyin.**\n\n:gear: **__Doğru Kullanım:__**\n\n**\`${prefix}sustur @kullanıcı <1s/1m/1h/1d/1w> <sebep>\`**\n\n**\`${prefix}sustur @kullanıcı <1s/1m/1h/1d/1w>\`**`)
  if (!user) return msg.channel.send(etiketle)
  let mute = msg.guild.roles.find(r => r.name === "⛔┊Susturulmuş Üye");
  let modlog = msg.guild.channels.get(db.fetch(`log_${msg.guild.id}`).replace("<#", "").replace(">", ""));
const modlogyok = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`<a:anlasilmadi:705508503678091406> **Lütfen Mod Log Kanalını Ayarlayın.**`)
  if (db.has(`log_${msg.guild.id}`) === false) return msg.channel.send(modlogyok);        
  let mutetime = args[1];
if(!mute){
      mute = await msg.guild.createRole({
        name: "⛔┊Susturulmuş Üye",
        color: "#020000",
        permissions:[]
      })
      msg.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(mute, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
  
    }
  
  
  await(user.addRole(mute.id));
  let mutezaman = args[1]
.replace(`d`," Gün")
.replace(`s`," Saniye")
.replace(`h`," Saat")
.replace(`m`," Dakika")
.replace(`w`," Hafta")
const muteembed = new Discord.RichEmbed()
  .setColor("#c3c3c3")
  .addField(':zipper_mouth: Eylem:', 'Susturma', true)
  .addField(':bust_in_silhouette: Susturulan Kullanıcı:', `<@${user.id}>`, true)
  .addField(':briefcase: Susturan Yetkili:', `<@${msg.author.id}`, true)
  .addField(':stopwatch: Susturma Süresi:', `${mutezaman}`, true)
  .addField(':pencil: Susturma Sebebi:', "" + reason + "", false)
  modlog.send(muteembed);

if (reason) {
const mutemesaj = new Discord.RichEmbed()
  .setColor("#c3c3c3")
  .setDescription(`**\`${msg.guild.name}\`** **Adlı Sunucuda** **\`${reason}\`** **Sebebi İle** **\`${mutezaman}\`** **Boyunca Susturuldun!** \n\n**Kuralları Çiğnemeye Devam Eder İsen Tekrar Susturulabilir, Uyarılabilir, Atılabilir Veya Yasaklanabilirsin!**`)
  msg.guild.members.get(user.id).send(mutemesaj)
} else {
const mutemesaj = new Discord.RichEmbed()
  .setColor("#c3c3c3")
  .setDescription(`**\`${msg.guild.name}\`** **Adlı Sunucuda** **\`Sebepsiz Yere\`** **\`${mutezaman}\`** **Boyunca Susturuldun!** \n\n**Kuralları Çiğnemeye Devam Eder İsen Tekrar Susturulabilir, Uyarılabilir, Atılabilir Veya Yasaklanabilirsin!**`)
  msg.guild.members.get(user.id).send(mutemesaj)
}
  setTimeout(function(){
      const muteembed = new Discord.RichEmbed()
      .setColor("#c3c3c3")
      .setDescription(`**Susturulma Cezan Kalktı!**`)
        msg.guild.members.get(user.id).send(muteembed)
    user.removeRole(mute.id);
  }, ms(mutetime));

if (reason) {
  const embed2 = new Discord.RichEmbed()
  .setColor("c3c3c3")
  .setDescription(`:zipper_mouth: <@${user.id}> **Adlı Kullanıcı** **\`${reason}\`** **Sebebi İle** **\`${mutezaman}\`** **Süreliğine Susturuldu.**`)
  msg.channel.send(embed2)
} else {
  const embed2 = new Discord.RichEmbed()
  .setColor("c3c3c3")
  .setDescription(`:zipper_mouth: <@${user.id}> **Adlı Kullanıcı** **\`Sebepsiz Yere\`** **\`${mutezaman}\`** **Süreliğine Susturuldu.**`)
  msg.channel.send(embed2)
}

}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["mute"],
  permLevel: 0
};

exports.help = {
  name: "sustur",
  description: "süreli susturma",
  usage: "sustur"
};