<script lang="ts">
    import { formatDate } from '$lib/utils/dateUtil'
    import galleriesData from './galleries.json'
    let gallery: GalleryItem[] = Object.values(galleriesData).sort(
        (a, b) => new Date(b.upload_date).getTime() - new Date(a.upload_date).getTime()
    )
    type GalleryItem = {
        name: string
        title: string
        gallery: string
        upload_date: string
        image_link_prefix: string
    }
</script>

<div class="bg-bg mx-auto max-w-6xl px-5 pt-5 pb-10">
    <div
        class=" text-primary font-ubuntu pb-5 text-center text-6xl font-bold sm:text-6xl md:text-7xl"
    >
        Galleries
    </div>

    {#each gallery as post}
        {@render gallery_listing(post)}
    {/each}
</div>

{#snippet gallery_listing(post: GalleryItem)}
    <a class="md:my-5" href="gallery/{post.name}">
        <div
            class="border-secondary/20 border-b-2 px-2 py-6 transition-all duration-200 hover:bg-black/10 md:p-5"
        >
            <div class="py-2 text-xl font-semibold sm:text-2xl md:text-3xl">
                {post.title}
            </div>

            <div class="text-base md:text-lg">
                Uploaded {formatDate(post.upload_date)}
            </div>
        </div>
    </a>
{/snippet}
