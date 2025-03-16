// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
    interface Post {
        title: string
        slug: string
        description: string
        image?: string
        date: string
        categories: string[]
        published: boolean
    }
    namespace App {
        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        // interface PageState {}
        // interface Platform {}
    }
}

export { Post }
