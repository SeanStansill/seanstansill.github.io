<script>
    export let image_url;
</script>

<div class='background_mobile' style='background-image: url({image_url})'></div>

<style>
    .background_mobile {
        width:100%;
        height:400px;
        background-attachment: fixed; 
        background-position: center 0%; 
        background-repeat: no-repeat; 
        background-size: contain;
    }
</style>