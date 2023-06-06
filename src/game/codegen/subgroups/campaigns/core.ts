import { toNormalized } from "../../name-mappers";

export const core_skills = new Set(
  [
    '"Charge!"',
    '"For Great Justice!"',
    '"For Great Justice!" (PvP)',
    '"Shields Up!"',
    '"Watch Yourself!"',
    '"Watch Yourself!" (PvP)',
    "Axe Rake",
    "Balanced Stance",
    "Battle Rage",
    "Berserker Stance",
    "Bull's Strike",
    "Cleave",
    "Counter Blow",
    "Cyclone Axe",
    "Defensive Stance",
    "Devastating Hammer",
    "Dismember",
    "Disrupting Chop",
    "Distracting Blow",
    "Endure Pain",
    "Executioner's Strike",
    "Final Thrust",
    "Frenzy",
    "Gash",
    "Hammer Bash",
    "Hamstring",
    "Healing Signet",
    "Heavy Blow",
    "Hundred Blades",
    "Irresistible Blow",
    "Mighty Blow",
    "Power Attack",
    "Savage Slash",
    "Seeking Blade",
    "Seven Weapons Stance",
    "Sever Artery",
    "Shield Bash",
    "Sprint",
    "Staggering Blow",
    "Swift Chop",
    "Thrill of Victory",
    "Warrior's Cunning",
    "Wild Blow",
    '"Together as One!"',
    "Antidote Signet",
    "Apply Poison",
    "Barbed Trap",
    "Barrage",
    "Call of Haste",
    "Call of Haste (PvP)",
    "Called Shot",
    "Charm Animal",
    "Charm Animal (Codex)",
    "Choking Gas",
    "Comfort Animal",
    "Comfort Animal (PvP)",
    "Concussion Shot",
    "Debilitating Shot",
    "Determined Shot",
    "Disrupting Lunge",
    "Distracting Shot",
    "Dual Shot",
    "Energizing Wind",
    "Escape",
    "Escape (PvP)",
    "Favorable Winds",
    "Ferocious Strike",
    "Flame Trap",
    "Hunter's Shot",
    "Kindle Arrows",
    "Lightning Reflexes",
    "Lightning Reflexes (PvP)",
    "Maiming Strike",
    "Nature's Renewal",
    "Pin Down",
    "Power Shot",
    "Precision Shot",
    "Primal Echoes",
    "Quick Shot",
    "Quickening Zephyr",
    "Read the Wind",
    "Read the Wind (PvP)",
    "Savage Shot",
    "Scavenger Strike",
    "Spike Trap",
    "Storm Chaser",
    "Throw Dirt",
    "Troll Unguent",
    "Whirling Defense",
    "Winnowing",
    "Upkeep",
    "Aegis",
    "Aegis (PvP)",
    "Balthazar's Aura",
    "Bane Signet",
    "Banish",
    "Blessed Signet",
    "Convert Hexes",
    "Divine Boon",
    "Divine Intervention",
    "Draw Conditions",
    "Guardian",
    "Heal Party",
    "Heal Party (PvP)",
    "Healing Breeze",
    "Healing Seed",
    "Healing Touch",
    "Holy Veil",
    "Infuse Health",
    "Judge's Insight",
    "Judgment Strike",
    "Life Bond",
    "Martyr",
    "Mend Ailment",
    "Mending",
    "Orison of Healing",
    "Protective Spirit",
    "Purge Conditions",
    "Purge Signet",
    "Rebirth",
    "Remove Hex",
    "Resurrect",
    "Retribution",
    "Reversal of Fortune",
    "Scourge Healing",
    "Shield of Regeneration",
    "Shielding Hands",
    "Signet of Devotion",
    "Signet of Judgment",
    "Signet of Judgment (PvP)",
    "Smite Hex",
    "Spell Breaker",
    "Strength of Honor",
    "Strength of Honor (PvP)",
    "Word of Healing",
    "Zealot's Fire",
    "Sacrifice",
    "Animate Bone Fiend",
    "Animate Bone Minions",
    "Barbed Signet",
    "Sacrifice",
    "Barbs",
    "Blood is Power",
    "Sacrifice",
    "Blood of the Master",
    "Sacrifice",
    "Chilblains",
    "Dark Aura",
    "Dark Bond",
    "Dark Pact",
    "Sacrifice",
    "Death Nova",
    "Deathly Swarm",
    "Defile Flesh",
    "Sacrifice",
    "Demonic Flesh",
    "Enfeebling Blood",
    "Sacrifice",
    "Enfeebling Blood (PvP)",
    "Sacrifice",
    "Faintheartedness",
    "Grenth's Balance",
    "Life Siphon",
    "Lingering Curse",
    "Mark of Pain",
    "Order of Pain",
    "Sacrifice",
    "Parasitic Bond",
    "Plague Signet",
    "Plague Touch",
    "Putrid Explosion",
    "Rend Enchantments",
    "Rigor Mortis",
    "Rotting Flesh",
    "Signet of Agony",
    "Sacrifice",
    "Signet of Agony (PvP)",
    "Sacrifice",
    "Soul Feast",
    "Soul Taker",
    "Strip Enchantment",
    "Suffering",
    "Tainted Flesh",
    "Taste of Death",
    "Unholy Feast",
    "Unholy Feast (PvP)",
    "Vampiric Gaze",
    "Vile Touch",
    "Weaken Armor",
    "Well of Blood",
    "Well of the Profane",
    "Arcane Conundrum",
    "Arcane Echo",
    "Arcane Mimicry",
    "Backfire",
    "Clumsiness",
    "Conjure Phantasm",
    "Crippling Anguish",
    "Crippling Anguish (PvP)",
    "Cry of Frustration",
    "Diversion",
    "Drain Enchantment",
    "Echo",
    "Empathy",
    "Empathy (PvP)",
    "Energy Burn",
    "Energy Drain",
    "Energy Surge",
    "Energy Tap",
    "Epidemic",
    "Ether Feast",
    "Fragility",
    "Fragility (PvP)",
    "Hex Breaker",
    "Ignorance",
    "Illusion of Haste",
    "Illusion of Haste (PvP)",
    "Imagined Burden",
    "Leech Signet",
    "Mantra of Earth",
    "Mantra of Flame",
    "Mantra of Frost",
    "Mantra of Inscriptions",
    "Mantra of Lightning",
    "Mantra of Persistence",
    "Mantra of Recovery",
    "Mantra of Resolve",
    "Mantra of Resolve (PvP)",
    "Mind Wrack",
    "Mind Wrack (PvP)",
    "Power Drain",
    "Power Spike",
    "Shatter Enchantment",
    "Shatter Hex",
    "Signet of Humility",
    "Soothing Images",
    "Spirit Shackles",
    "Time Ward",
    "Aftershock",
    "Air Attunement",
    "Armor of Earth",
    "Aura of Restoration",
    "Aura of Restoration (PvP)",
    "Blinding Flash",
    "Blurred Vision",
    "Conjure Flame",
    "Conjure Frost",
    "Conjure Lightning",
    "Deep Freeze",
    "Earth Attunement",
    "Elemental Attunement",
    "Enervating Charge",
    "Fire Attunement",
    "Fire Storm",
    "Fireball",
    "Flare",
    "Gale",
    "Glyph of Elemental Power",
    "Glyph of Lesser Energy",
    "Ice Spear",
    "Ice Spikes",
    "Immolate",
    "Inferno",
    "Lightning Orb",
    "Lightning Strike",
    "Lightning Surge",
    "Lightning Touch",
    "Maelstrom",
    "Meteor",
    "Mind Burn",
    "Mind Freeze",
    "Mind Freeze (PvP)",
    "Obsidian Flame",
    "Obsidian Flame (PvP)",
    "Obsidian Flesh",
    "Over the Limit",
    "Rust",
    "Stone Daggers",
    "Stoning",
    "Ward Against Foes",
    "Ward Against Melee",
    "Water Attunement",
    "Shadow Theft",
    "Weapons of Three Forges",
    "Heroic Refrain",
    "Vow of Revolution",
    "Resurrection Signet",
    "Signet of Capture",
  ].map(toNormalized)
);
