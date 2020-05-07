const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
    console.log("Buraya Geldi");
    const embedyardim = new Discord.RichEmbed()
        .setColor("#c3c3c3")
        .setTitle(":musical_note: Müzik Komutları")
   
    .setDescription( `**• ${prefix}çal** = Yazılan Müziği Açar. \n**• ${prefix}geç** = Çalan Müziği Geçer. \n**• ${prefix}kapat** = Çalan Müziği Kapatır. \n**• ${prefix}ses** = Müziğin Sesini Ve Basını Arttır. \n**• ${prefix}çalan** = Çalan Müziği Gösterir. \n**• ${prefix}sıra** = Sıradaki Müzikleri Gösterir. \n**• ${prefix}duraklat** = Çalan Müziği Durdurur. \n**• ${prefix}devam** = Durdurulan Müziği Devam Ettirir.`)
    
    .addField("» Bağlantılar", ` \n[:e_mail: Sunucuna Ekle](https://discordapp.com/oauth2/authorize?client_id=689488666090930180&scope=bot&permissions=2146958847)` + "** - **" + `[:ballot_box: Oyver](Yakında)` + "** - **" + `[:telephone_receiver: Destek Sunucusu](https://discord.gg/3SWxCjg)`, false)
.setThumbnail(client.user.avatarURL)
    if (!params[0]) {
        const commandNames = Array.from(client.commands.keys());
        message.channel.send(embedyardim);
    }
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["müzikkomutları","musiccommands","musiccammands","muzikkomutlari","Müzikkomutları","Muzikkomutlari","Musiccommands","Masacommandscommands"],    permLevel: 0
};

exports.help = {
    name: 'müzik'
};