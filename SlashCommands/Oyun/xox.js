const { EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, ApplicationCommandType } = require('discord.js');
const { TicTacToe } = require('discord-gamecord');

module.exports = {
    name: 'tictactoe',
    description: 'Bir Kişi İle TicTacToe Oyununu Oynarsınız',
    type: ApplicationCommandType.ChatInput,
    cooldown: 3000,
    options: [
        {
            name: 'oyuncu',
            description: 'Oyunu Oynayacağınız Kişiyi Belirtin',
            type: 6,
            required: true
        },
        ],
    run: async (client, interaction) => {

new TicTacToe({
  message: interaction,
slash_command: true,
opponent: interaction.options.getUser('oyuncu'),
  embed: {
    title: 'Tic Tac Toe',
    overTitle: '**Kaybettiniz!**',
    color: 'RANDOM',
  },
  oEmoji: '⭕',
  xEmoji: '❌',
  blankEmoji: '➖',
  oColor: 'PRIMARY',
  xColor: 'DANGER',
  waitMessage: 'Rakip Bekleniyor...',
  turnMessage: '{emoji} | şimdi **{player}** Sırası!',
  askMessage: 'Hey {opponent} {challenger}, Sana Tic Tac Toe Oyununda Meydan Okuyor!',
  cancelMessage: 'Görünüşe Göre Rakip Tic Tac Toe Oynamayı Reddetti. \:(',
  timeEndMessage: 'Rakip Zamanında Cevap Vermediği İçin Oyun Bitti!',
  drawMessage: 'Berabere!',
  winMessage: '{emoji} | **{winner}** Oyunu Kazandı!',
  gameEndMessage: 'Oyun Bitmedi :(',
}).startGame();

    },
};