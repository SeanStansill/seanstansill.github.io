<script>
    import Fa from 'svelte-fa';
    import { faLinkedin, faGithub, faOrcid } from '@fortawesome/free-brands-svg-icons';
    import List, { Item, Text } from '@smui/list';
	import Button, { Group, Label } from '@smui/button';
    
    const profileWidth =
		'margin-top: 25px; margin-left: 5%; margin-right: 5%; display: flex; justify-content: center; align-items: center;';
</script>

<!-- Add the banner-->
<div style='padding-top: 10px; padding-bottom: 10px;'>
    <a role='button' href='.'>
        <img src='/images/profile_picture.png' alt='my headshot' style='width:30%; margin-top: 10px; display: block; margin: auto;'/>
    </a>

    <Group style={profileWidth}>
        <Button href='https://www.linkedin.com/in/seanstansill/' style='color:dimgrey; flex: 1;' ripple={true}>
            <Label style='font-size:1.2em; text-align: center;'><Fa icon={faLinkedin} scale={1.2} /><br/>LinkedIn</Label>
        </Button>
        <Button href='https://github.com/seanstansill' style='color:dimgrey; flex: 1;' ripple={true}>
            <Label style='font-size:1.2em; text-align: center;'><Fa icon={faGithub} scale={1.2} /><br/>GitHub</Label>
        </Button>
        <Button href='https://orcid.org/0000-0002-4658-6559' style='color:dimgrey; flex: 1;' ripple={true}>
            <Label style='font-size:1.2em; text-align: center;'><Fa icon={faOrcid} scale={1.2} /><br/>Ocrid</Label>
        </Button>
    </Group>
</div>