# Skateboard Configurator

Toggle full screen on mobile to see the example better.

<live-code src="./example.html"></live-code>

<script>
  if (window.innerWidth > 720) {
    // A small hack to scale the size of the demo to make it easier to view inside the live-code preview.
    const livecode = document.querySelector('live-code')

    // const iframe = livecode.shadowRoot.querySelector('iframe')
    // iframe.style.width = "200%"
    // iframe.style.height = "200%"

    // const preview = livecode.shadowRoot.querySelector('.live-code-preview')
    // preview.style.overflow = 'hidden'

    const style = document.createElement('style')
    livecode.shadowRoot.append(style)
    style.textContent = `
      .live-code-preview {
        overflow: hidden;
      }
      .live-code-preview iframe {
        width: 200%;
        height: 200%;
      }
    `

    requestAnimationFrame(function loop() {
      const iframe = livecode.shadowRoot.querySelector('iframe')
      if (iframe?.contentWindow.document?.body) {
        iframe.contentWindow.document.body.style.transformOrigin = 'top left'
        iframe.contentWindow.document.body.style.scale = 0.5
      }
      requestAnimationFrame(loop)
    })
  }
</script>
