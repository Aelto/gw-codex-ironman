/**
 * the key is the henchmen count, the value is the penalty for that count
 */
const PENALTY_TABLE = {
  0: 0,
  1: 2,
  2: 4,
  3: 6,
  4: 8,
  5: 11,
  6: 15,
  7: 20,
  8: 26,
  9: 32,
  10: 38,
  11: 43,
};

/**
 *
 * @param count the number of henchmen or heroes in the group
 * @returns the penalty caused by the henchmen count, the penalty defines how
 * many skills from the pool are disabled.
 */
export function getSkillPenaltyFromHenchmen(
  count: number,
  is_primary_profession: boolean
): number {
  // the primary profession gets a lower penatly than the secondary one
  const x = Math.max(count - Number(is_primary_profession), 0);

  return PENALTY_TABLE[x];
}
