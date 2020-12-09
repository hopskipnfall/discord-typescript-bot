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
  token: "xxxxx", // Discord bot token.
  prefix: "!", // Command prefix, ex: !hello
};
```

Note that changes to this file should not be committed to the repository, `config.ts` is part of the .gitignore to prevent this.

## Key Commands

| Command          | Description                            |
| ---------------- | -------------------------------------- |
| `npm run start`  | Run the bot.                           |
| `npm run build`  | Build the typescript code.             |
| `npm run lint`   | Runs the linter on the code.           |
| `npm run format` | Fixes most lint errors using Prettier. |
| `npm run test`   | Run all tests.                         |

[build-badge]: https://travis-ci.org/hopskipnfall/discord-typescript-bot.svg?branch=master&style=style=flat-square
[build]: https://travis-ci.org/hopskipnfall/discord-typescript-bot
[license-badge]: https://img.shields.io/badge/license-Apache2-blue.svg?style=style=flat-square
[license]: https://github.com/hopskipnfall/discord-typescript-bot/blob/master/LICENSE.md
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[github-watch-badge]: https://img.shields.io/github/watchers/hopskipnfall/discord-typescript-bot.svg?style=social
[github-watch]: https://github.com/hopskipnfall/discord-typescript-bot/watchers
[github-star-badge]: https://img.shields.io/github/stars/hopskipnfall/discord-typescript-bot.svg?style=social
[github-star]: https://github.com/hopskipnfall/discord-typescript-bot/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20angular-electron!%20https://github.com/hopskipnfall/discord-typescript-bot%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/hopskipnfall/discord-typescript-bot.svg?style=social
[maintained-badge]: https://img.shields.io/badge/maintained-yes-brightgreen
