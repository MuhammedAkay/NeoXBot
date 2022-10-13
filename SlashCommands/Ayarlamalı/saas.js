const {
    EmbedBuilder,
    ButtonBuilder,
    ButtonStyle,
    SelectMenuBuilder,
    ActionRowBuilder,
    ChannelType,
    ApplicationCommandType
} = require('discord.js');

module.exports = {
  name: 'sa-as',
  description: 'Selam Alma Sisteminin Ayarlarını Yaparsınız.',
  type: ApplicationCommandType.ChatInput,
  cooldown: 3000,
  default_member_permissions: 'ManageGuild',
  options: [
                  {
                      name: 'aç-kapat',
                      description: 'Sistemi Açıp Kapatırsınız.',
                      type: 3,
                      required: true,
                      choices: [
                          {
                              name: 'Aç',
                              value: 'ac',
                          },
                          {
                              name: 'Kapat',
                              value: 'kapat'
                          },
                      ],
                  },
  ],
  
  run: async (client, interaction) => {
//Datalar
  const mod = client.datamoderasyon;
  
//Option Ayar
    const ayar = interaction.options.getString('aç-kapat');

//Kontroller
    const kontrol1 = mod.has(`${interaction.guild.id}_saas`);
    
          if(ayar === 'ac') {
              if(kontrol1) {
                  const embed = new EmbedBuilder()
                  .setColor('Red')
                  .setTitle('Hata')
                  .setDescription('Selam Alma Sistemi Zaten Açık.')
                  .setTimestamp()
                  .setFooter({ text: `${interaction.user.username} Tarafından İstendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})

                  interaction.reply({ embeds: [embed] });
              } else {
                  mod.set(`${interaction.guild.id}_saas`, 'aktif');
                  const embed = new EmbedBuilder()
                  .setColor('Green')
                  .setTitle('Başarılı')
                  .setDescription('Selam Alma Sistemi Başarılı Bir Şekilde Açıldı.')
                  .setFooter({ text: `${interaction.user.username} Tarafından İstendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})

                  interaction.reply({ embeds: [embed] });
              }
          } else {
              if(!kontrol1) {
                  const embed = new EmbedBuilder()
                  .setColor('Red')
                  .setTitle('Hata')
                  .setDescription('Selam Alma Sistemi Zaten Aktif Aktif Olan Şeyi Tekrar Ayarlayamam.')
                  .setTimestamp()
                  .setFooter({ text: `${interaction.user.username} Tarafından İstendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})

                  interaction.reply({ embeds: [embed] });
              } else {
                  mod.delete(`${interaction.guild.id}_saas`)
                  const embed = new EmbedBuilder()
                  .setColor('Green')
                  .setTitle('Başarılı')
                  .setDescription('Selam Alma Sistemi Başarılı Bir Şekilde Kapatıldı.')
                  .setTimestamp()
                  .setFooter({ text: `${interaction.user.username} Tarafından İstendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})

                  interaction.reply({ embeds: [embed] });
              }
          }
  },
};