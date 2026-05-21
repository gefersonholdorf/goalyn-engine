import { Player, Team } from '@white-horse/soccer-engine';

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

/**
 * 🔴⚫ FLAMENGO
 * Time forte ofensivamente,
 * mas abaixo do Manchester City.
 */

const starters = [
  createPlayer('Agustín Rossi', 'GK', {
    pace: 58,
    shooting: 18,
    passing: 76,
    dribbling: 65,
    heading: 20,
    positioning: 84
  }),

  createPlayer('Varela', 'DEF', {
    pace: 78,
    shooting: 55,
    passing: 74,
    dribbling: 72,
    heading: 74,
    positioning: 78
  }),

  createPlayer('Léo Pereira', 'DEF', {
    pace: 70,
    shooting: 50,
    passing: 76,
    dribbling: 65,
    heading: 84,
    positioning: 82
  }),

  createPlayer('Fabrício Bruno', 'DEF', {
    pace: 72,
    shooting: 48,
    passing: 72,
    dribbling: 66,
    heading: 86,
    positioning: 84
  }),

  createPlayer('Ayrton Lucas', 'DEF', {
    pace: 88,
    shooting: 60,
    passing: 76,
    dribbling: 82,
    heading: 70,
    positioning: 76
  }),

  createPlayer('Pulgar', 'MID', {
    pace: 68,
    shooting: 70,
    passing: 84,
    dribbling: 76,
    heading: 74,
    positioning: 84
  }),

  createPlayer('Arrascaeta', 'MID', {
    pace: 78,
    shooting: 88,
    passing: 92,
    dribbling: 91,
    heading: 62,
    positioning: 90
  }),

  createPlayer('Gerson', 'MID', {
    pace: 76,
    shooting: 80,
    passing: 86,
    dribbling: 86,
    heading: 78,
    positioning: 86,
  }),

  createPlayer('Luiz Araújo', 'FWD', {
    pace: 88,
    shooting: 82,
    passing: 80,
    dribbling: 88,
    heading: 64,
    positioning: 82
  }),

  createPlayer('Pedro', 'FWD', {
    pace: 72,
    shooting: 92,
    passing: 76,
    dribbling: 82,
    heading: 90,
    positioning: 94
  }),

  createPlayer('Bruno Henrique', 'FWD', {
    pace: 92,
    shooting: 86,
    passing: 78,
    dribbling: 84,
    heading: 86,
    positioning: 86
  }),
];

const bench = [
  createPlayer('Matheus Cunha', 'GK', {
    pace: 60,
    shooting: 15,
    passing: 70,
    dribbling: 62,
    heading: 20,
    positioning: 78
  }),

  createPlayer('David Luiz', 'DEF', {
    pace: 60,
    shooting: 60,
    passing: 80,
    dribbling: 64,
    heading: 82,
    positioning: 80
  }),

  createPlayer('Everton Cebolinha', 'FWD', {
    pace: 86,
    shooting: 80,
    passing: 78,
    dribbling: 88,
    heading: 58,
    positioning: 80
  }),

  createPlayer('Victor Hugo', 'MID', {
    pace: 74,
    shooting: 72,
    passing: 78,
    dribbling: 80,
    heading: 70,
    positioning: 76
  }),
];

export const flamengo = new Team({
  name: 'Flamengo',
  players: [...starters, ...bench],
  formation: '4-4-2',
  instructions: {
    pressing: 'MEDIUM',
    mentality: 'BALANCED'
  }
});