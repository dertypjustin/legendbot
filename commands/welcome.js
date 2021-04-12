module.exports = {
    name: 'welcome',
    aliases: ['w'],
    description: "Command für neue User",
    execute(message, args, cmd, client, Discord){
        if(message.member.roles.cache.some(r=>["Neuling"].includes(r.name)) ) {
            if(message.member.roles.cache.has('288780601480314881'))                            //Kirschen
            {
                message.channel.send('Du bist schon auf dem Server integriert!');
            }
            else 
            {
                message.member.roles.add('288780601480314881').catch(console.error);            //Kirschen
                message.member.roles.remove('823577843580928020').catch(console.error);         //Neuling
                message.channel.send('Viel Spaß auf dem Server!');
            }
        } else {
            message.channel.send('Du hast die Regeln schon akzeptiert!');
        }
    }
}