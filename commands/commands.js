module.exports = {
    name: 'commands',
    aliases: ['help'],
    cooldown: 60,
    description: "Commandliste",
    execute(message, args, cmd, client, Discord){
        const EmbedCommands = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Commands')
        .setURL('https://bit.ly/3vPsHE0')
        .setDescription('Wenn du einen Command benutzen möchtest benutze den "." Prefix!')
        .addFields(
            {name: 'rules, regeln, r', value: 'Zeigt eine Liste mit allen Regeln an'},
            {name: 'suggestion, vorschlag, v', value: 'Erstelle einen Vorschlag auf den alle User mit 👍 oder 👎 reagieren können'},
            {name: 'play', value: 'Spiele ein YouTube Video ab'},
            {name: 'stop', value: 'Stoppe die Wiedergabe'},
            {name: 'skip', value: 'Überspringe die Wiedergabe'},
            {name: 'image, img, bild', value: 'Zeigt das beste Bild aus Google für einen bestimmten Suchbegriff an'},
            {name: 'help, commands', value: 'Zeigt ein Liste mit allen Commands an'}
        )

        const EmbedModCommands = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Mod-Commands')
        .setURL('https://bit.ly/3vPsHE0')
        .setDescription('Wenn du einen Command benutzen möchtest benutze den "-" Prefix!')
        .addFields(
            {name: 'clear, c', value: 'Löscht bis zu 100 Nachrichten aus den letzten 14 Tagen'},
            {name: 'announcement, a', value: 'Schickt eine @everyone Nachricht in den tafelrunde chat'},
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