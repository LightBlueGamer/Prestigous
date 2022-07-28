import type { ClanStats } from "./ClanStats";
import type { ClanUser } from "./ClanUser";
import type { Treasury } from "./Treasury";

export class Clan {
    members: ClanUser[]
    name: string;
    level: number;
    treasury: Treasury;
    stats: ClanStats;
    constructor(members: ClanUser[], name: string, level: number, treasury: Treasury, stats: ClanStats) {
        this.members = members;
        this.name = name;
        this.level = level;
        this.treasury = treasury;
        this.stats = stats;
    }
}