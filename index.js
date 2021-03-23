require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();

const TOKEN = process.env.TOKEN;

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
return k/100;
}

bot.on('message', msg => {
	if (msg.author.bot) return;
 	if (!msg.content.startsWith("!")) return;
	const commandBody = msg.content.slice("!".length);
	const args = commandBody.split(' ');
	const command = args.shift().toLowerCase();
	if (command === "ping") {
	  const timeTaken = Date.now() - msg.createdTimestamp;
	  msg.reply(`Pong! This bot had a latency of ${timeTaken}ms.`);
	}
  
	else if (command === "intrest") {
	  const numArgs = args.map(x => parseFloat(x));
	  if(numArgs.length==3){
	  const sum = Find_Intrest(numArgs);
	  msg.reply(`The Intrest you get is $${sum}!`);}
	  else{
		  msg.reply("You need to type !rules for reading rules of how to use bot");
	  }
	}
	else if(command ==="rules") {
		msg.reply("This bot is used to calculate INTREST for your LOAN \r for finding intrest U need to type '!intrest<space>principal_amount<space>intrest%(per_year)<space>timespan(in years)' for getting ur monthly intrest\r u can also find latency using this bot, for knowing latency of bot type '!ping'");
	}
});


bot.login(TOKEN);