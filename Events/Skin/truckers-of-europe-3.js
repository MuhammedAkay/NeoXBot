const { EmbedBuilder, ButtonBuilder, ButtonStyle, SelectMenuBuilder, ActionRowBuilder, ComponentType, AttachmentBuilder } = require('discord.js');
const client = require("../..")


client.on("interactionCreate", async (interaction) => {
  if(!interaction.isButton()) return;
if(interaction.customId === 'toesc') {
  
  const button = new ButtonBuilder()
  .setCustomId('toep1')
  .setLabel('Part 1')
  .setStyle(ButtonStyle.Secondary)
  .setDisabled(false)
  const button1 = new ButtonBuilder()
  .setCustomId('toep2')
  .setLabel('Part 2')
  .setStyle(ButtonStyle.Secondary)
  .setDisabled(true)
  const row = new ActionRowBuilder().addComponents(button, button1)
  
  const embed = new EmbedBuilder()
      .setColor('Random')
      .setTitle('Truckers Of Europe 3')
      .setDescription('Burda Sadece Boş Şablonları Bulabilirsiniz.')
      .addFields(
        { name: 'Showroom da bulunanlar', value: '**__Moon__**\n1 • Tga\n2 • Thx \n\n**__Steream__**\n1 • St 2010\n2 • Rt\n\n**__Merieles__**\n1 • Anteres\n\n**__Volcano__**\n1 • VN\n\n**__Fiora__**\n1 • Fi-Man', inline: false },
      )
      .setTimestamp()
  .setFooter({ text: 'Şablonlar Oyunun Sunucusundan Alınmıştır'})

 const embedMessage =  await interaction.update({ fetchReply: true, content: `Butonlar İle Seçim Yapabilirsiniz`, embeds: [embed], components: [row]}).then(msg => {

  const collector = msg.createMessageComponentCollector({ filter: i => {
	i.deferUpdate();
	return i.user.id === interaction.user.id}, componentType: ComponentType.Button, time: 15000 });

  collector.on('collect', async (i) => {
	if(i.customId === 'toep1') {
        const s1 = new SelectMenuBuilder()
      .setCustomId('toes')
      .setPlaceholder('Şablonlar')
      .addOptions([
        {
          label: 'Moon',
          description: 'Tha',
          value: 'toes1',
        },
        {
          label: 'Moon',
          description: 'Thx',
          value: 'toes2',
        },
        {
          label: 'Stream',
          description: 'Rt',
          value: 'toes3',
        },
        {
          label: 'Stream',
          description: 'St',
          value: 'toes4',
        },
        {
          label: 'Merieles',
          description: 'Anteres',
          value: 'toes5',
        },
        {
          label: 'Volcano',
          description: 'VN',
          value: 'toes6',
        },
        {
          label: 'Fiora',
          description: 'Fi-Man',
          value: 'toes7',
        },])
    const rowm = new ActionRowBuilder()
      .addComponents(s1)
const embedp1 = new EmbedBuilder()
    .setColor('Random')
    .setTitle('Truckers Of Europe 3')
    .addFields(
      { name: 'Showroom', value: '**__Moon__**\n1 • Tga\n2 • Thx \n\n**__Steream__**\n1 • St 2010\n2 • Rt\n\n**__Merieles__**\n1 • Anteres\n\n**__Volcano__**\n1 • VN\n\n**__Fiora__**\n1 • Fi-Man', inline: false },
    )
    .setTimestamp()
    .setFooter({ text: 'Şablonlar Oyunun Sunucusundan Alınmıştır'})
     await msg.edit({ content: `Menüden Seçim Yapabilirsiniz.`, embeds: [embedp1], components: [rowm] })
  } /*else if(i.customId === 'toep2') {
    const s2 = new SelectMenuBuilder()
      .setCustomId('a')
      .setPlaceholder('Şablonlar Part 2')
      .addOptions([
        {
          label: 'a',
          description: 'a',
          value: 'a',
        },
        {
          label: 'a',
          description: 'a',
          value: 'a',
        },
      ])
    const rowm2 = new ActionRowBuilder()
      .addComponents(s2)
    
    const embedp2 = new EmbedBuilder()
    .setColor('#008B8B')
    .setTitle('a')
    .addFields(
              { name: 'a', value: 'a', inline: false },
      )
    .setTimestamp()

    await msg.edit({ content: `Menüden Seçim Yapabilirsiniz.`, embeds: [embedp2], components: [rowm2] })
  }*/
});

collector.on('end', (collected, i) => {
	const button = new ButtonBuilder()
  .setCustomId('toep1')
  .setLabel('Part 1')
  .setStyle(ButtonStyle.Secondary)
  .setDisabled(true)
  const button1 = new ButtonBuilder()
  .setCustomId('toep2')
  .setLabel('Part 2')
  .setStyle(ButtonStyle.Secondary)
  .setDisabled(true)
  const row1 = new ActionRowBuilder().addComponents(button, button1)
     msg.edit({ content: `Butonların Kullanma Süresi Bitti`, components: [row1] })
});
});
}
})

