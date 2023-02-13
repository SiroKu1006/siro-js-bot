import { ActivityType, Client, ClientUser, Events, GatewayIntentBits } from 'discord.js'
import dotenv from 'dotenv'
import vueinit from '@/core/vue'
import {useAppStore} from '@/store/app'
import {loadCommands,loadEvents} from '@/core/loader'


vueinit()
dotenv.config()
loadCommands()


const client = new Client({intents:[GatewayIntentBits.Guilds]})
const appStore = useAppStore()
appStore.client = client
loadEvents()


client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`)
    client.user.setStatus('dnd');//設定機器人狀態
	client.user.setActivity('JavaScript',{type: ActivityType.Playing});//設定遊玩狀態
});
client.login(process.env.TOKEN);




// client.on('interactionCreate',async interaction =>{
// 	if (!interaction.isChatInputCommand()) return;
	
// 	if (interaction.commandName === 'hello') {
// 		await interaction.reply('mello!');
// 	}
// 	if (interaction.commandName === 'ping') {
// 		await interaction.reply()
// 	}
// })	
