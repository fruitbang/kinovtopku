export type Movie = {
  id: number
  name: string
  description: string
  shortDescription: string
  director: string
  cast: string[]
  preview: string
  img: string[]
  imgDirectory: string
  year: string | number
  rating: number
}

export type MovieList = Movie[]
