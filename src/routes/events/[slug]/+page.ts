import { error } from '@sveltejs/kit'
import type { ServerLoadEvent } from '@sveltejs/kit'

export const load = async ({ params }: ServerLoadEvent, status: string) => {
    try {
        const post = await import(`../../../lib/posts/events/${status}/${params.slug}.md`)
        console.log('Trying to fetch', params.slug)
        
        return {
            content: post.default,
            meta: post.metadata
        }
    } catch (e) {
        console.log(`../../../lib/posts/events/${status}/${params.slug}.md`);
        throw error(404, `Could not find ${params.slug}`)
    }
}
