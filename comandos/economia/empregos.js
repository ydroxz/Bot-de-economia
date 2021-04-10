const Discord = require('discord.js');
const db = require('quick.db');
const config = require('../../config.json');
const color = config.color;
exports.run = async (client, message, args) => {
	let emprego = await db.fetch(`emprego_${message.author.id}`);
	if (emprego === 1)
		return message.reply(
			`Você ja possui emprego de: \`💻 Programador\`, para trocar deve pedir demissão .`
		);
	if (emprego === 2)
		return message.reply(
			`Você ja possui emprego de: \`⛏️ Minerador\`, para trocar deve pedir demissão.`
		);
	if (emprego === 3)
		return message.reply(
			`Você ja possui emprego de: \`🛠️ Discord Staff\`, para trocar deve pedir demissão.`
		);
	if (emprego === 4)
		return message.reply(
			`Você ja possui emprego de: \`🗡️ Assasino\`, para trocar deve pedir demissão.`
		);

	let embed = new Discord.MessageEmbed()
		.setTitle('Agência de empregos:')
		.setDescription(
			`💻 » Programador.\n🛠️ » Discord Staff. \n⛏️ » Minerador.\n🗡️ » Assasino`
		)
		.setColor(color)
		.setFooter('Clique na reação determinada ao emprego.');

	message.channel.send(embed).then(msg => {
		msg.react('💻').then(() => msg.react('⛏️'));
		msg.react('🛠️').then(() => msg.react('🗡️'));

		const filter = (reaction, user) => {
			return (
				['💻', '⛏️', '🛠️', '🗡️'].includes(reaction.emoji.name) &&
				user.id === message.author.id
			);
		};
		msg
			.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
			.then(collected => {
				const reaction = collected.first();

				if (reaction.emoji.name === '💻') {
					message.reply('Parabéns, agora você trabalha como: 💻 Programador');
					db.set(`emprego_${message.author.id}`, 1);
				}

				if (reaction.emoji.name === '⛏️') {
					message.reply('Parabéns, agora você trabalha como: ⛏️ Minerador');
					db.set(`emprego_${message.author.id}`, 2);
				}

				if (reaction.emoji.name === '🛠️') {
					message.reply('Parabéns, agora você trabalha como: 🛠️ Discord Staff');
					db.set(`emprego_${message.author.id}`, 3);
				}

				if (reaction.emoji.name === '🗡️') {
					message.reply('Parabéns, agora você trabalha como: 🗡️ Assasino');
					db.set(`emprego_${message.author.id}`, 4);
				}
			})
			.catch(collected => {
				message.reply('O tempo acabou. Utilize o comando novamente');
			});
	});
};

exports.help = {
	name: 'emprego',
	aliases: ['trabalho', 'empregos']
};
 