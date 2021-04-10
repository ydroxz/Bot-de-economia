const db = require('quick.db');
const Discord = require('discord.js');

exports.run = async (client, message, args) => {
	let user = message.mentions.members.first();
	let targetuser = await db.fetch(`dinheiro_${user.id}`);
	let author = await db.fetch(`dinheiro_${message.author.id}`); 

	if (!user) {
		return message.channel.send(
			'Desculpe, você se esqueceu de mencionar alguém.'
		);
	}
	if (author < 250) {
		
		return message.channel.send(
			'<:error:759104378048872478> Você precisa de pelo menos 250 $ para roubar alguém.'
		);
	}

	if (targetuser < 250) {
			return message.channel.send(
			`<:error:759104378048872478> ${user.user.username}, não tem nada para roubar.`
		);
	}

	let random = Math.floor(Math.random() * 200) + 1; 
	let embed = new Discord.MessageEmbed()
		.setDescription(
			`${message.author} você roubou ${user} e fugiu com ${random}!`
		)
		.setColor('RANDOM')
		.setTimestamp();
	message.channel.send(embed);

	db.subtract(`dinheiro_${user.id}`, random);
	db.add(`dinheiro_${message.author.id}`, random);
};
exports.help = {
	name: 'roubar'
};
