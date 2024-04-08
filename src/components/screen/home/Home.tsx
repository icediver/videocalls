"use client";
import Link from "next/link";
import { useState } from "react";

export function Home() {
  const [value, setValue] = useState("");
  return (
    <main className="">
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <Link href={`/room/${value}`}>Join conference</Link>
    </main>
  );
}
