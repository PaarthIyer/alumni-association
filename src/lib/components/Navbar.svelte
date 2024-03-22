<script>
    import '$src/app.css'
    import HomeIcon from '$src/lib/components/HomeIcon.svelte'

    let isOpen = false
    let innerWidth = 0
    let dropOpacity = 45

    function closeDrop() {
        isOpen = false
    }

    $: isOpen = innerWidth >= 640 ? false : isOpen
    $: dropOpacity = isOpen ? 80 : 45
</script>

<svelte:window bind:innerWidth />
<div class="absolute z-10 flex w-full flex-col bg-black bg-opacity-{dropOpacity} text-white">
    <div class="m-auto flex w-full max-w-screen-lg px-4 py-3 tracking-wider sm:py-4">
        <div class="flex-1">
            <a href="/">
                <HomeIcon fill="white" clas="sm:h-9 h-7 my-1 hover:fill-blue-600"></HomeIcon>
            </a>
        </div>

        {#if innerWidth >= 640}
            <div class="flex">
                <a class="main_element" href="/">Home</a>
                <a class="main_element" href="/events">Events</a>
                <a class="main_element" href="/contact">Contact Us</a>
                <a class="main_element border-text-white border-2 px-4" href="/alumni"
                    >Alumni Directory</a
                >
            </div>
        {:else}
            <label
                class="swap swap-rotate ml-4 place-items-center fill-current stroke-current hover:fill-blue-400 hover:stroke-blue-400"
            >
                <input type="checkbox" bind:checked={isOpen} />
                <svg class="swap-off h-9 w-9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    ><path
                        d="M5 8H13.75M5 12H19M10.25 16L19 16"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
                <svg
                    class="swap-on h-6 w-6 stroke-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <line x1="4" y1="4" x2="20" y2="20" style="stroke-linecap: round" />
                    <line x1="20" y1="4" x2="4" y2="20" style="stroke-linecap: round" /></svg
                >
            </label>
        {/if}
    </div>
    {#if isOpen}
        <div class="flex flex-col pb-4 text-center">
            <a class="list_element mb-3" href="/" on:click={closeDrop}>Home</a>
            <a class="list_element my-2" href="/events" on:click={closeDrop}>Events</a>
            <a class="list_element my-2" href="/contact" on:click={closeDrop}>Contact Us</a>
            <a class="list_element mb-5 mt-3" href="/alumni" on:click={closeDrop}
                >Alumni Directory</a
            >
        </div>
    {/if}
</div>

<style>
    .main_element {
        @apply link my-1 ml-4 mr-1 px-1 py-1 font-semibold no-underline hover:border-primary hover:text-primary;
    }
    .list_element {
        @apply link font-semibold no-underline hover:text-primary;
    }
</style>
