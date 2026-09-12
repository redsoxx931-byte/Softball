/* ===========================================================
   Data: one entry per season. Add a new entry here each year -
   everything else (season picker, tables, player profiles,
   career totals) builds itself from this array.
   =========================================================== */
const SEASONS = [
  {
    id: "2026",
    year: "2026",
    label: "2026 Summer",
    players: [
      { name: "Kevin Sandborg", ab: 54, h: 32, doubles: 4, triples: 1, hr: 6, teams: ["Jager Bombs"] },
      { name: "Austin Smith", ab: 279, h: 202, doubles: 44, triples: 8, hr: 41, teams: ["Busch League", "Jager Bombs", "Peace"] },
      { name: "Lucas F", ab: 47, h: 33, doubles: 3, triples: 0, hr: 9, teams: ["Peace"] },
      { name: "Jeff L", ab: 72, h: 46, doubles: 1, triples: 3, hr: 0, teams: ["Peace"] },
      { name: "Jordan P", ab: 76, h: 43, doubles: 5, triples: 0, hr: 4, teams: ["Peace"] },
      { name: "Dave B", ab: 61, h: 34, doubles: 8, triples: 0, hr: 2, teams: ["Peace"] },
      { name: "Ben P", ab: 66, h: 33, doubles: 4, triples: 2, hr: 0, teams: ["Peace"] },
      { name: "Jon S", ab: 61, h: 30, doubles: 5, triples: 0, hr: 0, teams: ["Peace"] },
      { name: "Joey", ab: 32, h: 13, doubles: 3, triples: 1, hr: 1, teams: ["Busch League"] },
      { name: "Mitch", ab: 54, h: 39, doubles: 1, triples: 0, hr: 0, teams: ["Busch League"] },
      { name: "Cole Inderle", ab: 70, h: 36, doubles: 12, triples: 0, hr: 1, teams: ["Busch League"] },
      { name: "Lucas Dorton", ab: 96, h: 57, doubles: 10, triples: 0, hr: 1, teams: ["Busch League", "Jager Bombs", "Peace"] },
      { name: "Austin Schmidt", ab: 10, h: 5, doubles: 1, triples: 0, hr: 0, teams: ["Busch League"] },
      { name: "Dad Bod", ab: 64, h: 33, doubles: 2, triples: 0, hr: 1, teams: ["Busch League"] },
      { name: "Nick Brown", ab: 24, h: 16, doubles: 0, triples: 0, hr: 0, teams: ["Busch League"] },
      { name: "Tim", ab: 40, h: 21, doubles: 1, triples: 0, hr: 0, teams: ["Busch League"] },
      { name: "Jordan", ab: 55, h: 27, doubles: 2, triples: 0, hr: 0, teams: ["Busch League"] },
      { name: "Jay Bob", ab: 67, h: 30, doubles: 1, triples: 0, hr: 0, teams: ["Busch League"] },
      { name: "Ana", ab: 35, h: 20, doubles: 3, triples: 0, hr: 0, teams: ["Jager Bombs"] },
      { name: "Angel", ab: 41, h: 17, doubles: 1, triples: 0, hr: 0, teams: ["Jager Bombs"] },
      { name: "Olivia", ab: 47, h: 24, doubles: 1, triples: 0, hr: 0, teams: ["Jager Bombs"] },
      { name: "Noah", ab: 26, h: 17, doubles: 2, triples: 0, hr: 0, teams: ["Jager Bombs"] },
      { name: "Autumn", ab: 42, h: 15, doubles: 1, triples: 0, hr: 0, teams: ["Jager Bombs"] },
      { name: "Jonathon", ab: 40, h: 29, doubles: 3, triples: 1, hr: 2, teams: ["Jager Bombs"] },
      { name: "Jeff H", ab: 25, h: 13, doubles: 3, triples: 0, hr: 2, teams: ["Peace"] },
      { name: "Sabrina", ab: 58, h: 29, doubles: 0, triples: 0, hr: 0, teams: ["Jager Bombs"] },
      { name: "Dom", ab: 121, h: 76, doubles: 11, triples: 6, hr: 21, teams: ["Busch League", "Jager Bombs", "Peace"] },
      { name: "Nick Doetkott", ab: 50, h: 34, doubles: 7, triples: 3, hr: 3, teams: ["Busch League"] },
    ],
  },
  {
    id: "2026-fall",
    year: "2026",
    label: "2026 Fall",
    players: [
      { name: "Jol", ab: 9, h: 7, doubles: 0, triples: 1, hr: 1, teams: ["Cream Team"] },
      { name: "Austin Smith", ab: 16, h: 11, doubles: 2, triples: 1, hr: 5, teams: ["Cream Team", "Jager Bombs"] },
      { name: "Linter", ab: 8, h: 5, doubles: 0, triples: 0, hr: 1, teams: ["Cream Team"] },
      { name: "Dom", ab: 8, h: 6, doubles: 0, triples: 1, hr: 1, teams: ["Cream Team"] },
      { name: "Austin Olter", ab: 8, h: 6, doubles: 1, triples: 2, hr: 1, teams: ["Cream Team"] },
      { name: "Lance", ab: 8, h: 6, doubles: 1, triples: 0, hr: 0, teams: ["Cream Team"] },
      { name: "Cole Inderle", ab: 7, h: 4, doubles: 0, triples: 0, hr: 0, teams: ["Cream Team"] },
      { name: "Nate", ab: 7, h: 6, doubles: 1, triples: 0, hr: 0, teams: ["Cream Team"] },
      { name: "Jonathon", ab: 12, h: 8, doubles: 1, triples: 0, hr: 0, teams: ["Cream Team", "Jager Bombs"] },
      { name: "Kaz", ab: 7, h: 6, doubles: 0, triples: 0, hr: 0, teams: ["Cream Team"] },
      { name: "Lorenzo", ab: 7, h: 4, doubles: 0, triples: 0, hr: 0, teams: ["Cream Team"] },
      { name: "Angel", ab: 7, h: 4, doubles: 0, triples: 0, hr: 0, teams: ["Jager Bombs"] },
      { name: "Helena", ab: 5, h: 1, doubles: 0, triples: 0, hr: 0, teams: ["Jager Bombs"] },
      { name: "Dave B", ab: 5, h: 1, doubles: 0, triples: 0, hr: 0, teams: ["Jager Bombs"] },
      { name: "Megan", ab: 5, h: 2, doubles: 0, triples: 0, hr: 0, teams: ["Jager Bombs"] },
      { name: "Cody", ab: 5, h: 2, doubles: 0, triples: 0, hr: 0, teams: ["Jager Bombs"] },
      { name: "Autumn", ab: 5, h: 1, doubles: 0, triples: 0, hr: 0, teams: ["Jager Bombs"] },
      { name: "Zach", ab: 5, h: 4, doubles: 1, triples: 0, hr: 1, teams: ["Jager Bombs"] },
    ],
  },
];

