const Discord = require('discord.js')

module.exports = {
    kod: "kanalkilitaç",
    async run (client, message, args) {
        if(!message.member.hasPermission('782286411281858570')) return;
//FroLenk
let channel = message.mentions.channels.first() || message.channel;
message.channel.send(`Kanal ${channel} kilidi açıldı.`).then(m => m.delete({timeout: 7000}));

let everyone = message.guild.roles.cache.find(a => a.name === '@everyone');
channel.updateOverwrite(everyone, { 'SEND_MESSAGES': null }, 'Açan '+message.author.tag);
channel.send(new Discord.MessageEmbed()
.setColor('GREEN')
.setTitle(channel.name+' kilidi açıldı.')
);
    }
}