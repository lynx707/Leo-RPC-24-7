const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'Asia/Dhaka', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1079010612769722508')
    .setType('WATCHING')
    .setURL('https://www.youtube.com/patkhet') //Must be a youtube video link 
    .setState('He is only mine')
    .setName('My Boy ♡')
    .setDetails(`THE NAME IT SHOWS YOUR STREAMING [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1138126775856152626/1139828092781731860/a_6563b456acdc0fd74afbe3eeb945c79b.gif') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('♡♡♡') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/emojis/730639619153985546.gif') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Heart') //Text when you hover the Small image
    .addButton('Discord Server', 'https://discord.gg/STrSPVtun3')
    .addButton('Instagram Page', 'https://instagram.com/patkhet.lol');

  client.user.setActivity(r);
  client.user.setPresence({ status: "onilne" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `My Bae 🫦`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
