import type { Client } from "discord.js";
import { getLeaders, getUsers } from "../database/functions";

export default {
    name: 'ready',
    once: true,
    async execute(client: Client) {
        console.log(`Logged in as ${client?.user?.tag}!`);
        getLeaders(1, (await getUsers('232466273479426049')))
    }
}