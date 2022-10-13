const { 
  EmbedBuilder, 
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder, 
  SelectMenuBuilder,
  ChannelType,
  ApplicationCommandOptionType,
  ApplicationCommandType 
} = require("discord.js");
const moment = require("moment");
moment.locale('tr');
  require("moment-duration-format");

module.exports = {
  name: "yardım",
  description: "Botun Komutlarını Listeler.",
  type: ApplicationCommandType.ChatInput,
  cooldown: 3000,
  
  run: async (client, interaction) => {
      const Uptime = moment
      .duration(client.uptime)
      .format(" D [gün], H [saat], m [dakika], s [saniye]");
      
    let urldavet = 'https://discord.com/api/oauth2/authorize?client_id=992875196681814027&permissions=296150887519&scope=bot%20applications.commands';
    
    let helpMenu = new ActionRowBuilder()
    .addComponents(
      new SelectMenuBuilder()
      .setCustomId("help_menu")
      .setPlaceholder('Kategoriler')
      .setMinValues(1)
      .setMaxValues(1)
      .addOptions([
        {
          label: 'Ayarlamalı',
          description: 'Ayarlamalı Kategorisinde Bulunan Komutları Listeler.',
          value: 'ayar',
          emoji: client.config.emoji.i.ayarlamalı
        },
        {
          label: 'Bot',
          description: 'Bot Kategorisindeki Komutlarını Listeler.',
          value: 'bot',
          emoji: client.config.emoji.i.bot
        },
        {
          label: 'Kullanıcı',
          description: 'Kullanıcı Kategorisinde Bulunan Komutları Listeler.',
          value: 'kullanıcı',
          emoji: client.config.emoji.i.kullanıcı
        },
        {
          label: 'Oyun',
          description: 'Oyun Kategorisinde Bulunan Komutları Listeler.',
          value: 'oyun',
          emoji: client.config.emoji.i.oyun
        },
        {
          label: "Skinler",
          description: "Skin Kategorisindeki Komutları Listeler",
          value: "skin",
          emoji: client.config.emoji.i.skin
        },
        {
          label: 'Sunucu',
          description: 'Sunucu Komutlarını Listeler',
          value: 'sunucu',
          emoji: client.config.emoji.i.sunucu
        }
      ])
    )

    let helpEmbed = new EmbedBuilder()
    .setTitle('*Yardım Menüsü*')
    .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
    .setDescription('*Merhaba Ben __NeoXBot__ Beni Kullanmayı Tercih Ettiğiniz İçin Teşekkür Ederim.*')
    .addFields(
      {
        name: '*Özelliklerim*',
        value: '*Ayarlana Bilir Skin Şablon Komutları\nAyarlana Bilir Başvuru Sistemi\n\nGün Geçtikçe Yeni Özellikler Eklenecektir.*',
        inline: false
      },
      {
        name: '*Kategoriler*',
        value: `> ***${client.config.emoji.ayarlamalı} Ayarlamalı • [8]\n> ${client.config.emoji.bot} Bot • [2]\n> ${client.config.emoji.kullanıcı} Kullanıcı • [2]\n> ${client.config.emoji.oyun} Oyunlar • [3]\n> ${client.config.emoji.skin} Skinler • [5]\n> ${client.config.emoji.sunucu} Sunucu • [3]***`,
        inline: false
      },
      {
          name: '*Bot İstatistikleri*',
          value: `> ***Ping: ${client.ws.ping}ms\n> Çalışma Süresi: ${Uptime}\n> Komut Sayısı: 23\n> Kullanıcı Sayısı: ${client.users.cache.size}\n> Sunucu Sayısı: ${client.guilds.cache.size}\n> Yazı Kanalları: ${client.channels.cache.filter((c) => c.type === ChannelType.GuildText).size}\n> Ses Kanalları: ${client.channels.cache.filter((c) => c.type === ChannelType.GuildVoice).size} ***`,
          inline: false
      },
    )
    .setColor('Random')
    .setFooter({ text: `${interaction.user.username} Tarafından İstendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})


    interaction.reply({ embeds: [helpEmbed], components: [helpMenu, new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setLabel('Davet Et')
      .setStyle(ButtonStyle.Link)
      .setURL(urldavet)
   )]})
  },
};