<script>
	// Svelte component which creates a responsive floating navigation bar

	// onMount is a way to run functions once
	// upon loading a component to the DOM
	import { isMobile } from '@components/isMobile';
	import NavbarDesktop from '@components/navbar_desktop.svelte';
	import NavbarMobile from '@components/navbar_mobile.svelte';

	// Instead of using a bool (old implementation), we can use
	// component pointers and elements
	// Instead of using a dictionary, create a reactive block
	let selectedNav;
	$: selectedNav = $isMobile ? NavbarMobile : NavbarDesktop;

	// List of navigation items
	// Pass as a prop to the components
	// navItems only has to be changed in one place
	const navItems = [
		{ label: 'CV', href: '/CV' },
		{ label: 'Portfolio', href: '/portfolio' },
		{ label: 'Magnetism', href: '/magnetism' },
		{ label: 'Blog', href: '/blog' },
		{ label: 'About', href: '/about' }
	];
</script>

<div>
	<svelte:component this={selectedNav} {navItems} />
</div>
