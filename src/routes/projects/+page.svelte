<script>
	import Paper, { Title, Content } from '@smui/paper';
	import Banner from '@components/banner.svelte';
	import { listen } from 'svelte/internal';

	const image_url = '/images/diy.jpg';
	
	let paperStyle = 'background-color: var(--mdc-theme-background, #f8f8f8);';
</script>

<Banner {image_url}/>

<div>
	<Paper square elevation='4' color='secondary'>
		<Title>Projects</Title>
		<Content>
			This section contains notes on a few of my projects. If it's an open-source coding project,
			there will be a link to the GitHub repository.
		</Content>
	</Paper>
</div>

<!-- Do I want to change these to clickable tiles or accordions or something? -->
<!-- More intuitive to click on the project you'd like to read about -->
<div>
	<Paper square elevation='4'  style={paperStyle}>
		<Title>Atomistic Spin Dynamics</Title>
		<Content>
			Throughout my PhD I've been working on a closed-source atomistic spin dynamics code.
			It is a modern code, highly modular code which is optimized to run on GPUs. I've become
			an expert in scientific computing, algorithm design, and software optimization (among other
			things).<br/>
			<br/>
			I personally designed and implemented a new algorithm to calculate free energy differences which is
			highly parallelisable and optimized to run on GPUs. The new method required new science advances, and
			has over a thousand fold increase in performance over the previous state of the art. It pushes the 
			boundaries of atomistic modelling. The previous method (which can be found <a href='https://www-users.york.ac.uk/~rfle500/resources/paper_7.pdf'>here</a>)
			cannot be parallelised, and only works with Monte Carlo methods which have been largely replaced 
			by dynamical methods (see <a href='https://eprints.whiterose.ac.uk/151412/1/quantum_thermodynamics_of_yig_merged.pdf'>here</a> for an example of why).<br/>
			<br/>
			As well as low level programming, I use Python for data analysis. Visit (jupyter notebooks stuff here, add a pretty magnetism
			picture or something, or code snippets).
		</Content>
	</Paper>
</div>

<div>
	<Paper square elevation='4'  style={paperStyle}>
		<Title>Quantum Computing (TBC)</Title>
		<Content>
			<br />
			I'm currently training to take the IBM Quantum Developer Certification. I expect to take the exam in summer 2023. <br/>
			<br/>
			I've been a user of quantum mechanics since 2015; I studied it during my undergraduate, I used it to derive well known formulae
			in magnetism during my Masters and I regularly use it in my PhD to come up with expressions for material specific dispersion relations
			and calculate expectation values at finite temperature &ndash; even my classical simulations use quantum statistics to calculate
			the strength of stochastic thermal fields (see <a href='https://eprints.whiterose.ac.uk/151412/1/quantum_thermodynamics_of_yig_merged.pdf'>here</a>
			for the original paper). <br/>
			<br/>
			I also understand quantum information and quantum computing very well. I studied the foundations of quantum information during my
			undergraduate and masters. In my undergraduate I learnt how photonics components are used with single photon sources to apply
			different quantum operations on the polarisation of a photon. In my masters, I used learnt about classical information and communication
			theory including:
			<ul>
				<li> Universal computation </li>
				<li> Shannon and Von Neumann entropy </li>
				<li> Quantum circuits using Qiskit </li>
				<li> The density matrix (and decoherence in quantum systems) </li>
				<li> Measurement of multiqubit states </li>
				<li> Algorithms </li>
					<ul>
						<li> Shor's </li>
						<li> Grover's search </li>
						<li> Deutsch's</li>
						<li> Teleportation </li>
						<li> Quantum Hamming code (error correction) </li>
						<li> Quantum key distribution (and how it prevents common classical attacks) </li>	
					</ul>
				<li> The effect of unobserved degrees of freedom </li>
				<li> DiVincenzo's criteria</li>
			</ul>
		</Content>
	</Paper>
</div>