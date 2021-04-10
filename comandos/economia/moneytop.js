const Discord = require(`discord.js`);
const db = require('quick.db');
const config = require ("../../config.json");
const color = config.color

exports.run = async (client, message, args) => {
		let money = db
			.all()
			.filter(data => data.ID.startsWith(`dinheiro`))
			.sort((a, b) => b.data - a.data);
		money.length = 10;
		var finalLb = '';
		for (var i in money) {
			finalLb += `**${money.indexOf(money[i]) + 1}. ${
				client.users.cache.get(money[i].ID.split('_')[1])
					? client.users.cache.get(money[i].ID.split('_')[1]).tag
					: 'Unknown User#0000'
			}** - ${money[i].data}:dollar:\n`;
		}
		

		const embed = new Discord.MessageEmbed()
			.setTitle(`Top 10 money.`)
			.setColor(`${color}`)
			.setDescription(finalLb)
		message.channel.send(embed);
	}
  exports.help = {
	name: 'moneytop',
	aliases: ['baltop']
};