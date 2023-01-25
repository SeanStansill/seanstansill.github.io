<script>
    export let image_url;

    let scroll;
</script>

<div class='outerEdgeCentred'>
    <div class='background_desktop' style='background-image: url({image_url})' style:transform={`translate3d(0, ${scroll * -0.8}px, 0)`}/>
</div>


<style>
    .background_desktop {
        width: 100%;
        height:400px;
        background-attachment: fixed; 
        background-position: center 0%;
        background-repeat: no-repeat; 
        background-size: contain;
    }
</style>