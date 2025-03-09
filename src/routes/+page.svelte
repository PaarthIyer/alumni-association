<script>
    import EventCarousel from '$lib/components/home/EventCarousel.svelte'
    import EventListing from '$lib/components/home/EventListing.svelte'
    import Navbar from '$lib/components/Navbar.svelte'
</script>

<Navbar />

<!-- Hero -->
<div class="bg-image h-[70vh] w-full sm:h-[100vh]"></div>
<div class="m-auto my-10 max-w-5xl px-4">
    <div id="Events" class="title mt-4 mb-3">About Us</div>
    <div class="grid w-full md:grid-cols-5 lg:grid-cols-3">
        <div class="row-start-2 p-1 text-base sm:text-lg md:col-span-3 md:row-auto lg:col-span-2">
            The Chennai Mathematical Institute Alumni Association (CMIAA), established on November
            15, 2006, serves as a vibrant community connecting graduates of the Chennai Mathematical
            Institute (CMI). Our mission is to foster a strong network among alumni, facilitate
            collaboration, and support the institute's growth. We organize annual meetings each
            January and informal gatherings over the year, providing platforms for alumni to engage
            with current students and faculty.
        </div>
        <div
            class="row-start-1 h-full min-h-52 w-full bg-fuchsia-400 p-2 md:col-span-2 md:row-auto lg:col-auto"
        ></div>
    </div>
</div>
<!-- events section -->
<div class=" m-auto my-10 max-w-5xl px-4">
    <div id="Events" class="title mt-4 mb-2">Events</div>
    <div id="Events" class="subtitle">Upcoming</div>
    <!-- <div class="my-3 text-2xl font-semibold text-[#0060DF] sm:text-3xl md:text-4xl">Upcoming</div> -->
    <EventCarousel></EventCarousel>
    <div class="subtitle">Past Events</div>
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
        @apply font-heading text-primary text-4xl font-bold first-letter:underline first-letter:decoration-4 first-letter:underline-offset-[7px] sm:mb-4 sm:text-5xl md:text-6xl;
    }
    .subtitle {
        @apply text-primary mb-0 text-2xl font-semibold sm:my-3 sm:text-3xl md:text-4xl;
    }
</style>
