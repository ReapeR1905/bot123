const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
    console.log("Buraya Geldi");
    const embedyardim = new Discord.RichEmbed()
        .setColor("#c3c3c3")
        .setTitle(":bust_in_silhouette: Kullanıcı Komutları")
   
    .setDescription( `**• ${prefix}düello** = Etiketlenen Kullanıcı İle Düello Atarsınız. \n**• ${prefix}beşiktaş** = Profil Fotoğrafınızı Beşiktaş'a Uyarlar. \n**• ${prefix}davet** = Botun Destek Sunucusunu Ve Davet Linkini Atar. \n**• ${prefix}bulanık** = Profil Fotoğrafınızı Bulanıklaştırır. \n**• ${prefix}dans** = Yazdığınız Yazıyı Dans Ettirir. \n**• ${prefix}emojibilgi** = Yazılan Emojinin Bilgilerini Verir. \n**• ${prefix}fenerbahçe** = Profil Fotoğrafınızı Fenerbahçe'ye Uyarlar. \n**• ${prefix}galatasaray** = Profil Fotoğrafınızı Galatasaray'a Uyarlar. \n**• ${prefix}havadurumu** = Girilen Şehirin Hava Durumunu Gösterir. \n**• ${prefix}servericon** = Sunucunun Fotoğrafını Gösterir. \n**• ${prefix}istatistik** = Botun İstatistiğini Gösterir. \n**• ${prefix}kaçcm** = Malafatın Boyunu Ölçer. \n**• ${prefix}korona** = Korona Virüs'ü Verilerini Gösterir. \n**• ${prefix}matematik** = Girilen İşlemi Çözer. \n**• ${prefix}mcödül** = Minecraft Başarımı Kazanırsınız. \n**• ${prefix}nahçek** = Etiketlenen Kullanıcıya Nah Çeker. \n**• ${prefix}namazvakti** = Belirtilen Şehir İçin Namaz Vakitlerini Gösterir. \n**• ${prefix}okulsayacı** = Okulun Açılmasına Kalan Süreyi Gösterir. \n**• ${prefix}oyun-ara** = Girilen Oyunun Bilgilerini Gösterir. \n**• ${prefix}sigara** = Sigara İçersiniz. \n**• ${prefix}tkm** = Bot İle Taş-Kağıt-Makas Oynarsınız. \n**• ${prefix}troll** = Troll Gifi Atar. \n**• ${prefix}wasted** = Profil Fotoğrafınızı Wasted Yazısına Uyarlar. \n**• ${prefix}zar-at** = Zar Atarsınız. \n**• ${prefix}yetkililer** = Sunucudaki Yetkilileri Gösterir.`)
    
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
    aliases: ["kullanıcıkomutları","helpcommands","halpcammands","kullanicikomutlari","Kullanıcıkomutları","Kullanicikomutlari","Helpcommands","Halpfan"],
    permLevel: 0
};

exports.help = {
    name: 'kullanıcı'
};