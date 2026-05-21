// aurora-fc-low.ts
import { Player, PlayerPosition, Team, PassingStyle } from '@white-horse/soccer-engine';

// ============================================
// FUNÇÃO AUXILIAR PARA CRIAR JOGADORES
// ============================================

const createPlayer = (
    name: string,
    position: PlayerPosition,
    age: number,
    nationality: string,
    role: 'DEFAULT',
    attributesOverrides: Partial<Player['attributes']> = {}
): Player => {
    return new Player({
        name,
        position,
        age,
        nationality,
        attributes: attributesOverrides
    });
};

// ============================================
// GOLEIROS (GK) - 3 jogadores
// ============================================

const lucasMendes = createPlayer(
    'Lucas Mendes',
    'GK',
    28,
    'Brazilian',
    'DEFAULT',
    {
        handling: 5,
        reflexes: 5,
        diving: 5,
        kicking: 4,
        throwing: 4,
        commanding: 5,
        positioning: 5,
        composure: 5,
        determination: 5,
        passing: 4,
        anticipation: 5,
        concentration: 5,
        bravery: 4,
        agility: 4
    }
);

const thomasWagner = createPlayer(
    'Thomas Wagner',
    'GK',
    23,
    'German',
    'DEFAULT',
    {
        handling: 4,
        reflexes: 4,
        diving: 4,
        kicking: 3,
        throwing: 3,
        commanding: 4,
        positioning: 4,
        composure: 4,
        determination: 5,
        anticipation: 4,
        concentration: 4
    }
);

const rafaelCastillo = createPlayer(
    'Rafael Castillo',
    'GK',
    19,
    'Spanish',
    'DEFAULT',
    {
        handling: 3,
        reflexes: 3,
        diving: 3,
        kicking: 3,
        throwing: 3,
        commanding: 3,
        positioning: 3,
        composure: 3,
        determination: 5,
        anticipation: 3,
        concentration: 3,
        passing: 3
    }
);

// ============================================
// DEFENSORES (DEF) - 8 jogadores
// ============================================

const erikJohansson = createPlayer(
    'Erik Johansson',
    'DEF',
    27,
    'Swedish',
    'DEFAULT',
    {
        strength: 5,
        tackling: 5,
        heading: 5,
        positioning: 5,
        bravery: 5,
        aggression: 5,
        concentration: 5,
        determination: 5,
        pace: 4,
        passing: 4,
        composure: 5,
        anticipation: 5
    }
);

const marcoRossi = createPlayer(
    'Marco Rossi',
    'DEF',
    25,
    'Italian',
    'DEFAULT',
    {
        strength: 5,
        tackling: 5,
        heading: 5,
        positioning: 5,
        anticipation: 5,
        passing: 4,
        composure: 5,
        determination: 5,
        pace: 4,
        vision: 3,
        technique: 4,
        concentration: 5
    }
);

const ibrahimDiallo = createPlayer(
    'Ibrahim Diallo',
    'DEF',
    22,
    'Senegalese',
    'DEFAULT',
    {
        strength: 5,
        tackling: 5,
        heading: 5,
        bravery: 5,
        aggression: 5,
        determination: 5,
        pace: 4,
        concentration: 5,
        positioning: 4,
        stamina: 5
    }
);

const alexMorgan = createPlayer(
    'Alex Morgan',
    'DEF',
    26,
    'English',
    'DEFAULT',
    {
        pace: 5,
        stamina: 5,
        tackling: 5,
        passing: 4,
        dribbling: 4,
        workRate: 5,
        positioning: 5,
        agility: 4,
        determination: 5
    }
);

const nicoSchmidt = createPlayer(
    'Nico Schmidt',
    'DEF',
    21,
    'German',
    'DEFAULT',
    {
        pace: 5,
        stamina: 5,
        tackling: 4,
        passing: 4,
        dribbling: 4,
        workRate: 5,
        determination: 5,
        agility: 4,
        naturalFitness: 5
    }
);

const carlosMendez = createPlayer(
    'Carlos Mendez',
    'DEF',
    27,
    'Argentinian',
    'DEFAULT',
    {
        pace: 5,
        stamina: 5,
        tackling: 5,
        passing: 4,
        dribbling: 4,
        workRate: 5,
        strength: 4,
        determination: 5,
        anticipation: 5
    }
);

const kenjiTanaka = createPlayer(
    'Kenji Tanaka',
    'DEF',
    20,
    'Japanese',
    'DEFAULT',
    {
        pace: 5,
        stamina: 5,
        tackling: 4,
        passing: 4,
        dribbling: 4,
        agility: 5,
        workRate: 5,
        determination: 5,
        naturalFitness: 5
    }
);

