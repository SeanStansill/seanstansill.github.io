<script>
	// Svelte component which creates a responsive floating navigation bar

	// onMount is a way to run functions once
	// upon loading a component to the DOM
	import { onMount } from 'svelte';
	import Button, { Label } from '@smui/button';

	// We want the component to look different on mobile
	// devices. Set default to the desktop implmenetation
	let showMobileMenu = false;

	// List of navigation items
	const navItems = [
		{ label: 'CV', href: '/CV' },
		{ label: 'Portfolio', href: '/portfolio' },
		{ label: 'Magnetism Textbook', href: '/magnetism' },
		{ label: 'Blog', href: '/blog' },
		{ label: 'About', href: '/about' }
	];

	// Simple toggle for the mobile menun
	const handleMobileIconClick = () => (showMobileMenu = !showMobileMenu);

	// Function that checks the view is still mobile
	const mediaQueryHandler = (e) => {
		// Reset mobile state
		if (!e.matches) {
			showMobileMenu = false;
		}
	};

	// Attach media query listener on mount hook
	onMount(() => {
		// Want to check both orientation and width.
		// Ensures low resolution monitors not mistaken as as phone
		const mediaListener = window.matchMedia('(max-width: 767px) and (orientation: portrait)');

		mediaListener.addEventListener('change', mediaQueryHandler);
	});
</script>

<nav>
	<div class="inner">
		<!-- This is the optional mobile button -->
		<div on:click={handleMobileIconClick} class={`mobile-icon${showMobileMenu ? ' active' : ''}`}>
			<div class="middle-line" />
		</div>
		<ul class={`navbar-list${showMobileMenu ? ' mobile' : ''}`}>
			<!-- Loop through each item in the nav-bar -->
			{#each navItems as item}
				<li>
					<Button href={item.href} ripple={false}>
						<Label>{item.label}</Label>
					</Button>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<style>
	nav {
		background-color: rgba(102, 101, 101, 0.8);
		font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
		height: 45px;
	}

	.inner {
		max-width: 980px;
		padding-left: 20px;
		padding-right: 20px;
		margin: auto;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		height: 100%;
	}

	.mobile-icon {
		width: 25px;
		height: 14px;
		position: relative;
		cursor: pointer;
	}

	.mobile-icon:after,
	.mobile-icon:before,
	.middle-line {
		content: '';
		position: absolute;
		width: 100%;
		height: 2px;
		background-color: #fff;
		transition: all 0.4s;
		transform-origin: center;
	}

	.mobile-icon:before,
	.middle-line {
		top: 0;
	}

	.mobile-icon:after,
	.middle-line {
		bottom: 0;
	}

	.mobile-icon:before {
		width: 66%;
	}

	.mobile-icon:after {
		width: 33%;
	}

	.middle-line {
		margin: auto;
	}

	.mobile-icon:hover:before,
	.mobile-icon:hover:after,
	.mobile-icon.active:before,
	.mobile-icon.active:after,
	.mobile-icon.active .middle-line {
		width: 100%;
	}

	.mobile-icon.active:before,
	.mobile-icon.active:after {
		top: 50%;
		transform: rotate(-45deg);
	}

	.mobile-icon.active .middle-line {
		transform: rotate(45deg);
	}

	.navbar-list {
		display: none;
		width: 100%;
		justify-content: space-between;
		margin: 0;
		padding: 0 40px;
	}

	.navbar-list.mobile {
		background-color: rgba(102, 101, 101, 0.8);
		position: fixed;
		display: block;
		height: calc(100% - 45px);
		bottom: 0;
		left: 0;
	}

	.navbar-list li {
		list-style-type: none;
		position: relative;
	}

	.navbar-list li:before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 1px;
		background-color: #424245;
	}

	.navbar-list a {
		color: #fff;
		text-decoration: none;
		display: flex;
		height: 45px;
		align-items: center;
		padding: 0 10px;
		font-size: 13px;
	}

	@media only screen and (min-width: 767px) {
		.mobile-icon {
			display: none;
		}

		.navbar-list {
			display: flex;
			padding: 0;
		}

		.navbar-list a {
			display: inline-flex;
		}
	}
</style>
