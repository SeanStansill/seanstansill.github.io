<script>
	import Accordion, { Panel, Header } from '@smui-extra/accordion';
	import Katex from '@components/Katex.svelte';
	import Paper, { Title, Content } from '@smui/paper';
	import Math from '@components/Math.svelte'
	import Banner from '@components/banner.svelte';

	const image_url = '/images/blackboard_medium.jpg';
	//const image_url = '/images/hdd_medium_cropped.jpg';

	let paperStyle = 'background-color: var(--mdc-theme-background, #f8f8f8);';

	let testEq = `\\begin{gather}E = {mc^2} \\\\
                \\langle n \\rangle_{T} = \\int \\frac{\\epsilon_{k}}{\\mathrm{e}^{\\epsilon_{k} / k_B T} - 1} dk
                \\end{gather}`;

	let llg = `\\frac{\\partial \\mathbf{\\mathrm{S}}_i}{\\partial t} = - |\\gamma|
    \\left[ \\mathbf{\\mathrm{S}}_i \\times \\mathbf{\\mathrm{H}}_i + \\alpha \\mathbf{\\mathrm{S}}_i
    \\times \\left(\\mathbf{\\mathrm{S}}_i \\times \\mathbf{\\mathrm{H}}_i\\right) \\right]`;
</script>

<Banner {image_url}/>

<div>
	<Accordion>
		<Panel>
			<Header>TL;DR</Header>
			<Content>
				My PhD is at the intersection of computer science, maths, and physics.
				I create, maintain and develop computer programs that simulate magnetic materials at the atomic level and are
				deployed on HPC systems using CPU and GPU resources. I'm highly experienced in C++ and CUDA for production simulations,
				and high-performance Python for prototyping new algorithms, signal processing, symbolic maths, and data
				analysis and visualisation. I also use high level mathematics, physics and quantum mechanics to develop
				new highly efficient algorithms and create new theories.<br/>
				<br/>
				This is my software stack:
				<ul>
					<li> C++ </li>
					<li> CUDA </li>
					<li> CMake </li>
					<li> BASH </li>
					<li> Python: </li>
						<ul>
							<li> Numpy </li>
							<li> Matplotlib </li>
							<li> Pandas </li>
							<li> SciPy </li>
							<li> lmfit </li>
							<li> Numba </li>
							<li> SymPy </li>
							<li> Glob </li>
							<li> Cython </li>
							<li> h5 </li>
						</ul>
					<li> Vagrant </li>
					<li> Job schedulers (SGE and Slurm) </li>
				</ul>
			</Content>
		</Panel>
	</Accordion>
</div>


<div style= 'margin-top: 10px'>
	<Paper square elevation='4'  style={paperStyle}>
		<!-- Does this sound like I'm being mean? -->
		<Title>Magnetism for non-scientists</Title>
		<Content>
			<br />
			Like all materials, magnets are made of atoms. What sets magnets apart from other materials is
			that the electrons that surround the nuclei 'line up'. We normally think of electrons as tiny spheres,
			so it's counterintuitive that there is anything to align. But, due to quantum mechanics, these
			electrons have a property called spin.<br/>
			<br/>
			Outside of quantum mechanics, spin is vector&ndash;you can think of it as an arrow pointing in
			any direction with a fixed length. The spin of electrons in (anti-)ferromagnets materials point
			(anti-)parallel to other electrons. So in a normal bar magnet&ndash;which is ferromagnetic&ndash;all
			of the electrons are pointing in the same direction. We can swap which way these spin vectors are
			pointing by applying an electric current, or by applying a magnetic field to the bar magnet. This
			is how magnetic hard drives operate; tiny magnetic regions are switched from up (<code>0</code
			>) to down (<code>1</code>) with electric currents.<br />
			<br/>
			To make more efficient memory technologies, and to create better optimized hardware for machine
			learning models, we need to understand magnetic materials at the atomic level and how that affects
			devices. Trying to measure single atoms in a bar magnet is hard, even for the best labs in the
			work so scientists (including me) are trying to model them using computer programs.<br />
			<br/>
			Scientists broadly have two different approaches to this problem. Some study the most fundamental
			quantum mechanical problems using techniques like quantum monte carlo but these are limited to
			~100 atoms. Others study much larger systems using finite element and finite difference methods
			which can be recreated in a lab. Neither of these methods are good at predicting the properties
			of lab-made magnets that would be used for memory or logic devices&ndash;especially when they're
			heated up or have lots of impurities.<br />
			<br/>
			My PhD research uses simulations that connect these two approaches; I model millions of individual
			magnetic moments using an equation of motion derived from quantum mechanics, but the moments are
			classical vectors which means the simulation can run very efficiently on GPUs. Atomistic modelling
			is the only way to naturally include temperature, which means these simulations can predict finite
			temperature behaviour very accurately.<br />
			<br/>
			The equation of motion is called the Landau-Liftshiz equation. Each magnetic moment has its own
			equation (denoted <Katex equation='i'/>), and which is coupled to others via the magnetic
			interactions.
		</Content>
	</Paper>
</div>
<div>
	<Accordion>
		<Panel>
			<Header>Landau-Liftshiz Equation</Header>
			<Content>
				<Katex equation={llg} displayMode/>
			</Content>
		</Panel>
	</Accordion>
</div>

<!-- Test Accordion for KaTeX -->
<div>
	<Accordion>
		<Panel>
			<Header>Einstein is great</Header>
			<Content>
				<Katex equation={testEq} displayMode/>
			</Content>
		</Panel>
	</Accordion>
</div>

<style>
	#backgound { 
		background-image: url(./images/grad.gif); 
		background-attachment: fixed; 

		/* 
		  the three following items below do the following: 
			a) fix the width and height of the containing div
			   to be smaller than the width and height of the content.
			b) we set the overflow style so that when the content is
			   bigger than the containing element scroll bars appear
			   to allow users to scroll the element contents. 
		*/
		height:200px; 
		width:300px; 
		overflow:scroll; }    
</style>