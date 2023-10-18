# Contributing

Join the effort in making an amazing application development toolkit!

## Get the code

Clone the main `lume` code repository (repo for short), which is an "umbrella
repo" or "super module" that contains all the projects (sometimes referred to as sub projects)
that LUME consists of where each project is a [git
submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules) within the
repo.

If you don't have a GitHub account, you won't be able to propose changes to
the code from a local copy, but you can still clone the code repo and modify
it locally to try things out using an **https URL**:

```bash
git clone --recursive https://github.com/lume/lume.git
```

To actually contribute changes, you'll need to have a GitHub account and to
have [added an SSH
key](https://help.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)
to your account.

> [!Note]
> To make an SSH key, simply run the `ssh-keygen` command and hit
> enter to accept default values at each prompt.

Alternatively, you can also edit code directly on GitHub without having to
set up an SSH key. Here is the [GitHub Hello World
tutorial](https://guides.github.com/activities/hello-world) that shows how to
edit code and submit code change proposals directly through the GitHub UI.

If you have your SSH key set up and are ready to develop locally on your
machine, then clone the main repo using the **SSH URL**:

```bash
git clone --recursive git@github.com:lume/lume.git
```

Go into the local copy of the code repo that you just cloned:

```bash
cd lume
```

> [!Note]
> If you're not familiar with [`git`](https://git-scm.com),
> [GitHub](https://github.com/), and how to make code change proposals (pull
> requests), start with the [GitHub Hello World
> tutorial](https://guides.github.com/activities/hello-world).
>
> If at any time you need help, don't hesitate to ask for help in the
> [forum](//lume.community) or the [chat server](//discord.gg/PgeyevP).

## Installing dependencies

### System Dependencies

Only macOS and Linux are officially supported for development, for now. In
Windows you can use [Windows Subsystem for Linux
(WSL)](https://learn.microsoft.com/en-us/windows/wsl/install) to run Linux
inside Windows in an official way provided by Microsoft.

First install needed system dependencies.

1. Install [Node.js](https://nodejs.org), which comes with the
   `npm` command. `npm` (the Node Package Manager) is a standard tool in the
   world of JavaScript for installing JavaScript depedencies into a JavaScript-
   (or TypeScript-) based projects.
2. Run `corepack enable` (you may need sudo or admin privileges), which is a
   command from Node.js that enables [Yarn](https://yarnpkg.com/) and
   [PNPM](https://pnpm.io/) package managers that also ship out of the box with
   Node.js (as an alternative to the default NPM package manager).
3. If you are in `macOS`, you will need to install `libpng` and `pkg-config` or
   will face an [error saying `pngquant pre-build test failed`](https://github.com/gatsbyjs/gatsby/issues/20389).
   - First install [Homebrew](https://brew.sh)
   - then run `brew install libpng pkg-config`.
4. Install `xvfb` which includes the command `xvfb-run` for running Linux windows headlessly during testing.
   - In Linux (and WSL), the package is usually has the name `xvfb` in it.
     - f.e. in Ubuntu: `sudo apt install xvfb`
     - and in Arch Linux `pacman -S xorg-server-xvfb`.
   - In macOS
     - you can install it from https://www.xquartz.org/
     - or use Homebrew: `brew install XQuartz`

### Local Dependencies

If you've cloned the repo fresh, run:

```bash
npm run fresh
```

This will do the following:

1. Recursively clone all projects and packages as git submodules (if you didn't
   already clone recursively).
2. Install top-level repo dependencies using Yarn.
3. Install project/package (the git submodules) dependencies and link them
   together with Yarn
   - See the `workspaces` field in lume's `package.json` to determine the list
     of projects/packages.
   - Projects/packages are linked together (with symlinks in Linux/macOS or
     junctions in Windows) so that if a project at `packages/A` (for example)
     depends on a project at `packages/B` (for example), then `packages/A` will
     contain a symlink `packages/A/node_modules/B` that links to `packages/B`.
     This linking is useful because it makes it so we can make changes in one
     project which is a dependency of another project, then we can run the
     dependent project with those active changes in place, making it easy to
     prototype changes across all projects/packages at once.
4. After the installation of dependencies and linking of projects, everything is
   in place and ready to go, and no build is needed to run examples and docs. This
   is because JavaScript build output is committed to the repo in the dist/ folders
   (or other folders) of each package (compiled from source TypeScript files in
   src/ folders).
   - If you update TypeScript source files, you'll need to subsequently run the
     build to update the JavaScript files, and subsequently run tests to ensure
     things work. More on that below.

#### Reset and re-install

If you pull and update git submodules, or if for any reason you get into a bad
state with the the linked projects and dependencies (f.e. say you ran `npm
install` in a git submodule to do something temporary, and it destroyed links to
other packages, or something, etc), you can refresh the repo back to its good
installed/linked state by running the following at the root of the `lume` repo:

```bash
npm run refresh
```

This will unlink all projects and remove all dependencies by removing
`node_modules` folders, then re-install and re-link everything like `npm run
fresh` does.

## Development workflow

### Making changes

Now that the project is set up and things are installed, you can make changes
to any file in any projects that are in the `apps/` or `packages/` folders,
build the files in development mode which watches files and automatically
rebuilds a project when files have changed, then finally run tests to make
sure the changes work and don't break any existing functionality.

In order to make changes to code of a project, run the project in development
mode by entering into that project's folder and running the dev process.

```bash
# Go into a packages/<project-name> or apps/<project-name> folder.
cd packages/foo

# EXCEPT! For the main `lume` package, it is in the root, no need to `cd` in that case.

# Start the dev build.
npm run dev
```

That will watch files and automatically rebuild the project when any source
files in the project have changed. Source files are by convention in a project's
`src/` folder. You can run this in multiple projects, and then you can modify
files in multiple projects, and they will all re-build upon changes, and you can
finally see the results in the live examples/docs.

> [!Note]
> Some projects may not have a `dev` script, namely forked 3rd-party packages.
> Such packages might also not specifically have a `src/` folder. All of lume's
> own projects follow the `dev`/`src` convention.
>
> A good way to discover what to run in a project is by peeking at the
> `scripts` section of a project's `package.json` file. Run any script you see
> listed with `npm run <script-name>`.

### Testing

After making code changes, you'll need to add new tests for any new features.
Then you'll want to run the project's tests to ensure the new features work
and that existing features haven't broken.

For any projects managed with `@lume/cli` (basically our packages but not
necessarily 3rd-party forked packages), any files ending with `.test.ts`
anywhere in the `tests/` or `src/` folders are test files that will be executed
by the [Karma](https://karma-runner.github.io/latest/index.html) test runner
(specifically [our fork](https://github.com/lume/karma) due to [this
issue](https://github.com/karma-runner/karma/issues/3329)).

> [!Note]
> We'd like to migrate to [Web Test
> Runner](https://github.com/modernweb-dev/web/tree/master/packages/test-runner)
> for a smoother and more modern testing experience.

To run the tests for a project (including the root level `lume` package), run

```bash
npm test
```

To debug tests any any of the projects, we can open a visible Chrome browser
window in which Karma is running tests, and use Chrome's
[devtools](https://developers.google.com/web/tools/chrome-devtools) for
debugging (f.e. stepping through the test code). To do so, run the following in
any project (except for forked libs, in that case see their `package.json` for
alternatives):

```bash
npm run test:debug
```

Click the button to start the tests. Right click anywhere in the window that
opens after clicking the button, and hit "Inspect" to open the devtools. This
is useful for seeing console output to aid in debugging failed or new tests.

If the test pass, now you should also run the tests for all of the projects to
make sure the no other projects broke.

To run tests for all projects, go back into the parent folder so you are outside
of a project, then run tests:

```bash
cd ../../ # Back out of a project to the root of the main lume repo.
npm run test:all # This runs tests for all projects.
```

#### Test format

The tests (in non-forked libs) use the APIs provided by the [Jasmine testing
framework](https://github.com/karma-runner/karma/issues/3329), which provides
the `describe()`/`it()` functions to describe unit tests, and provides the
`expect()` function for writing meaningful assertions.

Unit test files generally follow this format:

```js
import {SomeThing} from './a-file'

// imagine SomeThing is a class with a foo property having an initial value of 'bar'
// imagine SomeThing has a method bar() that returns a number

describe('something we want to test', {
  it('has foo property with value "bar"', () => {
    const something = new SomeThing

    // The test will fail if the foo property is not 'bar' as we expect.
    expect(something.foo).toBe('bar')
  })

  it('has foo property with value "bar"', () => {
    const something = new SomeThing

    // The test will fail if the return value of bar() is not a real number
    expect(typeof something.bar()).toBe('number')
    expect(isNaN(something.bar())).toBe(false)
  })
})
```

### Code format and style

Most source files are written in TypeScript, and end in `.ts` respectively.

Please make sure your editor obeys the rules set forth by `.editorconfig` and
`.prettierrc.js`. There are [EditorConfig](https://editorconfig.org) and
[Prettier](https://prettier.io) plugins for just about every text editor out
there. Please install the plugins for your editor to make sure your editor
automatically follows the code formatting rules.

All IDEs typically have a format-on-save option that can run a chosen formatter
any time you save a file. Be sure to select Prettier after you've installed it
in your IDE.

> [!Note]
> If you forget to format, a pull request check will fails and you'll know you
> have to format to get the pull request build to pass.

Even if you don't have the editor plugins, you can automatically format all
the code in a project by running the following within a project:

```bash
npm run prettier
```

### Submitting code changes

Once you are statisfied with your code changes (which may span across multiple
projects/submodules) and have tested them and all tests pass, you'll need to
push the changes to a branch in your fork(s) of the code repo(s) on GitHub
(besides the [GitHub Hello World
tutorial](https://guides.github.com/activities/hello-world) see also the GitHub
guide on [pull
requests](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests)
if needed).

If the project whose code you modified is a git submodule in the main lume repo,
you'll need to
[fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)
that repo to your GitHub account, and push
a branch with your changes to that fork. For example, if you edited code
inside of `packages/element/`, then the project's code repo is most likely at
https://github.com/lume/element and you can go there to hit the "Fork"
button to fork the repo to your GitHub account.

> :bulb:**Tip**
>
> Run `git remote -v` within a project to see the project's remote code repo
> URLs. You'll see something like `origin git@github.com:lume/element.git (fetch)`
> in which case you can infer that the page you should visit is at
> https://github.com/lume/element. Most of the time a project's `package.json`
> also contains the URL to the git repo.

Now commit changes in the project (the git submodule):

```bash
# If you're not in the project folder, go back into it, for example.
cd packages/element/

# Tell git where your remote repo is located.
# Replace "element" with the correct project repo name if needed!
git remote add my-fork git@github.com:<username>/element.git

# Make a new branch.
git checkout -b my-changes

# Add all your changes (or just add some of them if you know how to use git).
git add .

# Commit the changes into your local copy of he repo with a helpful description (up to you).
git commit -m "put a small description of the changes here"

# Upload the changes to your remote fork on GitHub:
git push my-fork my-changes
```

where `<username>` is your GitHub username.

You'll need to fork the main repo
([github.com/lume/lume](https://github.com/lume/lume)) to your own GitHub account too.

Once you've made the fork, you'll need to add your forked GitHub repo to the list of remote
repos in your local copy so that `git` will know where to push your code
changes to. Run the following within the main lume repo but _not_ within a sub
project:

```bash
# If needed, back out of a sub project back into the main repo.
cd ../../

# Tell git where your remote repo is located.
git remote add my-fork git@github.com:<username>/lume.git
```

where `<username>` is your GitHub username.

Now make a commit with your changes on a new branch of the top level repo. Run
the following in the main repo, but _not_ in a sub project, to add the changes
including any commits you made in the sub projects (git submodules):

```bash
# Make a new branch.
git checkout -b my-changes

# Add all your changes (or just add some of them if you know how to use git).
git add .

# Commit the changes into your local copy of he repo with a helpful description (up to you).
git commit -m "put a small description of the changes here"

# Upload the changes to your remote fork on GitHub:
git push my-fork my-changes
```

Finally, open a pull request over at https://github.com/lume/lume/pulls, and
if you modified a sub project that is also a git submodule, then also open a
pull request for that project (for example at
https://github.com/lume/element/pulls).

> [!Note]
> If you made changes to multiple sub projects that are git
> submodules, you'll need to make a new branch and commit the changes for
> each of those sub projects individually, and push the changes to each
> project's repo.

> [!Note]
> By also making a main lume repo commit if you modified any of the git
> submodules, this makes it easy for us to checkout the main repo commit and
> automatically checkout all the appropriate commits of the git submodules at once
> (rather than, for example, having to go one-by-one checkout commits in every git
> submodule) to easily test everything in the state you had it.

### Code review

Once you've opened pull requests, tests will run automatically and you can see
their status at the bottom of the pull request page. A pull request can only
be merged if all tests have passed and your pull request has been approved by
reviewer(s).

for each git submodule (sub project) that you make a pull request for, the tests
for that individual project will be ran. Additionally, any pull request for the
main repo will run all the tests of all projects to make sure everything works
as a whole when things are all linked together in the main repo.

If reviewers approve the changes and all tests have passed in both
the sub project(s) pull request(s) and the main repo pull request, you're ready to merge:

> [!Warning]
> First merge the pull request(s) for the sub project(s) so that
> the commit is available in LUME's copy of the project repo(s), then merge the
> main repo pull request.

## Production workflow

This section is mostly for maintainers, but if you're managing a fork of Lume,
you might find it useful too.

### Production build

To build the package for production (without watch mode), run

```bash
npm run build
```

### Publishing a new version

When ready to publish a new version, run one of the following depending on
which part of the version number you want to increment (see
[SemVer](https://semver.org/) for conventions on patch, minor, and major
version numbers).

```bash
npm run realease:patch
npm run realease:minor
npm run realease:major
```

Any of the three `release:*` scripts will:

- clean the project of any previous build output.
- stash any changes in the repo.
- build the project in production mode.
- run the project's tests to ensure everything is okay.
- increment the version number (according to SemVer rules depending on if you
  choose patch, minor, or major).
- create a new commit containing the version number in the form "v1.2.3" as
  the commit message.
- tag that commit with a git tag of the same name as the commit message.
- publish the new version to NPM.
- push the commit and the tag to GitHub.
- unstash any changes if there were any at the beginning.

If something goes wrong (f.e. an error during the build or test process), fear not, the package will
not be published. Fix the failing tests or errors, and try again.

> [!Note]
> After a failure in publishing, any changes that were stashed
> during the publish process will remain stashed.
