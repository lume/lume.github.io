const importmap = {
	imports: {
		lume: './modules/lume/dist/index.js',
		'lume/': './modules/lume/',
		'@lume/element': './modules/@lume/element/dist/index.js',
		'@lume/variable': './modules/@lume/variable/dist/index.js',
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
	},
}

const importmapScript = document.createElement('script')
importmapScript.setAttribute('type', 'importmap')
importmapScript.textContent = JSON.stringify(importmap)
document.currentScript.after(importmapScript)
