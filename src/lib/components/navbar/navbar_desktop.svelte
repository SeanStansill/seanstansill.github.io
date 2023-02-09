<script>
	import Button, { Group, Label } from '@smui/button';

	export let navItems;

	const navbarWidth =
		'margin-left: 20%; margin-right: 20%; display: flex; justify-content: center; align-items: center;';
</script>

<Group style={navbarWidth}>
	<!-- Acts as a home button-->
	<Button href='.' style='width: 25%; font-size:95%; font-style: bold;'
		><Label>Sean Stansill</Label></Button
	>
	<!-- Loop through each item in the nav-bar -->
	{#each navItems as item}
		<Button href={item.href} style='color:dimgrey; flex-grow: 1;' ripple={true}>
			<Label>{item.label}</Label>
		</Button>
	{/each}
</Group>
