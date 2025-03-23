{
	const isDev = location.host.includes('localhost')
	const root = isDev ? 'http://localhost:8765' : 'https://lume.io'

	__meteor_runtime_config__ = JSON.parse(
		decodeURIComponent(
			'%7B%22meteorRelease%22%3A%22METEOR%403.1.2%22%2C%22gitCommitHash%22%3A%227d31a24753d18307d7bc7f56adc080a3fc86b3b5%22%2C%22meteorEnv%22%3A%7B%22NODE_ENV%22%3A%22production%22%2C%22TEST_METADATA%22%3A%22%7B%7D%22%7D%2C%22PUBLIC_SETTINGS%22%3A%7B%7D%2C%22debug%22%3Afalse%2C%22ROOT_URL%22%3A%22https%3A%2F%2Flume-io-20950.nodechef.com%2F%22%2C%22ROOT_URL_PATH_PREFIX%22%3A%22%22%2C%22reactFastRefreshEnabled%22%3Atrue%2C%22autoupdate%22%3A%7B%22versions%22%3A%7B%22web.browser%22%3A%7B%22version%22%3A%22465660ba89c48b54b5ea176a5beefeab8c2947e5%22%2C%22versionRefreshable%22%3A%221952018619999f014765d73c14db1f446971e849%22%2C%22versionNonRefreshable%22%3A%22465660ba89c48b54b5ea176a5beefeab8c2947e5%22%2C%22versionReplaceable%22%3A%221952018619999f014765d73c14db1f446971e849%22%7D%2C%22web.browser.legacy%22%3A%7B%22version%22%3A%227e45b3eb2b7c0bb2dba58ca7ed0a0b0d218bfced%22%2C%22versionRefreshable%22%3A%221952018619999f014765d73c14db1f446971e849%22%2C%22versionNonRefreshable%22%3A%227e45b3eb2b7c0bb2dba58ca7ed0a0b0d218bfced%22%2C%22versionReplaceable%22%3A%221952018619999f014765d73c14db1f446971e849%22%7D%7D%2C%22autoupdateVersion%22%3Anull%2C%22autoupdateVersionRefreshable%22%3Anull%2C%22autoupdateVersionCordova%22%3Anull%2C%22appId%22%3A%22q04iv5yj40nv1s0iw0f%22%7D%2C%22appId%22%3A%22q04iv5yj40nv1s0iw0f%22%2C%22isModern%22%3Atrue%7D',
		),
	)

	__meteor_runtime_config__.DDP_DEFAULT_CONNECTION_URL = root
	__meteor_runtime_config__.ROOT_URL = root

	// Any time we update the Meteor server's scripts, we need to update this list of scripts, and increment the cacheBust value.
	const cacheBust = 0

	document.write(/*html*/ `
		<script type="text/javascript" src="${root}/packages/core-runtime.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/meteor.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/modules-runtime.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/modules.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/react-fast-refresh.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/ecmascript.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/ecmascript-runtime.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/babel-runtime.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/modern-browsers.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/promise.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/fetch.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/dynamic-import.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/ecmascript-runtime-client.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/webapp.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/base64.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/ejson.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/check.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/random.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/tracker.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/retry.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/id-map.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/callback-hook.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/ddp-common.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/reload.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/socket-stream-client.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/diff-sequence.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/mongo-id.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/ddp-client.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/ddp.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/mobile-experience.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/geojson-utils.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/ordered-dict.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/minimongo.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/ddp-server.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/allow-deny.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/babel-compiler.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/typescript.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/mongo-dev-server.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/logging.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/mongo.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/reactive-var.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/shell-server.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/static-html.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/ddp-rate-limiter.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/localstorage.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/url.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/jquery.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/observe-sequence.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/htmljs.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/blaze.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/accounts-base.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/sha.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/accounts-password.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/service-configuration.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/spacebars.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/templating-compiler.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/templating-runtime.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/templating.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/reactive-dict.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/session.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/less.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/accounts-ui-unstyled.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/accounts-ui.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/ferjep_persistent-session.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/zodern_types.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/packages/launch-screen.js?hash=${cacheBust}"></script>
		<script type="text/javascript" src="${root}/global-imports.js?hash=${cacheBust}"></script>

		<script type="module">
			import '${root}/entry.js'
		</script>
	`)
}
