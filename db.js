export const clubs = [
  {
    club: "Barcelona",
    league: "LaLiga",
  },
  {
    club: "Real Madrid",
    league: "LaLiga",
  },
  {
    club: "Manchester city",
    league: "Premier League",
  },
  {
    club: "Bayern de munique",
    league: "Bundesliga",
  },
];

export const names = ["Denis", "Ronaldo", "James", "Martinez"];
export const nations = ["Brazil", "England", "Germ[20,99]", "Spain"];

export const positions = [

  {
    position: "ZG",
    desarm: [60,99], 
    pass: [20,99],
    dribble: [20,60],
    shoot: [20,99],
    pace: [20,60],
    resistance: [60,99],
    impulse: [60,99],
    strength: [20,99],
    height: [175,200],
    weight: [60,120],
  
  },
  {
    position: "LDLE",
    desarm: [20,99],
    pass: [60,99],
    dribble: [20,99],
    shoot: [20,99],
    pace: [60,99],
    resistance: [60,99],
    impulse: [20,99],
    strength: [20,99],
    height: [1.60,2.00],
    weight: [60,80],
  },
  
  {
    position: "VOL",
    desarm: [20,99],
    pass: [60,99],
    dribble: [20,99],
    shoot: [20,99],
    pace: [20,99],
    resistance: [20,99],
    impulse: [20,99],
    strength: [20,99],
    height: [1.60,2.00],
    weight: [60,100],
  },
  
  {
    position: "MC",
    desarm: [20,99],
    pass: [60,99],
    dribble: [20,99],
    shoot: [20,99],
    pace: [20,99],
    resistance: [20,99],
    impulse: [20,99],
    strength: [20,99],
    height: [1.60,2.00],
    weight: [60,120],
  },
  
  {
    position: "MEMD",
    desarm: [20,99],
    pass: [20,99],
    dribble: [60,99],
    shoot: [20,99],
    pace: [60,99],
    resistance: [60,99],
    impulse: [20,99],
    strength: [20,99],
    height: [1.60,2.00],
    weight: [60,100],
  },
  
  {
    position: "SAMEI",
    desarm: [20,99],
    pass: [20,99],
    dribble: [60,99],
    shoot: [60,99],
    pace: [60,99],
    resistance: [20,99],
    impulse: [20,99],
    strength: [20,99],
    height: [1.60,1.80],
    weight: [60,80],
  },
  
  {
    position: "PEPD",
    desarm: [20,99],
    pass: [20,99],
    dribble: [60,99],
    shoot: [20,99],
    pace: [60,99],
    resistance: [20,99],
    impulse: [20,99],
    strength: [20,99],
    height: [1.60,2.00],
    weight: [60,100],
  },
  
  {
    position: "CA",
    desarm: [20,99],
    pass: [20,99],
    dribble: [20,99],
    shoot: [60,99],
    pace: [60,99],
    resistance: [20,99],
    impulse: [20,99],
    strength: [20,99],
    height: [1.60,2.00],
    weight: [60,100],
  },
]

// export const stats = [

//   {
//     name: "physics",
//     pace: 99,
//     resistance: 99,
//     impulse: 99,
//     strength: 99,
//     height: 1.99,
//     weight: 80,
//   },
  
//   {
//     name: "technical",
//     desarm: 99,
//     pass: 99,
//     dribble: 99,
//     shoot: 99,
//   }
// ]

export const formations = [
  {
    name: "433",
    img: "links/exp/433.png",
    lines: [
      ["PE", "CA", "PD"],
      ["MC", "MC", "MC"],
      ["LE", "ZG", "ZG", "LD"],
    ],
  },
  {
    name: "442",
    img: "links/exp/442.png",
    lines: [
      ["CA", "CA"],
      ["ME", "MC", "MC", "MD"],
      ["LE", "ZG", "ZG", "LD"],
    ],

  },
  {
    name: "4231",
    img: "links/exp/4231.png",
    lines: [
      ["CA"],
      ["ME", "MEI", "MD"],
      ["MC", "MC"],
      ["LE", "ZG", "ZG", "LD"],
    ],

  },
  {
    name: "532",
    img: "links/exp/532.png",
    lines: [
      ["CA", "CA"],
      ["MC", "MC", "MC"],
      ["LE", "ZG", "ZG", "ZG", "LD"],
    ],

  },
];


function random(stat){
  stat = db.ZG.stat[Math.floor(Math.random() * db.ZG.stat.length)]
}