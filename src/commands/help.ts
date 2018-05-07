import { Command } from "./command";
import { Message } from "discord.js";
import { CommandContext } from "../models/command_context";

export class HelpCommand implements Command {
  readonly commandNames = ["help", "halp", "hlep"];

  private commands: Command[];

  constructor(commands: Command[]) {
    this.commands = commands;
  }

  async run(commandContext: CommandContext): Promise<void> {
    const allowedCommands = this.commands.filter(command => command.hasPermissionToRun(commandContext));

    if (commandContext.args.length == 0) {
      // No command specified, give the user a list of all commands they can use.
      const commandNames = allowedCommands.map(command => command.commandNames[0]);
      await commandContext.originalMessage.reply(
        `here is a list of commands you can run: ${commandNames.join(", ")}. Try !help ${commandNames[0]} to learn more about one of them.`);
      return;
    }

    const matchedCommand = this.commands.find(command => command.commandNames.includes(commandContext.args[0]));
    if (!matchedCommand) {
      await commandContext.originalMessage.reply("I don't know about that command :(. Try !help to find all commands you can use.");
      return Promise.reject("Unrecognized command");
    } else if (allowedCommands.includes(matchedCommand)) {
      await commandContext.originalMessage.reply(matchedCommand.getHelpMessage(commandContext.commandPrefix));
    }
  }

  hasPermissionToRun(commandContext: CommandContext): boolean {
    return true;
  }

  getHelpMessage(commandPrefix: string) {
    return "I think you already know how to use this command...";
  }
}
