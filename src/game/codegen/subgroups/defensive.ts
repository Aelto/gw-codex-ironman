import { toNormalized } from "../name-mappers";

// Any skill that does the following is a defensive skill:
// - heals
// - blocks
// - remove conditions
// - apply blind, weakness, or cripple
// - change damage type
// - reduce received damage or increase armor
// - reduce energy cost or recharge
// - increase movement speed
// - decreases target movement speed, or knocks down
// ... anything that can increase you chances of survival in a tough fight
//
// NOTE: a skill can be both defensive and offensive, it can also
// be defensive & supportive.

const ranger_defensive_skills = [
  "Antidote Signet",
  "Archer's Signet",
  "Call of Protection",
  "Charm Animal",
  "Comfort Animal",
  "Companionship",
  "Conflagration",
  "Dust Trap",
  "Energizing Wind",
  "Escape",
  "Fertile Season",
  "Greater Conflagration",
  "Healing Spring",
  "Lightning Reflexes",
  "Melandru's Resilience",
  "Muddy Terrain",
  "Natural Stride",
  "Nature's Renewal",
  "Never Rampage Alone",
  "Oath Shot",
  "Otyugh's Cry",
  "Pin Down",
  "Predatory Bond",
  "Quickening Zephyr",
  "Scavenger Strike",
  "Serpent's Quickness",
  "Snare",
  "Storm Chaser",
  "Storm's Embrace",
  "Symbiosis",
  "Symbiotic Bond",
  "Throw Dirt",
  "Trapper's Focus",
  "Trapper's Speed",
  "Troll Unguent",
  "Tripwire",
  "Whirling Defense",
  "Winter",
  "Zojun's Haste",
].map(toNormalized);

const warrior_defensive_skills = [
  '"Coward!"',
  '"I Will Avenge You!"',
  '"I Will Survive!"',
  '"None Shall Pass!"',
  '"On Your Knees!"',
  '"Retreat!"',
  '"Save Yourselves!"',
  '"Shields Up!"',
  '"To the Limit!"',
  '"Victory Is Mine!"',
  '"Watch Yourself!"',
  '"You\'re All Alone!"',
  "Auspicious Blow",
  "Auspicious Parry",
  "Axe Rake",
  "Axe Twist",
  "Backbreaker",
  "Balanced Stance",
  "Battle Rage",
  "Belly Smash",
  "Bonetti's Defense",
  "Bull's Charge",
  "Charging Strike",
  "Counter Blow",
  "Counterattack",
  "Crippling Slash",
  "Deadly Riposte",
  "Defensive Stance",
  "Deflect Arrows",
  "Defy Pain",
  "Desperation Blow",
  "Devastating Hammer",
  "Disciplined Stance",
  "Disrupting Chop",
  "Dolyak Signet",
  "Dwarven Battle Stance",
  "Earth Shaker",
  "Endure Pain",
  "Enraged Smash",
  "Flourish",
  "Forceful Blow",
  "Frenzied Defense",
  "Gladiator's Defense",
  "Grapple",
  "Hammer Bash",
  "Hamstring",
  "Healing Signet",
  "Heavy Blow",
  "Knee Cutter",
  "Lion's Comfort",
  "Magehunter's Smash",
  "Protector's Defense",
  "Pulverizing Smash",
  "Rage of the Ntouka",
  "Shield Bash",
  "Shield Stance",
  "Shove",
  "Signet of Stamina",
  "Skull Crack",
  "Soldier's Defense",
  "Soldier's Speed",
  "Soldier's Stance",
  "Sprint",
  "Staggering Blow",
  "Steady Stance",
  "Warrior's Endurance",
  "Wary Stance",
].map(toNormalized);

