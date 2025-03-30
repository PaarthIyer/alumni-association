<script>
    let { data } = $props()
</script>

<div class="mx-auto mt-10 mb-5 max-w-4xl">
    {#if data.meta.comment}
        <div
            class="text-accent pb-2 text-center text-2xl font-semibold md:text-3xl"
        >
            {data.meta.comment}
        </div>
    {/if}
    <div
        class=" text-text font-ubuntu text-center text-4xl font-medium sm:text-5xl md:mb-8 md:text-6xl"
    >
        {data.meta.title}
    </div>
    {#if data.meta.image}
        <img src={data.meta.image} alt="blog banner" class="rounded-md" />
    {/if}
</div>

<article
    class="prose prose-td:text-center prose-td:border-2 prose-td:border-gray-300 prose-h2:text-primary prose-h2:text-3xl md:prose-h2:text-4xl prose-table:flex prose-table:overflow-scroll mx-auto mt-8 mb-16 max-w-5xl px-5 text-base md:text-lg"
>
    <!-- Post -->

    <data.content />
</article>

<style>
    .prose {
        max-width: var(--container-4xl);
        color: var(--color-text);
    }
</style>
