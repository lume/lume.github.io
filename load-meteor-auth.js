import {Accounts} from 'meteor/accounts-base'

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
const bypassSafariIframeDisable = new URLSearchParams(location.search).has('testSafariAuthIframe')

/** The main origin is where the Meteor server is hosted. */
const mainOriginFrame = document.createElement('iframe')
mainOriginFrame.style.display = 'none'
mainOriginFrame.src = mainOrigin

async function getLoginCredentials() {
	// TEMPORARY: disabled in Safari because loading the auth iframe freezes Safari.
	// Add ?testSafariAuthIframe to the URL to bypass this guard for testing.
	if (isSafari && !bypassSafariIframeDisable) return
	document.body.append(mainOriginFrame)

	const ctrl = new AbortController()
	let gotCredentials = false

	// listen for credentials message
	window.addEventListener(
		'message',
		event => {
			if (event.data.type === 'loginCredentials') {
				gotCredentials = true
				ctrl.abort()
				if (!event.data.token) return
				localStorage.setItem('Meteor.loginToken', event.data.token)
				localStorage.setItem('Meteor.loginTokenExpires', event.data.expires)
				localStorage.setItem('Meteor.userId', event.data.userId)
			}
		},
		{signal: ctrl.signal},
	)

	await new Promise(resolve => {
		mainOriginFrame.addEventListener(
			'load',
			async () => {
				while (!gotCredentials) {
					// Post a message to the iframe to get credentials.
					mainOriginFrame.contentWindow.postMessage({type: 'getLoginCredentials'}, {targetOrigin: '*'})
					await new Promise(resolve => setTimeout(resolve, 50))
				}

				resolve()
			},
			{once: true},
		)
	})

	mainOriginFrame.remove()
}

async function setLoginCredentials(token) {
	// TEMPORARY: disabled in Safari because loading the auth iframe freezes Safari.
	// Add ?testSafariAuthIframe to the URL to bypass this guard for testing.
	if (isSafari && !bypassSafariIframeDisable) return
	document.body.append(mainOriginFrame)

	const ctrl = new AbortController()
	let confirmed = false

	window.addEventListener(
		'message',
		event => {
			if (event.data.type === 'confirmSetLoginCredentials') {
				console.log('############ login credentials were received by main origin')
				confirmed = true
				ctrl.abort()
			}
		},
		{signal: ctrl.signal},
	)

	await new Promise(resolve => {
		mainOriginFrame.addEventListener(
			'load',
			async () => {
				while (!confirmed) {
					// Post a message to the iframe to set the login token.
					mainOriginFrame.contentWindow.postMessage({type: 'setLoginCredentials', token}, {targetOrigin: '*'})
					await new Promise(resolve => setTimeout(resolve, 50))
				}

				resolve()
			},
			{once: true},
		)
	})

	mainOriginFrame.remove()
}

setInterval(async () => {
	if (!localStorage.getItem('Meteor.loginToken')) await getLoginCredentials()
}, 3000)

// Ensure that if we log in here we set the login token in the main origin
// so we're automatically logged in there too.
Accounts.onLogin(async () => {
	const token = localStorage.getItem('Meteor.loginToken')
	if (!token) throw new Error('token missing')

	await setLoginCredentials(token)
})
