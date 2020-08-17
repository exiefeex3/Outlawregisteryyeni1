const Discord = require('discord.js');

exports.run = async(client, message, args, prefix, ayar, emoji) => {
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Gerekli role sahip değilsin!');
  
  let katıldıRolü = "744115855327232022";
  
  if (args[0] === "ver") {
    if(!message.member.voiceChannel) return message.channel.send('Ses kanalında değilsin!');
    message.member.voiceChannel.members.forEach(async x => await x.addRole(katıldıRolü));
    message.channel.send('Katıldı rolleri dağıtıldı!');
  };
  
  if (args[0] === "al") {
    message.guild.roles.get(katıldıRolü).members.forEach(async uye => await uye.removeRole(katıldıRolü));
    message.channel.send('Katıldı rolleri alındı!');
  };
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = { 
  name: 'katıldı', 
  description: 'Sestekilere rol verir.',
  usage: 'katıldı',
  kategori: 'kullanıcı'
};