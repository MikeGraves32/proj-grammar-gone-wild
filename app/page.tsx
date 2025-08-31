"use server";

import { auth } from "@/auth";
import { SignInButton } from "./components/sign-in-button";
import Link from "next/link";
import { SignOutButton } from "./components/sign-out-button";
import "./index.css";

export default async function HomePage() {
  const session = await auth();

  if (session?.user) {
    return (
      <div>
        <Link href="/user-info"> User Info </Link>
        <SignOutButton />
      </div>
    );
  }
  return (
    <div>
      {" "}
      <p> You Are Not Signed In</p>
      <SignInButton />
    </div>
  );
}
