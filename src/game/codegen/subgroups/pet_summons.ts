import { toNormalized } from "../name-mappers";

export const all_pet_summons = new Set(
  ["Charm Animal", "Comfort Animal"].map(toNormalized)
);
