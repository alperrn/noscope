const Discord = require('discord.js') // discord.js modülü tanımlıyoruz.
const client = new Discord.Client() // client tanımalamsı
const { readdirSync } = require('fs'); // tanımlamalar
const { join } = require('path'); // tanımlamalar
const { Cleint, MessageEmbed } = require('discord.js');
const db = require('wio.db')

client.commands= new Discord.Collection(); // komutları alıyoruz

const prefix = "?"

const commandFiles = readdirSync(join(__dirname, "komutlar")).filter(file => file.endsWith(".js")); // Belli bir klasörden belli .js uzantılı dosyaları buluyor.

for (const file of commandFiles) {
    const command = require(join(__dirname, "komutlar", `${file}`));
    client.commands.set(command.kod, command); // Komutları Ayarlıyo?yardımruz.
}
client.on("error", console.error);

client.on('ready', () => {
    console.log('Botumuz Aktif')
    const durumlar = [
      "?yardım",
      `${client.guilds.cache.size} Sunucuda`
    ]

setInterval(function () {
  let durum = durumlar[Math.floor(Math.random()*durumlar.length)]
  client.user.setActivity(durum)
}, 5000);

});

client.on("message", async message => {

    if(message.author.bot) return;

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();

        if(!client.commands.has(command)) return;


        try {
            client.commands.get(command).run(client, message, args);

        } catch (error){
            console.error(error);
        }
    }
})

client.on('message', message => {
  if (message.content.toLowerCase() === '?yardım') {
    const kanal = new MessageEmbed()

    .setTitle('Yardım')
    .setDescription('Yardım Menüsü')
    .setAuthor('Noscope')
    .setColor("RANDOM")
    .setImage('https://r.resimlink.com/TlNrRzC.jpg')
    .addField('?yetkili', 'Yetkililere Özel')
    .addField('?bilgi', 'Bilgi Komutları')
    .addField('?eğlence', 'Eğlence Komutları')
    .addField('?normal', 'Uyelere Ozer')
    .addField('?vote', 'Bize Destek Olabilirsiniz');
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === '?normal') {
    const kanal = new MessageEmbed()

    .setTitle('Normal')
    .setDescription('Üye Menüsü')
    .setAuthor('Noscope')
    .setThumbnail('https://r.resimlink.com/Vsx.png')
    .setImage('https://r.resimlink.com/TlNrRzC.jpg')
    .setColor("RANDOM")
    .addField('?avatar', 'kişinin avatarını gösterir')
    .addField('?oylama', 'Oylama Oluşturur')
    .addField('?hava <şehir>', 'Hava Durumunu Gösterir')
    .addField('?döviz <birim>', 'Dövizi Gösterir')
    .addField('?roller', 'Sunucudaki Rolleri Gösterir')
    .addField('?yetkim ', 'Yetkilerini Gösterir')
    .addField('?istatistik', 'Botun Ve Yapımcısının İstatistiklerini Gösterir');
    message.channel.send(kanal);
  }
});

client.on('guildCreate', async guild => {
  const yenisunucu = new Discord.MessageEmbed()
  .setTitle('Yeni Sunucu')
  .setDescription('Sunucu Adı: ' + '`' + guild.name + '`')
  .addField('Sunucu Sahibi', guild.owner.tag)
  .addField('Kişi Sayısı', '`' + guild.memberCount + '`')
  const channel = client.channels.cache.find(ch => ch.id === '783756660833255464')
  channel.send(yenisunucu)
})

client.on('guildDelete', async guild => {
  const atıldım = new Discord.MessageEmbed()
  .setTitle('Bir Sunucudan Atıldım')
  .setDescription('Sunucu Adı: ' + '`' + guild.name + '`')
  .addField('Sunucu Sahibi', guild.owner.tag)
  .addField('Kişi Sayısı', '`' + guild.memberCount + '`')
  const channel = client.channels.cache.find(ch => ch.id === '783756660833255464')
  channel.send(atıldım)
})

