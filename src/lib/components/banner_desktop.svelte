<script>
    export let image_url;

    let scroll;
</script>

<svelte:window bind:scrollY={scroll}/>

<div class='outerEdgeCentred' style='background-color:white; z-index=-1; position:relative;'>
    <img src='{image_url}' alt='Page banner' class='banner_desktop' style:transform={`translate3d(0, ${scroll * 0.3}px, 0)`}/>
</div>


<style>
    .background_desktop {
        width: 100%;
        height:400px;
        background-attachment: fixed; 
        background-position: center 0%;
        background-repeat: no-repeat; 
        background-size: contain;
        overflow: hidden;
    }
    .banner_desktop {
        width: 100%;
        height:400px;
        object-fit: cover;
        object-position: center 0%;;
        overflow: hidden;
    }
</style>