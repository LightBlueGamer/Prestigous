import { Loot } from "./classes/Loot";
import { common, epic, legendary, mythic, rare, uncommon, veryRare } from "./rarities";

export const dogLoot = new Loot("Dog", common, "A dog", 75000);
export const catLoot = new Loot("Cat", common, "A cat", 75000);
export const bunnyLoot = new Loot("Bunny", common, "A bunny", 75000);
export const goldFishLoot = new Loot("Gold Fish", common, "A gold fish", 75000);

export const hamsterLoot = new Loot("Hamster", uncommon, "A hamster", 20000);
export const ratLoot = new Loot("Rat", uncommon, "A rat", 20000);
export const mouseLoot = new Loot("Mouse", uncommon, "A mouse", 20000);
export const parrotLoot = new Loot("Parrot", uncommon, "A parrot", 20000);

export const foxLoot = new Loot("Fox", rare, "A fox", 8000);
export const wolfLoot = new Loot("Wolf", rare, "A wolf", 8000);
export const horseLoot = new Loot("Horse", rare, "A horse", 8000);
export const ponyLoot = new Loot("Pony", rare, "A pony", 8000);

export const bearLoot = new Loot("Bear", veryRare, "A bear", 3500);
export const lionLoot = new Loot("Lion", veryRare, "A lion", 3500);
export const tigerLoot = new Loot("Tiger", veryRare, "A tiger", 3500);
export const jaguarLoot = new Loot("Jaguar", veryRare, "A jaguar", 3500);

export const elephantLoot = new Loot("Elephant", epic, "An elephant", 1000);
export const rhinoLoot = new Loot("Rhino", epic, "A rhino", 1000);
export const giraffeLoot = new Loot("Giraffe", epic, "A giraffe", 1000);
export const cheetahLoot = new Loot("Cheetah", epic, "A cheetah", 1000);

export const salamanderLoot = new Loot("Salamander", legendary, "A salamander", 300);
export const zebraLoot = new Loot("Zebra", legendary, "A zebra", 300);
export const hippoLoot = new Loot("Hippo", legendary, "A hippo", 300);
export const crocodileLoot = new Loot("Crocodile", legendary, "A crocodile", 300);

export const unicornLoot = new Loot("Unicorn", mythic, "A unicorn", 10);
export const dragonLoot = new Loot("Dragon", mythic, "A dragon", 10);
export const phoenixLoot = new Loot("Phoenix", mythic, "A phoenix", 10);
export const wyvernLoot = new Loot("Wyvern", mythic, "A wyvern", 10);
