const { 
  EmbedBuilder,
  Permissions,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
  Colors,
  version,
  ChannelType,
  ApplicationCommandType 
} = require("discord.js");
const moment = require("moment");
moment.locale('tr');
  require("moment-duration-format");
const os = require('os');
module.exports = {
  name: "bot-bilgi",
  description: "Botun İstatistiklerini Gösterir.",
  type: ApplicationCommandType.ChatInput,
  cooldown: 3000,
  run: async (client, interaction) => {
    let urldavet = 'https://discord.com/api/oauth2/authorize?client_id=992875196681814027&permissions=296150887519&scope=bot%20applications.commands';
    
    const Uptime = moment
      .duration(client.uptime)
      .format(" D [gün], H [saat], m [dakika], s [saniye]");
    const totalram = ((os.totalmem() / 10**6 + " ").split('.')[0]);
    const freeram = ((os.freemem() / 10**6 + " ").split('.')[0]);
    const usedram = (((os.totalmem() - os.freemem()) / 10**6 + " ").split('.')[0]);
    const prctfreeram = (((os.freemem() * 100) / os.totalmem + " ").split('.')[0]);

    const embed = new EmbedBuilder()
      .setAuthor({
        name: "Bot İstatistik",
        iconURL: client.user.avatarURL(),
      })
      .addFields(
        { name: 'Bot Sahibi & Gelişticiler', value: '[@SPY あ NeoX 𓃭#4168](https://discord.com/users/838734789791055922) <a:sagok:977532969285734431> Bot Sahibi & Geliştirici', inline: false        },
        {
          name: 'Genel Bilgiler',
          value: `**Bot Adı <a:sagok:977532969285734431>** ${client.user.username}\n**Bot ID <a:sagok:977532969285734431>** ${client.user.id}\n**Bot Oluşturma Tarihi <a:sagok:977532969285734431>** <t:${parseInt(client.user.createdTimestamp / 1000)}:f>`,
          inline: false
        },
        {
          name: 'Bot İstatistikleri',
          value: `**Ping <a:sagok:977532969285734431>** ${client.ws.ping}ms\n**Çalışma Süresi <a:sagok:977532969285734431>** ${Uptime}\n**DiscordJS Sürümü <a:sagok:977532969285734431>** ${version}\n**NodeJS Sürümü <a:sagok:977532969285734431>** ${process.version}\n**Kullanıcı Sayısı <a:sagok:977532969285734431>** ${client.users.cache.size}\n**Sunucu Sayısı <a:sagok:977532969285734431>** ${client.guilds.cache.size}\n**Yazı Kanalları <a:sagok:977532969285734431>** ${client.channels.cache.filter((c) => c.type === ChannelType.GuildText).size}\n**Ses Kanalları <a:sagok:977532969285734431>** ${client.channels.cache.filter((c) => c.type === ChannelType.GuildVoice).size}
`,
          inline: false
        },
        {
          name: 'Sistem İstatistikleri',
          value: `**Toplam hafıza <a:sagok:977532969285734431>** ${totalram}MB\n**Kullanılan Bellek <a:sagok:977532969285734431>** ${usedram}MB\n**Boş Hafıza <a:sagok:977532969285734431>** ${freeram}MB / ${prctfreeram}%
`,
          inline: false
        },
      )
      .setColor('Random')
      .setTimestamp()
      .setFooter({ text: `${interaction.user.username} Tarafından İstendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})

    interaction.reply({ embeds: [embed], components: [new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setLabel('Davet Et')
      .setStyle(ButtonStyle.Link)
      .setURL(urldavet)
   )
]});
  },
};