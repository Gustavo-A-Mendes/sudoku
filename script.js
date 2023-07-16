
celula = document.getElementsByClassName("td");
// console.log(celula);

gridblock();

function gridblock() {

  let index = 0;
  for (let i = 0; i < 81; i++) {
    let row = Math.floor(i / 9);
    let col = i % 9;
    // console.log(celula[i]);
    celula[i].style.marginBottom = '5px';
    celula[i].style.marginRight = '5px';
    if (row === 2 || row === 5) celula[index].style.marginBottom = '20px';
    if (col === 2 || col === 5) celula[index].style.marginRight = '20px';

    index++;
  }
}