import { program } from "commander";
import { markdownTable } from "markdown-table";
import { clients, mainnetClient } from "./utils/chains";

program.description(
  "Compare bytecode of a mainnet contract on different chains. Useful for verifying that a contract address is ~determinisitically reusable."
);

program.argument(
  "<address>",
  "Ethereum mainnet contract address. This address's bytecode will be compared on other chains."
);

program.parse();

// -----------------------------------------------

const address = program.args[0] as `0x${string}`;

// get mainnet bytecode
const mainnetBytecode = await mainnetClient.getBytecode({
  address,
});

// fetch bytecode from all other chains defined in utils/chains.ts
const data = await Promise.all(
  clients.map(async (client) => {
    return {
      chain: client.chain!.name,
      bytecode: await client.getBytecode({
        address,
      }),
    };
  })
);

// compare bytecode against mainnet
const match = data.map((d) => {
  return [d.chain, d.bytecode === mainnetBytecode ? "✅" : "❌"];
});

// results and reporting
console.log(`Address: ${address}`);
console.log(`Bytecode: ${mainnetBytecode}`);
console.log("");
console.log(markdownTable([["Chain", "Matching Bytecode"], ...match]));
