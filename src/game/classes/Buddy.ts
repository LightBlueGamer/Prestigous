import { Pet } from "./Pet.js";
import { Rarity } from "./Rarity.js";

export class Buddy {
    pet: Pet;
    experience: number;
    level: number;
    constructor(pet: Pet, experience: number, level: number) {
        this.pet = pet;
        this.experience = experience | 0;  
        this.level = level | 1;
    }
}