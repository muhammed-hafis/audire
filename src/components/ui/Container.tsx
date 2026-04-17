import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="px-4 w-full md:px-8 lg:px-16 xl:px-24 max-w-8xl mx-auto">{children}</div>
  );
}
