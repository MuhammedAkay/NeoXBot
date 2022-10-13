const { EmbedBuilder, ButtonBuilder, ButtonStyle, SelectMenuBuilder, ActionRowBuilder, ComponentType, AttachmentBuilder } = require('discord.js');
const client = require("../..")



client.on("interactionCreate", async (interaction) => {
  if(!interaction.isButton()) return;
if(interaction.customId === 'tsusc') {
  
  const button = new ButtonBuilder()
  .setCustomId('tsup1')
  .setLabel('Europe Şablon')
  .setStyle(ButtonStyle.Secondary)
  const button1 = new ButtonBuilder()
  .setCustomId('tsup2')
  .setLabel('American Şablon')
  .setStyle(ButtonStyle.Secondary)
  
  const row = new ActionRowBuilder().addComponents(button, button1)
  
  const embed = new EmbedBuilder()
      .setColor('Random')
      .addFields(
        { name: 'Truck Simulator: Ultimate', value: 'Burda Sadece Boş Şablonları Bulabilirsiniz.', inline: false },
        { name: '\u200B', value: '\u200B', inline: false },
        { name: 'Europe Showroom da bulunanlar', value: '**__BCM__**\n1 • Fatih 1997\n2 • Prof 827 2007\n\n**__Nam__**\n1 • TGX 2010\n2 • TGX 2010 6x4\n\n**__Vlvo__**\n1 • FH 16 2010\n2 • FH 16 2010 6x4\n3 • FH 2021\n4 • FH 2021 6x4\n\n**__Rnut__**\n1 • Magnum 2010\n2 • Magnum 2010 6x4\n3 • T-Range 2021\n\n**__Iveco__**\n1 • Starlıs 2009\n2 • Starlıs 2009 6x4\n**__Sanıa__**\n1 • R420 2010\n2 • R420 2010 6x4\n\n**__Dfa__**\n1 • XF 2010\n2 • XF 2010 6x4\n3 • XF 510 Euro 6\n4 • XF 510 Euro 6 6x4\n\n**__Merce-Ben__**\n1 • Actros 1844 2010\n2 • Actros 1844 2010 6x4\n3 • Actros 1844 2010 6x4 2\n4 • Actros 1851 2020\n5 • Actros 1851 2020 6x4', inline: false },
        { name: 'America Showroom da bulunanlar', value: '**__Inter__**\n1 • 9800 1998\n\n**__Kenwork__**\n1 • T800 2020\n2 • K100\n\n**__Freıghter__**\n1 • Classic XL 2001\n2 • Cascadıa\n\n**__Vlvo__**\n1 • VNL 780 2016\n\n**__Pederbit__**\n1 • 579 2018\n\n**__Maks__**\n1 • Anthem 2018\n\n**__Master__**\n1 • Star 49X', inline: false },
      )
      .setTimestamp()
  .setFooter({ text: 'Şablonlar Oyunun Sitesinden Alınmıştır'})

 const embedMessage =  await interaction.update({ fetchReply: true, content: `Butonlar İle Seçim Yapabilirsiniz`, embeds: [embed], components: [row]}).then(msg => {

  const collector = msg.createMessageComponentCollector({ filter: i => {
	i.deferUpdate();
	return i.user.id === interaction.user.id}, componentType: ComponentType.Button, time: 15000 });

  collector.on('collect', async (i) => {
	if(i.customId === 'tsup1') {

    const s1 = new SelectMenuBuilder()
      .setCustomId('tsus')
      .setPlaceholder('Şablonlar')
      .addOptions([
        {
          label: 'BCM',
          description: 'Fatih 1997',
          value: 'ts1',
        },
        {
          label: 'BCM',
          description: 'Prof 827 2007',
          value: 'ts2',
        },
        {
          label: 'Nam',
          description: 'TGX 2010',
          value: 'ts3',
        },
        {
          label: 'Nam',
          description: 'TGX 2010 6x4',
          value: 'ts4',
        },
        {
          label: 'Vlvo',
          description: 'FH 16 2010',
          value: 'ts5',
        },
        {
          label: 'Vlvo',
          description: 'FH 16 2010 6x4',
          value: 'ts6',
        },
        {
          label: 'Rnut',
          description: 'Magnum 2010',
          value: 'ts7',
        },
        {
          label: 'Rnut',
          description: 'Magnum 2010 6x4',
          value: 'ts8',
        },
        {
          label: 'Iveco',
          description: 'Starlıs 2009',
          value: 'ts9',
        },
        {
          label: 'Iveco',
          description: 'Starlıs 2009 6x4',
          value: 'ts10',
        },
        {
          label: 'Sanıa',
          description: 'R420 2010',
          value: 'ts11',
        },
        {
          label: 'Sanıa',
          description: 'R420 2010 6x4',
          value: 'ts12',
        },
        {
          label: 'Dfa',
          description: 'XF 2010',
          value: 'ts13',
        },
        {
          label: 'Dfa',
          description: 'XF 2010 6x4',
          value: 'ts14',
        },
        {
          label: 'Merce-Ben',
          description: 'Actros 1844 2010',
          value: 'ts15',
        },
        {
          label: 'Merce-Ben',
          description: 'Actros 1844 2010 6x4',
          value: 'ts16',
        },
        {
          label: 'Merce-Ben',
          description: 'Actros 1844 2010 6x4 2',
          value: 'ts17',
        },
        {
          label: 'Rnut',
          description: 'T-Range 2021',
          value: 'ts18',
        },
        {
          label: 'Lord',
          description: 'F-Max 2020',
          value: 'ts19',
        },
        {
          label: 'Dfa',
          description: 'XF 510 Euro 6',
          value: 'ts20',
        },
        {
          label: 'Dfa',
          description: 'XF 510 Euro 6 6x4',
          value: 'ts21',
        },
        {
          label: 'Merce-Ben',
          description: 'Actros 1851 2020',
          value: 'ts22',
        },
        {
          label: 'Merce-Ben',
          description: 'Actros 1851 2020 6x4',
          value: 'ts23',
        },
        {
          label: 'Vlvo',
          description: 'FH 2021',
          value: 'ts24',
        },
        {
          label: 'Vlvo',
          description: 'FH 2021 6x4',
          value: 'ts25',
        },])
    const rowm = new ActionRowBuilder()
      .addComponents(s1)
         
const embedp1 = new EmbedBuilder()
    .setColor('Random')
    .setTitle('Truck Simulator: Ultimate')
    .addFields(
      { name: 'Europe Showroom', value: '**__BCM__**\n1 • Fatih 1997\n2 • Prof 827 2007\n\n**__Nam__**\n1 • TGX 2010\n2 • TGX 2010 6x4\n\n**__Vlvo__**\n1 • FH 16 2010\n2 • FH 16 2010 6x4\n3 • FH 2021\n4 • FH 2021 6x4\n\n**__Rnut__**\n1 • Magnum 2010\n2 • Magnum 2010 6x4\n3 • T-Range 2021\n\n**__Iveco__**\n1 • Starlıs 2009\n2 • Starlıs 2009 6x4\n**__Sanıa__**\n1 • R420 2010\n2 • R420 2010 6x4\n\n**__Dfa__**\n1 • XF 2010\n2 • XF 2010 6x4\n3 • XF 510 Euro 6\n4 • XF 510 Euro 6 6x4\n\n**__Merce-Ben__**\n1 • Actros 1844 2010\n2 • Actros 1844 2010 6x4\n3 • Actros 1844 2010 6x4 2\n4 • Actros 1851 2020\n5 • Actros 1851 2020 6x4', inline: false },
    )
    .setTimestamp()
    .setFooter({ text: 'Şablonlar Oyunun Sitesinden Alınmıştır'})
     await msg.edit({ content: `Menüden Seçim Yapabilirsiniz.`, embeds: [embedp1], components: [rowm] })
  } else if(i.customId === 'tsup2') {
    const s1 = new SelectMenuBuilder()
      .setCustomId('tsus2')
      .setPlaceholder('Şablonlar')
      .addOptions([
        {
          label: 'Inter',
          description: '9800 1998',
          value: 'ts26',
        },
        {
          label: 'Kenwork',
          description: 'T800 2020',
          value: 'ts27',
        },
        {
          label: 'Freıghter',
          description: 'Classic XL 2001',
          value: 'ts28',
        },
        {
          label: 'Kenwork',
          description: 'K100',
          value: 'ts29',
        },
        {
          label: 'Vlvo',
          description: 'VNL 780 2016',
          value: 'ts30',
        },
        {
          label: 'Pederbit',
          description: '579 2018',
          value: 'ts31',
        },
        {
          label: 'Maks',
          description: 'Anthem 2018',
          value: 'ts32',
        },
        {
          label: 'Master',
          description: 'Star 49X',
          value: 'ts33',
        },
        {
          label: 'Freıghter',
          description: 'Cascadıa',
          value: 'ts34',
        },])
    const rowm2 = new ActionRowBuilder()
      .addComponents(s1)
        const embedp2 = new EmbedBuilder()
    .setColor('Random')
    .setTitle('Truck Simulator: Ultimate')
    .addFields(
      { name: 'American Showroom', value: '**__Inter__**\n1 • 9800 1998\n\n**__Kenwork__**\n1 • T800 2020\n2 • K100\n\n**__Freıghter__**\n1 • Classic XL 2001\n2 • Cascadıa\n\n**__Vlvo__**\n1 • VNL 780 2016\n\n**__Pederbit__**\n1 • 579 2018\n\n**__Maks__**\n1 • Anthem 2018\n\n**__Master__**\n1 • Star 49X', inline: false },
    )
    .setTimestamp()
    .setFooter({ text: 'Şablonlar Oyunun Sitesinden Alınmıştır'})
    await msg.edit({ content: `Menüden Seçim Yapabilirsiniz.`, embeds: [embedp2], components: [rowm2] })
  }
});

collector.on('end', (collected, i) => {
	const button = new ButtonBuilder()
  .setCustomId('tsup1')
  .setLabel('Europe Şablon')
  .setStyle(ButtonStyle.Secondary)
  .setDisabled(true)
  const button1 = new ButtonBuilder()
  .setCustomId('tsup2')
  .setLabel('American Şablon')
  .setStyle(ButtonStyle.Secondary)
  .setDisabled(true)
  
  const row1 = new ActionRowBuilder().addComponents(button, button1)
     msg.edit({ content: `Butonların Kullanma Süresi Bitti`, components: [row1] })
});
});
}
})

