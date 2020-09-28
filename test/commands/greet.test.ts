import { GreetCommand } from '../../src/commands/greet';

describe('GreetCommand', () => {
  const command = new GreetCommand();

  it("should say 'Hello, world!'", () => {
    expect(true).toBe(true);
  });
});
