module.exports = {
    name: 'announcement',
    aliases: ['a', 'ansage', 'everyone'],
    permissions: ['Admin', 'Moderator', 'IT-spezialist'],
    description: "Versendet eine @everone Nachricht",
    
    execute(message, args, cmd, client, Discord){
        const channel = message.guild.channels.cache.find(c => c.name === 'tafelrunde');
        if(!channel) return message.channel.send('Der Vorschläge Channel existiert nicht!');

        let messageArgs = args.join(' ');
        let everyone = '@everyone ';

        channel.send(everyone + messageArgs).then((msg) => {
            message.delete();
        }).catch((err) => {
            throw err;
        });
    }
}

/*
    execute(message, args, cmd, client, Discord){
        message.channel.send('@everyone');
    }
*/