client.on('message', message => {
  if (message.content.toLowerCase() === '?eğlence') {
    const kanal = new MessageEmbed()

    .setTitle('Eğlence')
    .setDescription('Eğlence Menüsü')
    .setAuthor('Noscope')
    .setThumbnail('https://r.resimlink.com/Vsx.png')
    .setImage('https://r.resimlink.com/TlNrRzC.jpg')
    .setColor("RANDOM")
    .addField('?espiri', 'Botun Ve Yapımcısının İstatistiklerini Gösterir')
    .addField('?köpek', 'Köpek Resimleri Atar')
    .addField('?kedi', 'Kedi Resimleri Atar')
    .addField('?habbo-logo <logosu-olacak-kelime>', 'Habbo Logo Oluşturur')
    .addField('?ejder-logo <logosu-olacak-kelime>', 'Ejder Logo Oluşturur')
    .addField('?alev-logo <logosu-olacak-kelime>', 'Alev Logo Oluşturur')
    .addField('?düello <Vs Atılacak Kişi>', 'Düello Yapar')
    .addField('?mckazanım <Yazdıracağın Yazı>', 'Mc Yazısı Kazanım Yazısı Yazar')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === '?espiri') {
    var Espiris1 = [
'**Saçını sarıya boyatıp kaşlarını zift karası bırakınca doğal sarışın olmuyorsun tatlım. Borussia Dortmund deplasman forması gibi oluyon.**',
'**Acıkan var mı ya? -Yok bizde tatlı kan var.**',
'**Yeni yapılmış resimlere ne denir? -Nev resim.**',
'**Masada hangi örtü kullanılmaz? - Bitki Örtüsü.**',
'**Yılanlardan korkma, yılmayanlardan kork.**',
'**İnsanların seni ezmesine izin verme; Ehliyet al, sen onları ez...**',
'**Gülümse... yarın daha kötü olacak..**',
'**Elektriği Edison buldu ama parasını niye biz ödüyoruz.**',
'**Abi sen tüp bebek misin? -- Gaz kaçırıyorsun da.**',
'**Pişmemiş burgere ne denir? -- Hamburger.**',
'**Dört tarafı suyla çevrili çaya ne denir? -- Adaçayı.**',
'**Bütün umutlarım suya düştü. Âmâ boğulmadılar. Çünkü onlara yüzme öğretmiştim**',
'**İyi günler, Aslıyla görüşebilir miyim? Aslı evde yok! Fotokopisi var!**',
'**Bu gece seni kınıyorum, çünkü kına gecesi.**',
'**İzne çıkacam ama çok yüksek merdiven lazım.**',
'**Sinirlenince telefonu yavaşça yere bırakıp kendimi son sürat duvara fırlatıyorum.**',
'**Geçen gün bir espri patlattım 1 ölü, 2 si ağır yaralı arkadaşı hastaneye kaldırdık.**',
'**Hapis yatmışım, ha temiz.. ne fark eder.**',
'**Basamakta durmayın otomatik kapı çarpar, böler, karekökünü alır.**',
'**Hayırlı olsun Araba almışsın. Evet aldık. Niye Araba aldın ki kendine alsaydın.**',
'**Çok Makbule geçti şimdi de Fatma geçiyor.**',
'**Yerin kulağı vardır benim de kulağım var.O zaman ben yer miyim? Yemem**.',
'**Alinin selamı var.Hangi Ali? Şehirlerarası Otobüs termin-ali**',
'**Abi sana Sıla nın selamı var. Hangi Sıla? Gayri Safi Milli HaSıla**'
    ];

    var soğuk1 = Math.floor(Math.random()*Espiris1.length);
    const embed = new MessageEmbed()
    .setTitle('Espiriler')
    .setColor("GREEN")
    .addField('Espiri', `${Espiris1[soğuk1]}`);
    message.channel.send(embed)
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === prefix + 'kedi') {
    var Kedi = [
      'https://static.birgun.net/resim/haber-detay-resim/2018/11/23/en-konuskan-kedi-turu-hangisi-534086-5.jpg',
      'https://ichef.bbci.co.uk/news/640/cpsprodpb/16FA9/production/_92712149_gettyimages-480164327.jpg',
      'https://i.pstimaj.com/img/75/0x0/5e005526ae298bb7c81bc54f.jpg',
      'data:image/jpeg;base64,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',
      'data:image/jpeg;base64,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',
      'https://netsaglik.com/wp-content/uploads/2019/10/Gatoterapi-tedavisi.jpg'

    ];
    var kedı = Math.floor(Math.random()*Kedi.length);
    message.channel.send(`${Kedi[kedı]}`)
  }
})

client.on('message', message => {
  if (message.content.toLowerCase() === prefix + 'köpek') {
    var Köpek = [
      'https://cdn1.newsner.com/attachments/images/000/261/980/newsner_default/hund7.jpg?1477574374%27',
      'https://cdn1.newsner.com/attachments/images/000/261/983/newsner_default/hund9.jpg?1477574479',
      'https://cdn1.newsner.com/attachments/images/000/261/992/newsner_default/hund15.jpg?1477576263%27',
      'https://cdn.discordapp.com/attachments/783387915027873833/783403495511425035/images.png',
      'https://media.tenor.com/images/9352bddb66c60c3eba4f7d3254c595f0/tenor.gif'
    ];
    var köpek = Math.floor(Math.random()*Köpek.length);
    message.channel.send(`${Köpek[köpek]}`)
  }
})

client.on("message", message => {
  if (message.content.startsWith('?oylama')) {
     const args = message.content.split(' ').slice(1)
     const botmesajı = args.join(" ")
     const embed = new MessageEmbed()
     .setTitle('Oylama')
     .setDescription(botmesajı)
     message.channel.send({ embed: embed}).then( embedMessage => {
       embedMessage.react("✅")
       embedMessage.react("❌")
     })
  }
})