//Truck Simulator Ultimate
  client.on('interactionCreate', async (interaction) => {
    if (!interaction.isSelectMenu()) return;
    const kkk = client.dataskin.has(`${interaction.guild.id}_truckSimulatorUltimate`)
  if(!kkk) return;
    let kanal = client.channels.cache.find(channel => channel.id === client.dataskin.get(`${interaction.guild.id}_truckSimulatorUltimate`))
    const embed = new EmbedBuilder()
      .setColor('Random')
      .setTitle('Truck Simulator Ultimate Şablon')
      .setDescription(`Seçtiğiniz Skin Şablonu ${kanal} Kanalına Atıldı`)
    .setFooter({ text: 'Şablonlar Oyunun Sitesinden Alınmıştır'})
    if (interaction.customId === 'tsus') {
      let value = interaction.values

      if (value[0] === 'ts1') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001174705572696094/1001575478559264908/bcm-fatih.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> BCM Fatih 1997 Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      }
      if (value[0] === 'ts2') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001174705572696094/1001575478198550618/bcm_pro.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> BCM Prof 827 2007 Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      }
      if (value[0] === 'ts3') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001174705572696094/1001575553595347074/nam-tgx2010.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Nam TGX 2010 Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      }
      if (value[0] === 'ts4') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001174705572696094/1001575553595347074/nam-tgx2010.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Nam TGX 2010 6x4 Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      }
      if (value[0] === 'ts5') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001174705572696094/1001575550873247835/vlvo-fh16_2010.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Vlvo FH16 2010 Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      }
      if (value[0] === 'ts6') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001174705572696094/1001575550873247835/vlvo-fh16_2010.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Vlvo FH16 2010 6x4 Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      }
      if (value[0] === 'ts7') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001174705572696094/1001575552261562510/rnut-magnum2010.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Rnut Magnum 2010 Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      }
      if (value[0] === 'ts8') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001174705572696094/1001575552261562510/rnut-magnum2010.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Rnut Magnum 2010 6x4 Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      }
      if (value[0] === 'ts9') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001174705572696094/1001575547656208524/iveoc-starlis2009.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Iveco Starlis 2009 Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      }
      if (value[0] === 'ts10') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001174705572696094/1001575547656208524/iveoc-starlis2009.png?width=1200&height=1200 ');
        kanal.send({ content: `<@${interaction.user.id}> Iveco Starlis 2009 6x4 Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      }
      if (value[0] === 'ts11') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001174705572696094/1001575551439486976/sania-r420_2010.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Sania R420 2010 Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      }
      if (value[0] === 'ts12') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001174705572696094/1001575551439486976/sania-r420_2010.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Sania R420 2010 6x4 Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      }
      if (value[0] === 'ts13') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001174705572696094/1001575550005026857/dfa_xf2010.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Dfa XF 2010 Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      }
      if (value[0] === 'ts14') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001174705572696094/1001575550005026857/dfa_xf2010.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Dfa XF 2010 6x4 Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      }
      if (value[0] === 'ts15') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001174705572696094/1001575553972846632/merce-ben-actros2010.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Merce-Ben 1844 2010 Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      }
      if (value[0] === 'ts16') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001174705572696094/1001575553972846632/merce-ben-actros2010.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Merce-Ben 1844 6x4 Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      }
      if (value[0] === 'ts17') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001174705572696094/1001575553972846632/merce-ben-actros2010.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Merce-Ben 1844 6x4 2 Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      }
      if (value[0] === 'ts18') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001174705572696094/1001575551942807643/rnut_t-range2021.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Rnut T-Range 2021 Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      }
      if (value[0] === 'ts19') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001174705572696094/1001575545286434898/lord-fmax2020.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Lord F-Max 2020 Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      }
      if (value[0] === 'ts20') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001174705572696094/1001575549073887262/dfaxfe6.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Dfa XF 510 Euro6 Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      }
      if (value[0] === 'ts21') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001174705572696094/1001575549073887262/dfaxfe6.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Dfa XF 510 Euro6 6x4 Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      }
      if (value[0] === 'ts22') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001174705572696094/1001575478823485612/merce-ben-actros2020.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Merce-Ben Actros 1851 2020 Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      }
      if (value[0] === 'ts23') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001174705572696094/1001575478823485612/merce-ben-actros2020.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Merce-Ben 1851 2020 6x4 Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      }
      if (value[0] === 'ts24') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001174705572696094/1001575550357360651/vlvo-fh2021.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Vlvo FH 2021 Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      }
      if (value[0] === 'ts25') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001174705572696094/1001575550357360651/vlvo-fh2021.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Vlvo FH 2021 6x4 Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      }
    }
    if (interaction.customId === 'tsus2') {
      let value = interaction.values

      if (value[0] === 'ts26') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001174705572696094/1001575548096614410/inter9800.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> İnter 9800 1998 Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      }
      if (value[0] === 'ts27') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001174705572696094/1001575546108526613/kenwork-t800.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Kenwork T800 2020 Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      }
      if (value[0] === 'ts28') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001174705572696094/1001575548629295184/freighter-classic.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Freighter Classic XL 2001 Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      }
      if (value[0] === 'ts29') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001174705572696094/1001575547018678282/kenwork-k100.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Kenwork K100 Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      }
      if (value[0] === 'ts30') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001174705572696094/1001575549858226216/vlvo_vnl780.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Vlvo VNL 780 2016 Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      }
      if (value[0] === 'ts31') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001174705572696094/1001575552970408036/pederbit-579.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Pederbit 579 2018 Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      }
      if (value[0] === 'ts32') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001174705572696094/1001575544913137694/maks-anthem2018.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Maks Anthem 2018 Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      }
      if (value[0] === 'ts33') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001174705572696094/1001575554526498876/master-49x.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Master Star 49X Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      }
      if (value[0] === 'ts34') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001174705572696094/1001575550692900884/cascadia.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Freighter Cascadia Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      }
    }
  });