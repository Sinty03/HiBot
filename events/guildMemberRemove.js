module.exports = member => {
  const channel = member.guild.channels.find('name', 'ölüler');
  if (!channel) return;
  member.send(`Niye gittin ? https://www.youtube.com/watch?v=SLNgTfuJssw`)
  channel.send(`**Sus. ** ${member} ** yok. ** ${member} ** öldü serverden ayrıldığı gün o iş bitti. **`);
};
