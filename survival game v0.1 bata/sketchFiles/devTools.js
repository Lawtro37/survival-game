var _ = 0
var DevTool = false

function displayDevTools(a)
{
    DevTool = a
    console.log("commands:")
    console.log(" ")
    console.log("TP(X, Y), teleports the player to a spesified location.q")
    console.log("speed(object, speed), sets the speed of a specified object/entey.")
    console.log("setPlayerSpeed(speed), sets the speed of the player to a specified amount.")
    console.log("summon(object, X, Y), summons a specified object or entety at a specified location.")
    console.log("give(item), IN PROGRES.")
    console.log(" ")
    console.log("over operaters: _ player position,")
}

function TP(X, Y)
{
    if(X === "_")
    {
        playerY = Y;
    }
    else if(Y === "_")
    {
        playerX = X;
    }
    else if(X === "_" && Y === "_")
    {
        throw("Why?")
    }
    else
    {
        playerX = X;
        playerY = Y;
    }
}

function speed(object, speed)
{
    if(object = "player" ||  object == "_")
    {
        playerSpeed = speed;
    }
    else
    {
        throw("errer: object undefined");
        throw("try checking your spelling or make sure you are refering to a entety");
    }

}

function setPlayerSpeed(speed)
{
    
    
    playerSpeed = speed;
    
}

function summon(object, X, Y)
{
    if(object = "tree")
    {
        treesX.push(X)
        treesY.push(Y)
    }
}

function give(item, amount)
{
    throw("error: unown item")
}