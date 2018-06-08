const Discord = require('discord.js');
const generator = require('generate-password')


exports.run = function(client, message, args) {
    var uzunluk = args.slice(0).join(' ');

    if (!uzunluk) return message.reply('Lütfen bir şifre uzunluğu belirtin.')



    var password = generator.generate({
        length: uzunluk,
        numbers: true,
    })

    message.channel.send(password);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['parola'],
  permLevel: 1
};

exports.help = {
  name: 'Şifre',
  description: 'Rastgele bir şifre oluşturur.',
  usage: 'şifre <uzunluk>'
};