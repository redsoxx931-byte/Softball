const players = [
  {
    name: "Kevin Sandborg",
    ab: 15,
    h: 11,
    doubles: 1,
    triples: 0,
    hr: 4
  },
  {
    name: "Austin Smith",
    ab: 49,
    h: 37,
    doubles: 6,
    triples: 2,
    hr: 10
  },
  {
    name: "Lucas F",
    ab: 10,
    h: 10,
    doubles: 2,
    triples: 0,
    hr: 4
  },
   {
    name: "Jeff L",
    ab: 14,
    h: 5,
    doubles: 1,
    triples: 1,
    hr: 0
  },
   {
    name: "Jordan P",
    ab: 17,
    h: 13,
    doubles: 1,
    triples: 0,
    hr: 0
  },
   {
    name: "Ross L",
    ab: 2,
    h: 1,
    doubles: 0,
    triples: 0,
    hr: 0
  },
   {
    name: "Dave B",
    ab: 15,
    h: 7,
    doubles: 2,
    triples: 0,
    hr: 0
  },
   {
    name: "Ben P",
    ab: 13,
    h: 9,
    doubles: 1,
    triples: 2,
    hr: 0
  },
   {
    name: "Jon S",
    ab: 13,
    h: 8,
    doubles: 1,
    triples: 0,
    hr: 0
  },
   {
    name: "Franklin S",
    ab: 1,
    h: 0,
    doubles: 0,
    triples: 0,
    hr: 0
  },
   {
    name: "Nick C",
    ab: 1,
    h: 1,
    doubles: 0,
    triples: 0,
    hr: 0
  },
   {
    name: "Joey",
    ab: 8,
    h: 6,
    doubles: 3,
    triples: 1,
    hr: 0
  },
   {
    name: "Mitch",
    ab: 8,
    h: 6,
    doubles: 1,
    triples: 0,
    hr: 0
  },
   {
    name: "Cole Inderle",
    ab: 7,
    h: 4,
    doubles: 2,
    triples: 0,
    hr: 0
  },
   {
    name: "Lucas Dorton",
    ab: 35,
    h: 19,
    doubles: 5,
    triples: 0,
    hr: 1
  },
   {
    name: "Austin Schmidt",
    ab: 7,
    h: 2,
    doubles: 0,
    triples: 0,
    hr: 0
  },
   {
    name: "Dad Bod",
    ab: 7,
    h: 5,
    doubles: 0,
    triples: 0,
    hr: 1
  },
   {
    name: "Nick Brown",
    ab: 7,
    h: 4,
    doubles: 0,
    triples: 0,
    hr: 0
  },
   {
    name: "Tim",
    ab: 6,
    h: 3,
    doubles: 0,
    triples: 0,
    hr: 0
  },
   {
    name: "Jordan",
    ab: 6,
    h: 3,
    doubles: 1,
    triples: 0,
    hr: 0
  },
   {
    name: "Jay Bob",
    ab: 6,
    h: 4,
    doubles: 1,
    triples: 0,
    hr: 0
  },
    {
    name: "Ana",
    ab: 15,
    h: 10,
    doubles: 2,
    triples: 0,
    hr: 0
  },
    {
    name: "Angel",
    ab: 10,
    h: 4,
    doubles: 1,
    triples: 0,
    hr: 0
  },
    {
    name: "Olivia",
    ab: 14,
    h: 8,
    doubles: 1,
    triples: 0,
    hr: 0
  },
    {
    name: "Noah",
    ab: 8,
    h: 5,
    doubles: 1,
    triples: 0,
    hr: 0
  },
    {
    name: "Autumn",
    ab: 13,
    h: 4,
    doubles: 0,
    triples: 0,
    hr: 0
  },
    {
    name: "Jonathon",
    ab: 4,
    h: 4,
    doubles: 0,
    triples: 1,
    hr: 0
  },
  {
    name: "Jeff H",
    ab: 4,
    h: 1,
    doubles: 1,
    triples: 0,
    hr: 0
  },
   {
    name: "Sabrina",
    ab: 11,
    h: 6,
    doubles: 0,
    triples: 0,
    hr: 0
  },
  
];



function calculateStats(player) {

  const singles =
    player.h -
    player.doubles -
    player.triples -
    player.hr;

  const totalBases =
    singles +
    (player.doubles * 2) +
    (player.triples * 3) +
    (player.hr * 4);

  const avg = player.h / player.ab;
  const slg = totalBases / player.ab;
  const ops = avg + slg;

  return {
    avg,
    slg,
    ops
  };
}



const tbody = document.querySelector("#statsTable tbody");



function renderTable() {

  tbody.innerHTML = "";

  players.forEach(player => {

    const stats = calculateStats(player);

    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${player.name}</td>
      <td>${player.ab}</td>
      <td>${player.h}</td>
      <td>${player.doubles}</td>
      <td>${player.triples}</td>
      <td>${player.hr}</td>
      <td>${stats.avg.toFixed(3)}</td>
      <td>${stats.slg.toFixed(3)}</td>
      <td>${stats.ops.toFixed(3)}</td>
    `;

    tbody.appendChild(row);
  });
}



let ascending = true;



function sortPlayers(stat) {

  players.sort((a, b) => {

    let valueA;
    let valueB;

    // Calculated stats
    if (["avg", "slg", "ops"].includes(stat)) {

      valueA = calculateStats(a)[stat];
      valueB = calculateStats(b)[stat];

    } else {

      valueA = a[stat];
      valueB = b[stat];
    }

    // String sorting
    if (typeof valueA === "string") {

      return ascending
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    }

    // Number sorting
    return ascending
      ? valueA - valueB
      : valueB - valueA;
  });

  ascending = !ascending;

  renderTable();
}



// CLICKABLE HEADERS

const headers = document.querySelectorAll("th");

headers.forEach(header => {

  header.addEventListener("click", () => {

    const stat = header.dataset.stat;

    sortPlayers(stat);
  });
});



renderTable();
