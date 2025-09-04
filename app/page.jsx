"use server";

import { auth } from "@/auth";
import { SignInButton } from "./components/sign-in-button";
import Link from "next/link";
import { SignOutButton } from "./components/sign-out-button";
import { CreateTeam } from "./components/CreateTeam";
import BgBrickImage from "@/public/img/brick_lines.jpg";
import "./index.css";

export default async function HomePage() {
  const session = await auth();
  const response = await fetch('http://localhost:3000/api/teams', {
    cache: 'no-store'
  });
  const teams = await response.json();

  if (session?.user) {
    return (
          <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-50 z-0"
          style={{ backgroundImage: `url(${BgBrickImage})` }}
        >
      <div>
        <Link href="/user-info"> User Info </Link>
        <SignOutButton />
        <CreateTeam />
      <div>
        <h1>Teams List</h1>
        <ul>
          {teams.map((team) => (
            <li key={team.id}>{team.teamName}</li>
          ))}
        </ul>

      </div>      
      </div>
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
