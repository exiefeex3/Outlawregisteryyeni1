const Rochelle = require('discord.js');
const db = require("quick.db")

exports.run = async (client, message, args) => {

if(!message.member.roles.has('727943299653959690') && !message.member.hasPermission('ADMINSTRATOR')) return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!`);
  let kullanıcı = message.mentions.users.first() || client.users.get(args.join(' ')) || message.guild.members.find(c=> c.id === args[0])
  if (!kullanıcı) return message.channel.send('Kullanıcıyı etiketlemeyi unuttun kanka.')
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
  member.addRole('698390820390305824')
  member.removeRole('711217346001240084')
     const kanal = message.guild.channels.find(c => c.id == '711216509338255360')
  let rochelle1 = new Rochelle.RichEmbed()
  .setColor('RED')
  .addField(`Menthe`, `${kullanıcı} **adlı üyenin cezası kalktı! **`)
  .setFooter(`Komutu kullanan yetkili : ${message.author.username}`) 
message.react('698390820390305824')//708763304696217692




const rochelle = new Rochelle.RichEmbed()
.setColor('RED')
.addField(`Ceza Kaldırma İşlemi`,
`${kullanıcı} **adlı üyenin cezası kalktı! **`)
.setFooter(`Komutu kullanan yetkili : ${message.author.username}`) 
  return message.channel.send(rochelle1).then(kanal.send(rochelle)).then(m => m.delete(5000));};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["cezaaç"],
  kategori: "KULLANICI KOMUTLARI",
  permLevel: 0
}

exports.help = {
  name: 'unjail',
  description: "Cezalı rolünü kaldırır",
  usage: 'Cezalı rolü açar'
}