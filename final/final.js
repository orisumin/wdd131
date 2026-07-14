const pokemons = [
    {
        img: 'img/Bombirdier.webp',
        name: "Bombirdier",
        type: ['flying','dark'],
        height: 1.5,
        weight: 42.9,
        abiliby: ['Big Pecks','Keen Eye']
    },
    {
        img: 'img/Bramblin.webp',
        name: "Bramblin",
        type: ['grass','ghost'],
        height: 0.6,
        weight: 0.6,
        abiliby: ['Wind Rider']
    },
    {
        img: 'img/Capsakid.webp',
        name: "Capsakid",
        type: ['grass'],
        height: 0.3,
        weight: 3.0,
        abiliby: ['Chlorophyll','Insomnia']
    },
    {
        img: 'img/Cetoddle.webp',
        name: "Cetoddle",
        type: ['ice'],
        height: 1.2,
        weight: 45.0,
        abiliby: ['Thick Fat','Snow Cloak']
    },
    {
        img: 'img/Charcadet.webp',
        name: "Charcadet",
        type: ['fire'],
        height: 0.6,
        weight: 10.5,
        abiliby: ['Flash Fire']
    },
    {
        img: 'img/Cyclizar.webp',
        name: "Cyclizar",
        type: ['dragon','normal'],
        height: 1.6,
        weight: 63.0,
        abiliby: ['Shed Skin']
    },
    {
        img: 'img/Dondozo.wepb',
        name: "Dondozo",
        type: ['water'],
        height: 12.0,
        weight: 220.0,
        abiliby: ['Unaware','Oblivious']
    },
    {
        img: 'img/Fidough.webp',
        name: "Fidough",
        type: ['fairy'],
        height: 0.3,
        weight: 10.9,
        abiliby: ['One Tempo']
    },
    {
        img: 'img/Finizen.webp',
        name: "Finizen",
        type: ['water'],
        height: 1.3,
        weight: 60.2,
        abiliby: ['Water Veil']
    },
    {
        img: 'img/Flamigo.webp',
        name: "Flamigo",
        type: ['flying','fighting'],
        height: 1.6,
        weight: 37.0,
        abiliby: ['Scrappy','Tangled Feet']
    },
    {
        img: 'img/Flittle.webp',
        name: "Flittle",
        type: ['psychic'],
        height: 0.2,
        weight: 1.5,
        abiliby: ['Anticipation Frisk']
    },
    {
        img: 'img/Frigibax.webp',
        name: "Frigibax",
        type: ['dragon','ice'],
        height: 0.5,
        weight: 17.0,
        abiliby: ['Thermal Exchange']
    },
    {
        img: 'img/Fuecoco.webp',
        name: "Fuecoco",
        type: ['fire'],
        height: 0.4,
        weight: 9.8,
        abiliby: ['Blaze']
    },
    {
        img: 'img/Glimmet.webp',
        name: "Glimmet",
        type: ['rock','poison'],
        height: 0.7,
        weight: 8.0,
        abiliby: ['Toxic Debris']
    },
    {
        img: 'img/Greavard.webp',
        name: "Greavard",
        type: ['ghost'],
        height: 0.6,
        weight: 35.0,
        abiliby: ['Pickup']
    },
    {
        img: 'img/Klawf.webp',
        name: "Klawf",
        type: ['rock'],
        height: 1.3,
        weight: 79.0,
        abiliby: ['Anger Shell','Shell Armor']
    },
    {
        img: 'img/Lechonk.webp',
        name: 'Lechonk',
        type: ['normal'],
        height: 0.5,
        weight: 10.2,
        abiliby: ['Aroma Veil','Gluttony']
    },
    {
        img: 'img/Maschiff.webp',
        name: "Maschiff",
        type: ['dark'],
        height: 0.5,
        weight: 16,
        abiliby: ['Intimidate','Run Away']
    },
    {
        img: 'img/Nacli.webp',
        name: "Nacli",
        type: ['rock'],
        height: 0.4,
        weight: 16.0,
        abiliby: ['Purifying Salt','Sturdy']
    },
    {
        img: 'img/Nymble.webp',
        name: "Nymble",
        type: ['bug'],
        height: 0.2,
        weight: 1.0,
        abiliby: ['Swarm']
    },
    {
        img: 'img/Orthworm.webp',
        name: "Orthworm",
        type: ['steel'],
        height: 2.5,
        weight: 310.0,
        abiliby: ['Earth Eater']
    },
    {
        img: 'img/Pawmi.webp',
        name: "Pawmi",
        type: ['electric'],
        height: 0.3,
        weight: 2.5,
        abiliby: ['Static','Natural Cure']
    },
    {
        img: 'img/Quaxly.webp',
        name: "Quaxly",
        type: ['water'],
        height: 0.5,
        weight: 6.1,
        abiliby: ['Torrent']
    },
    {
        img: 'img/Rellor.webp',
        name: "Rellor",
        type: ['bug'],
        height: 0.2,
        weight: 1.0,
        abiliby: ['Compund Eyes']
    },
    {
        img: 'img/Shroodle.webp',
        name: "Shroodle",
        type: ['poison','normal'],
        height: 0.2,
        weight: 0.7,
        abiliby: ['Unburden','Pickpocket']
    },
    {
        img: 'img/Smoliv.webp',
        name: "Smoliv",
        type: ['grass','normal'],
        height: 0.3,
        weight: 6.5,
        abiliby: ['Early Bird']
    },
    {
        img: 'img/Sprigatito.webp',
        name: "Sprigatito",
        type: ['grass'],
        height: 0.4,
        weight: 4.1,
        abiliby: ['Overgrow']
    },
    {
        img: 'img/Squawkabilly.webp',
        name: "Squawkabilly",
        type: ['normal','flying'],
        height: 0.6,
        weight: 2.4,
        abiliby: ['Intimidate','Hustle']
    },
    {
        img: 'img/Tadbulb.webp',
        name: "Tadbulb",
        type: ['electric'],
        height: 0.3,
        weight: 0.4,
        abiliby: ['Own Tempo','Static']
    },
    {
        img: 'img/Tandemaus.webp',
        name: "Tandemaus",
        type: ['normal'],
        height: 0.3,
        weight: 1.8,
        abiliby: ['Run Away','Pickup']
    },
    {
        img: 'img/Tarountula.webp',
        name: "Tarountula",
        type: ['bug'],
        height: 0.3,
        weight: 4.0,
        abiliby: ['Insonmnia']
    },
    {
        img: 'img/Tatsugiri.webp',
        name: "Tatsugiri",
        type: ['dragon','water'],
        height: 0.3,
        weight: 8.0,
        abiliby: ['Commander']
    },
    {
        img: 'img/Tinkaton.webp',
        name: "Tinkatink",
        type: ['fairy','steel'],
        height: 0.4,
        weight: 8.9,
        abiliby: ['Mold Breaker','Own Tempo']
    },
    {
        img: 'img/Toedscool.webp',
        name: "Toedscool",
        type: ['ground','grass'],
        height: 0.9,
        weight: 33.0,
        abiliby: ['Mycelium Might']
    },
    {
        img: 'img/Varoom.webp',
        name: "Varoom",
        type: ['steel', 'poison'],
        height: 1.0,
        weight: 35.0,
        abiliby: ['Overcoat']
    },
    {
        img: 'img/Veluza.webp',
        name: "Veluza",
        type: ['water','psychic'],
        height: 2.5,
        weight: 90,
        abiliby: ['Mold Breaker']
    },
    {
        img: 'img/Wattrel.webp',
        name: "Wattrel",
        type: ['electric','flying'],
        height: 0.4,
        weight: 3.6,
        abiliby: ['Wind Power','Volt Absorb']
    },
    {
        img: 'img/Wiglett.webp',
        name: "Wiglett",
        type: ['water'],
        height: 1.2,
        weight: 1.8,
        abiliby: ['Gooey','Rattled']
    }
];

