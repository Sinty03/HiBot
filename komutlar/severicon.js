const Discord = require('discord.js');


exports.run = function(client, message) {
    
    const embed = new Discord.RichEmbed()
        .setDescription("**Hiᴼᵂᴱᴺ Server İcon**")
        .setImage(message.guild.iconURL)
    
    message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['svicon','Hicon'],
  permLevel: 1
};

exports.help = {
  name: 'serverİcon',
  description: 'Serverin İconunu gösterir',
  usage: 'servericon'
};