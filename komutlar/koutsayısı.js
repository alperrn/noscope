const Discord = require('discord.js')

module.exports = {
kod: "komut-sayısı",
async run (client, message, args) {

message.channel.send(`Anlık Komut Sayımız ${client.command.size}`)

}
}
