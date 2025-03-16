<script>
    import EventCarousel from '$lib/components/home/EventCarousel.svelte'
    import Navbar from '$lib/components/Navbar.svelte'

    let { data } = $props()
    const { upcoming_events } = data
</script>

<Navbar />

<!-- Hero -->
<div class="bg-image h-[70vh] w-full sm:h-[100vh]"></div>

<div class="bg-bg m-auto max-w-6xl py-10">
    <!-- About Us -->
    <div class="px-4 pb-10">
        <div
            class=" text-primary font-ubuntu mb-5 text-center text-6xl font-bold sm:text-6xl md:mb-8 md:text-7xl"
        >
            About Us
        </div>
        <div class="grid w-full md:grid-cols-5">
            <div
                class="row-start-2 content-center p-1 text-base sm:text-lg md:col-span-3 md:row-auto"
            >
                The Chennai Mathematical Institute Alumni Association (CMIAA), established on
                November 15, 2006, serves as a vibrant community connecting graduates of the Chennai
                Mathematical Institute (CMI). Our mission is to foster a strong network among
                alumni, facilitate collaboration, and support the institute's growth. We organize
                annual meetings each January and informal gatherings over the year, providing
                platforms for alumni to engage with current students and faculty.
            </div>
            <div
                class="row-start-1 mb-6 min-h-64 w-full bg-fuchsia-400 p-2 md:col-span-2 md:row-auto md:mb-0"
            ></div>
        </div>
    </div>
    <!-- events section -->
    <div class="px-4">
        <div
            class=" text-primary font-ubuntu mb-5 text-center text-6xl font-bold sm:text-6xl md:mb-8 md:text-7xl"
        >
            <a href="/events" class="transition-all duration-200 hover:tracking-wider"
                >Events<span class="text-2xl md:text-3xl">#</span></a
            >
        </div>

        <div
            class=" text-primary font-ubuntu text-center text-4xl font-medium sm:text-5xl md:text-5xl"
        >
            Upcoming
        </div>
        <!-- <div class="my-3 text-2xl font-semibold text-[#0060DF] sm:text-3xl md:text-4xl">Upcoming</div> -->
        <EventCarousel events={upcoming_events}></EventCarousel>
        <div
            class=" text-primary font-ubuntu mt-8 text-center text-4xl font-medium sm:text-5xl md:text-5xl"
        >
            Past Events
        </div>

        <div class="my-5 flex">
            <a class="m-auto" href="/events#past">
                <div
                    class="border-secondary hover:bg-secondary hover:text-bg m-auto border-2 p-5 text-center text-xl transition-all duration-200 md:text-2xl"
                >
                    Click here for a list of past events
                </div>
            </a>
        </div>
    </div>
</div>

<style>
    .bg-image {
        background-image:
            linear-gradient(to bottom, rgba(0, 0, 0, 0), rgb(0, 0, 0)), url('/cmi-front.png');
        background-color: rgb(0, 0, 0);

        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>
