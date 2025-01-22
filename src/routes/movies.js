import * as tmdbApiClient from '../tmdbApiClient.js'

export async function getMovie (request, reply) {
  try {
    const movies = await tmdbApiClient.getMovie(request.query.q)
    return reply.send(movies.results[0])
  } catch (error) {
    return reply.status(400).send(error)
  }
}
