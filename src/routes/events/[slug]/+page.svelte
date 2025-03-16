<script>
    let { data } = $props()
</script>

<article class="prose mx-auto mt-8 mb-16">
    <!-- Title -->
    <hgroup class="flex flex-col items-center">
        <h1 class="">{data.meta.title}</h1>
        <img src={data.meta.image} alt="blog banner" class="rounded-md" />
        <p class="text-end text-sm">
            Published at {data.meta.date}
        </p>
    </hgroup>

    <!-- Tags -->
    <div class="mb-6 flex flex-wrap gap-4">
        {#each data.meta.categories as category}
            <a
                href={`/blog/categories/${category}`}
                class="chip variant-filled-secondary no-underline">&num;{category}</a
            >
        {/each}
    </div>

    <!-- Post -->
    <data.content />
</article>
