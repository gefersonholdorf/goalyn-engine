import { Engine, type Match } from '@white-horse/soccer-engine';
import { flamengo } from './flamengo';
import { manchesterCity } from './manchester';

const engine = new Engine();
console.log()
const eventSystem = engine.getEventSystem();

// 📊 TEAM STATS
const stats = {
  possession: { home: 0, away: 0 },
  shots: { home: 0, away: 0 },
  shotsOnTarget: { home: 0, away: 0 },
  corners: { home: 0, away: 0 },
  goals: { home: 0, away: 0 },
  passes: { home: 0, away: 0 },
  saves: { home: 0, away: 0 },
  fouls: { home: 0, away: 0 },
  cards: { yellow: 0, red: 0 },
  injuries: { home: 0, away: 0 },
  tackles: { home: 0, away: 0 },
};

// 👤 PLAYER STATS
type PlayerStats = {
  id: string;
  name: string;
  team: 'home' | 'away';

  shots: number;
  goals: number;
  saves: number;
  fouls: number;
  passes: number;
  tackles: number;
  interceptions: number;
  yellowCards: number;
  redCards: number;
};

const playerStats = new Map<string, PlayerStats>();

function getSide(teamName?: string) {
  if (!teamName) return null;
  if (teamName === manchesterCity.name) return 'home';
  if (teamName === flamengo.name) return 'away';
  return null;
}

// 🧠 INIT PLAYER
function initPlayer(player: any, side: 'home' | 'away') {
  if (!player?.id) return;

  if (!playerStats.has(player.id)) {
    playerStats.set(player.id, {
      id: player.id,
      name: player.name,
      team: side,

      shots: 0,
      goals: 0,
      saves: 0,
      fouls: 0,
      passes: 0,
      tackles: 0,
      interceptions: 0,
      yellowCards: 0,
      redCards: 0
    });
  }
}

// 👤 GET PLAYER
function getPlayer(player: any, side: 'home' | 'away') {
  initPlayer(player, side);
  return playerStats.get(player.id)!;
}

// ⚽ GOAL (TEAM LEVEL)
eventSystem.subscribe('goal', event => {
  const side = getSide(event.team?.name);

  if (side) stats.goals[side]++;

  console.log(
    `⚽ GOAL ${event.minute}' - ${event.player?.name} (${event.team?.name})`
  );
});

// 📡 ALL EVENTS
eventSystem.subscribe('*', event => {
  const side = getSide(event.team?.name);
  const player = event.player;

  // 👤 PLAYER TRACKING
  if (player && side) {
    const p = getPlayer(player, side);

    switch (event.type) {
      case 'shot':
        p.shots++;
        if (side) stats.shots[side]++;
        console.log(`🥅 Shot ${event.minute}' - ${player.name}`);
        break;

      case 'goal':
        p.goals++;
        if (side) stats.goals[side]++;
        console.log(`⚽ GOAL ${event.minute}' - ${player.name}`);
        break;

      case 'save':
        p.saves++;
        if (side) stats.saves[side]++;
        console.log(`🧤 Save ${event.minute}' - ${player.name}`);
        break;

      case 'foul':
        p.fouls++;
        if (side) stats.fouls[side]++;
        console.log(`🪓 Foul ${event.minute}' - ${player.name}`);
        break;

      case 'pass':
        p.passes++;
        console.log(`🔁 Pass ${event.minute}' - ${player.name}`);
        break;

      case 'tackle':
        p.tackles++;
        console.log(`🪓 Tackle ${event.minute}' - ${player.name}`);
        break;

      case 'interception':
        p.interceptions++;
        console.log(`🧠 Interception ${event.minute}' - ${player.name}`);
        break;

      case 'yellowCard':
        p.yellowCards++;
        stats.cards.yellow++;
        console.log(`🟨 Yellow card ${event.minute}' - ${player.name}`);
        break;

      case 'redCard':
        p.redCards++;
        stats.cards.red++;
        console.log(`🟥 Red card ${event.minute}' - ${player.name}`);
        break;
    }
  }

  // 🧠 KEY EVENTS
  if (event.isKeyEvent) {
    console.log(`⭐ ${event.minute}' - ${event.description}`);
  }
});

// ▶️ SIMULAÇÃO
const match = engine.simulateMatch(manchesterCity, flamengo, {
  stadiumName: 'Virtual Arena',
  weather: 'Rain',
  matchImportance: 15,
  stadiumCapacity: 2000,
  timeOfDay: 'Evening',
  neutralVenue: true,
  refereeStrictness: 5,
});

// 📊 RESULTADO FINAL
console.log('\n====================');
console.log('📊 FINAL RESULT');
console.log('====================');

console.log(match)

console.log(
  `${manchesterCity.name} ${match.homeGoals} - ${match.awayGoals} ${flamengo.name}`
);

const attendance = calculateAttendance(match);

console.log('🏟️ Público:', attendance);

// 📊 TEAM STATS
console.log('\n📊 TEAM STATS');
console.log('--------------------');
console.log('Shots:', match.stats.shots);
console.log('ShotsOnTarget:', match.stats.shotsOnTarget);
console.log('Fouls:', match.stats.fouls);
console.log('YellowCards:', match.stats.redCards);
console.log('YellowCards:', match.stats.yellowCards);
console.log('Corners:', match.stats.corners);
console.log('Possession:', match.stats.possession);

// // 👤 PLAYER STATS
// console.log('\n====================');
// console.log('👤 PLAYER STATS');
// console.log('====================');

// for (const p of playerStats.values()) {
//   console.log('\n--------------------');
//   console.log(`${p.name} (${p.team})`);

//   console.log('⚽ Goals:', p.goals);
//   console.log('🥅 Shots:', p.shots);
//   console.log('🧤 Saves:', p.saves);
//   console.log('🔁 Passes:', p.passes);
//   console.log('🪓 Tackles:', p.tackles);
//   console.log('🧠 Interceptions:', p.interceptions);
//   console.log('🟨 Yellow:', p.yellowCards);
//   console.log('🟥 Red:', p.redCards);
// }

function calculateAttendance(match: Match) {
  let base = match.stadiumCapacity;

  // importância do jogo
  const importanceFactor = 0.6 + (match.matchImportance / 20) * 0.4;

  // clima
  const weatherFactor =
    match.weather === 'Clear' ? 1 :
    match.weather === 'Rain' ? 0.85 :
    match.weather === 'Storm' ? 0.7 : 0.9;

  // horário
  const timeFactor =
    match.timeOfDay === 'Evening' ? 1 :
    match.timeOfDay === 'Night' ? 0.95 :
    0.9;

  // neutral venue reduz interesse
  const venueFactor = match.neutralVenue ? 0.85 : 1;

  return Math.floor(base * importanceFactor * weatherFactor * timeFactor * venueFactor);
}