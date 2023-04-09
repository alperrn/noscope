const play = require('discordjs-ytdl')
module.exports = {
kod: "oynat",
async run (client, message, args) {
if (message.member.voice.channel){
const connection = await message.member.voice.channel.join()
play.play(connection, args.join(" "), 'AIzaSyAhXm0-x6xL7aVESmUI1HTJmLcmWuOsP5A')
   }else {
   message.reply('Lütfen Sesli Bir Kanala Katıl')
   }
}
}
