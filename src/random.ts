import { Player, Team } from '@white-horse/soccer-engine';

// Função utilitária para gerar atributos aleatórios realistas
function randomAttr(min = 8, max = 20) {
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

// Jogadores do Barcelona (base fictícia + inspirada em nomes reais)
const names = [
  'Marc-André ter Stegen',
  'Ronald Araújo',
  'Pau Cubarsí',
  'Jules Koundé',
  'Alejandro Balde',
  'Frenkie de Jong',
  'Pedri González',
  'Gavi',
  'Lamine Yamal',
  'Robert Lewandowski',
  'Raphinha'
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
export const barcelona = new Team({
  name: 'FC Barcelona',
  players,
  formation: '4-3-3'
});