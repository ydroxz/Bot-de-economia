const discord = require ('discord.js')
const config = require ('../../config.json')
const db = require('quick.db'); // Puxando a nossa Database *Instale utilizando: npm i quick.db --save
const color = config.color
exports.run = async (client, message, args) => {
  
  let saldo = await db.get(`dinheiro_${message.author.id}`) // puxando o 'dinheiro' armazenado na database
  
  //essa função, custará 3500 para ser efetuada!
  if (saldo < 3500) return message.reply('para pedir demissão, você necessita de **R$ 5000**!') // caso o usuário não possua, daremos o erro
 
 let emprego = await db.get(`emprego_${message.author.id}`) // Puxando o 'emprego', no caso, o trabalho que o usuário escolheu no outro arquivo

if (emprego === null) { // caso o 'emprego' seja null, ou seja, sem, iremos avisar que ele precisa ter um emprego
    message.channel.send('Você não possui um emprego para demissão...')
  }
  if (emprego === 1) { // No arquivo para escolher um trabalho, definimos que 1 é igual à um Programador... Então, vamos fazer uma mensagem bonita
    message.channel.send(`Olá **${message.author.username}**, você realmente se demitir do cargo de Programador? Você pagara uma multa de **R$ 5000**`).then(msg => {

    msg.react('✅').then(() => msg.react('❌')) // Com a função 'then', definimos duas reações

    const filter = (reaction, user) => { // puxamos um filtro para o usuário que clicou
      return ['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id; // verificamos se o ID do usuário que clicou, é igual ao do autor do comando
    };
    
    msg.awaitReactions(filter, {max: 1}) // retornando com a reação que puxamos acima
    
      .then(collected => { // mais uma função 'then', nomeada de 'collected' para definirmos que foi coletado
      
        const reaction = collected.first();
    
        if (reaction.emoji.name === '✅') { // caso o usuário clique no emoji referente à correto, iremos fazer a ação
          message.reply('você pediu demissão com sucesso!'); 
          
          db.delete(`emprego_${message.author.id}`, 1) // removendo do 'emprego' da database, que é definido como Programador
          
          db.subtract(`dinheiro_${message.author.id}`, 5000) // removendo do 'dinheiro' da database
        } else { // ou, caso o usuário clique no outro emoji, referente à errado, iremos cancelar
         message.reply('cancelado com sucesso.')
         }
      })
    })
  }
  if (emprego === 2) { // agora, o emprego dois, que é o Designer
    message.channel.send(`Olá **${message.author.username}**, você realmente se demitir do cargo de Minerador? Você pagara uma multa de **R$ 5000**`).then(msg => {

    msg.react('✅').then(() => msg.react('❌')) // com a função tem denovo, iremos adicionar as mesmas reações

    const filter = (reaction, user) => { // criando um filtro sobre quem clicou
      return ['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id; // e verificando se o id do usuário que clicou, é igual ao id do usuário que puxou o comando
    };
    
    msg.awaitReactions(filter, {max: 1}) // retornando com as reações
      .then(collected => { // e mais uma função then, que vai ser como o collected acima
        const reaction = collected.first(); 
    
        if (reaction.emoji.name === '✅') { // caso o usuário clique no emoji referente à correto, iremos fazer a ação
          message.reply('você pediu demissão com sucesso!');
          db.delete(`emprego_${message.author.id}`, 2) // deletando o 'trabalho', na database que define o emprego Designer (2)
          db.subtract(`dinheiro_${message.author.id}`, 5000) // removendo do 'dinheiro' na database
        } else { // caso ele clique no outro emoji, daremos como cancelado
         message.reply('cancelado com sucesso.')
         }
      })
    })
  }
if (emprego === 3) { // agora, o emprego dois, que é o Designer
    message.channel.send(`Olá **${message.author.username}**, você realmente se demitir do cargo de Discord Staff? Você pagara uma multa de **R$ 5000**`).then(msg => {

    msg.react('✅').then(() => msg.react('❌')) // com a função tem denovo, iremos adicionar as mesmas reações

    const filter = (reaction, user) => { // criando um filtro sobre quem clicou
      return ['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id; // e verificando se o id do usuário que clicou, é igual ao id do usuário que puxou o comando
    };
    
    msg.awaitReactions(filter, {max: 1}) // retornando com as reações
      .then(collected => { // e mais uma função then, que vai ser como o collected acima
        const reaction = collected.first(); 
    
        if (reaction.emoji.name === '✅') { // caso o usuário clique no emoji referente à correto, iremos fazer a ação
          message.reply('você pediu demissão com sucesso!');
          db.delete(`emprego_${message.author.id}`, 3) // deletando o 'trabalho', na database que define o emprego Designer (2)
          db.subtract(`dinheiro_${message.author.id}`, 5000) // removendo do 'dinheiro' na database
        } else { // caso ele clique no outro emoji, daremos como cancelado
         message.reply('cancelado com sucesso.')
         }
      })
    })
  }
if (emprego === 4) { // agora, o emprego dois, que é o Designer
    message.channel.send(`Olá **${message.author.username}**, você realmente se demitir do cargo de Assasino? Você pagara uma multa de **R$ 5000**`).then(msg => {

    msg.react('✅').then(() => msg.react('❌')) // com a função tem denovo, iremos adicionar as mesmas reações

    const filter = (reaction, user) => { // criando um filtro sobre quem clicou
      return ['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id; // e verificando se o id do usuário que clicou, é igual ao id do usuário que puxou o comando
    };
    
    msg.awaitReactions(filter, {max: 1}) // retornando com as reações
      .then(collected => { // e mais uma função then, que vai ser como o collected acima
        const reaction = collected.first(); 
    
        if (reaction.emoji.name === '✅') { // caso o usuário clique no emoji referente à correto, iremos fazer a ação
          message.reply('você pediu demissão com sucesso!');
          db.delete(`emprego_${message.author.id}`, 4) // deletando o 'trabalho', na database que define o emprego Designer (2)
          db.subtract(`dinheiro_${message.author.id}`, 5000) // removendo do 'dinheiro' na database
        } else { // caso ele clique no outro emoji, daremos como cancelado
         message.reply('cancelado com sucesso.')
         }
      })
    })
  }
}

exports.help = {
  name: 'demissão',
  aliases: ['demissao']
}