import DiscordJS, { Intents, Message, MessageActionRow } from 'discord.js';
import dotenv from 'dotenv';
import initializeClass from './WolframAlpha.js';
dotenv.config();

const wolf = initializeClass(process.env.WOLF);

const client = new DiscordJS.Client({
	intents: [ Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES ]
});

client.on('ready', () => {
	console.log('The bot is online');
});

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
