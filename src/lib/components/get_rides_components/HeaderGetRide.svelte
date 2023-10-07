<script lang="ts">
    export let imgBackground:string
    export let title:string
    export let start:string

    import NavRides from "../Nav_rides.svelte";
</script>

<style>
    :global(*) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .HeaderGetRide {
        height: 45vh;
        background-position: 0 50%;
        background-size: cover;

        display: flex;
        align-items: center;
        

        border-radius: 10px 10px;
    }

    .HeaderGetRide_text h1{
        font-family: "Montserrat", sans-serif;
        text-shadow: 4px 2px 17px rgba(0,0,0,0.56);
        color: #ffffff;
    }
    
    .HeaderGetRide_text p{
        text-shadow: 4px 2px 17px rgba(0,0,0,0.56);
        color: #ffffffb6;
    }
    
    .HeaderGetRide_text{
        font-family: "Montserrat", sans-serif;
        margin-left: 10px;
        
    }
</style>

<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

<div class="HeaderGetRide" style="background-image: url({imgBackground})">
    <NavRides></NavRides>

    <div class="HeaderGetRide_text">
        <h1 data-aos="fade-up" data-aos-duration="500">{title}</h1>
        <p data-aos="fade-up" data-aos-duration="500">{start}</p>
    </div>
</div>