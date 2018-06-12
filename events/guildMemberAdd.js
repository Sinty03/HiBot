module.exports = member => {
  const channel = member.guild.channels.find('name', 'kırmızı-halı');
  if (!channel) return;
  channel.send(`** :dizzy: |** ${member} ** Aramıza hoşgeldin :tada: :hugging: :tada: umarım keyifli vakit geçirirsin. Aklına taklına bir şey olursa :thinking: ** @Sınty5397 ** ye mesaj göndererek sorularını sorabilirsin :innocent: .**`);
};
