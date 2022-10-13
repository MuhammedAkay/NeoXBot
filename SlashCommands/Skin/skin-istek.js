const { 
  EmbedBuilder,
  AttachmentBuilder,
  ApplicationCommandType 
} = require("discord.js");

module.exports = {
  name: "skin-istek",
  description: "Skin İstek Kanalına İsteğinizi Gönderirsiniz",
  type: ApplicationCommandType.ChatInput,
  cooldown: 3000,
  options: [
                {
                    name: "oyun",
                    description: "Skin Yapılmasını İstediğiniz Oyun",
                    type: 3,
                required: true
                },
                {
                    name: "araç",
                    description: "Skin Yapılmasını İstediğiniz Araç",
                    type: 3,
                required: true
                },
              {
                name: "şasi",
                description: "Skin Yapılacak Araç Şasisi(Dingil) örn: 4x2",
                type: 3,
                required: true
              },
              {
                name: "skin",
                description: "Yapılmasını istediğiniz skin hakkında biraz bilgi verin",
                type: 3,
                required: true
              },
              {
                name: "resim",
                description: "İstediğiniz Skin Örnek Fotoğrafı Zorunlu Değil",
                type: 11,
                required: false
              }
  ],
  
  run: async (client, interaction) => {
    /*const yetkili = client.dataskin.get(`${interaction.guild.id}_skinİstekYetkili`)
    const yetkili1 = client.dataskin.get(`${interaction.guild.id}_skinİstekYetkili`)*/
    
    const oyun = interaction.options.getString('oyun');
const arac = interaction.options.getString('araç');
    const sasi = interaction.options.getString('şasi');
    const skin = interaction.options.getString('skin');
    const foto = interaction.options.getAttachment('resim');
    
  const kontrol = client.dataskin.has(`${interaction.guild.id}_skinİstekKanalı`)
if(!kontrol) {
  interaction.reply({ embeds: [ 
    new EmbedBuilder()
    .setColor('Random')
    .setDescription('Skin İstek Sistemi Ayarlanmamış')]})
  return;
}
 //if(yetkili.aktifmi === 'kapali') {
  const kanal = await client.channels.cache.find(channel => channel.id === client.dataskin.get(`${interaction.guild.id}_skinİstekKanalı`))
interaction.reply({ embeds: [
  new EmbedBuilder()
.setColor('Random')
.setDescription(`Skin İstek Formunuz ${kanal} Kanalına Gönderildi`)]})
  if(foto) {
    
    kanal.send({ embeds: [
      new EmbedBuilder()
  .setColor('Random')
  .setAuthor({ name: `${interaction.user.username}`, iconURL: `${interaction.user.displayAvatarURL()}`})
  .addFields(
    { name: 'Skin İsteyen', value: `${interaction.user}`, inline: false },
    { name: 'Oyun', value: `${oyun}`, inline: false },
    { name: 'Araç', value: `${arac}`, inline: false },
    { name: 'Şasi', value: `${sasi}`, inline: false },
    { name: 'Skin', value: `${skin}`, inline: false },
    { name: 'Fotoğraf', value: 'İstenilen Skinin Örnek Fotoğrafı ⬇️', value: false },
  )
  .setImage(foto.url)
  .setTimestamp()
  .setFooter({ text: `${interaction.user.username} Tarafından İstendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})
] })
    return;
  } 
  if(!foto) {
    const kanal = await client.channels.cache.find(channel => channel.id === client.dataskin.get(`${interaction.guild.id}_skinİstekKanalı`))
    
    kanal.send({ embeds: [
      new EmbedBuilder()
  .setColor('Random')
  .setAuthor({ name: `${interaction.user.username}`, iconURL: `${interaction.user.displayAvatarURL()}`})
  .addFields(
    { name: 'Skin İsteyen', value: `${interaction.user}`, inline: false },
    { name: 'Oyun', value: `${oyun}`, inline: false },
    { name: 'Araç', value: `${arac}`, inline: false },
    { name: 'Şasi', value: `${sasi}`, inline: false },
    { name: 'Skin', value: `${skin}`, inline: false },
  )
  .setTimestamp()
  .setFooter({ text: `${interaction.user.username} Tarafından İstendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})

    ] })
  }
    /*return;
  };
  if(!yetkili1) {
    const kanal = await client.channels.cache.find(channel => channel.id === client.dataskin.get(`${interaction.guild.id}_skinİstekKanalı`))
interaction.reply({ embeds: [
  new EmbedBuilder()
.setColor('Random')
.setDescription(`Skin İstek Formunuz ${kanal} Kanalına Gönderildi`)]})
  if(foto) {
    
    kanal.send({ embeds: [
      new EmbedBuilder()
  .setColor('Random')
  .setAuthor({ name: `${interaction.user.username}`, iconURL: `${interaction.user.displayAvatarURL()}`})
  .addFields(
    { name: 'Skin İsteyen', value: `${interaction.user}`, inline: false },
    { name: 'Oyun', value: `${oyun}`, inline: false },
    { name: 'Araç', value: `${arac}`, inline: false },
    { name: 'Şasi', value: `${sasi}`, inline: false },
    { name: 'Skin', value: `${skin}`, inline: false },
    { name: 'Fotoğraf', value: 'İstenilen Skinin Örnek Fotoğrafı ⬇️', value: false },
  )
  .setImage(foto.url)
  .setTimestamp()] })
    return;
  } 
  if(!foto) {
    const kanal = await client.channels.cache.find(channel => channel.id === client.dataskin.get(`${interaction.guild.id}_skinİstekKanalı`))
    
    kanal.send({ embeds: [
      new EmbedBuilder()
  .setColor('Random')
  .setAuthor({ name: `${interaction.user.username}`, iconURL: `${interaction.user.displayAvatarURL()}`})
  .addFields(
    { name: 'Skin İsteyen', value: `${interaction.user}`, inline: false },
    { name: 'Oyun', value: `${oyun}`, inline: false },
    { name: 'Araç', value: `${arac}`, inline: false },
    { name: 'Şasi', value: `${sasi}`, inline: false },
    { name: 'Skin', value: `${skin}`, inline: false },
  )
  .setTimestamp()
    ] })
  };
    return;
  }
  if(yetkili.aktifmi === 'aktif') {
    const Stil = ButtonStyle;
    const b1 = new ButtonBuilder()
    .setCustomId('skinyapılıyor')
    .setLabel('Yapılmaya Başladı')
    .setStyle(Stil.Primary)
    const b2 = new ButtonBuilder()
    .setCustomId('skinyapıldı')
    .setLabel('Yapıldı')
    .setStyle(Stil.Success)
    const row = new ActionRowBuilder().addComponents(b1, b2)

    const kanal = await client.channels.cache.find(channel => channel.id === client.dataskin.get(`${interaction.guild.id}_skinİstekKanalı`))
interaction.reply({ embeds: [
  new EmbedBuilder()
.setColor('Random')
.setDescription(`Skin İstek Formunuz ${kanal} Kanalına Gönderildi`)]})
  if(foto) {
    
    kanal.send({ embeds: [
      new EmbedBuilder()
  .setColor('Random')
  .setAuthor({ name: `${interaction.user.username}`, iconURL: `${interaction.user.displayAvatarURL()}`})
  .addFields(
    { name: 'Skin İsteyen', value: `${interaction.user}`, inline: false },
    { name: 'Oyun', value: `${oyun}`, inline: false },
    { name: 'Araç', value: `${arac}`, inline: false },
    { name: 'Şasi', value: `${sasi}`, inline: false },
    { name: 'Skin', value: `${skin}`, inline: false },
    { name: 'Fotoğraf', value: 'İstenilen Skinin Örnek Fotoğrafı ⬇️', value: false },
  )
  .setImage(foto.url)
  .setTimestamp()], components: [row] })
    return;
  } 
  if(!foto) {
    const kanal = await client.channels.cache.find(channel => channel.id === client.dataskin.get(`${interaction.guild.id}_skinİstekKanalı`))
    
    kanal.send({ embeds: [
      new EmbedBuilder()
  .setColor('Random')
  .setAuthor({ name: `${interaction.user.username}`, iconURL: `${interaction.user.displayAvatarURL()}`})
  .addFields(
    { name: 'Skin İsteyen', value: `${interaction.user}`, inline: false },
    { name: 'Oyun', value: `${oyun}`, inline: false },
    { name: 'Araç', value: `${arac}`, inline: false },
    { name: 'Şasi', value: `${sasi}`, inline: false },
    { name: 'Skin', value: `${skin}`, inline: false },
  )
  .setTimestamp()
    ], components: [row] })
  };

    return;
    }*/
  },
};