const mesmer_defensive_skills = [
  "Ancestor's Visage",
  "Arcane Echo",
  "Arcane Languor",
  "Arcane Larceny",
  "Arcane Mimicry",
  "Arcane Thievery",
  "Auspicious Incantation",
  "Blackout",
  "Calculated Risk",
  "Complicate",
  "Confusing Images",
  "Crippling Anguish",
  "Cry of Frustration",
  "Cry of Pain",
  "Distortion",
  "Diversion",
  "Drain Delusions",
  "Drain Enchantment",
  "Echo",
  "Elemental Resistance",
  "Empathy",
  "Energy Drain",
  "Energy Tap",
  "Ether Feast",
  "Ether Signet",
  "Ethereal Burden",
  "Expel Hexes",
  "Frustration",
  "Guilt",
  "Hex Breaker",
  "Hex Eater Signet",
  "Hex Eater Vortex",
  "Illusion of Haste",
  "Illusionary Weaponry",
  "Imagined Burden",
  "Ineptitude",
  "Inspired Enchantment",
  "Inspired Hex",
  "Keystone Signet",
  "Kitah's Burden",
  "Leech Signet",
  "Lyssa's Aura",
  "Mantra of Concentration",
  "Mantra of Earth",
  "Mantra of Flame",
  "Mantra of Frost",
  "Mantra of Inscriptions",
  "Mantra of Lightning",
  "Mantra of Persistence",
  "Mantra of Recall",
  "Mantra of Recovery",
  "Mantra of Resolve",
  "Mantra of Signets",
  "Migraine",
  "Mistrust",
  "Panic",
  "Persistence of Memory",
  "Physical Resistance",
  "Power Block",
  "Power Drain",
  "Power Flux",
  "Power Leak",
  "Power Leech",
  "Power Lock",
  "Power Return",
  "Psychic Distraction",
  "Psychic Instability",
  "Revealed Enchantment",
  "Signet of Distraction",
  "Signet of Illusions",
  "Signet of Midnight",
  "Signet of Recall",
  "Signet of Weariness",
  "Spirit Shackles",
  "Spirit of Failure",
  "Stolen Speed",
  "Sum of All Fears",
  "Symbolic Celerity",
  "Symbolic Posture",
  "Sympathetic Visage",
  "Tease",
  "Time Ward",
  "Wandering Eye",
  "Waste Not, Want Not",
].map(toNormalized);

const monk_defensive_skills = [
  "Aegis",
  "Aegis (PvP)",
  "Air of Enchantment",
  "Amity",
  "Aura of Faith",
  "Aura of Stability",
  "Balthazar's Pendulum",
  "Balthazar's Spirit",
  "Blessed Aura",
  "Blessed Light",
  "Blessed Signet",
  "Boon Signet",
  "Castigation Signet",
  "Contemplation of Purity",
  "Convert Hexes",
  "Cure Hex",
  "Defender's Zeal",
  "Deny Hexes",
  "Dismiss Condition",
  "Divert Hexes",
  "Divine Boon",
  "Divine Healing",
  "Divine Intervention",
  "Divine Spirit",
  "Draw Conditions",
  "Dwayna's Kiss",
  "Dwayna's Sorrow",
  "Empathic Removal",
  "Essence Bond",
  "Ethereal Light",
  "Extinguish",
  "Gift of Health",
  "Glimmer of Light",
  "Guardian",
  "Heal Area",
  "Heal Other",
  "Heal Party",
  "Heal Party (PvP)",
  "Healer's Boon",
  "Healer's Covenant",
  "Healing Breeze",
  "Healing Burst",
  "Healing Hands",
  "Healing Light",
  "Healing Ribbon",
  "Healing Ring",
  "Healing Seed",
  "Healing Touch",
  "Healing Whisper",
  "Heaven's Delight",
  "Holy Haste",
  "Holy Veil",
  "Infuse Health",
  "Jamei's Gaze",
  "Judge's Insight",
  "Judge's Intervention",
  "Judgment Strike",
  "Karei's Healing Circle",
  "Life Attunement",
  "Life Barrier",
  "Life Bond",
  "Life Sheath",
  "Light of Deliverance",
  "Light of Deliverance (PvP)",
  "Light of Dwayna",
  "Live Vicariously",
  "Mark of Protection",
  "Martyr",
  "Mend Ailment",
  "Mend Condition",
  "Mending",
  "Mending Touch",
  "Orison of Healing",
  "Pacifism",
  "Patient Spirit",
  "Peace and Harmony",
  "Pensive Guardian",
  "Protective Bond",
  "Protective Spirit",
  "Purge Conditions",
  "Purge Signet",
  "Purifying Veil",
  "Rebirth",
  "Release Enchantments",
  "Remove Hex",
  "Renew Life",
  "Restful Breeze",
  "Restore Condition",
  "Restore Life",
  "Resurrect",
  "Resurrection Chant",
  "Retribution",
  "Reversal of Damage",
  "Reversal of Fortune",
  "Reverse Hex",
  "Scourge Healing",
  "Scourge Sacrifice",
  "Scribe's Insight",
  "Seed of Life",
  "Selfless Spirit",
  "Shield Guardian",
  "Shield of Absorption",
  "Shield of Deflection",
  "Shield of Judgment",
  "Shield of Regeneration",
  "Shielding Hands",
  "Signet of Devotion",
  "Signet of Judgment",
  "Signet of Judgment (PvP)",
  "Signet of Mystic Wrath",
  "Signet of Rage",
  "Signet of Rejuvenation",
  "Signet of Removal",
  "Smite Condition",
  "Smite Hex",
  "Smiter's Boon",
  "Smiter's Boon (PvP)",
  "Spell Breaker",
  "Spell Shield",
  "Spirit Bond",
  "Spirit Bond (PvP)",
  "Spotless Mind",
  "Spotless Soul",
  "Succor",
  "Supportive Spirit",
  "Unyielding Aura",
  "Unyielding Aura (PvP)",
  "Vigorous Spirit",
  "Vital Blessing",
  "Watchful Healing",
  "Watchful Spirit",
  "Withdraw Hexes",
  "Word of Healing",
  "Words of Comfort",
  "Zealot's Fire",
  "Zealous Benediction",
].map(toNormalized);

const necromancer_defensive_skills = [
  "Angorodon's Gaze",
  "Animate Bone Fiend",
  "Animate Bone Horror",
  "Animate Bone Minions",
  "Animate Flesh Golem",
  "Animate Shambling Horror",
  "Animate Vampiric Horror",
  "Atrophy",
  "Aura of the Lich",
  "Blood Bond",
  "Blood Drinker",
  "Blood Renewal",
  "Blood of the Aggressor",
  "Blood of the Master",
  "Consume Corpse",
  "Dark Bond",
  "Depravity",
  "Enfeeble",
  "Enfeebling Blood",
  "Enfeebling Blood (PvP)",
  "Enfeebling Touch",
  "Faintheartedness",
  "Feast for the Dead",
  "Feast of Corruption",
  "Foul Feast",
  "Grenth's Balance",
  "Hexer's Vigor",
  "Infuse Condition",
  "Insidious Parasite",
  "Jagged Bones",
  "Jaundiced Gaze",
  "Life Siphon",
  "Life Transfer",
  "Lifebane Strike",
  "Mark of Subversion",
  "Meekness",
  "Offering of Blood",
  "Oppressive Gaze",
  "Order of the Vampire",
  "Parasitic Bond",
  "Plague Sending",
  "Plague Signet",
  "Plague Touch",
  "Price of Failure",
  "Reaper's Mark",
  "Reckless Haste",
  "Shadow Strike",
  "Shadow of Fear",
  "Signet of Corruption",
  "Signet of Lost Souls",
  "Soul Bind",
  "Soul Feast",
  "Soul Leech",
  "Strip Enchantment",
  "Taste of Death",
  "Taste of Pain",
  "Unholy Feast",
  "Unholy Feast (PvP)",
  "Vampiric Bite",
  "Vampiric Gaze",
  "Vampiric Spirit",
  "Vampiric Swarm",
  "Vampiric Touch",
  "Verata's Aura",
  "Verata's Sacrifice",
  "Virulence",
  "Vocal Minority",
  "Wail of Doom",
  "Well of Blood",
  "Well of Darkness",
  "Well of Power",
  "Well of Ruin",
  "Well of Silence",
  "Well of Weariness",
  "Withering Aura",
];

const elementalist_defensive_skills = [
  "Air Attunement",
  "Armor of Earth",
  "Armor of Frost",
  "Armor of Mist",
  "Aura of Restoration",
  "Aura of Restoration (PvP)",
  "Blinding Flash",
  "Blinding Surge",
  "Blurred Vision",
  "Burning Speed",
  "Chilling Winds",
  "Churning Earth",
  "Double Dragon",
  "Dragon's Stomp",
  "Earth Attunement",
  "Earthen Shackles",
  "Earthquake",
  "Ebon Hawk",
  "Elemental Attunement",
  "Elemental Flame",
  "Elemental Flame (PvP)",
  "Elemental Lord",
  "Energy Boon",
  "Eruption",
  "Ether Prism",
  "Ether Prodigy",
  "Ether Renewal",
  "Ether Renewal (PvP)",
  "Fire Attunement",
  "Freezing Gust",
  "Frigid Armor",
  "Frozen Burst",
  "Gale",
  "Glimmering Mark",
  "Glowing Gaze",
  "Glowing Ice",
  "Glowstone",
  "Glyph of Concentration",
  "Glyph of Elemental Power",
  "Glyph of Energy",
  "Glyph of Essence",
  "Glyph of Immolation",
  "Glyph of Lesser Energy",
  "Glyph of Renewal",
  "Glyph of Restoration",
  "Glyph of Sacrifice",
  "Glyph of Swiftness",
  "Grasping Earth",
  "Gust",
  "Ice Prison",
  "Ice Spear",
  "Ice Spikes",
  "Icy Shackles",
  "Phoenix",
].map(toNormalized);

const assassin_defensive_skills = [
  "Assassin's Promise",
  "Assassin's Remedy",
  "Augury of Death",
  "Aura of Displacement",
  "Beguiling Haze",
  "Black Lotus Strike",
  "Black Mantis Thrust",
  "Blinding Powder",
  "Caltrops",
  "Crippling Dagger",
  "Critical Agility",
  "Critical Defenses",
  "Critical Eye",
  "Critical Strike",
  "Dark Escape",
  "Dark Prison",
  "Dash",
  "Deadly Haste",
  "Deadly Paradox",
  "Death's Charge",
  "Death's Retreat",
  "Entangling Asp",
  "Falling Lotus Strike",
  "Feigned Neutrality",
  "Flashing Blades",
  "Golden Fang Strike",
  "Golden Lotus Strike",
  "Heart of Shadow",
  "Hidden Caltrops",
  "Iron Palm",
  "Leaping Mantis Sting",
  "Lotus Strike",
  "Mantis Touch",
  "Mark of Instability",
  "Mirrored Stance",
  "Palm Strike",
  "Recall",
  "Return",
  "Sadist's Signet",
  "Scorpion Wire",
  "Seeping Wound",
  "Shadow Form",
  "Shadow Form (PvP)",
  "Shadow Meld",
  "Shadow Prison",
  "Shadow Refuge",
  "Shadow Sanctuary",
  "Shadow Theft",
  "Shadow Walk",
  "Shadow of Haste",
  "Shadowy Burden",
  "Shroud of Distress",
  "Shroud of Silence",
  "Signet of Malice",
  "Siphon Speed",
  "Smoke Powder Defense",
  "Spirit Walk",
  "Swap",
  "Temple Strike",
  "Trampling Ox",
  "Unseen Fury",
  "Vampiric Assault",
  "Viper's Defense",
  "Wastrel's Collapse",
  "Way of Perfection",
  "Way of the Lotus",
].map(toNormalized);

