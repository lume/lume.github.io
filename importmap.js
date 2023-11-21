{
	const script = document.currentScript
	// F.e. the "../../" in "src="../../importmap.js"
	const base = script.getAttribute('src').split('importmap.js')[0]

	const imports = {
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
	}

	for (const key in imports) imports[key] = base + imports[key]

	const importmapScript = document.createElement('script')
	importmapScript.setAttribute('type', 'importmap')
	importmapScript.textContent = JSON.stringify({imports})
	script.after(importmapScript)
}
