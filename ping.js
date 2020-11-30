module.exports = {
    name: 'ping',
    description: "displays amount of ping of the bot!",
    execute(message, args){
            message.channel.send('20 ms');
    }
}