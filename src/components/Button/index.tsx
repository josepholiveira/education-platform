import { PropsWithChildren } from "react";

export interface IndexProps extends PropsWithChildren {}

export function Button(props: IndexProps) {
  return (
    <button className="bg-orange-500 font-bold text-black p-4 rounded">
      {props.children}
    </button>
  )
}