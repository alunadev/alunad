"use client";

import { Agentation } from "agentation";

const DEFAULT_ENDPOINT = "http://localhost:4747";

export function AgentationToolbar() {
  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  const endpoint = process.env.NEXT_PUBLIC_AGENTATION_ENDPOINT ?? DEFAULT_ENDPOINT;

  return <Agentation endpoint={endpoint} />;
}
