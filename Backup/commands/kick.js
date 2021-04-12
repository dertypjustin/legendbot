module.exports = {
    name: 'kick',
    description: "Kicke einen bestimmten User",
    execute(client, message, args){
        const member = message.mentions.users.first();
        if(member) {
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget
            .kick()
            .then(() => {
                message.reply(`${member.tag} wurde gekickt!`);
            })
            .catch(err => {
                message.reply('Ich konnte den User nicht kicken!');
                console.log(err);
            });
        } else {
            message.channel.send('Du musst einen User auswählen!')
        }

    }
}