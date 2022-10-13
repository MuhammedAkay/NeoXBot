const { 
  EmbedBuilder,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
  ApplicationCommandType 
} = require("discord.js");

module.exports = {
  name: 'başvuru-aç-kapat',
  description: 'Başvuruları Aç, Kapat, Verilecek Rol Ve Yetkili Rolü Ayarlarını Yaparsınız.',
  type: ApplicationCommandType.ChatInput,
  cooldown: 3000,
  default_member_permissions: 'ManageGuild',
  options: [
              {
                  name: 'verilecek-rol',
                  description: 'Başvurusu Kabul Edilenlere Verilecek Rol',
                  type: 8,
                  required: true
              },
              {
                  name: 'açık-kapalı',
                  description: 'Başvuru Açarsınız Veya Kapatırsınız',
                  type: 3,
                  required: true,
                  choices: [
                      {
                          name: 'Aç',
                          value: 'ac'
                      },
                      {
                          name: 'Kapat',
                          value: 'kapat'
                      },
                  ],
              },
      {
          name: 'onay-mesajı',
          description: 'Başvuru Onaylanınca DM den Atılacak Mesaj',
          type: 3,
          min_length: 20,
          max_length: 1024,
          required: false
      },
      {
          name: 'red-mesajı',
          description: 'Başvuru Red Edilince DM Den Atılacak Mesaj',
          type: 3,
          min_length: 20,
          max_length: 1024,
          required: false
      },
  ],
  run: async (client, interaction) => {
//Database
      const data = client.databasvuru;
//Options
      const vrol = interaction.options.getRole('verilecek-rol');
      const acm = interaction.options.getString('açık-kapalı');
      const onaymesajı = interaction.options.getString('onay-mesajı');
      const redmesajı = interaction.options.getString('red-mesajı');
//Kod
      const sk1 = data.has(`${interaction.guild.id}_basvuruSorular`);
      if(!sk1) return interaction.reply({ content: 'Bu Komutu Kullanmadan Önce Başvuru Sorularını Ayarlamalısınız' });
      if(acm === 'ac') {
             const kk = data.has(`${interaction.guild.id}_basvuruKanal`);
             const bl = data.has(`${interaction.guild.id}_basvuruLog`);
             const yr = data.has(`${interaction.guild.id}_basvuruOnayRol`);
              
              if(!kk || !bl || !yr) return interaction.reply({ content: 'Gerekli Ayarlar Yapılmamış Gerekli Ayarları Yaptıktan Sonra Tekrar Deneyin' });
//Veriler
              const bkanal = data.get(`${interaction.guild.id}_basvuruKanal`);
              const ıd = data.get(`${interaction.guild.id}_basvuruMesajId`);
              const t = data.get(`${interaction.guild.id}_basvuruTitle`) || 'Başvuru';
              const d = data.get(`${interaction.guild.id}_basvuruDesc`) || 'Yetkili Başvurusu Yapabilmek İçin Aşağıdaki Butona Tıklayın';
              const b = data.get(`${interaction.guild.id}_basvuruButonYazı`) || 'Başvur';
              
              interaction.reply({ content: 'Başvurular Açıldı!' });
              data.set(`${interaction.guild.id}_basvuruVerilecekRol`, vrol.id);
              if(onaymesajı) data.set(`${interaction.guild.id}_basvuruOnayMesajı`);
              if(redmesajı) data.set(`${interaction.guild.id}_basvuruRedMesajı`);
          
              const row = new ActionRowBuilder().addComponents(
                  new ButtonBuilder()
                  .setCustomId('başvur')
                  .setLabel(b)
                  .setStyle(ButtonStyle.Secondary)
                  .setEmoji('📨')
                  .setDisabled(false),
                  new ButtonBuilder()
                  .setLabel(`${client.user.username} Davet Et`)
                  .setStyle(ButtonStyle.Link)
                  .setURL(client.config.davet)
                  .setDisabled(false)
                  );
              
              const embed = new EmbedBuilder()
              .setColor('Green')
              .setAuthor({ name: `${interaction.guild.name} Başvuru Sistemi` })
              .setTitle(t)
              .setDescription(d)
              .setThumbnail(interaction.guild.iconURL())
              .setImage('https://cdn.discordapp.com/attachments/998489086249668668/1019280719421382776/pngwing.com.png')
              .setTimestamp()
              .setFooter({ text: 'Başvurular Açık' })
              
             if(ıd) {
                 const guild = client.guilds.cache.get(interaction.guild.id);
                 const channel = guild.channels.cache.get(bkanal)
                 channel.messages.fetch(ıd).then(başvuru => { başvuru.edit({ embeds: [embed], components: [row] }) });
             } else {
                 const channel = await client.channels.cache.find(channel => channel.id === bkanal)
channel.send({ embeds: [embed], components: [row] }).then(msg => { data.set(`${interaction.guild.id}_basvuruMesajId`, msg.id) });
             }
              return;
          } else if(acm === 'kapat') {
//Veriler
              const bkanal = data.get(`${interaction.guild.id}_basvuruKanal`);
              const ıd = data.get(`${interaction.guild.id}_basvuruMesajId`);
              const t = data.get(`${interaction.guild.id}_basvuruTitle`) || 'Başvuru';
              const d = data.get(`${interaction.guild.id}_basvuruDesc`) || 'Yetkili Başvurusu Yapabilmek İçin Aşağıdaki Butona Tıklayın';
              const b = data.get(`${interaction.guild.id}_basvuruButonYazı`) || 'Başvur';
              
              interaction.reply({ content: 'Başvurular Kapatıldı!' });
              
              const row = new ActionRowBuilder().addComponents(
                  new ButtonBuilder()
                  .setCustomId('başvur')
                  .setLabel(b)
                  .setEmoji('📨')
                  .setStyle(ButtonStyle.Danger)
                  .setDisabled(true),
                  new ButtonBuilder()
                  .setLabel(`${client.user.username} Davet Et`)
                  .setStyle(ButtonStyle.Link)
                  .setURL(client.config.davet)
                  .setDisabled(false)
                  );
              
              const embed = new EmbedBuilder()
              .setColor('Red')
              .setAuthor({ name: `${interaction.guild.name} Başvuru Sistemi` })
              .setTitle(t)
              .setDescription(d)
              .setThumbnail(interaction.guild.iconURL())
              .setImage('https://cdn.discordapp.com/attachments/998489086249668668/1019280719421382776/pngwing.com.png')
              .setTimestamp()
              .setFooter({ text: 'Başvurular Kapalı' })
              
             if(ıd) {
                 const guild = client.guilds.cache.get(interaction.guild.id)
                 const channel = guild.channels.cache.get(bkanal)
                 channel.messages.fetch(ıd).then(başvuru => { başvuru.edit({ embeds: [embed], components: [row] }) });
             } else {
                 const channel = await client.channels.cache.find(channel => channel.id === bkanal)
channel.send({ embeds: [embed], components: [row] }).then(msg => { data.set(`${interaction.guild.id}_basvuruMesajId`, msg.id) });
             }
              return;
          }
      
  },
};