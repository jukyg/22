const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({ checkUpdate: false });
const express = require('express');
const app = express();

// هذا السيرفر عشان "ريندر" يقتنع إن السكربت شغال
app.get('/', (req, res) => {
  res.send('Your account is now 24/7 Online!');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Express server is running.');
});

client.on('ready', () => {
  console.log(`SUCCESS: Logged in as ${client.user.tag}`);
  client.user.setPresence({ status: 'online' });
});

client.login(process.env.TOKEN);
