const teams = [];

export async function POST(request) {
    const { teamName } = await request.json();
    const newTeam = { id: Date.now().toString(), teamName };
    teams.push(newTeam);

    return new Response(JSON.stringify(newTeam), {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function GET() {
    return new Response(JSON.stringify(teams), {
        status: 200,
        headers: { 'Content-Type': 'application/json'},
    });
}