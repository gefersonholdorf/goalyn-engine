import { Player, Team } from '@white-horse/soccer-engine';

// Função utilitária para gerar atributos realistas
function randomAttr(min = 8, max = 10) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Criador de jogador
function createRandomPlayer(name: string, position: 'GK' | 'DEF' | 'MID' | 'FWD') {
  return new Player({
    name,
    position,
    attributes: {
      pace: randomAttr(),
      shooting: randomAttr(),
      passing: randomAttr(),
      dribbling: randomAttr(),
      heading: randomAttr(),
      positioning: randomAttr()
    }
  });
}

// Jogadores do Real Madrid (base fictícia inspirada no elenco atual)
const names = [
  'Thibaut Courtois',
  'Dani Carvajal',
  'Éder Militão',
  'Antonio Rüdiger',
  'Ferland Mendy',
  'Aurélien Tchouaméni',
  'Eduardo Camavinga',
  'Federico Valverde',
  'Jude Bellingham',
  'Vinícius Júnior',
  'Rodrygo Goes'
];

// Montagem do time (4-3-3)
const players = [
  createRandomPlayer(names[0], 'GK'),

  createRandomPlayer(names[1], 'DEF'),
  createRandomPlayer(names[2], 'DEF'),
  createRandomPlayer(names[3], 'DEF'),
  createRandomPlayer(names[4], 'DEF'),

  createRandomPlayer(names[5], 'MID'),
  createRandomPlayer(names[6], 'MID'),
  createRandomPlayer(names[7], 'MID'),

  createRandomPlayer(names[8], 'FWD'),
  createRandomPlayer(names[9], 'FWD'),
  createRandomPlayer(names[10], 'FWD'),
];

// Export do time
export const realMadrid = new Team({
  name: 'Real Madrid',
  players,
  formation: '4-3-3',
  instructions: {
    mentality: 'ULTRA_DEFENSIVE',
    offensiveWidth: 1
  }
});