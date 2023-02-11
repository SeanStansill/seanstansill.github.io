<script>
	// Svelte component which creates a responsive floating banner
    // It accepts an image as an input

	import { isMobile } from '@components/isMobile';
	import BannerDesktop from '@components/banner/banner_desktop.svelte';
	import BannerMobile from '@components/banner/banner_mobile.svelte';

    // This prop will link to a page-specific url
    export let image_url;

	// Pick which view dependent on the device viewport
	let selectedNav;
	$: selectedNav = $isMobile ? null : BannerDesktop;

</script>

<div>
	<svelte:component this={selectedNav} {image_url}/>
</div>
