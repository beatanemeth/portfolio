# Portfolio Page

Personal portfolio page.

- **Framework:** Built with **Next.js**, **HeroUI**, and **Tailwind CSS**.
- **Images:** Generated with **Gemini**.
- **Deployment:** Hosted as a static site on **GitHub Pages**.

### Public URL

👉 [https://beatanemeth.github.io/portfolio/](https://beatanemeth.github.io/portfolio/)

### Disclaimer

> Copyright © 2026 Beáta Németh.  
> All rights reserved. This source code and the content of this repository are provided for **viewing purposes only** and may NOT be copied, reproduced, or distributed without express written permission.

<br/><br/>

## 1. Technical Details

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### **Operating System used**

- Linux Mint 21.2

### **Node version used**

- v24.14.0

### **Package manager used**

- [npm](https://www.npmjs.com/)

- 11.9.0

### **Install dependencies**

```bash
npm install
```

If [Volta](https://volta.sh/) is installed, it will pin [Node](https://nodejs.org/en) at the correct versions for the project folder.

### Run the development server

```bash
npm run dev
```

open a Browser and enter `localhost:3000`

<br></br>

## 2. Coding Guidelines

### **Code Style**

The project uses [ESLint](https://eslint.org/), [Prettier](https://prettier.io/docs/en/) and [Husky](https://www.npmjs.com/package/husky) to ensure consistency in coding.

**DEPENDENCIES & THEIR PURPOSE**

- [ESLint](https://eslint.org/) &rarr; The Logic Police: to ensure code consistency, e.g., catches actual bugs (like a variable that isn't used)
- [eslint-plugin-unused-imports](https://www.npmjs.com/package/eslint-plugin-unused-imports) &rarr; The Cleanup Crew: automatically removes unused imports while you code (as warnings) and purges them on commit.
- [Prettier](https://prettier.io/docs/en/) &rarr; The Stylist: to ensure that code is properly formatted according to the rules defined
  - [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier) &rarr; The Mediator: prevents any code formatting conflicts between `ESLint` and `Prettier`. As we know, `ESLint` handles both code quality and code formatting. This package disables the rule in `ESLint` that formats code so that `ESLint` only focuses on ensuring code quality.
  - [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) &rarr; The Choreographer: sorts Tailwind CSS classes in the recommended order for readability.
  - [prettier-plugin-organize-imports](https://github.com/simonhaenisch/prettier-plugin-organize-imports) &rarr; The Librarian: automatically sorts and groups import statements.
- [Husky](https://www.npmjs.com/package/husky) &rarr; The Gatekeeper: helps you hook into gits’ pre-commit and post-commit lifecycle.
- [lint-staged](https://www.npmjs.com/package/lint-staged) &rarr; The Sniper: runs defined scripts on only staged files (git).
  <br></br>

**INSTALLATION STEPS**

#### &rarr; ESLint

[Next.js ](https://nextjs.org/) already has `ESLint` preconfigured. The only thing you’ll need to do is:

1. to extend `eslint.config.mjs` file with `Prettier`(see below).
2. install `eslint-plugin-unused-imports` as "The Cleanup Crew". By adding this plugin to your ESLint config, the "fix" command will automatically delete any imports that aren't being used before the commit is finalized.

- install the plugin

```bash
npm install --save-dev eslint-plugin-unused-imports
```

- update the `eslint.config.mjs` to set the rules (see below)
- ensure `package.json` contains

```bash
"lint-staged": {
  "*.{js,jsx,ts,tsx}": [
    "eslint --fix",
    "prettier --write"
  ],
```

#### &rarr; Prettier and additional plugins

Installation and setup

- install npm packages:

```bash
npm install --save-dev --save-exact prettier eslint-config-prettier prettier-plugin-tailwindcss prettier-plugin-organize-imports
```

- create a `.prettierrc.json` file and add [Prettier options](https://prettier.io/docs/en/options.html)

- create a ` .prettierignore` file; here, pass in the folders and files `Prettier` should avoid when formatting your code

- configure `eslint.config.mjs` file:

```JavaScript
// ...
import eslintConfigPrettier from 'eslint-config-prettier';
import unusedImports from 'eslint-plugin-unused-imports';

const eslintConfig = defineConfig([
	// ...
  globalIgnores([
	// ...
  ]),
  {
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
  eslintConfigPrettier,
]);

export default eslintConfig;
```

_Notes:_

- `organizeImportsSkipDestructiveCodeActions` option is enabled to prevent destructive code actions (like removing unused imports). — see: `.prettierrc.json` file.

#### &rarr; Husky and lint-staged

- installation

```bash
npm install --save-dev husky lint-staged
```

- setting up Husky in the project

```bash
npx husky init
```

[Installation and setup](https://www.npmjs.com/package/lint-staged#installation-and-setup)

- inside `.husky/pre-commit` replace `npm test` with `npx lint-staged`:

```bash
npx lint-staged
```

- add the following to `package.json`

```json
   "lint-staged": {
     "*.{js,jsx,ts,tsx}": [
       "eslint --fix",
       "prettier --write"
     ],
     "*.{json,css,md}": [
       "prettier --write"
     ]
   }
```

The `npx lint-staged` command will **run** the `lint-staged `**script** in the `package.json` file **when committing** which ensures that **code is formatted according to the rules defined** and that the **code is free from any linting issues**.
<br/><br/>

**VERIFY THE ENTIRE CODING STYLE SETUP**

1. Test Prettier

This checks if your files are formatted correctly and if your plugins (Tailwind & Organize Imports) are working.

```bash
npm run prettier
```

If this shows _"All matched files use Prettier code style!"_, you are good!

When you want to rewrite all processed files in place, run the following command:

```bash
npm run prettier:format
```

[More details on Prettier CLI](https://prettier.io/docs/en/cli)

2. Test ESLint

This checks if the `eslint.config.mjs` is valid and if there are any actual code bugs.

```bash
npm run lint
```

It should finish without any error messages. (If it's successful, you will only see the command echoed back to you).

3. Test the "Mediator": `eslint-config-prettier`

This is a special command provided by `eslint-config-prettier` to confirm that there are zero conflicts between ESLint and Prettier.

```bash
npm run lint:check
```

It should output: _"No rules that are unnecessary or conflict with Prettier were found."_

<br></br>

## 3. Deployment to GitHub Pages

To host a Next.js app on GitHub Pages, it is needed to be converted into a **fully static website**.  
Instead of needing a Node.js server, we generate raw HTML, CSS, and JS files that any static host can serve.

**Required Steps:**

1. Enable Static Export: Update `next.config.js` and update `.gitignore`.
2. Fix Image Handling: Configure the Next.js Image component for a static environment.
3. Automate with GitHub Actions: Create a workflow to handle builds and deployments.
4. Configure GitHub Settings: Point your repository to the correct deployment source.

**Implementation Details:**

### STEP_1: Update `next.config.js`

Configure Next.js to output static files and handle sub-directory routing.

Related documentation:

- [How to create a static export of your Next.js application](https://nextjs.org/docs/app/guides/static-exports)
- [basePath](https://nextjs.org/docs/app/api-reference/config/next-config-js/basePath)

```JavaScript
import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',     // Enables the static export
  distDir: 'dist',      // Changes output folder from 'out' to 'dist'
  basePath: isProd ? '/portfolio' : '',   // Required for GitHub Project Pages
};

export default nextConfig;
```

NOTE:

- GitHub Pages usually hosts projects at `https://<username>.github.io/<project-name>/`. It should be ensured that the asset paths (CSS/Images) are relative so they load correctly from a subdirectory.
- Ensure you add `dist/` to your `.gitignore` file to avoid committing build artifacts.

### STEP_2: Fix Image Handling

Next.js's `next/image` component normally optimizes images on the fly via a Node.js server. Since GitHub Pages is static, we use `unoptimized: true` to serve original images directly.

Related documentation:

- [Image Component](https://nextjs.org/docs/app/api-reference/components/image)

#### 1. Update `next.config.js`

```JavaScript
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ...
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

_Why is this needed?_

- Setting `unoptimized: true` tells Next.js to serve your original images directly without attempting to process them through a server. Without this, your build will fail because GitHub Pages cannot run the default Next.js Image Optimization API.

#### 2. Create a Path Utility (`utils/path.ts`)

```typescript
const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

export const withBasePath = (path: string) => `${basePath}${path}`;
```

#### 3. Update Your Component

Instead of using a hardcoded string, wrap your image sources with the utility:

```tsx
import { withBasePath } from '@/utils/path';
// ...
<Image
  src={withBasePath(data.image.src)}
  alt={data.image.alt}
  // ...
/>;
```

NOTE: Since images are unoptimized, ensure all assets in the `public/` folder are manually compressed (using tools like [TinyPNG](https://tinypng.com/) or [Squoosh.app](https://squoosh.app/)) before deployment to keep page load times fast.

### STEP_3: Set up GitHub Actions

Automate the deployment process so your site updates every time you push to the main branch.

1. Create the directory `.github/workflows/` in your project root.
2. Create a workflow file, e.g.: `your-file-workflow.yml`
3. Use the official [Next.js GitHub Pages deployment guide](https://github.com/nextjs/deploy-github-pages), and update it to your needs.
   - NOTE: Ensure the build step in your YAML matches your `distDir` (e.g., upload from `dist/` instead of `out/`).

### STEP_4: Configure GitHub Repository

Finally, tell GitHub to use your Action for deployment:

1.  Navigate to your repository on **GitHub.com**.
2.  Go to **Settings** > **Pages**.
3.  Under **Build and deployment** > **Source**, change "Deploy from a branch" to **"GitHub Actions"**.
    - Your site will now automatically build and deploy whenever you push changes!

<br></br>

## 4. Technical Stack Documentation

- [Next.js](https://nextjs.org/docs)
- [HeroUI](https://heroui.com/docs/react/components)
- [Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite)
- [GitHub Pages](https://docs.github.com/en/pages)
  - [How to create a static export of your Next.js application](https://nextjs.org/docs/app/guides/static-exports)
- [GitHub Actions](https://github.com/features/actions)
  - [Next.js GitHub Pages deployment guide](https://github.com/nextjs/deploy-github-pages)
- [@use JSDoc](https://jsdoc.app/)
- [Conventional Commits](https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13)
