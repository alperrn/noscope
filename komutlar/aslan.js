module.exports = {
  kod: "aslan-logo",
async run (client,message,args){
  const yazi = args.slice(0).join('+');
  const {MessageEmbed} = require('discord.js')

  if(!yazi) return message.channel.send('`Bunun İçin Herhangi Birşey Yazmalısın`')
  const linqo = `https://dynamic.brandcrowd.com/asset/logo/561917a3-4e50-48eb-ab3c-9fceed6d3ae9/logo?v=4&text=${yazi}`
  .replace(' ', '+')


  const embed = new MessageEmbed()
  .setTitle("Logo Oluşturuldu")
  .setColor("RANDOM")
  .setImage(linqo)
  message.channel.send(embed)
}
}
