import { error } from '@sveltejs/kit'
import type { ServerLoadEvent } from '@sveltejs/kit'
import galleriesData from '../galleries.json'

// Define the type for the gallery items
type GalleryItem = {
    name: string
    title: string
    gallery: string
    upload_date: string
    image_link_prefix: string
}

// Define the type for the galleries object
const galleries: Record<string, GalleryItem> = galleriesData

export const load = async ({ params }: ServerLoadEvent) => {
    try {
        if (!params.slug) {
            throw error(400, 'Slug is required') // 400 Bad Request
        }
        if (params.slug in galleries) {
            return galleries[params.slug]
        } else {
            throw error(404, `Could not find ${params.slug}`)
        }
    } catch (e) {
        throw error(404, `Could not find ${params.slug}`)
    }
}
