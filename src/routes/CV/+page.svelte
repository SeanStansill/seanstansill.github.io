<script>
    import Fa from 'svelte-fa';
    import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
	import Paper, { Title, Content } from '@smui/paper';
	import { isDark } from '@components/isDark';
	import { isMobile } from '@components/isMobile';

	// Customization of SMUI elements
	let paperSizeMobile = 'max-width:95%;';
	let paperSizeDesktop = '';

	$: paperSize = $isMobile ? paperSizeMobile : paperSizeMobile;

	let iconStyle;

    let iconStyleDark = 'color:white;';
    let iconStyleLight = 'color:black;';

	$: iconStyle = $isDark ? iconStyleDark : iconStyleLight;
	
	let paperStyleDark;'background-color: var(--mdc-theme-background, #888888);';
	let paperStyleLight = 'background-color: var(--mdc-theme-background, #f8f8f8);';

	$: paperStyle = $isDark ? paperStyleDark : paperStyleLight;
	// End of customization	

</script>

<div>
	<Paper square elevation='4'  style='{paperStyle} {paperSize}'>
		<!-- Does this sound like I'm being mean? -->
		<Title>Under Construction</Title>
		<Content>
			<br />
			Oops! Looks like I haven't built this part of the site yet. In the meantime, 
			check out my LinkedIn <a href='https://www.linkedin.com/in/seanstansill/' style={iconStyle}><Fa icon={faLinkedin} scale={1.2} /></a>&nbsp;!
		</Content>
	</Paper>
</div>