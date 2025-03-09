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
</script>

<div class="my-5 max-w-3xl p-5 md:w-3xl">
    <div class="text-accent pb-4 text-center text-xl font-semibold sm:text-2xl md:text-3xl">
        {comment}
    </div>
    <div class="my-2 text-xl font-semibold sm:text-2xl md:text-3xl">
        {title}
    </div>
    <div class="my-2 font-semibold md:text-xl">
        {presenter} | <span class="font-normal">{date}</span>
    </div>
    <div class="my-3 flex font-medium md:text-lg">
        <img src="icons/venue-ico.svg" alt="venue" class="mx-2 w-6" />{location}
    </div>
    <div class="my-3 flex font-medium md:text-lg">
        <img src="icons/time-ico.svg" alt="time" class="mx-2 w-6" />{time}
    </div>
    <div class="text-base md:text-lg">
        {description}
    </div>
</div>
