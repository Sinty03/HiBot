const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

  message.delete();
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
  let botmessage = args.join(" ");
  message.channel.send(botmessage);
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['level'],
  permLevel: 1
};
  
  module.exports.help = {
  name: "söyle",
  Description: "Bota istediğinizi söyletir.",
  usage: "söyle"
}