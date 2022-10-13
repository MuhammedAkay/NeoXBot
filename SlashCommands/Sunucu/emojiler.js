const { 
  EmbedBuilder,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
  ApplicationCommandType 
} = require("discord.js");

module.exports = {
  name: 'emojiler',
  description: 'Sunucunuzun Emojilerini Gösterir.',
  type: ApplicationCommandType.ChatInput,
  cooldown: 3000,
  run: async (client, interaction) => {
   
    let i0 = 0;
    let i1 = 10;
    let page = 1;

    let description;

    description = interaction.guild.emojis.cache
      .map(r => r)
      .map((r, i) => `**${i + 1})** ${r}\`(${r.name})\``)
      .slice(0, 10)
      .join("\n");

    let emb = new EmbedBuilder()
      .setColor('Random')
      .setTitle(`${interaction.guild.name} Sunucusunun Emojileri`)
      .setFooter({ text: `Sayfa ${page}/${Math.ceil(interaction.guild.emojis.cache.size / 10)}`})
      .setTimestamp()
      .setDescription(description);


    let ba = new ButtonBuilder() 
        .setStyle(ButtonStyle.Secondary)
        .setEmoji(client.config.emoji.i.geri)
        .setCustomId("previous_emoji")
    let bb = new ButtonBuilder()
        .setStyle(ButtonStyle.Secondary)
        .setEmoji(client.config.emoji.i.ileri)
        .setCustomId("next_emoji")
    
    let pages = new ActionRowBuilder().addComponents(ba.setDisabled(false), bb.setDisabled(false));

    if (interaction.guild.emojis.cache.size < 10)
      return interaction.reply({
        embeds: [emb],
        components: [new ActionRowBuilder().addComponents(ba.setDisabled(true), bb.setDisabled(true))]
      });

    let msg = await interaction.reply({
      embeds: [emb],
      components: [pages]
    });

    let filter = i => i.user.id === interaction.user.id;

    let collector = msg.createMessageComponentCollector({
      filter
    });

    collector.on("collect", async i => {
      if (i.customId === "previous_emoji") {
        i0 = i0 - 10;
        i1 = i1 - 10;
        page = page - 1;

        if (i1 < 9) return;

        description = i.guild.emojis.cache
          .map(r => r)
          .map((r, i) => `**${i + 1})** ${r}\`(${r.name})\``)
          .slice(i0, i1)
          .join("\n");

        emb
          .setFooter({ text: `Sayfa ${page}/${Math.ceil(i.guild.emojis.cache.size / 10)}`})
          .setDescription(description);

        i.update({
          embeds: [emb]
        });
      }

      if (i.customId === "next_emoji") {
        i0 = i0 + 10;
        i1 = i1 + 10;
        page = page + 1;

        if (i1 > i.guild.emojis.cache.size + 10) return;
        if (!i0 || !i1) return;

        description = i.guild.emojis.cache
          .map(r => r)
          .map((r, i) => `**${i + 1})** ${r}\`(${r.name})\``)
          .slice(i0, i1)
          .join("\n");

        emb
          .setFooter({ text: `Sayfa ${page}/${Math.ceil(i.guild.emojis.cache.size / 10)}`})
          .setDescription(description);
        i.update({
          embeds: [emb]
        });
      }
    });
  },
};