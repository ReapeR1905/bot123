const db = require('quick.db')
const ayarlar = require('../ayarlar.json');
const googleTTS = require('google-tts-api');
const Discord = require('discord.js')
var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
 if (!message.guild) {
  return }  
let kullanıcı = await db.fetch(`gold_${message.author.id}`);

  if( kullanıcı == undefined){
const pre = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription("<a:anlasilmadi:705508503678091406> **Bu Komutu Kullanabilmek İçin** **`Premium Üye`** **Olmalısın.**")
message.channel.send(pre)
  }else{
      if( kullanıcı == 'gold'){

  let yazi = args.join(" ")
  const kanal = new Discord.RichEmbed()
  .setColor("#c3c3c3")
  .setDescription(":headphones: **Lütfen** **`Sesli`** **Bir Kanala Girin.**")
  if (!message.member.voiceChannel) return message.channel.send(kanal);
  const mesaj = new Discord.RichEmbed()
  .setColor("#c3c3c3")
  .setDescription(`:microphone: **Lütfen Sesli Olarak Söylenmesini İstediğin** **\`Mesajı\`** **Belirt.**\n\n:gear: **__Doğru Kullanım:__**\n\n**\`${prefix}pre-söyle <mesaj>\`**`)
  if (!yazi) return message.channel.send(mesaj)
  
  googleTTS(`${yazi}`, 'tr', 1).then(url => {
    message.member.voiceChannel.join().then(connection => {
  const soyle = new Discord.RichEmbed()
  .setColor("#c3c3c3")
  .setDescription(`:microphone2: **\`${yazi}\`** **Mesajını Söylüyorum.**`)
      message.channel.send(soyle)
      connection.playStream(url).on("end",() => {
        connection.disconnect();
      })
    })
  })
  
};

}

    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'pre-söyle',
  description: "Premium Kullanıcılar İçin Bota İstediğiniz Kelimeyi Söyletir.",
  usage: 'pre-söyle <mesaj>'
};