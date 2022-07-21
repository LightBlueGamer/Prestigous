import { Lootbox } from "./classes/Lootbox.js";
import { animalTable } from "./loottables.js";
import { rare } from "./rarities.js";

export const animalLootbox = new Lootbox("Animal Crate", rare, animalTable, 5000, "A create containing a random animal");
