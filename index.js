const Discord = require('discord.js');
const config = require('/mnt/f/workspace/telegram/config.json');
const bot = new Discord.Client();

bot.once('ready', () => {
	console.log('Ready!');
});
function Find_Intrest(params)
{
	var k=1;
	for(i=0;i<3;i++)
	{
		k=params[i]*k;
	}
return k;
}

bot.on('message', msg => {
	if (msg.author.bot) return;
 	if (!msg.content.startsWith("!")) return;
	const commandBody = msg.content.slice("!".length);
	const args = commandBody.split(' ');
	const command = args.shift().toLowerCase();
	if (command === "ping") {
	  const timeTaken = Date.now() - msg.createdTimestamp;
	  msg.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
	}
  
	else if (command === "intrest") {
	  const numArgs = args.map(x => parseFloat(x));
	  const sum = Find_Intrest(numArgs);
	  msg.reply(`The Intrest you get is $${sum/100}!`);
	}
	else if(command ==="help") {
		msg.reply("YOU NEED TO GIVE THE 3 INPUTS FOR CORRECT RESULTS")
	}
});


bot.login(config.TOKEN);