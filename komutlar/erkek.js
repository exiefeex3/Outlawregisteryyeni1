 const Discord = require('discord.js');
const db = require("quick.db")

exports.run = async (client, message, args) => {

  const emoji = client.emojis.find(emoji => emoji.name === "bildirim")//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
const emoji1 = client.emojis.find(emoji => emoji.name === "kitap")//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
const emoji2 = client.emojis.find(emoji => emoji.name === "mor")//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert

 if (!message.member.roles.has('643106004258652160') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`  Bilginize` , ` Bu komutu kullanmak için gerekli yetkiye sahip değilsin!`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp()); let rochelle1 = message.mentions.users.first() || client.users.get(args.join(' ')) || message.guild.members.find(c=> c.id === args[0])
  if (!rochelle1) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`  Bilgi` , `   Bir kullanıcı etiketlemeli ve ya id girmelisin!`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  let user = message.mentions.users.first();//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
  let rochelle = message.guild.member(rochelle1)//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
let isim = args[1]//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
if(!isim) return message.channel.sendEmbed(new Discord.RichEmbed().addField(` Bilgi` , ` Geçerli bir İsim Yazmalısın!`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
 let yas = args[2]
if(!yas) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`  Bilgi` , ` Geçerli bir Yaş Yazmalısın!`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
 
rochelle.setNickname(`${isim} | ${yas}`)
  rochelle.addRole('698417266684854292'); // erkek 1
  rochelle.addRole('725898930369331532'); // erkek 1
  rochelle.addRole('727908153886507098'); // erkek 1
  rochelle.addRole('727951645555687456')
  rochelle.addRole('727908153068486686')

  rochelle.removeRole('676538917956091934'); // kadın 1
  rochelle.removeRole('725898929136205924')
  rochelle.removeRole('727908151046701116')

  rochelle.removeRole('698390820390305824') // kayıtsız 1
  rochelle.removeRole('711217346001240084') // cezalı 1 717777340708552807 717743735705960448
  

    message.react("TEPKİ");  
db.add(`erkek.${message.author.id}`, 1);
    const kanal = message.guild.channels.find(c => c.id == "727908216708792435") 
    const embed1 = new Discord.RichEmbed() 
    .setDescription(`${rochelle.user}  **Aramıza Hoş Geldin , Seninle Beraber \`${rochelle.guild.memberCount}\` Üyeye Ulaştık**`)
    .setColor("#B0E0E6")
    .setFooter(message.author.tag ,message.author.avatarURL)
    .setTimestamp()
        kanal.send(embed1).then(m => m.delete(10000));
  let embed = new Discord.RichEmbed() 
  .setColor("#E0FFFF")
  .setTitle('Menthe Krallığı', message.author.avatarURL)
  .setDescription(`**${rochelle.user} Adlı Üye <@&727908153886507098> <@&727951645555687456> <@&727908153068486686> Rolüyle Kayıt Oldu.** `)
.setFooter('Kalite Tesadüf Değildir')
  .setTimestamp()
  return message.channel.send(embed).then(m => m.delete(6000));

 
};//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["e", "er"],
  kategori: "Yetkili Komutları",//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
  permLevel: 0
};
exports.help = {
  name: "erkek",
  description: "Sunucuya kaydolmaya ne dersin ?",
  usage: "kayıt isim yaş"
};
//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert