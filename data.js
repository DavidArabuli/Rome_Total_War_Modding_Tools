const units = [
  "barb_peasant_briton",
  "barb_peasant_dacian",
  "barb_peasant_gaul",
  "barb_peasant_german",
  "barb_peasant_scythian",
  "barb_peasant_slave",
  "barb_peltast_gaul",
  "barb_peltast_german",
  "barb_slinger_briton",
  "barb_archer_dacian",
  "barb_archer_scythian",
  "barb_archer_slave",
  "warband_archer_dacian",
  "warband_archer_german",
  "warband_archer_scythian",
  "warband_huntsman_gaul",
  "warband_hurler_briton",
  "barb_infantry_briton",
  "barb_infantry_dacian",
  "barb_infantry_gaul",
  "barb_infantry_slave",
  "warband_spear_german",
  "warband_sword_briton",
  "warband_sword_gaul",
  "warband_axe_german",
  "warband_axe_scythian",
  "warband_falx_dacian",
  "warband_falx_thracian",
  "warband_dhaxe_german",
  "barb_warguard_briton",
  "barb_warguard_dacian",
  "barb_warguard_gaul",
  "warband_woad_briton",
  "naked_fanatics_dacian",
  "naked_fanatics_gaul",
  "naked_fanatics_german",
  "naked_fanatics_slave",
  "naked_fanatics_spain",
  "druids_briton",
  "druids_gaul",
  "druids_slave",
  "night_raiders_german",
  "barb_berserker_german",
  "screeching_women_german",
  "barb_wardogs_briton",
  "barb_wardogs_dacian",
  "barb_wardogs_gaul",
  "barb_wardogs_german",
  "barb_wardogs_scythian",
  "barb_cavalry_dacian",
  "barb_cavalry_gaul",
  "barb_cavalry_german",
  "barb_cavalry_scythian",
  "barb_cavalry_slave",
  "barb_noble_cavalry_dacian",
  "barb_noble_cavalry_gaul",
  "barb_noble_cavalry_german",
  "barb_noble_cavalry_slave",
  "gothic_cavalry_german",
  "barb_chariot_light_briton",
  "barb_chariot_heavy_briton",
  "barb_chariot_heavy_slave",
  "barb_horse_archers_scythian",
  "barb_horse_archers_slave",
  "barb_noble_horse_archers_scythian",
  "head_hunting_maidens_scythian",
  "scythian_nobles_scythian",
  "scythian_noble_women_scythian",
  "barb_ballistas_dacian",
  "barb_onagers_dacian",
  "barb_onagers_scythian",
  "barb_chieftain_cavalry_early_dacian",
  "barb_chieftain_cavalry_early_gaul",
  "barb_chieftain_cavalry_early_german",
  "barb_chieftain_cavalry_early_scythian",
  "barb_chieftain_cavalry_early_slave",
  "barb_chieftain_cavalry_dacian",
  "barb_chieftain_cavalry_gaul",
  "barb_chieftain_cavalry_german",
  "barb_british_general_briton",
  "barb_scythian_chieftain_cavalry_scythian",
  "carthaginian_peasant",
  "carthaginian_peltast",
  "carthaginian_slinger",
  "carthaginian_archer",
  "carthaginian_city_militia",
  "carthaginian_infantry",
  "carthaginian_medium_infantry",
  "carthaginian_heavy_infantry",
  "carthaginian_sacred_band",
  "scutarii",
  "bull_warriors",
  "numidian_javelinmen",
  "numidian_desert_warriors",
  "numidian_legionaries",
  "carthaginian_cavalry",
  "carthaginian_medium_cavalry",
  "carthaginian_generals_cavalry_early",
  "carthaginian_generals_cavalry",
  "carthaginian_royal_cavalry",
  "numidian_cavalry",
  "numidian_camel_riders",
  "carthaginian_warhounds",
  "carthaginian_elephant_forest",
  "carthaginian_elephant_african",
  "carthaginian_elephant_african_cataphract",
  "carthaginian_onagers",
  "carthaginian_heavy_onagers",
  "east_peasant",
  "east_peltast",
  "east_slinger",
  "east_archer",
  "east_hillmen",
  "east_infantry",
  "east_heavy_infantry",
  "east_hoplite",
  "bronze_shield",
  "armenian_legionaries",
  "east_cavalry",
  "east_heavy_cavalry",
  "east_heavy_cataphract",
  "east_cappodocian_cavalry",
  "eat_persian_cavalry",
  "east_cataphract_archer",
  "east_horse_archer",
  "east_camel_cataphract",
  "east_elephant_african",
  "east_chariot",
  "east_chariot_archer",
  "east_generals_cavalry_early",
  "east_generals_cavalry",
  "east_pontic_generals",
  "east_onager",
  "egyptian_peasant",
  "egyptian_peltast",
  "egyptian_slingers",
  "egyptian_archer",
  "egyptian_archer_elite",
  "egyptian_nubian_spearmen",
  "egyptian_nile_infantry",
  "egyptian_infantry",
  "egyptian_elite_guards",
  "egyptian_cavalry",
  "egyptian_nile_cavalry",
  "egyptian_cleruch",
  "egyptian_camel_archers",
  "egyptian_chariot",
  "egyptian_chariot_archer",
  "egyptian_onagers",
  "egyptian_heavy_onagers",
  "egyptian_general_early",
  "egyptian_generals_bodyguard",
  "greek_peasant",
  "greek_peltast",
  "greek_archer",
  "greek_heavy_peltast",
  "greek_hoplite_militia",
  "greek_hoplite",
  "greek_hoplite_elite",
  "greek_hoplite_spartan",
  "greek_levy_pikemen",
  "greek_pikemen",
  "greek_royal_pikemen",
  "greek_silver_shields",
  "greek_legionary",
  "greek_bastarnae",
  "greek-Light_lancer",
  "greek_cavalry",
  "greek_medium_cavalry",
  "greek_heavy_cavalry",
  "greek_royal_cavalry",
  "greek_generals_guard_cavalry_early",
  "greek_generals_guard_cavalry",
  "thracian_generals_guard_cavalry_early",
  "thracian_generals_guard_cavalry",
  "greek_elephant_small",
  "greek_elephant_african",
  "greek_elephant_armoured",
  "greek_pigs",
  "greek_ballistas",
  "greek_onagers",
  "greek_heavy_onagers",
  "greek_scythed_chariots",
  "roman_peasant",
  "roman_archer",
  "roman_archer_auxillia",
  "roman_velite",
  "roman_light_infantry",
  "roman_city_militia",
  "roman_hastati",
  "roman_principes",
  "roman_triarii",
  "roman_infantry_auxillia",
  "roman_legionary_cohort_i",
  "roman_legionary_first_cohort_i",
  "roman_legionary_cohort_ii",
  "roman_legionary_first_cohort_ii",
  "roman_praetorian_cohort_i",
  "roman_praetorian_cohort_urban_i",
  "roman_arcani",
  "roman_wardogs",
  "roman_incendiary_pigs",
  "roman_velite_gladiator",
  "roman_samnite_gladiator",
  "roman_mirmillo_gladiator",
  "roman_light_cavalry",
  "roman_cavalry_auxillia",
  "roman_medium_cavalry",
  "roman_heavy_cavalry",
  "roman_praetorian_cavalry",
  "roman_generals_guard_cavalry_early",
  "roman_generals_guard_cavalry",
  "roman_ballista",
  "roman_scorpion",
  "roman_onager",
  "roman_heavy_onager",
  "roman_repeating_ballistae",
  "generic_rebel_general",
  "eastern_rebel_generals",
  "barb_rebel_general",
  "amazon_chariots",
  "judean_zealots",
  "merc_peltast",
  "merc_illyrian",
  "merc_samnite",
  "merc_cilician_pirate",
  "merc_thracian",
  "merc_bastarnae",
  "merc_sarmatian_cavalry",
  "merc_horse_archers",
  "merc_spanish_infantry",
  "merc_eastern_infantry",
  "merc_rhodian_slingers",
  "merc_cretan_archers",
  "merc_greek_hoplites",
  "merc_libyan_infantry",
  "merc_numidian_cavalry",
  "merc_arab_cavalry",
  "merc_bedouin",
  "merc_bedouin_archers",
  "merc_balearic_slingers",
  "merc_barbarian_infantry",
  "merc_barbarian_cavalry",
  "merc_elephants",
  "naval_bireme",
  "naval_trireme",
  "naval_quinquireme",
  "naval_corvus",
  "naval_decere",
  "naval_boats",
  "naval_large_boats",
  "naval_pirates",
];