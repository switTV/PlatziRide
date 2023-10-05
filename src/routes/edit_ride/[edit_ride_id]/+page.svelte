<script lang="ts">
    import { page } from '$app/stores';

    import { editRide } from "$lib/context/store"

    export let data
    const resultado_buscado = data.data.find((e) => (e.id == $page.params.edit_ride_id))

    let searchedId = $page.params.edit_ride_id

    let newRide = {
        title: "",
        start: "",
    }
</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->

<input type="text" placeholder={resultado_buscado.title} bind:value={newRide.title}>
<input type="text" placeholder={resultado_buscado.start} bind:value={newRide.start}>
<button type="button" on:click={() => editRide(newRide,searchedId)}>Editar</button>