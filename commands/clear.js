module.exports = {
    name: 'clear',
    aliases: ['c', 'cl'],
    permissions: ['Admin', 'Moderator', 'IT-spezialist'],
    description: "Entfernen von Nachrichten aus einem Channel",
    async execute(message, args, cmd, client, Discord){
        if(!args[0]) return message.reply("wieviele Nachrichten möchtest du löschen?");
        if(isNaN(args[0])) return message.reply("bitte wähle eine Zahl aus!");

        if(args[0] > 100) return message.reply("Du kannst nur maximal 100 Nachrichten löschen!");
        if(args[0] < 1) return message.reply("Du musst mindestens eine Nachricht löschen!");

        if(message.member.roles.cache.some(r=>["Admin", "Moderator", "IT-spezialist"].includes(r.name))) {
            await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
                message.channel.bulkDelete(messages);
            });
        } else {
            message.channel.send("Du hast nicht genügend Rechte für diesen Command!");
        }
    }
}