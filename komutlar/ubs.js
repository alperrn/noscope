const { run } = require("./istatistik");

module.exports = {
    kod: "unban",
    async run (client, message, args){
        let id = args[0]
        if (!message.member.hasPermission('BAN_MEMBERS')) return; 
        if (!message.guild.me.hasPermission('BAN_MEMBERS')) return;
        if (isNaN(id)) return message.reply('Lüfen Geçerli Bir İD Girin');
        message.guild.fetchBans().then(ban => {
            if (ban.size === 0) return message.reply('Bu Kişi Banlı Değil')
            const banlanan = ban.find(b => b.user.id === id)
            if (!banlanan) return message.reply('Bu Kişi Banlı Değil')
            message.guild.members.unban(banlanan.user)
            message.channel.send('Bu Kişinin Banı Kaldırıldı')
        }) 
 }
}