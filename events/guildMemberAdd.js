module.exports = member => {
  const channel = member.guild.channels.find('name', 'kırmızı-halı');
  if (!channel) return;
  channel.send(`**📥 |** ${member} ** Aramıza hoşgeldin :tada: :hugging: :tada: :video_game: umarım keyifli vakit geçirirsin. Aklına taklına bir şey olursa :thinking: @Sınty#5397 ye mesaj göndererek sorularını sorabilirsin :innocent: .**`);
};
