var Scraper = require('images-scraper');

const google = new Scraper({
    puppeteer: {
        headless:true
    }
});

module.exports = {
    name: 'image',
    aliases: ['img', 'bild'],
    permissions: [],
    description: 'suche nach einem Bild auf Google',
    async execute(message, args, cmd, client, Discord){
        const image_query = args.join(' ');
        if(!image_query) return message.channel.send('Du musst noch einen Begriff wählen nach dem du suchen willst!');

        const image_results = await google.scrape(image_query, 1);
        message.channel.send(image_results[0].url);
    }
}