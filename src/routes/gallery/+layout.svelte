<script>
    import Navbar from '$lib/components/Navbar.svelte'
    let { children } = $props()
</script>

<Navbar transparent={false}></Navbar>
<div class="min-h-screen">{@render children()}</div>
