const players = [
  { name: "Kevin Sandborg", ab: 43, h: 24, doubles: 4, triples: 1, hr: 5, teams: ["Jager Bombs"] },
  { name: "Austin Smith", ab: 240, h: 178, doubles: 40, triples: 6, hr: 35, teams: ["Busch League", "Jager Bombs", "Peace"] },
  { name: "Lucas F", ab: 32, h: 23, doubles: 2, triples: 0, hr: 7, teams: ["Peace"] },
  { name: "Jeff L", ab: 52, h: 31, doubles: 1, triples: 2, hr: 0, teams: ["Peace"] },
  { name: "Jordan P", ab: 56, h: 33, doubles: 4, triples: 0, hr: 2, teams: ["Peace"] },
  { name: "Dave B", ab: 43, h: 26, doubles: 6, triples: 0, hr: 2, teams: ["Peace"] },
  { name: "Ben P", ab: 49, h: 24, doubles: 4, triples: 2, hr: 0, teams: ["Peace"] },
  { name: "Jon S", ab: 45, h: 21, doubles: 2, triples: 0, hr: 0, teams: ["Peace"] },
  { name: "Joey", ab: 32, h: 13, doubles: 3, triples: 1, hr: 1, teams: ["Busch League"] },
  { name: "Mitch", ab: 50, h: 36, doubles: 1, triples: 0, hr: 0, teams: ["Busch League"] },
  { name: "Cole Inderle", ab: 65, h: 34, doubles: 12, triples: 0, hr: 1, teams: ["Busch League"] },
  { name: "Lucas Dorton", ab: 96, h: 57, doubles: 10, triples: 0, hr: 1, teams: ["Busch League", "Jager Bombs", "Peace"] },
  { name: "Austin Schmidt", ab: 10, h: 5, doubles: 1, triples: 0, hr: 0, teams: ["Busch League"] },
  { name: "Dad Bod", ab: 60, h: 30, doubles: 2, triples: 0, hr: 1, teams: ["Busch League"] },
  { name: "Nick Brown", ab: 24, h: 16, doubles: 0, triples: 0, hr: 0, teams: ["Busch League"] },
  { name: "Tim", ab: 37, h: 20, doubles: 1, triples: 0, hr: 0, teams: ["Busch League"] },
  { name: "Jordan", ab: 52, h: 26, doubles: 2, triples: 0, hr: 0, teams: ["Busch League"] },
  { name: "Jay Bob", ab: 63, h: 29, doubles: 1, triples: 0, hr: 0, teams: ["Busch League"] },
  { name: "Ana", ab: 35, h: 20, doubles: 3, triples: 0, hr: 0, teams: ["Jager Bombs"] },
  { name: "Angel", ab: 30, h: 10, doubles: 1, triples: 0, hr: 0, teams: ["Jager Bombs"] },
  { name: "Olivia", ab: 36, h: 18, doubles: 1, triples: 0, hr: 0, teams: ["Jager Bombs"] },
  { name: "Noah", ab: 26, h: 17, doubles: 2, triples: 0, hr: 0, teams: ["Jager Bombs"] },
  { name: "Autumn", ab: 31, h: 11, doubles: 0, triples: 0, hr: 0, teams: ["Jager Bombs"] },
  { name: "Jonathon", ab: 30, h: 22, doubles: 2, triples: 1, hr: 1, teams: ["Jager Bombs"] },
  { name: "Jeff H", ab: 22, h: 12, doubles: 3, triples: 0, hr: 2, teams: ["Peace"] },
  { name: "Sabrina", ab: 45, h: 23, doubles: 0, triples: 0, hr: 0, teams: ["Jager Bombs"] },
  { name: "Dom", ab: 87, h: 59, doubles: 10, triples: 5, hr: 14, teams: ["Busch League", "Jager Bombs", "Peace"] },
  { name: "Nick Doetkott", ab: 33, h: 22, doubles: 3, triples: 1, hr: 3, teams: ["Busch League"] },
];

