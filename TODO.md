TODO

- Figure out why the current setup does not work on Vercel.
- Still some funkiness with this vercel config: three-meshline/ hits github and does 404.html redirect, while three-meshline (no slash) does not. Might need to also configure alias in docsify config.
  ```js
  {"source": "/three-meshline", "destination": "https://lume.github.io/three-meshline/README.md"},
  ```
