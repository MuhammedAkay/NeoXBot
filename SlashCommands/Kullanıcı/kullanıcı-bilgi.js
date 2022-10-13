const { 
  EmbedBuilder,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
  ApplicationCommandType 
} = require("discord.js");

module.exports = {
  name: 'kullanıcı-bilgi',
  description: 'Belirtiğiniz Kullanıcının Veya Sizin Bilgilerinizi Gösterir.',
  type: ApplicationCommandType.ChatInput,
  cooldown: 3000,
  options: [
      {
          name: 'kullanıcı',
          description: 'Bilgileri Gösterilecek Kullanıcı',
          type: 6,
          required: false
      },
  ],
  run: async (client, interaction) => {
      
      const kişi = interaction.options.getUser("kullanıcı");
      
      if(kişi) {
          await interaction.guild.members.fetch(kişi);
    const kisi = interaction.guild.members.cache.get(kişi);
        
          const row = new ActionRowBuilder().addComponents(
              new ButtonBuilder()
              .setLabel('Profili Görüntüle')
              .setStyle(ButtonStyle.Link)
              .setURL(`https://discord.com/users/${kişi.id}`)
              )
          const embed = new EmbedBuilder()
          .setTitle(`${kişi} Kişsinin Bilgileri`)
          .setColor(`${kişi.displayHexColor || 'Random'}`)
          .addFields( 
              {
                  name: 'Adı',
                  value: `**${kisi.displayName} | #${kisi.discriminator}**`,
                  inline: true
              },
              {
                  name: 'Hesap Kuruluş Tarihi',
                  value: `<t:${parseInt(kişi.createdTimestamp / 1000)}:R>`,
                  inline: true
              },
              {
                  name: 'Sunucuya Katılma Tarihi',
                  value: `<t:${parseInt(kisi.joinedTimestamp / 1000)}:R>`,
                  inline: true
              },
              /*{
                  name: 'Rolleri',
                  value: `${kişi.roles.cache.map(r => r).sort((a, b) => b.position - a.position).join('\n').replace('@everyone', '') || 'Bu Kullanıcının Rolü Yok'}`,
                  inline: true
              },*/
              )
          .setTimestamp()
          .setFooter({ text: `${interaction.user.username} Tarafından İstendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
          
          if(kişi.banner) {
              embed.setThumbnail(kişi.bannerURL())
              embed.addFields({ name: 'Banner', value: '** **', inline: true });
              embed.setImage(`${kişi.bannerURL({ dynamic: true })}`);
          } else {
              embed.setThumbnail(kişi.avatarURL({ dynamic: true }));
          }
          
          interaction.reply({ embeds: [embed], components: [row] });
                                 
      } else {
          
          const row = new ActionRowBuilder().addComponents(
              new ButtonBuilder()
              .setLabel('Profili Görüntüle')
              .setStyle(ButtonStyle.Link)
              .setURL(`https://discord.com/users/${interaction.user.id}`)
              )
          const embed = new EmbedBuilder()
          .setColor(`${interaction.member.displayHexColor || 'Random'}`)
          .addFields( 
              {
                  name: 'Adı',
                  value: `**${interaction.member.displayName} | #${interaction.user.discriminator}**`,
                  inline: true
              },
              {
                  name: 'Hesap Kuruluş Tarihi',
                  value: `<t:${parseInt(interaction.user.createdTimestamp / 1000)}:R>`,
                  inline: true
              },
              {
                  name: 'Sunucuya Katılma Tarihi',
                  value: `<t:${parseInt(interaction.member.joinedTimestamp / 1000)}:R>`,
                  inline: true
              },
              {
                  name: 'Rolleri',
                  value: `${interaction.member.roles.cache.map(r => r).sort((a, b) => b.position - a.position).join('\n').replace('@everyone', '') || 'Bu Kullanıcının Rolü Yok'}`,
                  inline: true
              },
              )
          .setTimestamp()
          .setFooter({ text: `${interaction.user.username} Tarafından İstendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})

          if(interaction.user.banner) {
              embed.setThumbnail(interaction.user.bannerURL())
              embed.addFields({ name: 'Banner', value: '** **', inline: true });
              embed.setImage(`${interaction.user.bannerURL({ dynamic: true })}`);
          } else {
              embed.setThumbnail(interaction.user.avatarURL({ dynamic: true }));
          }
          
          interaction.reply({ embeds: [embed], components: [row] })
      };
  },
};