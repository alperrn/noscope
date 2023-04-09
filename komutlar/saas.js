const Discord = require("discord.js");
const db = require("wio.db");


module.exports = {
kod: "selam-sistemi",
async run (client, message, args) {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.reply(
      new Discord.MessageEmbed()
        .setColor("BLACK")
        .addField(
          "**Hata**",
          `\`?selam-sistemi aç/kapat\`Kullanabilmek için , \`Yönetici\` **Yetkisine sahip olmanız gerekir**.`
        )
        
    );

  const codeuniverse = args.join(` `);

  if (!codeuniverse)
    message.channel.send(
      new Discord.MessageEmbed()

        .setTitle(`Doğru Kullanım`)
        .setDescription(
          `**Sa-As Sistemini Çalıştırmak İçin** ; \n\`?selam-sistemi aç\` **Veya** \`?selam-sistemi kapat\` **Yazınız**!`
        )
        .setColor("RED")
    );

  if (codeuniverse === "aç") {
    db.set(`sa-as_${message.guild.id}`, `acik`);
    message.channel.send(
      new Discord.MessageEmbed()
        .setTitle(`Başarılı`)
        .setDescription(
          `**Bundan Sonra** \`sa\` **Yazıldığında** \`as\` **Diye Cevap Vereceğim.**`
        )
        .setColor("GREEN")
    );
  } else if (codeuniverse === "kapat") {
    db.set(`sa-as_${message.guild.id}`, `kapali`);
    message.channel.send(
      new Discord.MessageEmbed()
        .setTitle(`Başarılı`)
        .setDescription(
          `Bundan Sonra **sa** Yazıldığında **as** Diye Cevap Vermeyeceğim.`
        )
        .setColor("GREEN")
    );
  }
 }
};