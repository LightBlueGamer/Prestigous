import { randomWeight } from '../modules/functions';
import { Loot } from './classes/Loot';
import { common, epic, legendary, mythic, rare, uncommon, unique, veryRare } from './rarities';

export const dogLoot = new Loot('Dog', common, 'A dog', 'pet', randomWeight(common));
export const catLoot = new Loot('Cat', common, 'A cat', 'pet', randomWeight(common));
export const bunnyLoot = new Loot('Bunny', common, 'A bunny', 'pet', randomWeight(common));
export const goldFishLoot = new Loot('Gold Fish', common, 'A gold fish', 'pet', randomWeight(common));
export const frogLoot = new Loot('Frog', common, 'A frog', 'pet', randomWeight(common));
export const koiLoot = new Loot('Koi', common, 'A koi', 'pet', randomWeight(common));
export const hedgehogLoot = new Loot('Hedgehog', common, 'A hedgehog', 'pet', randomWeight(common));
export const hareLoot = new Loot('Hare', common, 'A hare', 'pet', randomWeight(common));
export const pigLoot = new Loot('Pig', common, 'A pig', 'pet', randomWeight(common));
export const toadLoot = new Loot('Toad', common, 'A toad', 'pet', randomWeight(common));

export const hamsterLoot = new Loot('Hamster', uncommon, 'A hamster', 'pet', randomWeight(uncommon));
export const ratLoot = new Loot('Rat', uncommon, 'A rat', 'pet', randomWeight(uncommon));
export const mouseLoot = new Loot('Mouse', uncommon, 'A mouse', 'pet', randomWeight(uncommon));
export const parrotLoot = new Loot('Parrot', uncommon, 'A parrot', 'pet', randomWeight(uncommon));
export const guineaPigLoot = new Loot('Guinea Pig', uncommon, 'A guinea pig', 'pet', randomWeight(uncommon));
export const squirrelLoot = new Loot('Squirrel', uncommon, 'A squirrel', 'pet', randomWeight(uncommon));
export const chinchillaLoot = new Loot('Chinchilla', uncommon, 'A chinchilla', 'pet', randomWeight(uncommon));
export const donkeyLoot = new Loot('Donkey', uncommon, 'A donkey', 'pet', randomWeight(uncommon));
export const muleLoot = new Loot('Mule', uncommon, 'A mule', 'pet', randomWeight(uncommon));

export const foxLoot = new Loot('Fox', rare, 'A fox', 'pet', randomWeight(rare));
export const wolfLoot = new Loot('Wolf', rare, 'A wolf', 'pet', randomWeight(rare));
export const horseLoot = new Loot('Horse', rare, 'A horse', 'pet', randomWeight(rare));
export const ponyLoot = new Loot('Pony', rare, 'A pony', 'pet', randomWeight(rare));
export const sheepLoot = new Loot('Sheep', rare, 'A sheep', 'pet', randomWeight(rare));
export const goatLoot = new Loot('Goat', rare, 'A goat', 'pet', randomWeight(rare));
export const cowLoot = new Loot('Cow', rare, 'A cow', 'pet', randomWeight(rare));

export const bearLoot = new Loot('Bear', veryRare, 'A bear', 'pet', randomWeight(veryRare));
export const lionLoot = new Loot('Lion', veryRare, 'A lion', 'pet', randomWeight(veryRare));
export const tigerLoot = new Loot('Tiger', veryRare, 'A tiger', 'pet', randomWeight(veryRare));
export const jaguarLoot = new Loot('Jaguar', veryRare, 'A jaguar', 'pet', randomWeight(veryRare));
export const pumaLoot = new Loot('Puma', veryRare, 'A puma', 'pet', randomWeight(veryRare));
export const leopardLoot = new Loot('Leopard', veryRare, 'A leopard', 'pet', randomWeight(veryRare));
export const cougarLoot = new Loot('Cougar', veryRare, 'A cougar', 'pet', randomWeight(veryRare));

export const elephantLoot = new Loot('Elephant', epic, 'An elephant', 'pet', randomWeight(epic));
export const rhinoLoot = new Loot('Rhino', epic, 'A rhino', 'pet', randomWeight(epic));
export const giraffeLoot = new Loot('Giraffe', epic, 'A giraffe', 'pet', randomWeight(epic));
export const cheetahLoot = new Loot('Cheetah', epic, 'A cheetah', 'pet', randomWeight(epic));
export const dingoLoot = new Loot('Dingo', epic, 'A dingo', 'pet', randomWeight(epic));
export const sealLoot = new Loot('Seal', epic, 'A seal', 'pet', randomWeight(epic));

