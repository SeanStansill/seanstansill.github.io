<script>
	import Paper, { Title, Content } from '@smui/paper';
	import Banner from '@components/banner.svelte';
	import AuthorProfile from '@components/author_profile.svelte';

	const image_url = '/images/galway_coral_beach4.jpg';
	//const image_url = '/images/brimham_rocks2.jpg';
	
	let paperStyle = 'background-color: var(--mdc-theme-background, #f8f8f8);';
</script>

<Banner {image_url}/>

<div>
	<AuthorProfile/>
</div>

<div class='body_paper'>
	<Paper square elevation='4'  style={paperStyle}>
		<!-- Does this sound like I'm being mean? -->
		<Title>Under Construction</Title>
		<Content>
			<br />
			Oops! Looks like I haven't built this part of the site yet.
		</Content>
	</Paper>
</div>

<style>
	.body_paper {
	width: 40%;
	height:400px;
	display: inline-block;
	padding-left:30%;
	padding-top:0;
	position:relative;
	overflow: visible;
	margin: 0 auto;
	}
</style>