<script lang="ts">
    import Footer from '$lib/components/Footer.svelte'
    import '../app.css'
    let { children } = $props()
</script>

<div style="color:var(--text-body-color)">{@render children()}</div>
<Footer></Footer>
