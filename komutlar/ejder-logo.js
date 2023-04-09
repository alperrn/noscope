const Discord = require('discord.js');
module.exports = {
  kod: 'ejder-logo',
async run (client,message,args){
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send('`Bunun İçin Herhangi Birşey Yazmalısın`')
  const linqo = `https://dynamic.brandcrowd.com/asset/logo/055241ff-dc4f-4743-90be-1c9caa0c900b/logo?v=4&text=${yazi}`
  .replace(' ', '+')

  
  const embed = new Discord.MessageEmbed()
  .setTitle("Logo Oluşturuldu")
  .setColor("RANDOM")
  .setImage(linqo)
  message.channel.send(embed)
}
}