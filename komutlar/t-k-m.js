const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
var prefix = ayarlar.prefix;
const
    rps = [
        'makas',
        'taş',
        'kağıt'
    ],
    rpsF = (userAns, botAns) => {
        let choice = userAns,
            botChoice = botAns;
        if (choice === 'taş') {
            if (botChoice === 'makas') {
                return 'won';
            } else if (botChoice === 'kağıt') {
                return 'Kaybetin';
            }

            return 'draw';
        } else if (choice === 'kağıt') {
            if (botChoice === 'taş') {
                return 'lost';
            } else if (botChoice === 'makas') {
                return 'Kazandın';
            }

            return 'draw';
        } else if (choice === 'makas') {
            if (botChoice === 'taş') {
                return 'lost';
            } else if (botChoice === 'kağıt') {
                return 'Kazandın';
            }

            return 'draw';
        }
    };

exports.run = async (client, msg, args) => {
    if (!args[0]) {
const isim = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`:pencil: **Lütfen** **\`Seçimizini\`** **Belirtiniz.**\n\n:gear: **__Doğru Kullanım:__**\n\n**\`${prefix}tkm <taş/kağıt/makas>\`**`)
        return msg.channel.send(isim);
    }
    let choice = args[0].toLowerCase();
    choice = choice === 't' ? 'taş' : choice;
    choice = choice === 'k' ? 'kağıt' : choice;
    choice = choice === 'm' ? 'makas' : choice;
    if (!rps.includes(choice)) {
const isim = new Discord.RichEmbed()
.setColor("#c3c3c3")
.setDescription(`:pencil: **Lütfen** **\`Seçimizini\`** **Belirtiniz.**\n\n:gear: **__Doğru Kullanım:__**\n\n**\`${prefix}tkm <taş/kağıt/makas>\`**`)
        return msg.channel.send(isim);
    }
    let rand = Math.floor(Math.random() * 3);
    let botChoice = rps[rand];
    let result = rpsF(choice, botChoice);
    let answer = '';

    if (result === 'won') {
        answer = ':trophy: Başarılı, sen **Kazandın** :trophy: \nSenin Seçtiği: `' + choice + '` | Bot\'un Seçtiği: `' + botChoice + '`';
    } else if (result === 'lost') {
        answer = ':x: Bidakine **Kaybetin Dostum** :x: \nSenin Seçtiğin: `' + choice + '` | Bot\'un Seçtiği: `' + botChoice + '`';
    } else if (result === 'draw') {
        answer = ':neutral_face: **Berabere** :neutral_face:\nSenin Seçimin: `' + choice + '` | Bot\'un Seçimi: `' + botChoice + '`';
    }

    msg.channel.send(answer);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
 };
 
 exports.help = {
 name: 'tkm',
 description: 'Taş kağıt makas oyununu oynar.',
 usage: 'tkm'
 };  