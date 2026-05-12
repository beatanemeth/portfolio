# Portfolio Page

The goal of the project is to create a Portfolio Page using Next.js with Tailwind CSS and Hero UI. It should be a statically generated page, because it will be hosted on GitHub Pages.

<br/><br/>

## 1. Technical Details

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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
