const pokemons = [
    {
        img: 'img/Bombirdier.webp',
        name: "Bombirdier",
        type: ['flying','dark'],
        category: "Item Drop Pokémon",
        height: 1.5,
        weight: 42.9,
        abiliby: ['Big Pecks','Keen Eye']
    },
    {
        img: 'img/Bramblin.webp',
        name: "Bramblin",
        type: ['grass','ghost'],
        category: "Tumbleweed Pokémon",
        height: 0.6,
        weight: 0.6,
        abiliby: ['Wind Rider']
    },
    {
        img: 'img/Capsakid.webp',
        name: "Capsakid",
        type: ['grass'],
        category: "Spicy Pepper Pokémon",
        height: 0.3,
        weight: 3.0,
        abiliby: ['Chlorophyll','Insomnia']
    },
    {
        img: 'img/Cetoddle.webp',
        name: "Cetoddle",
        type: ['ice'],
        category: "Terra Whale Pokémon",
        height: 1.2,
        weight: 45.0,
        abiliby: ['Thick Fat','Snow Cloak']
    },
    {
        img: 'img/Charcadet.webp',
        name: "Charcadet",
        type: ['fire'],
        category: "Fire Child Pokémon",
        height: 0.6,
        weight: 10.5,
        abiliby: ['Flash Fire']
    },
    {
        img: 'img/Cyclizar.webp',
        name: "Cyclizar",
        type: ['dragon','normal'],
        category: "Mount Pokémon",
        height: 1.6,
        weight: 63.0,
        abiliby: ['Shed Skin']
    },
    {
        img: 'img/Dondozo.wepb',
        name: "Dondozo",
        type: ['water'],
        category: "Big Catfish Pokémon",
        height: 12.0,
        weight: 220.0,
        abiliby: ['Unaware','Oblivious']
    },
    {
        img: 'img/Fidough.webp',
        name: "Fidough",
        type: ['fairy'],
        category: "Puppy Pokémon",
        height: 0.3,
        weight: 10.9,
        abiliby: ['One Tempo']
    },
    {
        img: 'img/Finizen.webp',
        name: "Finizen",
        type: ['water'],
        category: "Dolphin Pokémon",
        height: 1.3,
        weight: 60.2,
        abiliby: ['Water Veil']
    },
    {
        img: 'img/Flamigo.webp',
        name: "Flamigo",
        type: ['flying','fighting'],
        category: "Synchronize Pokémon",
        height: 1.6,
        weight: 37.0,
        abiliby: ['Scrappy','Tangled Feet']
    },
    {
        img: 'img/Flittle.webp',
        name: "Flittle",
        type: ['psychic'],
        category: "Frill Pokémon",
        height: 0.2,
        weight: 1.5,
        abiliby: ['Anticipation Frisk']
    },
    {
        img: 'img/Frigibax.webp',
        name: "Frigibax",
        type: ['dragon','ice'],
        category: "Ice Fin Pokémon",
        height: 0.5,
        weight: 17.0,
        abiliby: ['Thermal Exchange']
    },
    {
        img: 'img/Fuecoco.webp',
        name: "Fuecoco",
        type: ['fire'],
        category: "Fire Croc Pokémon",
        height: 0.4,
        weight: 9.8,
        abiliby: ['Blaze']
    },
    {
        img: 'img/Glimmet.webp',
        name: "Glimmet",
        type: ['rock','poison'],
        category: "Ore Pokémon",
        height: 0.7,
        weight: 8.0,
        abiliby: ['Toxic Debris']
    },
    {
        img: 'img/Greavard.webp',
        name: "Greavard",
        type: ['ghost'],
        category: "Ghost Dog Pokémon",
        height: 0.6,
        weight: 35.0,
        abiliby: ['Pickup']
    },
    {
        img: 'img/Klawf.webp',
        name: "Klawf",
        type: ['rock'],
        category: "Ambush Pokémon",
        height: 1.3,
        weight: 79.0,
        abiliby: ['Anger Shell','Shell Armor']
    },
    {
        img: 'img/Lechonk.webp',
        name: 'Lechonk',
        type: ['normal'],
        category: "Hog Pokémon",
        height: 0.5,
        weight: 10.2,
        abiliby: ['Aroma Veil','Gluttony']
    },
    {
        img: 'img/Maschiff.webp',
        name: "Maschiff",
        type: ['dark'],
        category: "Rascal Pokémon",
        height: 0.5,
        weight: 16,
        abiliby: ['Intimidate','Run Away']
    },
    {
        img: 'img/Nacli.webp',
        name: "Nacli",
        type: ['rock'],
        category: "Rock Salt Pokémon",
        height: 0.4,
        weight: 16.0,
        abiliby: ['Purifying Salt','Sturdy']
    },
    {
        img: 'img/Nymble.webp',
        name: "Nymble",
        type: ['bug'],
        category: "Grasshopper Pokémon",
        height: 0.2,
        weight: 1.0,
        abiliby: ['Swarm']
    },
    {
        img: 'img/Orthworm.webp',
        name: "Orthworm",
        type: ['steel'],
        category: "Earthworm Pokémon",
        height: 2.5,
        weight: 310.0,
        abiliby: ['Earth Eater']
    },
    {
        img: 'img/Pawmi.webp',
        name: "Pawmi",
        type: ['electric'],
        category: "Mouse Pokémon",
        height: 0.3,
        weight: 2.5,
        abiliby: ['Static','Natural Cure']
    },
    {
        img: 'img/Quaxly.webp',
        name: "Quaxly",
        type: ['water'],
        category: "Duckling Pokémon",
        height: 0.5,
        weight: 6.1,
        abiliby: ['Torrent']
    },
    {
        img: 'img/Rellor.webp',
        name: "Rellor",
        type: ['bug'],
        category: "Rolling Pokémon",
        height: 0.2,
        weight: 1.0,
        abiliby: ['Compund Eyes']
    },
    {
        img: 'img/Shroodle.webp',
        name: "Shroodle",
        type: ['poison','normal'],
        category: "Toxic Mouse Pokémon",
        height: 0.2,
        weight: 0.7,
        abiliby: ['Unburden','Pickpocket']
    },
    {
        img: 'img/Smoliv.webp',
        name: "Smoliv",
        type: ['grass','normal'],
        category: "Olive Pokémon",
        height: 0.3,
        weight: 6.5,
        abiliby: ['Early Bird']
    },
    {
        img: 'img/Sprigatito.webp',
        name: "Sprigatito",
        type: ['grass'],
        category: "Grass Cat Pokémon",
        height: 0.4,
        weight: 4.1,
        abiliby: ['Overgrow']
    },
    {
        img: 'img/Squawkabilly.webp',
        name: "Squawkabilly",
        type: ['normal','flying'],
        category: "Parrot Pokémon",
        height: 0.6,
        weight: 2.4,
        abiliby: ['Intimidate','Hustle']
    },
    {
        img: 'img/Tadbulb.webp',
        name: "Tadbulb",
        type: ['electric'],
        category: "EleTadpole Pokémon",
        height: 0.3,
        weight: 0.4,
        abiliby: ['Own Tempo','Static']
    },
    {
        img: 'img/Tandemaus.webp',
        name: "Tandemaus",
        type: ['normal'],
        category: "Couple Pokémon",
        height: 0.3,
        weight: 1.8,
        abiliby: ['Run Away','Pickup']
    },
    {
        img: 'img/Tarountula.webp',
        name: "Tarountula",
        type: ['bug'],
        category: "String Ball Pokémon",
        height: 0.3,
        weight: 4.0,
        abiliby: ['Insonmnia']
    },
    {
        img: 'img/Tatsugiri.webp',
        name: "Tatsugiri",
        type: ['dragon','water'],
        category: "Mimicry Pokémon",
        height: 0.3,
        weight: 8.0,
        abiliby: ['Commander']
    },
    {
        img: 'img/Tinkaton.webp',
        name: "Tinkatink",
        type: ['fairy','steel'],
        category: "Metalsmith Pokémon",
        height: 0.4,
        weight: 8.9,
        abiliby: ['Mold Breaker','Own Tempo']
    },
    {
        img: 'img/Toedscool.webp',
        name: "Toedscool",
        type: ['ground','grass'],
        category: "Woodear Pokémon",
        height: 0.9,
        weight: 33.0,
        abiliby: ['Mycelium Might']
    },
    {
        img: 'img/Varoom.webp',
        name: "Varoom",
        type: ['steel', 'poison'],
        category: "Single-Cyl Pokémon",
        height: 1.0,
        weight: 35.0,
        abiliby: ['Overcoat']
    },
    {
        img: 'img/Veluza.webp',
        name: "Veluza",
        type: ['water','psychic'],
        category: "Jettison Pokémon",
        height: 2.5,
        weight: 90,
        abiliby: ['Mold Breaker']
    },
    {
        img: 'img/Wattrel.webp',
        name: "Wattrel",
        type: ['electric','flying'],
        category: "Storm Petrel Pokémon",
        height: 0.4,
        weight: 3.6,
        abiliby: ['Wind Power','Volt Absorb']
    },
    {
        img: 'img/Wiglett.webp',
        name: "Wiglett",
        type: ['water'],
        category: "Garden Eel Pokémon",
        height: 1.2,
        weight: 1.8,
        abiliby: ['Gooey','Rattled']
    }
];

function sortByName(a,b){
    if (a.name > b.name){
        return 1;
    }else if (a.name < b.name){
        return -1;
    }
    return 0;
}
