import { error } from '@sveltejs/kit'
import type { ServerLoadEvent } from '@sveltejs/kit'

export const load = async ({ params }: ServerLoadEvent) => {
    try {
        const post = await import(`../../../lib/posts/events/upcoming/${params.slug}.md`)
        console.log('Trying to fetch', params.slug)

        return {
            content: post.default,
            meta: post.metadata
        }
    } catch (e1) {
        try {
            const post = await import(`../../../lib/posts/events/past/${params.slug}.md`)
            console.log('Trying to fetch', params.slug)

            return {
                content: post.default,
                meta: post.metadata
            }
        } catch (e2) {
            throw error(404, `Could not find ${params.slug}`)
        }
    }
}
