function overNumber(min, max) {
  const minNumber = Math.ceil(min);
  const maxNumber = Math.floor(max);
  return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
}

const any = Math.floor(Math.random() * 99);


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

export const ZG = {
  desarm: overNumber(60,99),
  pass: any,
  dribble: overNumber(10,60),
  shoot: any,
  pace: overNumber(10,60),
  resistance: overNumber(60,99),
  impulse: overNumber(60,99),
  strength: any,
  height: overNumber(1.75, 2.0),
  weight: overNumber(60, 120),

}

export const LDLE = {
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
}

export const VOL = {
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
}

export const MC = {
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
}

export const MEMD = {
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
}

export const SAMEI = {
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
}

export const PEPD = {
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
}

export const CA = {
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
}

export let physics = {
  pace: 99,
  resistance: 99,
  impulse: 99,
  strength: 99,
  height: 1.99,
  weight: 80,
};

export let stats = {
  desarm: 99,
  pass: 99,
  dribble: 99,
  shoot: 99,
};


export const formations = [
  {
    name: "433",
    lines: [
      ["PE", "CA", "PD"],
      ["MC", "MC", "MC"],
      ["LE", "ZG", "ZG", "LD"],
    ],
  },
  {
    name: "442",
    lines: [
      ["CA", "CA"],
      ["ME", "MC", "MC", "MD"],
      ["LE", "ZG", "ZG", "LD"],
    ],
  },
  {
    name: "4231",
    lines: [
      ["CA"],
      ["ME", "MEI", "MD"],
      ["MC", "MC"],
      ["LE", "ZG", "ZG", "LD"],
    ]
  },
  {
    name: "532",
    lines: [
      ["CA", "CA"],
      ["MC", "MC", "MC"],
      ["LE", "ZG", "ZG", "ZG", "LD"],
    ],
  },
];
