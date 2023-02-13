import { REST , Routes , Collection, Client,Events} from "discord.js"
import fg from 'fast-glob'
import {useAppStore} from '@/store/app'


const updateSlashCommand = async(commands) => {
    const rest = new REST({version:10}).setToken(process.env.TOKEN)

    const result = await rest.put(
        Routes.applicationCommands(process.env.Application_ID),
        {
        body:commands,
    }
    )
}

export const loadCommands = async() => { 
    const commands = []
    const appStore = useAppStore()
    const actions = new Collection()
    const files = await fg('./src/commands/**/index.js')
    for(const file of files){
        const cmd = await import(file)
        commands.push(cmd.command)
        actions.set(cmd.command.name,cmd.action)

    }
    await updateSlashCommand(commands)
    appStore.commandsActionMap = actions
}

export const loadEvents = async() =>{
    const appStore = useAppStore()
    const client = appStore.client
    const files = await fg('./src/events/**/index.js')
    for(const file of files){
        const eventFile = await import(file)
        if(eventFile.event.once){
            client.once(eventFile.event.name,eventFile.action)
        }else{
            client.on(eventFile.event.name,eventFile.action)
        }

    }
}