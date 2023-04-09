const Discord = require('discord.js');
module.exports = {
  kod: 'alev-logo',
async run (client,message,args){
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send('`Bunun İçin Herhangi Birşey Yazmalısın`')
  const linqo = `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=flame-logo&text=${yazi}`
  .replace(' ', '+')

  
  const embed = new Discord.MessageEmbed()
  .setTitle("Logo Oluşturuldu")
  .setColor("RANDOM")
  .setImage(linqo)
  message.channel.send(embed)
}
}