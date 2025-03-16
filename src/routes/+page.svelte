<script>
    import EventCarousel from '$lib/components/home/EventCarousel.svelte'
    import EventListing from '$lib/components/home/EventListing.svelte'
    import Navbar from '$lib/components/Navbar.svelte'
</script>

<Navbar />

<!-- Hero -->
<div class="bg-image h-[70vh] w-full sm:h-[100vh]"></div>

<div class="m-auto my-10 max-w-6xl">
    <!-- About Us -->
    <div class="px-4 pb-10">
        <div id="Events" class="title mt-4 mb-5">About Us</div>
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
        <div id="Events" class="title my-5 md:mb-10">Events</div>
        <div id="Events" class="subtitle">Upcoming</div>
        <!-- <div class="my-3 text-2xl font-semibold text-[#0060DF] sm:text-3xl md:text-4xl">Upcoming</div> -->
        <EventCarousel></EventCarousel>
        <div class="subtitle mt-9 md:mt-5">Past Events</div>
    </div>
</div>

<style lang="postcss">
    @reference "../app.css";

    .bg-image {
        background-image:
            linear-gradient(to bottom, rgba(0, 0, 0, 0), rgb(0, 0, 0)), url('/cmi-front.png');
        background-color: rgb(0, 0, 0);

        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .title {
        @apply font-heading text-primary text-4xl font-bold first-letter:underline first-letter:decoration-4 first-letter:underline-offset-[7px] sm:text-5xl md:text-6xl;
    }
    .subtitle {
        @apply text-primary text-2xl font-semibold sm:text-3xl md:text-4xl;
    }
</style>
