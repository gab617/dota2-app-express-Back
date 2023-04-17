// 1, 2, 37, 74, 76 (esos ids (prueba))
const detailHeros = [
  {
    id: 1,
    name: 'npc_dota_hero_antimage',
    order_id: 1,
    name_loc: 'Anti-Mage el flakito',
    bio_loc: "The monks of Turstarkuri watched the rugged valleys below their mountain monastery as wave after wave of invaders swept through the lower kingdoms. Ascetic and pragmatic, in their remote monastic eyrie they remained aloof from mundane strife, wrapped in meditation that knew no gods or elements of magic. Then came the Legion of the Dead God, crusaders with a sinister mandate to replace all local worship with their Unliving Lord's poisonous nihilosophy. From a landscape that had known nothing but blood and battle for a thousand years, they tore the souls and bones of countless fallen legions and pitched them against Turstarkuri. The monastery stood scarcely a fortnight against the assault, and the few monks who bothered to surface from their meditations believed the invaders were but demonic visions sent to distract them from meditation. They died where they sat on their silken cushions. Only one youth survived--a pilgrim who had come as an acolyte, seeking wisdom, but had yet to be admitted to the monastery. He watched in horror as the monks to whom he had served tea and nettles were first slaughtered, then raised to join the ranks of the Dead God's priesthood. With nothing but a few of Turstarkuri's prized dogmatic scrolls, he crept away to the comparative safety of other lands, swearing to obliterate not only the Dead God's magic users--but to put an end to magic altogether. ",
    hype_loc: 'Should Anti-Mage have the opportunity to gather his full strength, few can stop his assaults. <b>Draining mana</b> from enemies with every strike or <b>teleporting short distances</b> to escape an ambush, cornering him is a challenge for any foe.',
    npe_desc_loc: 'Slashes his foes with mana-draining attacks',
    str_base: 21,
    str_gain: 1.6,
    agi_base: 24,
    agi_gain: 2.8,
    int_base: 12,
    int_gain: 1.8,
    primary_attr: 1,
    complexity: 1,
    attack_capability: 1,
    role_levels: [
      3,
      0,
      1,
      0,
      0,
      0,
      3,
      0,
      0
    ],
    damage_min: 53,
    damage_max: 57,
    attack_rate: 1.4,
    attack_range: 150,
    projectile_speed: 0,
    armor: 4,
    magic_resistance: 25,
    movement_speed: 310,
    turn_rate: 0.6,
    sight_range_day: 1800,
    sight_range_night: 800,
    max_health: 620,
    health_regen: 2.3500001,
    max_mana: 219,
    mana_regen: 0.6,
    abilities: [
      {
        id: 5003,
        name: 'antimage_mana_break',
        name_loc: 'Mana Break',
        desc_loc: "Burns an opponent's mana on each attack and deals damage equal to a percentage of the mana burnt. Enemies with no mana left are temporarily slowed.",
        lore_loc: "A modified technique of the Turstarkuri monks' peaceful ways is to turn magical energies on their owner.",
        notes_loc: [
          'Mana Break has %illusion_percentage%%% effect if caused by illusions.'
        ],
        shard_loc: '',
        scepter_loc: '',
        type: 0,
        behavior: '2',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 1,
        immunity: 4,
        dispellable: 0,
        max_level: 4,
        cast_ranges: [
          0
        ],
        cast_points: [
          0
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          0
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'percent_damage_per_burn',
            values_float: [
              50
            ],
            is_percentage: true,
            heading_loc: 'MANA BURNED AS DAMAGE:',
            bonuses: []
          },
          {
            name: 'mana_per_hit',
            values_float: [
              28,
              40,
              52,
              64
            ],
            is_percentage: false,
            heading_loc: 'MANA BURNED PER HIT:',
            bonuses: []
          },
          {
            name: 'mana_per_hit_pct',
            values_float: [
              1,
              1.8,
              2.6,
              3.4
            ],
            is_percentage: true,
            heading_loc: 'MAX MANA BURNED PER HIT:',
            bonuses: [
              {
                name: 'special_bonus_unique_antimage_7',
                value: 0.6,
                operation: 0
              }
            ]
          },
          {
            name: 'illusion_percentage',
            values_float: [
              50
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'move_slow',
            values_float: [
              25,
              30,
              35,
              40
            ],
            is_percentage: true,
            heading_loc: 'MOVE SPEED SLOW ON FULL DRAIN:',
            bonuses: []
          },
          {
            name: 'slow_duration',
            values_float: [
              0.75
            ],
            is_percentage: false,
            heading_loc: 'SLOW DURATION:',
            bonuses: []
          },
          {
            name: 'AbilityCastRange',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0,
        thumb_image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/antimage_mana_break.png',
        video_webm: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/antimage_mana_break.webm',
        video_mp4: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/antimage_mana_break.mp4'
      },
      {
        id: 5004,
        name: 'antimage_blink',
        name_loc: 'Blink',
        desc_loc: 'Short distance teleportation that allows Anti-Mage to move in and out of combat.',
        lore_loc: 'In his encounter with the Dead Gods, Anti-Mage learned the value of being elusive.',
        notes_loc: [
          'You can use Blink to dodge incoming projectiles.'
        ],
        shard_loc: '',
        scepter_loc: '',
        type: 0,
        behavior: '274878431248',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 0,
        dispellable: 0,
        max_level: 4,
        cast_ranges: [
          750,
          900,
          1050,
          1200
        ],
        cast_points: [
          0.4,
          0.4,
          0.4,
          0.4
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          12,
          10,
          8,
          6
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          45
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'min_blink_range',
            values_float: [
              200
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastRange',
            values_float: [
              750,
              900,
              1050,
              1200
            ],
            is_percentage: false,
            heading_loc: 'RANGE:',
            bonuses: [
              {
                name: 'special_bonus_unique_antimage_3',
                value: 250,
                operation: 0
              }
            ]
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0.4
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              45
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              12,
              10,
              8,
              6
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: [
              {
                name: 'special_bonus_unique_antimage',
                value: 1,
                operation: 2
              }
            ]
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0,
        thumb_image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/antimage_blink.png',
        video_webm: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/antimage_blink.webm',
        video_mp4: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/antimage_blink.mp4'
      },
      {
        id: 7314,
        name: 'antimage_counterspell',
        name_loc: 'Counterspell',
        desc_loc: 'Passively grants magic resistance. Counterspell may be activated to create an anti-magic shell around Anti-Mage that blocks and sends any targeted spells back towards enemies instead.',
        lore_loc: 'With the proper focus, Anti-Mage turns innate resistance into calculated retaliation.',
        notes_loc: [],
        shard_loc: 'Counterspell passively grants an aura that reduces enemy spell damage. The reduction is stronger in close range.',
        scepter_loc: '',
        type: 0,
        behavior: '2052',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 0,
        dispellable: 2,
        max_level: 4,
        cast_ranges: [
          0
        ],
        cast_points: [
          0,
          0,
          0,
          0
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          15,
          11,
          7,
          3
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          45
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'magic_resistance',
            values_float: [
              15,
              25,
              35,
              45
            ],
            is_percentage: true,
            heading_loc: 'MAGIC RESISTANCE:',
            bonuses: [
              {
                name: 'special_bonus_unique_antimage_4',
                value: 20,
                operation: 0
              }
            ]
          },
          {
            name: 'duration',
            values_float: [
              1.2
            ],
            is_percentage: false,
            heading_loc: 'DURATION:',
            bonuses: []
          },
          {
            name: 'shard_radius',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: 'RADIUS:',
            bonuses: []
          },
          {
            name: 'shard_spell_damage_reduction_pct',
            values_float: [
              0
            ],
            is_percentage: true,
            heading_loc: 'SPELL DAMAGE REDUCTION:',
            bonuses: []
          },
          {
            name: 'shard_bonus_aura_range',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: 'CLOSE RADIUS:',
            bonuses: []
          },
          {
            name: 'shard_bonus_spell_damage_reduction_pct',
            values_float: [
              0
            ],
            is_percentage: true,
            heading_loc: 'CLOSE SPELL DAMAGE REDUCTION:',
            bonuses: []
          },
          {
            name: 'AbilityCastRange',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              45
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              15,
              11,
              7,
              3
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: true,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0,
        thumb_image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/antimage_counterspell.png',
        video_webm: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/antimage_counterspell.webm',
        video_mp4: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/antimage_counterspell.mp4'
      },
      {
        id: 543,
        name: 'antimage_mana_overload',
        name_loc: 'Blink Fragment',
        desc_loc: 'Blinks an illusion to the target enemy or location, which attacks for a brief time. Counterspell is replicated on the Blink Fragment illusion. Has 3 Charges.',
        lore_loc: '',
        notes_loc: [],
        shard_loc: '',
        scepter_loc: '',
        type: 0,
        behavior: '8589934617',
        target_team: 2,
        target_type: 19,
        flags: 0,
        damage: 0,
        immunity: 4,
        dispellable: 0,
        max_level: 1,
        cast_ranges: [
          0
        ],
        cast_points: [
          0.2
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          0
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          45
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'duration',
            values_float: [
              7
            ],
            is_percentage: false,
            heading_loc: 'ILLUSION DURATION:',
            bonuses: []
          },
          {
            name: 'outgoing_damage',
            values_float: [
              -25
            ],
            is_percentage: true,
            heading_loc: 'ILLUSION OUTGOING DAMAGE:',
            bonuses: []
          },
          {
            name: 'incoming_damage',
            values_float: [
              100
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastRange',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0.2
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              3
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              25
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              45
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: true,
        ability_has_shard: false,
        ability_is_granted_by_scepter: true,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0,
        thumb_image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/antimage_mana_overload.png',
        video_webm: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/antimage_mana_overload.webm',
        video_mp4: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/antimage_mana_overload.mp4'
      },
      {
        id: 5006,
        name: 'antimage_mana_void',
        name_loc: 'Mana Void',
        desc_loc: 'For each point of mana missing by the target unit, damage is dealt to it and surrounding enemies.  The main target is also mini-stunned.',
        lore_loc: 'After bringing enemies to their knees, Anti-Mage punishes them for their use of the arcane arts.',
        notes_loc: [
          "Damage is calculated based on the primary target's mana, but applied to all enemies within the area of effect."
        ],
        shard_loc: '',
        scepter_loc: '',
        type: 1,
        behavior: '40',
        target_team: 2,
        target_type: 19,
        flags: 0,
        damage: 2,
        immunity: 4,
        dispellable: 0,
        max_level: 3,
        cast_ranges: [
          600
        ],
        cast_points: [
          0.3,
          0.3,
          0.3,
          0.3
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          70
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          100,
          200,
          300
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'mana_void_damage_per_mana',
            values_float: [
              0.8,
              0.95,
              1.1
            ],
            is_percentage: false,
            heading_loc: 'DAMAGE:',
            bonuses: [
              {
                name: 'special_bonus_unique_antimage_6',
                value: 0.1,
                operation: 0
              }
            ]
          },
          {
            name: 'mana_void_ministun',
            values_float: [
              0.3
            ],
            is_percentage: false,
            heading_loc: 'STUN DURATION:',
            bonuses: [
              {
                name: 'special_bonus_unique_antimage_8',
                value: 1,
                operation: 0
              }
            ]
          },
          {
            name: 'mana_void_aoe_radius',
            values_float: [
              500
            ],
            is_percentage: false,
            heading_loc: 'RADIUS:',
            bonuses: [
              {
                name: 'special_bonus_unique_antimage_manavoid_aoe',
                value: 150,
                operation: 0
              }
            ]
          },
          {
            name: 'AbilityCastRange',
            values_float: [
              600
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0.3
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              100,
              200,
              300
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              70
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: [
              {
                name: 'special_bonus_unique_antimage_2',
                value: 50,
                operation: 2
              }
            ]
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0,
        thumb_image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/antimage_mana_void.png',
        video_webm: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/antimage_mana_void.webm',
        video_mp4: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/antimage_mana_void.mp4'
      }
    ],
    talents: [
      {
        id: 6250,
        name: 'special_bonus_strength_9',
        name_loc: '+{s:value} Strength',
        desc_loc: '',
        lore_loc: '',
        notes_loc: [],
        shard_loc: '',
        scepter_loc: '',
        type: 2,
        behavior: '2',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 0,
        dispellable: 0,
        max_level: 4,
        cast_ranges: [
          0
        ],
        cast_points: [
          0
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          0
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'value',
            values_float: [
              9
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastRange',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0
      },
      {
        id: 6012,
        name: 'special_bonus_unique_antimage',
        name_loc: '-{s:bonus_AbilityCooldown}s Blink Cooldown',
        desc_loc: '',
        lore_loc: '',
        notes_loc: [],
        shard_loc: '',
        scepter_loc: '',
        type: 2,
        behavior: '2',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 0,
        dispellable: 0,
        max_level: 4,
        cast_ranges: [
          0
        ],
        cast_points: [
          0
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          0
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'AbilityCastRange',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0
      },
      {
        id: 666,
        name: 'special_bonus_unique_antimage_7',
        name_loc: '+{s:bonus_mana_per_hit_pct}% Max Mana Mana Burn',
        desc_loc: '',
        lore_loc: '',
        notes_loc: [],
        shard_loc: '',
        scepter_loc: '',
        type: 2,
        behavior: '2',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 0,
        dispellable: 0,
        max_level: 4,
        cast_ranges: [
          0
        ],
        cast_points: [
          0
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          0
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'AbilityCastRange',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0
      },
      {
        id: 966,
        name: 'special_bonus_unique_antimage_manavoid_aoe',
        name_loc: '+{s:bonus_mana_void_aoe_radius} Mana Void Radius',
        desc_loc: '',
        lore_loc: '',
        notes_loc: [],
        shard_loc: '',
        scepter_loc: '',
        type: 2,
        behavior: '2',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 0,
        dispellable: 0,
        max_level: 4,
        cast_ranges: [
          0
        ],
        cast_points: [
          0
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          0
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'AbilityCastRange',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0
      },
      {
        id: 665,
        name: 'special_bonus_unique_antimage_6',
        name_loc: '+{s:bonus_mana_void_damage_per_mana} Mana Void Damage Multiplier',
        desc_loc: '',
        lore_loc: '',
        notes_loc: [],
        shard_loc: '',
        scepter_loc: '',
        type: 2,
        behavior: '2',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 0,
        dispellable: 0,
        max_level: 4,
        cast_ranges: [
          0
        ],
        cast_points: [
          0
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          0
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'AbilityCastRange',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0
      },
      {
        id: 6606,
        name: 'special_bonus_unique_antimage_3',
        name_loc: '+{s:bonus_AbilityCastRange} Blink Cast Range',
        desc_loc: '',
        lore_loc: '',
        notes_loc: [],
        shard_loc: '',
        scepter_loc: '',
        type: 2,
        behavior: '2',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 0,
        dispellable: 0,
        max_level: 4,
        cast_ranges: [
          0
        ],
        cast_points: [
          0
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          0
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'AbilityCastRange',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0
      },
      {
        id: 6607,
        name: 'special_bonus_unique_antimage_4',
        name_loc: '+{s:bonus_magic_resistance}% Counterspell Magic Resistance',
        desc_loc: '',
        lore_loc: '',
        notes_loc: [],
        shard_loc: '',
        scepter_loc: '',
        type: 2,
        behavior: '2',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 0,
        dispellable: 0,
        max_level: 4,
        cast_ranges: [
          0
        ],
        cast_points: [
          0
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          0
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'AbilityCastRange',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0
      },
      {
        id: 6353,
        name: 'special_bonus_unique_antimage_2',
        name_loc: '-{s:bonus_AbilityCooldown}s Mana Void Cooldown',
        desc_loc: '',
        lore_loc: '',
        notes_loc: [],
        shard_loc: '',
        scepter_loc: '',
        type: 2,
        behavior: '2',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 0,
        dispellable: 0,
        max_level: 4,
        cast_ranges: [
          0
        ],
        cast_points: [
          0
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          0
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'AbilityCastRange',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0
      }
    ],
    thumb_video: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/antimage.webm',
    thumb_image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/antimage.png',
    attribute_img: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png',
    roles: {
      Carry: 3,
      Support: 0,
      Nuker: 1,
      Disabler: 0,
      Jungler: 0,
      Durable: 0,
      Escape: 3,
      Pusher: 0,
      Initiator: 0
    }
  },
  {
    id: 2,
    name: 'npc_dota_hero_axe',
    order_id: 2,
    name_loc: 'Axe el bigudo',
    bio_loc: "As a grunt in the Army of Red Mist, Mogul Khan set his sights on the rank of Red Mist General. In battle after battle he proved his worth through gory deed. His rise through the ranks was helped by the fact that he never hesitated to decapitate a superior. Through the seven year Campaign of the Thousand Tarns, he distinguished himself in glorious carnage, his star of fame shining ever brighter, while the number of comrades in arms steadily dwindled. On the night of ultimate victory, Axe declared himself the new Red Mist General, and took on the ultimate title of 'Axe.' But his troops now numbered zero. Of course, many had died in battle, but a significant number had also fallen to Axe's blade. Needless to say, most soldiers now shun his leadership. But this matters not a whit to Axe, who knows that a one-man army is by far the best.",
    hype_loc: 'One after another, Axe cuts down his foes. Marching ahead of his team, he <b>locks his enemies in battle</b> then counters their blows with a <b>deadly spin</b> of his weapon. Slamming his <b>culling blade</b> through a weakened enemy, he is always charging onward.',
    npe_desc_loc: 'Taunts and forces enemies to attack him',
    str_base: 25,
    str_gain: 2.8,
    agi_base: 20,
    agi_gain: 2,
    int_base: 18,
    int_gain: 1.6,
    primary_attr: 0,
    complexity: 1,
    attack_capability: 1,
    role_levels: [
      1,
      0,
      0,
      2,
      0,
      3,
      0,
      0,
      3
    ],
    damage_min: 55,
    damage_max: 59,
    attack_rate: 1.7,
    attack_range: 150,
    projectile_speed: 900,
    armor: 2.3333335,
    magic_resistance: 25,
    movement_speed: 315,
    turn_rate: 0.6,
    sight_range_day: 1800,
    sight_range_night: 800,
    max_health: 700,
    health_regen: 5,
    max_mana: 291,
    mana_regen: 0.90000004,
    abilities: [
      {
        id: 5007,
        name: 'axe_berserkers_call',
        name_loc: "Berserker's Call",
        desc_loc: 'Axe taunts nearby enemy units, forcing them to attack him, while he gains bonus armor during the duration.',
        lore_loc: "Mogul Khan's warcry taunts opponents into engaging in an unconquerable battle with the Axe.",
        notes_loc: [],
        shard_loc: '',
        scepter_loc: "Berserker's Call applies Battle Hunger to affected units. Reduces Berserker's Call cooldown.",
        type: 0,
        behavior: '262148',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 3,
        dispellable: 3,
        max_level: 4,
        cast_ranges: [
          0
        ],
        cast_points: [
          0.3
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          17,
          15,
          13,
          11
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          80,
          90,
          100,
          110
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'radius',
            values_float: [
              300
            ],
            is_percentage: false,
            heading_loc: 'RADIUS:',
            bonuses: [
              {
                name: 'special_bonus_unique_axe_2',
                value: 100,
                operation: 0
              }
            ]
          },
          {
            name: 'bonus_armor',
            values_float: [
              25
            ],
            is_percentage: false,
            heading_loc: 'BONUS ARMOR:',
            bonuses: [
              {
                name: 'special_bonus_unique_axe_7',
                value: 8,
                operation: 0
              }
            ]
          },
          {
            name: 'duration',
            values_float: [
              2,
              2.4,
              2.8,
              3.2
            ],
            is_percentage: false,
            heading_loc: 'DURATION:',
            bonuses: []
          },
          {
            name: 'scepter_cooldown_reduction',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: 'COOLDOWN REDUCTION:',
            bonuses: []
          },
          {
            name: 'applies_battle_hunger',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastRange',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0.3
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              80,
              90,
              100,
              110
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              17,
              15,
              13,
              11
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: true,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0,
        thumb_image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/axe_berserkers_call.png',
        video_webm: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/axe_berserkers_call.webm',
        video_mp4: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/axe_berserkers_call.mp4'
      },
      {
        id: 5008,
        name: 'axe_battle_hunger',
        name_loc: 'Battle Hunger',
        desc_loc: "Enrages an enemy unit, causing it to take damage over time until it kills another unit or the duration ends. The damage is increased by a factor of Axe's armor. The enemy is also slowed as long as they are facing away from Axe.",
        lore_loc: "Ordinary heroes cannot withstand Mogul Khan's rage for battle, such that it injures them until it is satisfied.",
        notes_loc: [
          'Destroying buildings will also remove the debuff.'
        ],
        shard_loc: '',
        scepter_loc: 'Battle Hunger also reduces enemy armor and grants Axe armor per affected target.',
        type: 0,
        behavior: '8',
        target_team: 2,
        target_type: 19,
        flags: 0,
        damage: 1,
        immunity: 4,
        dispellable: 2,
        max_level: 4,
        cast_ranges: [
          700,
          775,
          850,
          925
        ],
        cast_points: [
          0.3,
          0.3,
          0.3,
          0.3
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          20,
          15,
          10,
          5
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          50,
          60,
          70,
          80
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'duration',
            values_float: [
              12
            ],
            is_percentage: false,
            heading_loc: 'DURATION:',
            bonuses: []
          },
          {
            name: 'slow',
            values_float: [
              -11,
              -19,
              -27,
              -35
            ],
            is_percentage: true,
            heading_loc: 'MOVEMENT SLOW:',
            bonuses: [
              {
                name: 'special_bonus_unique_axe_6',
                value: 12,
                operation: 2
              }
            ]
          },
          {
            name: 'damage_per_second',
            values_float: [
              10,
              15,
              20,
              25
            ],
            is_percentage: false,
            heading_loc: 'DAMAGE PER SECOND:',
            bonuses: []
          },
          {
            name: 'armor_multiplier',
            values_float: [
              1
            ],
            is_percentage: false,
            heading_loc: 'ARMOR MULTIPLIER:',
            bonuses: [
              {
                name: 'special_bonus_unique_axe',
                value: 2,
                operation: 1
              }
            ]
          },
          {
            name: 'scepter_armor_change',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: 'ARMOR CHANGE:',
            bonuses: []
          },
          {
            name: 'speed_bonus',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: [
              {
                name: 'special_bonus_unique_axe_8',
                value: 12,
                operation: 0
              }
            ]
          },
          {
            name: 'AbilityCastRange',
            values_float: [
              700,
              775,
              850,
              925
            ],
            is_percentage: false,
            heading_loc: 'CAST RANGE:',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0.3
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              50,
              60,
              70,
              80
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              20,
              15,
              10,
              5
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: true,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0,
        thumb_image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/axe_battle_hunger.png',
        video_webm: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/axe_battle_hunger.webm',
        video_mp4: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/axe_battle_hunger.mp4'
      },
      {
        id: 5009,
        name: 'axe_counter_helix',
        name_loc: 'Counter Helix',
        desc_loc: 'When attacked, Axe has a chance to perform a helix counter attack, dealing pure damage to all nearby enemies.',
        lore_loc: 'Axe is the only reinforcement this army needs.',
        notes_loc: [
          'Counter Helix triggers when the attack hits.'
        ],
        shard_loc: 'Counter Helix now applies a stacking debuff to enemies hit by it that causes them to deal less total attack damage to Axe. Increases Counter Helix chance.',
        scepter_loc: '',
        type: 0,
        behavior: '2',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 4,
        immunity: 3,
        dispellable: 0,
        max_level: 4,
        cast_ranges: [
          0
        ],
        cast_points: [
          0
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          0.3
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'damage',
            values_float: [
              60,
              100,
              140,
              180
            ],
            is_percentage: false,
            heading_loc: 'DAMAGE:',
            bonuses: [
              {
                name: 'special_bonus_unique_axe_4',
                value: 30,
                operation: 0
              }
            ]
          },
          {
            name: 'radius',
            values_float: [
              300
            ],
            is_percentage: false,
            heading_loc: 'RADIUS:',
            bonuses: []
          },
          {
            name: 'trigger_chance',
            values_float: [
              17,
              18,
              19,
              20
            ],
            is_percentage: true,
            heading_loc: 'CHANCE TO HELIX:',
            bonuses: []
          },
          {
            name: 'cooldown',
            values_float: [
              0.3
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'shard_debuff_duration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: 'DEBUFF DURATION:',
            bonuses: []
          },
          {
            name: 'shard_damage_reduction',
            values_float: [
              0
            ],
            is_percentage: true,
            heading_loc: 'ATTACK REDUCTION:',
            bonuses: []
          },
          {
            name: 'shard_max_stacks',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: 'MAX STACKS:',
            bonuses: []
          },
          {
            name: 'AbilityCastRange',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              0.3
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: true,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0,
        thumb_image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/axe_counter_helix.png',
        video_webm: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/axe_counter_helix.webm',
        video_mp4: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/axe_counter_helix.mp4'
      },
      {
        id: 5010,
        name: 'axe_culling_blade',
        name_loc: 'Culling Blade',
        desc_loc: 'Axe spots a weakness and strikes, dealing pure damage. When an enemy hero is killed with Culling Blade, its cooldown is reset, Axe gains bonus armor permanently and all nearby allied units gain bonus movement speed. ',
        lore_loc: 'Mogul Khan is the embodiment of battle and fury, launching into a gruesome fatality against those who dare engage the Axe in combat.',
        notes_loc: [
          'Culling Blade death cannot be prevented with other abilities like Shallow Grave.'
        ],
        shard_loc: '',
        scepter_loc: '',
        type: 1,
        behavior: '8',
        target_team: 2,
        target_type: 19,
        flags: 16,
        damage: 4,
        immunity: 3,
        dispellable: 2,
        max_level: 3,
        cast_ranges: [
          175
        ],
        cast_points: [
          0.3
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          100,
          85,
          70
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          100,
          125,
          150
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'damage',
            values_float: [
              250,
              350,
              450
            ],
            is_percentage: false,
            heading_loc: 'DAMAGE:',
            bonuses: [
              {
                name: 'special_bonus_unique_axe_5',
                value: 150,
                operation: 0
              }
            ]
          },
          {
            name: 'speed_bonus',
            values_float: [
              20,
              25,
              30
            ],
            is_percentage: true,
            heading_loc: 'KILL MOVE SPEED BONUS:',
            bonuses: []
          },
          {
            name: 'atk_speed_bonus',
            values_float: [
              20,
              30,
              40
            ],
            is_percentage: false,
            heading_loc: 'KILL ATTACK SPEED BONUS:',
            bonuses: []
          },
          {
            name: 'speed_duration',
            values_float: [
              6
            ],
            is_percentage: false,
            heading_loc: 'KILL SPEED DURATION:',
            bonuses: []
          },
          {
            name: 'speed_aoe',
            values_float: [
              900
            ],
            is_percentage: false,
            heading_loc: 'KILL SPEED RADIUS:',
            bonuses: []
          },
          {
            name: 'charge_speed',
            values_float: [
              1200
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'armor_per_stack',
            values_float: [
              1,
              1.5,
              2
            ],
            is_percentage: false,
            heading_loc: 'ARMOR PER KILL:',
            bonuses: [
              {
                name: 'special_bonus_unique_axe_3',
                value: 1,
                operation: 0
              }
            ]
          },
          {
            name: 'AbilityCastRange',
            values_float: [
              175
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0.3
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              100,
              125,
              150
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              100,
              85,
              70
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0,
        thumb_image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/axe_culling_blade.png',
        video_webm: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/axe_culling_blade.webm',
        video_mp4: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/axe_culling_blade.mp4'
      }
    ],
    talents: [
      {
        id: 974,
        name: 'special_bonus_unique_axe_7',
        name_loc: "+{s:bonus_bonus_armor} Berserker's Call Armor",
        desc_loc: '',
        lore_loc: '',
        notes_loc: [],
        shard_loc: '',
        scepter_loc: '',
        type: 2,
        behavior: '2',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 0,
        dispellable: 0,
        max_level: 4,
        cast_ranges: [
          0
        ],
        cast_points: [
          0
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          0
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'AbilityCastRange',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0
      },
      {
        id: 9401,
        name: 'special_bonus_unique_axe_8',
        name_loc: '+{s:bonus_speed_bonus}% Movement Speed per active Battle Hunger',
        desc_loc: '',
        lore_loc: '',
        notes_loc: [],
        shard_loc: '',
        scepter_loc: '',
        type: 2,
        behavior: '2',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 0,
        dispellable: 0,
        max_level: 4,
        cast_ranges: [
          0
        ],
        cast_points: [
          0
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          0
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'AbilityCastRange',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0
      },
      {
        id: 670,
        name: 'special_bonus_unique_axe_6',
        name_loc: '+{s:bonus_slow}% Battle Hunger Slow',
        desc_loc: '',
        lore_loc: '',
        notes_loc: [],
        shard_loc: '',
        scepter_loc: '',
        type: 2,
        behavior: '2',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 0,
        dispellable: 0,
        max_level: 4,
        cast_ranges: [
          0
        ],
        cast_points: [
          0
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          0
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'AbilityCastRange',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0
      },
      {
        id: 6991,
        name: 'special_bonus_unique_axe_4',
        name_loc: '+{s:bonus_damage} Counter Helix Damage',
        desc_loc: '',
        lore_loc: '',
        notes_loc: [],
        shard_loc: '',
        scepter_loc: '',
        type: 2,
        behavior: '2',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 0,
        dispellable: 0,
        max_level: 4,
        cast_ranges: [
          0
        ],
        cast_points: [
          0
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          0
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'AbilityCastRange',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0
      },
      {
        id: 562,
        name: 'special_bonus_unique_axe_5',
        name_loc: '+{s:bonus_damage} Culling Blade Damage',
        desc_loc: '',
        lore_loc: '',
        notes_loc: [],
        shard_loc: '',
        scepter_loc: '',
        type: 2,
        behavior: '2',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 0,
        dispellable: 0,
        max_level: 4,
        cast_ranges: [
          0
        ],
        cast_points: [
          0
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          0
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'AbilityCastRange',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0
      },
      {
        id: 6815,
        name: 'special_bonus_unique_axe_3',
        name_loc: '+{s:bonus_armor_per_stack} Bonus Armor per Culling Blade Stack',
        desc_loc: '',
        lore_loc: '',
        notes_loc: [],
        shard_loc: '',
        scepter_loc: '',
        type: 2,
        behavior: '2',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 0,
        dispellable: 0,
        max_level: 4,
        cast_ranges: [
          0
        ],
        cast_points: [
          0
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          0
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'AbilityCastRange',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0
      },
      {
        id: 6608,
        name: 'special_bonus_unique_axe_2',
        name_loc: "+{s:bonus_radius} Berserker's Call AoE",
        desc_loc: '',
        lore_loc: '',
        notes_loc: [],
        shard_loc: '',
        scepter_loc: '',
        type: 2,
        behavior: '2',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 0,
        dispellable: 0,
        max_level: 4,
        cast_ranges: [
          0
        ],
        cast_points: [
          0
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          0
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'AbilityCastRange',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0
      },
      {
        id: 6102,
        name: 'special_bonus_unique_axe',
        name_loc: '{s:bonus_armor_multiplier}x Battle Hunger Armor Multiplier',
        desc_loc: '',
        lore_loc: '',
        notes_loc: [],
        shard_loc: '',
        scepter_loc: '',
        type: 2,
        behavior: '2',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 0,
        dispellable: 0,
        max_level: 4,
        cast_ranges: [
          0
        ],
        cast_points: [
          0
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          0
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'AbilityCastRange',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0
      }
    ],
    thumb_video: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/axe.webm',
    thumb_image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/axe.png',
    attribute_img: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png',
    roles: {
      Carry: 1,
      Support: 0,
      Nuker: 0,
      Disabler: 2,
      Jungler: 0,
      Durable: 3,
      Escape: 0,
      Pusher: 0,
      Initiator: 3
    }
  },
  {
    id: 37,
    name: 'npc_dota_hero_warlock',
    order_id: 59,
    name_loc: 'Warlock el loco',
    bio_loc: 'As Chief Curator and Head of Acquisitions for the Arcane Archives of the Ultimyr Academy, Demnok Lannik was tireless in his pursuit of lost, rare and forbidden tomes. No cursed temple was so foreboding, no cavern path so treacherous, that any concern for his own survival could dissuade him from entering if rumors hinted that some pamphlet of primordial lore might still survive in its depths. However, so often did his investigations trigger the wrath of protector entities, that he finally found it necessary to master the arts of magic. He bent himself to learning sorcery with the same thorough obsessiveness that marked his quest for incunabula, becoming the most powerful Warlock of the Academy in less time than most practitioners required to complete a course of undergraduate work. Almost as an afterthought, he carved a staff of Dreadwood and summoned into it a captive spirit from the Outer Hells. And anticipating the day when he will have recovered every last lost spellbook, he has commenced writing his own Black Grimoire. It will undoubtedly be instructive.',
    hype_loc: 'Summoning forth his <b>demonic golem</b>, Warlock brings ruin to enemies and destroys their defenses. Yet even without his golem, his <b>dark spells</b> can still wreak havoc, whether <b>healing allies</b> and <b>harming enemies</b> with a word, or binding foes together to share their agony.',
    npe_desc_loc: 'Summons powerful demons to fight at his side',
    str_base: 24,
    str_gain: 3,
    agi_base: 10,
    agi_gain: 1,
    int_base: 25,
    int_gain: 3.0999999046325684,
    primary_attr: 2,
    complexity: 1,
    attack_capability: 2,
    role_levels: [
      0,
      1,
      0,
      1,
      0,
      0,
      0,
      0,
      2
    ],
    damage_min: 49,
    damage_max: 59,
    attack_rate: 1.7000000476837158,
    attack_range: 600,
    projectile_speed: 1200,
    armor: 2.6666667461395264,
    magic_resistance: 25,
    movement_speed: 290,
    turn_rate: 0.6000000238418579,
    sight_range_day: 1800,
    sight_range_night: 800,
    max_health: 680,
    health_regen: 2.6500000953674316,
    max_mana: 375,
    mana_regen: 1.25,
    abilities: [
      {
        id: 5162,
        name: 'warlock_fatal_bonds',
        name_loc: 'Fatal Bonds',
        desc_loc: 'Binds several enemy units together, causing a percentage of the damage dealt to one of them to be felt by the others.',
        lore_loc: 'An ancient incantation that links the vital energies of multiple lifeforms into one collective body.',
        notes_loc: [
          'The shared damage type is the same as the type of damage inflicted.'
        ],
        shard_loc: '',
        scepter_loc: '',
        type: 0,
        behavior: '134217736',
        target_team: 2,
        target_type: 19,
        flags: 0,
        damage: 0,
        immunity: 4,
        dispellable: 2,
        max_level: 4,
        cast_ranges: [
          1000
        ],
        cast_points: [
          0.20000000298023224
        ],
        channel_times: [
          0,
          0,
          0,
          0
        ],
        cooldowns: [
          36,
          30,
          24,
          18
        ],
        durations: [
          0,
          0,
          0,
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          110,
          120,
          130,
          140
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'count',
            values_float: [
              6
            ],
            is_percentage: false,
            heading_loc: 'ENEMIES BOUND:',
            bonuses: []
          },
          {
            name: 'damage_share_percentage',
            values_float: [
              12,
              16,
              20,
              24
            ],
            is_percentage: true,
            heading_loc: 'SHARED DAMAGE:',
            bonuses: []
          },
          {
            name: 'duration',
            values_float: [
              25
            ],
            is_percentage: false,
            heading_loc: 'DURATION:',
            bonuses: []
          },
          {
            name: 'search_aoe',
            values_float: [
              700
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastRange',
            values_float: [
              1000
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0.20000000298023224
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              110,
              120,
              130,
              140
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              36,
              30,
              24,
              18
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0,
        thumb_image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/warlock_fatal_bonds.png',
        video_webm: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/warlock_fatal_bonds.webm',
        video_mp4: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/warlock_fatal_bonds.mp4'
      },
      {
        id: 5163,
        name: 'warlock_shadow_word',
        name_loc: 'Shadow Word',
        desc_loc: 'Warlock whispers an incantation, healing a friendly unit or damaging an enemy unit over time.',
        lore_loc: "Demnok's arcane arts have a myriad of uses, allowing them to be powerful friendly enchantments or damaging curses.",
        notes_loc: [],
        shard_loc: 'Turns Shadow Word into a 450 AoE Spell. Grants 10%% movement speed bonus to allies and slows enemies by 10%%. ',
        scepter_loc: '',
        type: 0,
        behavior: '8',
        target_team: 3,
        target_type: 19,
        flags: 0,
        damage: 2,
        immunity: 4,
        dispellable: 2,
        max_level: 4,
        cast_ranges: [
          600,
          700,
          800,
          900
        ],
        cast_points: [
          0.4000000059604645
        ],
        channel_times: [
          0,
          0,
          0,
          0
        ],
        cooldowns: [
          14
        ],
        durations: [
          0,
          0,
          0,
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          120,
          130,
          140,
          150
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'damage',
            values_float: [
              18,
              27,
              36,
              45
            ],
            is_percentage: false,
            heading_loc: 'HEAL/DAMAGE:',
            bonuses: []
          },
          {
            name: 'duration',
            values_float: [
              10
            ],
            is_percentage: false,
            heading_loc: 'DURATION:',
            bonuses: [
              {
                name: 'special_bonus_unique_warlock_8',
                value: 2,
                operation: 0
              }
            ]
          },
          {
            name: 'tick_interval',
            values_float: [
              1
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastRange',
            values_float: [
              600,
              700,
              800,
              900
            ],
            is_percentage: false,
            heading_loc: 'CAST RANGE:',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0.4000000059604645
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              120,
              130,
              140,
              150
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              14
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: true,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0,
        thumb_image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/warlock_shadow_word.png',
        video_webm: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/warlock_shadow_word.webm',
        video_mp4: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/warlock_shadow_word.mp4'
      },
      {
        id: 5164,
        name: 'warlock_upheaval',
        name_loc: 'Upheaval',
        desc_loc: "CHANNELED - A powerful slowing current that grows stronger as it's channelled. Lasts up to %abilitychanneltime% seconds.  Enemies are slowed for %duration% seconds after leaving the area or the spell ends.",
        lore_loc: 'Demnok manipulates space-time, impairing entire armies.',
        notes_loc: [
          'The slow increase is based on length of the channel, not the duration an enemy was standing in the area.'
        ],
        shard_loc: '',
        scepter_loc: '',
        type: 0,
        behavior: '176',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 4,
        dispellable: 2,
        max_level: 4,
        cast_ranges: [
          1200
        ],
        cast_points: [
          0.4000000059604645
        ],
        channel_times: [
          10,
          12,
          14,
          16
        ],
        cooldowns: [
          35
        ],
        durations: [
          0,
          0,
          0,
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          70,
          80,
          90,
          100
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'aoe',
            values_float: [
              500,
              550,
              600,
              650
            ],
            is_percentage: false,
            heading_loc: 'RADIUS:',
            bonuses: []
          },
          {
            name: 'slow_per_second',
            values_float: [
              12,
              17,
              22,
              27
            ],
            is_percentage: true,
            heading_loc: 'SLOW PER SECOND:',
            bonuses: []
          },
          {
            name: 'duration',
            values_float: [
              3
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'max_slow',
            values_float: [
              40,
              60,
              80,
              100
            ],
            is_percentage: true,
            heading_loc: 'MAX SLOW:',
            bonuses: []
          },
          {
            name: 'aspd_per_second',
            values_float: [
              10
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastRange',
            values_float: [
              1200
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              10,
              12,
              14,
              16
            ],
            is_percentage: false,
            heading_loc: 'MAX CHANNEL DURATION:',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0.4000000059604645
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              70,
              80,
              90,
              100
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              35
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0,
        thumb_image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/warlock_upheaval.png',
        video_webm: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/warlock_upheaval.webm',
        video_mp4: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/warlock_upheaval.mp4'
      },
      {
        id: 5165,
        name: 'warlock_rain_of_chaos',
        name_loc: 'Chaotic Offering',
        desc_loc: 'Summons a Golem from the depths, stunning enemies for one second. The Golem lives %golem_duration% seconds, takes reduced damage from spells, has Permanent Immolation and Flaming Fists on attack.',
        lore_loc: 'Demnok unleashes the captive spirit in his Dreadwood staff, causing destruction in enemy ranks.',
        notes_loc: [
          'Spell Immune units will be stunned.',
          'This ability destroys trees in its area of effect.'
        ],
        shard_loc: '',
        scepter_loc: 'Calls %number_of_golems_scepter% Golems with reduced stats and bounty.',
        type: 1,
        behavior: '48',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 2,
        immunity: 3,
        dispellable: 1,
        max_level: 3,
        cast_ranges: [
          1200
        ],
        cast_points: [
          0.5,
          0.5,
          0.5
        ],
        channel_times: [
          0,
          0,
          0,
          0
        ],
        cooldowns: [
          170
        ],
        durations: [
          0,
          0,
          0,
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          250,
          375,
          500
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'golem_duration',
            values_float: [
              60
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'stun_duration',
            values_float: [
              1
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'aoe',
            values_float: [
              600
            ],
            is_percentage: false,
            heading_loc: 'SUMMON BLAST RADIUS:',
            bonuses: []
          },
          {
            name: 'golem_hp_tooltip',
            values_float: [
              1200,
              2100,
              3000
            ],
            is_percentage: false,
            heading_loc: 'GOLEM HEALTH:',
            bonuses: []
          },
          {
            name: 'golem_dmg_tooltip',
            values_float: [
              100,
              150,
              200
            ],
            is_percentage: false,
            heading_loc: 'GOLEM DAMAGE:',
            bonuses: []
          },
          {
            name: 'golem_armor_tooltip',
            values_float: [
              6,
              9,
              12
            ],
            is_percentage: false,
            heading_loc: 'GOLEM ARMOR:',
            bonuses: []
          },
          {
            name: 'golem_regen_tooltip',
            values_float: [
              25,
              50,
              75
            ],
            is_percentage: false,
            heading_loc: 'GOLEM HEALTH REGEN:',
            bonuses: []
          },
          {
            name: 'number_of_golems_scepter',
            values_float: [
              2
            ],
            is_percentage: false,
            heading_loc: 'SCEPTER NUMBER OF GOLEMS:',
            bonuses: []
          },
          {
            name: 'golem_hp_tooltip_scepter',
            values_float: [
              800,
              1600,
              2400
            ],
            is_percentage: false,
            heading_loc: 'SCEPTER GOLEM HEALTH:',
            bonuses: []
          },
          {
            name: 'golem_dmg_tooltip_scepter',
            values_float: [
              75,
              110,
              150
            ],
            is_percentage: false,
            heading_loc: 'SCEPTER GOLEM DAMAGE:',
            bonuses: []
          },
          {
            name: 'hp_dmg_reduction_scepter',
            values_float: [
              25
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'bounty_reduction_scepter',
            values_float: [
              50
            ],
            is_percentage: true,
            heading_loc: 'SCEPTER BOUNTY REDUCTION:',
            bonuses: []
          },
          {
            name: 'AbilityCastRange',
            values_float: [
              1200
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0.5
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              250,
              375,
              500
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              170
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: true,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0,
        thumb_image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/warlock_rain_of_chaos.png',
        video_webm: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/warlock_rain_of_chaos.webm',
        video_mp4: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/warlock_rain_of_chaos.mp4'
      }
    ],
    talents: [
      {
        id: 6982,
        name: 'special_bonus_unique_warlock_5',
        name_loc: '+{s:value}% Fatal Bonds Damage',
        desc_loc: '',
        lore_loc: '',
        notes_loc: [],
        shard_loc: '',
        scepter_loc: '',
        type: 2,
        behavior: '2',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 0,
        dispellable: 0,
        max_level: 4,
        cast_ranges: [
          0
        ],
        cast_points: [
          0,
          0,
          0,
          0
        ],
        channel_times: [
          0,
          0,
          0,
          0
        ],
        cooldowns: [
          0,
          0,
          0,
          0
        ],
        durations: [
          0,
          0,
          0,
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0,
          0,
          0,
          0
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'value',
            values_float: [
              3
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0
      },
      {
        id: 768,
        name: 'special_bonus_unique_warlock_8',
        name_loc: '+{s:bonus_duration} Shadow Word Duration',
        desc_loc: '',
        lore_loc: '',
        notes_loc: [],
        shard_loc: '',
        scepter_loc: '',
        type: 2,
        behavior: '2',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 0,
        dispellable: 0,
        max_level: 4,
        cast_ranges: [
          0
        ],
        cast_points: [
          0,
          0,
          0,
          0
        ],
        channel_times: [
          0,
          0,
          0,
          0
        ],
        cooldowns: [
          0,
          0,
          0,
          0
        ],
        durations: [
          0,
          0,
          0,
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0,
          0,
          0,
          0
        ],
        gold_costs: [],
        special_values: [],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0
      },
      {
        id: 845,
        name: 'special_bonus_unique_warlock_10',
        name_loc: '+{s:value} Upheaval Attack Speed per second on Allies',
        desc_loc: 'Maximum of +70 Attack Speed',
        lore_loc: '',
        notes_loc: [],
        shard_loc: '',
        scepter_loc: '',
        type: 2,
        behavior: '2',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 0,
        dispellable: 0,
        max_level: 4,
        cast_ranges: [
          0
        ],
        cast_points: [
          0,
          0,
          0,
          0
        ],
        channel_times: [
          0,
          0,
          0,
          0
        ],
        cooldowns: [
          0,
          0,
          0,
          0
        ],
        durations: [
          0,
          0,
          0,
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0,
          0,
          0,
          0
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'value',
            values_float: [
              10
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0
      },
      {
        id: 6412,
        name: 'special_bonus_unique_warlock_3',
        name_loc: '-{s:value}s Shadow Word Cooldown',
        desc_loc: '',
        lore_loc: '',
        notes_loc: [],
        shard_loc: '',
        scepter_loc: '',
        type: 2,
        behavior: '2',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 0,
        dispellable: 0,
        max_level: 4,
        cast_ranges: [
          0
        ],
        cast_points: [
          0,
          0,
          0,
          0
        ],
        channel_times: [
          0,
          0,
          0,
          0
        ],
        cooldowns: [
          0,
          0,
          0,
          0
        ],
        durations: [
          0,
          0,
          0,
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0,
          0,
          0,
          0
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'value',
            values_float: [
              4
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0
      },
      {
        id: 6505,
        name: 'special_bonus_unique_warlock_4',
        name_loc: 'Summons a Golem on death',
        desc_loc: '',
        lore_loc: '',
        notes_loc: [],
        shard_loc: '',
        scepter_loc: '',
        type: 2,
        behavior: '2',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 0,
        dispellable: 0,
        max_level: 4,
        cast_ranges: [
          0
        ],
        cast_points: [
          0,
          0,
          0,
          0
        ],
        channel_times: [
          0,
          0,
          0,
          0
        ],
        cooldowns: [
          0,
          0,
          0,
          0
        ],
        durations: [
          0,
          0,
          0,
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0,
          0,
          0,
          0
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'value',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0
      },
      {
        id: 764,
        name: 'special_bonus_unique_warlock_7',
        name_loc: '+{s:value} Shadow Word Damage/Heal',
        desc_loc: '',
        lore_loc: '',
        notes_loc: [],
        shard_loc: '',
        scepter_loc: '',
        type: 2,
        behavior: '2',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 0,
        dispellable: 0,
        max_level: 4,
        cast_ranges: [
          0
        ],
        cast_points: [
          0,
          0,
          0,
          0
        ],
        channel_times: [
          0,
          0,
          0,
          0
        ],
        cooldowns: [
          0,
          0,
          0,
          0
        ],
        durations: [
          0,
          0,
          0,
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0,
          0,
          0,
          0
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'value',
            values_float: [
              25
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0
      },
      {
        id: 6054,
        name: 'special_bonus_unique_warlock_2',
        name_loc: '+{s:value} Chaotic Offering Golems Armor',
        desc_loc: '',
        lore_loc: '',
        notes_loc: [],
        shard_loc: '',
        scepter_loc: '',
        type: 2,
        behavior: '2',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 0,
        dispellable: 0,
        max_level: 4,
        cast_ranges: [
          0
        ],
        cast_points: [
          0,
          0,
          0,
          0
        ],
        channel_times: [
          0,
          0,
          0,
          0
        ],
        cooldowns: [
          0,
          0,
          0,
          0
        ],
        durations: [
          0,
          0,
          0,
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0,
          0,
          0,
          0
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'value',
            values_float: [
              20
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0
      },
      {
        id: 6053,
        name: 'special_bonus_unique_warlock_1',
        name_loc: '80% Magic Resistance for Chaotic Offering Golems',
        desc_loc: '',
        lore_loc: '',
        notes_loc: [],
        shard_loc: '',
        scepter_loc: '',
        type: 2,
        behavior: '2',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 0,
        dispellable: 0,
        max_level: 4,
        cast_ranges: [
          0
        ],
        cast_points: [
          0,
          0,
          0,
          0
        ],
        channel_times: [
          0,
          0,
          0,
          0
        ],
        cooldowns: [
          0,
          0,
          0,
          0
        ],
        durations: [
          0,
          0,
          0,
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0,
          0,
          0,
          0
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'value',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0
      }
    ],
    thumb_video: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/warlock.webm',
    thumb_image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/warlock.png',
    attribute_img: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png',
    roles: {
      Carry: 0,
      Support: 1,
      Nuker: 0,
      Disabler: 1,
      Jungler: 0,
      Durable: 0,
      Escape: 0,
      Pusher: 0,
      Initiator: 2
    }
  },
  {

    id: 76,
    name: 'npc_dota_hero_obsidian_destroyer',
    order_id: 69,
    name_loc: 'Outworld Destroyer el osidian',
    bio_loc: "One of a lordly and magisterial race, Harbinger prowls the edge of the Void, sole surviving sentry of an outpost on the world at the rim of the abyss. From this jagged crystalline Outworld, forever on guard, he has gazed for eternities into the heavens, alert for any stirring in the bottomless night beyond the stars. Imprinted deep in the shining lattices of his intellect lies a resonant pattern akin to prophecy, a dark music implying that eventually some evil will wake out there, beyond the edges of creation, and turn its attention to our world. With his whole being focused on his vigil, Outworld Destroyer paid little attention to events closer in to the sun. But at last the clamor of the Ancients, and a sense of growing threat from within as well as without, sent him winging sunward to visit the plains of war. Harbinger's place in our own prophecies is unambiguous: he must be considered an omen of worse things to come. But his arrival in itself is bad enough. ",
    hype_loc: 'Stealing from the minds of those he imprisons, Outworld Destroyer turns raw intelligence into destructive power. <b>Weakening enemies</b> with a barrage of arcane energy, he shatters their sanity with his ultimate blast, often <b>erasing mana</b> from those that survive.',
    npe_desc_loc: 'Can imprison a hero, making them invulnerable',
    str_base: 21,
    str_gain: 2.9,
    agi_base: 22,
    agi_gain: 1.6,
    int_base: 30,
    int_gain: 4.2,
    primary_attr: 2,
    complexity: 2,
    attack_capability: 2,
    role_levels: [
      2,
      0,
      2,
      1,
      0,
      0,
      0,
      0,
      0
    ],
    damage_min: 49,
    damage_max: 61,
    attack_rate: 1.9,
    attack_range: 450,
    projectile_speed: 900,
    armor: 5.666667,
    magic_resistance: 25,
    movement_speed: 320,
    turn_rate: 0.6,
    sight_range_day: 1800,
    sight_range_night: 800,
    max_health: 620,
    health_regen: 3.1000001,
    max_mana: 435,
    mana_regen: 1.5,
    abilities: [
      {
        id: 5391,
        name: 'obsidian_destroyer_arcane_orb',
        name_loc: 'Arcane Orb',
        desc_loc: "Adds extra pure damage to Outworld Destroyer's attacks, based on his remaining mana pool.",
        lore_loc: "Harbinger's outworldly knowledge allows it to tap into the ebb and flow of all spiritual energy, infusing it into his being.",
        notes_loc: [
          'The damage is calculated after the mana cost is spent.'
        ],
        shard_loc: '',
        scepter_loc: '',
        type: 0,
        behavior: '135176',
        target_team: 2,
        target_type: 19,
        flags: 0,
        damage: 4,
        immunity: 4,
        dispellable: 0,
        max_level: 4,
        cast_ranges: [
          450
        ],
        cast_points: [
          0
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          6,
          4,
          2,
          0
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'mana_pool_damage_pct',
            values_float: [
              13,
              14,
              15,
              16
            ],
            is_percentage: true,
            heading_loc: 'MANA POOL TO DAMAGE:',
            bonuses: [
              {
                name: 'special_bonus_unique_outworld_devourer',
                value: 2,
                operation: 0
              }
            ]
          },
          {
            name: 'mana_cost_percentage',
            values_float: [
              20
            ],
            is_percentage: true,
            heading_loc: 'CURRENT MANA COST:',
            bonuses: []
          },
          {
            name: 'bounce_radius',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastRange',
            values_float: [
              450
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              6,
              4,
              2,
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0,
        thumb_image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/obsidian_destroyer_arcane_orb.png',
        video_webm: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/obsidian_destroyer_arcane_orb.webm',
        video_mp4: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/obsidian_destroyer_arcane_orb.mp4'
      },
      {
        id: 5392,
        name: 'obsidian_destroyer_astral_imprisonment',
        name_loc: 'Astral Imprisonment',
        desc_loc: 'Places a target unit into an astral prison. The hidden unit is invulnerable and disabled. When the astral prison implodes, it deals damage to the target and steals a percentage of their max mana.',
        lore_loc: 'Locked away in the pocket between this world and the Outworld, victims realize their infantile knowledge and mortality.',
        notes_loc: [
          "Imprisoned units can still be hit by Sanity's Eclipse.",
          "Max mana steal does not increase Outworld Destroyer's current mana values or directly reduce the victim's mana values."
        ],
        shard_loc: "Grants additional Mana Capacity steal to Astral Imprisonment. Also allows allies to move at %allied_movement_speed_pct%%% movement speed during Astral Imprisonment (they are visible, but untargettable and can't perform any other actions).",
        scepter_loc: 'Grants charges to Astral Imprisonment, increases damage and applies the damage in a %damage_radius% radius.',
        type: 0,
        behavior: '33554472',
        target_team: 3,
        target_type: 19,
        flags: 32,
        damage: 2,
        immunity: 4,
        dispellable: 3,
        max_level: 4,
        cast_ranges: [
          650
        ],
        cast_points: [
          0.3
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          18,
          16,
          14,
          12
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          150
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'prison_duration',
            values_float: [
              1.75,
              2.5,
              3.25,
              4
            ],
            is_percentage: false,
            heading_loc: 'DURATION:',
            bonuses: []
          },
          {
            name: 'damage',
            values_float: [
              120,
              200,
              280,
              360
            ],
            is_percentage: false,
            heading_loc: 'DAMAGE:',
            bonuses: []
          },
          {
            name: 'mana_capacity_steal',
            values_float: [
              16,
              18,
              20,
              22
            ],
            is_percentage: true,
            heading_loc: 'MANA CAPACITY STEAL:',
            bonuses: []
          },
          {
            name: 'mana_capacity_duration',
            values_float: [
              30,
              40,
              50,
              60
            ],
            is_percentage: false,
            heading_loc: 'MANA STEAL DURATION:',
            bonuses: []
          },
          {
            name: 'allied_movement_speed_pct',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'damage_radius',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastRange',
            values_float: [
              650
            ],
            is_percentage: false,
            heading_loc: 'CAST RANGE:',
            bonuses: [
              {
                name: 'special_bonus_unique_outworld_devourer_astral_castrange',
                value: 100,
                operation: 0
              }
            ]
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0.3
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              150
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              18,
              16,
              14,
              12
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: true,
        ability_has_shard: true,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0,
        thumb_image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/obsidian_destroyer_astral_imprisonment.png',
        video_webm: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/obsidian_destroyer_astral_imprisonment.webm',
        video_mp4: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/obsidian_destroyer_astral_imprisonment.mp4'
      },
      {
        id: 5684,
        name: 'obsidian_destroyer_equilibrium',
        name_loc: 'Essence Flux',
        desc_loc: 'Passively grants you a chance to restore a percentage of your max mana each time you cast an ability.',
        lore_loc: "The Outworld is awash in arcane energy, inclined to diffuse through any of Harbinger's rifts.",
        notes_loc: [],
        shard_loc: 'Casting Astral Imprisonment on an ally will trigger Essence Aura on them and grant then %shard_bonus_mana% max mana for %shard_mana_duration% seconds.',
        scepter_loc: '',
        type: 0,
        behavior: '2',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 0,
        dispellable: 0,
        max_level: 4,
        cast_ranges: [
          0
        ],
        cast_points: [
          0.75
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          0
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'proc_chance',
            values_float: [
              30
            ],
            is_percentage: true,
            heading_loc: 'CHANCE:',
            bonuses: []
          },
          {
            name: 'mana_restore',
            values_float: [
              25,
              35,
              45,
              55
            ],
            is_percentage: true,
            heading_loc: 'MAX MANA RESTORE:',
            bonuses: []
          },
          {
            name: 'mana_capacity_steal',
            values_float: [
              5
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'mana_capacity_duration',
            values_float: [
              30,
              40,
              50,
              60
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'shard_bonus_mana',
            values_float: [
              300
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'shard_mana_duration',
            values_float: [
              10
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastRange',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0.75
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0,
        thumb_image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/obsidian_destroyer_equilibrium.png',
        video_webm: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/obsidian_destroyer_equilibrium.webm',
        video_mp4: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/obsidian_destroyer_equilibrium.mp4'
      },
      {
        id: 5394,
        name: 'obsidian_destroyer_sanity_eclipse',
        name_loc: "Sanity's Eclipse",
        desc_loc: "Unleashes a psychic blast that deals damage to enemies based on the difference between your mana and the target's mana. Sanity's Eclipse can hit units trapped by Astral Imprisonment. Deals bonus damage to illusions.",
        lore_loc: 'When an Outworld crystal ruptures, cataclysmic energies are released, and the reverberations of this power are felt interdimensionally.',
        notes_loc: [
          'Does not damage creeps or neutral units.'
        ],
        shard_loc: '',
        scepter_loc: '',
        type: 1,
        behavior: '48',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 2,
        immunity: 4,
        dispellable: 0,
        max_level: 3,
        cast_ranges: [
          700
        ],
        cast_points: [
          0.25,
          0.25,
          0.25
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          160,
          145,
          130
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          200,
          325,
          450
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'base_damage',
            values_float: [
              200,
              300,
              400
            ],
            is_percentage: false,
            heading_loc: 'BASE DAMAGE:',
            bonuses: []
          },
          {
            name: 'radius',
            values_float: [
              400,
              500,
              600
            ],
            is_percentage: false,
            heading_loc: 'RADIUS:',
            bonuses: []
          },
          {
            name: 'cast_range',
            values_float: [
              700
            ],
            is_percentage: false,
            heading_loc: 'CAST RANGE:',
            bonuses: []
          },
          {
            name: 'damage_multiplier',
            values_float: [
              0.4
            ],
            is_percentage: false,
            heading_loc: 'MANA DIFFERENCE MULTIPLIER:',
            bonuses: []
          },
          {
            name: 'illusion_bonus_damage',
            values_float: [
              200
            ],
            is_percentage: true,
            heading_loc: 'ILLUSION DAMAGE:',
            bonuses: []
          },
          {
            name: 'AbilityCastRange',
            values_float: [
              700
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0.25
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              200,
              325,
              450
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              160,
              145,
              130
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0,
        thumb_image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/obsidian_destroyer_sanity_eclipse.png',
        video_webm: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/obsidian_destroyer_sanity_eclipse.webm',
        video_mp4: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/obsidian_destroyer_sanity_eclipse.mp4'
      }
    ],
    // eslint-disable-next-line quote-props
    'talents': [
      {
        id: 5959,
        name: 'special_bonus_hp_200',
        name_loc: '+{s:value} Health',
        desc_loc: '',
        lore_loc: '',
        notes_loc: [],
        shard_loc: '',
        scepter_loc: '',
        type: 2,
        behavior: '2',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 0,
        dispellable: 0,
        max_level: 4,
        cast_ranges: [
          0
        ],
        cast_points: [
          0
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          0
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'value',
            values_float: [
              200
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastRange',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0
      },
      {
        id: 5906,
        name: 'special_bonus_attack_speed_20',
        name_loc: '+{s:value} Attack Speed',
        desc_loc: '',
        lore_loc: '',
        notes_loc: [],
        shard_loc: '',
        scepter_loc: '',
        type: 2,
        behavior: '2',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 0,
        dispellable: 0,
        max_level: 4,
        cast_ranges: [
          0
        ],
        cast_points: [
          0
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          0
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'value',
            values_float: [
              20
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastRange',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0
      },
      {
        id: 957,
        name: 'special_bonus_unique_outworld_devourer_astral_castrange',
        name_loc: '+{s:bonus_AbilityCastRange} Astral Imprisonment Cast Range',
        desc_loc: '',
        lore_loc: '',
        notes_loc: [],
        shard_loc: '',
        scepter_loc: '',
        type: 2,
        behavior: '2',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 0,
        dispellable: 0,
        max_level: 4,
        cast_ranges: [
          0
        ],
        cast_points: [
          0
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          0
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'AbilityCastRange',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0
      },
      {
        id: 6141,
        name: 'special_bonus_movement_speed_30',
        name_loc: '+{s:value} Movement Speed',
        desc_loc: '',
        lore_loc: '',
        notes_loc: [],
        shard_loc: '',
        scepter_loc: '',
        type: 2,
        behavior: '2',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 0,
        dispellable: 0,
        max_level: 4,
        cast_ranges: [
          0
        ],
        cast_points: [
          0
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          0
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'value',
            values_float: [
              30
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastRange',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0
      },
      {
        id: 6080,
        name: 'special_bonus_strength_20',
        name_loc: '+{s:value} Strength',
        desc_loc: '',
        lore_loc: '',
        notes_loc: [],
        shard_loc: '',
        scepter_loc: '',
        type: 2,
        behavior: '2',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 0,
        dispellable: 0,
        max_level: 4,
        cast_ranges: [
          0
        ],
        cast_points: [
          0
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          0
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'value',
            values_float: [
              20
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastRange',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0
      },
      {
        id: 7375,
        name: 'special_bonus_unique_outworld_devourer_4',
        name_loc: "+{s:value} Sanity's Eclipse Mana Difference Multiplier",
        desc_loc: '',
        lore_loc: '',
        notes_loc: [],
        shard_loc: '',
        scepter_loc: '',
        type: 2,
        behavior: '2',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 0,
        dispellable: 0,
        max_level: 4,
        cast_ranges: [
          0
        ],
        cast_points: [
          0
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          0
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'value',
            values_float: [
              0.15
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastRange',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0
      },
      {
        id: 6241,
        name: 'special_bonus_unique_outworld_devourer',
        name_loc: '+{s:bonus_mana_pool_damage_pct}% Arcane Orb Damage',
        desc_loc: '',
        lore_loc: '',
        notes_loc: [],
        shard_loc: '',
        scepter_loc: '',
        type: 2,
        behavior: '2',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 0,
        dispellable: 0,
        max_level: 4,
        cast_ranges: [
          0
        ],
        cast_points: [
          0
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          0
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'AbilityCastRange',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0
      },
      {
        id: 750,
        name: 'special_bonus_unique_outworld_devourer_5',
        name_loc: "-{s:value}s Sanity's Eclipse Cooldown",
        desc_loc: '',
        lore_loc: '',
        notes_loc: [],
        shard_loc: '',
        scepter_loc: '',
        type: 2,
        behavior: '2',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 0,
        dispellable: 0,
        max_level: 4,
        cast_ranges: [
          0
        ],
        cast_points: [
          0
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          0
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'value',
            values_float: [
              60
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastRange',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0
      }
    ],
    thumb_video: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/outworld_destroyer.webm',
    thumb_image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/outworld_destroyer.png',
    attribute_img: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png',
    roles: {
      Carry: 2,
      Support: 0,
      Nuker: 2,
      Disabler: 1,
      Jungler: 0,
      Durable: 0,
      Escape: 0,
      Pusher: 0,
      Initiator: 0
    }

  },
  {
    id: 74,
    name: 'npc_dota_hero_invoker',
    order_id: 67,
    name_loc: 'Invoker',
    bio_loc: "In its earliest, and some would say most potent form, magic was primarily the art of memory. It required no technology, no wands or appurtenances other than the mind of the magician. All the trappings of ritual were merely mnemonic devices, meant to allow the practitioner to recall in rich detail the specific mental formulae that unlocked a spell's power.\r\n\t\t\t\t<br><br>The greatest mages in those days were the ones blessed with the greatest memories, and yet so complex were the invocations that all wizards were forced to specialize. The most devoted might hope in a lifetime to have adequate recollection of three spells--four at most. Ordinary wizards were content to know two, and it was not uncommon for a village mage to know only one--with even that requiring him to consult grimoires as an aid against forgetfulness on the rare occasions when he might be called to use it.\r\n\t\t\t\t<br><br>But among these early practitioners there was one exception, a genius of vast intellect and prodigious memory who came to be known as the Invoker. In his youth, the precocious wizard mastered not four, not five, not even seven incantations: He could command no fewer than ten spells, and cast them instantly. Many more he learned but found useless, and would practice once then purge from his mind forever, to make room for more practical invocations. One such spell was the Sempiternal Cantrap--a longevity spell of such power that those who cast it in the world's first days are among us still (unless they have been crushed to atoms).\r\n\t\t\t\t<br><br>Most of these quasi-immortals live quietly, afraid to admit their secret: But Invoker is not one to keep his gifts hidden. He is ancient, learned beyond all others, and his mind somehow still has space to contain an immense sense of his own worth...as well as the Invocations with which he amuses himself through the long slow twilight of the world's dying days.",
    hype_loc: "With an intricate arsenal of <b>spells</b> at his disposal, Invoker can adapt to any battle situation. Each configuration of his <b>three spell components</b> yields of one of ten spells, meaning he's never without a way to destroy or escape his enemies.",
    npe_desc_loc: 'Weaves magic with an array of spell combos',
    str_base: 18,
    str_gain: 2.4,
    agi_base: 14,
    agi_gain: 1.9,
    int_base: 15,
    int_gain: 4.6,
    primary_attr: 2,
    complexity: 3,
    attack_capability: 2,
    role_levels: [
      1,
      0,
      3,
      2,
      0,
      0,
      1,
      1,
      0
    ],
    damage_min: 44,
    damage_max: 50,
    attack_rate: 1.7,
    attack_range: 600,
    projectile_speed: 900,
    armor: 2.3333335,
    magic_resistance: 25,
    movement_speed: 285,
    turn_rate: 0.6,
    sight_range_day: 1800,
    sight_range_night: 800,
    max_health: 560,
    health_regen: 2.0500002,
    max_mana: 255,
    mana_regen: 0.75,
    abilities: [
      {
        id: 5370,
        name: 'invoker_quas',
        name_loc: 'Quas',
        desc_loc: "Allows manipulation of ice elements. Passively grants +2 Strength per level. Each <font color='#7998b5'>Quas</font> instance provides increased health regeneration.",
        lore_loc: '',
        notes_loc: [
          'Invoker can only have 3 of any instance.'
        ],
        shard_loc: 'Quas provides +10% Spell Lifesteal per instance.',
        scepter_loc: '',
        type: 0,
        behavior: '2052',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 0,
        dispellable: 3,
        max_level: 7,
        cast_ranges: [
          0
        ],
        cast_points: [
          0
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          0
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'health_regen_per_instance',
            values_float: [
              1,
              2,
              3,
              4,
              5,
              6,
              7
            ],
            is_percentage: false,
            heading_loc: 'HP REGEN PER INSTANCE:',
            bonuses: [
              {
                name: 'special_bonus_unique_invoker_13',
                value: 3,
                operation: 1
              }
            ]
          },
          {
            name: 'AbilityCastRange',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0,
        thumb_image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/invoker_quas.png',
        video_webm: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/invoker_quas.webm',
        video_mp4: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/invoker_quas.mp4'
      },
      {
        id: 5371,
        name: 'invoker_wex',
        name_loc: 'Wex',
        desc_loc: "Allows manipulation of storm elements. Passively grants +2 Agility per level. Each <font color='#d671a9'>Wex</font> instance provides increased attack speed and movement speed.",
        lore_loc: '',
        notes_loc: [
          'Invoker can only have 3 of any instance.'
        ],
        shard_loc: 'Wex provides +100 Cast Range per instance.',
        scepter_loc: '',
        type: 0,
        behavior: '2052',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 0,
        dispellable: 3,
        max_level: 7,
        cast_ranges: [
          0
        ],
        cast_points: [
          0
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          0
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'attack_speed_per_instance',
            values_float: [
              1,
              2,
              3,
              4,
              5,
              6,
              7
            ],
            is_percentage: false,
            heading_loc: 'ATTACK SPEED PER INSTANCE:',
            bonuses: [
              {
                name: 'special_bonus_unique_invoker_13',
                value: 3,
                operation: 1
              }
            ]
          },
          {
            name: 'move_speed_per_instance',
            values_float: [
              0.8,
              1.6,
              2.4,
              3.2,
              4,
              4.8,
              5.6
            ],
            is_percentage: true,
            heading_loc: 'MOVE SPEED PER INSTANCE:',
            bonuses: [
              {
                name: 'special_bonus_unique_invoker_13',
                value: 3,
                operation: 1
              }
            ]
          },
          {
            name: 'AbilityCastRange',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0,
        thumb_image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/invoker_wex.png',
        video_webm: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/invoker_wex.webm',
        video_mp4: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/invoker_wex.mp4'
      },
      {
        id: 5372,
        name: 'invoker_exort',
        name_loc: 'Exort',
        desc_loc: "Allows manipulation of fire elements. Passively grants +2 Intelligence per level. Each <font color='#cabe68'>Exort</font> instance provides increased attack damage.",
        lore_loc: '',
        notes_loc: [
          'Invoker can only have 3 of any instance.'
        ],
        shard_loc: 'Exort provides +5% Spell Amplification per instance.',
        scepter_loc: '',
        type: 0,
        behavior: '2052',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 0,
        dispellable: 3,
        max_level: 7,
        cast_ranges: [
          0
        ],
        cast_points: [
          0
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          0
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'bonus_damage_per_instance',
            values_float: [
              2,
              4,
              6,
              8,
              10,
              12,
              14
            ],
            is_percentage: false,
            heading_loc: 'DAMAGE PER INSTANCE:',
            bonuses: [
              {
                name: 'special_bonus_unique_invoker_13',
                value: 3,
                operation: 1
              }
            ]
          },
          {
            name: 'AbilityCastRange',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0,
        thumb_image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/invoker_exort.png',
        video_webm: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/invoker_exort.webm',
        video_mp4: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/invoker_exort.mp4'
      },
      {
        id: 5375,
        name: 'invoker_invoke',
        name_loc: 'Invoke',
        desc_loc: 'Combines the properties of the elements currently being manipulated to create a new spell for Invoker to use. Invoke cooldown is reduced by %cooldown_reduction_per_orb% seconds for each orb level. <br><br> Click the help button to see the list of possible spells.',
        lore_loc: 'So begins a new age of knowledge.',
        notes_loc: [
          'The arrangement of instances does not matter.',
          'Invoke will not cost mana or go on cooldown if the only effect is to swap the positions of existing spells.'
        ],
        shard_loc: '',
        scepter_loc: '',
        type: 1,
        behavior: '8589936644',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 0,
        dispellable: 0,
        max_level: 1,
        cast_ranges: [
          0
        ],
        cast_points: [
          0
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          7
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'max_invoked_spells',
            values_float: [
              2
            ],
            is_percentage: false,
            heading_loc: 'MAX SPELLS:',
            bonuses: []
          },
          {
            name: 'cooldown_reduction_per_orb',
            values_float: [
              0.3
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastRange',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              7
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0,
        thumb_image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/invoker_invoke.png',
        video_webm: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/invoker_invoke.webm',
        video_mp4: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/invoker_invoke.mp4'
      },
      {
        id: 5376,
        name: 'invoker_cold_snap',
        name_loc: 'Cold Snap',
        desc_loc: "Invoker draws the heat from an enemy, chilling them to their very core for a duration based on the level of <font color='#7998b5'>Quas</font>. The enemy will take damage and be briefly frozen. Further damage taken in this state will freeze the enemy again, dealing bonus damage. The enemy can only be frozen so often, but the freeze cooldown decreases based on the level of <font color='#7998b5'>Quas</font>.",
        lore_loc: "Sadron's Protracted Frisson.",
        notes_loc: [
          'The freeze stun only triggers on damage greater than %damage_trigger% after reductions.'
        ],
        shard_loc: '',
        scepter_loc: '',
        type: 0,
        behavior: '8724152393',
        target_team: 2,
        target_type: 19,
        flags: 0,
        damage: 2,
        immunity: 4,
        dispellable: 2,
        max_level: 1,
        cast_ranges: [
          1000
        ],
        cast_points: [
          0.05
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          20
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          100
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'duration',
            values_float: [
              3,
              3.5,
              4,
              4.5,
              5,
              5.5,
              6,
              6.5
            ],
            is_percentage: false,
            heading_loc: "COLD SNAP DURATION (<font color='#7998b5'>QUAS</font>):\n",
            bonuses: [
              {
                name: 'special_bonus_unique_invoker_7',
                value: 3,
                operation: 0
              }
            ]
          },
          {
            name: 'freeze_duration',
            values_float: [
              0.4
            ],
            is_percentage: false,
            heading_loc: 'FREEZE DURATION:',
            bonuses: []
          },
          {
            name: 'freeze_cooldown',
            values_float: [
              0.83,
              0.8,
              0.77,
              0.74,
              0.71,
              0.68,
              0.65,
              0.62
            ],
            is_percentage: false,
            heading_loc: "FREEZE COOLDOWN (<font color='#7998b5'>QUAS</font>):",
            bonuses: []
          },
          {
            name: 'freeze_damage',
            values_float: [
              8,
              16,
              24,
              32,
              40,
              48,
              56,
              64
            ],
            is_percentage: false,
            heading_loc: "FREEZE DAMAGE (<font color='#7998b5'>QUAS</font>):",
            bonuses: []
          },
          {
            name: 'damage_trigger',
            values_float: [
              10
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastRange',
            values_float: [
              1000
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0.05
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              100
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              20
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: [
              {
                name: 'special_bonus_unique_invoker_9',
                value: 8,
                operation: 2
              }
            ]
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0,
        thumb_image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/invoker_cold_snap.png',
        video_webm: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/invoker_cold_snap.webm',
        video_mp4: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/invoker_cold_snap.mp4'
      },
      {
        id: 5381,
        name: 'invoker_ghost_walk',
        name_loc: 'Ghost Walk',
        desc_loc: "Invoker manipulates the ice and electrical energies around him, rendering his body invisible. The elemental imbalance created as a consequence slows nearby enemies based on the level of <font color='#7998b5'>Quas</font>, and slows Invoker as well based on the level of <font color='#d671a9'>Wex</font>.",
        lore_loc: "Myrault's Hinder-Gast.",
        notes_loc: [
          'The slow effect does not work on Spell Immune enemies.'
        ],
        shard_loc: '',
        scepter_loc: '',
        type: 0,
        behavior: '8594131013',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 4,
        dispellable: 3,
        max_level: 1,
        cast_ranges: [
          0
        ],
        cast_points: [
          0.05
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          35
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          175
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'duration',
            values_float: [
              60
            ],
            is_percentage: false,
            heading_loc: 'DURATION:',
            bonuses: []
          },
          {
            name: 'area_of_effect',
            values_float: [
              450
            ],
            is_percentage: false,
            heading_loc: 'RADIUS:',
            bonuses: []
          },
          {
            name: 'enemy_slow',
            values_float: [
              -20,
              -25,
              -30,
              -35,
              -40,
              -45,
              -50,
              -55
            ],
            is_percentage: true,
            heading_loc: "ENEMY SLOW (<font color='#7998b5'>QUAS</font>):\n",
            bonuses: []
          },
          {
            name: 'self_slow',
            values_float: [
              -15,
              -10,
              -5,
              0,
              5,
              10,
              15,
              20
            ],
            is_percentage: true,
            heading_loc: "SELF SPEED (<font color='#d671a9'>WEX</font>):\n",
            bonuses: []
          },
          {
            name: 'aura_fade_time',
            values_float: [
              2
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastRange',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0.05
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              175
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              35
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0,
        thumb_image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/invoker_ghost_walk.png',
        video_webm: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/invoker_ghost_walk.webm',
        video_mp4: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/invoker_ghost_walk.mp4'
      },
      {
        id: 5382,
        name: 'invoker_tornado',
        name_loc: 'Tornado',
        desc_loc: "Unleashes a fast moving tornado that picks up enemy units in its path, suspending them helplessly in the air shortly before allowing them to plummet to their doom. Travels further based on the level of <font color='#d671a9'>Wex</font>. Holds enemies in the air for a duration based on the level of <font color='#7998b5'>Quas</font>. Deals base damage plus added damage based on levels in <font color='#d671a9'>Wex</font>.\n\nDISPEL TYPE: Basic Dispel",
        lore_loc: 'Claws of Tornarus.',
        notes_loc: [
          'Units are invulnerable while affected by Tornado, and the damage is dealt when landing.'
        ],
        shard_loc: '',
        scepter_loc: '',
        type: 0,
        behavior: '8724152401',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 2,
        immunity: 4,
        dispellable: 2,
        max_level: 1,
        cast_ranges: [
          2000
        ],
        cast_points: [
          0.05
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          30
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          150
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'travel_distance',
            values_float: [
              800,
              1200,
              1600,
              2000,
              2400,
              2800,
              3200,
              3600
            ],
            is_percentage: false,
            heading_loc: "TRAVEL DISTANCE (<font color='#d671a9'>WEX</font>):\n",
            bonuses: []
          },
          {
            name: 'travel_speed',
            values_float: [
              1000
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'area_of_effect',
            values_float: [
              200
            ],
            is_percentage: false,
            heading_loc: 'RADIUS:',
            bonuses: []
          },
          {
            name: 'vision_distance',
            values_float: [
              200
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'end_vision_duration',
            values_float: [
              1.75
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'lift_duration',
            values_float: [
              0.85,
              1.1,
              1.35,
              1.6,
              1.85,
              2.1,
              2.35,
              2.6
            ],
            is_percentage: false,
            heading_loc: "LIFT TIME (<font color='#7998b5'>QUAS</font>):\n",
            bonuses: [
              {
                name: 'special_bonus_unique_invoker_8',
                value: 1.25,
                operation: 0
              }
            ]
          },
          {
            name: 'base_damage',
            values_float: [
              70
            ],
            is_percentage: false,
            heading_loc: 'BASE DAMAGE:',
            bonuses: []
          },
          {
            name: 'quas_damage',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'wex_damage',
            values_float: [
              45,
              90,
              135,
              180,
              225,
              270,
              315,
              360
            ],
            is_percentage: false,
            heading_loc: "ADDED DAMAGE (<font color='#d671a9'>WEX</font>):",
            bonuses: []
          },
          {
            name: 'AbilityCastRange',
            values_float: [
              2000
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0.05
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              150
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              30
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: [
              {
                name: 'special_bonus_unique_invoker_3',
                value: 6,
                operation: 2
              }
            ]
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0,
        thumb_image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/invoker_tornado.png',
        video_webm: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/invoker_tornado.webm',
        video_mp4: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/invoker_tornado.mp4'
      },
      {
        id: 5383,
        name: 'invoker_emp',
        name_loc: 'E.M.P.',
        desc_loc: "Invoker builds up a charge of electromagnetic energy at a targeted location which automatically detonates after %delay% seconds. The detonation covers an area, draining mana based on the level of <font color='#d671a9'>Wex</font>. Deals damage for each point of mana drained.  If EMP drains mana from an enemy hero, Invoker gains 50% of the mana drained.",
        lore_loc: "Endoleon's Malevolent Perturbation.",
        notes_loc: [
          "Will not affect cycloned units (Tornado or Eul's Scepter of Divinity)."
        ],
        shard_loc: '',
        scepter_loc: '',
        type: 0,
        behavior: '8724152433',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 2,
        immunity: 4,
        dispellable: 0,
        max_level: 1,
        cast_ranges: [
          950
        ],
        cast_points: [
          0.05
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          30
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          125
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'delay',
            values_float: [
              2.9
            ],
            is_percentage: false,
            heading_loc: 'CHARGE TIME:',
            bonuses: []
          },
          {
            name: 'area_of_effect',
            values_float: [
              675
            ],
            is_percentage: false,
            heading_loc: 'RADIUS:',
            bonuses: []
          },
          {
            name: 'mana_burned',
            values_float: [
              100,
              175,
              250,
              325,
              400,
              475,
              550,
              625
            ],
            is_percentage: false,
            heading_loc: "MAX MANA BURNED (<font color='#d671a9'>WEX</font>):\n",
            bonuses: [
              {
                name: 'special_bonus_unique_invoker_10',
                value: 20,
                operation: 3
              }
            ]
          },
          {
            name: 'damage_per_mana_pct',
            values_float: [
              60
            ],
            is_percentage: true,
            heading_loc: 'BURN DAMAGE:',
            bonuses: []
          },
          {
            name: 'AbilityCastRange',
            values_float: [
              950
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0.05
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              125
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              30
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0,
        thumb_image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/invoker_emp.png',
        video_webm: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/invoker_emp.webm',
        video_mp4: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/invoker_emp.mp4'
      },
      {
        id: 5384,
        name: 'invoker_alacrity',
        name_loc: 'Alacrity',
        desc_loc: "Invoker infuses an ally with an immense surge of energy, increasing their attack speed based on the level of <font color='#d671a9'>Wex</font> and their damage based on the level of <font color='#cabe68'>Exort</font>.",
        lore_loc: "Gaster's Mandate of Impetuous Strife.",
        notes_loc: [],
        shard_loc: '',
        scepter_loc: '',
        type: 0,
        behavior: '8757706825',
        target_team: 1,
        target_type: 3,
        flags: 0,
        damage: 1,
        immunity: 1,
        dispellable: 2,
        max_level: 1,
        cast_ranges: [
          650
        ],
        cast_points: [
          0.05
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          17
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          100
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'bonus_attack_speed',
            values_float: [
              10,
              22,
              34,
              46,
              58,
              70,
              82,
              94
            ],
            is_percentage: false,
            heading_loc: "BONUS ATTACK SPEED (<font color='#d671a9'>WEX</font>):\n",
            bonuses: [
              {
                name: 'special_bonus_unique_invoker_5',
                value: 30,
                operation: 0
              }
            ]
          },
          {
            name: 'bonus_damage',
            values_float: [
              10,
              22,
              34,
              46,
              58,
              70,
              82,
              94
            ],
            is_percentage: false,
            heading_loc: "BONUS DAMAGE (<font color='#cabe68'>EXORT</font>):\n",
            bonuses: [
              {
                name: 'special_bonus_unique_invoker_5',
                value: 30,
                operation: 0
              }
            ]
          },
          {
            name: 'duration',
            values_float: [
              9
            ],
            is_percentage: false,
            heading_loc: 'DURATION:',
            bonuses: []
          },
          {
            name: 'AbilityCastRange',
            values_float: [
              650
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0.05
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              100
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              17
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0,
        thumb_image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/invoker_alacrity.png',
        video_webm: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/invoker_alacrity.webm',
        video_mp4: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/invoker_alacrity.mp4'
      },
      {
        id: 5385,
        name: 'invoker_chaos_meteor',
        name_loc: 'Chaos Meteor',
        desc_loc: "Invoker pulls a flaming meteor from space onto the targeted location. Upon landing, the meteor rolls forward, constantly dealing damage based on the level of <font color='#cabe68'>Exort</font>, and rolling further based on the level of <font color='#d671a9'>Wex</font>. Units hit by the meteor will also be set on fire for a short time, receiving additional damage based on the level of <font color='#cabe68'>Exort</font>.",
        lore_loc: "Tarak's Descent of Fire.",
        notes_loc: [
          'Deals main damage to enemy units under meteor every %damage_interval% seconds and burns enemies for smaller damage over %burn_duration% seconds.',
          'The meteor moves at a speed of %travel_speed%.'
        ],
        shard_loc: 'Causes %bonus_meteor_count% extra Chaos Meteors to land alongside the primary cast at slight angles. Reduces cooldown by %bonus_AbilityCooldown% seconds.',
        scepter_loc: '',
        type: 0,
        behavior: '8724152401',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 2,
        immunity: 4,
        dispellable: 2,
        max_level: 1,
        cast_ranges: [
          700
        ],
        cast_points: [
          0.05
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          55
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          200
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'land_time',
            values_float: [
              1.3
            ],
            is_percentage: false,
            heading_loc: 'IMPACT DELAY:',
            bonuses: []
          },
          {
            name: 'area_of_effect',
            values_float: [
              275
            ],
            is_percentage: false,
            heading_loc: 'RADIUS:',
            bonuses: []
          },
          {
            name: 'travel_distance',
            values_float: [
              465,
              615,
              780,
              930,
              1095,
              1245,
              1410,
              1575
            ],
            is_percentage: false,
            heading_loc: "TRAVEL DISTANCE (<font color='#d671a9'>WEX</font>):\n",
            bonuses: []
          },
          {
            name: 'travel_speed',
            values_float: [
              300
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'damage_interval',
            values_float: [
              0.5
            ],
            is_percentage: false,
            heading_loc: 'CONTACT DAMAGE TICK:',
            bonuses: []
          },
          {
            name: 'vision_distance',
            values_float: [
              500
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'end_vision_duration',
            values_float: [
              3
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'main_damage',
            values_float: [
              52,
              71,
              90,
              109,
              128,
              147,
              166,
              185
            ],
            is_percentage: false,
            heading_loc: "CONTACT DAMAGE (<font color='#cabe68'>EXORT</font>):\n",
            bonuses: [
              {
                name: 'special_bonus_unique_invoker_6',
                value: 80,
                operation: 3
              }
            ]
          },
          {
            name: 'burn_duration',
            values_float: [
              3
            ],
            is_percentage: false,
            heading_loc: 'BURN DURATION:',
            bonuses: []
          },
          {
            name: 'burn_dps',
            values_float: [
              10,
              14,
              18,
              22,
              26,
              30,
              34,
              38
            ],
            is_percentage: false,
            heading_loc: "BURN DAMAGE PER SECOND (<font color='#cabe68'>EXORT</font>):\n",
            bonuses: [
              {
                name: 'special_bonus_unique_invoker_6',
                value: 80,
                operation: 3
              }
            ]
          },
          {
            name: 'meteor_count',
            values_float: [
              1
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastRange',
            values_float: [
              700
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0.05
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              200
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              55
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: true,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0,
        thumb_image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/invoker_chaos_meteor.png',
        video_webm: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/invoker_chaos_meteor.webm',
        video_mp4: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/invoker_chaos_meteor.mp4'
      },
      {
        id: 5386,
        name: 'invoker_sun_strike',
        name_loc: 'Sun Strike',
        desc_loc: "Sends a catastrophic ray of fierce energy from the sun at any targeted location, incinerating all enemies standing beneath it once it reaches the earth. Deals damage based on the level of <font color='#cabe68'>Exort</font>, however this damage is spread evenly over all enemies hit.",
        lore_loc: "Harlek's Incantation of Incineration.",
        notes_loc: [
          'Gives vision of the target area before the strike.',
          'Invoker gains experience with kills made from Sun Strike, even if made from outside of experience range.'
        ],
        shard_loc: '',
        scepter_loc: 'Creates a Cataclysm when Sun Strike is double tapped. Puts it on a %cataclysm_cooldown% second cooldown. Creates %cataclysm_count% visible Sun Strikes within %cataclysm_min_range%-%cataclysm_max_range% range of each enemy hero. Additionally Increases the level of Quas, Wex and Exort by 1.',
        type: 0,
        behavior: '8724152433',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 4,
        immunity: 3,
        dispellable: 0,
        max_level: 1,
        cast_ranges: [
          0
        ],
        cast_points: [
          0.05
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          25
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          175
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'delay',
            values_float: [
              1.7
            ],
            is_percentage: false,
            heading_loc: 'DELAY:',
            bonuses: []
          },
          {
            name: 'area_of_effect',
            values_float: [
              175
            ],
            is_percentage: false,
            heading_loc: 'RADIUS:',
            bonuses: []
          },
          {
            name: 'damage',
            values_float: [
              120,
              180,
              240,
              300,
              360,
              420,
              480,
              540
            ],
            is_percentage: false,
            heading_loc: "DAMAGE (<font color='#cabe68'>EXORT</font>):\n",
            bonuses: []
          },
          {
            name: 'vision_distance',
            values_float: [
              400
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'vision_duration',
            values_float: [
              4
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'cataclysm_count',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'cataclysm_cooldown',
            values_float: [
              100
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'cataclysm_min_range',
            values_float: [
              160
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'cataclysm_max_range',
            values_float: [
              200
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastRange',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0.05
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              175
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              25
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: true,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0,
        thumb_image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/invoker_sun_strike.png',
        video_webm: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/invoker_sun_strike.webm',
        video_mp4: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/invoker_sun_strike.mp4'
      },
      {
        id: 5387,
        name: 'invoker_forge_spirit',
        name_loc: 'Forge Spirit',
        desc_loc: "Invoker forges a spirit embodying the strength of fire and fortitude of ice. Damage and armor are based on the level of <font color='#cabe68'>Exort</font> while attack range, health, and duration are based on the level of <font color='#7998b5'>Quas</font>. The elemental's scorching attack is capable of melting the armor of enemy heroes. Spawns two spirits when Quas and Exort are at least level 4.",
        lore_loc: "Culween's Most Cunning Fabrications.",
        notes_loc: [
          'Casting this ability will replace currently summoned Forged Spirits.'
        ],
        shard_loc: '',
        scepter_loc: '',
        type: 0,
        behavior: '8724152389',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 4,
        dispellable: 0,
        max_level: 1,
        cast_ranges: [
          0
        ],
        cast_points: [
          0.05
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          30
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          75
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'spirit_damage',
            values_float: [
              22,
              32,
              42,
              52,
              62,
              72,
              82,
              92
            ],
            is_percentage: false,
            heading_loc: "DAMAGE (<font color='#cabe68'>EXORT</font>):\n",
            bonuses: []
          },
          {
            name: 'spirit_mana',
            values_float: [
              100,
              150,
              200,
              250,
              300,
              350,
              400,
              450
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'spirit_armor',
            values_float: [
              0,
              1,
              2,
              3,
              4,
              5,
              6,
              7
            ],
            is_percentage: false,
            heading_loc: "ARMOR (<font color='#cabe68'>EXORT</font>):\n",
            bonuses: []
          },
          {
            name: 'spirit_attack_range',
            values_float: [
              300,
              365,
              430,
              495,
              560,
              625,
              690,
              755
            ],
            is_percentage: false,
            heading_loc: "ATTACK RANGE (<font color='#7998b5'>QUAS</font>):\n",
            bonuses: []
          },
          {
            name: 'spirit_hp',
            values_float: [
              300,
              400,
              500,
              600,
              700,
              800,
              900,
              1000
            ],
            is_percentage: false,
            heading_loc: "HEALTH (<font color='#7998b5'>QUAS</font>):\n",
            bonuses: []
          },
          {
            name: 'spirit_duration',
            values_float: [
              20,
              30,
              40,
              50,
              60,
              70,
              80,
              90
            ],
            is_percentage: false,
            heading_loc: "DURATION (<font color='#7998b5'>QUAS</font>):\n",
            bonuses: []
          },
          {
            name: 'armor_per_attack',
            values_float: [
              0.8,
              0.9,
              1,
              1.1,
              1.2,
              1.3,
              1.4,
              1.5
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'spirit_count',
            values_float: [
              1
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: [
              {
                name: 'special_bonus_unique_invoker_1',
                value: 4,
                operation: 0
              }
            ]
          },
          {
            name: 'extra_spirit_count_quas',
            values_float: [
              0,
              0,
              0,
              1,
              1,
              1,
              1,
              1
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'extra_spirit_count_exort',
            values_float: [
              0,
              0,
              0,
              1,
              1,
              1,
              1,
              1
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastRange',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0.05
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              75
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              30
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0,
        thumb_image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/invoker_forge_spirit.png',
        video_webm: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/invoker_forge_spirit.webm',
        video_mp4: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/invoker_forge_spirit.mp4'
      },
      {
        id: 5389,
        name: 'invoker_ice_wall',
        name_loc: 'Ice Wall',
        desc_loc: "Generates a wall of solid ice directly in front of Invoker for a duration based on the level of <font color='#7998b5'>Quas</font>. The bitter cold emanating from it greatly slows nearby enemies based on the level of <font color='#7998b5'>Quas</font> and deals damage each second based on the level of <font color='#cabe68'>Exort</font>.",
        lore_loc: 'Killing Wall of Koryx.',
        notes_loc: [
          'The slow will still affect Spell Immune enemies if their spell immunity was created after being affected by Ice Wall.'
        ],
        shard_loc: 'Allows Ice Wall to be a Vector Target ability with 1100 cast range. Increases wall length by 320.',
        scepter_loc: '',
        type: 0,
        behavior: '8724152389',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 2,
        immunity: 4,
        dispellable: 3,
        max_level: 1,
        cast_ranges: [
          0
        ],
        cast_points: [
          0.05
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          25
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          125
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'duration',
            values_float: [
              3,
              4.5,
              6,
              7.5,
              9,
              10.5,
              12,
              13.5
            ],
            is_percentage: false,
            heading_loc: "WALL DURATION (<font color='#7998b5'>QUAS</font>):\n",
            bonuses: []
          },
          {
            name: 'slow',
            values_float: [
              -20,
              -40,
              -60,
              -80,
              -100,
              -120,
              -140,
              -160
            ],
            is_percentage: true,
            heading_loc: "MOVEMENT SLOW (<font color='#7998b5'>QUAS</font>):\n",
            bonuses: []
          },
          {
            name: 'slow_duration',
            values_float: [
              2
            ],
            is_percentage: false,
            heading_loc: 'SLOW DURATION:',
            bonuses: []
          },
          {
            name: 'damage_per_second',
            values_float: [
              6,
              12,
              18,
              24,
              30,
              36,
              42,
              48
            ],
            is_percentage: false,
            heading_loc: "DAMAGE PER SECOND (<font color='#cabe68'>EXORT</font>):\n",
            bonuses: []
          },
          {
            name: 'wall_place_distance',
            values_float: [
              200
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'num_wall_elements',
            values_float: [
              15
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'wall_element_spacing',
            values_float: [
              80
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'wall_element_radius',
            values_float: [
              105
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'vector_cast_range',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: [
              {
                name: 'special_bonus_unique_invoker_12',
                value: 1200,
                operation: 0
              }
            ]
          },
          {
            name: 'AbilityCastRange',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0.05
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              125
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              25
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0,
        thumb_image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/invoker_ice_wall.png',
        video_webm: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/invoker_ice_wall.webm',
        video_mp4: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/invoker_ice_wall.mp4'
      },
      {
        id: 5390,
        name: 'invoker_deafening_blast',
        name_loc: 'Deafening Blast',
        desc_loc: "Invoker unleashes a mighty sonic wave in front of him, dealing damage to any enemy unit it collides with based on the level of <font color='#cabe68'>Exort</font>. The sheer impact from the blast is enough to knock those enemy units back for a duration based on the level of <font color='#7998b5'>Quas</font>, then disarm their attacks for a duration based on the level of <font color='#d671a9'>Wex</font>.",
        lore_loc: "Buluphont's Aureal Incapacitator.",
        notes_loc: [],
        shard_loc: '',
        scepter_loc: '',
        type: 0,
        behavior: '8724152401',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 2,
        immunity: 4,
        dispellable: 3,
        max_level: 1,
        cast_ranges: [
          1000
        ],
        cast_points: [
          0.05
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          40
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          300
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'travel_distance',
            values_float: [
              1000
            ],
            is_percentage: false,
            heading_loc: 'TRAVEL DISTANCE:',
            bonuses: []
          },
          {
            name: 'travel_speed',
            values_float: [
              1100
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'radius_start',
            values_float: [
              175
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'radius_end',
            values_float: [
              225
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'end_vision_duration',
            values_float: [
              1.75
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'damage',
            values_float: [
              60,
              100,
              140,
              180,
              220,
              260,
              300,
              340
            ],
            is_percentage: false,
            heading_loc: "DAMAGE (<font color='#cabe68'>EXORT</font>):\n",
            bonuses: []
          },
          {
            name: 'knockback_duration',
            values_float: [
              0.2,
              0.4,
              0.6,
              0.8,
              1,
              1.2,
              1.4,
              1.6
            ],
            is_percentage: false,
            heading_loc: "KNOCKBACK DURATION (<font color='#7998b5'>QUAS</font>):\n",
            bonuses: []
          },
          {
            name: 'disarm_duration',
            values_float: [
              1.25,
              2,
              2.75,
              3.5,
              4.25,
              5,
              5.75,
              6.5
            ],
            is_percentage: false,
            heading_loc: "DISARM DURATION (<font color='#d671a9'>WEX</font>):\n",
            bonuses: []
          },
          {
            name: 'radial_count',
            values_float: [
              1
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: [
              {
                name: 'special_bonus_unique_invoker_2',
                value: 11,
                operation: 0
              }
            ]
          },
          {
            name: 'AbilityCastRange',
            values_float: [
              1000
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0.05
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              300
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              40
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0,
        thumb_image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/invoker_deafening_blast.png',
        video_webm: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/invoker_deafening_blast.webm',
        video_mp4: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/invoker_deafening_blast.mp4'
      }
    ],
    talents: [
      {
        id: 7390,
        name: 'special_bonus_unique_invoker_10',
        name_loc: '+{s:bonus_damage_per_mana_pct}% E.M.P. Mana Burnt',
        desc_loc: '',
        lore_loc: '',
        notes_loc: [],
        shard_loc: '',
        scepter_loc: '',
        type: 2,
        behavior: '2',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 0,
        dispellable: 0,
        max_level: 4,
        cast_ranges: [
          0
        ],
        cast_points: [
          0
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          0
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'AbilityCastRange',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0
      },
      {
        id: 6099,
        name: 'special_bonus_unique_invoker_3',
        name_loc: '-{s:bonus_AbilityCooldown}s Tornado Cooldown',
        desc_loc: '',
        lore_loc: '',
        notes_loc: [],
        shard_loc: '',
        scepter_loc: '',
        type: 2,
        behavior: '2',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 0,
        dispellable: 0,
        max_level: 4,
        cast_ranges: [
          0
        ],
        cast_points: [
          0
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          0
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'AbilityCastRange',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0
      },
      {
        id: 315,
        name: 'special_bonus_unique_invoker_11',
        name_loc: '+{s:bonus_spirit_attack_speed} Forged Spirit Attack Speed',
        desc_loc: '',
        lore_loc: '',
        notes_loc: [],
        shard_loc: '',
        scepter_loc: '',
        type: 2,
        behavior: '2',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 0,
        dispellable: 0,
        max_level: 4,
        cast_ranges: [
          0
        ],
        cast_points: [
          0
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          0
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'AbilityCastRange',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0
      },
      {
        id: 7148,
        name: 'special_bonus_unique_invoker_9',
        name_loc: '-{s:bonus_AbilityCooldown}s Cold Snap Cooldown',
        desc_loc: '',
        lore_loc: '',
        notes_loc: [],
        shard_loc: '',
        scepter_loc: '',
        type: 2,
        behavior: '2',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 0,
        dispellable: 0,
        max_level: 4,
        cast_ranges: [
          0
        ],
        cast_points: [
          0
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          0
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'AbilityCastRange',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0
      },
      {
        id: 6811,
        name: 'special_bonus_unique_invoker_6',
        name_loc: '+{s:bonus_main_damage}% Chaos Meteor Damage',
        desc_loc: '',
        lore_loc: '',
        notes_loc: [],
        shard_loc: '',
        scepter_loc: '',
        type: 2,
        behavior: '2',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 0,
        dispellable: 0,
        max_level: 4,
        cast_ranges: [
          0
        ],
        cast_points: [
          0
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          0
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'AbilityCastRange',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0
      },
      {
        id: 6657,
        name: 'special_bonus_unique_invoker_5',
        name_loc: '+{s:bonus_bonus_attack_speed} Alacrity Damage/Speed',
        desc_loc: '',
        lore_loc: '',
        notes_loc: [],
        shard_loc: '',
        scepter_loc: '',
        type: 2,
        behavior: '2',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 0,
        dispellable: 0,
        max_level: 4,
        cast_ranges: [
          0
        ],
        cast_points: [
          0
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          0
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'AbilityCastRange',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0
      },
      {
        id: 6098,
        name: 'special_bonus_unique_invoker_2',
        name_loc: 'Radial Deafening Blast',
        desc_loc: 'Releases {s:bonus_radial_count} additional Deafening Blasts around Invoker in a circular pattern.  An enemy can only be hit once per cast.',
        lore_loc: '',
        notes_loc: [],
        shard_loc: '',
        scepter_loc: '',
        type: 2,
        behavior: '2',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 0,
        dispellable: 0,
        max_level: 4,
        cast_ranges: [
          0
        ],
        cast_points: [
          0
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          0
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'AbilityCastRange',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0
      },
      {
        id: 724,
        name: 'special_bonus_unique_invoker_13',
        name_loc: '{s:bonus_bonus_damage_per_instance}x Quas/Wex/Exort passive effects',
        desc_loc: '',
        lore_loc: '',
        notes_loc: [],
        shard_loc: '',
        scepter_loc: '',
        type: 2,
        behavior: '2',
        target_team: 0,
        target_type: 0,
        flags: 0,
        damage: 0,
        immunity: 0,
        dispellable: 0,
        max_level: 4,
        cast_ranges: [
          0
        ],
        cast_points: [
          0
        ],
        channel_times: [
          0
        ],
        cooldowns: [
          0
        ],
        durations: [
          0
        ],
        damages: [
          0,
          0,
          0,
          0
        ],
        mana_costs: [
          0
        ],
        gold_costs: [],
        special_values: [
          {
            name: 'AbilityCastRange',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChannelTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityDuration',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCastPoint',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCharges',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityChargeRestoreTime',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityManaCost',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          },
          {
            name: 'AbilityCooldown',
            values_float: [
              0
            ],
            is_percentage: false,
            heading_loc: '',
            bonuses: []
          }
        ],
        is_item: false,
        ability_has_scepter: false,
        ability_has_shard: false,
        ability_is_granted_by_scepter: false,
        ability_is_granted_by_shard: false,
        item_cost: 0,
        item_initial_charges: 0,
        item_neutral_tier: 4294967295,
        item_stock_max: 0,
        item_stock_time: 0,
        item_quality: 0
      }
    ],
    thumb_video: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/invoker.webm',
    thumb_image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/invoker.png',
    attribute_img: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png',
    roles: {
      Carry: 1,
      Support: 0,
      Nuker: 3,
      Disabler: 2,
      Jungler: 0,
      Durable: 0,
      Escape: 1,
      Pusher: 1,
      Initiator: 0
    }
  }
]

module.exports = detailHeros
