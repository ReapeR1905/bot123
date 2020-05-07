const Discord = require('discord.js');
const math = require('math-expression-evaluator')
const stripIndents = require('common-tags').stripIndents
const ayarlar = require('../ayarlar.json')
var prefix = ayarlar.prefix;



exports.run = function(client, message, args) {
    var soru = args.join(' ');
    const biseyyaz = new Discord.RichEmbed()
    .setColor("#c3c3c3")
    .setDescription(`**Lütfen Bir İşlem Yazın.**\n\n\n:gear: **__Doğru Kullanım:__**\n\n**\`${prefix}matematik <işlem>\`**\n\n**\`${prefix}matematik <işlem>\`**`)

    if(!soru) return message.channel.send(biseyyaz)
    else { let cevap;
        try {
            cevap = math.eval(soru)
        } catch(err) {
           if (message.channel.send(''+client.emojis.get(client.emojiler.kapalii)+' Hatalı işlem: ' + 'Lütfen çarpma işlemi yaparken \`x\` yerine \` * \` kullanın.')){
             
           } else return
        } 

        message.reply(`\nİşlem : \`${soru}\`\nCevap: \`${cevap}\``)
          
         }


};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
    kategori: 'eğlence',
  permLevel: 0 
};

exports.help = {
  name: 'matematik', 
  description: 'Belirtilen işlemi yapar.',
  usage: 'matematik <işlem>'
};
