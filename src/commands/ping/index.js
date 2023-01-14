import { SlashCommandBuilder } from "discord.js";


export const commands = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('ping -> pong')

export const action = async(ctx)=>{
    ctx.reply('pong')
}