module.exports = () => {
    console.log('LegendBot ist jetzt online!');
    client.user.setPresence({
        activity: {
            status: 'online',
            name: '.help'
        }
    });
}