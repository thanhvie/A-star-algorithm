//array for algorithm
var openSet = [];
var closedSet = [];

// algorithm variable
var current;

function astar()
{
  if(openSet.length > 0)
  {
    //keep going
    var winner = 0;

    //loop all nodes in openSet and choose the node with the most optimal path
    //or the node has minimum cost
    for(var i = 0; i < openSet.length; i++)
    {
      if(openSet[i].f < openSet[winner].f)
      {
        winner = i;
      }
    }

    current = openSet[winner];

    if(current == end)
    {
      //find the path
      noLoop();
      console.log("Done");
    }

    //remove current node from openSet
    removeFromArray(openSet,current);

    //add current node to closedSet
    closedSet.push(current);

    var neighbors = current.neighbors;
    //loop for each neighbors of current node
    for(var i = 0; i<neighbors.length; i++)
    {
      var neighbor = neighbors[i];

      //if neighbor is not in closedSet yet
      var newPath = false;
      if(closedSet.includes(neighbor) == false && neighbor.wall == false)
      {
        //temperary cost = cost of current node + 1
        //(distance of 2 nodes next to each other)
        var tempG = current.g + 1;

        //if neighbor already added in openSet
        //choose the smallest cost between temporary cost
        //and current cost of neighbor node
        if(openSet.includes(neighbor))
        {
          if(tempG < neighbor.g)
          {
            neighbor.g = tempG;
            newPath = true;
          }
        }

        //else if neighbor not in openSet
        else
        {
          neighbor.g = tempG;
          newPath = true;
          openSet.push(neighbor);
        }

        //This path is the best until now. Record it!
        if(newPath){
          neighbor.h = heuristic(neighbor, end);
          neighbor.f = neighbor.g + neighbor.h;
          neighbor.previous = current;
        }
      }
    }
  }

  else
  {
    //no solution
    console.log("no solution");
    noLoop();
    return;
  }
}
