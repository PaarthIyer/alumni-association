<script>
    import { formatDate } from '$lib/utils/dateUtil'
    let { data } = $props()
    const { upcoming_events, past_events } = data
</script>

<div class="bg-bg mx-auto max-w-6xl px-5 pt-5 pb-10">
    <div class=" text-primary font-ubuntu text-center text-6xl font-bold sm:text-6xl md:text-7xl">
        Events
    </div>

    <div
        class=" text-primary font-ubuntu my-6 text-center text-4xl font-bold sm:text-5xl md:mt-4 md:text-left md:text-5xl"
    >
        Upcoming
    </div>

    {#each upcoming_events as post}
        {@render listing(post)}
    {/each}

    <div
        class=" text-primary font-ubuntu my-6 text-center text-4xl font-bold sm:text-5xl md:text-left md:text-5xl"
        id="past"
    >
        Past
    </div>

    {#each past_events as post}
        {@render listing(post)}
    {/each}
</div>

{#snippet listing(/** @type {EventListing} */ post)}
    <a class="md:my-5" href="events/{post.slug}">
        <div
            class="border-secondary/20 border-b-2 px-2 py-6 transition-all duration-200 hover:bg-black/10 md:p-5"
        >
            {#if post.comment}
                <div class="text-accent pb-1 text-xl font-semibold sm:text-2xl md:text-3xl">
                    {post.comment}
                </div>
            {/if}
            <div class="py-2 text-xl font-semibold sm:text-2xl md:text-3xl">
                {post.title}
            </div>
            <div class="py-2 font-semibold md:text-xl">
                {post.presenter} | <span class="font-normal">{formatDate(post.date)}</span>
            </div>
            <div class="flex py-3 font-medium md:text-lg">
                <img src="icons/venue-ico.svg" alt="venue" class="w-10 px-2" />{post.location}
                <img src="icons/time-ico.svg" alt="time" class="w-10 pr-2 pl-3" />{post.time}
            </div>
            {#if post.description}
                <div class="text-base md:text-lg">
                    {post.description}
                </div>
            {/if}
        </div>
    </a>
{/snippet}
