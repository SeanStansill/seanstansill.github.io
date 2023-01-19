<script>
	// Svelte component which creates a responsive floating navigation bar

	// onMount is a way to run functions once
	// upon loading a component to the DOM
	import { onMount } from 'svelte';
	import NavDesktop from '@components/navbar_desktop.svelte';
	import NavMobile from '@components/navbar_mobile.svelte';
	import IconButton from '@smui/icon-button';

	// We want the component to look different on mobile
	// devices. Set default to the desktop implmenetation
	let isMobile = true;
	let showMobileMenu = false;

	// Simple toggle for the mobile menun
	const handleMobileIconClick = () => (showMobileMenu = !showMobileMenu);

	// Function that checks the view is still mobile
	const mediaQueryHandler = (e) => {
		// Reset mobile state
		if (!e.matches) {
			isMobile = false;
		} else {
			isMobile = true;
		}
	};

	// Attach media query listener on mount hook
	onMount(() => {
		// Want to check both orientation and width.
		// Ensures low resolution monitors not mistaken as as phone
		const mediaListener = window.matchMedia('(max-width: 1200px) and (orientation: portrait)');

		mediaListener.addEventListener('change', mediaQueryHandler);
	});
</script>

<div>
	{#if isMobile}
		<NavMobile />
	{/if}

	{#if !isMobile}
		<NavDesktop />
	{/if}
</div>
