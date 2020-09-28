import { Message } from 'discord.js';
import { mock } from 'ts-mockito';
import { CommandHandler } from '../src/command_handler';

const buildMessage = (content: string): Message => {
  const message = mock(Message);
  message.content = content;
  return message;
};

describe('CommandHandler', () => {
  const commandHandler = new CommandHandler('!');

  it('should execute a command in a message', () => {
    const message = buildMessage('!dale');
  });
});
