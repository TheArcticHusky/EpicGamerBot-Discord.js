const { DiscordAPIError } = require("discord.js");

module.exports = {
    name: 'sudo',
    description: "Writes specified message under bot name.",
    execute(message, args, client, commandFiles, staffCommandFiles, Discord, config){
        if (!args.length) return message.channel.send('This command requires arguments!');

        else if (args[0] === 'embed') {
            this.embed(message, args, client, commandFiles, staffCommandFiles, Discord, config);
        }
        else {
            this.empty(message);
        }
    },
    empty(message) {
        message.delete();
        message.channel.send(args.join(' '));
    },
    embed(message, args, client, commandFiles, staffCommandFiles, Discord, config ) {
        let embed = {};
        const messageFilter = m => m.author.id === message.author.id;

        const customEmbed = new Discord.MessageEmbed();
        message.reply('Enter the embed title:').then(m => m.delete({timeout: 60000}));

        message.channel.awaitMessages(messageFilter, {max: 1, time: 60000, errors: ['time']})
        .then(collected => {
            embed.title = collected.first().content;
            console.log(`A new embed has been created with title ${embed.title}`);
            collected.first().delete({timeout: 600000});
        })
        .catch(error => {
            console.error(error);
            return message.reply('Command input timed out (60 seconds)').then(m => m.delete({timeout: 10000}))
        });

            
    }
}
