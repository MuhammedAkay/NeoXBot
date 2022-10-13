const { 
  EmbedBuilder,
  ApplicationCommandType 
} = require("discord.js");
const { Calculator } = require('super-djs');

module.exports = {
  name: 'hesap-makinesi',
  description: 'Hesap Yapmanız İçin Hesap Makinesi Oluşturur.',
  type: ApplicationCommandType.ChatInput,
  cooldown: 3000,
  run: async (client, interaction) => {
    new Calculator()
    .configure({
        name: `${interaction.user.nickname ? interaction.user.nickname : interaction.user.username} | Hesap Makinesi`,
        discordApi: {
            returnEphemeral: false,
        },
        colors: {
            main: "Blue",
            result: "Green"
        }
    })
    .run(interaction);
  },
};