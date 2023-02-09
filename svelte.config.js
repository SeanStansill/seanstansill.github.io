import staticAdapter from '@sveltejs/adapter-static';
import path from 'path';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: staticAdapter({}),
		alias: {
			'@components': path.resolve('./src/lib/components'),
			'@assets': path.resolve('./public'),
			'@src': path.resolve('./src'),
			'@static': path.resolve('./static')
		}
	}
};

export default config;
