module.exports = {
    kod: "ping",
    async run (client, message, args) {
        const { MessageEmbed } = require('discord.js')
        const embed = new MessageEmbed()
        .setTitle('Ping Ölçüldü')
        .addField('Botun Pingi:', client.ws.ping + 'MS')
        .addField('Mesajının Gecikmesi:', `${Date.now() - message.createdTimestamp}`)
        message.channel.send(embed)
    }
}