// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
// import Unocss from 'unocss/vite';
// import { presetUno, presetAttributify } from 'unocss';
// import presetIcons from '@unocss/preset-icons';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		// vite: {
		// 	plugins: [
		// 		Unocss({
		// 			presets: [
		// 				presetUno(),
		// 				presetAttributify(),
		// 				presetIcons({
		// 					extraProperties: {
		// 						'display': 'inline-block',
		// 						'vertical-align': 'middle'
		// 					}
		// 				})
		// 			]
		// 		})
		// 	]
		// }
	}
};

export default config;
