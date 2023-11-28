{
	const script = document.currentScript
	// F.e. the "../../" in "src="../../importmap.js"
	const base = script.getAttribute('src').split('importmap.js')[0]

	const imports = {
		// lume
		lume: './modules/lume/dist/index.js',
		'lume/': './modules/lume/',
		'@lume/element': './modules/@lume/element/dist/index.js',
		'classy-solid': './modules/classy-solid/dist/index.js',
		'@lume/eventful': './modules/@lume/eventful/dist/index.js',
		'@lume/kiwi': './modules/@lume/kiwi/dist/kiwi.js',
		'@lume/three-projected-material/': './modules/@lume/three-projected-material/',
		'@lume/autolayout': './modules/@lume/autolayout/dist/AutoLayout.js',
		lowclass: './modules/lowclass/dist/index.js',
		'james-bond': './modules/james-bond/dist/index.js',
		regexr: './modules/regexr/dist/index.js',
		'element-behaviors': './modules/element-behaviors/dist/index.js',
		'@lume/custom-attributes/': './modules/@lume/custom-attributes/',
		'solid-js': './modules/solid-js/dist/solid.js',
		'solid-js/web': './modules/solid-js/web/dist/web.js',
		'solid-js/html': './modules/solid-js/html/dist/html.js',
		'solid-js/store': './modules/solid-js/store/dist/store.js',
		three: './modules/three/src/Three.js',
		'three/': './modules/three/',

		// live-code
		'@lume/live-code': './modules/@lume/live-code/dist/index.js',
		'@babel/runtime/helpers/extends': './modules/@babel/runtime/helpers/esm/extends.js',
		'@codemirror/autocomplete': './modules/@codemirror/autocomplete/dist/index.js',
		'@codemirror/commands': './modules/@codemirror/commands/dist/index.js',
		'@codemirror/lang-css': './modules/@codemirror/lang-css/dist/index.js',
		'@codemirror/lang-html': './modules/@codemirror/lang-html/dist/index.js',
		'@codemirror/lang-javascript': './modules/@codemirror/lang-javascript/dist/index.js',
		'@codemirror/language': './modules/@codemirror/language/dist/index.js',
		'@codemirror/lint': './modules/@codemirror/lint/dist/index.js',
		'@codemirror/search': './modules/@codemirror/search/dist/index.js',
		'@codemirror/state': './modules/@codemirror/state/dist/index.js',
		'@codemirror/theme-one-dark': './modules/@codemirror/theme-one-dark/dist/index.js',
		'@codemirror/view': './modules/@codemirror/view/dist/index.js',
		'@lezer/common': './modules/@lezer/common/dist/index.js',
		'@lezer/css': './modules/@lezer/css/dist/index.js',
		'@lezer/highlight': './modules/@lezer/highlight/dist/index.js',
		'@lezer/html': './modules/@lezer/html/dist/index.js',
		'@lezer/javascript': './modules/@lezer/javascript/dist/index.js',
		'@lezer/lr': './modules/@lezer/lr/dist/index.js',
		'@lume/element': './modules/@lume/element/dist/index.js',
		'@uiw/codemirror-theme-noctis-lilac': './modules/@uiw/codemirror-theme-noctis-lilac/esm/index.js',
		'@uiw/codemirror-themes': './modules/@uiw/codemirror-themes/esm/index.js',
		'classy-solid': './modules/classy-solid/dist/index.js',
		'code-mirror-el': './modules/code-mirror-el/dist/index.js',
		codemirror: './modules/codemirror/dist/index.js',
		crelt: './modules/crelt/index.js',
		'lodash-es/': './modules/lodash-es/',
		lowclass: './modules/lowclass/dist/index.js',
		'solid-js': './modules/solid-js/dist/solid.js',
		'solid-js/html': './modules/solid-js/html/dist/html.js',
		'solid-js/web': './modules/solid-js/web/dist/web.js',
		'style-mod': './modules/style-mod/src/style-mod.js',
		'thememirror/': './modules/thememirror/',
		'w3c-keyname': './modules/w3c-keyname/index.js',
	}

	for (const key in imports) imports[key] = base + imports[key]

	const importmapScript = document.createElement('script')
	importmapScript.setAttribute('type', 'importmap')
	importmapScript.textContent = JSON.stringify({imports})
	script.after(importmapScript)
}
