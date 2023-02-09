<script>
    import Fa from 'svelte-fa';
    import { faLinkedin, faGithub, faOrcid } from '@fortawesome/free-brands-svg-icons';
    import List, { Item, Text } from '@smui/list';
	import Button, { Group, Label } from '@smui/button';
    
    const navbarWidth =
		'margin-top: 25px; margin-left: 20%; margin-right: 20%; display: flex; justify-content: center; align-items: center;';
</script>

<!-- Add the banner-->
<div>
    <a role='button' href='.'>
        <img src='/images/profile_picture_small.png' alt='my headshot' style='width:20%; margin-top: 10px; display: block; margin: auto;'/>
    </a>

    <Group style={navbarWidth}>
        <Button href='https://www.linkedin.com/in/seanstansill/' style='color:dimgrey; flex-grow: 1;' ripple={true}>
            <Label><Fa icon={faLinkedin} scale={1.2} /> &nbsp; LinkedIn</Label>
        </Button>
        <Button href='https://github.com/seanstansill' style='color:dimgrey; flex-grow: 1;' ripple={true}>
            <Label><Fa icon={faGithub} scale={1.2} /> &nbsp; GitHub</Label>
        </Button>
        <Button href='https://orcid.org/0000-0002-4658-6559' style='color:dimgrey; flex-grow: 1;' ripple={true}>
            <Label><Fa icon={faOrcid} scale={1.2} /> &nbsp; Ocrid</Label>
        </Button>
    </Group>
</div>