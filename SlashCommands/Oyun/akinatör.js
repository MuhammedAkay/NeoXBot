const { 
  EmbedBuilder,
  ApplicationCommandType 
} = require("discord.js");
const akinator = require("discord.js-akinator");

module.exports = {
  name: 'akinatör',
  description: 'Akinator Oyununu Başlatırsınız.',
  type: ApplicationCommandType.ChatInput,
  cooldown: 3000,
  options: [
    {
      name: 'oyun-türü',
      description: 'Oyunun Türünü Seçin',
      type: 3,
      required: true,
      choices: [
        {
          name: 'Hayvan',
          value: 'animal'
        },
        {
          name: 'Karakter',
          value: 'character'
        },
        {
          name: 'Obje',
          value: 'object'
        }
      ]
    },
    {
      name: 'yaş-sınırı',
      description: 'Çocuk Kilidini Ayarlar',
      type: 3,
      required: true,
      choices: [
        {
          name: 'Aktif',
          value: 'aktif'
        },
        {
          name: 'Kapalı',
          value: 'kapalı'
        }
      ]
    }
  ],
  run: async (client, interaction) => {
    const gameType = interaction.options.getString('oyun-türü');
    const childMode = interaction.options.getString('yaş-sınırı')
      .replace(/'aktif'/, true)
      .replace(/'kapalı'/, false)
    
    akinator(interaction, {
            language: 'tr',
            childMode: childMode,
            gameType: gameType,
            useButtons: true,
            embedColor: 'Random'
        });
  },
};