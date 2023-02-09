<script>
	// Svelte component which creates a responsive profile that appears 
    // in the margin for desktop, or as a header for mobile (maybe then remove banner)

	import { isMobile } from '@components/isMobile';
	import ProfileDesktop from '@components/author_profile/profile_desktop.svelte';
	import ProfileMobile from '@components/author_profile/profile_mobile.svelte';

	// Pick which view dependent on the device viewport
	let selectedNav;
	$: selectedNav = $isMobile ? ProfileMobile : ProfileDesktop;

</script>

<div>
	<svelte:component this={selectedNav}/>
</div>
