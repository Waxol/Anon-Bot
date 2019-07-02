const botSettings = require('./botsettings.json');
const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: true});

bot.login(token); 

bot.on('ready', async () => {
	console.log(`Bot en ligne ! ${bot.user.username}`);
});

bot.on('message', async message => {
	if(message.author.bot) return;
    if(message.channel.type === 'dm') {
        let messageContent = message.content
        console.log(messageContent)

        let anonChannel = bot.channels.find('id', '486116492509970433')
        anonChannel.send(messageContent)
    }
});
