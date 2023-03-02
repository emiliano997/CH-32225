import { Command } from "commander";

const program = new Command();

program
  .option("-d, --debug", "Enable debugging", false)
  .option("-p, --port <port>", "Port to listen on", 3000)
  .requiredOption("-u, --username <username>", "Username is required")
  .option("-t, --timeout <timeout>", "Timeout in ms", 1000)

program.parse()

console.log('Options: ', program.opts())
console.log('Arguments: ', program.args)