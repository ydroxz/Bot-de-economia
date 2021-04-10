const ms = require('parse-ms');
const db = require("quick.db");
const discord = require("discord.js");

exports.run = async (client, message, args) => {
  const timestamp = 86400000;
  const amount = Math.floor(Math.random() * (1000 - 500) + 500);
  let member = message.author;
  let daily = db.fetch(`daily_${message.author.id}`);
  if (daily !== null && timestamp - (Date.now() - daily) > 0) {
    let time = ms(timestamp - (Date.now() - daily));
let a = new discord.MessageEmbed()
.setTitle(`Você já coletou o seu daily hoje tente novamente em 
${time.hours}h ${time.minutes}m ${time.seconds} `)
message.reply(a);
  } else {
let b = new discord.MessageEmbed()
.setThumbnail(`https://travelpedia.com.br/wp-content/uploads/2018/09/dinheiro-icon.png`)
.setTitle(`Parabéns! Hoje você ganhou \`${amount}\` Minecoins`);
    message.reply(b);
    db.add(`dinheiro_${message.author.id}`, amount);
    db.set(`daily_${message.author.id}`, Date.now());
  }
};
exports.help = {
  name: "daily",
  aliases: ["diario",'d']
};