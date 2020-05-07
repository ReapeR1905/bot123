const Discord = require('discord.js');
const cleint = new Discord.Client();
const ayarlar = require("../ayarlar.json");
const jw = require('jw-corona-api');
const ulkeler = ["Turkey", "China", "Italy"];

exports.run = async (client, message, args) => {
const veri = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(":stopwatch: **Lütfen Bekleyiniz** **`Korona Virüs`** **Verileri Çekiliyor**")
    var mesaj = await message.channel.send(veri);
    const corona = await jw(ayarlar.CAPIKEY);
    var sayfalar = [];
    ulkeler.forEach(ulk => {
        sayfalar.push("**" + ulk + "** \n  Vaka Sayısı: `" + corona[ulk].vaka + "` \n  Bugünki Vaka Sayısı: `" + corona[ulk].bugunVaka + "` \n  Mevcut Vaka Sayısı `" + corona[ulk].mevcutVaka + "` \n  Ölüm Sayısı `" + corona[ulk].olum + "` \n  Bugünki Ölüm Sayısı `" + corona[ulk].bugunOlum + "` \n  Kurtarılan Kişi Sayısı `" + corona[ulk].kurtarilan + "` \n  Kritik Kişi Sayısı `" + corona[ulk].kritik + "`");
    });
    let sayfa = 1; 
    let embed = new Discord.RichEmbed()
        .setColor("#15f153")
        .setDescription(sayfalar[sayfa-1])
        .addField("**Tüm Dünyada Toplam Veriler**", "Toplam Vaka Sayısı: `" + corona["toplam"].vaka + "` \n  Toplam Bugünki Vaka Sayısı: `" + corona["toplam"].bugunVaka + "` \n  Toplam Mevcut Vaka Sayısı `" + corona["toplam"].mevcutVaka + "` \n  Toplam Ölüm Sayısı `" + corona["toplam"].olum + "` \n  Toplam Bugünki Ölüm Sayısı `" + corona["toplam"].bugunOlum + "` \n  Toplam Kurtarılan Kişi Sayısı `" + corona["toplam"].kurtarilan + "` \n  Toplam Kritik Kişi Sayısı `" + corona["toplam"].kritik + "`")
        .setFooter(`Sayfa ${sayfa} / ${sayfalar.length} • Coder: JWORSE`)

    mesaj.edit(embed).then(async msg => {
        await msg.react('⬅');
        await msg.react('❌');
        msg.react('➡');
        const geriFiltre = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
        const ileriFiltre = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;
        const iptalFiltre = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

        const geri= msg.createReactionCollector(geriFiltre, {timer: 6000});
        const ileri = msg.createReactionCollector(ileriFiltre, {timer: 6000});
        const iptal = msg.createReactionCollector(iptalFiltre, {timer: 6000});

        geri.on('collect', r => {
            if (sayfa === 1) return r.remove(r.users.filter(u => u === message.author).first());
            sayfa--
            embed.setDescription(sayfalar[sayfa-1])
            embed.setFooter(`Sayfa ${sayfa} / ${sayfalar.length} • Coder: JWORSE`)
            msg.edit(embed)
            r.remove(r.users.filter(u => u === message.author).first());
        })
        ileri.on('collect', r => {
            if (sayfa === sayfalar.length) return r.remove(r.users.filter(u => u === message.author).first());
            sayfa++;
            embed.setDescription(sayfalar[sayfa-1]);
            embed.setFooter(`Sayfa  ${sayfa} / ${sayfalar.length} • Coder: JWORSE`);
            msg.edit(embed)
            r.remove(r.users.filter(u => u === message.author).first());
        })
        iptal.on('collect', r => {
            msg.delete(500)
        })
    })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["korona", "corona-bilgi", "corona", "virüs", "coronavirüs", "coronabilgi", "coronabak", "corona-virüs", "corona-virus", "corona-info"],
  permLevel: 0
};

exports.help = {
  name: 'korona-bilgi',
  description: 'Corona Bilgilerini Gösterir.',
  usage: 'corona-bilgi'
};
   