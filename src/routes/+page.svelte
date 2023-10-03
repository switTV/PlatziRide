<script lang="ts">
    export let data:any[]
    import Card from "$lib/components/Card.svelte";

    import {postRide} from "../lib/context/store"
</script>

<style>
    :global(*){
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .container {
        width: 100vw;

        display: flex;
        flex-wrap: wrap;
        /* flex-direction: column; */
        align-items: center;
        justify-content: center;
    }
</style>

<!-- markup (zero or more items) goes here -->

<div class="container">
    {#each data.data as ride}
        <Card {ride}></Card>
    {/each}
</div>