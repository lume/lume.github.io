# Building the docs:

The following copies some source files from node_modules to build API docs from,
and builds the website into the `dist/` folder:

```js
npm run build
```

# Publishing

First get permission to push to https://github.com/lume-vercel/docs.

## Option 1: `git push`

Now simply push
to the `main` branch there and [Vercel](https://vercel.com) will automatically pull and publish
the site to https://docs.lume.io.

```sh
git push git@github.com:lume-vercel/docs.git
```

or

```sh
git remote add lume-vercel git@github.com:lume-vercel/docs.git
git push lume-vercel
```

## Option 2: Sync in GitHub UI

Alternatively, just go to https://github.com/lume-vercel/docs and his the `Sync fork` button.

# Accounts

To log into https://vercel.com, get access to the `lume-vercel` account on
GitHub, then log into Vercel using the `lume-vercel` GitHub account.
