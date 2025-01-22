# Movie API

Simple API to search for movies and add them to the TMDB watchlist.

## Setup

```
npm install
cp .env.example .env
```

Edit .env with your TMDB API key and account ID.

## Run

```
npm start
```

## Usage

### Search for a movie

```
curl http://localhost:3000/api/movies?q=The%20Batman
```

### Add a movie to the watchlist

```
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"movieId":"1064213"}' \
  http://localhost:3000/api/watchlist
```

alternatively, you can add a movie by title

```
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"title":"The Batman"}' \
  http://localhost:3000/api/watchlist
```

### Remove a movie from the watchlist

```
curl --header "Content-Type: application/json" \
  --request DELETE \
  --data '{"movieId":"1064213"}' \
  http://localhost:3000/api/watchlist
```

alternatively, you can remove a movie by title

```
curl --header "Content-Type: application/json" \
  --request DELETE \
  --data '{"title":"The Batman"}' \
  http://localhost:3000/api/watchlist
```

### Get the watchlist

```
curl http://localhost:3000/api/watchlist
```
