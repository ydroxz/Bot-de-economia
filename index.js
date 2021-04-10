const express = require('express');
const app = express();
app.get('/', (request, response) => {
	const ping = new Date();
	ping.setHours(ping.getHours() - 3);
	console.log(`Pai ta On 👀`);
	response.sendStatus(200);
});
app.listen(process.env.PORT); 

const Discord = require('discord.js');
const config = require("./config.json");
const fs = require('fs');
const db = require('quick.db');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
client.commands = new Discord.Collection();

client.config = config;

fs.readdir("./eventos/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      const event = require(`./eventos/${file}`);
      let eventName = file.split(".")[0];
      client.on(eventName, event.bind(null, client));
    });
  });
  
  fs.readdir("./comandos/", (err, files) => {
    if (err) console.error(err);
  
  let arquivojs = files.filter(f => f.split(".").pop() == "js");
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/${f}`);
    console.log(`${f} Funcionando!`);
    client.commands.set(props.help.name, props);
    });
  });

  fs.readdir("./comandos/economia/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let props = require(`./comandos/economia/${file}`);
      let commandName = file.split(".")[0];
      console.log(`${commandName} Iniciado`);
      client.commands.set(commandName, props);
    });
  });

  fs.readdir("./comandos/diversÃ£o/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let props = require(`./comandos/diversÃ£o/${file}`);
      let commandName = file.split(".")[0];
      console.log(`${commandName} Iniciado`);
      client.commands.set(commandName, props);
    });
  });

  fs.readdir("./comandos/sets/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let props = require(`./comandos/sets/${file}`);
      let commandName = file.split(".")[0];
      console.log(`${commandName} Iniciado`);
      client.commands.set(commandName, props);
    });
  });

  fs.readdir("./comandos/utilitÃ¡rios/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let props = require(`./comandos/utilitÃ¡rios/${file}`);
      let commandName = file.split(".")[0];
      console.log(`${commandName} Iniciado`);
      client.commands.set(commandName, props);
    });
  });

client.login(config.token);
