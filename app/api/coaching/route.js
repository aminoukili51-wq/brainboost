export async function POST(request) {
  try {
    const body = await request.json();
    const { stats } = body;

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-opus-4-5",
        max_tokens: 1024,
        messages: [
          {
            role: "user",
            content: `You are an expert Rocket League coach. Analyze these player stats and give exactly 3 concrete, actionable coaching tips.

Player Stats:
- Boost collected per minute: ${stats.boostPerMinute}
- Boost wasted per minute: ${stats.boostWasted}
- Average speed: ${stats.avgSpeed} km/h
- Shots per game: ${stats.shots}
- Goals per game: ${stats.goals}
- Saves per game: ${stats.saves}
- Demos per game: ${stats.demos}
- Time supersonic: ${stats.supersonicTime}%
- Time in air: ${stats.airTime}%
- Rank: ${stats.rank}

Format your response as JSON like this:
{
  "score": 75,
  "tips": [
    {"category": "Boost Management", "tip": "...", "priority": "high"},
    {"category": "Positioning", "tip": "...", "priority": "medium"},
    {"category": "Mechanics", "tip": "...", "priority": "low"}
  ],
  "summary": "One sentence overall assessment"
}

Return ONLY the JSON, nothing else.`,
          },
        ],
      }),
    });

    const data = await response.json();
    console.log("API response:", JSON.stringify(data));
    const raw = data.content[0].text;
    const clean = raw.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    const coaching = JSON.parse(clean);
    return Response.json({ coaching });

  } catch (error) {
    console.error("API Error:", error.message);
    return Response.json({ error: error.message }, { status: 500 });
  }
}