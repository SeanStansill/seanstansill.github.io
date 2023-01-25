<script>
	import Paper, { Title, Content } from '@smui/paper';

	let paperStyle = 'background-color: var(--mdc-theme-background, #f8f8f8);';
</script>

<div>
	<Paper square elevation='4' style={paperStyle}>
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
	<Paper square style={paperStyle}>
		<Title>Mission Statement</Title>
		<Content>
			I made this website because I want to better advertise myself &ndash; my job role is a postgraduate researcher
			but my day-to-day looks more like a researcher/engineer/developer in a start-up. This often gets lost in translation
			due to university jargon and the variation between individual PhD projects.<br/>
			<br/>
			I aim to be at the forefront, building the tools and technologies of tomorrow to better living standards and to reduce
			our impact on the planet. The skills I've developed during my PhD are applicable to any industry; IP awareness, critical
			thinking, problem solving, team work, communication skills, project management and even more technical skills. My 
			personal work ethic are incredibly valuable; I ensure my workflow is as efficient as possible to make sure my 
			energy is being spent on the important stuff, my projects always aim to create value (whether that be value in 
			business, or in important new knowledge/tools in research), my work is always to the highest standard and I own my mistakes. <br/>
			<br/>
			Studying a Masters taught me how to answer tough questions. Completing a PhD taught me how to ask the right questions to create
			value and push boundaries.
		</Content>
	</Paper>
</div>
