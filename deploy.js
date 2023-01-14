// import dotenv from 'dotenv'
// import {Routes,REST} from 'discord.js'
// dotenv.config()
// const Client_ID = '1056581159359893535';
// const commands = [
//   {
//     name: 'hello',
//     description: 'hello', //提示字
//   },
//   {
//     name: 'ping',
//     description: 'Conecting...'
//   }
// ];

// const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

// (async () => {
//   try {
//     console.log('Started refreshing application (/) commands.');

//     await rest.put(Routes.applicationCommands(Client_ID), { body: commands });

//     console.log('Successfully reloaded application (/) commands.');
//   } catch (error) {
//     console.error(error);
//   }
// })();
