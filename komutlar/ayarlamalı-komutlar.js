module.exports = {
    kod: "ayarlamalı-komutlar",
    async run (client, message, args) {
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
        
    .setTitle('Ayarlamalı-Komutlar')
    .setDescription('Ayarlamalı-Komutlar Menüsü')
    .setAuthor('Noscope')
    .setColor("RANDOM")
    .setImage('https://r.resimlink.com/TlNrRzC.jpg')
    .addField('?selam-sistemi <aç/kapat>', 'Selam Sistemini Açar/Kapatır');
    message.channel.send(embed);
    }
}
