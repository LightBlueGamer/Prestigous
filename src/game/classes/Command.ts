import { SlashCommandBuilder } from 'discord.js';

export interface Command {
    devCmd: boolean;
    permLevel: number;
    data: Command.Data;
    execute: Function;
}

export namespace Command {
    export type Data = SlashCommandBuilder;
    export type Name = string;
}
