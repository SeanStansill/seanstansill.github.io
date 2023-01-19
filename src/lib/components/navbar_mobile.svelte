<script lang='ts'>
    
    import Menu from '@smui/menu';
    import List, { Item } from '@smui/list';
    import Button, { Label } from '@smui/button';
    import IconButton from '@smui/icon-button';

    // This type annotation requires typescript
    // I don't think there is a solution as elegant as this in pure JS
    let menu: Menu;

    // List of navigation items
    export let navItems: {label: string; href: string;}[];
</script>

<IconButton on:click={() => menu.setOpen(true)} class='material-icons'>menu</IconButton>
<Menu bind:this={menu}>
    <List>
        <!-- Acts as a home button-->
        <Item><Button href='.'><Label>Sean</Label></Button></Item>
        {#each navItems as item}
        <Item><Button variant='raised' style='font-size: 75%; text-align: left;' href={item.href}><Label>{item.label}</Label></Button></Item>
        {/each}
    </List>
</Menu>