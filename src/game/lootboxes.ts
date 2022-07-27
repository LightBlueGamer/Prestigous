import { Lootbox } from './classes/Lootbox.js';
import { animalTable, boosterTable, lootboxTable } from './loottables.js';
import { rare, uncommon, veryRare } from './rarities.js';

export const animalLootbox = new Lootbox('Animal Crate', veryRare, animalTable, 30000, 'A crate containing a random animal');
export const lootbox = new Lootbox('Lootbox', uncommon, lootboxTable, 12500, 'A box containing random loot');
export const boostbox = new Lootbox('Boostbox', rare, boosterTable, 20000, 'A box containing a random booster');