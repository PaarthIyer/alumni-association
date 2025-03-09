<script lang="ts">
    import '../app.css'
    let { children } = $props()
</script>

<div style="color:var(--text-body-color)">{@render children()}</div>
