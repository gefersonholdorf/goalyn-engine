import { MatchService } from "@/services/match-service";
import type { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import type { Match } from "@white-horse/soccer-engine";
import type { MatchType } from "@/types/match-type";

const matchResponseSchema = z.custom<MatchType>();

const requestBody = z.object({
    home: z.string(),
    visit: z.string(),
})

export const mathRoutes = async (app: FastifyInstance) => {
    const matchService = new MatchService()

    app.withTypeProvider<ZodTypeProvider>().post(
        '/match',
        {
            schema: {
                title: "Match",
                description: "Responsável por simular a partida e retornar todos os detalhes.",
                tags: ["Match"],
                body: requestBody,
                response: {
                    200: matchResponseSchema,
                    500: z.object({
                        error: z.string()
                    })
                }
            }
        },
        async (request, reply) => {
            const resultService = matchService.execute({})

            if(resultService.left) {
                reply.status(500).send({
                    error: 'Internal server error.'
                })
            }

            reply.status(200).send(resultService.right)
        }
    )
}