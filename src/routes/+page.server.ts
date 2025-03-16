import type { ServerLoadEvent } from '@sveltejs/kit'

export async function load({ fetch }: ServerLoadEvent) {
    const response_upcoming = await fetch('/api/posts/upcoming')
    const upcoming_events: EventListing[] = await response_upcoming.json()
    return { upcoming_events }
}
