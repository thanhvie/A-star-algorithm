//variable for start node and end node
var start;
var end;

function setup()
{
  createCanvas(600,600);
  console.log("A star algorithm");

  //create the map
  createMap();

  //define start spot & end spot
  start = grid[0][0];
  end = grid[cols-1][rows-1];

  //overwrite this.wall properties to always FALSE
  start.wall = false;
  end.wall = false;

  //add start node into openSet array
  openSet.push(start);
}

function draw()
{
  //run the algorithm
  astar();
  background(255);

  //display the map
  display_spot();

  //display the path
  display_path();
}
