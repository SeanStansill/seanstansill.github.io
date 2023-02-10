import { readable } from 'svelte/store'

// Default to light
export const isDark = readable(false, (set) => {
	if (typeof window === 'undefined') return () => {};
	
	// MediaQueryList
	const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
	
	// Initial theme config from current state
	set(prefersDarkMode.matches)

	// Update handler
	const updateThemeOnChange = e => set(e.matches ? 'dark' : 'light');

	// Update the store if browser preference changes
	prefersDarkMode.addEventListener('change', updateThemeOnChange)


	// Store destructor clean-up
	return () => {
		prefersDarkMode.removeEventListener('change', updateThemeOnChange)
	}

});

// Set up our MediaQueryList
//const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)')

// Initial theme config from current state
//const theme = writable(prefersDarkMode.matches ? 'dark' : 'light')

// Update the store if OS preference changes
//const updateThemeOnChange = e => theme.set(e.matches ? 'dark' : 'light')
//prefersDarkMode.addEventListener('change', updateThemeOnChange)

// Clean up if this component is destroyed
// (Maybe not needed if your store is outside a component)
//onDestroy(() => prefersDarkMode.removeEventListener('change', updateThemeOnChange))

// Debugging
//theme.subscribe(newTheme => console.log('Swapped to theme:', newTheme))

//export {theme}


//export const isMobile = readable(true, (set) => {
//	if (typeof window === 'undefined') return () => {};
//
//	const query = window.matchMedia('(max-width: 1000px)');
//	set(query.matches);
//	const update = (match) => {
//		set(match.matches);
//	};
//	query.addEventListener('change', update);
//
//	return () => {
//		query.removeEventListener('change', update);
//	};
//});