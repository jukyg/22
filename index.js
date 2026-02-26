const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({ checkUpdate: false });
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('✅ Presence is Active!'));
app.listen(process.env.PORT || 3000);

client.on('ready', async () => {
  console.log(`✅ SUCCESS: Logged in as ${client.user.tag}`);
  
  setTimeout(() => {
    const r = new Discord.RichPresence()
      .setApplicationId('1476320950323642478')
      .setType('PLAYING')
      .setName('saif ₉₁')
      .setDetails('ME...')
      .setState('Watching ˢᵃᶤᶠ ₉₁')
      .setStartTimestamp(Date.now())
      // استخدم mp:attachments من Discord CDN
      .setAssetsLargeImage('mp:attachments/1412519202560151614/1476344589416927394/car.jpg')
      .setAssetsLargeText('saif ₉₁')
      .addButton('ME ?', 'https://linktr.ee/povce')
      .addButton('server', 'https://discord.gg/3HzTN5rv');
    
    client.user.setActivity(r);
    console.log('✅ Presence updated with mp:attachments!');
  }, 3000);
});

client.login(process.env.TOKEN);
