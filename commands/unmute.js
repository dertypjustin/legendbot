module.exports = {
    name: 'unmute',
    permissions: ['Admin', 'Moderator', 'IT-spezialist'],
    description: "Entmutet einen bestimmten User",
    execute(message, args, cmd, client, Discord){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Kirschen');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Mute');
    
            let memberTarget= message.guild.members.cache.get(target.id);
    
            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> wurde entmutet!`);
        } else{
            message.channel.send('Du musst einen User auswählen!');
        }
    }
}