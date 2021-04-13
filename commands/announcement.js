module.exports = {
    name: 'announcement',
    aliases: ['a', 'ansage', 'everyone'],
    permissions: ['Admin', 'Moderator', 'IT-spezialist'],
    description: "Versendet eine @everone Nachricht",
    
    execute(message, args, cmd, client, Discord){
        const channel = message.guild.channels.cache.find(c => c.name === 'bot-raum');
        if(!channel) return message.channel.send('Der Vorschläge Channel existiert nicht!');

        let messageArgs = args.join(' ');

        if(message.member.roles.cache.some(r=>["Admin", "Moderator", "IT-spezialist"].includes(r.name))) {
            channel.send(everyone + messageArgs).then((msg) => {
                message.delete();
            }).catch((err) => {
                throw err;
            });
        } else {
            message.channel.send("Du hast nicht genügend Rechte für diesen Command!");
        }
    }
}