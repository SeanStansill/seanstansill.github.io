<script>
    import katex from 'katex';
    // Create a prop for the equation to be rendered
    // This is an input when the component is called
	export let equation;
	export let displayMode = false;
	
	const options = {
		displayMode: displayMode,
		throwOnError: false,
        output: 'htmlAndMathml'
	}

    // Make a reactive variable here. This allows an element to be rerendered in real time
    // Added functionality with an incredibly simple implementation
	$: katexString = katex.renderToString(equation, options);
</script>

<!-- Must call the stylesheet. -->
<svelte:head>
			<!-- KaTeX Styles -->
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.css"
                integrity="sha384-vKruj+a13U8yHIkAyGgK1J3ArTLzrFGBbBc0tDp4ad/EyewESeXE/Iv67Aj8gKZ0"
                crossorigin="anonymous"
            />

</svelte:head>

<span role='math'>
    {@html katexString}
</span>