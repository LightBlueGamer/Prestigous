import { Rarity } from './classes/Rarity.js';
import { commonColor, uncommonColor, rareColor, veryRareColor, epicColor, legendaryColor, mythicColor, artifactColor } from './colors.js';

export const common = new Rarity('Common', commonColor, 'A rarity for things that are common to find.');
export const uncommon = new Rarity('Uncommon', uncommonColor, 'A rarity for things that are uncommon to find.');
export const rare = new Rarity('Rare', rareColor, 'A rarity for things that are rare to find.');
export const veryRare = new Rarity('Very Rare', veryRareColor, 'A rarity for things that are very rare to find.');
export const epic = new Rarity('Epic', epicColor, 'A rarity for things that are epic to find.');
export const legendary = new Rarity('Legendary', legendaryColor, 'A rarity for things that are legendary to find.');
export const mythic = new Rarity('Mythic', mythicColor, 'A rarity for things that are mythic to find.');
export const artifact = new Rarity('Artifact', artifactColor, 'A rarity for things that are artifact to find.');
