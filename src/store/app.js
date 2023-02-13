import { defineStore } from "pinia";

export const useAppStore = defineStore('coounter',{
    store:()=> ({
        client:null,
        commandsActionMap : null,
    }),
    getters:{},
    actions:{},
})