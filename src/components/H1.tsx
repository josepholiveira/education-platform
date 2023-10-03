import { PropsWithChildren } from "react";

export function H1({ children }: PropsWithChildren) {
  return <h1 className="text-purple-600 text-4xl font-bold">{children}</h1>
}