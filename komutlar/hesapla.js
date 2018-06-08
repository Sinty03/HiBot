const Discord = require('discord.js');
const math = require('math-expression-evaluator')
const stripIndents = require('common-tags').stripIndents

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    if(!soru) return message.reply('Bir işlem belirtin.')
    else { var cevap;
        try {
            cevap = math.eval(soru)
        } catch(err) {
            message.channel.send('Hatalı işlem: **' + err)
        }
        
        const embed = new Discord.RichEmbed()
        .addField('soru', soru)
        .addField('cevap', cevap)

        message.channel.send(embed)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hesapla',
  description: 'Belittiğiniz işlemin sonucunu hesaplar.',
  usage: 'hesapla'
};