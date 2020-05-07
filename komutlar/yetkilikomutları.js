const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
    console.log("Buraya Geldi");
    const embedyardim = new Discord.RichEmbed()
        .setColor("#c3c3c3")
        .setTitle(":briefcase: Yetkili Komutları")
   
    .setDescription( `**• ${prefix}capslock-engelleme** = Büyük Harf Yazmayı Engeller. \n**• ${prefix}hgbbkanalayarla** = Kullanıcı Girip-Çıktığında Mesaj Atar. \n**• ${prefix}hgbbkanalsıfırla** = Hgbb Sisteminin Kanalını Siler. \n**• ${prefix}yasakla** = Etiketlenen Kullanıcıyı Yasaklar. \n**• ${prefix}yasaklananlar** = Yasaklanan Kullanıcıları Gösterir. \n**• ${prefix}at** = Etiketlenen Kullanıcıyı Atar. \n**• ${prefix}modlog** = Ceza Takip Kanalını Ayarlar. \n**• ${prefix}oylama** = Oylama Yapar. \n**• ${prefix}ön-ek** = Sunucunuz İçin Önek Ayarlar. \n**• ${prefix}reklam-taraması** = Sunucunuzda Reklam Yapanları Bulur. \n**• ${prefix}sayaç-sıfırla** = Sayacı Kapatır. \n**• ${prefix}sayaç-ayarla** = Sayaç Ayarlar. \n**• ${prefix}sustur** = Etiketlenen Kullanıcıyı Susturur. \n**• ${prefix}sil** = Belirttiğiniz Kadar Mesaj Siler. \n**• ${prefix}sunucu-kur** = Hazır Gelişmiş Bir Sunucu Kurar. \n**• ${prefix}yasak-kaldır** = ID'si Girilen Kullanıcının Yasağını Kaldırır. \n**• ${prefix}uyar** = Etiketlenen Kullanıcıyı Uyarır. \n**• ${prefix}uyarı-kaldır** = Etiketlenen Kullanıcının Tüm Uyarılarını Kaldırır. \n**• ${prefix}uyarılar** = Etiketlenen Kullanının Uyarılarını Gösterir.`)
              
    .addField("Bazı Komutların Çalışması İçin Log Kanalı Ayarlamanız Zorunludur!",
              `**• ${prefix}modlog #kanal**`)
    
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
    aliases: ["yetkilikomutları","helpcommands","halpcammands","yetkilikomutlari","Yetkilikomutları","Yetkilikomutlari","Helpcommands","Halpcommands"],
    permLevel: 0
};

exports.help = {
    name: 'yetkili'
};