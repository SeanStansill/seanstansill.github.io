<script>
	import Paper, { Title, Content } from '@smui/paper';
	import Banner from '@components/banner/banner.svelte';
	import AuthorProfile from '@components/author_profile/author_profile.svelte';
	import { isMobile } from '@components/isMobile';

	const image_url = '/images/diy.jpg';

	// Customization of SMUI elements
	let paperSizeMobile = 'width:90%;';
	let paperSizeDesktop = 'width:40%;';

	$: paperSize = $isMobile ? paperSizeMobile : paperSizeDesktop;
	// End customization

</script>

<Banner {image_url}/>
<AuthorProfile/>

<div>
	<!-- Don't style this like the others. Change color to secondary-->
	<Paper square elevation='4' style='{paperSize}' color='secondary'>
		<Title>Projects</Title>
		<Content>
			This section contains notes on a few of my projects. You can find my open source projects on my GitHub!
		</Content>
	</Paper>
</div>

<!-- Do I want to change these to clickable tiles or accordions or something? -->
<!-- More intuitive to click on the project you'd like to read about -->
<div>
	<Paper square elevation='4' style='{paperSize}'>
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
			As well as low level programming, I use Python for data analysis. Visit 
			<!-- (jupyter notebooks stuff here, add a pretty magnetism picture or something, or code snippets). -->
			<br/>
			<br/>
			Below are some links to some mathematical derivations I've done during my PhD:
			<ul>
				<li><a href='/docs/NiOAnisotropyScalingDerivation.pdf'>Poisson summation of the discrete dipole interaction</a></li>
			</ul>
		</Content>
	</Paper>
</div>

<div>
	<Paper square elevation='4' style={paperSize}>
		<Title>Quantum Computing (TBC)</Title>
		<Content>
			<br />
			I'm currently training to take the <a href='https://www.ibm.com/blogs/research/2021/03/quantum-developer-certification/'>IBM Quantum Developer Certification</a>.
			I expect to take the exam in summer 2023. <br/>
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

<div>
	<Paper square elevation='4' style={paperSize}>
		<Title>Programming</Title>
		<Content>
			<br />
			Aside from scientific computing, I have a range of personal projects as well. Most of the associated GitHub repos are private, but I've listed some of the more interesting
			ones here:
			<ul>
				<li>A stock screener written in Python and uses my own algorithms to determine the value of an asset.</li>
				<li>Solutions to quantum problems using the quantum Python libraries Qiskit and Q#.</li>
				<li>A web3 app written in Rust.</li>
			</ul>
			I love using programming as a tool to make useful applications that automate tasks, scale calculations beyond what is humanly capable, and creating minimalist and intuitive visualisations and user interfaces. <br/>
			<br/>
			Here are some of the tools and programming languages I've used to make projects:
			<ul>
				<!-- Add Fontawesome icons here -->
				<li>C++</li>
				<li>CUDA</li>
				<li>Python</li>
				<li>Git</li>
				<li>Rust</li>
				<li>Svelte</li>
				<li>BASH</li>
				<li>CMake</li>
			</ul>
		</Content>
	</Paper>
</div>