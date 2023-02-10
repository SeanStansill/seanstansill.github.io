<script>
    export let image_url;

    // Initialize variable which we will assign to
    // the y location
    let scroll;
</script>

<!-- Bind the variable scroll to the y location -->
<svelte:window bind:scrollY={scroll}/>

<!-- Add the banner-->
<div class='outerEdgeCentred' style='z-index=-1; position:relative;'>
    <!-- style: is a new Svelte feature. Sugar coating for dynamic reactive CSS styling -->
    <img src='{image_url}' alt='Page banner' class='banner_desktop' style:transform={`translate3d(0, ${(scroll * 0.3) - 8}px, 0)`}/>
</div>


<style>
    .banner_desktop {
        width: 100%;
        height:400px;
        object-fit: cover;
        object-position: center 10%;;
        overflow: hidden;
    }
</style>