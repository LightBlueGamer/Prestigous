import { LootTable } from './classes/LootTable';
import * as loot from './loot';

export const animalTable = new LootTable("Animal Crate", Object.values(loot).filter((v) => v.type === 'pet').map(v => v));

export const lootboxTable = new LootTable("Lootbox", [
    loot.animalCrateLoot, 
    loot.threeHourExpBoost, 
    loot.threeHourMoneyBoost, 
    loot.quarterDayExpBoost, 
    loot.quarterDayExpBoost,
    loot.boostBox,
]);

export const messageTable = new LootTable("Messaging", [
    loot.lootboxLoot,
]);

export const boosterTable = new LootTable("Boosters", [
    loot.threeHourExpBoost,
    loot.threeHourMoneyBoost,
    loot.quarterDayExpBoost,
    loot.quarterDayMoneyBoost,
    loot.halfDayExpBoost,
    loot.halfDayMoneyBoost,
    loot.dayExpBoost,
    loot.dayMoneyBoost,
    loot.weekExpBoost,
    loot.weekMoneyBoost,
    loot.levelToken,
]);