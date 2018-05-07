import { mock } from "ts-mockito";
import { Message, TextChannel } from "discord.js";
import { CommandHandler } from "../src/command_handler";

describe("CommandHandler", () => {
  const commandHandler = new CommandHandler("!");

  it("should execute a command in a message", () => {
    const message = buildMessage("!dale");
  });
});

const buildMessage = (content: string): Message => {
  const message = mock(Message);
  message.content = content;
  return message;
};
