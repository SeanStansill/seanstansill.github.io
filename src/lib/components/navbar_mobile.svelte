<script lang="ts">
	import Menu from '@smui/menu';
	import List, { Item } from '@smui/list';
	import Button, { Label } from '@smui/button';
	import IconButton from '@smui/icon-button';

	let menu: Menu;

	// Import the list of navigation items from the navbar
	// parent component. This reduces the number of changes
	// when adding / removing a page
	export let navItems: { label: string; href: string }[];
</script>

<IconButton on:click={() => menu.setOpen(true)} class="material-icons">menu</IconButton>

<Menu bind:this={menu}>
	<List>
		<Item><Button href="."><Label>Sean</Label></Button></Item>
		{#each navItems as item}
			<Item>
				<Button variant="raised" style="font-size: 75%; text-align: left;" href={item.href}>
					<Label>{item.label}</Label>
				</Button>
			</Item>
		{/each}
	</List>
</Menu>
