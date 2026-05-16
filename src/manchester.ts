import { Player, Team } from '@white-horse/soccer-engine';

function random(base: number, variance = 2) {
  return base + Math.floor(Math.random() * variance);
}

function createPlayer(
  name: string,
  position: 'GK' | 'DEF' | 'MID' | 'FWD',
  attrs: {
    pace: number;
    shooting: number;
    passing: number;
    dribbling: number;
    heading: number;
    positioning: number;
  }
) {
  return new Player({
    name,
    position,
    attributes: attrs
  });
}

const starters = [
  createPlayer('Ederson', 'GK', {
    pace: 72,
    shooting: 20,
    passing: 92,
    dribbling: 78,
    heading: 30,
    positioning: 94
  }),

  createPlayer('Kyle Walker', 'DEF', {
    pace: 95,
    shooting: 55,
    passing: 82,
    dribbling: 78,
    heading: 80,
    positioning: 88
  }),

  createPlayer('Rúben Dias', 'DEF', {
    pace: 74,
    shooting: 50,
    passing: 84,
    dribbling: 70,
    heading: 94,
    positioning: 95
  }),

  createPlayer('John Stones', 'DEF', {
    pace: 76,
    shooting: 60,
    passing: 90,
    dribbling: 82,
    heading: 86,
    positioning: 90
  }),

  createPlayer('Gvardiol', 'DEF', {
    pace: 88,
    shooting: 65,
    passing: 84,
    dribbling: 85,
    heading: 84,
    positioning: 88
  }),

  createPlayer('Rodri', 'MID', {
    pace: 72,
    shooting: 82,
    passing: 96,
    dribbling: 88,
    heading: 85,
    positioning: 99
  }),

  createPlayer('Kevin De Bruyne', 'MID', {
    pace: 80,
    shooting: 92,
    passing: 99,
    dribbling: 91,
    heading: 72,
    positioning: 95
  }),

  createPlayer('Bernardo Silva', 'MID', {
    pace: 86,
    shooting: 82,
    passing: 94,
    dribbling: 98,
    heading: 60,
    positioning: 92
  }),

  createPlayer('Phil Foden', 'FWD', {
    pace: 91,
    shooting: 92,
    passing: 90,
    dribbling: 97,
    heading: 65,
    positioning: 94
  }),

  createPlayer('Haaland', 'FWD', {
    pace: 94,
    shooting: 99,
    passing: 75,
    dribbling: 84,
    heading: 98,
    positioning: 99
  }),

  createPlayer('Doku', 'FWD', {
    pace: 99,
    shooting: 82,
    passing: 84,
    dribbling: 99,
    heading: 50,
    positioning: 86
  }),
];

const bench = [
  createPlayer('Ortega', 'GK', {
    pace: 65,
    shooting: 18,
    passing: 80,
    dribbling: 70,
    heading: 20,
    positioning: 84
  }),
];

export const manchesterCity = new Team({
  name: 'Manchester City',
  players: [...starters, ...bench],
  formation: '4-3-3',
  instructions: {
    pressing: 'HIGH',
    mentality: 'ATTACKING'
  }
});