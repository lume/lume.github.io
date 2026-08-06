- [Documentation](/)
- [Examples](/examples/hello-world/)
- [Forum](//lume.community)
- [Chat](//discord.gg/PgeyevP)
- [Source Code](//github.com/lume/lume)
- <blaze-component id="loginButtons" tmpl="loginButtons" data='{"align": "right"}' onclick="
    // Don't allow this menu item to have effect on Docsify's routing.
    event.stopImmediatePropagation()
    // Only handle clicks on the dropdown link.
    if (!event.target?.classList.contains('login-link-text')) return
    // This makes it so that clicking the dropdown link will close the popup if
    // it is already open.
    const close = document.querySelector('.login-close-text')
    if (close) close.click()
  "></blaze-component>

<style>
  /* TEMPORARY: hide Sign in in Safari while Safari auth iframe flow is disabled due to freezes. */
  html.is-safari #loginButtons {
    display: none !important;
  }

  #loginButtons {
    user-select: none;

    .accounts-dialog {
      pointer-events: auto;
      text-transform: none;
      font-family: var(--base-font-family);
      text-align: left;
      letter-spacing: normal;
      text-decoration: none;

      transform: translate(-16px, 30px);
    }

    .accounts-dialog * {
      font-family: inherit;
    }

    .login-link-text {
      text-decoration: none;
    }

    .accounts-dialog > .login-close-text {
      display: none;
    }

    .accounts-dialog .login-button-form-submit {
      margin-top: 12px;
    }
    .accounts-dialog .login-button {
      margin-bottom: 6px;
    }
  }
</style>
