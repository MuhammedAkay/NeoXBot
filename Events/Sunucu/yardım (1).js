const { EmbedBuilder, ButtonBuilder, ButtonStyle, SelectMenuBuilder, ActionRowBuilder, ComponentType, AttachmentBuilder, ChannelType } = require('discord.js');
const client = require("../..")
const moment = require("moment");
moment.locale('tr');
  require("moment-duration-format");

let geributton = new ButtonBuilder()
.setCustomId('yardımgeri')
.setLabel('Ana Sayfaya Dön')
.setStyle(ButtonStyle.Danger)
.setEmoji(client.config.emoji.i.anasayfa)

let grow = new ActionRowBuilder().addComponents(geributton)

client.on('interactionCreate', async (i) => {
  if(!i.isButton()) return;
  if(i.customId === 'yardımgeri') {
    let urldavet = 'https://discord.com/api/oauth2/authorize?client_id=992875196681814027&permissions=296150887519&scope=bot%20applications.commands';
    
      const Uptime = moment
      .duration(client.uptime)
      .format(" D [gün], H [saat], m [dakika], s [saniye]");
      
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
    .setTitle('Yardım Menüsü')
    .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
    .setDescription('*Merhaba Ben __NeoXBot__ Beni Kullanmayı Tercih Ettiğiniz İçin Teşekkür Ederim.*')
    .addFields(
      {
        name: 'Özelliklerim',
        value: '*Ayarlana Bilir Skin Şablon Komutları\nAyarlana Bilir Başvuru Sistemi\n\nGün Geçtikçe Yeni Özellikler Eklenecektir.*',
        inline: false
      },
      {
        name: 'Kategoriler',
        value: `> ***${client.config.emoji.ayarlamalı} Ayarlamalı • [8]\n> ${client.config.emoji.bot} Bot • [2]\n> ${client.config.emoji.kullanıcı} Kullanıcı • [2]\n> ${client.config.emoji.oyun} Oyunlar • [3]\n> ${client.config.emoji.skin} Skinler • [5]\n> ${client.config.emoji.sunucu} Sunucu • [3]***`,
        inline: false
      },
      {
          name: 'Bot İstatistikleri',
          value: `> ***Ping: ${client.ws.ping}ms\n> Çalışma Süresi: ${Uptime}\n> Komut Sayısı: 23\n> Kullanıcı Sayısı: ${client.users.cache.size}\n> Sunucu Sayısı: ${client.guilds.cache.size}\n> Yazı Kanalları: ${client.channels.cache.filter((c) => c.type === ChannelType.GuildText).size}\n> Ses Kanalları: ${client.channels.cache.filter((c) => c.type === ChannelType.GuildVoice).size}***`,
          inline: false
      },
    )
    .setColor('Random')
    .setFooter({ text: `${i.user.username} Tarafından İstendi.`, iconURL: i.user.displayAvatarURL({ dynamic: true })})

    i.update({ embeds: [helpEmbed], components: [helpMenu, new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setLabel('Davet Et')
      .setStyle(ButtonStyle.Link)
      .setURL(urldavet)
   )]})
  }
})

