module.exports = {
    kod: "sahip",
    async run (client, message, args) {
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
    .setTitle('Sahip')
    .setDescription('Sahip Menüsü')
    .setAuthor('Noscope')
    .setColor("RANDOM")
    .setImage('https://r.resimlink.com/TlNrRzC.jpg')
    .addField('?iletişim', 'Sahipin İletişim Bilgilerini Gösterir')
    .addField('?öner <öneri>', 'Yazdığınız Öneriyi Sahipe İletir')
    message.channel.send(embed);
    }
}
    
