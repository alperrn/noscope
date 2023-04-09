const Discord = require('discord.js');
module.exports = {
  kod: 'habbo-logo',
async run (client, message, args){
  const yazi = args.slice(0).join('+'); 
  
  if(!yazi) return message.reply('`Bunun İçin Herhangi Birşey Yazmalısın`')
  if (yazi.length < 2) return message.reply("`Lütfen 1'den Fazla Harf Giriniz`")
  const linqo = `https://habbofont.net/font/habbo_new_big/${yazi}.gif`
  .replace(' ', '+')

  
  const embed = new Discord.MessageEmbed()
  .setTitle("Logo Oluşturuldu")
  .setColor("RANDOM")
  .setImage(linqo)
  message.channel.send(embed)
}
}