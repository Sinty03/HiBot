const Discord = require('discord.js');


exports.run = function(client, message) {
    
    message.channel.send("***Bot Yeniden Başlatılıyor :)***").then(msg => {
        console.log("[BOT] Yeniden Başlatılıyor");
        process.exit(0);
    });

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'reboot',
  description: 'Botu yeniden başlatır',
  usage: 'reboot'
};