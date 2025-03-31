<script>
    import HomeIcon from './HomeIcon.svelte'

    let menuOpen = $state(false)
    let { transparent = true, spread = false } = $props()
</script>

<div
    class="{transparent
        ? 'absolute bg-black/45'
        : 'bg-primary'}  w-full text-white"
>
    <div
        class=" z-10 mx-auto flex w-full {!spread
            ? 'max-w-6xl'
            : ''} px-2 py-2 tracking-wider md:px-6"
    >
        <a class="flex-1" href="/">
            <HomeIcon
                cls="hover:cursor-pointer fill-white hover:fill-blue-600 h-7 sm:h-9 m-2 transition-all duration-150"
            />
        </a>
        <!-- desktop screen -->
        <div
            class="*:link *:hover:border-primary hidden items-center *:my-1 *:mr-1 *:ml-4 *:px-1 *:py-1 *:font-semibold *:no-underline *:transition-all *:duration-150 {transparent
                ? '*:hover:text-blue-600'
                : '*:hover:text-accent'} sm:flex"
        >
            <a href="/">Home</a>
            <a href="/events">Events</a>
            <a href="/gallery">Gallery</a>
            <a class="border-text-white border-2 px-4" href="/alumni"
                >Alumni Directory</a
            >
        </div>
        <!-- smaller screens -->
        <div class="m-2 items-center sm:hidden">
            <button
                class="relative flex h-6 w-10 flex-col items-center justify-between"
                onclick={() => (menuOpen = !menuOpen)}
            >
                <!-- hamburger menu -->
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 80"
                    class="fill-none stroke-white stroke-[4px] transition-all duration-300 ease-in-out"
                    style="stroke-linecap: round;"
                >
                    <path
                        d="M{menuOpen ? '50 40' : '40 15'} L{menuOpen
                            ? 75
                            : 90} 15 "
                        class="transition-all duration-300"
                    />
                    <path
                        d="M{menuOpen ? '25 15' : '10 40'} L{menuOpen
                            ? '75 65'
                            : '90 40'}"
                        class="transition-all duration-300"
                    />
                    <path
                        d="M{menuOpen ? '50 40' : '60 65'} L{menuOpen
                            ? '25'
                            : '10'} 65 "
                        class="transition-all duration-300"
                    />
                </svg>
            </button>
        </div>
    </div>
    <!-- smaller screen menu -->
    <div
        class="*:link *:hover:text-primary -z-10 flex w-full origin-top scale-y-0 flex-col items-center
            overflow-hidden transition-all duration-300 *:font-semibold *:no-underline *:focus:text-blue-600 sm:hidden {menuOpen
            ? ' scale-y-100'
            : 'h-0'}"
    >
        <a class="my-2" href="/">Home</a>
        <a class="my-2" href="/events">Events</a>
        <a class="my-2" href="/gallery">Gallery</a>
        <a class="mb-7" href="/alumni">Alumni Directory</a>
    </div>
</div>
