<script lang="ts">
    export let ride

    import {delRide} from "../context/store"
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
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-left: 10px;

        font-family: "Montserrat", sans-serif;
    }

    .Card_buttons {
        margin-top: 10px;
    }
</style>

<!-- markup (zero or more items) goes here -->

<div class="Card">
    <div class="Card_img" style="background-image: url({ride.imgBackground});">

    </div>
    <div class="Card_text">
        <h2>{ride.title}</h2>
        <p>Comienza el {ride.start}</p>

        <div class="Card_buttons">
            <button>Edit</button>
            <button on:click={() => (delRide(ride.id))}>Delete</button>
        </div>
    </div>
</div>