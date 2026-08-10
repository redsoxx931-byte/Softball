const players = [
  {
    name: "Kevin Sandborg",
    ab: 43,
    h: 24,
    doubles: 4,
    triples: 1,
    hr: 5
  },
  {
    name: "Austin Smith",
    ab: 225,
    h: 168,
    doubles: 38,
    triples: 6,
    hr: 32
  },
  {
    name: "Lucas F",
    ab: 32,
    h: 23,
    doubles: 2,
    triples: 0,
    hr: 7
  },
   {
    name: "Jeff L",
    ab: 45,
    h: 27,
    doubles: 1,
    triples: 2,
    hr: 0
  },
   {
    name: "Jordan P",
    ab: 49,
    h: 27,
    doubles: 3,
    triples: 0,
    hr: 2
  },

   {
    name: "Dave B",
    ab: 36,
    h: 22,
    doubles: 5,
    triples: 0,
    hr: 2
  },
   {
    name: "Ben P",
    ab: 43,
    h: 22,
    doubles: 4,
    triples: 2,
    hr: 0
  },
   {
    name: "Jon S",
    ab: 41,
    h: 20,
    doubles: 1,
    triples: 0,
    hr: 0
  },
 
   {
    name: "Joey",
    ab: 24,
    h: 11,
    doubles: 3,
    triples: 1,
    hr: 1
  },
   {
    name: "Mitch",
    ab: 43,
    h: 30,
    doubles: 1,
    triples: 0,
    hr: 0
  },
   {
    name: "Cole Inderle",
    ab: 58,
    h: 31,
    doubles: 11,
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
    ab: 52,
    h: 27,
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
    ab: 30,
    h: 16,
    doubles: 1,
    triples: 0,
    hr: 0
  },
   {
    name: "Jordan",
    ab: 52,
    h: 26,
    doubles: 2,
    triples: 0,
    hr: 0
  },
   {
    name: "Jay Bob",
    ab: 55,
    h: 28,
    doubles: 1,
    triples: 0,
    hr: 0
  },
    {
    name: "Ana",
    ab: 35,
    h: 20,
    doubles: 3,
    triples: 0,
    hr: 0
  },
    {
    name: "Angel",
    ab: 30,
    h: 10,
    doubles: 1,
    triples: 0,
    hr: 0
  },
    {
    name: "Olivia",
    ab: 36,
    h: 18,
    doubles: 1,
    triples: 0,
    hr: 0
  },
    {
    name: "Noah",
    ab: 26,
    h: 17,
    doubles: 2,
    triples: 0,
    hr: 0
  },
    {
    name: "Autumn",
    ab: 31,
    h: 11,
    doubles: 0,
    triples: 0,
    hr: 0
  },
    {
    name: "Jonathon",
    ab: 22,
    h: 16,
    doubles: 1,
    triples: 1,
    hr: 0
  },
  {
    name: "Jeff H",
    ab: 18,
    h: 10,
    doubles: 3,
    triples: 0,
    hr: 1
  },
   {
    name: "Sabrina",
    ab: 45,
    h: 23,
    doubles: 0,
    triples: 0,
    hr: 0
  },
  {
    name: "Dom",
    ab: 83,
    h: 55,
    doubles: 10,
    triples: 5,
    hr: 13
  },
   {
    name: "Nick Doetkott",
    ab: 25,
    h: 16,
    doubles: 3,
    triples: 1,
    hr: 2
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
