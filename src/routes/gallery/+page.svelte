<script>
    import { onMount } from 'svelte'
    import { supabase } from '$lib/supabaseClient'
    import GalleryObject from './GalleryObject.svelte'

    /**
     * @type {string | any[]}
     */
    let buckets = []

    async function fetchImageNames() {
        const { data, error } = await supabase.storage
            .from('CMIAA_2025_Gallery')
            .list('CMIAA_2025_Gallery')
        if (error) {
            console.error('Error fetching buckets:', error)
        } else {
            buckets = data
        }
    }

    onMount(() => {
        fetchImageNames()
    })
</script>

<div class="mx-5 my-10 text-center font-sans text-4xl md:text-6xl">CMIAA 2025 Meet</div>

<div class="m-4">
    {#if buckets.length > 0}
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
            {#each buckets as bucket}
                <GalleryObject filename={bucket.name}></GalleryObject>
            {/each}
        </div>
    {:else}
        <p>Loading images...</p>
    {/if}
</div>
