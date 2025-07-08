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
export const nations = ["Brazil", "England", "Germany", "Spain"];

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
  /*
  {
    position: "LDLE",
    desarm: any,
    pass: overNumber(60,99),
    dribble: overNumber(10,60),
    shoot: overNumber(10,60),
    pace: overNumber(60,99),
    resistance: overNumber(60,99),
    impulse: any,
    strength: any,
    height: overNumber(1.60, 2.0),
    weight: overNumber(60, 80),
  },
  
  {
    position: "VOL",
    desarm: overNumber(10,60),
    pass: overNumber(60,99),
    dribble: any,
    shoot: any,
    pace: overNumber(10,60),
    resistance: any,
    impulse: any,
    strength: any,
    height: overNumber(1.60, 2.0),
    weight: overNumber(60, 120),
  },
  
  {
    position: "MC",
    desarm: any,
    pass: overNumber(60,99),
    dribble: any,
    shoot: any,
    pace: any,
    resistance: any,
    impulse: any,
    strength: any,
    height: overNumber(1.60, 2.0),
    weight: overNumber(60, 120),
  },
  
  {
    position: "MEMD",
    desarm: overNumber(10,60),
    pass: any,
    dribble: overNumber(60,99),
    shoot: overNumber(10,60),
    pace: overNumber(60,99),
    resistance: overNumber(60,99),
    impulse: any,
    strength: any,
    height: overNumber(1.60, 2.0),
    weight: overNumber(60, 120),
  },
  
  {
    position: "SAMEI",
    desarm: overNumber(10,60),
    pass: any,
    dribble: overNumber(60,99),
    shoot: overNumber(60,99),
    pace: overNumber(60,99),
    resistance: any,
    impulse: overNumber(10,60),
    strength: overNumber(10,60),
    height: overNumber(1.60, 1.80),
    weight: overNumber(60, 80),
  },
  
  {
    position: "PEPD",
    desarm: overNumber(10,60),
    pass: any,
    dribble: overNumber(60,99),
    shoot: any,
    pace: overNumber(60,99),
    resistance: overNumber(10,60),
    impulse: any,
    strength: any,
    height: overNumber(1.60, 2.0),
    weight: overNumber(60, 120),
  },
  
  {
    position: "CA",
    desarm: overNumber(10,60),
    pass: any,
    dribble: any,
    shoot: overNumber(60,99),
    pace: overNumber(60,99),
    resistance: any,
    impulse: any,
    strength: any,
    height: overNumber(1.60, 2.0),
    weight: overNumber(60, 120),
  },
  */
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