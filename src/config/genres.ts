const components: {
  title: string
  id: any
}[] = [
  {
    id: "all",
    title: "All",
  },
  {
    id: 28,
    title: "Action",
  },
  {
    id: 12,
    title: "Adventure",
  },
  {
    id: 16,
    title: "Animation",
  },
  {
    id: 35,
    title: "Comedy",
  },
  {
    id: 80,
    title: "Crime",
  },
  {
    id: 99,
    title: "Documentary",
  },
  {
    id: 18,
    title: "Drama",
  },
  {
    id: 10751,
    title: "Family",
  },
  {
    id: 14,
    title: "Fantasy",
  },
  {
    id: 36,
    title: "History",
  },
  {
    id: 27,
    title: "Horror",
  },
  {
    id: 10402,
    title: "Music",
  },
  {
    id: 9648,
    title: "Mystery",
  },
  {
    id: 10749,
    title: "Romance",
  },
  {
    id: 878,
    title: "Science Fiction",
  },
  {
    id: 10770,
    title: "TV Movie",
  },
  {
    id: 53,
    title: "Thriller",
  },
  {
    id: 10752,
    title: "War",
  },
  {
    id: 37,
    title: "Western",
  },
]

export const genres = components.map((genre) => ({
  ...genre,
  href: `/movie?genre=${genre.id}`,
}))
