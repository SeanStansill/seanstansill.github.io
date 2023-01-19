<script>
	import NavBar from '@components/navbar.svelte';
	import Paper, { Title, Content } from '@smui/paper';

	let paperStyle = 'background-color: var(--mdc-theme-background, #f8f8f8);';
</script>

<NavBar />
<div>
	<!-- color='secondary' -->
	<Paper square elevation="4" style={paperStyle}>
		<Title>The Website</Title>
		<Content>
			This website was built using the following tech stack:
			<ul>
				<li>Svelte</li>
				<li>MathJax</li>
				<li>Vite</li>
				<li>Sveltekit</li>
				<li>SCSS</li>
			</ul>
			Svelte Material UI&ndash;a component library&ndash;was also used. The site is fully accessible
			and reactive to the device visiting the page. The site has been built with the environment in mind&ndash;only
			the most lightweight and efficient technologies have been used.<br />
			<br />
			See below to check out how much CO<sub>2</sub> is generated per visit to this site!
		</Content>
	</Paper>
</div>

<div class="innerEdge" style="margin: 0 auto 24px; margin-top:24px;">
	<div id="wcb" class="carbonbadge wcb" />
	<script src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js" defer></script>
</div>

<div>
	<!-- color='secondary' -->
	<Paper square style={paperStyle}>
		<Title>The Website</Title>
		<Content>
			By adding the <code class="inverseCode">square</code> property, the paper gains sharper corners
			and can be used to intimidate foes.
		</Content>
	</Paper>
</div>
