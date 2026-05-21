import { auroraFC } from "@/aurora";
import { gt24Horas } from "@/gt24horas";
import { Engine } from "@white-horse/soccer-engine";
import type { Either, Service } from "./service";
import type { MatchEventEngine, MatchType } from "@/types/match-type";

interface MatchServiceRequest {}

type MatchServiceResponse = MatchType;

export class MatchService implements Service<MatchServiceRequest, MatchServiceResponse> {
    constructor(){}

    execute(request: MatchServiceRequest): Either<never, MatchServiceResponse> {
        const engine = new Engine();
        const match = engine.simulateMatch(gt24Horas, auroraFC, {
            stadiumName: 'Virtual Arena',
            weather: 'Rain',
            matchImportance: 30,
            stadiumCapacity: 2000,
            timeOfDay: 'Evening',
            neutralVenue: true,
            refereeStrictness: 2,
        });

        const allEvents = engine.getEventSystem().getEvents()

        const events: MatchEventEngine[] = allEvents.map(event => ({
            type: event.type,
            minute: event.minute,
            second: event.second,
            description: event.description,
            teamName: event.team?.name,
            playerName: event.player?.name,
            secondaryPlayerName: event.secondaryPlayer?.name,
            position: event.position,
            data: event.data,
            isKeyEvent: event.isKeyEvent
        }))

        const result = {
                status: match.status,
                minute: match.minute,
                second: match.second,
                teamOne: match.homeTeam.name,
                teamTwo: match.awayTeam.name,
                homeGoals: match.homeGoals,
                awayGoals: match.awayGoals,
                events,
                stats: match.stats,
                team1E: match.homeTeam.formation,
                team2E: match.awayTeam.formation,
                homeTeam: match.homeTeam.players,
                awayTeam: match.awayTeam.players,
            }

        return {
            right: result
        }

        // return {
        //     right: match
        // }
    }
}