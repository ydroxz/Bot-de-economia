const Discord = require('discord.js');
const db = require('quick.db');
const config = require ("../../config.json");
const color = config.color

exports.run = (client, message, args) => {
  let member = message.mentions.users.first() || message.author;
  let saldo = db.get(`dinheiro_${member.id}`)
  if (saldo === null) saldo = 0;
  let saldob = db.get(`banco_${member.id}`)
  if (saldob === null) saldob = 0;


  let embed = new Discord.MessageEmbed()
  .setTitle(`Minecoins de \`${member.username}\`.`)
  .addField(`💵 » Carteira:`,`${saldo} minecoins.`)
  .setThumbnail(`https://cdn.pixabay.com/photo/2018/10/03/11/31/wallet-3721156_960_720.png`)
  .setColor(`${color}`)
  .setTimestamp()
  message.channel.send(`<@${member.id}>`, embed)
}

exports.help = {
  name: "carteira",
  aliases: ["atm",'coins','balance','money','banco','bank','saldo','b',`bal`]
}