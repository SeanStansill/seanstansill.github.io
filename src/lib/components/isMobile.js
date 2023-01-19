import { readable } from 'svelte/store';

export const isMobile =  readable(true, set => {
    if(typeof window === 'undefined') return () => {}

    const query = window.matchMedia('(max-width: 1000px)')
    set(query.matches)
    const update = (match) => {
        set(match.matches)
    }
    query.addEventListener('change', update)

    return () => {
      query.removeEventListener('change', update)
    }
});

