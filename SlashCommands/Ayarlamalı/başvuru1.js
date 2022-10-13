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
  name: 'başvuru-embed',
  description: 'Başvuru Ayarlarını Yaparsınız.',
  type: ApplicationCommandType.ChatInput,
  cooldown: 3000,
  default_member_permissions: 'ManageGuild',
  options: [
              {
                  name: 'başlık',
                  description: 'Başvuru Embed Mesajının Başlığı',
                  type: 3,
                  required: false,
                  min_length: 5,
                  max_length: 256
              },
              {
                  name: 'açıklama',
                  description: 'Başvuru Embed Mesajı Yazısı',
                  type: 3,
                  required: false,
                  min_length: 10,
                  max_length: 4096
              },
              {
                  name: 'buton-yazı',
                  description: 'Başvuru Butonu Yazısı',
                  type: 3,
                  required: false,
                  min_length: 3,
                  max_length: 10
              },
      ],
  run: async (client, interaction) => {
//Database
      const data = client.databasvuru;
      
//Options
      
      const title = interaction.options.getString('başlık');
      const desc = interaction.options.getString('açıklama');
      const buton = interaction.options.getString('buton-yazı');
//Kod
          const guild = interaction.guild.id
          

          if(title) {
              data.set(`${guild}_basvuruTitle`, title)
              interaction.channel.send({ embeds: [ new EmbedBuilder()
                                           .setColor('Green')
                                           .setTitle('Başarılı')
                                           .setDescription(`Başvuru Embed Title(Başlık Üst Kısım) **${title}** Olarak Ayarlandı.`)
                                           ]})
          } else {
              interaction.channel.send({ embeds: [ new EmbedBuilder()
                                           .setColor('Green')
                                           .setTitle('Başarılı')
                                           .setDescription(`Başvuru Title(Başlık) Yazısı Ayarlanmadığı İçin **Başvuru** Olarak Ayarladım.`)
                                           ]})
          }
          if(desc) {
              data.set(`${guild}_basvuruDesc`, desc)
              interaction.channel.send({ embeds: [ new EmbedBuilder()
                                           .setColor('Green')
                                           .setTitle('Başarılı')
                                           .setDescription(`Başvuru Embed Description(Açıklama Yani Burası) Yazısı**${desc}** Olarak Ayarlandı.`)
                                           ]})
          } else {
              interaction.channel.send({ embeds: [ new EmbedBuilder()
                                           .setColor('Green')
                                           .setTitle('Başarılı')
                                           .setDescription(`Başvuru Description(Açıklama Yani Burası) Yazısı Ayarlanmadığı İçin **Yetkili Başvurusu Yapabilmek İçin Aşağıdaki Butona Tıklayın** Olarak Ayarladım.`)
                                           ]})
          }
          if(buton) {
              data.set(`${guild}_basvuruButonYazı`, buton)
              interaction.channel.send({ embeds: [ new EmbedBuilder()
                                           .setColor('Green')
                                           .setTitle('Başarılı')
                                           .setDescription(`Başvuru Buton Yazısı **${buton}** Olarak Ayarlandı.`)
                                           ]})
          } else {
              interaction.channel.send({ embeds: [ new EmbedBuilder()
                                           .setColor('Green')
                                           .setTitle('Başarılı')
                                           .setDescription(`Başvuru Buton Yazısı Ayarlanmadığı İçin **Başvur** Olarak Ayarladım.`)
                                           ]})
          }
  },
};