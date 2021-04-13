module.exports = {
    name: 'announcement',
    aliases: ['a', 'ansage', 'everyone'],
    permissions: ['Admin', 'Moderator', 'IT-spezialist'],
    description: "Versendet eine @everone Nachricht",
    execute(message, args, cmd, client, Discord){
        message.channel.send('@everyone');
    }
}