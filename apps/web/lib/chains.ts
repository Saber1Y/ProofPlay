import { defineChain } from "viem";
import { localhost } from "wagmi/chains";

const somniaChainId = Number(process.env.NEXT_PUBLIC_SOMNIA_CHAIN_ID ?? "50312");
const somniaRpcUrl = process.env.NEXT_PUBLIC_SOMNIA_RPC_URL ?? "https://50312.rpc.thirdweb.com";
const somniaExplorerUrl =
  process.env.NEXT_PUBLIC_SOMNIA_EXPLORER_URL ?? "https://testnet.somnia.exploreme.pro";

export const somniaTestnet = defineChain({
  id: somniaChainId,
  name: "Somnia Shannon Testnet",
  nativeCurrency: {
    name: "Somnia Test Token",
    symbol: "STT",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: [somniaRpcUrl]
    }
  },
  blockExplorers: {
    default: {
      name: "Somnia Explorer",
      url: somniaExplorerUrl
    }
  }
});

export const appChains = [somniaTestnet, localhost] as const;
