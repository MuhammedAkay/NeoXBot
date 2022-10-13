# *EVENT*

```js
const client = require("../..");

//Kod
```

# *PREFİX KOMUT*
| Parameter | Type | Description |
| --------- | -------------------------------------------------------------------------- | ------------------------------------ |
| name | | Komut Adı |
| description | | Komut Açıklaması |
| cooldown | | Bekleme Süresi |
| userPerms | | Komutu Kullanan Kişi İçin Gerekli İzinler |
| botPerms | | Bot İçin Gerekli İzinler |


```js
const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: '',
  description: '',
  cooldown: 3000,
  userPerms: [],
  botPerms: [],
  run: async (client, message, args) => {
    //Kod
  },
};
```
# *SLASH KOMUT*
| Parameter | Type | Description |
| --------- | -------------------------------------------------------------------------- | ------------------------------------ |
| name | | Komut Adı |
| description | | Komut Açıklaması |
| cooldown | | Bekleme Süresi |
| type | | Komutun tipi |

```js
const { 
  EmbedBuilder,
  ApplicationCommandType 
} = require("discord.js");

module.exports = {
  name: '',
  description: '',
  type: ApplicationCommandType.ChatInput,
  cooldown: 3000,
  run: async (client, interaction) => {
    //Kod
  },
};
```