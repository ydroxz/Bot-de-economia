const Discord = require("discord.js");
const config = require('../config.json');

module.exports = (client, message) => {

        if (message.author.bot) return; 
        if (message.channel.type === "dm") return; 

        if (/^<@!?730123778608201758>$/.test(message.content)) {
            let embed = new Discord.MessageEmbed()
        .setTitle("ApresentaÃ§Ã£o! :partying_face:")
        .setColor("RANDOM")
        .setDescription("OlÃ¡! Me chamo *Froid*, sou um simples bot brasileiro para o discord! [Me adicione](https://discord.com/api/oauth2/authorize?client_id=729371918301397052&permissions=0&scope=bot) <a:check:729474171876409465>")
        .addField("Veja meus comandos:", 'basta digitar `c!ajuda` para vÃª-los.')

    message.channel.send(embed);
          }

        if(!message.member.hasPermission('ADMINISTRATOR')){ 

        if(message.content.includes('discord.gg/' || 'discordapp.com/invite/')){
    
            message.delete()
                .then(message.channel.send(`${message.author}, Vocáº½ nÃ£o pode mandar convites aqui meu mano.`));
    
        }
    
        }
    
        let prefix = config.prefix; 
        var args = message.content.substring(config.prefix.length).split(" ");
        if (!message.content.startsWith(config.prefix)) return;
        let cmd = args.shift().toLowerCase();
        if (!message.content.startsWith(prefix) || message.author.bot) return;

    let command =
        client.commands.get(cmd);
    if (command) {
        command.run(client, message, args);
    } else {
        message.channel.send(
        ``
        );
    }
};