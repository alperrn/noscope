const Discord = require("discord.js")
const {MessageEmbed} = require('discord.js');
const client = new Discord.Client()
module.exports = {
    kod: "roller",
    async run (client, msg, args) {
const moment = require('moment');
            const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setAuthor(msg.guild.name, msg.guild.iconURL)
            .setTitle(`Roller [${msg.guild.roles.cache.size}]`)
            .setDescription(`<@&${msg.guild.roles.cache.map(roles => `${roles.id}`).join('>, <@&')}>`)
            return msg.channel.send(embed)
    }}