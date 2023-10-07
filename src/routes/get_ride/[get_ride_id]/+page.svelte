<script lang="ts">
    import HeaderGetRide from '$lib/components/get_rides_components/HeaderGetRide.svelte';
    import BodyGetRides from '$lib/components/get_rides_components/BodyGetRides.svelte';

    export let data
    import { page } from '$app/stores';

    const searchedRide = data.data.find((e:any) => (e.id == $page.params.get_ride_id))
</script>

<style>
    .container {
        position: relative;
    }
</style>

<!-- markup (zero or more items) goes here -->

<div class="container">
    <HeaderGetRide
        imgBackground={searchedRide.imgBackground}
        title={searchedRide.title}
        start={searchedRide.start}
    >
    </HeaderGetRide>
    <BodyGetRides></BodyGetRides>
</div>

