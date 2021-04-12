module.exports = {
    name: 'welcome',
    description: "Command für neue User",
    execute(client, message, args){
        
        if(message.member.roles.cache.has('288780601480314881'))
        {
            message.channel.send('Du bist schon auf dem Server integriert!');
        }
        else 
        {
            message.member.roles.add('288780601480314881').catch(console.error);
            message.member.roles.remove('823577843580928020').catch(console.error);
            message.channel.send('Viel Spaß auf dem Server!');
        }
        
        
    }
}


//'288780601480314881' Kirschen
//'823577843580928020' Neuling