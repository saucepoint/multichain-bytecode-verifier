import { markdownTable } from "markdown-table";
import { clients, mainnetClient } from "./utils/chains";

const address = "0x4e59b44847b379578588920cA78FbF26c0B4956C";

const mainnetBytecode = await mainnetClient.getBytecode({
  address,
});

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

const match = data.map((d) => {
  return [d.chain, d.bytecode === mainnetBytecode ? "✅" : "❌"];
});

console.log(`Address: ${address}`);
console.log(`Bytecode: ${mainnetBytecode}`);
console.log("");
console.log(markdownTable([["Chain", "Matching Bytecode"], ...match]));
