# Commits

## Convential

- [Convential commits](https://www.conventionalcommits.org/en/v1.0.0/) - convention of commit messages.
- Syntax of commit message:

```
  <type>[optional scope]: <description>
  [optional description]
  [optional footer]

  fix(styles): fixed global.css
  removed the old global.css and added a new global.css
```

- The description is a short summary of the code changes.
- Other conventials:
  - `!`: draw attention to commit

## Types

- **fix**: patches a bug
- **feature**: introduces new feature
- **build**: building a project or changing external dependencies
- **docs**: updating documentation
- **refactoring**: code edits without fixing errors or adding new functions
- **revert**: rollback in
- **style**: commits with codestyle edits (tabs, periods, commas, etc.)
- **test**: adding tests

## Tools and installation

### [Prettier](https://prettier.io/docs/en/install)

```bash
npm i prettier -D
```

- Create `.prettierignore`.
- Create `.prettierrc`.

```json
{
	"trailingComma": "none",
	"tabWidth": 2,
	"semi": true,
	"singleQuote": false,
	"printWidth": 78,
	"useTabs": true,
	"arrowParens": "avoid",
	"singleAttributePerLine": true
}
```

- Add script to `package.json`:

```json
{
	"scripts": {
		"format": "prettier --write \"**/*.{js,jsx,ts,tsx,json,css,md}\""
	}
}
```

### [ESLint](https://eslint.org/docs/latest/use/getting-started)

```bash
npm init @eslint/config@latest
```

- Config for `eslint.config.mjs`.

```javascript
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
	{ languageOptions: { globals: globals.browser } },
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
		rules: {
			"no-unused-vars": "off"
		},
		settings: {
			react: {
				version: "detect"
			}
		}
	}
];
```

- Add script to `package.json`:

```json
{
	"scripts": {
		"lint": "eslint ."
	}
}
```

### [husky](https://typicode.github.io/husky/get-started.html)

```bash
npm i husky -D
npx husky init # create .husky directory
```

- Create `.husky/pre-commit`:

```
npm run format
npm run lint
```

### [cz-customizable](https://github.com/leoforfree/cz-customizable)

- Create `commitizen.js`:

```javascript
"use strict";

module.exports = {
	// type(scope)
	types: [
		{ value: "docs", name: "docs: Changed docs" },
		{ value: "fix", name: "fix: Bug fix" }
		// etc
	],

	scopes: [
		{ name: "api" },
		{ name: "styles" },
		{ name: "other" },
		{ name: "info" }
		// etc
	],

	messages: {
		type: "Какие изменения вы вносите?",
		scope: "\nВыберите ОБЛАСТЬ, которую вы изменили (опционально):",
		customScope: "Укажите свою ОБЛАСТЬ:",
		subject: "Напишите КОРОТКОЕ описание в ПОВЕЛИТЕЛЬНОМ наклонении:\n",
		body: 'Напишите ПОДРОБНОЕ описание (опционально). Используйте "|" для новой строки:\n',
		breaking: "Список BREAKING CHANGES (опционально):\n",
		footer:
			"Место для мета данных (тикетов, ссылок и остального). Например: SECRETMRKT-700, SECRETMRKT-800:\n",
		confirmCommit: "Вас устраивает получившийся коммит?"
	},

	allowCustomScopes: true,
	allowBreakingChanges: false,
	subjectLimit: 72
};
```

- Add links to `package.json`:

```json
{
  "scripts": {
		"commit": "git cz",
  }
	// ...
	"config": {
		"commitizen": {
			"path": "node_modules/cz-customizable"
		},
		"cz-customizable": {
			"config": "commitizen.js"
		}
	}
}
```

### [Commitlint](https://commitlint.js.org/guides/getting-started.html)

```bash
npm i - D @commitlint/cli
```

- Create file `commitlint.config.js`:

```javascript
export default {
	parserPreset: "conventional-changelog-conventionalcommits",
	extends: ["@commitlint/config-conventional"],
	rulers: {
		"type-case": [2, "always", "lower-case"],
		"type-empty": [2, "never"],
		"type-enum": [
			2,
			"always",
			[
				"docs",
				"fix",
				"feat"
				// etc
			]
		]
	}
};
```

- Add to `package.json`:

```json
{
	// ...
	"commitlint": {
		"extends": ["@commitlint/config-conventional"]
	}
}
```
