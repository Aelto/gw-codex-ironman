import type { Rng } from "../rng";
import type { Skill } from "../skills";

export class WeightedSkillSelector {
  private skills: Skill[];
  private campaign_progression_ratio: number;

  private weighted_max: number;
  private acquisition_weight_multiplier: number;

  constructor(skills: Skill[], campaign_progression_ratio: number) {
    this.skills = skills;
    this.campaign_progression_ratio = campaign_progression_ratio;

    // this gets us a value in the [0;1] range where the value goes towards 0 as
    // the player progresses through the campaign.
    this.acquisition_weight_multiplier = 1 - this.campaign_progression_ratio;
    this.weighted_max = skills.reduce(
      (acc, cur) => acc + this.adjustedWeight(cur.options.acquisition_weight),
      0
    );
    // console.log(this.weighted_max, this.campaign_progression_ratio);
  }

  private adjustedWeight(weight: number): number {
    // the weight is multiplied by the multiplier, so by the end of the campaign
    // it's as if it was multiplied by 0 and basically non-existent.
    // Then the + 0.1 puts all of the skills at the same weight.
    return weight * weight * this.acquisition_weight_multiplier + 1;
  }

  public nextSkill(rng: Rng): Skill {
    let weighted_index = rng.nextRange(this.weighted_max);

    console.log(weighted_index, this.skills.length);
    // console.log("-------------------");
    for (const skill of this.skills) {
      weighted_index -= this.adjustedWeight(skill.options.acquisition_weight);
      // console.log(this.adjustedWeight(skill.options.acquisition_weight));

      if (weighted_index <= 0) {
        return skill;
      }
    }

    return this.skills.at(-1);
  }
}
