const Discord = require("discord.js")
const client = new Discord.Client()
const TCMB_Doviz = require('tcmb-doviz');
const Doviz = new TCMB_Doviz();


module.exports = {
  kod: "döviz",
async run (client, message, args)  {
    if(!args[0]) {
        const embed1 = new Discord.MessageEmbed()
        .setDescription(":x: Hata | Örnek Kullanım= "+ '?' + `döviz USD \n Kur Birim Kodları= \`\`USD EUR AUD DKK GBP CHF SEK CAD KWD NOK JPY SAR BGN RON RUB IRR CNY PKR QAR\`\``)
        .setColor("RED")
        message.channel.send(embed1)
    }
    if (args[0] === "USD"){
        const res = await Doviz.getKur("USD");
        const tarih = await Doviz.guncelTarih();
        let embed2 = new Discord.MessageEmbed()
        .setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL())
        .setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir ${tarih} tarihinde güncellenmiştir.`)
        .setColor("RED")
        .addField(`Alış`,res.alis)
        .addField(`Satış`,res.satis,true)
        .addField(`Birim Kodu`,res.kod,true)
        message.channel.send(embed2)
    }
   if(args[0] === "EUR"){
const res = await Doviz.getKur("EUR");
const tarih = await Doviz.guncelTarih();
let embed3 = new Discord.MessageEmbed()
.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL())
.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
.setColor("RED")
.addField(`Alış`,res.alis)
.addField(`Satış`,res.satis,true)
.addField(`Birim Kodu`,res.kod,true)
message.channel.send(embed3)
   }
   if(args[0] === "AUD"){
const res = await Doviz.getKur("AUD");
const tarih = await Doviz.guncelTarih();
let embed4 = new Discord.MessageEmbed()
.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL())
.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
.setColor("RED")
.addField(`Alış`,res.alis)
.addField(`Satış`,res.satis,true)
.addField(`Birim Kodu`,res.kod,true)
message.channel.send(embed4)
   }
   if(args[0] === "DKK"){
const res = await Doviz.getKur("DKK");
const tarih = await Doviz.guncelTarih();
let embed6 = new Discord.MessageEmbed()
.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL())
.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
.setColor("RED")
.addField(`Alış`,res.alis)
.addField(`Satış`,res.satis,true)
.addField(`Birim Kodu`,res.kod,true)
message.channel.send(embed6)
   }
   if(args[0] === "GBP"){
const res = await Doviz.getKur("GBP");
const tarih = await Doviz.guncelTarih();
let embed7 = new Discord.MessageEmbed()
.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL())
.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
.setColor("RED")
.addField(`Alış`,res.alis)
.addField(`Satış`,res.satis,true)
.addField(`Birim Kodu`,res.kod,true)
message.channel.send(embed7)
   }
   if(args[0] === "CHF"){
const res = await Doviz.getKur("CHF");
const tarih = await Doviz.guncelTarih();
let embed8 = new Discord.MessageEmbed()
.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL())
.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
.setColor("RED")
.addField(`Alış`,res.alis)
.addField(`Satış`,res.satis,true)
.addField(`Birim Kodu`,res.kod,true)
message.channel.send(embed8)
   }
   if(args[0] === "SEK"){
const res = await Doviz.getKur("SEK");
const tarih = await Doviz.guncelTarih();
let embed9 = new Discord.MessageEmbed()
.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL())
.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
.setColor("RED")
.addField(`Alış`,res.alis)
.addField(`Satış`,res.satis,true)
.addField(`Birim Kodu`,res.kod,true)
message.channel.send(embed9)
   }
   if(args[0] === "CAD"){
const res = await Doviz.getKur("CAD");
const tarih = await Doviz.guncelTarih();
let embed10 = new Discord.MessageEmbed()
.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL())
.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
.setColor("RED")
.addField(`Alış`,res.alis)
.addField(`Satış`,res.satis,true)
.addField(`Birim Kodu`,res.kod,true)
message.channel.send(embed10)
   }
   if(args[0] === "KWD"){
const res = await Doviz.getKur("KWD");
const tarih = await Doviz.guncelTarih();
let embed11 = new Discord.MessageEmbed()
.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL())
.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
.setColor("RED")
.addField(`Alış`,res.alis)
.addField(`Satış`,res.satis,true)
.addField(`Birim Kodu`,res.kod,true)
message.channel.send(embed11)
   }
   if(args[0] === "NOK"){
const res = await Doviz.getKur("NOK");
const tarih = await Doviz.guncelTarih();
let embed12 = new Discord.MessageEmbed()
.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL())
.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
.setColor("RED")
.addField(`Alış`,res.alis)
.addField(`Satış`,res.satis,true)
.addField(`Birim Kodu`,res.kod,true)
message.channel.send(embed12)
   }
   if(args[0] === "JPY"){
const res = await Doviz.getKur("JPY");
const tarih = await Doviz.guncelTarih();
let embed13 = new Discord.MessageEmbed()
.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL())
.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
.setColor("RED")
.addField(`Alış`,res.alis)
.addField(`Satış`,res.satis,true)
.addField(`Birim Kodu`,res.kod,true)
message.channel.send(embed13)
   }
   if(args[0] === "SAR"){
const res = await Doviz.getKur("SAR");
const tarih = await Doviz.guncelTarih();
let embed27 = new Discord.MessageEmbed()
.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL())
.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
.setColor("RED")
.addField(`Alış`,res.alis)
.addField(`Satış`,res.satis,true)
.addField(`Birim Kodu`,res.kod,true)
message.channel.send(embed27)
   }
   if(args[0] === "BGN"){
const res = await Doviz.getKur("BGN");
const tarih = await Doviz.guncelTarih();
let embed28 = new Discord.MessageEmbed()
.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL())
.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
.setColor("RED")
.addField(`Alış`,res.alis)
.addField(`Satış`,res.satis,true)
.addField(`Birim Kodu`,res.kod,true)
message.channel.send(embed28)
   }
   if(args[0] === "RON"){
const res = await Doviz.getKur("RON");
const tarih = await Doviz.guncelTarih();
let embed29 = new Discord.MessageEmbed()
.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL())
.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
.setColor("RED")
.addField(`Alış`,res.alis)
.addField(`Satış`,res.satis,true)
.addField(`Birim Kodu`,res.kod,true)
message.channel.send(embed29)
   }
   if(args[0] === "RUB"){
const res = await Doviz.getKur("RUB");
const tarih = await Doviz.guncelTarih();
let embed30 = new Discord.MessageEmbed()
.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL())
.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
.setColor("RED")
.addField(`Alış`,res.alis)
.addField(`Satış`,res.satis,true)
.addField(`Birim Kodu`,res.kod,true)
message.channel.send(embed30)
   }
   if(args[0] === "IRR"){
const res = await Doviz.getKur("IRR");
const tarih = await Doviz.guncelTarih();
let embed31 = new Discord.MessageEmbed()
.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL())
.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
.setColor("RED")
.addField(`Alış`,res.alis)
.addField(`Satış`,res.satis,true)
.addField(`Birim Kodu`,res.kod,true)
message.channel.send(embed31)
   }
   if(args[0] === "CNY"){
const res = await Doviz.getKur("CNY");
const tarih = await Doviz.guncelTarih();
let embed32 = new Discord.MessageEmbed()
.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL())
.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
.setColor("RED")
.addField(`Alış`,res.alis)
.addField(`Satış`,res.satis,true)
.addField(`Birim Kodu`,res.kod,true)
message.channel.send(embed32)
   }
   if(args[0] === "PKR"){
const res = await Doviz.getKur("PKR");
const tarih = await Doviz.guncelTarih();
let embed33 = new Discord.MessageEmbed()
.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL())
.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
.setColor("RED")
.addField(`Alış`,res.alis)
.addField(`Satış`,res.satis,true)
.addField(`Birim Kodu`,res.kod,true)
message.channel.send(embed33)
   }
   if(args[0] === "QAR"){
const res = await Doviz.getKur("QAR");
const tarih = await Doviz.guncelTarih();
let embed34 = new Discord.MessageEmbed()
.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL())
.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
.setColor("RED")
.addField(`Alış`,res.alis)
.addField(`Satış`,res.satis,true)
.addField(`Birim Kodu`,res.kod,true)
message.channel.send(embed34)
    }
  }
}
