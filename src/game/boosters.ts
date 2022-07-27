import { Booster } from "./classes/Booster";

export const threeHourExpBoost = new Booster("3h XP Boost", 0.125, "exp");
export const threeHourMoneyBoost = new Booster("3h Money Boost", 0.125, "money");
export const quarterDayExpBoost = new Booster("6h XP Boost", 0.25, "exp");
export const quarterDayMoneyBoost = new Booster("6h Money Boost", 0.25, "money");
export const halfDayExpBoost = new Booster("12h XP Boost", 0.5, "exp");
export const halfDayMoneyBoost = new Booster("12h Money Boost", 0.5, "money");
export const dayExpBoost = new Booster("24h XP Boost", 1, "exp");
export const dayMoneyBoost = new Booster("24h Money Boost", 1, "money");
export const weekExpBoost = new Booster("Week XP Boost", 7, "exp");
export const weekMoneyBoost = new Booster("Week Money Boost", 7, "money");