const leonardoCosta = createPlayer(
    'Leonardo Costa',
    'DEF',
    24,
    'Portuguese',
    'DEFAULT',
    {
        strength: 5,
        tackling: 5,
        heading: 5,
        positioning: 5,
        passing: 4,
        composure: 5,
        determination: 5,
        anticipation: 5,
        vision: 4,
        technique: 4
    }
);

// ============================================
// MEIO-CAMPISTAS (MID) - 7 jogadores
// ============================================

const williamNtcham = createPlayer(
    'William Ntcham',
    'MID',
    26,
    'Cameroonian',
    'DEFAULT',
    {
        tackling: 5,
        stamina: 5,
        strength: 5,
        passing: 4,
        vision: 4,
        workRate: 5,
        positioning: 5,
        aggression: 5,
        determination: 5,
        anticipation: 5
    }
);

const felipeAndrade = createPlayer(
    'Felipe Andrade',
    'MID',
    24,
    'Portuguese',
    'DEFAULT',
    {
        passing: 5,
        vision: 5,
        technique: 5,
        firstTouch: 5,
        dribbling: 5,
        decisionMaking: 5,
        composure: 5,
        stamina: 5,
        shooting: 4,
        finishing: 4
    }
);

const tomVanDerBerg = createPlayer(
    'Tom van der Berg',
    'MID',
    28,
    'Dutch',
    'DEFAULT',
    {
        passing: 5,
        vision: 5,
        tackling: 4,
        workRate: 5,
        stamina: 5,
        teamwork: 5,
        determination: 5,
        positioning: 5,
        composure: 5
    }
);

const pabloHerrera = createPlayer(
    'Pablo Herrera',
    'MID',
    23,
    'Spanish',
    'DEFAULT',
    {
        passing: 5,
        vision: 5,
        technique: 5,
        firstTouch: 5,
        dribbling: 5,
        finishing: 4,
        shooting: 4,
        composure: 5,
        decisionMaking: 5,
        agility: 5
    }
);

const samuelKone = createPlayer(
    'Samuel Kone',
    'MID',
    22,
    'Ivorian',
    'DEFAULT',
    {
        pace: 5,
        dribbling: 5,
        agility: 5,
        technique: 5,
        stamina: 5,
        passing: 4,
        vision: 4
    }
);

const lukasNovak = createPlayer(
    'Lukas Novak',
    'MID',
    24,
    'Czech',
    'DEFAULT',
    {
        pace: 5,
        dribbling: 5,
        agility: 5,
        technique: 5,
        workRate: 5,
        stamina: 5,
        passing: 4,
        vision: 4,
        determination: 5
    }
);

const davidKim = createPlayer(
    'David Kim',
    'MID',
    23,
    'South Korean',
    'DEFAULT',
    {
        pace: 5,
        stamina: 5,
        passing: 4,
        tackling: 4,
        workRate: 5,
        determination: 5,
        dribbling: 4,
        vision: 4,
        teamwork: 5
    }
);

// ============================================
// ATACANTES (FWD) - 5 jogadores
// ============================================

const miguelOliveira = createPlayer(
    'Miguel Oliveira',
    'FWD',
    26,
    'Brazilian',
    'DEFAULT',
    {
        finishing: 5,
        composure: 5,
        heading: 5,
        strength: 5,
        pace: 5,
        dribbling: 5,
        positioning: 5,
        determination: 5,
        agility: 5,
        firstTouch: 5,
        shooting: 5
    }
);

const antoineDubois = createPlayer(
    'Antoine Dubois',
    'FWD',
    24,
    'French',
    'DEFAULT',
    {
        finishing: 5,
        composure: 5,
        pace: 5,
        dribbling: 5,
        positioning: 5,
        determination: 5,
        agility: 5,
        technique: 5,
        firstTouch: 5
    }
);

const viktorPetrov = createPlayer(
    'Viktor Petrov',
    'FWD',
    21,
    'Russian',
    'DEFAULT',
    {
        finishing: 5,
        composure: 4,
        heading: 5,
        strength: 5,
        determination: 5,
        workRate: 5,
        bravery: 5,
        positioning: 4,
        stamina: 5
    }
);

const joaoSilva = createPlayer(
    'Joao Silva',
    'FWD',
    19,
    'Portuguese',
    'DEFAULT',
    {
        finishing: 4,
        composure: 4,
        pace: 5,
        dribbling: 4,
        technique: 5,
        determination: 5,
        agility: 5,
        firstTouch: 5,
    }
);

