import type { Formation, MatchStats, MatchStatus, Player, EventType, Team } from "@white-horse/soccer-engine";

export interface MatchEventEngine {
    type: EventType;
    minute: number;
    second?: number;
    description: string;
    teamName?: string;
    playerName?: string;
    secondaryPlayerName?: string;
    position?: {
        x: number;
        y: number;
    };
    data?: Record<string, any>;
    isKeyEvent: boolean;
}

export interface MatchType {
    status: MatchStatus;
    minute: number;
    second: number;
    teamOne: string;
    teamTwo: string;
    homeGoals: number;
    awayGoals: number;
    events: MatchEventEngine[];
    stats: MatchStats;
    team1E: Formation;
    team2E: Formation;
    homeTeam: Player[];
    awayTeam: Player[];
}