async function loadGroup() {
  const group = document.getElementById('group').value;
  const tableBody = document.getElementById('table-body');
  tableBody.innerHTML = '<tr><td colspan="5" class="loading">Loading...</td></tr>';

  try {
    // 🔹 Replace this URL with your actual Replit or VPS API endpoint
    const response = await fetch(`https://YOUR_REPLIT_URL/api/standings/${group}`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const data = await response.json();
    if (!data.length) {
      tableBody.innerHTML = '<tr><td colspan="5">No data found.</td></tr>';
      return;
    }

    tableBody.innerHTML = data
      .map(team => `
        <tr>
          <td>${team.name}</td>
          <td>${team.played}</td>
          <td>${team.wins}</td>
          <td>${team.losses}</td>
          <td>${team.points}</td>
        </tr>`).join("");
  } catch (err) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="5" style="color:red;">Error loading data: ${err.message}</td>
      </tr>`;
    console.error("Detailed error:", err);
  }
}

document.addEventListener('DOMContentLoaded', loadGroup);
