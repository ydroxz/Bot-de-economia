const db = require('quick.db')
const ms = require('parse-ms') 

exports.run = async (client, message, args) => {

let assasin = ['Matou seu alvo','Cumpriu com seu contrato']
let dcstaff = ['Corrigiu um bug','Baniu um bot de spam','Respondeu a uma dúvida','Baniu um membro que quebrava regras']    
let programmer = ['BOT para discord', 'aplicativo para celular', 'comandos para seu bot', 'desenvolveu um jogo para celular', 'um site para sua empresa']
let miner = ['Ouro', 'Diamante', 'Ruby', 'Esmeralda', 'Ametista', 'Ferro', 'Quartzo'] 

    let timeout = 1.8e+7 // Definindo um tempo para utilizar o comando, no caso desse, 5 horas (em milisegundos)
    let quantia = Math.floor(Math.random() * 1000) + 400; // Definindo quanto o usuário pode ganhar 
    let trabalho = await db.get(`work_${message.author.id}`); // Puxando da DataBase o 'work', que vai definir que o mesmo trabalhou

    if (trabalho !== null && timeout - (Date.now() - trabalho) > 0) { // Puxando o trabalho e iremos dar o timeout
     let time = ms(timeout - (Date.now() - trabalho)); // Definindo que 'time' será os tempos
      
      message.channel.send(`Você ja trabalhou recentemente.\nVocê podera trabalhar novamente em: **${time.hours}h ${time.minutes}m ${time.seconds}s**`)
   
     } else {
        let emprego = await db.get(`emprego_${message.author.id}`) 
        if (emprego === null) { 
          return message.reply(`Para poder trabalhar você deve possuir um emprego utilize: \`l!emprego\`.`)
        } else {
          
        }
        if (emprego === 1) {                                     
          message.channel.send(`💻 Você programou um: **${programmer[Math.floor(Math.random() * programmer.length)]}** na venda você recebeu: **R$ R$ ${quantia} minecoins**`)
          db.add(`dinheiro_${message.author.id}`, quantia) 
          db.set(`work_${message.author.id}`, Date.now())  
       } 
       
        if (emprego === 2) {                                     
          message.channel.send(`⛏️ Você minerou um: **${miner[Math.floor(Math.random() * miner.length)]}** na venda você recebeu: **R$ ${quantia} minecoins**`)
          db.add(`dinheiro_${message.author.id}`, quantia) 
          db.set(`work_${message.author.id}`, Date.now()) 
       }
       if (emprego === 3) {                                     
          message.channel.send(`Você: **${dcstaff[Math.floor(Math.random() * dcstaff.length)]}** e como recompensa recebeu: **R$ ${quantia} minecoins**`)
          db.add(`dinheiro_${message.author.id} `, quantia) 
          db.set(`work_${message.author.id}`, Date.now()) 
     }
   
       if (emprego === 4) {                                     
          message.channel.send(`🗡️ Você: **${assasin[Math.floor(Math.random() * assasin.length)]}** e como recompensa recebeu: **R$ ${quantia} minecoins**`)
          db.add(`dinheiro_${message.author.id}`, quantia) 
          db.set(`work_${message.author.id}`, Date.now()) 
   }
  }
}

exports.help = {
    name: 'trabalhar',
    aliases: ['work','w']
}