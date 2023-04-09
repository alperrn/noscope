module.exports = {
    kod: "iletişim",
    async run (client, message, args) {
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
        
    .setTitle('İletişim')
    .setDescription('İletişim Menüsü')
    .setAuthor('Noscope')
    .setColor("RANDOM")
    .setImage('https://r.resimlink.com/TlNrRzC.jpg')
    .addField('Youtube', 'https://www.youtube.com/channel/UCcNQcsIVxgH-piFtYytoIvA?view_as=subscriber')
    .addField('Discord', '````${NoScope}`#0737```')
    message.channel.send(embed)
    }
}