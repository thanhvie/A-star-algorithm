//define an object spot, 20% the spot to become a wall
function Spot(i,j)
{
  //store location
  this.i = i;
  this.j = j;

  //array to store f, g, h of a spot
  this.f = 0;
  this.g = 0;
  this.h = 0;

  //array to store neighbors
  this.neighbors = [];

  //keep track previous node
  this.previous = undefined;

  //wall
  this.wall = false;

  if(random(1) < 0.2)
  {
    this.wall = true;
  }

  //show function
  this.show = function(col)
  {
    //gray
    fill(col);
    if(this.wall){
      //black
      fill(0);
    }
    noStroke();
    rect(this.i * w, this.j * h, w-1, h-1);
  }

  //add neighbors function
  this.addNeighbors = function(grid)
  {
    var i = this.i;
    var j = this.j;

    //spot next to the right
    if(i < cols-1)
    {
      this.neighbors.push(grid[i+1][j]);
    }

    //spot next to the left
    if(i > 0)
    {
      this.neighbors.push(grid[i-1][j]);
    }

    //spot next to the below
    if(j < rows-1)
    {
      this.neighbors.push(grid[i][j+1]);
    }

    //spot next to the above
    if(j > 0)
    {
      this.neighbors.push(grid[i][j-1]);
    }
  }
}
