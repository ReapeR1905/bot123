const Discord = require('discord.js');
const { stripIndents } = require('common-tags');
const { randomRange, verify } = require('../util/Util.js');

exports.run = async (client, message, args) => {
  
  this.fighting = new Set();
  
	let opponent = message.mentions.users.first()
  const oynamaketiketle = new Discord.RichEmbed()
  .setColor("#c3c3c3")
  .setDescription("**<a:anlasilmadi:705508503678091406> Oynamak İstediğin Kişiyi Etiketlemelisin.**")
	if (!opponent) return message.channel.send(oynamaketiketle)
  
  const botlarlaoynayamazsin = new Discord.RichEmbed()
  .setColor("#c3c3c3")
  .setDescription(`**<a:anlasilmadi:705508503678091406> Botlar İle Düello Yapamazsın.**`)
  if (opponent.bot) return message.channel.send(botlarlaoynayamazsin);
  const kendinlede = new Discord.RichEmbed()
  .setColor("#c3c3c3")
  .setDescription(`**$<a:anlasilmadi:705508503678091406> Kendin İle Düello Yapamazsın.**`)
  if (opponent.id === message.author.id) return message.channel.send(kendinlede);
		const zatensavasvar = new Discord.RichEmbed()
    .setColor("#c3c3c3")
    .setDescription("**<a:anlasilmadi:705508503678091406> Kanal Başına Sadece 1 Düello Yapılabilir.**")
  if (this.fighting.has(message.channel.id)) return message.channel.send(zatensavasvar);
		this.fighting.add(message.channel.id);
		const geldilakos = new Discord.RichEmbed()
    .setColor("#c3c3c3")
    .setDescription(`:e_mail: ${opponent}, **Düello İsteği Geldi! Kabul Ediyormusun?** **\`evet\`** **veya** **\`hayır\`** **Olarak Cevap Vermelisin.**`)
  try {
			if (!opponent.bot) {
                await message.channel.send(geldilakos);
				const verification = await verify(message.channel, opponent);
				if (!verification) {
					this.fighting.delete(message.channel.id);
          const agabe = new Discord.RichEmbed()
          .setColor("#c3c3c3")
          .setDescription("**:stopwatch: Düello Kabul Edilmedi.**")
					return message.channel.send(agabe);
				}
			}
			let userHP = 600;
			let oppoHP = 600;
			let userTurn = false;
			let guard = false;
			const reset = (changeGuard = true) => {
				userTurn = !userTurn;
				if (changeGuard && guard) guard = false;
			};
			const dealDamage = damage => {
				if (userTurn) oppoHP -= damage;
				else userHP -= damage;
			};
			const forfeit = () => {
				if (userTurn) userHP = 0;
				else oppoHP = 0;
			};
			while (userHP > 0 && oppoHP > 0) { // eslint-disable-line no-unmodified-loop-condition
        const user = userTurn ? message.author : opponent;
				const neyapcanknk = new Discord.RichEmbed()
        .setColor("#c3c3c3")
        .setDescription(stripIndents`${user}, **Ne Yapmak İstersin?** **\`saldır\`**, **\`savun\`**, **\`ultra güç\`**, **veya** **\`kaç\`** \n\n${message.author.username}: ${userHP} :white_heart:\n${opponent.username}: ${oppoHP} :white_heart:`)
        let choice;
				if (!opponent.bot || (opponent.bot && userTurn)) {
					await message.channel.send(neyapcanknk);
					const filter = res =>
						res.member.id === user.id && ['saldır', 'savun', 'ultra güç', 'kaç'].includes(res.content.toLowerCase());
					const turn = await message.channel.awaitMessages(filter, {
						max: 1,
						time: 30000
					});
					const suredoldu = new Discord.RichEmbed()
          .setColor("#c3c3c3")
          .setDescription("**:stopwatch: Üzgünüm Ama Süre Doldu.**")
          if (!turn.size) {
						await message.channel.send(suredoldu);
						reset();
						continue;
					}
					choice = turn.first().content.toLowerCase();
				} else {
					const choices = ['saldır', 'savun', 'ultra güç'];
					choice = choices[Math.floor(Math.random() * choices.length)];
				}
				if (choice === 'saldır') {
					const damage = Math.floor(Math.random() * (guard ? 10 : 100)) + 1;
					const yurube = new Discord.RichEmbed()
          .setColor("#c3c3c3")
          .setDescription(`${user}, **\`${damage}\`** **Hasar Vurdu! :punch:**`)
          await message.channel.send(yurube)
					dealDamage(damage);
					reset();
				} else if (choice === 'savun') {
          const savundumbro = new Discord.RichEmbed()
          .setColor("#c3c3c3")
          .setDescription(`${user}, **Kendisini** **\`Süper Kalkan\`** **İle Savundu!** :shield:**`)
					await message.channel.send(savundumbro);
					guard = true;
					reset(false);
				} else if (choice === 'ultra güç') {
					const miss = Math.floor(Math.random() * 4);
					if (!miss) {
						const damage = randomRange(100, guard ? 150 : 300);
            const ahbee = new Discord.RichEmbed()
            .setColor("#c3c3c3")
            .setDescription(`${user}, **Çoook Uzak Galaksilerden Gelen Ultra Sonik Enerjiyi Yeterli Miktarda Topladı ve** **\`${damage}\`** **Hasar Vurdu!**`)
						await message.channel.send(ahbee);
						dealDamage(damage);
					} else {
            const siela = new Discord.RichEmbed()
            .setColor("#c3c3c3")
            .setDescription(`${user}, **Çoook Uzak Galaksilerden Gelen Enerjiyi Toplayamadığı İçin Hasar Vuramadı.** :disappointed:`)
						await message.channel.send(siela);
					}
					reset();
				} else if (choice === 'kaç') {
          const hahaha = new Discord.RichEmbed()
          .setColor("#c3c3c3")
          .setDescription(`**${user} Seni Yenemeyeceğini Bildiği İçin Kaçtı! :head_bandage:**`)
					await message.channel.send(hahaha);
					forfeit();
					break;
				} else {
          const yazsnaa = new Discord.RichEmbed()
          .setColor("#c3c3c3")
          .setDescription("**:thinking: Ne Yapmak İstediğini Anlamadım**")
					await message.channel.send(yazsnaa);
				}
			}
			this.fighting.delete(message.channel.id);
            const winner = userHP > oppoHP ? message.author : opponent;
    const zaaxd = new Discord.RichEmbed()
    .setColor("#c3c3c3")
    .setDescription(`**:trophy: Oyun Bitti Tebrikler, ${winner} Kazandı**`)
			return message.channel.send(zaaxd);
		} catch (err) {
			this.fighting.delete(message.channel.id);
			throw err;
		}
  }

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['1vs1', '1v1', 'savaş', 'düello'],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: 'düello',
  category: "eğlence",
  description: 'İstediğiniz Bir Kişi İle Düello Atarsınız.',
  usage: 'düello @Kullanıcı'
};