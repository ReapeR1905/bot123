const Discord = module.require("discord.js");
const ayarlar = require('../ayarlar.json')
var prefix = ayarlar.prefix;

module.exports.run = async (client, message, args) => {
const db = require('quick.db');
let reasonn = args.slice(1).join(' ') || 'Sebepsiz'
const modlogyok = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`<a:anlasilmadi:705508503678091406> **Lütfen Mod Log Kanalını Ayarlayın.**`)
  if (db.has(`log_${message.guild.id}`) === false) return message.channel.send(modlogyok);
let modlog = message.guild.channels.get(db.fetch(`log_${message.guild.id}`).replace("<#", "").replace(">", ""));

  const permError = new Discord.RichEmbed()
    .setColor('#c3c3c3')
        .setDescription('<a:anlasilmadi:705508503678091406>**Bu Komutu Kullanabilmek İçin** **`Üyeleri Yasakla`** **İznine Sahip Olmalısın.**')
    
  const userError = new Discord.RichEmbed()
    .setColor('#c3c3c3')
        .setDescription(`:id: **Lütfen Yasağını Kaldırmak İstediğiniz Kişinin İd\'\sini Girin.**\n\n:gear: **__Doğru Kullanım:__**\n\n**\`${prefix}yasakla <id> <sebep>\`**\n\n**\`${prefix}yasak-kaldır <id>\`**`)
  
  const userError2 = new Discord.RichEmbed()
    .setColor('#c3c3c3')
        .setDescription(`<a:anlasilmadi:705508503678091406> **ID de Harf Kullanılmaz.**\n\n:gear: **__Doğru Kullanım:__**\n\n**\`${prefix}yasakla <id> <sebep>\`**\n\n**\`${prefix}yasak-kaldır <id>\`**`)
  
  const userError3 = new Discord.RichEmbed()
    .setColor('#c3c3c3')
        .setDescription(`<a:anlasilmadi:705508503678091406> **Bu Kullanıcı Yasaklanmamış.**\n\n:gear: **__Doğru Kullanım:__**\n\n**\`${prefix}yasakla <id> <sebep>\`**\n\n**\`${prefix}yasak-kaldır <id>\`**`)
    
  const levelError = new Discord.RichEmbed()
    .setColor('#c3c3c3')
        .setDescription(`<a:anlasilmadi:705508503678091406> **Sizinle aynı veya daha yüksek bir role sahip bir üyenin yasağını kaldırmazsınız.**\n\n:gear: **__Doğru Kullanım:__**\n\n**\`${prefix}yasakla <id> <sebep>\`**\n\n**\`${prefix}yasak-kaldır <id>\`**`)


  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send
        (permError).then
          (message.delete()).then
            (msg => msg.delete(5000));
  
  let user = args[0];
    if  (!user) return message.channel.send
          (userError).catch(console.error).then
            (message.delete()).then
              (msg => msg.delete(5000));
  
  if  (isNaN(args[0])) return message.channel.send
        (userError2).catch(console.error).then
          (message.delete()).then
            (msg => msg.delete(5000));

  if  (user.highestRole >= message.author.highestRole) return message.channel.send
          (levelError).then
            (message.delete()).then
              (msg => msg.delete(5000));
const yasaklayanyetkili = db.fetch(`ban_${args[0]}.yetkili`)
const reason = db.fetch(`ban_${args[0]}.sebep`)
const embed = new Discord.RichEmbed()
  .setColor("#c3c3c3")
  .addField(':no_entry_sign: İşlem', 'Yasak Kaldırdma', true)
  .addField(':bust_in_silhouette: Yasağı Kalkan Kullanıcının IDsi', `${args[0]}`, true)
  .addField(':briefcase: Yasağı Kaldıran Yetkili', `<@${message.author.id}>`, true)
  .addField(':briefcase: Yasaklayan Yetkili', `<@${yasaklayanyetkili}>`, true)
  .addField(':pencil: Yasaklama Sebebi', "" + reason + "", false)
  .addField(":pencil: Yasak Kaldırma Sebebi:", ""+reasonn+"", false)
  .setFooter(':stopwatch: Yasaklanma zamanı:')
  .setTimestamp(db.fetch(`ban_${args[0]}.banzaman`))
  modlog.send(embed);
  db.delete(`ban_${args[0]}`)
  
  const banList = await message.guild.fetchBans();
  
 // console.log(banList.map(s => s.users.id))
  
  if (!user.id === banList) return message.channel.send
      (userError3).then
        (message.delete()).then
          (msg => msg.delete(5000));
  
  message.guild.unban(user);
const embed3 = new Discord.RichEmbed()
.setDescription(`<@!${user}> **Adlı Kullanıcının Yasağı Kaldırıldı.**`)
message.channel.send(embed3)
  
  }

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
        kategori: "Yetkili"

  };

  exports.help = {
    name: 'yasak-kaldır',
    description: 'İstediğiniz kişinin banını kaldırır.',
    usage: 'yasak-kaldır [kullanıcı] [sebep]'
  };