const QUAL_AB = 20; // minimum at-bats to qualify for rate-stat leaderboards/highlights

/* ===========================================================
   Stat math
   =========================================================== */
function calcStats(p) {
  const singles = p.h - p.doubles - p.triples - p.hr;
  const totalBases = singles + p.doubles * 2 + p.triples * 3 + p.hr * 4;
  const avg = p.ab > 0 ? p.h / p.ab : 0;
  const slg = p.ab > 0 ? totalBases / p.ab : 0;
  const ops = avg + slg;
  const abPerHr = p.hr > 0 ? p.ab / p.hr : null;
  return { singles, avg, slg, ops, abPerHr };
}

function slugify(str) {
  return str.toLowerCase().replace(/\s+/g, "-");
}

function teamBadgesHTML(teams) {
  return teams.map(t => `<span class="team-badge team-${slugify(t)}">${t}</span>`).join("");
}

function getSeason(id) {
  return SEASONS.find(s => s.id === id);
}

function seasonTeams(season) {
  const teams = [];
  season.players.forEach(p => p.teams.forEach(t => { if (!teams.includes(t)) teams.push(t); }));
  return teams;
}

function joinWithAmp(list) {
  if (list.length === 0) return "";
  if (list.length === 1) return list[0];
  return `${list.slice(0, -1).join(", ")} &amp; ${list[list.length - 1]}`;
}

