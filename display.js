//contains all nodes of the path
var path = [];

function display_spot()
{
  //grey color for normal node
  //wall node will be overwriten with black color in show function
  for(var i = 0; i<cols; i++)
  {
    for(var j = 0; j < rows; j++)
    {
      grid[i][j].show(color(169,169,169));
    }
  }

  //red color for nodes added in closedSet
  for(var i = 0; i < closedSet.length; i++)
  {
    closedSet[i].show(color(255,0,0));
  }

  //green color for node added in openSet
  for(var i = 0; i < openSet.length; i++)
  {
    openSet[i].show(color(0,255,0));
  }
}

//blue color for the final path
function display_path()
{
  //backtracking the path
  path = [];
  var temp = current;
  path.push(temp);
  while(temp.previous)
  {
    path.push(temp.previous);
    temp = temp.previous;
  }

  for(var i = 0; i<path.length; i++)
  {
    path[i].show(color(0,0,255));
  }
}
