// This is a Svelte store to check the window size.
// It is used to reactively serve up content to a
// user.

// It is a Svelte alternative to a React hook.

import { readable } from 'svelte/store';

export const isMobile = readable(true, (set) => {
	if (typeof window === 'undefined') return () => {};

	const query = window.matchMedia('(max-width: 800px)');
	set(query.matches);
	const update = (match) => {
		set(match.matches);
	};
	query.addEventListener('change', update);

	return () => {
		query.removeEventListener('change', update);
	};
});