/* ===========================================================
   Routing - plain hash links, re-render whole #app on change
     #/                                   -> season picker
     #/season/<id>                        -> season stats view
     #/season/<id>/player/<name>          -> player profile
   =========================================================== */
function parseRoute() {
  const raw = location.hash.replace(/^#\/?/, "");
  const parts = raw.split("/").filter(Boolean);
  if (parts[0] === "season" && parts[1]) {
    const seasonId = decodeURIComponent(parts[1]);
    if (parts[2] === "player" && parts[3]) {
      return { view: "player", seasonId, playerName: decodeURIComponent(parts[3]) };
    }
    return { view: "season", seasonId };
  }
  return { view: "picker" };
}

function render() {
  const root = document.getElementById("app");
  const route = parseRoute();

  if (route.view === "season" && getSeason(route.seasonId)) {
    root.innerHTML = seasonTemplate(getSeason(route.seasonId));
    wireSeasonView(getSeason(route.seasonId));
  } else if (route.view === "player" && getSeason(route.seasonId)) {
    root.innerHTML = playerTemplate(route.seasonId, route.playerName);
  } else {
    root.innerHTML = pickerTemplate();
  }
  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", render);

/* ===========================================================
   View: season picker
   =========================================================== */
function pickerTemplate() {
  const cards = SEASONS.slice().reverse().map(s => {
    const teamCount = seasonTeams(s).length;
    return `
    <a class="season-card" href="#/season/${encodeURIComponent(s.id)}">
      <span class="season-year">${s.year}</span>
      <span class="season-name">${s.label}</span>
      <span class="season-meta">${s.players.length} players &middot; ${teamCount} team${teamCount === 1 ? "" : "s"}</span>
    </a>
  `;
  }).join("");

  const allTeams = [];
  SEASONS.forEach(s => seasonTeams(s).forEach(t => { if (!allTeams.includes(t)) allTeams.push(t); }));

  return `
    <div class="picker-wrap">
      <header class="page-header">
        <p class="eyebrow">Slowpitch Softball</p>
        <h1>Select a Season</h1>
        <p class="subtitle">${joinWithAmp(allTeams)}</p>
      </header>
      <div class="season-cards">${cards}</div>
    </div>
  `;
}

/* ===========================================================
   View: season stats (leaderboards + full table)
   =========================================================== */
function seasonTemplate(season) {
  const teams = seasonTeams(season);
  const teamButtons = teams.map(t => `<button type="button" data-team="${t}">${t}</button>`).join("");

  return `
    <a class="back-link" href="#/">&larr; All Seasons</a>
    <header class="page-header">
      <p class="eyebrow">Slowpitch Softball</p>
      <h1>${season.label}</h1>
      <p class="subtitle">${joinWithAmp(teams)}</p>
    </header>

    <section class="board-row" id="boardRow"></section>

    <div class="controls">
      <div class="team-filter" id="teamFilter">
        <button type="button" data-team="all" class="active">All Teams</button>
        ${teamButtons}
      </div>
      <p class="player-count" id="playerCount"></p>
    </div>

    <div class="table-wrap">
      <table id="statsTable">
        <thead>
          <tr>
            <th class="rank-col">#</th>
            <th data-stat="name">Player</th>
            <th data-stat="ab">AB</th>
            <th data-stat="h">H</th>
            <th data-stat="doubles">2B</th>
            <th data-stat="triples">3B</th>
            <th data-stat="hr">HR</th>
            <th data-stat="avg">AVG</th>
            <th data-stat="slg">SLG</th>
            <th data-stat="ops">OPS</th>
            <th data-stat="abPerHr">AB/HR</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>

    <p class="foot-note">Tap a column header to sort &middot; tap a player for their career page</p>
  `;
}

function wireSeasonView(season) {
  const tbody = document.querySelector("#statsTable tbody");
  const teamFilter = document.getElementById("teamFilter");
  const playerCount = document.getElementById("playerCount");

  let currentSort = { stat: null, ascending: true };
  let activeTeam = "all";

  function playerLink(name, text) {
    return `<a class="player-link" href="#/season/${encodeURIComponent(season.id)}/player/${encodeURIComponent(name)}">${text}</a>`;
  }

  function renderBoards() {
    const all = season.players.map(p => ({ ...p, s: calcStats(p) }));
    const boards = [
      { title: "Batting Average", cls: "", key: p => p.s.avg, fmt: v => v.toFixed(3) },
      { title: "Home Runs", cls: "hr", key: p => p.hr, fmt: v => v },
      { title: "OPS", cls: "", key: p => p.s.ops, fmt: v => v.toFixed(3) },
    ];
    document.getElementById("boardRow").innerHTML = boards.map(b => {
      const top5 = [...all].sort((a, z) => b.key(z) - b.key(a)).slice(0, 5);
      const items = top5.map((p, i) => `
        <li>
          <span class="rank">${i + 1}</span>
          ${playerLink(p.name, `<span class="pname">${p.name}</span>`)}
          <span class="pval">${b.fmt(b.key(p))}</span>
        </li>`).join("");
      return `<div class="board ${b.cls}"><h3>${b.title}</h3><ol>${items}</ol></div>`;
    }).join("");
  }

  function filteredPlayers() {
    if (activeTeam === "all") return season.players.slice();
    return season.players.filter(p => p.teams.includes(activeTeam));
  }

  function renderTable() {
    const rows = filteredPlayers();

    if (currentSort.stat) {
      rows.sort((a, b) => {
        let va, vb;
        if (["avg", "slg", "ops", "singles", "abPerHr"].includes(currentSort.stat)) {
          const sa = calcStats(a), sb = calcStats(b);
          va = sa[currentSort.stat];
          vb = sb[currentSort.stat];
          if (currentSort.stat === "abPerHr") {
            if (va === null && vb === null) return 0;
            if (va === null) return 1;
            if (vb === null) return -1;
          }
        } else {
          va = a[currentSort.stat];
          vb = b[currentSort.stat];
        }
        if (typeof va === "string") {
          return currentSort.ascending ? va.localeCompare(vb) : vb.localeCompare(va);
        }
        return currentSort.ascending ? va - vb : vb - va;
      });
    }

    tbody.innerHTML = rows.map((p, index) => {
      const s = calcStats(p);
      return `
        <tr>
          <td class="rank-cell">${index + 1}</td>
          <td class="name-cell">${playerLink(p.name, p.name)}<div class="team-badges">${teamBadgesHTML(p.teams)}</div></td>
          <td>${p.ab}</td>
          <td>${p.h}</td>
          <td>${p.doubles}</td>
          <td>${p.triples}</td>
          <td>${p.hr}</td>
          <td>${s.avg.toFixed(3)}</td>
          <td>${s.slg.toFixed(3)}</td>
          <td>${s.ops.toFixed(3)}</td>
          <td>${s.abPerHr !== null ? s.abPerHr.toFixed(1) : "&mdash;"}</td>
        </tr>`;
    }).join("");

    playerCount.textContent = `${rows.length} player${rows.length === 1 ? "" : "s"}`;
  }

  function updateSortIndicators() {
    document.querySelectorAll("th[data-stat]").forEach(h => {
      h.classList.remove("sort-asc", "sort-desc");
      if (h.dataset.stat === currentSort.stat) {
        h.classList.add(currentSort.ascending ? "sort-asc" : "sort-desc");
      }
    });
  }

  document.querySelectorAll("th[data-stat]").forEach(h => {
    h.addEventListener("click", () => {
      if (currentSort.stat === h.dataset.stat) currentSort.ascending = !currentSort.ascending;
      else { currentSort.stat = h.dataset.stat; currentSort.ascending = true; }
      updateSortIndicators();
      renderTable();
    });
  });

  teamFilter.addEventListener("click", e => {
    const btn = e.target.closest("button[data-team]");
    if (!btn) return;
    teamFilter.querySelectorAll("button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeTeam = btn.dataset.team;
    renderTable();
  });

  renderBoards();
  renderTable();
}

/* ===========================================================
   View: player profile (career, one row per season + totals)
   =========================================================== */
function playerTemplate(fromSeasonId, playerName) {
  const fromSeason = getSeason(fromSeasonId);

  // Every season this player appears in, chronological by season id.
  const career = SEASONS
    .filter(s => s.players.some(p => p.name === playerName))
    .sort((a, b) => a.id.localeCompare(b.id))
    .map(s => ({ season: s, player: s.players.find(p => p.name === playerName) }));

  if (career.length === 0) {
    return `<a class="back-link" href="#/season/${encodeURIComponent(fromSeasonId)}">&larr; Back to ${fromSeason.label}</a><p>Player not found.</p>`;
  }

  // League-leader lookup: for a given season, which stats did this player lead?
  function leaderFlags(season, player) {
    const qualified = season.players.filter(p => p.ab >= QUAL_AB);
    const all = season.players;

    function isTopCounting(key) {
      const max = Math.max(...all.map(p => p[key]));
      return player[key] === max && max > 0;
    }
    function isTopRate(key) {
      if (player.ab < QUAL_AB) return false;
      const max = Math.max(...qualified.map(p => calcStats(p)[key]));
      return calcStats(player)[key] === max && max > 0;
    }

    return {
      ab: false, // AB isn't a "leading" stat, just context
      h: isTopCounting("h"),
      doubles: isTopCounting("doubles"),
      triples: isTopCounting("triples"),
      hr: isTopCounting("hr"),
      avg: isTopRate("avg"),
      slg: isTopRate("slg"),
      ops: isTopRate("ops"),
    };
  }

  function cell(key, value, flags) {
    return `<td class="${flags[key] ? "leader" : ""}">${value}</td>`;
  }

  const rows = career.map(({ season, player }) => {
    const s = calcStats(player);
    const flags = leaderFlags(season, player);
    return `
      <tr>
        <td class="year-cell">${season.label}</td>
        <td class="name-cell"><div class="team-badges">${teamBadgesHTML(player.teams)}</div></td>
        ${cell("ab", player.ab, {})}
        ${cell("h", player.h, flags)}
        ${cell("doubles", player.doubles, flags)}
        ${cell("triples", player.triples, flags)}
        ${cell("hr", player.hr, flags)}
        ${cell("avg", s.avg.toFixed(3), flags)}
        ${cell("slg", s.slg.toFixed(3), flags)}
        ${cell("ops", s.ops.toFixed(3), flags)}
        <td>${s.abPerHr !== null ? s.abPerHr.toFixed(1) : "&mdash;"}</td>
      </tr>`;
  }).join("");

  let totalRow = "";
  if (career.length > 1) {
    const totals = career.reduce((acc, { player }) => ({
      ab: acc.ab + player.ab,
      h: acc.h + player.h,
      doubles: acc.doubles + player.doubles,
      triples: acc.triples + player.triples,
      hr: acc.hr + player.hr,
    }), { ab: 0, h: 0, doubles: 0, triples: 0, hr: 0 });
    const s = calcStats(totals);
    totalRow = `
      <tr class="total-row">
        <td colspan="2">Career Total</td>
        <td>${totals.ab}</td>
        <td>${totals.h}</td>
        <td>${totals.doubles}</td>
        <td>${totals.triples}</td>
        <td>${totals.hr}</td>
        <td>${s.avg.toFixed(3)}</td>
        <td>${s.slg.toFixed(3)}</td>
        <td>${s.ops.toFixed(3)}</td>
        <td>${s.abPerHr !== null ? s.abPerHr.toFixed(1) : "&mdash;"}</td>
      </tr>`;
  }

  // Union of teams across every season played, most recent season first.
  const latestTeams = career[career.length - 1].player.teams;

  return `
    <a class="back-link" href="#/season/${encodeURIComponent(fromSeasonId)}">&larr; Back to ${fromSeason.label}</a>
    <header class="profile-header">
      <div>
        <p class="eyebrow">Career</p>
        <h1 class="profile-name">${playerName}</h1>
      </div>
      <div class="profile-badges">${teamBadgesHTML(latestTeams)}</div>
    </header>

    <div class="table-wrap">
      <table class="profile-table">
        <thead>
          <tr>
            <th>Season</th><th>Team</th><th>AB</th><th>H</th><th>2B</th><th>3B</th><th>HR</th><th>AVG</th><th>SLG</th><th>OPS</th><th>AB/HR</th>
          </tr>
        </thead>
        <tbody>${rows}${totalRow}</tbody>
      </table>
    </div>

    <p class="foot-note">Highlighted stats led all players that season &middot; rate stats require ${QUAL_AB}+ at-bats to qualify</p>
  `;
}

render();
