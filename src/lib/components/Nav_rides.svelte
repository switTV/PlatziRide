<script>
    import ButtonBack from "./ButtonBack.svelte";
</script>

<style>
    .Nav_rides {
        width: 100vw;
        height: 80px;
        background: #0d3b66;
        background: linear-gradient(180deg, #0d3b66 0%, #9ed8db00 100%);

        position: absolute;
        top: 0;

        display: flex;
        align-items: center;
    }
</style>

<!-- markup (zero or more items) goes here -->

<div class="Nav_rides">
    <div class="HeaderGetRide_back">
        <ButtonBack></ButtonBack>
    </div>
</div>