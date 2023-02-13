<script>
	import Accordion, { Panel, Header } from '@smui-extra/accordion';
	import Katex from '@components/math/Katex.svelte';
	import Paper, { Title, Content } from '@smui/paper';
	import Banner from '@components/banner/banner.svelte';
	import { isMobile } from '@components/isMobile';

	const image_url = '/images/blackboard_medium.jpg';

	// Customization of SMUI elements
	let paperSizeMobile = 'width:90%;';
	let paperSizeDesktop = 'width:40%;';

	$: paperSize = $isMobile ? paperSizeMobile : paperSizeDesktop;

	let accordionSizeMobile = 'width:95%;';
	let accordionSizeDesktop = 'width:55%';

	$: accordionSize = $isMobile ? accordionSizeMobile : accordionSizeDesktop;


	let innerAccordionSizeMobile = 'width:100%;';
	let innerAccordionSizeDesktop = 'width:85%';

	$: innerAccordionSize = $isMobile ? innerAccordionSizeMobile : innerAccordionSizeDesktop;
	// End customization



	let Si = `\\mathbf{\\mathrm{S}}_i`;
	let Hi = `\\mathbf{\\mathrm{H}}_i`;
	let muS = `\\frac{1}{\\mu_{s,i}}`;

	let Heff = `\\mathbf{\\mathrm{H}}_i = \\mathbf{\\mathrm{\\xi}}_i - \\frac{1}{\\mu_{s,i}}\\frac{\\partial \\mathcal{H}}{\\partial \\mathbf{\\mathrm{S}}_i}`

	let llg = `\\frac{1}{\\mu_{s,i}}\\frac{\\partial {\\mathbf{\\mathrm{S}}_i}}{\\partial t} = - |\\gamma|
    \\left[ \\mathbf{\\mathrm{S}}_i \\times \\mathbf{\\mathrm{H}}_i + \\alpha \\mathbf{\\mathrm{S}}_i
    \\times \\left(\\mathbf{\\mathrm{S}}_i \\times \\mathbf{\\mathrm{H}}_i\\right) \\right]`;

	let hamiltonian = `\\mathcal{H} = -\\frac{1}{2} \\sum_{i,j} \\mathbf{\\mathrm{S}}_i \\cdot J_{ij} \\cdot \\mathbf{\\mathrm{S}}_j -\\sum_{i} K_i \\left( \\mathbf{\\mathrm{S}}_i \\cdot \\mathrm{\\hat{z}} \\right)^2`;

	// Here we want to initialize bool which we
	// pass to accordion to open it when clicking a link
	let llg_open = false;
	let hamiltonian_open = false;
</script>

<Banner {image_url}/>

<div style= 'margin-top: 10px'>
	<Paper square elevation='4' style='{paperSize} z-index:0;' color='secondary'>
		<Title>TL;DR</Title>
		<Content>
			My PhD is at the intersection of computer science, maths, and physics.
			I create, maintain and develop computer programs that simulate magnetic materials at the atomic level by solving 
			systems of stochastic differential equations (sometimes millions simultaneously). These are deployed on HPC 
			systems using CPU and GPU resources. I'm highly experienced in C++ and CUDA for production simulations,
			and high-performance Python for prototyping new algorithms, signal processing, symbolic maths, and data
			analysis and visualisation. I also use high level mathematics, physics and quantum mechanics to develop
			new highly efficient algorithms and create new theories.<br/>
			<br/>
			<!-- Nested elements should not vary in size -->
			<Accordion style='{innerAccordionSize}'>
				<Panel style='{innerAccordionSize}'>
					<Header>Software Stack</Header>
					<Content>
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
		</Content>
		</Paper>
</div>