client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('?kick')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bunu yapamazsın')
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick()
          .then(() => {
          const log = message.guild.channels.cache.find(channel => channel.name === '📜│log-kanalı')
           log.send(`${user.tag} kişisi kicklenmiştir`);
          })
          .catch(err => {
            message.reply('Atılmış mı Bi Kontrol Et.');
            console.error(err);
          });
      } else {
        message.reply("Bahsettiğin kişi bizim sunucuda bulunmuyor");
      }
    } else {
      message.reply("Atılacak kişiyi yazmadın");
    }
  }
});

client.on('message', message => {
  if (!message.guild) return;
if (message.content.startsWith('?ban')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bunu yapamazsın')
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban()
          .then(() => {
          const log = message.guild.channels.cache.find(channel => channel.name === '📜│log-kanalı')
           log.send(`${user.tag} kişisi banlanmıştır.`);
          })
          .catch(err => {
            message.reply('Atılmış mı Bi Kontrol Et.');
            console.error(err);
          });
      } else {
        message.reply("Bahsettiğin kişi bizim sunucuda bulunmuyor");
      }
    } else {
      message.reply("Yasaklanacak kişiyi yazmadın.");
    }
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === '?yetkili') {
    const kanal = new MessageEmbed()

    .setTitle('Yetkili')
    .setDescription('Yetkili Menüsü')
    .setAuthor('Noscope')
    .setThumbnail('https://r.resimlink.com/Vsx.png')
    .setImage('https://r.resimlink.com/TlNrRzC.jpg')
    .setColor("RANDOM")
    .addField('?yavaşmod <sayı> <saniye/dakika/saat>', 'Yavaşmod Komudu')
    .addField('?taşı <@Taşınacak Kişi> <Taşınacak Kanal İD>', 'Etiketlediğiniz Kişi Eğer Siz Bi Sesli Kanalda İseniz Sizin Bulunduğunuz Kanala, Eğer Siz Sesli Bir Kanalda Değilseniz Yazdığınız Kanal İDsine Taşınır')
    .addField('?kick <@Kicklenecek Kişi>', 'Kickleme Komudu')
    .addField('?ban <@Banlanacak Kişi>', 'Banlama Komudu')
    .addField('?kanalkilitle <sebep>', 'Komutu Yazdığınız Kanalı Kilitler')
    .addField('?kanalkilitaç', 'Komutu Yazdığınız Kanalın Kilitini Açar')
    .addField('?unban <İD>', 'Banı Kaldırma Komudu')
    .addField('?sil <Silinecek Yazı Sayısı>', 'Kanalda Yazdığn Sayı Kadar Mesaj Siler')
    message.channel.send(kanal);
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === '?youtube') {
    msg.author.send('https://www.youtube.com/channel/UCcNQcsIVxgH-piFtYytoIvA?view_as=subscriber');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === '?davet') {
    msg.author.send('https://discord.com/oauth2/authorize?client_id=781827519464210432&scope=bot&permissions=2147483647')
    msg.channel.send('Link DM Üzerinden Gönderildi');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === '?destek-sw-davet') {
    msg.author.send('https://discord.gg/NzugTZWtns')
    msg.channel.send('Link DM Üzerinden Gönderildi');
  }
});

client.on("message", msg => {
  var dm = client.channels.cache.get("787030267675672586") //Gönderilecek Kanal İD
  if(msg.channel.type === "dm") {
  if(msg.author.id === client.user.id) return;
  const botdm = new Discord.MessageEmbed()
  .setTitle(`${client.user.username} Direkt Mesajlar`)
  .setTimestamp()
  .setColor("RED")
  .setThumbnail(`${msg.author.avatarURL()}`)
  .addField("Gönderen", msg.author.tag)
  .addField("Gönderen ID", msg.author.id)
  .addField("Gönderilen Mesaj", msg.content)
  
  dm.send(botdm)
  
  }
  if(msg.channel.bot) return;
  });

client.on("message", async message => {
    const codeuniverse = message.content.toLocaleLowerCase();
  
    if (
      codeuniverse === "selam" ||
      codeuniverse === "sa" ||
      codeuniverse === "selamün aleyküm" ||
      codeuniverse === "selamun aleyküm" ||
      codeuniverse === "slm" ||
      codeuniverse === "sea"
    ) {
      let e = await db.fetch(`sa-as_${message.guild.id}`);
      if (e === "acik") {
        message.reply(
        new Discord.MessageEmbed()
  
            .setDescription(
              
            `${message.author} Ve Aleyküm Selam Hoşgeldin Karşim :crescent_moon:`
            )
            .setColor("RANDOM")
       );
  
        
      }
    }
  });

client.login('NzgxODI3NTE5NDY0MjEwNDMy.X8DTng.M5dNf7rrJGOSwShOp7Fa-8_r8x4')
