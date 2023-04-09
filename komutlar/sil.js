module.exports = {
    kod: "sil",
    async run (client, message, args){
        if (!message.member.hasPermission('ADMINISTRATOR')) return;
        if (isNaN(args)) return message.reply('Lütfen Sayı Girin');
        if (args < 2 || args > 100) return message.reply('lütfen 2 ile 100 arasında bir sayı girin');
        message.channel.bulkDelete(Number(args))
        const { MessageEmbed } = require('discord.js')
        const embed = new MessageEmbed()
        .setTitle('Mesajlar Başarıyla Silindi')
        .setDescription('Silinen Mesaj Sayısı ' + args)
        message.channel.send(embed).then(mesaj => {
setTimeout(function () {
message.delete()
         }, 5000);
        })
    }
}
