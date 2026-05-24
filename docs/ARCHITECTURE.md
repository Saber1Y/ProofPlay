# High-Level Architecture

User -> Next.js App -> Somnia Contracts -> Somnia Agents -> Callback -> Score Settlement -> Payout -> Results UI

## Design principles

- Smart contracts are the source of truth for participants, lineups, scores, and payouts.
- API routes and database are a convenience layer for caching and frontend UX.
- Demo mode uses deterministic stats for reliable judging.
