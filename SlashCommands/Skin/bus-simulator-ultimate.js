const { 
  EmbedBuilder,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
  ApplicationCommandType 
} = require("discord.js");

module.exports = {
  name: "bus-simulator-ultimate",
  description: "Bus Simulator Ultimate",
  type: ApplicationCommandType.ChatInput,
  cooldown: 3000,
  run: async (client, interaction) => {
    const db = client.skin;
let a = 'https://play.google.com/store/apps/details?id=com.zuuks.bus.simulator.ultimate';
let b = 'https://apps.apple.com/app/id1461749632';

    const button = new ButtonBuilder()
	.setLabel('Android')
	.setStyle(ButtonStyle.Link)
  .setURL(a)
    const button1 = new ButtonBuilder()
	.setLabel('IOS')
	.setStyle(ButtonStyle.Link)
  .setURL(b)
    const button2 = new ButtonBuilder()
	.setCustomId('bsusc')
	.setLabel('Skinler')
	.setStyle(ButtonStyle.Secondary)

    const row = new ActionRowBuilder ().addComponents(button, button1, button2)
    const embed = new EmbedBuilder()
    .setColor('Random')
    .setTitle('Bu oyun Hakkında')
    .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlaAC6wsumV959XOXLdLcXVs1mZE99NqXD9Q&usqp=CAU')
    .setDescription(`Türkiye haritalı Türk yapımı otobüs Otobüs şirketini kur en iyisi ol. oyunu.\n\nTamamen yenilenen **Bus Simulator: Ultimate** hoş geldiniz! 🚌\n\n📢 **Truck Simulator: Ultimate** oyunu yapımcılarından şehirler arası otobüs simülasyon oyunu **Bus Simulator: Ultimate** versiyon 2 Google Play 'de yayında.\n\n300 milyondan fazla kullanıcı tarafından yüklenen en popüler otobüs oyunu! Teşekkürler Türkiye! ❤️`)
    .addFields(
      { name: 'Türkiye şehirlerinin Orijinal otogarları.', value: `İstanbul Esenler Otogarı, İstanbul Cep Otogarı (Alibeyköy), Ankara, İzmir, Bursa, Antalya, Adana, Gaziantep, Kayseri, Konya, Diyarbakır, Mersin, Samsun, Aydın, Batman, Şanlıurfa, Sakarya,Van, Tekirdağ, Kahram anmaraş, Kocaeli, Trabzon, Denizli, Erzurum, Malatya, Çanakkale, Ordu, Mardin, Muğla, Balıkesir, Eskişehir, Çorum, Kastamonu, Afyonkarahisar ve daha fazlası **Otobüs Simulator: Ultimate** de.`, inline: false },
      { name: '💡 Minimum sistem gereksinimleri', value: `🕹️ Otobüs Simulator: Ultimate için sistem gereksinimleri: **Android 7.0 veya üzeri ve en az 2GB bellek.** Diğer cihazları kullanan oyuncular oyunu düşük ayarlarda oynamayı deneyebilir.\n\nTürkiye, Amerika, Rusya, Almanya, İtalya, Fransa, İspanya, Hollanda, Brezilya, Azerbaycan gibi dünyanın önde gelen ülkelerinde otobüs şirketini kur Dünyanın en büyük otobüs şirketi ol.`, inline: false },
      { name: 'Bus Simulator Oyun Özellikleri 🚌', value: `> - Tüm Türkiye şehirleri ve ilçeleri.\n> - Türkiye otogarları.\n> - 100 fazla ülke.\n> - Ücretsiz Multiplayer\n> - Türkiye haritası\n> - Dünyanın farklı yerlerinde ofis açma.\n> - Sosyal ve Gerçekçi tepkiler veren yolcu sistemi.\n> - Türkçe seslendirme\n> - 32+ Harika Otobüs\n> - Dinlenme tesisleri\n> - Yolcular seyahat deneyimlerine göre size puan verebilir.\n> - Detaylı Kokpitler\n> - 250'den fazla radyo istasyonu\n> - Paralı otoban yolları\n> - Yeni orijinal Almanya otogarları > Berlin, Dortmund, Dresden, Dusseldorf, Essen, Franfurt, Hamburg, Hannover, Mannheim, Munich, Nuremberg otogarları.\n> - Gerçekçi Hava Durumu > Yağmur, Kar ve daha birçok hava durumu seçeneği.\n> - Gerçekçi trafik\n> - Köy, Şehir, Otoban yolları\n> - Farklı kamera açıları (İç kamera, dış kamera ve 360 derece kamera)\n> - Harika mekanlar ve grafikler \n> - Tamamen Türkçe oyun\n\nGerçekçi şehirler arası otobüs sürme deneyimi. Şimdi ücretsiz oyna.`, inline: false },
    )
    .setTimestamp()
    .setFooter({ text: `${interaction.user.username} Tarafından İstendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})

interaction.reply({ embeds: [embed], components: [row] })
  },
};