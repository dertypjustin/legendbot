module.exports = {
    name: 'ban',
    description: "Banne einen bestimmten User",
    execute(client, message, args){
        const member = message.mentions.users.first();
        if(member) {
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget
            .ban()
            .then(() => {
                message.reply(`${member.tag} wurde gebannt!`);
            })
            .catch(err => {
                message.reply('Ich konnte den User nicht bannen!');
                console.log(err);
            });
        } else {
            message.channel.send('Du musst einen User auswählen!')
        }
        
    }
}