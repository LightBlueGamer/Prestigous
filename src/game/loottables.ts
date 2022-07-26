import { LootTable } from './classes/LootTable';
import * as loot from './loot';

export const animalTable = new LootTable("Animal Crate", [
    loot.dogLoot,
    loot.catLoot,
    loot.bunnyLoot,
    loot.goldFishLoot,
    loot.hamsterLoot,
    loot.ratLoot,
    loot.mouseLoot,
    loot.parrotLoot,
    loot.foxLoot,
    loot.wolfLoot,
    loot.horseLoot,
    loot.ponyLoot,
    loot.bearLoot,
    loot.lionLoot,
    loot.tigerLoot,
    loot.jaguarLoot,
    loot.elephantLoot,
    loot.rhinoLoot,
    loot.giraffeLoot,
    loot.cheetahLoot,
    loot.salamanderLoot,
    loot.zebraLoot,
    loot.hippoLoot,
    loot.crocodileLoot,
    loot.unicornLoot,
    loot.dragonLoot,
    loot.phoenixLoot,
    loot.wyvernLoot,
]);

export const lootboxTable = new LootTable("Lootbox", [
    loot.animalCrateLoot, 
    loot.dayExpBoost, 
    loot.dayMoneyBoost, 
    loot.weekExpBoost, 
    loot.weekMoneyBoost
]);

export const messageTable = new LootTable("Messaging", [
    loot.lootboxLoot
])