const players = [
  {
    name: "Kevin Sandborg",
    ab: 26,
    h: 18,
    doubles: 2,
    triples: 0,
    hr: 4
  },
  {
    name: "Austin Smith",
    ab: 153,
    h: 109,
    doubles: 25,
    triples: 5,
    hr: 24
  },
  {
    name: "Lucas F",
    ab: 24,
    h: 18,
    doubles: 2,
    triples: 0,
    hr: 5
  },
   {
    name: "Jeff L",
    ab: 30,
    h: 17,
    doubles: 1,
    triples: 2,
    hr: 0
  },
   {
    name: "Jordan P",
    ab: 37,
    h: 20,
    doubles: 3,
    triples: 0,
    hr: 0
  },

   {
    name: "Dave B",
    ab: 22,
    h: 13,
    doubles: 2,
    triples: 0,
    hr: 1
  },
   {
    name: "Ben P",
    ab: 30,
    h: 17,
    doubles: 4,
    triples: 2,
    hr: 0
  },
   {
    name: "Jon S",
    ab: 28,
    h: 14,
    doubles: 1,
    triples: 0,
    hr: 0
  },
 
   {
    name: "Joey",
    ab: 20,
    h: 10,
    doubles: 3,
    triples: 1,
    hr: 1
  },
   {
    name: "Mitch",
    ab: 39,
    h: 27,
    doubles: 1,
    triples: 0,
    hr: 0
  },
   {
    name: "Cole Inderle",
    ab: 42,
    h: 25,
    doubles: 8,
    triples: 0,
    hr: 1
  },
   {
    name: "Lucas Dorton",
    ab: 96,
    h: 57,
    doubles: 10,
    triples: 0,
    hr: 1
  },
   {
    name: "Austin Schmidt",
    ab: 10,
    h: 5,
    doubles: 1,
    triples: 0,
    hr: 0
  },
   {
    name: "Dad Bod",
    ab: 40,
    h: 21,
    doubles: 2,
    triples: 0,
    hr: 1
  },
   {
    name: "Nick Brown",
    ab: 24,
    h: 16,
    doubles: 0,
    triples: 0,
    hr: 0
  },
   {
    name: "Tim",
    ab: 26,
    h: 14,
    doubles: 0,
    triples: 0,
    hr: 0
  },
   {
    name: "Jordan",
    ab: 40,
    h: 23,
    doubles: 2,
    triples: 0,
    hr: 0
  },
   {
    name: "Jay Bob",
    ab: 43,
    h: 22,
    doubles: 1,
    triples: 0,
    hr: 0
  },
    {
    name: "Ana",
    ab: 26,
    h: 16,
    doubles: 2,
    triples: 0,
    hr: 0
  },
    {
    name: "Angel",
    ab: 22,
    h: 7,
    doubles: 1,
    triples: 0,
    hr: 0
  },
    {
    name: "Olivia",
    ab: 26,
    h: 15,
    doubles: 1,
    triples: 0,
    hr: 0
  },
    {
    name: "Noah",
    ab: 19,
    h: 14,
    doubles: 2,
    triples: 0,
    hr: 0
  },
    {
    name: "Autumn",
    ab: 24,
    h: 8,
    doubles: 0,
    triples: 0,
    hr: 0
  },
    {
    name: "Jonathon",
    ab: 15,
    h: 12,
    doubles: 0,
    triples: 1,
    hr: 0
  },
  {
    name: "Jeff H",
    ab: 8,
    h: 3,
    doubles: 1,
    triples: 0,
    hr: 0
  },
   {
    name: "Sabrina",
    ab: 25,
    h: 16,
    doubles: 0,
    triples: 0,
    hr: 0
  },
  {
    name: "Dom",
    ab: 51,
    h: 34,
    doubles: 7,
    triples: 5,
    hr: 5
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
