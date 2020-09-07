const Discord = require('discord.js');
//const config = require('./config.json');
const { prefix, token } = require('./config.json')
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Ahoy, Admiral!')
    
    //var generalChannel = client.channels.get("744237488809181247") // Replace with known channel ID
    //generalChannel.send("Ahoy, Captain!")  
})

client.on('message', message => {
    if(message.content === `${prefix}ping`){
        // send back "Pong to the channel the message was sent from"
        message.channel.send('Pong?');
    } else if(message.content === `${prefix}beep`){
        message.channel.send('Boop!');
    } else if(message.content === `${prefix}server`){
        message.channel.send(`This server's name is: ${message.guild.name}`);
    }
})

client.login(token);