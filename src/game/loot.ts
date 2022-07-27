import { Loot } from './classes/Loot';
import { common, epic, legendary, mythic, rare, uncommon, veryRare } from './rarities';

export const dogLoot = new Loot('Dog', common, 'A dog', 'pet', 75000);
export const catLoot = new Loot('Cat', common, 'A cat', 'pet', 75000);
export const bunnyLoot = new Loot('Bunny', common, 'A bunny', 'pet', 75000);
export const goldFishLoot = new Loot('Gold Fish', common, 'A gold fish', 'pet', 75000);
export const frogLoot = new Loot('Frog', common, 'A frog', 'pet', 75000);
export const koiLoot = new Loot('Koi', common, 'A koi', 'pet', 75000);
export const hedgehogLoot = new Loot('Hedgehog', common, 'A hedgehog', 'pet', 75000);
export const hareLoot = new Loot('Hare', common, 'A hare', 'pet', 75000);
export const pigLoot = new Loot('Pig', common, 'A pig', 'pet', 75000);
export const toadLoot = new Loot('Toad', common, 'A toad', 'pet', 75000);

export const hamsterLoot = new Loot('Hamster', uncommon, 'A hamster', 'pet', 20000);
export const ratLoot = new Loot('Rat', uncommon, 'A rat', 'pet', 20000);
export const mouseLoot = new Loot('Mouse', uncommon, 'A mouse', 'pet', 20000);
export const parrotLoot = new Loot('Parrot', uncommon, 'A parrot', 'pet', 20000);
export const guineaPigLoot = new Loot('Guinea Pig', uncommon, 'A guinea pig', 'pet', 20000);
export const squirrelLoot = new Loot('Squirrel', uncommon, 'A squirrel', 'pet', 20000);
export const chinchillaLoot = new Loot('Chinchilla', uncommon, 'A chinchilla', 'pet', 20000);
export const donkeyLoot = new Loot('Donkey', uncommon, 'A donkey', 'pet', 20000);
export const muleLoot = new Loot('Mule', uncommon, 'A mule', 'pet', 20000);

export const foxLoot = new Loot('Fox', rare, 'A fox', 'pet', 8000);
export const wolfLoot = new Loot('Wolf', rare, 'A wolf', 'pet', 8000);
export const horseLoot = new Loot('Horse', rare, 'A horse', 'pet', 8000);
export const ponyLoot = new Loot('Pony', rare, 'A pony', 'pet', 8000);
export const sheepLoot = new Loot('Sheep', rare, 'A sheep', 'pet', 8000);
export const goatLoot = new Loot('Goat', rare, 'A goat', 'pet', 8000);
export const cowLoot = new Loot('Cow', rare, 'A cow', 'pet', 8000);

export const bearLoot = new Loot('Bear', veryRare, 'A bear', 'pet', 3500);
export const lionLoot = new Loot('Lion', veryRare, 'A lion', 'pet', 3500);
export const tigerLoot = new Loot('Tiger', veryRare, 'A tiger', 'pet', 3500);
export const jaguarLoot = new Loot('Jaguar', veryRare, 'A jaguar', 'pet', 3500);
export const pumaLoot = new Loot('Puma', veryRare, 'A puma', 'pet', 3500);
export const leopardLoot = new Loot('Leopard', veryRare, 'A leopard', 'pet', 3500);
export const cougarLoot = new Loot('Cougar', veryRare, 'A cougar', 'pet', 3500);

export const elephantLoot = new Loot('Elephant', epic, 'An elephant', 'pet', 1000);
export const rhinoLoot = new Loot('Rhino', epic, 'A rhino', 'pet', 1000);
export const giraffeLoot = new Loot('Giraffe', epic, 'A giraffe', 'pet', 1000);
export const cheetahLoot = new Loot('Cheetah', epic, 'A cheetah', 'pet', 1000);
export const dingoLoot = new Loot('Dingo', epic, 'A dingo', 'pet', 1000);
export const sealLoot = new Loot('Seal', epic, 'A seal', 'pet', 1000);

export const salamanderLoot = new Loot('Salamander', legendary, 'A salamander', 'pet', 300);
export const zebraLoot = new Loot('Zebra', legendary, 'A zebra', 'pet', 300);
export const hippoLoot = new Loot('Hippo', legendary, 'A hippo', 'pet', 300);
export const crocodileLoot = new Loot('Crocodile', legendary, 'A crocodile', 'pet', 300);
export const cubelingLoot = new Loot('Cubeling', legendary, 'A cubeling', 'pet', 300);
export const pandaLoot = new Loot('Panda', legendary, 'A panda', 'pet', 300);
export const polarBearLoot = new Loot('Polar Bear', legendary, 'A polar bear', 'pet', 300);

export const unicornLoot = new Loot('Unicorn', mythic, 'A unicorn', 'pet', 10);
export const dragonLoot = new Loot('Dragon', mythic, 'A dragon', 'pet', 10);
export const phoenixLoot = new Loot('Phoenix', mythic, 'A phoenix', 'pet', 10);
export const wyvernLoot = new Loot('Wyvern', mythic, 'A wyvern', 'pet', 10);
export const griffinLoot = new Loot('Griffin', mythic, 'A griffin', 'pet', 10);
export const minotaurLoot = new Loot('Minotaur', mythic, 'A minotaur', 'pet', 10);
export const centaurLoot = new Loot('Centaur', mythic, 'A centaur', 'pet', 10);
export const golemLoot = new Loot('Golem', mythic, 'A golem', 'pet', 10);
export const cyclopsLoot = new Loot('Cyclops', mythic, 'A cyclops', 'pet', 10);

export const maineCoon = new Loot('Maine Coon Cat', mythic, 'A Maine Coon cat', 'pet', 0);

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