const ALL_TEAMS = ["Busch League", "Jager Bombs", "Peace"];

function calculateStats(player) {
  const singles = player.h - player.doubles - player.triples - player.hr;

  const totalBases =
    singles +
    player.doubles * 2 +
    player.triples * 3 +
    player.hr * 4;

  const avg = player.h / player.ab;
  const slg = totalBases / player.ab;
  const ops = avg + slg;
  const abPerHr = player.hr > 0 ? player.ab / player.hr : null;

  return { singles, avg, slg, ops, abPerHr };
}

const tbody = document.querySelector("#statsTable tbody");
const teamFilter = document.getElementById("teamFilter");
const playerCount = document.getElementById("playerCount");

let currentSort = { stat: null, ascending: true };
let activeTeam = "all";

function getFilteredPlayers() {
  if (activeTeam === "all") return players.slice();
  return players.filter(p => p.teams.includes(activeTeam));
}

function renderTable() {
  const rows = getFilteredPlayers();

  if (currentSort.stat) {
    rows.sort((a, b) => {
      let valueA, valueB;

      if (["avg", "slg", "ops", "singles", "abPerHr"].includes(currentSort.stat)) {
        const statsA = calculateStats(a);
        const statsB = calculateStats(b);
        valueA = statsA[currentSort.stat];
        valueB = statsB[currentSort.stat];
        // players with no HR (null abPerHr) always sort to the bottom
        if (currentSort.stat === "abPerHr") {
          if (valueA === null && valueB === null) return 0;
          if (valueA === null) return 1;
          if (valueB === null) return -1;
        }
      } else {
        valueA = a[currentSort.stat];
        valueB = b[currentSort.stat];
      }

      if (typeof valueA === "string") {
        return currentSort.ascending
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      }

      return currentSort.ascending ? valueA - valueB : valueB - valueA;
    });
  }

  tbody.innerHTML = "";

  rows.forEach((player, index) => {
    const stats = calculateStats(player);
    const row = document.createElement("tr");

    const teamBadges = player.teams
      .map(t => `<span class="team-badge team-${slugify(t)}">${t}</span>`)
      .join("");

    row.innerHTML = `
      <td class="rank-cell">${index + 1}</td>
      <td class="name-cell">${player.name}<div class="team-badges">${teamBadges}</div></td>
      <td>${player.ab}</td>
      <td>${player.h}</td>
      <td>${player.doubles}</td>
      <td>${player.triples}</td>
      <td>${player.hr}</td>
      <td>${stats.avg.toFixed(3)}</td>
      <td>${stats.slg.toFixed(3)}</td>
      <td>${stats.ops.toFixed(3)}</td>
      <td>${stats.abPerHr !== null ? stats.abPerHr.toFixed(1) : "&mdash;"}</td>
    `;

    tbody.appendChild(row);
  });

  if (playerCount) {
    playerCount.textContent = `${rows.length} player${rows.length === 1 ? "" : "s"}`;
  }
}

function slugify(str) {
  return str.toLowerCase().replace(/\s+/g, "-");
}

function sortPlayers(stat) {
  if (currentSort.stat === stat) {
    currentSort.ascending = !currentSort.ascending;
  } else {
    currentSort.stat = stat;
    currentSort.ascending = true;
  }
  updateSortIndicators();
  renderTable();
}

function updateSortIndicators() {
  document.querySelectorAll("th[data-stat]").forEach(header => {
    header.classList.remove("sort-asc", "sort-desc");
    if (header.dataset.stat === currentSort.stat) {
      header.classList.add(currentSort.ascending ? "sort-asc" : "sort-desc");
    }
  });
}

const headers = document.querySelectorAll("th[data-stat]");
headers.forEach(header => {
  header.addEventListener("click", () => {
    sortPlayers(header.dataset.stat);
  });
});

if (teamFilter) {
  teamFilter.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-team]");
    if (!btn) return;

    teamFilter.querySelectorAll("button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeTeam = btn.dataset.team;
    renderTable();
  });
}

renderTable();
