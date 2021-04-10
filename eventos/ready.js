module.exports = (client) => {
    console.log(`Pai ta On 👀`);

    var tabela = [

        {name: `em ${client.guilds.cache.size} servidores`, type: 'PLAYING'},
        {name: `${client.channels.cache.size} canais`, type: 'WATCHING'},
        {name: 'Spotify', type: 'LISTENING'}
    ];

    function setStatus() {
        var altstatus = tabela[Math.floor(Math.random() * tabela.legth)]
        client.user.setActivity(altstatus)
    }
    setStatus();
    setInterval(() => setStatus(), 5000)
};