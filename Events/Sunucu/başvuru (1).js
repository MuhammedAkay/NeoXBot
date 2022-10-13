const { EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, ChannelType, PermissionsBitField } = require('discord.js');
const ms = require("pretty-ms");
const client = require('../..');

client.on('interactionCreate', async (i) => {

    const data = client.databasvuru;
    
    if(!i.isButton()) return;
    
    if(i.customId === 'başvur') {
        const guild = client.guilds.cache.get(i.guild.id);
        const user = i.guild.members.cache.get(i.user.id);
        
        const sorular = data.get(`${guild.id}_basvuruSorular`);
        if(!sorular) {
            i.reply('Başvuru Soruları Ayarlanmamış!')
        return;
        };
        const logkanal = data.get(`${guild.id}_basvuruLog`);
        const onayrol = data.get(`${guild.id}_basvuruOnayRol`);
        
        const kontrol = await guild.channels.cache.find(channel => channel.id === data.get(`${guild.id}_basvuruKategori`));
        if(!kontrol) {
            await i.reply({ content: '> Başvuru Kategorisini Bulamadım Lütfen Sunucu Yetkililerine Bildirin', ephemeral: true });
        return;
        };
       
       const kontrol1 = guild.channels.cache.find(cs => cs.name === `başvuru-${user.id}`)
        if(kontrol1){
            await i.reply({ content: '> Zaten açık bir başvuru talebin var!', ephemeral: true}).catch(e => {});
            return;
        };
        
        const kontrol2 = data.get(`${guild.id}_${user.id}_başvuru`);
        if(kontrol2 === i.user.id) {
            await i.reply({ content: '> Zaten Aktif Bir Başvurunuz Var Tekrar Başvuru Yapamazsınız.', ephemeral: true });
            return;
        };
        
        const kontrol3 = data.get(`${guild.id}_basvuruBan`);
        if(kontrol3 === user.id) {
            i.reply({ content: '> Başvuru Yapmanız İçin Yasaklanmış Kişiler Arasında Olmamanız Gerekli' });
            return;
        };
        
        /*const kontrolrol = i.member.roles.highest.position;
        const kontrolrol1 = data.get(`${i.guild.id}_basvuruEnDüşük`);
        const kontrolrol2 = i.member.roles.cache.has(kontrolrol1).highest.position;
        
        if(kontrolrol >= kontrolrol2) {
            i.reply({ content: '> Zaten Yetkili Rolüne Sahipsiniz Tekrar Başvuru Yapamazsınız.', ephemeral: true });
        };*/
        
        if(!kontrol1) {
            await guild.channels.create({
                name: `başvuru-${user.id}`,
                reason: `${i.user.tag} Başvuru Talebi`,
                type: ChannelType.GuildText,
                parent: kontrol,
                permissionOverwrites: [{
                    id: guild.id,
                    deny: [
                        PermissionsBitField.Flags.ViewChannel
                    ],
                },
                 {
                    id: user.id,
                    allow: [
                        PermissionsBitField.Flags.ViewChannel,
                        PermissionsBitField.Flags.SendMessages,
                        PermissionsBitField.Flags.ReadMessageHistory
                           ],
                },
                {
                    id: client.user.id,
                    allow: [
                        PermissionsBitField.Flags.ViewChannel,
                        PermissionsBitField.Flags.SendMessages,
                        PermissionsBitField.Flags.ReadMessageHistory,
                        PermissionsBitField.Flags.EmbedLinks
                        ],
                }
              ],
            }).then(async başvuru => {
                await data.set(`${i.guild.id}_${i.user.id}_başvuru`, i.user.id)
                let cevaplar = []
                let num = 0;
                const embed1 = new EmbedBuilder()
                .setTitle('BİLGİLENDİRME')
                .setColor('Blue')
                .setDescription(`Aşşağıda Sana Sorulan Sorulara Cevap Vererek Başvuru Yapa Bilirsin. Sana Sıra ile ** *${sorular.length} Soru Sorulacak,* Sen Bir Soruya Yanıt Verince Bot Diğer Soruyu Sorar!\nToplam 10 Dakikan Var.**`)
                .setTimestamp()
                await başvuru.send({embeds: [embed1]}).catch(e => {})
                await başvuru.send(`<@${user.id}> Soru 1: ${sorular[num]}`).catch(e => {console.log(e)})

                const collector1 = başvuru.createMessageCollector({time: 600000});
                collector1.on('end', async collected => {
                    setTimeout(async () => {
                       return await guild.channels.delete(başvuru, `${i.user.tag} Başvuru Sorularını Bitirdi`).catch(e => {} ) }, 10000) 
                    });
                const filter = m => {
                    return m.content.includes(m.content) && m.author.id === user.id;
                } 
                const collector = başvuru.createMessageCollector({ filter, time: 600000});
  
                collector.on('collect', async (msg) => {
                    if(sorular[num]){
                        cevaplar.push(`**Soru ${Number(num+1)}: ${sorular[num]}\nYanıt: ${msg.content}**`)
                        num = num+1
                        
await başvuru.send(sorular[num] ? "<@"+user.id+"> Soru "+Number(num+1)+": "+sorular[num] : "Soruları Cevapladığın İçin Teşekkürler, Bütün Sorular Bitti. Başvurun Yetkili Ekibine İletildi Artık Beklemen Gerekli!").catch(async e => {console.log(e)})
                        if(sorular.length === num){
                            collector.stop("success")
                            const log = guild.channels.cache.get(logkanal)
                            if(log){
                                const staff = guild.roles.cache.get(onayrol)
                                if(staff){

                                    let button = new ActionRowBuilder().addComponents(
                                        new ButtonBuilder()
                                        .setCustomId('bonayla')
                                        .setLabel('Onayla')
                                        .setEmoji(client.config.emoji.i.mevet)
                                        .setStyle(ButtonStyle.Success)
                                        .setDisabled(false),
                                        new ButtonBuilder()
                                        .setCustomId('breddet')
                                        .setLabel('Reddet')
                                        .setEmoji(client.config.emoji.i.mhayır)
                                        .setStyle(ButtonStyle.Danger)
                                        .setDisabled(false)
                                    )

                                    const embed = new EmbedBuilder()
                                    .setTitle('Yeni Başvuru Geldi')
                                    .setColor('Blue')
                                    .setDescription(`Başvuran: <@${user.id}>\n\n${cevaplar.map(cs => cs).join("\n\n")}`)
                                    .setTimestamp()
                                    await log.send({ embeds: [embed], components: [button] }).then(async cs => {
                                        await data.set(`${cs.id}_başvuru`, user.id)
                                    }).catch(e => {console.log(e)})
                                }}}}}); 

                collector.on('end', async collected => {
                    setTimeout(async () => {
                        if(!kontrol1) {
                            return;
                        }
                        return await guild.channels.delete(başvuru).catch(e => {})
                    }, 10000)
                });
  
                await i.reply({ content: `> Başvuru talebin için <#${başvuru.id}> kanalı açıldı. Bu kanala giderek soruları cevapla lütfen!`, ephemeral: true}).catch(e => {console.log(e)})
            });
            return;
        };
    };
    
    if(i.customId === 'bonayla') {
        let button = new ActionRowBuilder().addComponents(
                                        new ButtonBuilder()
                                        .setCustomId('bonayla')
                                        .setLabel('Onayla')
                                        .setEmoji(client.config.emoji.i.mevet)
                                        .setStyle(ButtonStyle.Success)
                                        .setDisabled(true),
                                        new ButtonBuilder()
                                        .setCustomId('breddet')
                                        .setLabel('Reddet')
                                        .setEmoji(client.config.emoji.i.mhayır)
                                        .setStyle(ButtonStyle.Danger)
                                        .setDisabled(true)
                                    );
        const k = data.get(`${i.message.id}_başvuru`);
        const rol = data.get(`${i.guild.id}_basvuruVerilecekRol`);
        const yrol = data.get(`${i.guild.id}_basvuruOnayRol`);
        const user = i.guild.members.cache.get(i.user.id);
        const onaymesajı = data.get(`${i.guild.id}_basvuruOnayMesajı`) || `*__Hey 👋 **${i.guild.name}** Sunucusunda Yapmış Olduğun Yetkili Başvurun Kabul Edildi. Tebrikler 👏`;
        
        if(user.roles.cache.has(yrol)){
            let csm = k
            if(csm){
                csm = i.guild.members.cache.get(csm)
                if(csm){
                    if(rol){
                            const role = i.guild.roles.cache.get(rol)
                            if(role){
                                await csm.roles.add(role.id).catch(e => {console.log(e)})
                            }
                        await data.delete(`${i.message.id}_başvuru`)
                        await data.delete(`${i.guild.id}_${csm}_başvuru`)
                        await csm.send({ content: onaymesajı }).then(async ss => {
                            await i.reply({ content: `> <@${csm.id}> İsimli Kişiye Yetkili Rolü Verildi Ve Dm Üzerinden Bilgilendirme Mesajı Yollandı!`}).catch(e => {console.log(e)})
}).catch(async e => {
                            await i.reply({ content: `> <@${csm.id}> İsimli Kişiye Yetkili Rolü Verildi Ancak Dm Kutusu Kapalı Diye Bilgilendirme Yapılamadı!`}).catch(e => {console.log(e)})
                        })
                        await i.message.edit({ components: [button] }).catch(e => {console.log(e)})
                    }} else {
                        await data.delete(`${i.message.id}_başvuru`)
                        await data.delete(`${i.guild.id}_${csm}_başvuru`)
                        await i.reply({ content: '> Bu Başvurunun Sahibi Sunucuda Bulunamadı Diye Talep Silindi!' }).catch(e => {console.log(e)})
                        await i.message.delete().catch(e => {console.log(e)})
                    }}} else {
                        await i.reply({ content: `> Sadece <@&${yrol}> Rolüne Sahip Kişiler Başvuru Onaylaya Bilir.` }).catch(e => {console.log(e)})
                    }
    };
    
    if(i.customId === 'breddet') {
        
        let button = new ActionRowBuilder().addComponents(
                                        new ButtonBuilder()
                                        .setCustomId('bonayla')
                                        .setLabel('Onayla')
                                        .setEmoji(client.config.emoji.i.mevet)
                                        .setStyle(ButtonStyle.Success)
                                        .setDisabled(true),
                                        new ButtonBuilder()
                                        .setCustomId('breddet')
                                        .setLabel('Reddet')
                                        .setEmoji(client.config.emoji.i.mhayır)
                                        .setStyle(ButtonStyle.Danger)
                                        .setDisabled(true)
                                    )
        
        const guild = client.guilds.cache.get(i.guild.id);
        const user = i.guild.members.cache.get(i.user.id);
        
        const k = data.get(`${i.message.id}_başvuru`);
        const rol = data.get(`${i.guild.id}_basvuruVerilecekRol`);
        const yrol = data.get(`${i.guild.id}_basvuruOnayRol`);
        const kk = data.get(`${guild.id}_${user.id}_başvuru`);
        const redmesajı = data.get(`${guild.id}_basvuruRedMesajı`) || `*__Hey 👋 Üzgünüm **${guild.name}** Sunucusunda Yapmış Olduğun Yetkili Başvurun Red Edildi.__*`;
        
        if(user.roles.cache.has(yrol)){
            let csm = k
            if(csm){
                csm = guild.members.cache.get(csm)
                if(csm){
                    await data.delete(k)
                    await data.delete(kk)
                    //await data.set("başvurutimeout."+csm.id, Date.now())
                    await csm.send({ content: redmesajı }).then(async ss => {
                        await i.reply({ content: `> <@${csm.i}'> İsimli Kişiye Başvurusunun Reddedildiği Hakkında Dm Üzerinden Bilgilendirme Mesajı Yollandı!` }).catch(e => {})
}).catch(async e => {
                        await i.reply({ content: `> <@${csm.id}> İsimli Kişiye Dm Kutusu Kapalı Diye Bilgilendirme Yapılamadı!` }).catch(e => {})
                    })
                    await data.delete(k)
                    await data.delete(kk)
                    await i.message.edit({ components: [button] }).catch(e => {})
                } else {
                    await data.delete(k)
                    await data.delete(kk)
                    await interaction.reply({ content: '> Bu Başvurunun Sahibi Sunucuda Bulunamadı Diye Talep Silindi!'}).catch(e => {})
                    await interaction.message.delete().catch(e => {})
                }}} else {
                    await interaction.reply({ content: `> Sadece <@&${yrol}> Rolüne Sahip Kişiler Başvuru Reddede Bilir.` }).catch(e => {})
                }
    };
});