<div>
	<Paper square elevation='4' style='{paperSize}'>
		<!-- Does this sound like I'm being mean? -->
		<Title>Magnetism for non-scientists</Title>
		<Content>
			<br />
			Like all materials, magnets are made of atoms. What makes a magnet different from other materials is
			that the electrons that surround the nuclei 'line up'. We normally think of electrons as tiny spheres,
			so it's counterintuitive that there is anything to align. But, due to quantum mechanics, these
			electrons have a property called spin.<br/>
			<br/>
			Outside of quantum mechanics, spin is vector &ndash; you can think of it as an arrow pointing in
			any direction with a fixed length. The spin of electrons in (anti-)ferromagnetic materials point
			(anti-)parallel to other electrons. So in a normal bar magnet &ndash; which is ferromagnetic &ndash; all
			of the electrons are pointing in the same direction. We can swap which way these spin vectors are
			pointing by applying an electric current, or by applying a magnetic field to the bar magnet. This
			is how magnetic hard drives operate; tiny magnetic regions are switched from up (<code>0</code
			>) to down (<code>1</code>) with electric currents.<br />
			<br/>
			To make more efficient memory technologies, and to create better optimized hardware for machine
			learning models, we need to understand magnetic materials at the atomic level and how that affects
			devices. Trying to measure single atoms in a bar magnet is hard, even for the best labs in the
			world. So, scientists (including me) are trying to model them using computer programs.<br />
			<br/>
			Physicists broadly have two different approaches to this problem. Some study the most fundamental
			quantum mechanical problems using techniques like quantum monte carlo but these are limited to
			~100 atoms and it is hard to use on electrical conductors. Others study much larger systems using 
			finite element and finite difference methods which can be recreated in a lab. These methods can be 
			very good at explaining qualitatively what happens in specific experiments. But, neither of these 
			methods alone are good at predicting the properties of magnets that would be used for memory or logic devices
			in a lab &ndash; especially when they're heated up or have lots of impurities.<br />
			<br/>
			My PhD research uses simulations that connect these two approaches; I model millions of individual
			magnetic moments using an equation of motion derived from quantum mechanics, but the moments are
			classical vectors which means the simulation can run very efficiently on GPUs. Atomistic modelling
			is the only way to include temperature by using random numbers (often called a stochastic
			process), which means these simulations can predict finite temperature behaviour very accurately.<br />
			<br/>
			The equation of motion my simulations solve is the <a href='#llg' on:click={() => (llg_open = true)}>Landau-Liftshiz equation</a>.
			Each magnetic moment has its own equation (denoted <Katex equation='i'/>), and which is coupled to others via the magnetic
			interactions.
		</Content>
	</Paper>
</div>
<div>
	<a id='llg'>
		<Accordion style='{accordionSize}'>
			<Panel bind:open={llg_open} style='{accordionSize}'>
				<Header>Landau-Liftshiz Equation</Header>
				<Content>
					<Katex equation={llg} displayMode/>
					where <Katex equation={Si}/> is the classical spin vector for the <Katex equation={'i'}/> spin, <Katex equation={muS}/>
					is the spin magnetic moment of site <Katex equation={'i'}/>, <Katex equation={Hi}/> is the effective magnetic field 
					(<Katex equation={Heff}/>) which contains information about the magnetic interactions (<Katex equation={`\\mathbf{\\mathrm{\\mathcal{H}}}`}/>)
					 and thermal fluctuations (<Katex equation={`\\mathbf{\\mathrm{\\xi}}_i`}/>), <Katex equation='\gamma'/> is the gyromagnetic ratio of an electron,
					and <Katex equation='\alpha'/> is the dimensionless damping parameter. For a detailed discussion on this equation see 
					<a href='https://arxiv.org/pdf/1505.07367.pdf'>here</a>.
				</Content>
			</Panel>
		</Accordion>
	</a>
</div>
<div>
	<Paper square elevation='4' style='{paperSize}'>
	<Content>
		In maths, this problem is called a system of linear differential equations. Small systems can be solved analytically (by hand using algebra)
		but here the system is too large, and it is <em>stochastic</em> which means it must be solved numerically (approximate solutions using numbers instead
		of symbols) on a computer. <br/>
		<br/>
		These systems are too big even for standard numerical software packages used by mathematicians (Mathematica, Maple, etc).
		Instead, we must create our own custom software using high level computer science principles to optimise the calculations, and we use modern software
		development workflows to ensure it is rigorously tested, and development can happen quickly. <br/>
		<br/>
		The material specific term in the above equation is the effective, local field. We call it an <em>effective</em> field because it contains all the energy terms
		, but it is written as a field (even if the energy term isn't an applied field). This field is <em>local</em> because the value of the field is different for each spin
		due to the interactions with the spins in its vicinity. The energy is written as a Hamiltonian (a mathematical construction for the total energy). Below is an example 
		<a href='#hamiltonian' on:click={() => (hamiltonian_open = true)}>Hamiltonian</a> for a fictitious ferromagnet.
	</Content>
	</Paper>
</div>
<div>
	<a id='hamiltonian'>
		<Accordion style='{accordionSize}'>
			<Panel bind:open={hamiltonian_open} style='{accordionSize}'>
				<Header>Example Hamiltonian</Header>
				<Content>
					<Katex equation={hamiltonian} displayMode/>
					where <Katex equation={'J_{ij}'}/> is the exchange constant between spin <Katex equation={'i'}/> and spin <Katex equation={'j'}/>, <Katex equation={'J > 0'}/> corresponds with ferromagnetic coupling
					(parallel alignment) and <Katex equation={'J < 0'}/> is antiferromagnetic coupling (anti-parallel alignment), <Katex equation={'K_i'}/> is the anisotropy constant for the <Katex equation={'i'}/>-th spin.
					<Katex equation={'K > 0'}/> means spins prefer to point along the <Katex equation={'z'}/>-direction and <Katex equation={'K < 0'}/> means spins prefer to lie in the <Katex equation={'xy'}/>-plane.
				</Content>
			</Panel>
		</Accordion>
	</a>
</div>