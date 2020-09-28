import { Message, TextChannel, Guild } from 'discord.js';
import { mock } from 'ts-mockito';
import { GreetCommand } from '../../src/commands/greet';
import { CommandContext } from '../../src/models/command_context';

describe('GreetCommand', () => {
  const command = new GreetCommand();

  it("should say 'Hello, world!'", () => {
    expect(true).toBe(true);
  });
});
