const { EmbedBuilder, WebhookClient } = require("discord.js");
const client = require("../..");

const resim = 'https://cdn.discordapp.com/avatars/992875196681814027/f0d7f041408f329d059f49163f8cc3bb.png?size=1024';
const mesaj = new WebhookClient({ url: 'https://discord.com/api/webhooks/1019208148717936702/Gf_vZcDWIb6oZYaw9tHdPDPi6W9LaeE3HfJlkCBAygo8KUIQyKQLlGIV0UJf3SmCgCRy' });

client.on('rateLimit', (rateLimit) => {
    const embed = new EmbedBuilder()
      .setColor("RED")
      .setDescription(
        `**Time out**\n\`${rateLimit.timeout}ms\`\n**Limit:**\n\`${rateLimit.limit}\`\n\n__**Information**__\n**Method:**${rateLimit.method}\n\n**Path:**\n${rateLimit.path} ${rateLimit.route}`
      )
      .setTimestamp();

  mesaj.send({
    username: 'Rate Limit',
    avatarURL: resim,
    embeds: [embed]
  })
});