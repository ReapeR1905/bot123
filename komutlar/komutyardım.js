const { RichEmbed } = require ('discord.js')
const discord = require ('discord.js')
exports.run = (client,message,args) => {
  
 let komut = args[0]
const komutyok = new discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`<a:anlasilmadi:705508503678091406> **Komutlarımda Böyle Bir Komut Yok.**`)  
  if(!client.commands.has(komut)) return message.channel.send(komutyok)
  
 if(client.commands.has(komut)){


komut = client.commands.get(komut);

const komut1 = new discord.RichEmbed()
.setColor("#c3c3c3")
.addField(`**Komut Adı**`, komut.help.name, false)
.addField(`**Komut Açıklaması**`, komut.help.description, false)
.addField(`**Doğru Kullanım**`, komut.help.usage)
.addField(`**Alternatif Kullanımlar**`, komut.conf.aliases)
message.channel.send(komut1)



}



}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['komut-y'],
  permLevel: 0
}

exports.help = {
  name: 'komutyardım'
}