export const salamanderLoot = new Loot('Salamander', legendary, 'A salamander', 'pet', randomWeight(legendary));
export const zebraLoot = new Loot('Zebra', legendary, 'A zebra', 'pet', randomWeight(legendary));
export const hippoLoot = new Loot('Hippo', legendary, 'A hippo', 'pet', randomWeight(legendary));
export const crocodileLoot = new Loot('Crocodile', legendary, 'A crocodile', 'pet', randomWeight(legendary));
export const cubelingLoot = new Loot('Cubeling', legendary, 'A cubeling', 'pet', randomWeight(legendary));
export const pandaLoot = new Loot('Panda', legendary, 'A panda', 'pet', randomWeight(legendary));
export const polarBearLoot = new Loot('Polar Bear', legendary, 'A polar bear', 'pet', randomWeight(legendary));

export const unicornLoot = new Loot('Unicorn', mythic, 'A unicorn', 'pet', randomWeight(mythic));
export const dragonLoot = new Loot('Dragon', mythic, 'A dragon', 'pet', randomWeight(mythic));
export const phoenixLoot = new Loot('Phoenix', mythic, 'A phoenix', 'pet', randomWeight(mythic));
export const wyvernLoot = new Loot('Wyvern', mythic, 'A wyvern', 'pet', randomWeight(mythic));
export const griffinLoot = new Loot('Griffin', mythic, 'A griffin', 'pet', randomWeight(mythic));
export const minotaurLoot = new Loot('Minotaur', mythic, 'A minotaur', 'pet', randomWeight(mythic));
export const centaurLoot = new Loot('Centaur', mythic, 'A centaur', 'pet', randomWeight(mythic));
export const golemLoot = new Loot('Golem', mythic, 'A golem', 'pet', randomWeight(mythic));
export const cyclopsLoot = new Loot('Cyclops', mythic, 'A cyclops', 'pet', randomWeight(mythic));

export const maineCoon = new Loot('Maine Coon Cat', unique, 'A Maine Coon cat', 'pet', 0);
export const tollerLoot = new Loot('Toller', unique, 'A toller dog', 'pet', 0);

export const animalCrateLoot = new Loot('Animal Crate', veryRare, 'A crate containing a random animal.', 'lootbox', 22500);
export const lootboxLoot = new Loot('Lootbox', uncommon, 'A lootbox containing random loot.', 'lootbox', 15000);
export const boostBox = new Loot('Boostbox', common, 'A boost box containing random boosts.', 'lootbox', 15000);

export const threeHourExpBoost = new Loot('3h XP Boost', common, 'Boosts your experience gain by 2x for 3 hours!', 'booster', 24000);
export const threeHourMoneyBoost = new Loot('3h Money Boost', common, 'Boosts your money gain by 2x for 3 hours!', 'booster', 25000);
export const quarterDayExpBoost = new Loot('6h XP Boost', uncommon, 'Boosts your experience gain by 2x for 6 hours!', 'booster', 17000);
export const quarterDayMoneyBoost = new Loot('6h Money Boost', uncommon, 'Boosts your money gain by 2x for 6 hours!', 'booster', 18000);
export const halfDayExpBoost = new Loot('12h XP Boost', rare, 'Boosts your experience gain by 2x for 12 hours!', 'booster', 14000);
export const halfDayMoneyBoost = new Loot('12h Money Boost', rare, 'Boosts your money gain by 2x for 12 hours!', 'booster', 15000);
export const dayExpBoost = new Loot('24h XP Boost', veryRare, 'Boosts your experience gain by 2x for 24 hours!', 'booster', 9000);
export const dayMoneyBoost = new Loot('24h Money Boost', veryRare, 'Boosts your money gain by 2x for 24 hours!', 'booster', 10000);
export const weekExpBoost = new Loot('Week XP Boost', veryRare, 'Boosts your experience gain by 2x for 7 days!', 'booster', 3000);
export const weekMoneyBoost = new Loot('Week Money Boost', veryRare, 'Boosts your money gain by 2x for 7 days!', 'booster', 4000);

export const levelToken = new Loot('Level Token', epic, 'A token that grants you +1 level.', 'token', 1000);
