const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
});

client.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Neuling');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('823562050667151410').send(`<@${guildMember.user.id}>, willkommen auf dem Server! Lies dir bitte zuerst die Regeln durch!`);
});

client.login(process.env.token);