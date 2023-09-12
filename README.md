# multichain-bytecode-verifier

Check if a contract's bytecode is the same on different networks

> `./bytecode-check <address>`

## Example:

which networks support Arachnid's CREATE2 Deployer Proxy: `0x4e59b44847b379578588920cA78FbF26c0B4956C`

```
Address: 0x4e59b44847b379578588920cA78FbF26c0B4956C
Bytecode: 0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe03601600081602082378035828234f58015156039578182fd5b8082525050506014600cf3
```

| Chain                       | Matching Bytecode |
| --------------------------- | ----------------- |
| Ethereum                    | ✅                |
| Goerli                      | ✅                |
| Sepolia                     | ✅                |
| Arbitrum One                | ✅                |
| Arbitrum Goerli             | ✅                |
| Arbitrum Nova               | ✅                |
| OP Mainnet                  | ✅                |
| Optimism Goerli             | ✅                |
| Polygon                     | ✅                |
| Polygon Mumbai              | ✅                |
| Polygon zkEVM               | ✅                |
| Polygon zkEVM Testnet       | ✅                |
| Base                        | ✅                |
| Base Goerli                 | ✅                |
| Avalanche                   | ✅                |
| Avalanche Fuji              | ✅                |
| Boba Network                | ❌                |
| BNB Smart Chain             | ✅                |
| Binance Smart Chain Testnet | ✅                |
| Canto                       | ❌                |
| Celo                        | ✅                |
| Alfajores                   | ✅                |
| Cannoli                     | ❌                |
| Fantom                      | ✅                |
| Fantom Testnet              | ✅                |
| Gnosis                      | ✅                |
| Gnosis Chiado               | ✅                |
| Linea Mainnet               | ✅                |
| Linea Goerli Testnet        | ✅                |
| Mantle                      | ✅                |
| Mantle Testnet              | ✅                |
| Metis                       | ❌                |
| Metis Goerli                | ✅                |
| opBNB                       | ✅                |
| opBNB Testnet               | ✅                |
| zkSync Era                  | ❌                |
| zkSync Era Testnet          | ❌                |
| Zora                        | ✅                |
| Zora Goerli Testnet         | ✅                |

---

# Usage

`./bytecode-check <address>`

```
Usage: bytecode-check [options] <address>

Compare bytecode of a mainnet contract on different chains. Useful for verifying that a contract address is ~determinisitically reusable.

Arguments:
  address     Ethereum mainnet contract address. This address's bytecode will be compared on other chains.

Options:
  -h, --help  display help for command
```

# Development

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts <address>
```

or

```bash
bun build --compile index.ts --outfile bytecode-check

./bytecode-check <address>
```

---

This project was created using `bun init` in bun v1.0.1. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
