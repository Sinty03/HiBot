module.exports = member => {
  const channel = member.guild.channels.find('name', 'ölüler');
  if (!channel) return;
  channel.send(`**Sus. ** ${member} ** yok. ** ${member} ** öldü serverden ayrıldığı gün o iş bitti. **`),
  member.send(`Niye gittin ? https://www.youtube.com/watch?v=SLNgTfuJssw`);
};
