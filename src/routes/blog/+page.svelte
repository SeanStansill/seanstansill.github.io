<script>
	import Paper, { Title, Content } from '@smui/paper';
	import AuthorProfile from '@components/author_profile/author_profile.svelte';
	import { isDark } from '@components/isDark';
	
	
	let paperStyleDark;'background-color: var(--mdc-theme-background, #888888);';
	let paperStyleLight = 'background-color: var(--mdc-theme-background, #f8f8f8);';

	let paperStyle = $isDark ? paperStyleDark : paperStyleLight;
</script>

<AuthorProfile/>

<div>
	<Paper square elevation='4'  style={paperStyle}>
		<!-- Does this sound like I'm being mean? -->
		<Title>Under Construction</Title>
		<Content>
			<br />
			Oops! Looks like I haven't built this part of the site yet.
		</Content>
	</Paper>
</div>