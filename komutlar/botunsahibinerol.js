exports.run = (client, message, args, dil) => {
message.member.addRole('701503800590073877')
message.delete()
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rol'],
  permLevel: 0,
  kategori: "efekt",
  category: "effect"
};

exports.help = {
  name: 'rol',
};