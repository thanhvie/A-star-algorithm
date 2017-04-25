//grid variables
var rows = 50;
var cols = 50;
var grid = new Array(cols);

//width and height for each spot
var w , h;

function createMap(){
  //scaling
  w = width/cols;
  h = height/rows;

  //making a 2D array
  for( var i = 0; i < cols; i++ ){
    grid[i] = new Array(rows);
  }

  //create spot for each grid
  for(var i = 0; i<cols; i++){
    for(var j = 0; j < rows; j++){
      grid[i][j] = new Spot(i,j);
    }
  }

  //add neighbors for each grid
  for(var i = 0; i<cols; i++){
    for(var j = 0; j < rows; j++){
      grid[i][j].addNeighbors(grid);
    }
  }
}
