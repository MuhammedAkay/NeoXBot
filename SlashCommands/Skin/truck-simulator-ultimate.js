const { EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, ApplicationCommandType } = require("discord.js");

module.exports = {
  name: "truck-simulator-ultimate",
  description: "Truck Simulator Ultimate",
  type: ApplicationCommandType.ChatInput,
  cooldown: 3000,
  run: async (client, interaction) => {
let a = 'https://play.google.com/store/apps/details?id=com.zuuks.truck.simulator.ultimate';
let b = 'https://apps.apple.com/app/id1553900372';
    let c = 'https://www.tsumods.com/';
    
    const button = new ButtonBuilder()
	.setLabel('Android')
	.setStyle(ButtonStyle.Link)
  .setURL(a)
    const button1 = new ButtonBuilder()
	.setLabel('IOS')
	.setStyle(ButtonStyle.Link)
  .setURL(b)
    const button2 = new ButtonBuilder()
	.setLabel('DLC')
	.setStyle(ButtonStyle.Link)
  .setURL(c)
    const button3 = new ButtonBuilder()
	.setCustomId('tsusc')
	.setLabel('Skinler')
	.setStyle(ButtonStyle.Secondary)

    const row = new ActionRowBuilder ().addComponents(button, button1, button2, button3)
    const embed = new EmbedBuilder()
    .setColor('Random')
    .setTitle('Bu oyun Hakkında')
    .setThumbnail('https://play-lh.googleusercontent.com/1xLGGEZmZbuAFEiDK4Y4hnj0XEj5QKQV69qr712_foDVZ4kT35kqoe9mqxj5-ikSJYA=w240-h480-rw')
    .setDescription(`**🚚 Truck Simulator 🚚**\n\n300 milyondan fazla oyuncunun oynadığı Bus Simulator : Ultimate yapımcılarından yepyeni bir oyun **Truck Simulator: Ultimate.**\n\nTamamen gerçekçi şehirler ve tırlar. Euro Truck Simulator ve American Truck Simulator tır deneyimi sizi bekliyor.\n\nDünyada ilk kez Simülasyon ve Tycoon oyunu bir ara.\n\n\nŞirketini kur, çalışanlar işe al, filonu genişlet. Dünyayı bir uçtan uca dolaşırken yolların kralı ol. 🚚`)
    .addFields(
      { name: '💡 Minimum sistem gereksinimleri', value: `🕹️ Truck Simulator: Ultimate için sistem gereksinimleri: **Android 7.0 veya üzeri ve en az 2GB bellek.** Diğer cihazları kullanan oyuncular oyunu düşük ayarlarda oynamayı deneyebilir.\n\n\nTürkiye, Amerika, Kanada, Rusya, Almanya, İtalya, Fransa, İspanya, Hollanda, Güney Kore, Japonya, Çin, Brezilya, Azerbaycan gibi dünyanın önde gelen ülkelerinde şirketini kur. Dünyanın en büyük lojistik şirketi ol.`, inline: false },
      { name: 'Truck Simulator Oyun Özellikleri', value: `> - Çok oyunculu sezon. İster ortak kargo taşıyın, ister yarışlara katılın. Yepyeni bir multiplayer deneyimi sizi bekliyor.\n> - 100'den fazla şehirde çok çeşitli kargoları taşıyın\n> - Nakliye borsasında ihalelere katılın daha yüksek kazanç elde edin\n> - Kendi işinizi yönetin\n> - Kendi kamyon filonuzu oluşturun\n> - Çalışanlar işe alın maksimum kar için şirketinizi yönetin\n> - Ofislerinizi dilediğiniz gibi tasarlayın\n> - Kamyonlarınızı lamba, koruyucu demirler, korna, kokpit ışıkları ve daha fazla modifikasyon seçeneği ile güncelleyin\n> - 32+ Harika Kamyon ve Çekici\n> - Amerikan Kamyonları ve Avrupa kamyonları ile oynayın\n> - İkinci el çekici pazarı\n> - Detaylı Kokpitler\n> - Dinlenme tesisleri. Artık Dinlenme tesislerinde yemek ve içecek siparişi verebilirsiniz\n> - DLC mod sistemi\n> - Türkçe seslendirme\n> - 250'den fazla radyo istasyonu\n> - Paralı otoban yolları\n> - Gerçekçi Hava Durumu\n> - Köy , Şehir , Otoban yolları\n> - Tamamen Türkçe oyun\n\nDaha fazla özellik eklenmeye devam edecek!`, inline: false },
    )
    .setTimestamp()
    .setFooter({ text: `${interaction.user.username} Tarafından İstendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})

    interaction.reply({ embeds: [embed], components: [row] })
  },
};
