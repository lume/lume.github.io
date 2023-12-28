# Skateboard Configurator

<live-code src="./example.html"></live-code>

<script>
  // A small hack to scale the size of the demo to make it easier to view inside the live-code preview.
  const livecode = document.querySelector('live-code')

  const iframe = livecode.shadowRoot.querySelector('iframe')
  iframe.style.width = "200%"
  iframe.style.height = "200%"

  const preview = livecode.shadowRoot.querySelector('.live-code-preview')
  preview.style.overflow = 'hidden'

  requestAnimationFrame(function loop() {
    if (iframe.contentWindow.document?.body) {
      iframe.contentWindow.document.body.style.transformOrigin = 'top left'
      iframe.contentWindow.document.body.style.scale = 0.5
    }
    requestAnimationFrame(loop)
  })
</script>