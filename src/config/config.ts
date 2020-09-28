/**
 * Discord bot config.
 *
 * Revisions to this file should not be committed to the repository.
 */
export type BotConfig = {
  /** the Discord bot token. */
  token: string;
  /** Prefix used for bot commands. */
  prefix: string;
  /** The name of the role that gives ultimate power over the bot. */
  botOwnerRoleName: string;
  /** The bot will add reactions to the command messages indicating success or failure. */
  enableReactions: boolean;
};

export const config: BotConfig = {
  token: '', // TODO: Put your token here!
  prefix: '!', // Command prefix. ex: !help
  botOwnerRoleName: 'bot-owner',
  enableReactions: true,
};
