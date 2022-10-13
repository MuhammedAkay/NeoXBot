const { 
  EmbedBuilder,
  ButtonBuilder,
  ButtonType,
  SelectMenuBuilder,
  ActinRowBuilder,
  ChannelType,
  ApplicationCommandType 
} = require("discord.js");

module.exports = {
  name: 'skin-ayar',
  description: 'Botun Ayarlarını Yaparsınız.',
  type: ApplicationCommandType.ChatInput,
  cooldown: 3000,
  default_member_permissions: 'ManageGuild',
  options: [
        {
          name: 'istek-kanal',
          description: 'Skin İstek Kanalını Ayarlarsınız.',
          type: 1,
          options: [
            {
              name: 'kanal',
              description: 'Skin İstek Kanalını Seçin.',
              type: 7,
              required: true
            },
          ],
        },
        {
          name: 'şablon-kanalı',
          description: 'Şablonların Atılacağı Kanalların Ayarlarını Yaparsınız.',
          type: 2,
          options: [
            {
              name: 'bsu',
              description: 'Bus Simulator Ultimate Şablonunun Atılacağı Kanalı Ayarlarsınız.',
              type: 1,
              options: [
                {
                  name: 'kanal',
                  description: 'Şablonun Atılacağı Kanalı Seçin.',
                  type: 7,
                  required: true
                },
              ],
            },
            {
              name: 'tsu',
              description: 'Truck Simulator Ultimate Şablonunun Atılacağı Kanalı Ayarlarsınız.',
              type: 1,
              options: [
                {
                  name: 'kanal',
                  description: 'Şablonun Atılacağı Kanalı Seçin.',
                  type: 7,
                  required: true
                },
              ],
            },
            {
              name: 'toe3',
              description: 'Truckers Of Europe 3 Şablonunun Atılacağı Kanalı Ayarlarsınız.',
              type: 1,
              options: [
                {
                  name: 'kanal',
                  description: 'Şablonun Atılacağı Kanalı Seçin.',
                  type: 7,
                  required: true
                },
              ],
            },
          ],
        },
  ],
  
  run: async (client, interaction) => {
//Datalar
  const skin = client.dataskin;
  const sunucu = client.datasunucu;

//SubCommand
    const sub1 = interaction.options.getSubcommand('istek-kanal');
    const sub2 = interaction.options.getSubcommand('bsu');
    const sub3 = interaction.options.getSubcommand('tsu');
    const sub4 = interaction.options.getSubcommand('toe3');

//Option Kanal
    const kanal = interaction.options.getChannel('kanal');

//Kontroller
    const kontrol1 = skin.has(`${interaction.guild.id}_skinİstekKanalı`);
    const kontrol2 = skin.has(`${interaction.guild.id}_busSimulatorUltimate`);
    const kontrol3 = skin.has(`${interaction.guild.id}_truckSimulatorUltimate`);
    const kontrol4 = skin.has(`${interaction.guild.id}_TruckersOfEurope3`);

//Sub1 = Skin İstek Kanalı
    if(sub1) {
      if(kontrol1) {
  const embed = new EmbedBuilder()
        .setColor('Red')
        .setTitle('Başarısız')
        .setDescription('Skin İstek Kanalı Zaten Ayarlı.')
        .setTimestamp()
        .setFooter({ text: `${interaction.user.username} Tarafından İstendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})

        interaction.reply({ embeds: [embed]})
        return;
      };
      if(!kanal) {
const embed = new EmbedBuilder()
        .setColor('Red')
        .setTitle('Başarısız')
        .setDescription('Bir Kanal Belirtmelisiniz.')
        .setTimestamp()
        .setFooter({ text: `${interaction.user.username} Tarafından İstendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})

        interaction.reply({ embeds: [embed]})
        return;
      };
      if(kanal) {
  if(kanal.type === ChannelType.GuildText) {
    const embed = new EmbedBuilder()
        .setColor('Green')
        .setTitle('Başarılı')
        .setDescription(`Skin İstek Kanalı ${kanal} Olarak Ayarlandı.`)
        .setTimestamp()
        .setFooter({ text: `${interaction.user.username} Tarafından İstendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})

        interaction.reply({ embeds: [embed]})

skin.set(`${interaction.guild.id}_skinİstekKanalı`, kanal.id)
        
  } else {
    const embed = new EmbedBuilder()
        .setColor('Red')
        .setTitle('Başarısız')
        .setDescription('Belirtilen Kanal Bir Yazı Kanalı Değil.')
        .setTimestamp()
        .setFooter({ text: `${interaction.user.username} Tarafından İstendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})

        interaction.reply({ embeds: [embed]})
    
  };
      };
      return;
    };

//Sub2 = Bus Simulator Ultimate
    if(sub2) {
      if(kontrol2) {
  const embed = new EmbedBuilder()
        .setColor('Red')
        .setTitle('Başarısız')
        .setDescription('Bus Simulator Ultimate Şablon Kanalı Zaten Ayarlı.')
        .setTimestamp()
        .setFooter({ text: `${interaction.user.username} Tarafından İstendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})

        interaction.reply({ embeds: [embed]})
        return;
      };
      if(!kanal) {
const embed = new EmbedBuilder()
        .setColor('Red')
        .setTitle('Başarısız')
        .setDescription('Bir Kanal Belirtmelisiniz.')
        .setTimestamp()
        .setFooter({ text: `${interaction.user.username} Tarafından İstendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})

        interaction.reply({ embeds: [embed]})
        return;
      };
      if(kanal) {
        if(kanal.type === ChannelType.GuildText) {
          const embed = new EmbedBuilder()
        .setColor('Green')
        .setTitle('Başarılı')
        .setDescription(`Bus Simulator Ultimate Skin Şablon Kanalı ${kanal} Olarak Ayarlandı.`)
        .setTimestamp()
        .setFooter({ text: `${interaction.user.username} Tarafından İstendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})

        interaction.reply({ embeds: [embed]})

skin.set(`${interaction.guild.id}_busSimulatorUltimate`, kanal.id)
        } else {
          const embed = new EmbedBuilder()
        .setColor('Red')
        .setTitle('Başarısız')
        .setDescription('Belirtilen Kanal Bir Yazı Kanalı Değil.')
        .setTimestamp()
        .setFooter({ text: `${interaction.user.username} Tarafından İstendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})

        interaction.reply({ embeds: [embed]})
        }
      };
      return;
    };

//Sub3 = Truck Simulator Ultimate
    if(sub3) {
      if(kontrol3) {
  const embed = new EmbedBuilder()
        .setColor('Red')
        .setTitle('Başarısız')
        .setDescription('Truck Simulator Ultimate Şablon Kanalı Zaten Ayarlı.')
        .setTimestamp()
        interaction.reply({ embeds: [embed]})
        .setFooter({ text: `${interaction.user.username} Tarafından İstendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})

        return;
      };
      if(!kanal) {
const embed = new EmbedBuilder()
        .setColor('Red')
        .setTitle('Başarısız')
        .setDescription('Bir Kanal Belirtmelisiniz.')
        .setTimestamp()
        .setFooter({ text: `${interaction.user.username} Tarafından İstendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})

        interaction.reply({ embeds: [embed]})
        return;
      };
      if(kanal) {
        if(kanal.type === ChannelType.GuildText) {
          const embed = new EmbedBuilder()
        .setColor('Green')
        .setTitle('Başarılı')
        .setDescription(`Truck Simulator Ultimate Skin Şablon Kanalı ${kanal} Olarak Ayarlandı.`)
        .setTimestamp()
        .setFooter({ text: `${interaction.user.username} Tarafından İstendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})

        interaction.reply({ embeds: [embed]})

skin.set(`${interaction.guild.id}_truckSimulatorUltimate`, kanal.id)
        } else {
          const embed = new EmbedBuilder()
        .setColor('Red')
        .setTitle('Başarısız')
        .setDescription('Belirtilen Kanal Bir Yazı Kanalı Değil.')
        .setTimestamp()
        .setFooter({ text: `${interaction.user.username} Tarafından İstendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})

        interaction.reply({ embeds: [embed]})
        }
      };
      return;
    };

//Sub4 = Truckers Of Europe 3 
    if(sub4) {
      if(kontrol4) {
  const embed = new EmbedBuilder()
        .setColor('Red')
        .setTitle('Başarısız')
        .setDescription('Truckers Of Europe 3 Şablon Kanalı Zaten Ayarlı.')
        .setTimestamp()
        .setFooter({ text: `${interaction.user.username} Tarafından İstendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})

        interaction.reply({ embeds: [embed]})
        return;
      };
      if(!kanal) {
const embed = new EmbedBuilder()
        .setColor('Red')
        .setTitle('Başarısız')
        .setDescription('Bir Kanal Belirtmelisiniz.')
        .setTimestamp()
        .setFooter({ text: `${interaction.user.username} Tarafından İstendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})

        interaction.reply({ embeds: [embed]})
        return;
      };
      if(kanal) {
        if(kanal.type === ChannelType.GuildText) {
          const embed = new EmbedBuilder()
        .setColor('Green')
        .setTitle('Başarılı')
        .setDescription(`Truckers Of Europe 3 Skin Şablon Kanalı ${kanal} Olarak Ayarlandı.`)
        .setTimestamp()
        .setFooter({ text: `${interaction.user.username} Tarafından İstendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})

        interaction.reply({ embeds: [embed]})

skin.set(`${interaction.guild.id}_truckersOfEurope3`, kanal.id)
        } else {
          const embed = new EmbedBuilder()
        .setColor('Red')
        .setTitle('Başarısız')
        .setDescription('Belirtilen Kanal Bir Yazı Kanalı Değil.')
        .setTimestamp()
        .setFooter({ text: `${interaction.user.username} Tarafından İstendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})

        interaction.reply({ embeds: [embed]})
        }
      }
      return;
    };
    
  },
};