module.exports = {
    name: 'suggestions',
    aliases: ['suggest', 'suggestion', 'vorschlag', 'v'],
    permissions: [],
    description: 'Erstelle einen Vorschlag',

    execute(message, args, cmd, client, discord){
        const channel = message.guild.channels.cache.find(c => c.name === 'tafelrunde');
        if(!channel) return message.channel.send('Der Vorschläge Channel existiert nicht!');

        let messageArgs = args.join(' ');
        const embed = new discord.MessageEmbed()
        .setColor('FADF2E')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
        .setDescription(messageArgs);

        channel.send(embed).then((msg) => {
            msg.react('👍');
            msg.react('👎');
            message.delete();
        }).catch((err) => {
            throw err;
        });
    }
}