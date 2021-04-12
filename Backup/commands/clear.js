module.exports = {
    name: 'clear',
    description: "Entfernen von Nachrichten aus einem Channel",
    async execute(message, args){
        if(!args[0]) return message.reply("wieviele Nachrichten möchtest du löschen?");
        if(isNaN(args[0])) return message.reply("bitte wähle eine Zahl aus!");

        if(args[0] > 100) return message.reply("Du kannst nur maximal 100 Nachrichten löschen!");
        if(args[0] < 1) return message.reply("Du musst mindestens eine Nachricht löschen!");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        })
    }
}