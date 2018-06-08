const Discord = require('discord.js');


exports.run = function(client, message) {
    message.delete();
    
    const embed = new Discord.RichEmbed()
        .setDescription("**Hiᴼᵂᴱᴺ Sunucu KURALLARI**")
        .setImage()
        .setThumbnail("https://scontent-amt2-1.cdninstagram.com/vp/597e172038f5520346d031364cedb61a/5B94346E/t51.2885-19/s150x150/31975837_618386371835282_7185978356385447936_n.jpg")
        .setColor(0x00AE86)
        .addField("**^1^**", "Argo kelimeler, küfür vb. şeyler yasaktır.")
        .addField("**^2^**", "Spam yapmak yasaktır.")
        .addField("**^3^**", "Reklam yapmak yasaktır.")
        .addField("**^4^**", "Başkalarını rahatsız edecek davranışlarda bulunmak yasaktır.")
        .addField("**^5^**", "Ahlaka karşı davranışlar sergilemek yasaktır.")
        .addField("**^6^**", "Oynuyor.. kısmına küfür, reklam vb. içerikler yazmak yasaktır.")
        .addField("^DİKKAT^", "YUKARIDAKİLERİN HEPSİ İÇİN TEK VE KALICI OLARAK CEZANIZ SÜRESİZ UZAKLAŞTIRILMAK OLACAKTIR !!!")
        .addField("ÖNEMLİ", "!!!!!")
        .addField("#1", "Bir mesajınızda aşırı derecede (%70'inden fazlası) büyük harf olursa,")
        .addField("#2", "Bir mesajınızda ard arda aynı harften olursa,")
        .addField("#3", "4 saniyede en az 5 mesaj atarsanız,")
        .addField("#4", "Discord sunucu davet linki atarsanız,")
        .addField("#5", "Link atarsanız,")
        .addField("#6", "Bir mesajınızda 5'den fazla kişi etiketliyse,")
        .addField("#7", "Spam atarsanız,")
        .addField("#000", "Ve bunları 5 dakika içinde 5 defa yaparsanız mute yersiniz.")
        .addField("#000", "Oyun arkadaşı aramak için oyuncu arama chatini kullanabilirsiniz. Sohbetlerinizi oyuncu arama chatinde yapmayın.")
        .addField("#000", "Bir sıkıntı ve sorunla karşılaşırsanız Discord Yetkilisine ulaşabilirsiniz.")

    message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kural','serverkural'],
  permLevel: 0
};

exports.help = {
  name: 'kurallar',
  description: 'Sunucu kurallarını gösterir',
  usage: 'kurallar'
};
