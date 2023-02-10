<script>
	// Svelte component which creates a responsive floating navigation bar

	import { isMobile } from '@components/isMobile';
	import NavbarDesktop from '@components/navbar/navbar_desktop.svelte';
	import NavbarMobile from '@components/navbar/navbar_mobile.svelte';
	import { isDark } from '@components/isDark';

	let bgColor;

    let bgColorDark = '#444444';
    let bgColorLight = 'white';

	$: bgColor = $isDark ? bgColorDark : bgColorLight;

	// Reactive blocks are the cleanest implementation
	let selectedNav;
	$: selectedNav = $isMobile ? NavbarMobile : NavbarDesktop;

	// List of navigation items.
	// Pass as a prop to the components
	// navItems only has to be changed in one place
	const navItems = [
		{ label: 'CV', href: '/CV' },
		{ label: 'Projects', href: '/projects' },
		{ label: 'Magnetism', href: '/magnetism' },
		{ label: 'About', href: '/about' }
	];
	let scroll;
</script>

<svelte:window bind:scrollY={scroll}/>

<div style:transform={`translate3d(0, ${scroll - 8}px, 0)`} style:background={bgColor} style:opacity='0.9' style:overflow='visible' style:z-index='10' style:position='relative'>
	<svelte:component this={selectedNav} {navItems} {isDark}/>
</div>
