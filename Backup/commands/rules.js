module.exports = {
    name: 'rules',
    description: "Regelliste",
    execute(client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Regeln')
        .setURL('https://bit.ly/3vPsHE0')
        //.setDescription('Serverregeln')
        .addFields(
            {name: '1 Beleidigungen', value: 'Beleidigungen oder Schimpfwörter sind auf diesem Server nicht erwünscht, und werden mit Strafen geahndet'},
            {name: '2 Erscheinungsbild', value: 'Avatare, Nicknamen und Beschreibungnen dürfen keine pornographischen, rassitischen oder beleidigenden Inhalte beinhalten'},
            {name: '3 Umgangston', value: 'Sei freundlich zu anderen Usern, Verbale Angriffe sind strengst untersagt'},
            {name: '4 Rechte', value: 'Admin-, sowie Mod-Rechte werden nur an vertrauenswürdige Personen vergeben'},
            {name: '5 Weisungsrecht', value: 'Den Anweisungen von Admins und Mods sind Folge zu leisten. Anderfalls droht ein Timeout, Kick oder sogar Bann'},
            {name: '6 Datenschutz', value: 'Private Daten, wie Telefonnummern, Adressen, Passwörtern, usw. dürfen nicht öffentlich ausgetauscht werden.'}

        )
        .setImage('https://static.wikia.nocookie.net/dogelore/images/0/0c/Monky.png/revision/latest/top-crop/width/360/height/450?cb=20190622222808')
        .setFooter('Wenn du mit den Regeln einverstanden bist, gib im Chat einfach "-welcome" ein');

        message.channel.send(newEmbed);
    }

}