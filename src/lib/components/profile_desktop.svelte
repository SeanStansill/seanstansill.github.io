<script>
    import Fa from 'svelte-fa';
    import { faLinkedin, faGithub, faOrcid } from '@fortawesome/free-brands-svg-icons';
    import List, { Item, Text } from '@smui/list';
    import Button, { Label } from '@smui/button';
    

    let scroll;
    let yOrigin = 500;
</script>

<!-- Bind the variable scroll to the y location -->
<svelte:window bind:scrollY={scroll}/>

<!-- Add the banner-->
<div class='leftMarginBox'>
    <!-- style: is a new Svelte feature. Sugar coating for dynamic reactive CSS styling -->
    <div>
        <img src='/images/profile_picture_tiny.png' alt='my profile picture' style='width:100%; height:100%; display: block; object-fit: fill;'/>
    </div>
    
    <div>
        <List>
            <a href="https://www.linkedin.com/in/seanstansill/" style='color:black; text-decoration: none!important;'><Item><Fa icon={faLinkedin} scale={1.2} /> &nbsp; LinkedIn</Item></a>
            <a href="https://github.com/seanstansill" style='color:black; text-decoration: none!important;'><Item><Fa icon={faGithub} scale={1.2} /> &nbsp; GitHub</Item></a>
            <a href="https://orcid.org/0000-0002-4658-6559" style='color:black; text-decoration: none!important;'><Item><Fa icon={faOrcid} scale={1.2} /> &nbsp; Ocrid</Item></a>
        </List>
    </div>
</div>


<style>
    .leftMarginBox {
        margin-left: 18%;
        width: 9%;  
        padding-right: 10px;
        position: fixed;
        overflow: hidden;
        display: block;
        z-index:1;
    }
</style>