const Discord = require('discord.js')

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.command = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('vqnity is online!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.command.get('ping').execute(message, args);
        message.channel.send('20ms');
    } else if (command == 'youtube'){
        message.channel.send('https://www.youtube.com/goliath');
    }
});

client.login('InsertBotTokenHere');