client.on('interactionCreate', async (i) => {
  if(!i.isSelectMenu()) return;
  let value = i.values;
  const kkk = client.dataskin.has(`${i.guild.id}_truckersOfEurope3`)
  if(!kkk) return;
  let kanal = client.channels.cache.find(channel => channel.id === client.dataskin.get(`${i.guild.id}_truckersOfEurope3`))
  
    const embed = new EmbedBuilder()
      .setColor('Random')
      .setTitle('Truckers Of Europe 3 Şablon')
      .setDescription(`Seçtiğiniz Skin ${kanal} Kanalına Atıldı`)
  .setFooter({ text: 'Şablonlar Oyunun Sunucusundan Alınmıştır'})

  if(i.customId === 'toes') {
    if(value[0] === 'toes1') {
      const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001832858857525328/1001832934749241394/Moon-THA_Skin_Template.png?width=2048&height=2048');

      kanal.send({ content: `<@${i.user.id}> Moon THA Boş Şablon`, files: [file] })
      i.update({ embeds: [embed] })
    } else if(value[0] === 'toes2') {
      const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001832858857525328/1001834015600431134/Moon-THX_Skin_Template.png?width=2048&height=2048');

      kanal.send({ content: `<@${i.user.id}> Moon THX Boş Şablon`, files: [file] })
      i.update({ embeds: [embed] })
    } else if(value[0] === 'toes3') {
      const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001832858857525328/1001834627780055101/Stream-RT_Skin_Template.png?width=2048&height=2048');

      kanal.send({ content: `<@${i.user.id}> Stream RT Boş Şablon`, files: [file] })
      i.update({ embeds: [embed] })
    } else if(value[0] === 'toes4') {
      const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001832858857525328/1001835149417250836/Stream-ST_Skin_Template.png?width=2048&height=2048');

kanal.send({ content: `<@${i.user.id}> Stream ST Boş Şablon`, files: [file] })
i.update({ embeds: [embed] })
    } else if(value[0] === 'toes5') {
      const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001832858857525328/1001835728877142076/Merieles-Antares_Skin_Template.png?width=2048&height=2048');

      kanal.send({ content: `<@${i.user.id}> Merieles Antares Boş Şablon`, files: [file] })
      i.update({ embeds: [embed] })
    } else if(value[0] === 'toes6') {
      const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001832858857525328/1001836479825330216/Volcano-VN_Skin_Template.png?width=2048&height=2048');

      kanal.send({ content: `<@${i.user.id}> Volcano VN Boş Şablon`, files: [file] })
      i.update({ embeds: [embed] })
    } else if(value[0] === 'toes7') {
      const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001832858857525328/1001837335241035946/Fiora-Fi-Man_Skin_Template.png?width=2048&height=2048');

      kanal.send({ content: `<@${i.user.id}> Fiora Fi-Man Boş Şablon`, files: [file] })
      i.update({ embeds: [embed] })
    }
  }
})