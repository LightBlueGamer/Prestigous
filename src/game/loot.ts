import { Loot } from './classes/Loot';
import { common, epic, legendary, mythic, rare, uncommon, veryRare } from './rarities';
import { lootbox } from './lootboxes';

export const dogLoot = new Loot('Dog', common, 'A dog', 'pet', 75000);
export const catLoot = new Loot('Cat', common, 'A cat', 'pet', 75000);
export const bunnyLoot = new Loot('Bunny', common, 'A bunny', 'pet', 75000);
export const goldFishLoot = new Loot('Gold Fish', common, 'A gold fish', 'pet', 75000);

export const hamsterLoot = new Loot('Hamster', uncommon, 'A hamster', 'pet', 20000);
export const ratLoot = new Loot('Rat', uncommon, 'A rat', 'pet', 20000);
export const mouseLoot = new Loot('Mouse', uncommon, 'A mouse', 'pet', 20000);
export const parrotLoot = new Loot('Parrot', uncommon, 'A parrot', 'pet', 20000);

export const foxLoot = new Loot('Fox', rare, 'A fox', 'pet', 8000);
export const wolfLoot = new Loot('Wolf', rare, 'A wolf', 'pet', 8000);
export const horseLoot = new Loot('Horse', rare, 'A horse', 'pet', 8000);
export const ponyLoot = new Loot('Pony', rare, 'A pony', 'pet', 8000);

export const bearLoot = new Loot('Bear', veryRare, 'A bear', 'pet', 3500);
export const lionLoot = new Loot('Lion', veryRare, 'A lion', 'pet', 3500);
export const tigerLoot = new Loot('Tiger', veryRare, 'A tiger', 'pet', 3500);
export const jaguarLoot = new Loot('Jaguar', veryRare, 'A jaguar', 'pet', 3500);

export const elephantLoot = new Loot('Elephant', epic, 'An elephant', 'pet', 1000);
export const rhinoLoot = new Loot('Rhino', epic, 'A rhino', 'pet', 1000);
export const giraffeLoot = new Loot('Giraffe', epic, 'A giraffe', 'pet', 1000);
export const cheetahLoot = new Loot('Cheetah', epic, 'A cheetah', 'pet', 1000);

export const salamanderLoot = new Loot('Salamander', legendary, 'A salamander', 'pet', 300);
export const zebraLoot = new Loot('Zebra', legendary, 'A zebra', 'pet', 300);
export const hippoLoot = new Loot('Hippo', legendary, 'A hippo', 'pet', 300);
export const crocodileLoot = new Loot('Crocodile', legendary, 'A crocodile', 'pet', 300);

export const unicornLoot = new Loot('Unicorn', mythic, 'A unicorn', 'pet', 10);
export const dragonLoot = new Loot('Dragon', mythic, 'A dragon', 'pet', 10);
export const phoenixLoot = new Loot('Phoenix', mythic, 'A phoenix', 'pet', 10);
export const wyvernLoot = new Loot('Wyvern', mythic, 'A wyvern', 'pet', 10);

export const animalCrateLoot = new Loot('Animal Crate', veryRare, 'A crate containing a random animal', 'lootbox', 9000);
export const lootboxLoot = new Loot(lootbox.name, lootbox.rarity, lootbox.description, 'lootbox', 15000);

export const dayExpBoost = new Loot('24h XP Boost', veryRare, 'Boosts your experience gain by 2x for 24 hours!', 'booster', 9000);
export const dayMoneyBoost = new Loot('24h Money Boost', veryRare, 'Boosts your money gain by 2x for 24 hours!', 'booster', 10000);
export const weekExpBoost = new Loot('Week XP Boost', veryRare, 'Boosts your experience gain by 2x for 7 days!', 'booster', 3000);
export const weekMoneyBoost = new Loot('Week Money Boost', veryRare, 'Boosts your money gain by 2x for 7 days!', 'booster', 4000);