module.exports = {
    kod: "bilgi",
    async run (client, message, args) {
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
        
    .setTitle('Bilgi')
    .setDescription('Bilgi Menüsü')
    .setAuthor('Noscope')
    .setColor("RANDOM")
    .setImage('https://r.resimlink.com/TlNrRzC.jpg')
    .addField('?istatistik', 'Bot Hakkında Bilgi Verir')
    .addField('?sahip', 'Botun Sahipini Ve Botun Sahibi İle Nasıl İletişim Kuracağınızı Gösterir')
    .addField('?kbilgi ', 'Etiketlenen Kişinin Bilgilerini Gösterir, Eğer Kimse Etiketlenmezse Mesajın Sahibinin Bülgileri Gösterilir')
    .addField('?destek-sw-davet', 'Botun Destek Sunucusunun Davet Linkini Atar')
    .addField('?davet', 'Botun Davet Linkini Atar');
    message.channel.send(embed);
    }
}
