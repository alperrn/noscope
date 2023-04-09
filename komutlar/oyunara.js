module.exports = {
    kod: "oyunara",
    async run (client, message, args) {
        const game = args[0]
        const nott = message.content.split(' ').slice(2)
        const not = nott.join(" ")
        if (message.member.voice.channel) {
const Discord = require('discord.js')
const embed = new Discord.MessageEmbed()
.setTitle(`OYUN ARIYOR: **${message.author.tag}**`)
.setColor("RANDOM")
.addField("Oyun:", `${game}`)
.addField('Sesli Kanal:', `${message.member.voice.channel}`)
.addField('NOT:', `${not}`);
message.channel.send(embed)
        }else{
message.reply('Önce Sesli Kanala Katıl')
        }
    }
}


