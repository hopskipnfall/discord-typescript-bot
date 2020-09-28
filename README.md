![Maintained][maintained-badge]
[![Travis Build Status][build-badge]][build]
[![Make a pull request][prs-badge]][prs]
[![License](http://img.shields.io/badge/Licence-MIT-brightgreen.svg)](LICENSE.md)

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

# discord-typescript-bot

A template repo for you to get started building a Discord bot in TypeScript.

## Configuration

After cloning the repository run `npm install`.

Add your discord bot token to `src/config/config.ts`:

```ts
export let config = {
  token: "djigoj24gijo-dgj9wdfj", // Discord bot token.
  prefix: "!", // Command prefix, ex: !hello
};
```

Note that changes to this file should not be committed to the repository, `config.ts` is part of the .gitignore to prevent this.

## Key Commands

| Command         | Description                         |
| --------------- | ----------------------------------- |
| `npm run start` | Run the bot.                        |
| `npm run build` | Build the typescript code and lint. |
| `npm run test`  | Run all tests.                      |
