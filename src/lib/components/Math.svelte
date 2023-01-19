<script>
    // To use this component, in script tags, add
    // import Math from '@components/Math.svelte';
    // and in the HTML, add lines like
    // <svelte:component this={Math} {equation}/>
    
    import { onMount } from 'svelte';

    export let equation;

    onMount(() => {

    let script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
    document.head.append(script);

    script.onload = () => {
        MathJax = {
            tex: {inlineMath: [['$', '$'], ['\\(', '\\)']]},
            svg: {fontCache: 'global'}
        };
    };
            
    });
</script>

{equation}