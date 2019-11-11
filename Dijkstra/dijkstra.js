const vecinoCercano = (grid, x, y) => {

  function crearArray(width, height) {
    let arrayFinal = new Array(height);
    let fila = new Array(width);
    for(let iy = 0; iy < height; iy++) {
        arrayFinal[iy] = fila.slice();
    }
    return arrayFinal;
  }

  function initBordes(arrayFinal, grid, width, height)  {
    arrayFinal[0][0] = grid[0][0];
    for (let ix = 1; ix < width; ix++) {
      arrayFinal[ix][0] = arrayFinal[ix-1][0] + grid[ix][0];
    }  
    for (let iy = 1; iy < height; iy++) {
      arrayFinal[0][iy] = arrayFinal[0][iy-1] + grid[0][iy];
    }  
  }

  function rellenarArray(arrayFinal, grid, width, height) {
    for (let ix = 1; ix < width; ix++) {
      for (let iy = 1; iy < height; iy++) {
        let pesoMinimo = Math.min(arrayFinal[ix-1][iy], 
                                 arrayFinal[ix][iy-1]);
        arrayFinal[ix][iy] = pesoMinimo + grid[ix][iy];
      }
    }
  }

  let width = x + 1, height = y + 1;
  let arrayFinal = crearArray(width, height);
  initBordes(arrayFinal, grid, width, height);
  rellenarArray(arrayFinal, grid, width, height)
  console.table(arrayFinal);

  return arrayFinal[x, y];
};

/////////  INIT  /////////
console.log(vecinoCercano( [
  [7,5,1],
  [3,9,4],
  [7,2,8],
], 2, 2) );
