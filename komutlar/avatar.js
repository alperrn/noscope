module.exports = {
    kod: "avatar",
    async run (client, message, args) {
        const { MessageEmbed } = require('discord.js')
        const user = message.mentions.users.first()
if (user) {
    const embed = new MessageEmbed()
    .setTitle('Avatar Altta')
    .setImage(user.displayAvatarURL({ dynamic: true, size: 4096 }))
message.channel.send(embed)
} else {
    const embed = new MessageEmbed()
    .setTitle('Avatar Altta')
    .setImage(message.author.displayAvatarURL({ dynamic: true, size: 4096 }))
message.channel.send(embed)
}
        
    }
}