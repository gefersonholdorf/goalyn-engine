// aurora-fc.ts
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
        handling: 85,
        reflexes: 82,
        diving: 80,
        kicking: 78,
        throwing: 76,
        commanding: 82,
        positioning: 84,
        composure: 80,
        determination: 82,
        passing: 75,
        anticipation: 81,
        concentration: 83,
        bravery: 78,
        agility: 72
    }
);

const thomasWagner = createPlayer(
    'Thomas Wagner',
    'GK',
    23,
    'German',
    'DEFAULT',
    {
        handling: 76,
        reflexes: 78,
        diving: 75,
        kicking: 72,
        throwing: 70,
        commanding: 74,
        positioning: 77,
        composure: 75,
        determination: 80,
        anticipation: 76,
        concentration: 78
    }
);

const rafaelCastillo = createPlayer(
    'Rafael Castillo',
    'GK',
    19,
    'Spanish',
    'DEFAULT',
    {
        handling: 68,
        reflexes: 72,
        diving: 66,
        kicking: 65,
        throwing: 64,
        commanding: 70,
        positioning: 71,
        composure: 68,
        determination: 85,
        anticipation: 70,
        concentration: 72,
        passing: 70
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
        strength: 86,
        tackling: 87,
        heading: 84,
        positioning: 86,
        bravery: 88,
        aggression: 82,
        concentration: 85,
        determination: 84,
        pace: 72,
        passing: 74,
        composure: 80,
        anticipation: 85
    }
);

const marcoRossi = createPlayer(
    'Marco Rossi',
    'DEF',
    25,
    'Italian',
    'DEFAULT',
    {
        strength: 82,
        tackling: 85,
        heading: 82,
        positioning: 84,
        anticipation: 86,
        passing: 78,
        composure: 80,
        determination: 82,
        pace: 74,
        vision: 72,
        technique: 76,
        concentration: 83
    }
);

const ibrahimDiallo = createPlayer(
    'Ibrahim Diallo',
    'DEF',
    22,
    'Senegalese',
    'DEFAULT',
    {
        strength: 88,
        tackling: 82,
        heading: 84,
        bravery: 90,
        aggression: 85,
        determination: 86,
        pace: 76,
        concentration: 80,
        positioning: 78,
        stamina: 82
    }
);

const alexMorgan = createPlayer(
    'Alex Morgan',
    'DEF',
    26,
    'English',
    'DEFAULT',
    {
        pace: 84,
        stamina: 86,
        tackling: 80,
        passing: 78,
        dribbling: 76,
        workRate: 87,
        positioning: 82,
        agility: 78,
        determination: 82
    }
);

const nicoSchmidt = createPlayer(
    'Nico Schmidt',
    'DEF',
    21,
    'German',
    'DEFAULT',
    {
        pace: 86,
        stamina: 82,
        tackling: 74,
        passing: 76,
        dribbling: 74,
        workRate: 84,
        determination: 88,
        agility: 80,
        naturalFitness: 82
    }
);

const carlosMendez = createPlayer(
    'Carlos Mendez',
    'DEF',
    27,
    'Argentinian',
    'DEFAULT',
    {
        pace: 82,
        stamina: 84,
        tackling: 82,
        passing: 80,
        dribbling: 78,
        workRate: 86,
        strength: 78,
        determination: 80,
        anticipation: 81
    }
);

const kenjiTanaka = createPlayer(
    'Kenji Tanaka',
    'DEF',
    20,
    'Japanese',
    'DEFAULT',
    {
        pace: 88,
        stamina: 87,
        tackling: 72,
        passing: 74,
        dribbling: 78,
        agility: 84,
        workRate: 90,
        determination: 87,
        naturalFitness: 85
    }
);

const leonardoCosta = createPlayer(
    'Leonardo Costa',
    'DEF',
    24,
    'Portuguese',
    'DEFAULT',
    {
        strength: 80,
        tackling: 84,
        heading: 81,
        positioning: 83,
        passing: 82,
        composure: 81,
        determination: 83,
        anticipation: 82,
        vision: 76,
        technique: 78
    }
);

// ============================================
// MEIO-CAMPISTAS (MID) - 6 jogadores
// ============================================

const williamNtcham = createPlayer(
    'William Ntcham',
    'MID',
    26,
    'Cameroonian',
    'DEFAULT',
    {
        tackling: 84,
        stamina: 88,
        strength: 82,
        passing: 78,
        vision: 76,
        workRate: 90,
        positioning: 82,
        aggression: 80,
        determination: 85,
        anticipation: 81
    }
);

