<script>
	import Paper, { Title, Content } from '@smui/paper';
	import AuthorProfile from '@components/author_profile/author_profile.svelte';
	import { isDark } from '@components/isDark';
	import { isMobile } from '@components/isMobile';

	
	// Customization of SMUI elements
	let paperSizeMobile = 'width:90%;';
	let paperSizeDesktop = 'width:40%;';

	$: paperSize = $isMobile ? paperSizeMobile : paperSizeMobile;
	// End of customization
	
</script>

<AuthorProfile/>

<div>
	<Paper square elevation='4' style='{paperSize}'>
		<!-- Does this sound like I'm being mean? -->
		<Title>Under Construction</Title>
		<Content>
			<br />
			Oops! Looks like I haven't built this part of the site yet.
		</Content>
	</Paper>
</div>