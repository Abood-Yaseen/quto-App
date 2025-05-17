const wall = document.getElementById("wall");
const input = document.getElementById("searchBar");
const alertBox = document.getElementById("alert");

let notes = [];

async function getQuotes() {
  try {
    const res = await fetch("https://dummyjson.com/quotes");
    const data = await res.json();
    notes = data.quotes;
    drawNotes(notes);
  } catch {
    alertBox.textContent = "Couldn't load sticky notes!";
  }
}

function drawNotes(list) {
  wall.innerHTML = "";
  list.forEach(q => {
    const div = document.createElement("div");
    div.className = "note";
    div.textContent = q.quote;
    wall.appendChild(div);
  });
}

input.addEventListener("input", () => {
  const term = input.value.toLowerCase();
  const filtered = notes.filter(q => q.quote.toLowerCase().includes(term));
  drawNotes(filtered);
});

getQuotes();
