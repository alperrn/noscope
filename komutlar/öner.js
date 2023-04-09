module.exports = {
    kod: "öner",
    async run (client, message, args) {
        const önerimesajı = message.content.split(' ').slice(1)
        const öneri = önerimesajı.join(" ")
        const kanal = client.channels.cache.find(ch => ch.id === '783976582510805012')
        kanal.send(args + ' - ' + message.author.tag)
    }
}