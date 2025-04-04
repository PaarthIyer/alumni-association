import { json } from '@sveltejs/kit'

async function getPosts() {
    let posts: EventListing[] = []

    const paths = import.meta.glob('/src/lib/posts/events/past/*.md', {
        eager: true
    })

    for (const path in paths) {
        const file = paths[path]
        const slug = path.split('/').at(-1)?.replace('.md', '')

        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata as Omit<EventListing, 'slug'>
            const post = { ...metadata, slug } satisfies EventListing
            if (post.published) {
                posts.push(post)
            }
        }
    }

    posts = posts.sort(
        (first, second) =>
            new Date(second.date).getTime() - new Date(first.date).getTime()
    )

    return posts
}

export async function GET() {
    const posts = await getPosts()
    return json(posts)
}

export const prerender = true
