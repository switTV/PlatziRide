<script lang="ts">
    import { goto } from "$app/navigation";
    import {delRide} from "../context/store"

    export let ride:any

    function goToRides() {
        goto(`http://localhost:5173/get_ride/${ride.id}`)
    }
</script>

<style>
    .Card {
        width: 85vw;
        height: 400px;
        max-width: 400px;

        border-radius: 10px;
        border: .5px solid #bbbbbb;

        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

        display: grid; 
        grid-auto-columns: 1fr; 
        grid-auto-rows: 1fr; 
        grid-template-columns: 1.4fr; 
        grid-template-rows: 1.2fr 0.8fr; 
        gap: 0px 0px; 
        grid-template-areas: 
          "Card_img"
          "Card_text"
        ;

        margin-top: 10px;
    }

    .Card .Card_img {
        width: 100%;
        grid-area: Card_img;
        background-position: center;
        background-size: cover;
        
        border-radius: 10px 10px 0px 0px;
        transition: background-size 0.5s ease;
    }

    .Card .Card_text h2 {
        font-size: 24px;
        line-height: 18px;
        font-weight: 700;

        margin-bottom: 5px;
    }
    
    .Card .Card_text p {
        font-size: 12px;
        font-weight: 400;
    }

    .Card .Card_text {
        width: 100%;
        grid-area: Card_text;
        cursor: pointer;
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-left: 10px;

        font-family: "Montserrat", sans-serif;
    }

    .Card_buttons {
        margin-top: 10px;
        border: none;
    }

    .Card_buttons button{
        border: none;
        width: 100px;
        height: 30px;
        border-radius: 5px;
        cursor: pointer;
    }

    @media (min-width: 320px) {
        .Card {
            margin-left: 10px;
        }
    }
</style>

<!-- markup (zero or more items) goes here -->

<div class="Card">
    <div class="Card_img" on:click={goToRides} style="background-image: url({ride.imgBackground});">

    </div>
    <div class="Card_text">
        <h2 on:click={goToRides}>{ride.title}</h2>
        <p on:click={goToRides}>Comienza el {ride.start}</p>

        <div class="Card_buttons">
            <button style="background-color: #53acff;" on:click={() => (goto(`http://localhost:5173/edit_ride/${ride.id}`))}>Edit</button>
            <button style="background-color: #F45B69; z-index: 999" on:click={() => (delRide(ride.id))}>Delete</button>
        </div>
    </div>
</div>