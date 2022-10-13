const { EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, ApplicationCommandType } = require('discord.js');
const { Snake } = require('discord-gamecord');

module.exports = {
    name: 'yılan-oyunu',
    description: 'Yılan Oyununu Oynarsınız.',
    type: ApplicationCommandType.ChatInput,
    cooldown: 3000,
    
    run: async (client, interaction) => {
        new Snake({
      message: interaction,
      slash_command: true,
      embed: {
        title: 'Yılan Oyunu',
        color: 'RANDOM',
        overTitle: 'Kaybettiniz!',
      },
      snake: { head: '🟢', body: '🟩', tail: '🟢' },
      emojis: {
        board: '⬛',
        food: '🍎',
        up: '⬆️', 
        down: '⬇️',
        right: '➡️',
        left: '⬅️',
      }
    }).startGame();

    },
};