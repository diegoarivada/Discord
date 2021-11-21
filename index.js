import DiscordJS, { Intents, Message, MessageActionRow } from 'discord.js';
import dotenv from 'dotenv';
import initializeClass from './WolframAlpha.js';
dotenv.config();

const wolf = initializeClass('VG6R9G-6KUTXG7GEX');

const client = new DiscordJS.Client({
	intents: [ Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES ]
});

client.on('ready', () => {
	console.log('The bot is online');
});
/*
Testing purposes
({
    waApi.getFull('sin x').then(console.log).catch(console.error);
    // { success: true, error: false, numpods: 13, datatypes: '', ...
    
    waApi.getFull('F9TVlu5AmVzL').then(console.log).catch(console.error);
    // { success: false, error: false, numpods: 0, datatypes: '', ...
    
    waApi.getFull('sin(x)').then((queryresult) => {
      const pods = queryresult.pods;
      const output = pods.maps((pod) => {
        const subpodContent = pod.subpods.map(subpod =>
          `  <img src="${subpod.img.src}" alt="${subpod.img.alt}">`
        ).join('\n');
        return `<h2>${pod.title}</h2>\n${subpodContent}`;
      }).join('\n');
      console.log(output);
    }).catch(console.error),
})


fetch('https://api.wolframalpha.com/')
.then(response =>{
    return response.json();
}).then(data =>{
    console.log(data);
})

< TAKE USER INPUT AS COMMAND<in progress> 
var inMessage = confirm("Please enter a command");
if (inMessage == true){
    x = 'VALID'; 
    {
        else {
    x = 'INVALID';
    }
}
}
*/

client.on('messageCreate', (message) => {
	if (message.content === '!help') {
		message.reply({
			content: ' press ping < more in progress> '
		});
	}
});

client.on('messageCreate', (message) => {
	if (message.content === 'ping') {
		wolf.getShort('2+129').then((value) => {
			message.reply({
				content: value
			});
		}, console.error);
	}
});

client.login(process.env.TOKEN).catch((error) => {
	console.error(error);
});
