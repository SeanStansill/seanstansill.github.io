<!--
This component is now deprecated.

Katex is a faster way to serve CSS
rendered equations than this method.

It is still maintained because Katex
doesn't have full Latex support.


Using in another svelte component should look like
the following pseudo-code

'''
<script>
... some svelte imports
import Math from 'src/lib/components/Math.svelte';
... some svelte
</script>

... some html
<svelte:component this={Math} equation={equation}/>
... some more html
'''

-->

<script>

	import { onMount } from 'svelte';

	export let equation;

	onMount(() => {

		let script = document.createElement('script');
		
		script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
		
		document.head.append(script);

		script.onload = () => {
			MathJax = {
				tex: {
					inlineMath: [
						['$', '$'],
						['\\(', '\\)']
					]
				},
				svg: { fontCache: 'global' }
			};
		};
	});
</script>

{equation}