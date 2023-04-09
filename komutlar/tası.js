module.exports = {
    kod: "taşı",
    async run (client, message, args) {
        if (!message.member.hasPermission('MOVE_MEMBERS')) return message.channel.send('Üyeleri Taşıma Yetkin Olduğuna Eminmisin?');
        const üye = message.mentions.members.first()
        if (!üye) return message.channel.send('Birisini Etiketlemelisin.')
        if (!üye.voice.channel) return ('Bu Kişi Bir Sesli Kanalda Değil.')
        if (message.member.voice.channel) {
            message.channel.send('Başarıyla Kanala Taşındı.');
            üye.voice.setChannel(message.member.voice.channel.id)
        } else {
            if(!args[1]) return message.channel.send('Kanal İDsi Girmeyi Unuttun.')
            if(isNaN(args[1])) return message.channel.send('Lütfen Sadece İD Girin.')
            message.channel.send('Başarı İle Taşındı.');
            üye.voice.setChannel(args[1])

        }
    }
}