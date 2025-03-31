<script>
    import { onMount } from 'svelte'
    import { supabase } from '$lib/supabaseClient'
    import GalleryObject from '../GalleryObject.svelte'
    let { data } = $props()
    // @ts-ignore
    const {
        name,
        title,
        gallery,
        // @ts-ignore
        bucket_name,
        upload_date,
        image_link_prefix
    } = data

    /**
     * @type {string | any[]}
     */
    let buckets = $state([])

    async function fetchImageNames() {
        const { data, error } = await supabase.storage
            .from('cmiaa')
            .list(gallery)
        if (error) {
            console.error('Error fetching buckets:', error)
        } else {
            buckets = data
            console.log(data)
        }
    }

    onMount(() => {
        fetchImageNames()
    })
</script>

<div class="mx-5 my-10 text-center font-sans text-4xl md:text-6xl">{title}</div>

<div class="m-4 min-h-screen">
    {#if buckets.length > 0}
        <div
            class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4"
        >
            {#each buckets as bucket}
                <GalleryObject
                    url_prefix={image_link_prefix +
                        bucket_name +
                        '/' +
                        gallery +
                        '/'}
                    filename={bucket.name}
                ></GalleryObject>
            {/each}
        </div>
    {:else}
        <p>Loading images...</p>
    {/if}
</div>
