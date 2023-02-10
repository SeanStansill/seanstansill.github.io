<script>
	import Paper, { Title, Content } from '@smui/paper';
	import { isDark } from '@components/isDark';
	import Carbonbadge from "svelte-carbonbadge";

	
	let paperStyleDark;'background-color: var(--mdc-theme-background, #888888);';
	let paperStyleLight = 'background-color: var(--mdc-theme-background, #f8f8f8);';

	let paperStyle = $isDark ? paperStyleDark : paperStyleLight;
	
</script>

<div>
	<Paper square elevation='4' style={paperStyle}>
		<Title>The Website</Title>
		<Content>
			This website was built using the following tech stack:
			<ul>
				<li>Svelte</li>
				<li>KaTeX</li>
				<li>Vite</li>
				<li>Sveltekit</li>
				<li>SCSS</li>
			</ul>
			Svelte Material UI&ndash;a component library&ndash;was also used. The site is accessible (even the maths!)
			and reactive to the device visiting the page. Scientific literature has been cited throughout the site;
			all links are open-access versions of the publications for accessibility.<br/>
			<br/>
			This site has been built with the environment in mind&ndash;only the most lightweight and efficient 
			technologies have been used, and media has been heavily optimised. See below to check out how much 
			CO<sub>2</sub> is generated per visit to this site!
		</Content>
	</Paper>
</div>

<div class='innerEdge' style='margin: 0 auto 24px; margin-top:24px;'>
	<Carbonbadge/>
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
			<strong>Studying a Masters taught me how to answer tough questions. Completing a PhD taught me how to ask the right questions to create
			value and push boundaries.</strong>
		</Content>
	</Paper>
</div>
