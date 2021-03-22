const Discord = require('discord.js');
const config = require('/mnt/f/workspace/telegram/config.json');
const bot = new Discord.Client();

bot.once('ready', () => {
	console.log('Ready!');
});

bot.on('message', msg => {
	if (msg.content === 'ping') {
    
		msg.channel.send('Pong.');
	}
});

bot.login(config.TOKEN);