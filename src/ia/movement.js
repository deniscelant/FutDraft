// Coordenation
export let x, y, vel;

export class moveTO{
    constructor(x, y, vel){

    }
}

/*
Player Interface = [
ballPosition
ballOwnerPosition
fieldArea
playerPosition
futurePoint
ballControl
sprint
pass
shoot
lob
]
*/ 


/*
class offBallMoveTO
target{x,y}
playerPosition{x,y}
while pParam !== tParam{
    if pParam > tParam{
        pParam--
    } 
    if pParam < tParam{
        pParam++
    } 
}

class withBallMoveTo
holdBallShape{ area:1x1, offset:1px+playerPosition, condition:force < 10}
moveBall{offset: vel + x || y, direction: playerPivot}
*/