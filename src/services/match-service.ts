import { Engine, Match } from "@white-horse/soccer-engine";
import type { Either, Service } from "./service";
import { manchesterCity } from "@/manchester";
import { flamengo } from "@/flamengo";

interface MatchServiceRequest {}

type MatchServiceResponse = Match;

export class MatchService implements Service<MatchServiceRequest, MatchServiceResponse> {
    constructor(){}

    execute(request: MatchServiceRequest): Either<never, MatchServiceResponse> {
        const engine = new Engine();
        const match = engine.simulateMatch(manchesterCity, flamengo, {
            stadiumName: 'Virtual Arena',
            weather: 'Rain',
            matchImportance: 15,
            stadiumCapacity: 2000,
            timeOfDay: 'Evening',
            neutralVenue: true,
            refereeStrictness: 5,
        });

        const result = `${manchesterCity.name} ${match.homeGoals} - ${match.awayGoals} ${flamengo.name}`

        return {
            right: match
        }
    }
}