<script>
	import Paper, { Title, Content } from '@smui/paper';
	import AuthorProfile from '@components/author_profile/author_profile.svelte';
	import { isDark } from '@components/isDark';
	import { isMobile } from '@components/isMobile';

	
	// Customization of SMUI elements
	let paperSizeMobile = 'max-width:95%;';
	let paperSizeDesktop = '';

	$: paperSize = $isMobile ? paperSizeMobile : paperSizeMobile;
	
	
	let paperStyleDark;'background-color: var(--mdc-theme-background, #888888);';
	let paperStyleLight = 'background-color: var(--mdc-theme-background, #f8f8f8);';

	$: paperStyle = $isDark ? paperStyleDark : paperStyleLight;
	// End of customization
	
</script>

<AuthorProfile/>

<div>
	<Paper square elevation='4' style='{paperStyle} {paperSize}'>
		<!-- Does this sound like I'm being mean? -->
		<Title>Under Construction</Title>
		<Content>
			<br />
			Oops! Looks like I haven't built this part of the site yet.
		</Content>
	</Paper>
</div>