const felipeAndrade = createPlayer(
    'Felipe Andrade',
    'MID',
    24,
    'Portuguese',
    'DEFAULT',
    {
        passing: 88,
        vision: 87,
        technique: 84,
        firstTouch: 85,
        dribbling: 82,
        decisionMaking: 85,
        composure: 83,
        stamina: 84,
        shooting: 76,
        finishing: 74
    }
);

const tomVanDerBerg = createPlayer(
    'Tom van der Berg',
    'MID',
    28,
    'Dutch',
    'DEFAULT',
    {
        passing: 82,
        vision: 80,
        tackling: 76,
        workRate: 88,
        stamina: 86,
        teamwork: 90,
        determination: 84,
        positioning: 80,
        composure: 82
    }
);

const pabloHerrera = createPlayer(
    'Pablo Herrera',
    'MID',
    23,
    'Spanish',
    'DEFAULT',
    {
        passing: 88,
        vision: 90,
        technique: 87,
        firstTouch: 86,
        dribbling: 86,
        finishing: 78,
        shooting: 76,
        composure: 84,
        decisionMaking: 85,
        agility: 82
    }
);

const samuelKone = createPlayer(
    'Samuel Kone',
    'MID',
    22,
    'Ivorian',
    'DEFAULT',
    {
        pace: 90,
        dribbling: 86,
        agility: 88,
        technique: 82,
        stamina: 82,
        passing: 76,
        vision: 74
    }
);

const lukasNovak = createPlayer(
    'Lukas Novak',
    'MID',
    24,
    'Czech',
    'DEFAULT',
    {
        pace: 88,
        dribbling: 84,
        agility: 86,
        technique: 80,
        workRate: 84,
        stamina: 84,
        passing: 78,
        vision: 76,
        determination: 82
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
        finishing: 90,
        composure: 87,
        heading: 84,
        strength: 82,
        pace: 84,
        dribbling: 82,
        positioning: 88,
        determination: 86,
        agility: 80,
        firstTouch: 85,
        shooting: 85
    }
);

const antoineDubois = createPlayer(
    'Antoine Dubois',
    'FWD',
    24,
    'French',
    'DEFAULT',
    {
        finishing: 86,
        composure: 82,
        pace: 88,
        dribbling: 80,
        positioning: 84,
        determination: 90,
        agility: 82,
        technique: 82,
        firstTouch: 81
    }
);

const viktorPetrov = createPlayer(
    'Viktor Petrov',
    'FWD',
    21,
    'Russian',
    'DEFAULT',
    {
        finishing: 80,
        composure: 74,
        heading: 82,
        strength: 84,
        determination: 88,
        workRate: 86,
        bravery: 82,
        positioning: 78,
        stamina: 80
    }
);

const joaoSilva = createPlayer(
    'Joao Silva',
    'FWD',
    19,
    'Portuguese',
    'DEFAULT',
    {
        finishing: 76,
        composure: 72,
        pace: 86,
        dribbling: 78,
        technique: 80,
        determination: 85,
        agility: 84,
        firstTouch: 80,
    }
);

const omarHassan = createPlayer(
    'Omar Hassan',
    'FWD',
    28,
    'Egyptian',
    'DEFAULT',
    {
        finishing: 82,
        composure: 80,
        heading: 78,
        strength: 80,
        workRate: 84,
        determination: 82,
        positioning: 80,
        bravery: 78,
        teamwork: 82
    }
);

// ============================================
// MEIO-CAMPISTA VERSÁTIL (RESERVA)
// ============================================

const davidKim = createPlayer(
    'David Kim',
    'MID',
    23,
    'South Korean',
    'DEFAULT',
    {
        pace: 82,
        stamina: 86,
        passing: 76,
        tackling: 74,
        workRate: 88,
        determination: 86,
        dribbling: 76,
        vision: 74,
        teamwork: 84
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

export const auroraFC = new Team({
    name: 'Aurora FC',
    players: [...starters, ...bench],
    formation: '4-3-3',
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

export const auroraFCPlayers = {
    goalkeepers: [lucasMendes, thomasWagner, rafaelCastillo],
    defenders: [erikJohansson, marcoRossi, ibrahimDiallo, alexMorgan, nicoSchmidt, carlosMendez, kenjiTanaka, leonardoCosta],
    midfielders: [williamNtcham, felipeAndrade, tomVanDerBerg, pabloHerrera, samuelKone, lukasNovak, davidKim],
    forwards: [miguelOliveira, antoineDubois, viktorPetrov, joaoSilva, omarHassan],
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