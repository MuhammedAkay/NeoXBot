const { EmbedBuilder, ButtonBuilder, ButtonStyle, SelectMenuBuilder, ActionRowBuilder, ComponentType, AttachmentBuilder } = require('discord.js');
const client = require("../..")


client.on("interactionCreate", async (interaction) => {
  if(!interaction.isButton()) return;
if(interaction.customId === 'bsusc') {

  const button = new ButtonBuilder()
  .setCustomId('bsup1')
  .setLabel('Part 1')
  .setStyle(ButtonStyle.Secondary)
  const button1 = new ButtonBuilder()
  .setCustomId('bsup2')
  .setLabel('Part 2')
  .setStyle(ButtonStyle.Secondary)
  const row = new ActionRowBuilder().addComponents(button, button1)
  
  const embed = new EmbedBuilder()
      .setColor('Random')
      .addFields(
        { name: 'Otobüs Simulator: Ultimate', value: 'Burda Sadece Boş Şablonları Bulabilirsiniz.\nMenü Sınırı 25 Adet Olduğundan Dolayı Butonlar ile Part 1, Part 2 Olarak Ayırdık Butonlar İle Seçim Yapabilirsiniz.' },
        { name: '\u200B', value: '\u200B' },
        { name: 'Part 1 de bulunanlar', value: '**__Tempa__**\n1 • Opalin HD\n2 • Diamond Class\n3 • Tourmalin Plus\n4 • Safari HD\n5 • Maraton 13 Vip\n\n**__Merce-Ben__**\n1 • O302HL\n2 • O303\n3 • O403\n4 • Tourismo 16RHD\n5 • Travego 15SHD\n6 • Tourismo 17RHD\n7 • Travego 17SHD\n8 • Tourismo 19 RHD\n\n**__Yuton__**\n1 • ZK68H\n\n**__İrzar__**\n1 • I90 Integral\n\n**__Mcı__**\n1 • J450\n2 • J450 2017\n**__Setro__**\n1 • Topclass S 417 HDH\n2 • Topclass S 431DT\n3 • S 517HDH\n\n**__Neopan__**\n1 • Tourliner\n2 • Starline\n\n**__Nam__**\n1 • Lions Coach\n2 • Lions Coach 20\n\n**__Sania__**\n1 • Touring HD', inline: false },
        { name: 'Part 2 de bulunanlar', value: '**__Merce-Ben__**\n9 • Travego 19 SHD\n10 • Tourismo  19RHD Black Edition\n11 • Travego 19SHD Black Edition\n12 • Travego X\n\n**__Marcpolo__**\n1 • Paradiso G7\n\n**__Neopan__**\n3 • Skyliner 2020\n\n**__Vlvo__**\n1 • 9800', inline: false },
      )
      .setTimestamp()

 const embedMessage =  await interaction.update({ fetchReply: true, content: `Butonlar İle Seçim Yapabilirsiniz`, embeds: [embed], components: [row]}).then(msg => {

  const collector = msg.createMessageComponentCollector({ filter: i => {
	i.deferUpdate();
	return i.user.id === interaction.user.id}, componentType: ComponentType.Button, time: 15000 });

  collector.on('collect', async (i) => {
	if(i.customId === 'bsup1') {
        const s1 = new SelectMenuBuilder()
      .setCustomId('bsus')
      .setPlaceholder('Şablonlar')
      .addOptions([
        {
          label: 'Tempa',
          description: 'Opalin HD',
          value: 'bs1',
        },
        {
          label: 'Merce-Ben',
          description: 'O302HL',
          value: 'bs2',
        },
        {
          label: 'Merce-Ben',
          description: 'O303',
          value: 'bs3',
        },
        {
          label: 'Tempa',
          description: 'Diamond Class',
          value: 'bs4',
        },
        {
          label: 'Tempa',
          description: 'Tourmalin Plus',
          value: 'bs5',
        },
        {
          label: 'Tempa',
          description: 'Safari HD',
          value: 'bs6',
        },
        {
          label: 'Yuton',
          description: 'ZK68H',
          value: 'bs7',
        },
        {
          label: 'İrzar',
          description: 'I90 Integral',
          value: 'bs8',
        },
        {
          label: 'Mcı',
          description: 'J450',
          value: 'bs9',
        },
        {
          label: 'Setro',
          description: 'Topclass S 417 HDH',
          value: 'bs10',
        },
        {
          label: 'Merce-ben',
          description: 'O403',
          value: 'bs11',
        },
        {
          label: 'Merce-Ben',
          description: 'Tourismo 16RHD',
          value: 'bs12',
        },
        {
          label: 'Neopan',
          description: ' Tourliner',
          value: 'bs13',
        },
        {
          label: 'Merce-Ben',
          description: 'Travego 15SHD',
          value: 'bs14',
        },
        {
          label: 'Merce-Ben',
          description: 'Tourismo 17RHD',
          value: 'bs15',
        },
        {
          label: 'Merce-Ben',
          description: 'Travego 17SHD',
          value: 'bs16',
        },
        {
          label: 'Neopan',
          description: 'Starline',
          value: 'bs17',
        },
        {
          label: 'Nam',
          description: 'Lions Coach',
          value: 'bs18',
        },
        {
          label: 'Setro',
          description: 'Topclass S 431DT',
          value: 'bs19',
        },
        {
          label: 'Mcı',
          description: 'J450 2017',
          value: 'bs20',
        },
        {
          label: 'Tempa',
          description: 'Maraton 13 Vip',
          value: 'bs21',
        },
        {
          label: 'Sania',
          description: 'Touring HD',
          value: 'bs22',
        },
        {
          label: 'Setro',
          description: 'S 517HDH',
          value: 'bs23',
        },
        {
          label: 'Merce-Ben',
          description: 'Tourismo 19 RHD',
          value: 'bs24',
        },
        {
          label: 'Nam',
          description: 'Lions Coach 20',
          value: 'bs25',
        },
      ])
    const rowm = new ActionRowBuilder()
      .addComponents(s1)
const embedp1 = new EmbedBuilder()
    .setColor('Random')
    .setTitle('Bus Simulator Ultimate')
    .addFields(
      { name: 'Part 1', value: '**__Tempa__**\n1 • Opalin HD\n2 • Diamond Class\n3 • Tourmalin Plus\n4 • Safari HD\n5 • Maraton 13 Vip\n\n**__Merce-Ben__**\n1 • O302HL\n2 • O303\n3 • O403\n4 • Tourismo 16RHD\n5 • Travego 15SHD\n6 • Tourismo 17RHD\n7 • Travego 17SHD\n8 • Tourismo 19 RHD\n\n**__Yuton__**\n1 • ZK68H\n\n**__İrzar__**\n1 • I90 Integral\n\n**__Mcı__**\n1 • J450\n2 • J450 2017\n**__Setro__**\n1 • Topclass S 417 HDH\n2 • Topclass S 431DT\n3 • S 517HDH\n\n**__Neopan__**\n1 • Tourliner\n2 • Starline\n\n**__Nam__**\n1 • Lions Coach\n2 • Lions Coach 20\n\n**__Sania__**\n1 • Touring HD', inline: false },
    )
    .setTimestamp()
    .setFooter({ text: 'Şablonlar Oyunun Sitesinden Alınmıştır'})
     await msg.edit({ content: `Menüden Seçim Yapabilirsiniz.`, embeds: [embedp1], components: [rowm] })
  } else if(i.customId === 'bsup2') {
    const s2 = new SelectMenuBuilder()
      .setCustomId('bsus2')
      .setPlaceholder('Şablonlar Part 2')
      .addOptions([
        {
          label: 'Merce-Ben',
          description: 'Travego 19SHD',
          value: 'bs26',
        },
        {
          label: 'Merce-Ben',
          description: 'Tourismo  19RHD Black Edition',
          value: 'bs27',
        },
        {
          label: 'Marcpolo',
          description: 'Paradiso G7',
          value: 'bs28',
        },
        {
          label: 'Merce-Ben',
          description: 'Travego 19SHD Black edition',
          value: 'bs29',
        },
        {
          label: 'Merce-Ben',
          description: 'Travego X',
          value: 'bs30',
        },
        {
          label: 'Neopan',
          description: 'Skyliner 2020',
          value: 'bs31',
        },
        {
          label: 'Vlvo',
          description: '9800',
          value: 'bs32',
        },
      ])
    const rowm2 = new ActionRowBuilder()
      .addComponents(s2)
    
    const embedp2 = new EmbedBuilder()
    .setColor('Random')
    .setTitle('Bus Simulator Ultimate')
    .addFields(
              { name: 'Part 2', value: '**__Merce-Ben__**\n9 • Travego 19 SHD\n10 • Tourismo  19RHD Black Edition\n11 • Travego 19SHD Black Edition\n12 • Travego X\n\n**__Marcpolo__**\n1 • Paradiso G7\n\n**__Neopan__**\n3 • Skyliner 2020\n\n**__Vlvo__**\n1 • 9800', inline: false },
      )
    .setTimestamp()
    .setFooter({ text: 'Şablonlar Oyunun Sitesinden Alınmıştır'})
    await msg.edit({ content: `Menüden Seçim Yapabilirsiniz.`, embeds: [embedp2], components: [rowm2] })
  }
});

collector.on('end', (collected, i) => {
	const button = new ButtonBuilder()
  .setCustomId('bsup1')
  .setLabel('Part 1')
  .setStyle(ButtonStyle.Secondary)
  .setDisabled(true)
  const button1 = new ButtonBuilder()
  .setCustomId('bsup2')
  .setLabel('Part 2')
  .setStyle(ButtonStyle.Secondary)
  .setDisabled(true)
  const row1 = new ActionRowBuilder().addComponents(button, button1)
     msg.edit({ content: `Butonların Kullanma Süresi Bitti`, components: [row1] })
});
});
}
})

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isSelectMenu()) return;
  const kkk = client.dataskin.has(`${interaction.guild.id}_busSimulatorUltimate`)
  if(!kkk) return;
    let kanal = client.channels.cache.find(channel => channel.id === client.dataskin.get(`${interaction.guild.id}_busSimulatorUltimate`))
    const embed = new EmbedBuilder()
      .setColor('Random')
      .setTitle('Bus Simulator Ultimate Şablon')
      .setDescription(`Seçtiğiniz Skin ${kanal} Kanalına Atıldı`)
  .setFooter({ text: 'Şablonlar Oyunun Sitesinden Alınmıştır'})
    if (interaction.customId === 'bsus') {
      let value = interaction.values

      if (value[0] === 'bs1') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001056367639015444/1001056405001871430/Temsa-Opalin-HD.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Tempa Opalin HD Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      } else if (value[0] === 'bs2') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001056367639015444/1001058930052575263/Mercedes-0302-HL.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Merce-Ben O302HL Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      } else if (value[0] === 'bs3') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001056367639015444/1001058930375540766/Mercedes-Benz-0303.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Merce-Ben O303 Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      } else if (value[0] === 'bs4') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001056367639015444/1001101963863273583/Temsa_Diamond_Class.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Tempa Diamond Class Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      } else if (value[0] === 'bs5') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001056367639015444/1001101963578069112/Temsa_Tourmalin_Plus.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Tempa Tourmalin Plus Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      } else if (value[0] === 'bs6') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001056367639015444/1001105260837883994/Temsa_Safari_HD.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Tempa Safari HD Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      } else if (value[0] === 'bs7') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001056367639015444/1001108049852903484/Yutong_ZK6888H.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Yuton ZK68H Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      } else if (value[0] === 'bs8') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001056367639015444/1001109274388336760/Irizar_i80_integral.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Irzar I90 Integral Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      } else if (value[0] === 'bs9') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001056367639015444/1001110266374795334/MCI_J4500.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Mcı J450 Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      } else if (value[0] === 'bs10') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001056367639015444/1001114126258548736/Setra_TopClass_S_417_HDH.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Setro Topclass S417HDH Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      } else if (value[0] === 'bs11') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001056367639015444/1001115716616978472/Mercedes_0403.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Merce-Ben O403 Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      } else if (value[0] === 'bs12') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001056367639015444/1001121757610119238/Mercedes_Tourismo_16_RHD.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Merce-Ben Toursimo 16RHD Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      } else if (value[0] === 'bs13') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001056367639015444/1001122790566543380/Neoplan_Tourliner.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Neopan Tourliner Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      } else if (value[0] === 'bs14') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001056367639015444/1001123871992332359/Mercedes_Travego_15_SHD.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Mercedes Travego 15SHD Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      } else if (value[0] === 'bs15') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001056367639015444/1001126569789636708/Mercedes_Tourismo_17_RHD.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Merce-Ben Toursimo 17RHD Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      } else if (value[0] === 'bs16') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001056367639015444/1001125108531867678/Mercedes_Travego_17_SHD.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Merce-Ben Travego 17SHD Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      } else if (value[0] === 'bs17') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001056367639015444/1001175548061548554/Neoplan_Starline.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Neopan Starline Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      } else if (value[0] === 'bs18') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001056367639015444/1001176494221049926/Man_Lions_Coach.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Nam Lions Coach Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      } else if (value[0] === 'bs19') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001056367639015444/1001177268363739206/Setra_TopClass_S_431_DT.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Setro Topclass S431DT Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      } else if (value[0] === 'bs20') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001056367639015444/1001178013687365812/MCI_J4500_2017.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Mcı J450 2017 Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      } else if (value[0] === 'bs21') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001056367639015444/1001178527162445974/Temsa_Maraton_13_Vip.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Tempa Maraton 13 Vip Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      } else if (value[0] === 'bs22') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001056367639015444/1001179751525908550/Scania_Touring_HD.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Sania Touring HD Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      } else if (value[0] === 'bs23') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001056367639015444/1001180440608120852/Setra_S_517_HDH.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Setro S517HDH Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      } else if (value[0] === 'bs24') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001056367639015444/1001182309799710740/Mercedes_Tourismo_19_RHD.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Merce-Ben Toursimo 19RHD Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      } else if (value[0] === 'bs25') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001056367639015444/1001186566011637760/Man_Lions_Coach_2020.png?width=1200&height=1200')
        kanal.send({ content: `<@${interaction.user.id}> Nam Lions Coach 20 Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      }
    }
    if (interaction.customId === 'bsus2') {
      let value = interaction.values
      if (value[0] === 'bs26') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001056367639015444/1001183582200541245/Mercedes_Travego_19_SHD.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Merce-Ben Travego 19SHD Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      }
      if (value[0] === 'bs27') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001056367639015444/1001182309455769700/Mercedes_Tourismo_19_Black.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Merce-Ben Toursimo 19 RHD Black Edition Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      } else if (value[0] === 'bs28') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001056367639015444/1001190422984540210/Marcopolo_Paradiso_G7.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Marcpolo Paradiso G7 Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      } else if (value[0] === 'bs29') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001056367639015444/1001183581915324416/Mercedes_Travego_19_Black.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Merce-Ben Travego 19SHD Black Edition Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      } else if (value[0] === 'bs30') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001056367639015444/1001191893079703573/Mercedes_TravegoX.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Merce-Ben Travego X Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      } else if (value[0] === 'bs31') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001056367639015444/1001191855196737627/Neoplan_Skyliner_20.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Neopan Skyliner 2020 Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      } else if (value[0] === 'bs32') {
        const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1001056367639015444/1001191855842664592/Volvo_9800.png?width=1200&height=1200');
        kanal.send({ content: `<@${interaction.user.id}> Vlvo 9800 Boş Şablon`, files: [file] })
        await interaction.update({ embeds: [embed] })
      }
    }
  });