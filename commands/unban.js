module.exports = {
    name: 'unban',
    permissions: ['Admin', 'Moderator', 'IT-spezialist'],
    description: "Entanne einen bestimmten User",
    execute(message, args, cmd, client, Discord){
        const member = message.mentions.users.first();
        if(member) {
            //const memberTarget = message.guild.members.cache.get(member.id);
            let memberTarget = message.guild.members.cache.get(member.id);
            memberTarget
            .unban(member.id)
            .then(() => {
                message.reply(`${member.tag} wurde entbannt!`);
            })
            .catch(err => {
                message.reply('Ich konnte den User nicht entbannen!');
                console.log(err);
            });
        } else {
            message.channel.send('Du musst einen User auswählen!')
        }
        
    }
}