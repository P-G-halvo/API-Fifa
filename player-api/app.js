fetch("/players")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("output");
    
    // Only show the first 5 players for now
    const topPlayers = data.slice(0, 5);

    const formatted = topPlayers.map(player => {
      return `#${player.Rank} - ${player.Name} (${player.Position})\nOVR: ${player.OVR}\nTeam: ${player.Team}\n\n`;
    }).join("\n");

    container.textContent = formatted;
  })
  .catch(err => {
    document.getElementById("output").textContent = "Failed to load players.";
    console.error(err);
  });