# Best Practices

- Avoid using `undefined` explicitly. Always leave `undefined` as a value for
  things that never existed. For something that was explicitly removed, use
  `null`. A `null` value is treated as a value that exists, rather than a value
  that never existed.

  ```js
  class MyClass {
    thing: Thing | undefined = undefined // bad
    thing: Thing | null = null // good
  }
  ```

  This is important because there are a few places in Lume's packages that check
  for the existence of values using `!== undefined`.
