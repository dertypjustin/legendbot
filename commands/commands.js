module.exports = {
    name: 'commands',
    aliases: [],
    cooldown: 60,
    description: "Commandliste",
    execute(message, args, cmd, client, Discord){
        const EmbedCommands = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Commands')
        .setURL('https://bit.ly/3vPsHE0')
        .setDescription('Wenn du einen Command benutzen möchtest benutze den "-" Prefix!')
        .addFields(
            {name: 'rules', value: 'Zeigt eine Liste mit allen Regeln an'},
            {name: 'suggestions', value: 'Erstelle einen Vorschlag auf den alle User mit 👍 oder 👎 reagieren können'},
            {name: 'play', value: 'Spiele ein YouTube Video ab'},
            {name: 'stop', value: 'Stoppe die Wiedergabe'},
            {name: 'skip', value: 'Überspringe die Wiedergabe'},
            {name: 'image', value: 'Zeigt das beste Bild aus Google für einen bestimmten Suchbegriff an'},
            {name: 'commands', value: 'Zeigt ein Liste mit allen Commands an'}
        )

        const EmbedModCommands = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Mod-Commands')
        .setURL('https://bit.ly/3vPsHE0')
        .setDescription('Wenn du einen Command benutzen möchtest benutze den "-" Prefix!')
        .addFields(
            {name: 'clear', value: 'Löscht bis zu 100 Nachrichten aus den letzten 14 Tagen'},
            {name: 'mute', value: 'Mutet einen User auf bestimmte oder unbestimmte Zeit'},
            {name: 'unmute', value: 'Entmutet einen User'},
            {name: 'kick', value: 'Kickt einen User'},
            {name: 'ban', value: 'Bannt einen User'}
        )


        if(message.member.roles.cache.some(r=>["Admin", "Moderator", "IT-spezialist"].includes(r.name))) {
            message.channel.send(EmbedCommands);
            message.channel.send(EmbedModCommands).then((msg) => {
                message.delete();
            }).catch((err) => {
                throw err;
            });
        } else {
            message.channel.send(EmbedCommands).then((msg) => {
                message.delete();
            }).catch((err) => {
                throw err;
            });
        }
    }
}




