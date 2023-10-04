<script lang="ts">
    export let data:any[]
    import Card from "$lib/components/Card.svelte";
    import ButtonAdd from "$lib/components/ButtonAdd.svelte";
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
        flex-direction: column;
        align-items: center;
        justify-content: center;

        position: relative;
    }

    .container_cards {
        display: flex;
        flex-direction: row;
    }

    @media (max-width: 1250px) {
        .container_cards {
            flex-wrap: wrap;
            justify-content: center;
        }
    }
</style>

<!-- markup (zero or more items) goes here -->

<div class="container">
    <div class="container_cards">
        {#each data.data as ride}
            <Card {ride}></Card>
        {/each}
    </div>
    <ButtonAdd></ButtonAdd>
</div>