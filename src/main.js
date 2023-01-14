import { ActivityType, Client, ClientUser, Events, GatewayIntentBits } from 'discord.js'
import dotenv from 'dotenv'

dotenv.config()

const client = new Client({intents:[GatewayIntentBits.Guilds]})

client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
	client.user.setStatus('dnd');//設定機器人狀態
	client.user.setActivity('JavaScript',{type: ActivityType.Playing});//設定遊玩狀態
	// client.user.setPresence({activities:[{name:'JS'}],status:'dnd'}); //同時設定 只能看
	
});

client.on('interactionCreate',async interaction =>{
	if (!interaction.isChatInputCommand()) return;
	
	if (interaction.commandName === 'hello') {
		await interaction.reply('mello!');
	}
	if (interaction.commandName === 'ping') {
		await interaction.reply()
	}
})	



client.login(process.env.TOKEN);