const ritualist_defensive_skills = [
  "Ancestors' Rage",
  "Ancestors' Rage (PvP)",
  "Anguished Was Lingwah",
  "Armor of Unfeeling",
  "Armor of Unfeeling (PvP)",
  "Attuned Was Songkai",
  "Binding Chains",
  "Blind Was Mingson",
  "Boon of Creation",
  "Brutal Weapon",
  "Caretaker's Charge",
  "Clamor of Souls",
  "Consume Soul",
  "Death Pact Signet",
  "Death Pact Signet (PvP)",
  "Defiant Was Xinrae",
  "Displacement",
  "Displacement (PvP)",
  "Draw Spirit",
  "Dulled Weapon",
  "Earthbind",
  "Earthbind (PvP)",
  "Empowerment",
  "Empowerment (PvP)",
  "Energetic Was Lee Sa",
  "Essence Strike",
  "Feast of Souls",
  "Flesh of My Flesh",
  "Flesh of My Flesh (PvP)",
  "Gaze from Beyond",
  "Generous Was Tsungrai",
  "Ghostly Haste",
  "Ghostly Weapon",
  "Ghostmirror Light",
  "Grasping Was Kuurong",
  "Guided Weapon",
  "Life",
  "Life (PvP)",
  "Lively Was Naomei",
  "Mend Body and Soul",
  "Mending Grip",
  "Mighty Was Vorizun",
  "Nightmare Weapon",
  "Offering of Spirit",
  "Painful Bond",
  "Preservation",
  "Preservation (PvP)",
  "Protective Was Kaolai",
  "Pure Was Li Ming",
  "Reclaim Essence",
  "Recovery",
  "Recovery (PvP)",
  "Recuperation",
  "Recuperation (PvP)",
  "Rejuvenation",
  "Rejuvenation (PvP)",
  "Renewing Memories",
  "Renewing Surge",
  "Resilient Was Xiko",
  "Resilient Weapon",
  "Restoration",
  "Restoration (PvP)",
  "Ritual Lord",
  "Rupture Soul",
  "Shadowsong",
  "Shadowsong (PvP)",
  "Shelter",
  "Shelter (PvP)",
  "Sight Beyond Sight",
  "Signet of Binding",
  "Signet of Creation",
  "Signet of Spirits (PvP)",
  "Soothing Memories",
  "Soul Twisting",
  "Spirit Channeling",
  "Spirit Light",
  "Spirit Light Weapon",
  "Spirit Siphon",
  "Spirit Transfer",
  "Spirit to Flesh",
  "Spirit's Gift",
  "Spiritleech Aura",
  "Summon Spirits",
  "Sundering Weapon",
  "Tranquil Was Tanasen",
  "Union",
  "Vampirism",
  "Vengeful Was Khanhei",
  "Vengeful Weapon",
  "Vital Weapon",
  "Vocal Was Sogolon",
  "Wailing Weapon",
  "Wanderlust",
  "Wanderlust (PvP)",
  "Warmonger's Weapon",
  "Weapon of Aggression",
  "Weapon of Fury",
  "Weapon of Quickening",
  "Weapon of Remedy",
  "Weapon of Renewal",
  "Weapon of Shadow",
  "Weapon of Warding",
  "Weapon of Warding (PvP)",
  "Weapons of Three Forges",
  "Wielder's Boon",
  "Wielder's Remedy",
  "Wielder's Zeal",
  "Xinrae's Weapon",
].map(toNormalized);

const dervish_defensive_skills = [
  "Arcane Zeal",
  "Armor of Sanctity",
  "Attacker's Insight",
  "Aura of Thorns",
  "Aura of Thorns (PvP)",
  "Avatar of Dwayna",
  "Avatar of Grenth",
  "Avatar of Lyssa",
  "Avatar of Melandru",
  "Conviction",
  "Dust Cloak",
  "Dust Cloak (PvP)",
  "Dwayna's Touch",
  "Ebon Dust Aura",
  "Enchanted Haste",
  "Eremite's Zeal",
  "Eternal Aura",
  "Extend Enchantments",
  "Faithful Intervention",
  "Featherfoot Grace",
  "Fleeting Stability",
  "Grenth's Aura",
  "Grenth's Fingers",
  "Grenth's Grasp",
  "Guiding Hands",
  "Harrier's Grasp",
  "Harrier's Haste",
  "Heart of Holy Flame",
  "Imbue Health",
  "Intimidating Aura",
  "Lyssa's Haste",
  "Lyssa's Haste (PvP)",
  "Meditation",
  "Mirage Cloak",
  "Mystic Corruption",
  "Mystic Healing",
  "Mystic Healing (PvP)",
  "Mystic Regeneration",
  "Mystic Regeneration (PvP)",
  "Mystic Twister",
  "Mystic Vigor",
  "Natural Healing",
  "Onslaught",
  "Onslaught (PvP)",
  "Pious Assault",
  "Pious Assault (PvP)",
  "Pious Concentration",
  "Pious Fury",
  "Pious Fury (PvP)",
  "Pious Haste",
  "Pious Renewal",
  "Pious Restoration",
  "Rending Aura",
  "Rending Touch",
  "Sand Shards",
  "Shield of Force",
  "Signet of Mystic Speed",
  "Signet of Pious Light",
  "Signet of Pious Restraint",
  "Signet of Pious Restraint (PvP)",
  "Staggering Force",
  "Test of Faith",
  "Veil of Thorns",
  "Vital Boon",
  "Vow of Piety",
  "Vow of Revolution",
  "Vow of Silence",
  "Vow of Strength",
  "Watchful Intervention",
  "Whirling Charge",
  "Winds of Disenchantment",
  "Zealous Renewal",
  "Zealous Vow",
].map(toNormalized);

