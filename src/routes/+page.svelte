<script>
	import Paper, { Title, Content } from '@smui/paper';
	import Banner from '@components/banner.svelte';

	const image_url = '/images/galway_coral_beach4.jpg';
	//const image_url = '/images/brimham_rocks2.jpg';
	
	let paperStyle = 'background-color: var(--mdc-theme-background, #f8f8f8);';
</script>

<Banner {image_url}/>

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
