const grid = document.getElementById("grid");

function generateGrid(gridSize){
  const cellSize = 65/gridSize;
  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < gridSize; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      console.log(cellSize)
      cell.style.width = cellSize + "vmin";
      cell.style.height = cellSize + "vmin";
      row.appendChild(cell);
    }
    grid.appendChild(row);
  }
}

function addListener(){
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
      cell.addEventListener("mouseenter", (event) => {
        if(event.buttons === 1) {
            let maxVal = 0xFFFFFF;
            const randCol = Math.floor(Math.random() * maxVal).toString(16);
            cell.style.backgroundColor = "#"+randCol;
        }
        });
      });
}

function getUserInput(){
  let gridDim = document.getElementById("grid-size-selector").value;
  grid.innerHTML = "";
  generateGrid(gridDim);
  addListener();
}

function gridClear(){
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) =>{
    cell.style.backgroundColor = "white"
  });
}

generateGrid(10);
addListener();
  



