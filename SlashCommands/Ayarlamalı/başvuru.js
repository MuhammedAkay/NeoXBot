const { 
  EmbedBuilder,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
  ChannelType,
  PermissionsBitField,
  ApplicationCommandType 
} = require("discord.js");

module.exports = {
  name: 'başvuru-ayarla',
  description: 'Başvuru Ayarlarını Yaparsınız.',
  type: ApplicationCommandType.ChatInput,
  cooldown: 3000,
  default_member_permissions: 'ManageGuild',
  options: [
              {
                  name: 'kanal',
                  description: 'Başvuru Mesajının Atılacağı Kanal',
                  type: 7,
                  required: true,
                  channelTypes: 0
              },
              {
                  name: 'log',
                  description: 'Başvuru Logları Atılacak Kanal',
                  type: 7,
                  required: true,
                  channelTypes: 0
              },
              {
                  name: 'rol',
                  description: 'Başvuru Onaylayıp Red Edebilecek Rol',
                  type: 8,
                  required: true
              },
              {
                  name: 'kategori',
                  description: 'Başvuru Yapınca Kanal Oluşturulacak Kategori',
                  type: 7,
                  required: true,
                  channelTypes: 4
              },
      ],
  run: async (client, interaction) => {
//Database
      const data = client.databasvuru;
      
//Options
      const kanal = interaction.options.getChannel('kanal');
      const log = interaction.options.getChannel('log');
      const rol = interaction.options.getRole('rol');
      const kategori = interaction.options.getChannel('kategori');
      
//Kod
      if(!kanal.ChannelType.GuildText || !log.ChannelType.GuildText || !kategori.ChannelType.GuildCategory) return interaction.reply('Tüm Kanalları Doğru Etiketlediğinizden Emin Olun!');
      
          const guild = interaction.guild.id
          
          if(kanal) {
             data.set(`${guild}_basvuruKanal`, kanal.id)
              interaction.reply({ embeds: [ new EmbedBuilder()
                                           .setColor('Green')
                                           .setTitle('Başarılı')
                                           .setDescription(`Başvuru Kanalı ${kanal} Olarak Ayarlandı.`)
                                           ]})
          }
          if(log) {
              data.set(`${guild}_basvuruLog`, log.id)
              interaction.channel.send({ embeds: [ new EmbedBuilder()
                                           .setColor('Green')
                                           .setTitle('Başarılı')
                                           .setDescription(`Başvuru Log Kanalı ${kanal} Olarak Ayarlandı.`)
                                           ]})
          }
          if(rol) {
              data.set(`${guild}_basvuruOnayRol`, rol.id)
              interaction.channel.send({ embeds: [ new EmbedBuilder()
                                           .setColor('Green')
                                           .setTitle('Başarılı')
                                           .setDescription(`Başvuru Kabul Edip Red Edebilcek Rol ${rol} Olarak Ayarlandı.`)
                                           ]})
          }
          if(kategori) {
          data.set(`${guild}_basvuruKategori`, kategori.id)
              interaction.channel.send({ embeds: [ new EmbedBuilder()
                                           .setColor('Green')
                                           .setTitle('Başarılı')
                                           .setDescription(`Başvuru Kategorisi ${kategori} Olarak Ayarlandı.`)
                                           ]})
          }
  },
};