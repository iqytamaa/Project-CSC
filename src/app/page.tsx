"use client";

import Image from "next/image";
import Link from "next/link";
import  List from '@/components/List'

export default function Home() {
  function greetUser() {
    alert("Welcome User");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/testing">Test Page</Link>
      <List />
      <button onClick={greetUser}>Greet User</button>
    </main>
  );
}
