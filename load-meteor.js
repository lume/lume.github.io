/**
 * Steps for connecting a client to Meteor:
 * - Ensure that the server will send correct CORS headers, namely
 *   `Access-Control-Allow-Origin` based on which domains are allowed to access
 *   the content from the main origin, otherwise loading modules scripts and CSS
 *   links will not work.
 * - Copy the __meteor_runtime_config__ from the Meteor server's HTML.
 * - Set DDP_DEFAULT_CONNECTION_URL and ROOT_URL in __meteor_runtime_config__ to
 *   the server URL whether localhost or production.
 * - Define a cacheBust variable to bust the cache for the Meteor server's
 *   files; increment it when the server's files change.
 * - Copy the Meteor server's JS scripts and CSS links from the HTML.
 * - Paste the Meteor server's JS scripts and CSS links into the new HTML here,
 *   with the ROOT_URL prefixed to the script and link URLs, the random hashes
 *   replaced with the cacheBust variable, and a crossorigin="anonymous"
 *   attribute added to any CSS links (or JavaScript that may want to access
 *   the CSS OM of the imported CSS will fail).
 * - Finally, import our own code from the Meteor server (for example entry.js)
 *   using a script tag with type="module".
 * - When packages are added or removed from the server, follow these steps
 *   again to ensure that the list of scripts and links here is up to date.
 * - Add postMessage code to communicate with the main origin (where the server
 *   is hosted) via iframe to get the login credentials, and set them in
 *   localStorage to log ourselves in on the newly attached client. Note, set CORS
 *   headers in the meteor server for security to allow only your own domains to
 *   access the main origin in an iframe, otherwise anyone can use an iframe to
 *   get your credentials on any website you visit.
 */

{
	const isDev = location.host.includes('localhost')
	const mainOrigin = isDev ? 'http://localhost:8765' : 'https://lume.io'

	__meteor_runtime_config__ = JSON.parse(
		decodeURIComponent(
			'%7B%22meteorRelease%22%3A%22METEOR%403.1.2%22%2C%22gitCommitHash%22%3A%227d31a24753d18307d7bc7f56adc080a3fc86b3b5%22%2C%22meteorEnv%22%3A%7B%22NODE_ENV%22%3A%22production%22%2C%22TEST_METADATA%22%3A%22%7B%7D%22%7D%2C%22PUBLIC_SETTINGS%22%3A%7B%7D%2C%22debug%22%3Afalse%2C%22ROOT_URL%22%3A%22https%3A%2F%2Flume-io-20950.nodechef.com%2F%22%2C%22ROOT_URL_PATH_PREFIX%22%3A%22%22%2C%22reactFastRefreshEnabled%22%3Atrue%2C%22autoupdate%22%3A%7B%22versions%22%3A%7B%22web.browser%22%3A%7B%22version%22%3A%22465660ba89c48b54b5ea176a5beefeab8c2947e5%22%2C%22versionRefreshable%22%3A%221952018619999f014765d73c14db1f446971e849%22%2C%22versionNonRefreshable%22%3A%22465660ba89c48b54b5ea176a5beefeab8c2947e5%22%2C%22versionReplaceable%22%3A%221952018619999f014765d73c14db1f446971e849%22%7D%2C%22web.browser.legacy%22%3A%7B%22version%22%3A%227e45b3eb2b7c0bb2dba58ca7ed0a0b0d218bfced%22%2C%22versionRefreshable%22%3A%221952018619999f014765d73c14db1f446971e849%22%2C%22versionNonRefreshable%22%3A%227e45b3eb2b7c0bb2dba58ca7ed0a0b0d218bfced%22%2C%22versionReplaceable%22%3A%221952018619999f014765d73c14db1f446971e849%22%7D%7D%2C%22autoupdateVersion%22%3Anull%2C%22autoupdateVersionRefreshable%22%3Anull%2C%22autoupdateVersionCordova%22%3Anull%2C%22appId%22%3A%22q04iv5yj40nv1s0iw0f%22%7D%2C%22appId%22%3A%22q04iv5yj40nv1s0iw0f%22%2C%22isModern%22%3Atrue%7D',
		),
	)

	__meteor_runtime_config__.DDP_DEFAULT_CONNECTION_URL = mainOrigin
	__meteor_runtime_config__.ROOT_URL = mainOrigin

	// Any time we update the Meteor server's scripts, we need to update this list of scripts, and increment the cacheBust value.
	const cacheBust = 0

	document.write(/*html*/ `
		<link rel="stylesheet" type="text/css" class="__meteor-css__" href="${mainOrigin}/packages/accounts-ui/login_buttons.less?hash=${cacheBust}" crossorigin="anonymous" />

		<script type="text/javascript" src="${mainOrigin}/packages/core-runtime.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/meteor.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/modules-runtime.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/modules.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/react-fast-refresh.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/ecmascript.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/ecmascript-runtime.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/babel-runtime.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/modern-browsers.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/promise.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/fetch.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/dynamic-import.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/ecmascript-runtime-client.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/webapp.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/base64.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/ejson.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/check.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/random.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/tracker.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/retry.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/id-map.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/callback-hook.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/ddp-common.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/reload.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/socket-stream-client.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/diff-sequence.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/mongo-id.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/ddp-client.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/ddp.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/mobile-experience.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/geojson-utils.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/ordered-dict.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/minimongo.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/ddp-server.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/allow-deny.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/babel-compiler.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/typescript.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/mongo-dev-server.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/logging.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/mongo.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/reactive-var.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/shell-server.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/static-html.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/ddp-rate-limiter.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/localstorage.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/url.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/jquery.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/observe-sequence.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/htmljs.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/blaze.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/accounts-base.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/sha.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/accounts-password.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/service-configuration.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/spacebars.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/templating-compiler.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/templating-runtime.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/templating.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/reactive-dict.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/session.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/less.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/accounts-ui-unstyled.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/accounts-ui.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/ferjep_persistent-session.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/zodern_types.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/packages/launch-screen.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${mainOrigin}/global-imports.js?hash=${cacheBust}"></script>

		<script type="module">
			const mainOrigin = '${mainOrigin}'

			if (!localStorage.getItem('Meteor.loginToken')) {
				const iframe = document.createElement('iframe')
				iframe.style.display = 'none'
				iframe.src = mainOrigin
				console.log('iframe src', iframe.src, mainOrigin)
				document.body.append(iframe)

				// listen for credentials message
				window.addEventListener('message', event => {
					if (event.data.type === 'loginCredentials') {
						console.log('received credentials', event.data)
						localStorage.setItem('Meteor.loginToken', event.data.token)
						localStorage.setItem('Meteor.loginTokenExpires', event.data.expires)
						localStorage.setItem('Meteor.userId', event.data.userId)
					}
				})

				await new Promise(resolve => {
					iframe.addEventListener('load', async () => {
						while (!localStorage.getItem('Meteor.loginToken')) {
							// Post a message to the iframe to get credentials.
							console.log('post message for credentials')
							//iframe.contentWindow.postMessage( { type: 'getLoginCredentials' }, {targetOrigin: mainOrigin})
							iframe.contentWindow.postMessage( { type: 'getLoginCredentials' }, {targetOrigin: '*'})
							//iframe.contentWindow.postMessage( { type: 'getLoginCredentials' } )
							await new Promise(resolve => setTimeout(resolve, 50))
						}

						resolve()
					})
				})

				iframe.src = ''
				iframe.remove()
			}

			// This includes imports such as the <blaze-component> element.
			await import ('${mainOrigin}/entry.js')

		</script>
	`)
}
