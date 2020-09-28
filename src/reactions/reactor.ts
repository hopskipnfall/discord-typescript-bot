import { Message } from 'discord.js';
import { config } from '../config/config';

const ACK_REACTIONS = ['👍', '🎮', '💚', '🍜'];
const EXPIRED_REACTIONS = ['🖤'];
const FAILURE_REACTIONS = ['⛔', '🚱'];

/** Gets a random element of an array. */
const getRandom = (array: string[]) =>
  array[Math.floor(Math.random() * array.length)];

export class Reactor {
  enableReactions: boolean;

  constructor(enableReactions: boolean) {
    this.enableReactions = enableReactions;
  }

  /** Indicates to the user that the command was executed successfully. */
  async success(message: Message) {
    if (!this.enableReactions) return;

    await message.react(getRandom(ACK_REACTIONS));
  }

  /** Indicates to the user that the command failed for some reason. */
  async failure(message: Message) {
    if (!this.enableReactions) return;

    await message.reactions.removeAll();
    await message.react(getRandom(FAILURE_REACTIONS));
  }

  /** Indicates to the user that the command is no longer active, as intended. */
  async expired(message: Message) {
    if (!this.enableReactions) return;

    await message.reactions.removeAll();
    await message.react(getRandom(EXPIRED_REACTIONS));
  }
}

export const reactor = new Reactor(config.enableReactions);
