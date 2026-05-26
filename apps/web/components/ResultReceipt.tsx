import type { DemoRoomReceipt } from "@/lib/demo-data";

type ResultReceiptProps = {
  receipt: DemoRoomReceipt;
};

export function ResultReceipt({ receipt }: ResultReceiptProps) {
  return (
    <article className="card">
      <h2 className="section-title">AI Receipt</h2>
      <p className="receipt">{receipt.text}</p>

      <dl className="kv" style={{ marginTop: "1rem" }}>
        <div>
          <dt>Payout Status</dt>
          <dd>{receipt.payoutStatus}</dd>
        </div>
        <div>
          <dt>Winner Wallet</dt>
          <dd>{receipt.winnerWallet}</dd>
        </div>
        <div>
          <dt>Payout Tx</dt>
          <dd>{receipt.payoutTx}</dd>
        </div>
      </dl>
    </article>
  );
}
