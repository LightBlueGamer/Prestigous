import { Pet } from './classes/Pet.js';
import { common, epic, legendary, mythic, rare, uncommon, veryRare } from './rarities.js';

export const dog = new Pet('Dog', common);
export const cat = new Pet('Cat', common);
export const bunny = new Pet('Bunny', common);
export const goldFish = new Pet('Gold Fish', common);

export const hamster = new Pet('Hamster', uncommon);
export const rat = new Pet('Rat', uncommon);
export const mouse = new Pet('Mouse', uncommon);
export const parrot = new Pet('Parrot', uncommon);

export const fox = new Pet('Fox', rare);
export const wolf = new Pet('Wolf', rare);
export const horse = new Pet('Horse', rare);
export const pony = new Pet('Pony', rare);

export const bear = new Pet('Bear', veryRare);
export const tiger = new Pet('Tiger', veryRare);
export const lion = new Pet('Lion', veryRare);
export const jaguar = new Pet('Jaguar', veryRare);

export const elephant = new Pet('Elephant', epic);
export const rhino = new Pet('Rhino', epic);
export const giraffe = new Pet('Giraffe', epic);
export const cheetah = new Pet('Cheetah', epic);

export const salamander = new Pet('Salamander', legendary);
export const zebra = new Pet('Zebra', legendary);
export const hippo = new Pet('Hippo', legendary);
export const crocodile = new Pet('Crocodile', legendary);

export const unicorn = new Pet('Unicorn', mythic);
export const dragon = new Pet('Dragon', mythic);
export const phoenix = new Pet('Phoenix', mythic);
export const wyvern = new Pet('Wyvern', mythic);
export const maineCoon = new Pet('Maine Coon', mythic);
