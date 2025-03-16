<script>
    import EventCarouselItem from './EventCarouselItem.svelte'

    let activeIndex = $state(0)
    let { events } = $props()
</script>

{#if events.length == 0}
    <div
        class="h-64 w-full content-center bg-gray-200 p-4 text-center text-2xl text-gray-700 sm:text-2xl md:text-3xl"
    >
        Nothing to see here
    </div>
{:else if events.length == 1}<div class="flex w-full flex-col">
        <div class="mx-auto">
            <EventCarouselItem {...events[0]}></EventCarouselItem>
        </div>
    </div>
{:else}
    <div class="flex w-full flex-col">
        <div class="relative z-0 mx-auto">
            {#each events as event, index}
                <div
                    class="{activeIndex == index
                        ? 'appear block opacity-100'
                        : 'vanish hidden opacity-0'} transition-all duration-200"
                >
                    <EventCarouselItem {...event}></EventCarouselItem>
                </div>
            {/each}
        </div>
        <!-- tickers -->
        <div class="z-10 mx-auto -mt-5 mb-4 flex flex-wrap gap-4">
            {#each events as _, index}
                <button
                    class="size-6 rounded-full md:size-8 {activeIndex == index
                        ? 'bg-blue-600 hover:bg-blue-700'
                        : 'bg-gray-200 hover:bg-gray-400'} cursor-pointer transition-all duration-200"
                    onclick={() => (activeIndex = index)}
                >
                    {index}
                </button>
            {/each}
        </div>
        <!-- ticker end -->
    </div>
{/if}

<style>
    @keyframes appear {
        from {
            display: none;
            opacity: 0;
        }
        to {
            display: block;
            opacity: 1;
        }
    }
    @keyframes vanish {
        from {
            display: block;
            opacity: 1;
        }
        to {
            display: none;
            opacity: 0;
        }
    }

    .appear {
        animation: appear 200ms;
    }
    .vanish {
        animation: vanish 200ms;
    }
</style>
