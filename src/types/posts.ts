export type Image = {
  src: string
  alt: string
}

export type Author = {
  field: string
  name: string
  id: string
}

export type RecommendedPost = {
  img: Image
  description: string
  id: string
  url: string
}
