import * as tmdbApiClient from '../tmdbApiClient.js'

export async function addToWatchList (request, reply) {
  try {
    if (request.body.movieId) {
      await addToWatchList(request.body.movieId)
      return reply.send(201)
    } else if (request.body.title) {
      const movies = await tmdbApiClient.getMovie(request.body.title)
      await tmdbApiClient.addToWatchList(movies.results[0].id)
      return reply.send(201)
    }
    return reply.status(400).send('Bad Request')
  } catch (error) {
    return reply.status(400).send(error)
  }
}

export async function removeFromWatchList (request, reply) {
  try {
    if (request.body.movieId) {
      await removeFromWatchList(request.body.movieId)
      return reply.send(204)
    } else if (request.body.title) {
      const movies = await tmdbApiClient.getMovie(request.body.title)
      await tmdbApiClient.removeFromWatchList(movies.results[0].id)
      return reply.send(204)
    }
    return reply.status(400).send('Bad Request')
  } catch (error) {
    return reply.status(400).send(error)
  }
}

export async function getWatchList (request, reply) {
  try {
    const watchlist = await tmdbApiClient.getWatchList()
    return reply.send(watchlist)
  } catch (error) {
    return reply.status(400).send(error)
  }
}
