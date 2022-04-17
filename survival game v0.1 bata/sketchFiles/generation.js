//trees

var trees = [], treesX = [], treesY = [], treesHealth = [];

function treeGenerate(count)
{
  for(var i = 0; i <= count; i++)
  {
    treesX.push(random(-7000, 7000));
    treesY.push(random(-7000, 7000));
    trees.push(i)
    treesHealth.push(5)
    //rect(treesX[i], treesY[i], 75, 75, 1000);
  }
}

function drawTrees(index)
{
    if(treesX[index] < playerX+1000 || !treesX[index] < playerX-1000 || treesY[index] < playerY+500 || !treesY[index] < playerY-500);
    {
      fill("green")
      trees[index] = rect(treesX[index], treesY[index], 75, 75, 1000)
    }

    //trees[i].mouseOver(damageTree)

    function damageTree()
    {
      trees[index]
    }
}