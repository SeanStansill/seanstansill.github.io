<script>
	// Svelte component which creates a responsive floating navigation bar

	import { isMobile } from '@components/isMobile';
	import NavbarDesktop from '@components/navbar_desktop.svelte';
	import NavbarMobile from '@components/navbar_mobile.svelte';

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
		{ label: 'Blog', href: '/blog' },
		{ label: 'About', href: '/about' }
	];
	let scroll;
</script>

<svelte:window bind:scrollY={scroll}/>

<div style:transform={`translate3d(0, ${scroll - 8}px, 0)`} style:background='white' style:opacity='0.9' style:overflow='visible' style:z-index='10' style:position='relative'>
	<svelte:component this={selectedNav} {navItems}/>
</div>