client.on('interactionCreate', async (i) => {
  if(!i.isSelectMenu()) return;
  let y = i.values
  if(i.customId === 'help_menu') {
    if(y[0] === 'ayar') {
        const ayar = new EmbedBuilder()
      .setColor('Random')
      .setTitle('Ayarlamalı Kategorisi')
      .setDescription(`**Skin Ayar:**\n> **Komut:** ${client.config.emoji.sağok} **__/skin-ayar istek-kanal\n> /skin-ayar - şablon-kanalı bsu\n> /skin-ayar şablon-kanalı tsu\n> /skin-ayar şablon-kanalı toe3__**\n> **Açıklama:** ${client.config.emoji.sağok} __Şablonların Atılacağı Kanalın Ayarlarını Yaparsınız.__\n\n
**Sa As:**\n> **Komut:** ${client.config.emoji.sağok} **__/sa-as__**\n> **Açıklama:** ${client.config.emoji.sağok} __Selam Alma Sistemini Ayarlarsınız.__\n\n **Başvuru Ayarla:**\n> **Komut:** ${client.config.emoji.sağok} **__/başvuru-ayarlarla__**\n**Açıklama:** ${client.config.emoji.sağok} __Başvuru Sisteminin Ayarlarını Yaparsınız.__\n\n**Başvuru Embed**\n> **Komut:* ${client.config.emoji.sağok} **__/başvuru-embed__**\n> **Açıklama:** ${client.config.emoji.sağok} __Başvuru Embedini Düzenlersiniz.__\n\n> **Başvuru Aç Kapat:**\n> **Komut:** ${client.config.emoji.sağok} **__/başvuru-aç-kapat__**\n> **Açıklama:** ${client.config.emoji.sağok} __Başvuru Verilecek Rol, En Düşük Yetkili Rolü, Onay Mesajı Ve Red Mesajı Ayarlarını Ayarlarsınız.__\n\n**Başvuru Soru Ekle:**\n> **Komut:** ${client.config.emoji.sağok} **__/başvuru-soru-ekle__**\n> **Açıklama:** ${client.config.emoji.sağok} __Başvuru Sorularını Eklersiniz Maksimum 15 Soru Eklenebilir.__\n\n**Başvuru Soru Sil:**\n> **Komut:** ${client.config.emoji.sağok} **__/başvuru-soru-sil__**\n> **Açıklama:** ${client.config.emoji.sağok} __Eklenmiş Bir Başvuru Sorusunu Siler. (Başvuru Soru Ekleme Sırasına Göre Sıraya Bakmak Veya Soruları Görmek İçin **/başvuru-sorular(sunucu)**)__`)
      .setTimestamp()
          .setFooter({ text: `${i.user.username} Tarafından İstendi. | Ayarları Sıfırlamak İçin /sıfırla`, iconURL: i.user.displayAvatarURL({ dynamic: true })})
      i.update({ embeds: [ayar], components: [grow] })
    }
    if(y[0] === 'bot') {
      const bot = new EmbedBuilder()
      .setColor('Random')
      .setTitle('Bot Kategorisi')
      .setDescription(`**Yardım:**\n> **Komut:** ${client.config.emoji.sağok} **__/yardım__**\n> **Açıklama:** ${client.config.emoji.sağok} __Bot Komutlarını Listeler__\n\n**Bot Bilgi:**\n> **Komut:** ${client.config.emoji.sağok} **__/bot-bilgi__**\n> **Açıklama:** ${client.config.emoji.sağok} __Botun Bilgilerini Gösterir.__`)
      .setTimestamp()
      .setFooter({ text: `${i.user.username} Tarafından İstendi.`, iconURL: i.user.displayAvatarURL({ dynamic: true })})
      
      i.update({ embeds: [bot], components: [grow] })
    }
    if(y[0] === 'kullanıcı') {
      const kullanıcı = new EmbedBuilder()
      .setColor('Random')
      .setTitle('Kullanıcı Kategorisi')
      .setDescription(`**Avatar:**\n> **Komut:** ${client.config.emoji.sağok} **__</avatar:1029409500270166108>__**\n> **Açıklama:** ${client.config.emoji.sağok} __Sizin Veya Bir Başka Kişinin Avatarını Gösterir.__\n\n**Kullanıcı Bilgi:**\n> **Komut:** ${client.config.emoji.sağok} **__</kullanıcı-bilgi:1029409500270166109>__**\n> **Açıklama:** ${client.config.emoji.sağok} __Sizin Veya Belirtiğiniz Kişinin Bilgilerini Gösterir.__`)
      .setTimestamp()
      .setFooter({ text: `${i.user.username} Tarafından İstendi.`, iconURL: i.user.displayAvatarURL({ dynamic: true })})
      
      i.update({ embeds: [kullanıcı], components: [grow] })
    }
    if(y[0] === 'oyun') {
      const oyun = new EmbedBuilder()
      .setColor('Random')
      .setTitle('Oyun Kategorisi')
      .setDescription(`**Akinatör:**\n> **Komut:** ${client.config.emoji.sağok} **__/akinatör__**\n> **Açıklama:** ${client.config.emoji.sağok} __Akinatör Oyununu Başlatırsınız.__\n\n**Yılan Oyunu**\n> **Komut:** ${client.config.emoji.sağok} **__/yılan-oyunu__**\n> **Açıklama:** ${client.config.emoji.sağok} __Yılan Oyunu Oynarsınız.__\n\n**Tic Tac Toe(xox)**\n> **Komut:** ${client.config.emoji.sağok} **__/tictactoe__**\n> **Açıklama:** ${client.config.emoji.sağok} __Belirtiğiniz Kişi İle Tic Tac Toe(xox) Oyununu Oynarsınız.__\n\n**Hesap Makinesi:**\n> **Komut:** ${client.emoji.sağok} **__/hesap-makinesi__**\n> **Açıklama:** ${client.emoji.sağok} __Hesap Yapmanız İçin Hesap Makinesi Oluşturur.__`)
      .setTimestamp()
      .setFooter({ text: `${i.user.username} Tarafından İstendi.`, iconURL: i.user.displayAvatarURL({ dynamic: true })})
      
      i.update({ embeds: [oyun], components: [grow] })
    }
    if(y[0] === 'skin') {
      const skin = new EmbedBuilder()
      .setColor('Random')
      .setTitle('Skin Kategorisi')
      .setDescription(`**Skin İstek:**\n> **Komut:** ${client.config.emoji.sağok} **__/skin-istek__**\n> **Açıklama:** ${client.config.emoji.sağok} Skin İstek Kanalına Skin İsteğinizi Gönderir.\n\n**Bus Simulator: Ultimate:**\n> **Komut:** ${client.config.emoji.sağok} **__/bus-simulator-ultimate__**\n> **Açıklama:** ${client.config.emoji.sağok} __Bus Simulator Ultimate Oyunu Hakkındaki Bilgileri Oyun Linklerini Ve Şablonları Gösterir.__\n\n**Truckers Of Europe 3:**\n> **Komut:** ${client.config.emoji.sağok} **__/truckers-of-europe-3__**\n> **Açıklama:** ${client.config.emoji.sağok} __Truckers Of Europe 3 Oyunu Hakkındaki Bilgileri Oyun Linklerini Ve Şablonları Gösterir.__\n\n**Truck Simulator: Ultimate:**\n> **Komut:** ${client.config.emoji.sağok} **__/truck-simulator-ultimate__**\n> **Açıklama:** ${client.config.emoji.sağok} __Truck Simulator Ultimate Oyunu Hakkındaki Bilgileri Oyun Linklerini Ve Şablonları Gösterir.__`)
      .setTimestamp()
      .setFooter({ text: `${i.user.username} Tarafından İstendi.`, iconURL: i.user.displayAvatarURL({ dynamic: true })})
      
      i.update({ embeds: [skin], components: [grow]})
    }
    if(y[0] === 'sunucu') {
      const sunucu = new EmbedBuilder()
      .setColor('Random')
      .setTitle('Sunucu Kategorisi')
      .setDescription(`**Sunucu Bilgi:**\n> **Komut:** ${client.config.emoji.sağok} **__/sunucu-bilgi__**\n> **Açıklama:** ${client.config.emoji.sağok} __Sunucunuzun Bilgilerini Gösterir.__\n\n**Emojiler:**\n> **Komut:** ${client.config.emoji.sağok} **__/emojiler__**\n> **Açıklama:** ${client.config.emoji.sağok} __Sunucunuzdaki Emojileri Listeler.__\n\n**Başvuru Sorular:**\n\n> **Komut:** ${client.config.emoji.sağok} **__/başvuru-sorular__**\n> **Açıklama:** ${client.config.emoji.sağok} __Sunucunzun Başvuru Sisteminde Bulunan Soruları Sıralar.__`)
      .setTimestamp()
      .setFooter({ text: `${i.user.username} Tarafından İstendi.`, iconURL: i.user.displayAvatarURL({ dynamic: true })})
      
      i.update({ embeds: [sunucu], components: [grow] })
    }
  }

})