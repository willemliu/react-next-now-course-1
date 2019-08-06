# React, NextJS and Now introduction

(2hrs)

This course is aimed at experienced developers with zero knowledge of frontend technologies. In this course you'll get familiar with the `React`, `NextJS` and `Now` stack. We will **not use** the various bootstrapping tools available to us like [create-next-app](https://github.com/zeit/create-next-app). The goal is to understand how to bootstrap this stack step-by-step. We will attempt to create the absolute minimum viable product adhering to our acceptance criteria.
After this course you will know how to:

-   Bootstrap a NextJS application
-   Do local development
-   Deploy your application to `now`
-   Gain basic knowledge of React components

# Acceptance criteria

1. Create a NextJS application with at an index page.
    - Check if your page works by running `npx next` (or your npm script: see bonus tasks) on the command-line. Keep the server running during this course to see hot-reloading in action.
        - Bonus: Create an `npm script` named `dev` which runs `next`.
        - Bonus: Create an `npm script` named `build` which runs `next build`.
1. This page needs to have a visible title (`<h1/>`).
    - Bonus: Use `styled-jsx` to give `<h1/>` a different look.
1. Implement a `<Paragraph/>` function component in a separate file which renders a `<p/>` with text given via `props`.
1. Use `<Paragraph/>` in your index page and make sure it renders.
1. In the `<Paragraph/>` component implement a click listener.
    1. The click handler needs to increment a counter for each click.
    1. The click count needs to be shown in the paragraph text.

# Steps

<details>
<summary>Sprint 1</summary>

1. Run `npm init`
1. Run `npm i -S typescript next react react-dom @types/react @types/react-dom @types/node`
1. Create a folder named `pages` at the root of your project
1. Create a file called `index.tsx` in the `pages` folder
    - Tip: React components: https://reactjs.org/docs/components-and-props.html
    - Tip: Introduction JSX: https://reactjs.org/docs/introducing-jsx.html
1. Run `npx next`
1. Open a browser and check your result

</details>

<details>
<summary>Bonus sprint 1.5</summary>

1. Create npm script named `dev` which runs the `next` command
1. Create npm script named `build` which runs the `next build` command
1. Test that your npm scripts work correctly
1. Bonus: Give your components a different styling
    - Tip: styled-jsx: https://nextjs.org/docs#built-in-css-support

</details>

<details>
<summary>Sprint 2</summary>

1. Create a folder named `components`
1. Create a file named `Paragraph.tsx` in the folder `components`
1. Include `<Paragraph/>` component in `index.tsx`
1. Implement a click handler for this paragraph and store the number of clicks in a state.
    - Tip: Handling events: https://reactjs.org/docs/handling-events.html
    - Tip: State Hook: https://reactjs.org/docs/hooks-state.html
1. Run `now`
1. Open the URL created by `now` in a browser

</details>

# What's next

<details>
<summary>`next` steps?</summary>

1. Research the possbilities with `next.config.js` configuration.
    - How to set environment variables
    - How to set local environment variables
        - Tip: [dotenv](https://www.npmjs.com/package/dotenv) is included in NextJS
1. Research the possibilities with `now.json` configuration.
    - How to set environment variables using `now secrets`
    - How to configure custom routes

</details>

# Resources

-   Introduction JSX: https://reactjs.org/docs/introducing-jsx.html
-   React components: https://reactjs.org/docs/components-and-props.html
-   Handling events: https://reactjs.org/docs/handling-events.html
-   State Hook: https://reactjs.org/docs/hooks-state.html

# Free gifts from Next and Now

-   Code-splitting
-   Minification
-   Tree shaking
-   Server-side & client-side route handling
-   Commit-based deployments
-   Infrastructure management

# Caveats

-   Know what modules to include where and when (server or client or both)
-   Opinionated NextJS framework
-   Only supports their own router
