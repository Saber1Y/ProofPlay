"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export function WalletButton() {
  return (
    <ConnectButton
      label="Connect Wallet"
      accountStatus={{ smallScreen: "avatar", largeScreen: "address" }}
      chainStatus={{ smallScreen: "icon", largeScreen: "name" }}
      showBalance={{ smallScreen: false, largeScreen: false }}
    />
  );
}
