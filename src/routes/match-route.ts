import { flamengo } from "@/flamengo";
import { manchesterCity } from "@/manchester";
import { Engine, Team } from "@white-horse/soccer-engine";
import type { FastifyInstance } from "fastify";
import {ZodTypeProvider} from "fastify-type-provider-zod";
import z from "zod";

const requestBody = z.object({
    home: z.string(),
    visit: z.string(),
})

export const mathRoutes = async (app: FastifyInstance) => {
    app.withTypeProvider<ZodTypeProvider>().post(
        '/match',
        {
            schema: {
                title: "Match",
                description: "Teste",
                tags: ["Match"],
                body: requestBody,
                response: {
                    200: z.object({
                        result: z.string()
                    })
                }
            }
        },
        async (request, reply) => {
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
            reply.status(200).send({
                result: `${manchesterCity.name} ${match.homeGoals} - ${match.awayGoals} ${flamengo.name}`
            })
        }
    )
}