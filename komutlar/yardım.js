const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
    console.log("Buraya Geldi");
    const embedyardim = new Discord.RichEmbed()
        .setColor("#c3c3c3")
    .setDescription(`**Toplam** **\`${client.commands.size}\`** **Komut Bulunmaktadır.**\n:mailbox_with_mail: **• ${prefix}öneri** = Önerilerinizi Belirtin.\n:rage: **• ${prefix}şikayet** = Şikayetlerinizi Belirtin.\n\n:zap: **KATEGORİLER** \n\n\n:musical_note: **• ${prefix}müzik** = Müzik Komutlarının Listesi. \n:bust_in_silhouette: **• ${prefix}kullanıcı** = Kullanıcı Komutlarının Listesi. \n:briefcase: **• ${prefix}yetkili** = Yetkili Komutlarının Listesi. \n:e_mail: **• ${prefix}davet** = Davet Linki Ve Destek Sunucusu.`) //:musical_note: **• ${prefix}müzik** = Müzik Komutlarının Listesi.
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
    aliases: ["yardım","help","halp","yardim","Yardım","Yardim","Help","Halp","Komutlar","komutlar"],
    permLevel: 0
};

exports.help = {
    name: 'yardım',
};