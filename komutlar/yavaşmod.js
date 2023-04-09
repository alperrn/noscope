module.exports = {
    kod: "yavaşmod",
    async run (client, message, args){
        const ms = require('rhino-ms')
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bunu Yapamazsın!')
        const zaman = ms(args.join(" "), {birim: "saniye"})
        if (zaman > 21600 || zaman < 1) return message.channel.send('Lütfen 1 İle 6 Saat Arası Bir Değer Giriniz')
        const yavaşmod = Math.floor(zaman)
        message.channel.setRateLimitPerUser(yavaşmod)
        message.channel.send('Bu Kanalı ' + args.join(" ") + 'süre yavaşmoda aldım')
    }
}