const paragon_defensive_skills = [
  '"Brace Yourself!"',
  '"Brace Yourself!" (PvP)',
  '"Can\'t Touch This!"',
  '"Can\'t Touch This!" (PvP)',
  '"Fall Back!"',
  '"Fall Back!" (PvP)',
  '"Find Their Weakness!"',
  '"Find Their Weakness!" (PvP)',
  '"Help Me!"',
  '"Help Me!" (PvP)',
  '"Incoming!"',
  '"Incoming!" (PvP)',
  '"It\'s Just a Flesh Wound."',
  '"Lead the Way!"',
  '"Make Haste!"',
  '"Make Your Time!"',
  '"Never Give Up!"',
  '"Never Give Up!" (PvP)',
  '"Never Surrender!"',
  '"Never Surrender!" (PvP)',
  '"Stand Your Ground!"',
  '"Stand Your Ground!" (PvP)',
  '"The Power Is Yours!"',
  '"There\'s Nothing to Fear!"',
  '"They\'re on Fire!"',
  '"We Shall Return!"',
  '"We Shall Return!" (PvP)Angelic Bond',
  "Angelic ProtectionAnthem of Weariness",
  "Aria of Restoration",
  "Aria of Zeal",
  "Awe",
  "Ballad of Restoration",
  "Ballad of Restoration (PvP)Bladeturn Refrain",
  "Bladeturn Refrain (PvP)",
  "Blazing Finale",
  "Blazing Finale (PvP)Burning Refrain",
  "Burning Shield",
  "Cautery SignetChorus of Restoration",
  "Crippling AnthemDisrupting Throw",
  "Enduring Harmony",
  "Energizing Chorus",
  "Energizing Finale",
  "Finale of Restoration",
  "Finale of Restoration (PvP)",
  "Focused Anger",
  "Glowing Signet",
  "Godspeed",
  "Hasty Refrain",
  "Heroic Refrain",
  "Hexbreaker AriaInspirational Speech",
  "Leader's Comfort",
  "Leader's Zeal",
  "Lyric of Purification",
  "Lyric of ZealMending Refrain",
  "Mending Refrain (PvP)",
  "Natural Temper",
  "Purifying Finale",
  "Remedy SignetSignet of Return",
  "Signet of Return (PvP)",
  "Signet of Synergy",
  "Song of Concentration",
  "Song of Power",
  "Song of Purification",
  "Song of Restoration",
  "Song of Restoration (PvP)",
  "Zealous Anthem",
].map(toNormalized);

const pve_defensive_skills = ["Air of Superiority"].map(toNormalized);

export const all_defensive_skills = new Set(
  []
    .concat(ranger_defensive_skills)
    .concat(warrior_defensive_skills)
    .concat(monk_defensive_skills)
    .concat(mesmer_defensive_skills)
    .concat(necromancer_defensive_skills)
    .concat(elementalist_defensive_skills)
    .concat(assassin_defensive_skills)
    .concat(ritualist_defensive_skills)
    .concat(dervish_defensive_skills)
    .concat(paragon_defensive_skills)
    .concat(pve_defensive_skills)
);