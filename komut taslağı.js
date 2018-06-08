import { Message } from 'discord.js';

const Discord = require('discord.js');


exports.run = function(client, message) {
    
    message.channel.send("Pigin **" + client.ping + "** ms!")

  };

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ping','p','ms'],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Botun pingini gösterir',
  usage: 'ping'
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz