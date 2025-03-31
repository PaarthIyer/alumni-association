<script>
    // @ts-nocheck

    let { url_prefix, filename } = $props()

    const imageUrl = url_prefix + filename // Holds the URL of the loaded image

    import { onMount } from 'svelte'

    let isFullscreen = $state(false)

    function toggleFullscreen() {
        isFullscreen = !isFullscreen
    }

    /**
     * @param {{ target: { classList: { contains: (arg0: string) => any; }; }; }} event
     */
    function closeFullscreen(event) {
        isFullscreen = false
    }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
    class="aspect-w-4 aspect-h-3 w-full overflow-hidden bg-gray-200"
    onclick={toggleFullscreen}
>
    {#if imageUrl}
        <img
            src={imageUrl}
            alt="Loaded from Supabase"
            class="h-full w-full object-contain"
        />
    {:else}
        <div class="flex h-full w-full items-center justify-center">
            <p class="text-gray-500">Loading image...</p>
        </div>
    {/if}
</div>

<!-- svelte-ignore a11y_no_static_element_interactions -->
{#if isFullscreen}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <div
        class="bg-opacity-40 overlay fixed inset-0 z-50 flex items-center justify-center bg-black"
        onclick={closeFullscreen}
    >
        <div class="relative flex h-full w-full items-center justify-center">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img
                src={imageUrl}
                alt="Fullscreen image"
                class="max-h-[80vh] max-w-[80vw] object-contain"
            />
            <button
                class="close-btn absolute top-4 right-4 text-8xl text-white"
                onclick={closeFullscreen}>×</button
            >
        </div>
    </div>
{/if}
