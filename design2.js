// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  let canvas = document.getElementById("pixel_canvas");
  let height = document.getElementById("input_height");
  let width = document.getElementById("input_width");
  let sizePicker = document.getElementById("sizePicker");
  let color = document.getElementById("colorPicker");
 
  canvas.innerHTML = '';
  for (let i=0; i<height.value; i++){
      const row = canvas.insertRow(i);
      for (let j=0; j<width.value; j++){
          const cell = row.insertCell(j);
          cell.addEventListener("click", function(event){
            var color = document.getElementById('colorPicker');
            event.target.style.backgroundColor = color.value;
          });
      }
  }
}

sizePicker.onsubmit = function(event){
  event.preventDefault();
  makeGrid();
};
