"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const CreateTeam = () => {
  const [teamName, setTeamName] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!teamName) return;

    const response = await fetch('/api/teams', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ teamName }),
    });

    if (response.ok) {
      router.push('/');
    } else {
      alert('Failed to create team')
    }
  };

  return (
    <div>
      <h1>Create Team</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={teamName}
          onChange={(event) => setTeamName(event.target.value)}
          placeholder="Team Name"
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

