const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({ checkUpdate: false });
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('✅ Presence is Active!'));
app.listen(process.env.PORT || 3000);

client.on('ready', async () => {
  console.log(`✅ SUCCESS: Logged in as ${client.user.tag}`);
  
  // 60 ساعة = 2.5 يوم
  const sixtyHoursAgo = Date.now() - (60 * 60 * 60 * 1000);
  
  const r = new Discord.RichPresence()
    .setApplicationId('1476320950323642478')
    .setType('PLAYING')
    .setName('saif ₉₁')
    .setDetails('ME... ')
    .setState('Watching ˢᵃᶤᶠ ₉₁')
    .setStartTimestamp(sixtyHoursAgo)
    .addButton('ME ?', 'https://linktr.ee/povce')
    .addButton('server', 'https://discord.gg/3HzTN5rv');
  
  client.user.setActivity(r);
  client.user.setStatus('dnd');
  console.log('✅ Presence active - Timer shows 60:00:00 (2.5 days)');
});

client.login(process.env.TOKEN);
