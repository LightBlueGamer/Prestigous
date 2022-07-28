import type { Snowflake } from "discord.js";

export class ClanUser {
    tag: string;
    rank: number;
    id: Snowflake;
    constructor(tag: string, rank: number, id: Snowflake) {
        this.tag = tag;
        this.rank = rank;
        this.id = id;
    }
}