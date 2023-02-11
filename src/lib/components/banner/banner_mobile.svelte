<script>
    export let image_url;

    let scroll;
</script>

<svelte:window bind:scrollY={scroll}/>

<!-- Add the banner-->

<div style='z-index=-1; position:relative;'>
    <!-- style: is a new Svelte feature. Sugar coating for dynamic reactive CSS styling -->
    <img src='{image_url}' alt='Page banner' class='banner_mobile' style:transform={`translate3d(0, ${scroll * 0.5}px, 0)`}/>
</div>

<style>
    .banner_mobile {
        width: 100%;
        max-height:200px;
        position: relative;
        object-fit: cover;
        object-position: center 15%;;
        overflow: hidden;
    }
</style>