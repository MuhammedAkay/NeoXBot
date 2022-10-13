const { 
  EmbedBuilder,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
  ApplicationCommandType 
} = require("discord.js");

module.exports = {
  name: "avatar",
  description: "Avatarınızı Veya Belirttiğiniz Kişinin Avatarını Gösterir.",
  type: ApplicationCommandType.ChatInput,
  cooldown: 3000,
  options: [
    {
      name: 'kullanıcı',
      description: 'Avatarı Atılacak Kişi',
      type: 6,
      required: false
    }
  ],
  run: async (client, interaction) => {
    const user = interaction.options.getUser('kullanıcı')

    if(user) {
      const row = new ActionRowBuilder()
      .addComponents(
				new ButtonBuilder()
					.setLabel('PNG')
					.setStyle(ButtonStyle.Link)
        .setURL(`${user.displayAvatarURL({ dynamic: true, size: 1024 }).replace("webp", "png")}`),
        new ButtonBuilder()
					.setLabel('JPG')
					.setStyle(ButtonStyle.Link)
        .setURL(`${user.displayAvatarURL({ dynamic: true, size: 1024 }).replace("webp", "jpg")}`),
        new ButtonBuilder()
					.setLabel('WEBP')
					.setStyle(ButtonStyle.Link)
        .setURL(`${user.displayAvatarURL({ dynamic: true, size: 1024 }).replace("webp", "webp")}`),
        new ButtonBuilder()
					.setLabel('GIF')
					.setStyle(ButtonStyle.Link)
        .setURL(`${user.displayAvatarURL({ dynamic: true, size: 1024 }).replace("webp", "gif")}`),
			);
      const embed = new EmbedBuilder()
        .setColor('Random')
      .setTitle(`${user} Kişisinin Avatarı`)
    .setImage(user.displayAvatarURL({ dynamic: true, size: 1024 }))
      .setTimestamp()
      .setFooter({ text: `${interaction.user.username} Tarafından İstendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})

      interaction.reply({ embeds: [embed], components: [row]})
      return;
    }
    if(!user) {
      const row1 = new ActionRowBuilder()
      .addComponents(
				new ButtonBuilder()
					.setLabel('PNG')
					.setStyle(ButtonStyle.Link)
        .setURL(`${interaction.user.displayAvatarURL({ dynamic: true, size: 1024 }).replace("webp", "png")}`),
        new ButtonBuilder()
					.setLabel('JPG')
					.setStyle(ButtonStyle.Link)
        .setURL(`${interaction.user.displayAvatarURL({ dynamic: true, size: 1024 }).replace("webp", "jpg")}`),
        new ButtonBuilder()
					.setLabel('WEBP')
					.setStyle(ButtonStyle.Link)
        .setURL(`${interaction.user.displayAvatarURL({ dynamic: true, size: 1024 }).replace("webp", "webp")}`),
        new ButtonBuilder()
					.setLabel('GIF')
					.setStyle(ButtonStyle.Link)
        .setURL(`${interaction.user.displayAvatarURL({ dynamic: true, size: 1024 }).replace("webp", "gif")}`),
			);
      const embed1 = new EmbedBuilder()
        .setColor('Random')
.setImage(interaction.user.displayAvatarURL({ dynamic: true, size: 1024 }))
      .setTimestamp()
      .setFooter({ text: `${interaction.user.username} Tarafından İstendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})

      interaction.reply({ embeds: [embed1], components: [row1]})
      return;
    }
  },
};