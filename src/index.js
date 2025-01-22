import Fastify from 'fastify'
import { getMovie } from './routes/movies.js'
import { addToWatchList, removeFromWatchList, getWatchList } from './routes/watchlist.js'
import 'dotenv/config'

const fastify = Fastify({
  logger: true
})

fastify.get('/api/movies', getMovie)

fastify.post('/api/watchlist', addToWatchList)

fastify.delete('/api/watchlist', removeFromWatchList)

fastify.get('/api/watchlist', getWatchList)

const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
