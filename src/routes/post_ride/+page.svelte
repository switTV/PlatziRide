<script>
    import NavRides from "$lib/components/Nav_rides.svelte";

    let titulo_viaje = ""
    let inicio_viaje = ""
    let imagen_viaje = ""

    import { postRide } from "$lib/context/store";
</script>

<style>
    :global(*) {
        margin: 0;
        padding: 0;
    }
</style>

<!-- markup (zero or more items) goes here -->

<NavRides></NavRides>

<input type="text" placeholder="titulo viaje" name="" id="" bind:value={titulo_viaje}>
<input type="text" placeholder="inicio de viaje" name="" id="" bind:value={inicio_viaje}>
<input type="text" name="" placeholder="imagen viaje" id="" bind:value={imagen_viaje}>
<button on:click={() => (postRide(titulo_viaje, inicio_viaje, imagen_viaje))}>publicar</button>