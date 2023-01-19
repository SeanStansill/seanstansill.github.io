<script>
	import Drawer, { AppContent, Content, Scrim, Header, Title } from '@smui/drawer';
	import List, { Item, Text, Graphic } from '@smui/list';
	import IconButton from '@smui/icon-button';
	import Button, { Label } from '@smui/button';

	let isOpen = false;

	// List of navigation items
	const navItems = [
		{ label: 'CV', href: '/CV' },
		{ label: 'Portfolio', href: '/portfolio' },
		{ label: 'Magnetism Textbook', href: '/magnetism' },
		{ label: 'Blog', href: '/blog' },
		{ label: 'About', href: '/about' }
	];
</script>

<div class="drawer-container">
	<Drawer variant="modal" fixed={false} bind:isOpen>
		<Header>
			<Title>Hello</Title>
		</Header>
		<Content>
			<List>
				{#each navItems as item}
					<Item href={item.href}>
						<Graphic class="material-icons" aria-hidden="true">inbox</Graphic>
						<Text>{item.label}</Text>
					</Item>
				{/each}
			</List>
		</Content>
	</Drawer>

	<!-- Don't include fixed={false} if this is a page wide drawer.
    It adds a style for absolute positioning. -->
	<Scrim fixed={false} />
	<AppContent class="app-content">
		<main class="main-content">
			<Button on:click={() => isOpen != isOpen}>
				<Label>Toggle Drawer</Label></Button
			>
			<br />
			<pre class="status">Active: Inbox</pre>
			<div style="height: 700px;">&nbsp;</div>
			And some stuff at the bottom.
		</main>
	</AppContent>
</div>

<style>
	/* These classes are only needed because the
          drawer is in a container on the page. */
	.drawer-container {
		position: relative;
		display: flex;
		height: 350px;
		max-width: 600px;
		border: 1px solid var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
		overflow: hidden;
		z-index: 0;
	}
	* :global(.app-content) {
		flex: auto;
		overflow: auto;
		position: relative;
		flex-grow: 1;
	}
	.main-content {
		overflow: auto;
		padding: 16px;
		height: 100%;
		box-sizing: border-box;
	}
</style>
