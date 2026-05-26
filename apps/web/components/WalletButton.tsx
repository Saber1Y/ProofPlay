type WalletButtonProps = {
  connected?: boolean;
  address?: string;
};

export function WalletButton({ connected = false, address = "0xA1c...B92e" }: WalletButtonProps) {
  if (connected) {
    return <button className="wallet-chip">Connected: {address}</button>;
  }

  return <button className="wallet-chip wallet-chip--cta">Connect Wallet</button>;
}
