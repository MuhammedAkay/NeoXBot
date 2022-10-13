const { EmbedBuilder, WebhookClient } = require("discord.js");
const client = require("../..");
const resim = 'https://cdn.discordapp.com/avatars/992875196681814027/f0d7f041408f329d059f49163f8cc3bb.png?size=1024';
const mesaj = new WebhookClient({ url: 'https://discord.com/api/webhooks/1017043427013177395/NXvYdn-p4P-Xgqq0ZIFMx-QE-PykLDT1_amME3lW-x9ciC5KaFW9wK6s252Tp5XSPkr4' });

client.on('guildDelete', async (guild) => {
  const owner = guild.members.cache.get(guild.ownerId);
  const kullanıcılar = guild.memberCount
  const botlar = guild.members.cache.filter(m => m.user.bot).size;;
  const embed = new EmbedBuilder()
  .setTitle('Sunucudan Ayrıldım')
  .addFields(
    { name: 'Sunucu Bilgileri', value: `**__Sunucu Sahibi:__** ${owner.user.tag}\n**__Sunucu Adı:__** ${guild.name}\n**__Kullanıcı Sayısı:__** ${kullanıcılar - botlar}\n**__Bot Sayısı:__** ${botlar}`, inline: false },
  )
  .setTimestamp()

  mesaj.send({
    username: 'NeoXBot',
    avatarURL: resim,
    embeds: [embed]
  })
});