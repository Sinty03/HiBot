module.exports = member => {
  let guild = member.guild;
  member.send('Niye gittin ?');
  guild.defaultChannel.sendMessage(`${member.user.username} Nerelere gitti kim bilir :'( `);
};
