const { MessageEmbed } = require('discord.js')
const moment = require('moment')
require('moment-duration-format')
const os = require('os')
module.exports = {
    kod: "istatistik",
    async run (client, message){
    const dizi = []
    client.guilds.cache.forEach((item, i) => {
        dizi.push(item.memberCount)
    });
    var toplam = 0
    for (var i = 0; i < dizi.length; i++) {
        if (isNaN(dizi[i])) {
            continue;
        }
        toplam += Number(dizi[i])
    }
    const uptime = moment.duration(client.uptime).format(" D [Gün], H [Saat], m [Dakika], s[Saniye]")
    const embed = new MessageEmbed()
    .setTitle('İSTATİSTİKLER')
    .addField('Kullanıcı Sayısı:', toplam)
    .addField('Sunucu Sayısı', client.guilds.cache.size)
    .addField('Çalışma Süresi', uptime)
    .addField('Node.js Sürümü', process.version)
    .addField('Ram', (process.memoryUsage().heapUsed / 1024 / 1024 ).toFixed(2))
    .addField('CPU', os.cpus().map(i => i.model)[0])
    .addField('BİT', os.arch())
    .addField('İşletim Sistemi', os.platform)
message.channel.send(embed)
  }
}