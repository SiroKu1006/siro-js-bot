import { SlashCommandBuilder } from "discord.js"

// export default {
//     command: new SlashCommandBuilder()
//     .setName('ping')
//     .setDescription('ping->pong'),

//     action: async (ctx) =>{
//         ctx.reply('pong')
//     },
// };
// module.exports ={
//     data: new SlashCommandBuilder()
//     .setName('ping')
//     .setDescription('ping->pong'),
//     async execute(ctx){
//         await ctx.reply('pong');
//     },
// };


export const commands = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('ping -> pong');

export const action = async(ctx)=>{
    await ctx.reply('pong');
}