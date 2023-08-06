const base_url = "https://api.themoviedb.org/3"

// get all people movies credits
export async function getCastMoviesById(castId: number) {
  const res = await fetch(
    `${base_url}/person/${castId}/movie_credits?api_key=${process.env.MOVIE_API_KEY}`
  )
  return res.json()
}

// get people details
export async function getCastById(castId: number) {
  const res = await fetch(
    `${base_url}/person/${castId}?api_key=${process.env.MOVIE_API_KEY}`
  )
  return res.json()
}

export async function getMovieDataByPage({ pageParam = 1 }) {
  const res = await fetch(
    `${base_url}/discover/movie?api_key=${process.env.MOVIE_API_KEY}&page=${pageParam}`
  )
  return res.json()
}

export async function getMovieDataByParams(page: number, genre?: string) {
  const res = await fetch(
    `${base_url}/discover/movie?api_key=${process.env.MOVIE_API_KEY}&page=${page}&with_genres=${genre}`
  )

  return res.json()
}

/**TODO FETCH MOVIE AND TV SHOWS */
export async function getMovieSearchDataByPage(page: number, query: string) {
  const res = await fetch(
    `${base_url}/search/movie?api_key=${process.env.MOVIE_API_KEY}&page=${page}&query=${query}`
  )

  return res.json()
}

export async function getSearchMovie(query: string) {
  const res = await fetch(
    `${base_url}/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${query}`
  )
  return res.json()
}

export async function getMovieDataById(id: number) {
  const res = await fetch(
    `${base_url}/movie/${id}?api_key=${process.env.MOVIE_API_KEY}`
  )

  return res.json()
}

export async function getAllMovieDataById(id: number) {
  const res = await fetch(
    `${base_url}/movie/${id}?api_key=${process.env.MOVIE_API_KEY}&append_to_response=videos,credits`
  )

  return res.json()
}

export async function getMovieVideosById(id: number) {
  const res = await fetch(
    `${base_url}/movie/${id}/videos?api_key=${process.env.MOVIE_API_KEY}`
  )

  return res.json()
}

export async function getMovieCastById(id: number) {
  const res = await fetch(
    `${base_url}/movie/${id}/credits?api_key=${process.env.MOVIE_API_KEY}`
  )

  return res.json()
}

export async function getPopularMovies() {
  const res = await fetch(
    `${base_url}/movie/popular?api_key=${process.env.MOVIE_API_KEY}`
  )

  return res.json()
}

export async function getUpcomingMovies() {
  const res = await fetch(
    `${base_url}/movie/upcoming?api_key=${process.env.MOVIE_API_KEY}`
  )

  return res.json()
}

export async function getTopRatedMovies() {
  const res = await fetch(
    `${base_url}/movie/top_rated?api_key=${process.env.MOVIE_API_KEY}`
  )

  return res.json()
}

export async function getNowPlayingMovies() {
  const res = await fetch(
    `${base_url}/movie/now_playing?api_key=${process.env.MOVIE_API_KEY}`
  )
  return res.json()
}
