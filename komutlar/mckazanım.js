const snekfetch = require('snekfetch');

module.exports = {
    kod: "mckazanım",
    async run (client, msg, args) {
        let [title, contents] = args.join(" ").split("|");
        if(!contents) {
          [title, contents] = ["Yeni Kazanim Kazanildi", title];
        }
        let rnd = Math.floor((Math.random() * 39) + 1);
        if(args.join(" ").toLowerCase().includes("burn")) rnd = 38;
        if(args.join(" ").toLowerCase().includes("cookie")) rnd = 21;
        if(args.join(" ").toLowerCase().includes("cake")) rnd = 10;
        
        if(title.length < 1 || contents.length < 1) return msg.reply("`Bunun İçin Herhangi Birşey Yazmalısın`")
        if(title.length > 22 || contents.length > 22) return msg.reply("`Lütfen 22'den Fazla Karakter Girmeyiniz`")
        const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`;
        snekfetch.get(url)
         .then(r=>msg.channel.send("", {files:[{attachment: r.body}]}));
    }
}