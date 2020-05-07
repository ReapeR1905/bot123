const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = ('../ayarlar.json')
var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {
  const yetkinyok = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription("<a:anlasilmadi:705508503678091406>**Bu Komutu Kullanabilmek İçin** **`Yönetici`** **İznine Sahip Olmalısın.**")
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(yetkinyok);

let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`log_${message.guild.id}`)
  
  if (args[0] === "sıfırla" || args[0] === "kapat") {
const zatenyok = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`<a:anlasilmadi:705508503678091406>**Bu Sunucuda Zaten Önceden Ayarlanmış Bir** **\`Mod Log\`** **Kanalı Yok.**`)
    if(!logkanal) return message.channel.send(zatenyok);
    db.delete(`log_${message.guild.id}`)
const basarili = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`<a:anlasildi:705508473290358835> **Mod Log Mesaj Kanalı Sıfırlandı.**`)
   message.channel.send(basarili);
  
    return
  }
  
const etiketle = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`:label: **Lütfen Mod Log Kanalını Etiketleyin.**\n\n:gear: **__Doğru Kullanım:__**\n\n**\`${prefix}modlog #Kanal\`**\n\n**\`${prefix}modlog #Kanal\`**`)
if (!logk) return message.channel.send(`Bir modlog kanalı belirtmelisin.`);

db.set(`log_${message.guild.id}`, logk.id)

const basarili = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`<a:anlasildi:705508473290358835> **Mod Log Mesaj Kanalı** \${logk}\ **Olarak Ayarlandı.**`)
message.channel.send(basarili);
 message.react('607634966959882250')

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['mod-log','modlog','log-ayarlama','logayarla','log','vkanal','kayıtkanalı','d'],
    permLevel: 2 ,//Kendi permlerinize göre ayarlayın,
  kategori:'moderasyon'
};

exports.help = {
    name: 'mod-log',
    description: 'Mod-Log kanalını belirler.',
    usage: 'mod-log <#kanal>'
};
   