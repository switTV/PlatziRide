<script lang="ts">
    import { page } from '$app/stores';

    import { editRide } from "$lib/context/store"
    import img_edit_form from "../../../assets/img_edit_form.svg"
    import NavRides from '$lib/components/Nav_rides.svelte';

    export let data
    const searchedRide = data.data.find((e:any) => (e.id == $page.params.edit_ride_id))

    let searchedId = $page.params.edit_ride_id

    let newRide = {
        title: "",
        start: "",
    }
</script>

<style>
    .container_form {
        width: 100vw;
        height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

    }
    
    .container_form .container_form_button button{
        width: 75px;
        height: 20px;
    }

    .container_form_main {
        border: 1px solid #0D3B66;
        padding: 10px;
    }
    
    .container_form .container_form_input{
        display: flex;
        flex-direction: column;
    }
    
    .container_form .container_form_input input{
        margin-bottom: 20px;
        height: 25px;
    }
    
    .container_form .container_form_input label{
        margin-bottom: 5px;
        color: #0D3B66;
        font-family: Montserrat, sans-serif;
    }

    .container_form_main {
        width: 300px;
        height: 500px;

        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    
    .container_form_main img{
        width: 100%;
        margin-top: 20px;
    }
</style>

<!-- markup (zero or more items) goes here -->

<div class="container_form">
    <NavRides></NavRides>
    <h2>Pon la info a modificar</h2>
    <div class="container_form_main">
        <div class="container_form_input">

            <label for="title_ride">El nombre de la ciudad :)</label>
            <input type="text" name="title_ride" placeholder={searchedRide.title} bind:value={newRide.title}>
            
            <label for="title_ride">Nueva fecha</label>
            <input type="text" placeholder={searchedRide.start} bind:value={newRide.start}>

        </div>
        <div class="container_form_button">
            <button type="button" on:click={() => editRide(newRide,searchedId)}>Editar</button>
        </div>
        <div class="container_form_img">
            <img src="{img_edit_form}" alt="">
        </div>
    </div>
</div>
