const { EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, ApplicationCommandType } = require("discord.js");

module.exports = {
  name: "truckers-of-europe-3",
  description: "Truckers Of Europe 3",
  type: ApplicationCommandType.ChatInput,
  cooldown: 3000,
  run: async (client, interaction) => {
let a = 'https://play.google.com/store/apps/details?id=com.WandaSoftware.TruckersofEurope3';
let b = 'https://apps.apple.com/app/id1630315603';
    
    const button = new ButtonBuilder()
	.setLabel('Android')
	.setStyle(ButtonStyle.Link)
  .setURL(a)
    const button1 = new ButtonBuilder()
	.setLabel('IOS')
	.setStyle(ButtonStyle.Link)
  .setURL(b)
    const button2 = new ButtonBuilder()
  .setCustomId('toesc')
	.setLabel('Skinler')
	.setStyle(ButtonStyle.Secondary)

    const row = new ActionRowBuilder ().addComponents(button, button1, button2)
    const embed = new EmbedBuilder()
    .setColor('Random')
    .setTitle('Bu oyun Hakkında')
    .setThumbnail('https://play-lh.googleusercontent.com/FwKtLtLulWDsEawc5dOelxZyvzTQK6gEZUmqLkpEIlVJjiyPtikvwpWEkSrsgREt9yCg=w480-h960-rw')
    .setDescription(`Truckers of Europe 3 ile gerçek bir kamyoncu olun!

En gerçekçi kamyon fiziği ile yoğun sürüş deneyimi sunar.

Bu kamyon simülatörü ile gerçek kamyonları sürmek gibi hissedin.

Avrupa'dan birçok şehir arasında seyahat edin!

Para kazanın, yeni kamyon ve treyler satın alın, işinizi seçin ve kargonuzu açık bir dünyada teslim edin!

Truckers of Europe 3'te çok sayıda şasi konfigürasyonu, özelleştirme ve kozmetik içeren çok sayıda Avrupa kamyonu bulunur.

Yolların Kralı Olun!
İyi sürüşler!


**Özellikler:**
- Gerçekçi kamyon fiziği
- Mevcut tüm şasilere sahip 7 farklı kamyon (4x2, 6x2, 6x2/2, 6x2 Midlift,6x2 Taglift, 6x4, 8x4)
- 25 treyler ve birçok kargo seçeneği.
- Ağır yükler
- Gerçekçi motor sesleri
- Gerçekçi iç mekanlar
- Akıllı AI trafik sistemi
- Ülke yollarında ve otoyollarda sürün
- Gerçekçi hava koşulları
- Gündüz ve gece döngüsü
- Hasar ve yakıt tüketimi
- Kolay kontroller (eğme, düğmeler veya dokunmatik direksiyon)
- Başarılar ve Liderler
- Mükemmel HD grafikler ve optimizasyonlar`)
    .setTimestamp()
    .setFooter({ text: `${interaction.user.username} Tarafından İstendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})

    interaction.reply({ embeds: [embed], components: [row] })
  },
};
