const Discord = require('discord.js');


exports.run = function(client, message) {
  
  if (author.message.send("pingim")) {
      
    msg.reply('Gecikme Süren' + author.client.ping + 'ms');
  }
 
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ping','p','ms'],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Gecikme sürenizi gösterir',
  usage: 'ping'
};