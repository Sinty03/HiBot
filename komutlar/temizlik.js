const Discord = require('discord.js');


exports.run = function(client, message, args) {
    const sayi = args.slice(0).join(' ');


    if(sayi.length < 1) {
      return message.reply("Silinecek Mesaj Sayısı Belirtin")
    } else {
        message.channel.bulkDelete(sayi);
        message.channel.send("**" + sayi + "** adet mesaj silindi !").then(msg =>{
            msg.delete("5000")
        });
    }
      
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 3
};

exports.help = {
  name: 'temizle',
  description: 'Belirtilen miktarda mesajı siler',
  usage: 'temzile <miktar>'
};
