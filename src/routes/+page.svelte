<script>
    import HomeIcon from '$src/lib/components/HomeIcon.svelte'

    function scrollUEvents() {
        const el = document.querySelector('#UpcomingEvents')
        if (!el) return
        el.scrollIntoView({
            behavior: 'smooth'
        })
    }
</script>

<div class="bg-image h-[70vh] w-full sm:h-[100vh]">
    <div class="flex h-full flex-col items-center justify-center">
        <HomeIcon clas="lg:w-[40vh] my-6 pb-4 md:w-[35vh] sm:w-[28vh] w-[22vh] fill-blue-700 "
        ></HomeIcon>
        <!-- <div
            class="text-center font-montserrat text-4xl font-medium text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
            Alumni<br />Association
        </div> -->
        <div
            class="font-ubunt max-w-screen-md px-6 pt-3 text-center text-base font-medium text-neutral-content sm:px-4 sm:pt-8 sm:text-xl md:text-2xl"
        >
            Learn more about the CMI alumnus and keep up with the events organized by the CMI Alumni
            Association. <br />
            <a
                href="#UpcomingEvents"
                on:click|preventDefault={scrollUEvents}
                class="underline transition-colors duration-75 hover:text-primary"
                >Upcoming Events</a
            >
        </div>
    </div>
</div>

<div class="mx-auto my-10 flex w-full max-w-screen-lg flex-col px-4">
    <div
        class="my-4 text-center font-heading text-2xl font-bold text-primary sm:text-3xl md:text-4xl"
    >
        <span class="underline decoration-4 underline-offset-[7px]">A</span>bout Us
    </div>
    <div class="md:text-lg">
        We are the Chennai Mathematical Instutute Alumni Association. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
        in culpa qui officia deserunt mollit anim id est laborum.
    </div>
</div>

<div class="mx-auto my-10 flex w-full max-w-screen-lg flex-col items-center px-4">
    <div
        class="my-4 text-center font-heading text-2xl font-bold text-primary sm:text-3xl md:text-4xl"
    >
        <span class="underline decoration-4 underline-offset-[7px]">U</span>pcoming Event
    </div>
    <div class="my-5 max-w-screen-md border-primary p-5">
        <div class="pb-4 text-center text-xl font-semibold text-secondary sm:text-2xl md:text-3xl">
            The first distinguished CMIAA lecture
        </div>
        <div class="my-2 text-xl font-semibold sm:text-2xl md:text-3xl">
            <span class="">Title of the talk</span>
        </div>
        <div class="my-2 font-semibold md:text-xl">
            Ujjaini Mitra | <span class="font-normal">6th April, 2024</span>
        </div>
        <div class="my-3 flex font-medium md:text-lg">
            <img src="venue-ico.svg" alt="venue" class="mx-2 w-6" /> [location]
        </div>
        <div class="my-3 flex font-medium md:text-lg">
            <img src="time-ico.svg" alt="time" class="mx-2 w-6" /> [time]
        </div>
        <div class="text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
    </div>
</div>

<div class="h-32"></div>

<style>
    .bg-image {
        background-image: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0),
                /* rgba(0, 14, 41, 0.8) 70%,
                rgba(0, 14, 41, 0.9) 90%, */
                    rgb(0, 0, 0)
            ),
            url('/cmi-front.png');
        background-color: rgb(0, 0, 0);

        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>
