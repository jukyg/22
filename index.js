const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({ checkUpdate: false });
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('✅ Presence is Active!'));
app.listen(process.env.PORT || 3000);

client.on('ready', async () => {
  console.log(`✅ SUCCESS: Logged in as ${client.user.tag}`);
  
  const hoursAgo = Date.now() - (178 * 60 * 60 * 1000);
  
  const r = new Discord.RichPresence()
    .setApplicationId('1476320950323642478')
    .setType('PLAYING')
    .setName('saif ₉₁')
    .setDetails('ME... ')
    .setState('Watching ˢᵃᶤᶠ ₉₁')
    .setStartTimestamp(hoursAgo) 
    .addButton('ME ?', 'https://linktr.ee/povce')
    .addButton('server', 'https://discord.gg/3HzTN5rv');

  client.user.setPresence({
    activities: [
      r,
      {
        name: 'Spotify',
        type: 'LISTENING',
        details: 'Rock That Body',
        state: 'Black Eyed Peas',
      }
    ],
    status: 'online'
  });

  console.log('✅ Presence active!');
});

client.login(process.env.TOKEN);