const omarHassan = createPlayer(
    'Omar Hassan',
    'FWD',
    28,
    'Egyptian',
    'DEFAULT',
    {
        finishing: 5,
        composure: 5,
        heading: 4,
        strength: 5,
        workRate: 5,
        determination: 5,
        positioning: 5,
        bravery: 4,
        teamwork: 5
    }
);

// ============================================
// MONTAGEM DO ELENCO
// ============================================

const starters: Player[] = [
    lucasMendes,      // GK
    alexMorgan,       // LB
    erikJohansson,    // CB1
    marcoRossi,       // CB2
    carlosMendez,     // RB
    williamNtcham,    // DM
    felipeAndrade,    // CM1 (Captain)
    tomVanDerBerg,    // CM2
    samuelKone,       // LW
    miguelOliveira,   // ST
    lukasNovak        // RW
];

const bench: Player[] = [
    thomasWagner,     // GK2
    rafaelCastillo,   // GK3
    ibrahimDiallo,    // CB3
    nicoSchmidt,      // LB2
    kenjiTanaka,      // RB2
    leonardoCosta,    // CB4
    pabloHerrera,     // AM
    davidKim,         // Utility MID
    antoineDubois,    // ST2
    viktorPetrov,     // ST3
    joaoSilva,        // ST4
    omarHassan        // ST5
];

// ============================================
// EXPORTAÇÃO DO TIME
// ============================================

export const gt24Horas = new Team({
    name: 'GT 24 Horas',
    players: [...starters, ...bench],
    formation: '4-4-2',
    instructions: {
        offensiveWidth: 6,
        mentality: 'ATTACKING',
        pressing: 'HIGH',
        passingStyle: 'POSSESSION',
        width: 5,
        tempo: 5,
        defensiveLine: 5
    },
});

// ============================================
// EXPORTAÇÕES INDIVIDUAIS PARA TESTES
// ============================================

export { starters, bench };

export const allPlayers = [...starters, ...bench];

export const auroraFCLowPlayers = {
    goalkeepers: [lucasMendes, thomasWagner, rafaelCastillo],
    defenders: [erikJohansson, marcoRossi, ibrahimDiallo, alexMorgan, nicoSchmidt, carlosMendez, kenjiTanaka, leonardoCosta],
    midfielders: [williamNtcham, felipeAndrade, tomVanDerBerg, pabloHerrera, samuelKone, lukasNovak, davidKim],
    forwards: [miguelOliveira, antoineDubois, viktorPetrov, joaoSilva, omarHassan]
};

// ============================================
// ESTATÍSTICAS DO TIME
// ============================================

export const teamStats = {
    averageAge: () => {
        const total = allPlayers.reduce((sum, p) => sum + p.age, 0);
        return (total / allPlayers.length).toFixed(1);
    },
    averageOverall: () => {
        const total = allPlayers.reduce((sum, p) => sum + p.getOverallRating(), 0);
        return (total / allPlayers.length).toFixed(1);
    },
    captain: felipeAndrade.name,
    viceCaptain: erikJohansson.name,
    topScorer: miguelOliveira.name,
    topAssister: felipeAndrade.name,
    formation: '4-3-3',
    totalPlayers: allPlayers.length
};

// ============================================
// FUNÇÃO PARA RESETAR ESTADO DO TIME PARA UMA PARTIDA
// ============================================

export const resetTeamForMatch = (): void => {
    allPlayers.forEach(player => {
        player.resetMatchState();
    });
};

// ============================================
// FUNÇÃO PARA OBTER ESCALAÇÃO INICIAL
// ============================================

export const getStartingLineup = (): Record<string, Player> => {
    return {
        GK: lucasMendes,
        LB: alexMorgan,
        CB1: erikJohansson,
        CB2: marcoRossi,
        RB: carlosMendez,
        DM: williamNtcham,
        CM1: felipeAndrade,
        CM2: tomVanDerBerg,
        LW: samuelKone,
        ST: miguelOliveira,
        RW: lukasNovak
    };
};

// ============================================
// FUNÇÃO PARA SUBSTITUIÇÕES
// ============================================

export const substitutions = {
    goalkeeper: [thomasWagner, rafaelCastillo],
    defense: [ibrahimDiallo, nicoSchmidt, kenjiTanaka, leonardoCosta],
    midfield: [pabloHerrera, davidKim],
    attack: [antoineDubois, viktorPetrov, joaoSilva, omarHassan]
};