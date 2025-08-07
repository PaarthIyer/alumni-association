<script>
    let {
        comment = '',
        title = '',
        presenter = '',
        date = '',
        location = '',
        time = '',
        description = ''
    } = $props()

    import { formatDate } from '$lib/utils/dateUtil'
</script>

<div class="my-5 max-w-3xl p-5 md:w-3xl">
    <div
        class="text-accent pb-4 text-center text-xl font-semibold sm:text-2xl md:text-3xl"
    >
        {comment}
    </div>
    <div class="my-2 text-xl font-semibold sm:text-2xl md:text-3xl">
        {title}
    </div>
    <div class="my-2 font-semibold md:text-xl">
        {#if presenter}
            {presenter} |
        {/if} <span class="font-normal">{formatDate(date)}</span>
    </div>
    <div class="my-3 flex font-medium md:text-lg">
        {#if location}
            <img
                src="icons/venue-ico.svg"
                alt="venue"
                class="w-10 px-2"
            />{location}
        {/if}
        {#if time}
            <img
                src="icons/time-ico.svg"
                alt="time"
                class="w-10 pr-2 pl-3"
            />{time}
        {/if}
    </div>

    <div class="text-base md:text-lg">
        {description}
    </div>
</div>
