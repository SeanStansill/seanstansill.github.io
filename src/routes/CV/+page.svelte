<script>
	import Banner from '@components/banner/banner.svelte';
    import Fa from 'svelte-fa';
    import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
	import Paper, { Title, Content } from '@smui/paper';
	import { isDark } from '@components/isDark';
	import { isMobile } from '@components/isMobile';

	// Customization of SMUI elements
	let paperSizeMobile = 'width:90%;';
	let paperSizeDesktop = 'width:40%;';

	$: paperSize = $isMobile ? paperSizeMobile : paperSizeDesktop;

	$: iconStyle = $isDark ? 'color:white;' : 'color:black;';

	let urlLeedsDark = '/images/leedsLogoWhite.svg';
	let urlLeedsLight = '/images/leedsLogoBlack.svg';

	$: urlLeeds = $isDark ? urlLeedsDark : urlLeedsLight;

	let urlKyotoDark = '/images/kyotoLogoWhite.svg';
	let urlKyotoLight = '/images/kyotoLogoBlack.svg';
	
	$: urlKyoto = $isDark ? urlKyotoDark : urlKyotoLight;

	$: logoSize = $isMobile ? '60px' : '80px';

	$: fontSize = $isMobile ? 'padding-left:4px; line-height:var(--mdc-typography-body1-line-height, 1rem); font-size:0.75em;' : 'font-size:1em;';
	$: MPHYSfontSize = $isMobile ? 'padding-left:4px; line-height:var(--mdc-typography-body1-line-height, 1rem); font-size:0.7em;' : 'font-size:1em;';
	
	// End of customization	

	const image_url = '/images/pencilsSmall.png';

</script>

<Banner {image_url}/>

<div>
	<Paper square elevation='4'  style='{paperSize} '>
		<Title>Experience</Title>
		<Content>
			<!-- PhD -->
			<div class='ExperienceContainer'>
				<div class='logoBox'>
					<a href='https://condensed-matter.leeds.ac.uk/'><img src={urlLeeds} width={logoSize} alt='The University of Leeds logo'/></a>
				</div> 
				
				<div style='width:90%; margin:0 !important; {fontSize}'>
					<h2 style='margin:0;'>PhD Computational Physics</h2>
					<h3 style='margin:0;'>University of Leeds</h3> 
					<p style='margin:0;'>September 2019 - Present</p>
				</div>
			</div>

			<!-- Kyoto -->
			<div class='ExperienceContainer'>
				<div class='logoBox'>
					<a href='https://www.t.kyoto-u.ac.jp/en/divisions/departments/mc'><img src={urlKyoto} width={logoSize} alt='The University of Kyoto logo'/></a>
				</div> 
				
				<div style='width:90%; margin:0 !important; {fontSize}'>
					<h2 style='margin:0 !important;'>JSPS Research Fellow</h2>
					<h3 style='margin:0 !important;'>University of Kyoto</h3> 
					<p style='margin:0 !important;'>July 2023 - September 2023</p>
				</div>
			</div>
			
		</Content>
	</Paper>
</div>

<div>
	<Paper square elevation='4' style={paperSize}>
	<Title>Education</Title>
	<Content>
		<!-- MPhys -->
		<div class='ExperienceContainer'>
			<div class='logoBox'>
				<a href='https://courses.leeds.ac.uk/f400/theoretical-physics-mphys-bsc'><img src={urlLeeds} width={logoSize} alt='The University of Leeds logo'/></a>
			</div> 
			
			<div style='width:90%; max-height:80px; margin:0 !important; {MPHYSfontSize}'>
				<a style='color:inherit; text-decoration:none !important;' href='/docs/TuneableCarbonMagnets.pdf'><h2 style='margin:0;'>MPhys, BSc Theoretical Physics</h2></a>
				<h3 style='margin:0;'>University of Leeds</h3> 
				<p style='margin:0;'>1<sup>st</sup> Class,&nbsp;&nbsp;2015-2019</p>
			</div>
		</div>
	</Content>
	</Paper>
</div>

<style>
    .logoBox {
        position: static;
        display: inline;
		margin: 0 auto;
    }
	.ExperienceContainer {
		display: flex;
		justify-content: flex-start;
		align-items: start;
		align-content: flex-start;
		margin-top: 2%;
	}
</style>