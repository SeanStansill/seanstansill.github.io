<script>
	import Paper, { Title, Content } from '@smui/paper';
    import List, { Item } from '@smui/list';
	import Banner from '@components/banner/banner.svelte';
	import AuthorProfile from '@components/author_profile/author_profile.svelte';
    import Fa from 'svelte-fa';
    import { faPython, faSquareJs } from '@fortawesome/free-brands-svg-icons';
    import { faMicrochip, faMagnet, faBrain, faCode, faTerminal, faPieChart, faPersonChalkboard } from '@fortawesome/free-solid-svg-icons';
	import { isMobile } from '@components/isMobile';

	const image_url = '/images/galway_coral_beach4.jpg';
	//const image_url = '/images/brimham_rocks2.jpg';


	// Customization of SMUI elements
	let paperSizeMobile = 'width:90%;';
	let paperSizeDesktop = 'width:40%;';

	$: paperSize = $isMobile ? paperSizeMobile : paperSizeDesktop;
	// End customization

	
	let iconsAndLabels = [[faMicrochip, 'Scientist'],[faTerminal, 'Programmer'],[faPersonChalkboard, 'Teacher']];
</script>

<Banner {image_url}/>
<div style='z-index:3'>
<AuthorProfile/>
</div>

<div class='mdc-typography--button' style='font-size:36px;'>
	<Paper  square elevation='4'  style='{paperSize} text-align:center;'>
		<strong>Sean Stansill</strong>
	</Paper>
</div>



<Paper  square elevation='1'  style='{paperSize} text-align:center;'>
	<div style='display:flex;'>

		<!-- Loop through each item in the nav-bar -->
		{#each iconsAndLabels as item}
			<div class='icon_container'>
				<br/>
				<Fa icon={item[0]} scale={3.0}/>
				<br/>
				<br/>
				<br/>
				<div class="mdc-typography--subtitle1" style='font-size:18px;'>{item[1]}</div>
				<br/>
			</div>
		{/each}
	</div>
</Paper>

<style>
	.icon_container {
	display: inline;
	position:relative;
	margin-left: 0 auto;
	flex-grow: 1;
	text-align: center;
	flex: 1 1 0px;
	overflow: visible;
	}
</style>