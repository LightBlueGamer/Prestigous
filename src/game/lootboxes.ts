import { Lootbox } from './classes/Lootbox.js';
import { animalTable, lootboxTable } from './loottables.js';
import { uncommon, veryRare } from './rarities.js';

export const animalLootbox = new Lootbox('Animal Crate', veryRare, animalTable, 30000, 'A create containing a random animal');
export const lootbox = new Lootbox('Lootbox', uncommon, lootboxTable, 12000, 'A create containing random loot');
