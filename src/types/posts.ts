import { StaticImageData } from 'next/image'

export type Image = {
  src: string | StaticImageData
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

export type MenuNav = {
  title?: string
  id: string
  height: number
}

export type RecommendedNav = {
  title: string
  url: string
}
