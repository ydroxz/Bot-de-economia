const Discord = require('discord.js');
const db = require('quick.db');
exports.run = async (client, message, args) => {
	let a = db.get(`marry_${message.author.id}`);
	let b = client.users.cache.get(a);
	let embed = new Discord.MessageEmbed()
		.setColor('RANDOM')
		.setTitle(`Divorce`)
		.setDescription('Você não está casado com ninguém. Para casar com algum membro basta dar: \`a!marry <@usuário>\` ');
	if (a == null) return message.channel.send(embed);
	let embed2 = new Discord.MessageEmbed()
		.setColor('RANDOM')
		.setTitle('Divorce')
		.setDescription(`${message.author.tag} se separou de ${b.tag}.`);
	message.channel.send(embed2);
	db.delete(`marry_${message.author.id}`);
	db.delete(`marry_${a}`);
};
exports.help = {
	name: 'divorce',
	aliases: ['divorciar']
};
