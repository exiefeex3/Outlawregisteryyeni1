const Rochelle = require('discord.js');
const db = require("quick.db");
const client = new Rochelle.Client();
String.prototype.replaceA = function (find, replace) {
  return this.replace(new RegExp(find, 'g'), replace);
}

const donustur = function(sayi) {
  let gorunum = sayi.toString().replace('0', '0a')
    .replaceA('1', '1a')
    .replaceA('2', '2a')
    .replaceA('3', '3a')
    .replaceA('4', '4a')
    .replaceA('5', '5a')
    .replaceA('6', '6a')
    .replaceA('7', '7a')
    .replaceA('8', '8a')
    .replaceA('9', '9a')
  
  gorunum = gorunum
    .replaceA("0a", '<a:0a:728160046617198593>')
    .replaceA("1a", "<a:1a:728160119732305920>")
    .replaceA("2a", "<a:2a:728160192969179137>")
    .replaceA("3a", "<a:3a:728160236812369921>")
    .replaceA("4a", '<a:4a:728160297277194290>')
    .replaceA("5a", '<a:5a:728160402889900042>')
    .replaceA("6a", '<a:6a:728160422980616223>')
    .replaceA("7a", '<a:7a:728160512457572354>')
    .replaceA("8a", '<a:8a:728160587980210258>')
    .replaceA("9a", '<a:9a:728160658041864192>')
  
  return gorunum
}

exports.run = async (client, message, args, presence) => {
const emoji = client.emojis.find(emoji => emoji.name === "hac")

if(!message.member.roles.has('643106004258652160') && !message.member.hasPermission('ADMINISTRATOR')) return message.reply(`Bu komutu kullanmağa yetkin yok`)
      let rochelle = message.mentions.users.first();

  if (!rochelle) rochelle = message.author;

 
// Tarih hesaplama son.
  const member = message.guild.member(rochelle);
  let kız = await db.fetch(`kadın.${rochelle.id}`);
  let erkek = await db.fetch(`erkek.${rochelle.id}`);
  let isimdeğiştirme = await db.fetch(`isim.${rochelle.id}`);
  let jail = await db.fetch(`devtr.jail_${rochelle.id}`);
  let mute = await db.fetch(`muted.${rochelle.id}`);
  let smute = await db.fetch(`smuted.${rochelle.id}`);


  let k_uses = ""
  let e_uses = ""
  let n_uses = "" 
  let j_uses = "" 
  let m_uses = "" 
let sm_uses = "" 

  if (!kız) {
    if (kız  === null || kız === undefined || kız === NaN)
    k_uses = 0
  } else {
  k_uses = kız
  }

  if (!erkek) {
    if (erkek === null || erkek === undefined || erkek === NaN)
    e_uses = 0
  } else {
    e_uses = erkek
  }
  
 if (!isimdeğiştirme){
if (isimdeğiştirme === null || isimdeğiştirme === undefined || isimdeğiştirme === NaN)
    n_uses = 0
  } else {
    n_uses = isimdeğiştirme
  }
 if (!jail){
if (jail === null || jail === undefined || jail === NaN)
    j_uses = 0
  } else {
    j_uses = jail
  }
  if (!mute) {
    if (mute  === null || mute === undefined || mute === NaN)
    m_uses = 0
  } else {
  m_uses = mute
  }

 if (!smute) {
    if (smute  === null || smute === undefined || smute === NaN)
    sm_uses = 0
  } else {
  sm_uses = mute
  }
let total = e_uses + k_uses
  
const rochelle1 = new Rochelle.RichEmbed()

  .setColor("0a0039")
.setThumbnail(message.author.avatarURL)
.setDescription(`
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
Toplam **${(e_uses)}** Adet Kullanıcıyı Erkek Kayıt Etmiş. 
Toplam **${(k_uses)}** Adet Kullanıcıyı Kadın Kayıt Etmiş. 
Toplam **${(n_uses)}** Adet Kullanıcının İsmini Değişmiş. 
Toplam **${(j_uses)}** Adet Kullanıcıyı Jaile Atmış. 
Toplam **${(m_uses)}** Adet Kullanıcıya Chat Mute Atmış. 
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
Toplam ${(e_uses + k_uses)} Kullanıcıyı Kayıt Etmiş 
`)
//setDescription(`**Teyit Bilgileri**\n\n \`Erkek Teyit\` : **${e_uses}**\n\n\`Kadın Teyit\` : **${k_uses}**\n\n\`ToplamTeyit\` : **${e_uses + k_uses}**\n\n**İsim Değişme**\n\n\`Toplam İsim Değişme\` : **${n_uses}** `)
.setFooter('ØɄ₮Ⱡ₳₩')
      console.log("Komut " + message.author.username + " tarafından kullanıldı.")
      message.channel.sendEmbed(rochelle1).then(m => m.delete(50000))
  
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["sicil"], 
    permLevel: 0,
};

exports.help = {
    name: 'sicilbilgi',
    usage: 'kullanımı',
    description: 'açıklama',
};