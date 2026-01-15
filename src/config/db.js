export const clubs = [
  {
    club: "Barcelona",
    league: "LaLiga",
    tier: "S",
  },
  {
    club: "Real Madrid",
    league: "LaLiga",
    tier: "S",
  },
  {
    club: "Liverpool",
    league: "Premier League",
    tier: "S",
  },
  {
    club: "Bayern de munique",
    league: "Bundesliga",
    tier: "S",
  },
];

export const tiers = ["S", "A", "B", "C", "D", "E"];

export const names = ["Denis", "Ronaldo", "James", "Martinez"];
export const nations = ["Brazil", "England", "Germany", "Spain"];

export const positions = [
  {
    position: "ZG",
    desarm: [60, 99],
    pass: [20, 99],
    dribble: [20, 60],
    shoot: [20, 99],
    pace: [20, 60],
    resistance: [60, 99],
    impulse: [60, 99],
    strength: [20, 99],
    height: [175, 200],
    weight: [60, 120],
  },
  {
    position: "LD",
    desarm: [20, 99],
    pass: [60, 99],
    dribble: [20, 99],
    shoot: [20, 99],
    pace: [60, 99],
    resistance: [60, 99],
    impulse: [20, 99],
    strength: [20, 99],
    height: [1.6, 2.0],
    weight: [60, 80],
  },
  {
    position: "LE",
    desarm: [20, 99],
    pass: [60, 99],
    dribble: [20, 99],
    shoot: [20, 99],
    pace: [60, 99],
    resistance: [60, 99],
    impulse: [20, 99],
    strength: [20, 99],
    height: [1.6, 2.0],
    weight: [60, 80],
  },

  {
    position: "VOL",
    desarm: [20, 99],
    pass: [60, 99],
    dribble: [20, 99],
    shoot: [20, 99],
    pace: [20, 99],
    resistance: [20, 99],
    impulse: [20, 99],
    strength: [20, 99],
    height: [1.6, 2.0],
    weight: [60, 100],
  },

  {
    position: "MC",
    desarm: [20, 99],
    pass: [60, 99],
    dribble: [20, 99],
    shoot: [20, 99],
    pace: [20, 99],
    resistance: [20, 99],
    impulse: [20, 99],
    strength: [20, 99],
    height: [1.6, 2.0],
    weight: [60, 120],
  },

  {
    position: "ME",
    desarm: [20, 99],
    pass: [20, 99],
    dribble: [60, 99],
    shoot: [20, 99],
    pace: [60, 99],
    resistance: [60, 99],
    impulse: [20, 99],
    strength: [20, 99],
    height: [1.6, 2.0],
    weight: [60, 100],
  },
  {
    position: "MD",
    desarm: [20, 99],
    pass: [20, 99],
    dribble: [60, 99],
    shoot: [20, 99],
    pace: [60, 99],
    resistance: [60, 99],
    impulse: [20, 99],
    strength: [20, 99],
    height: [1.6, 2.0],
    weight: [60, 100],
  },

  {
    position: "SA",
    desarm: [20, 99],
    pass: [20, 99],
    dribble: [60, 99],
    shoot: [60, 99],
    pace: [60, 99],
    resistance: [20, 99],
    impulse: [20, 99],
    strength: [20, 99],
    height: [1.6, 1.8],
    weight: [60, 80],
  },
  {
    position: "MEI",
    desarm: [20, 99],
    pass: [20, 99],
    dribble: [60, 99],
    shoot: [60, 99],
    pace: [60, 99],
    resistance: [20, 99],
    impulse: [20, 99],
    strength: [20, 99],
    height: [1.6, 1.8],
    weight: [60, 80],
  },

  {
    position: "PE",
    desarm: [20, 99],
    pass: [20, 99],
    dribble: [60, 99],
    shoot: [20, 99],
    pace: [60, 99],
    resistance: [20, 99],
    impulse: [20, 99],
    strength: [20, 99],
    height: [1.6, 2.0],
    weight: [60, 100],
  },
  {
    position: "PD",
    desarm: [20, 99],
    pass: [20, 99],
    dribble: [60, 99],
    shoot: [20, 99],
    pace: [60, 99],
    resistance: [20, 99],
    impulse: [20, 99],
    strength: [20, 99],
    height: [1.6, 2.0],
    weight: [60, 100],
  },

  {
    position: "CA",
    desarm: [20, 99],
    pass: [20, 99],
    dribble: [20, 99],
    shoot: [60, 99],
    pace: [60, 99],
    resistance: [20, 99],
    impulse: [20, 99],
    strength: [20, 99],
    height: [1.6, 2.0],
    weight: [60, 100],
  },
];

export const setFormation = {
  formation: null
};
export const formations = [
  {
    name: "433",
    lines:["PE", "CA", "PD", "MCE", "MC", "MCD", "LE", "ZGE", "ZGD", "LD"],
    img: "/433.png",
  },
  {
    name: "442",
    img: "/442.png",
    lines: ["CA", "CA", "ME", "MCE", "MC", "MD", "LE", "ZG", "ZG", "LD"],
  },
  {
    name: "4231",
    img: "/4231.png",
    lines: ["CA", "ME", "MEI", "MD", "MC", "MC", "LE", "ZG", "ZG", "LD"],
  },
  {
    name: "532",
    img: "/532.png",
    lines: ["CA", "CA", "MC", "MC", "MC", "LE", "ZG", "ZG", "ZG", "LD"],
  },

  // {
  //   name: "532",
  //   img: "/public/532.png",
  //   lines: [
  //     ["CA", "CA"],
  //     ["MC", "MC", "MC"],
  //     ["LE", "ZG", "ZG", "ZG", "LD"],
  //   ],
  // },
];
