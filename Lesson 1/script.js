let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
//working on allowing user to adjust zoom
// document.body.style.zoom = "300%"
let zoom = "300%";
document.body.style.zoom = zoom;
//document.addEventListener("keydown",keyDownHandler, false);
//document.addEventListener("keyup",keyUpHandler,false);
let fps = 60;


// setting up the tileset
let worldTiles = new Image();
worldTiles.src = "tiles-overworld.png";




// for the sake of this tutorial, the map will be have a height of 15 tiles and width of 17 tiles

//map7_7 is the name for the starting loction of zelda. 7_7 is based on it's position in the greater world map. the array values are based on the tileset png
// aray numbers are based on the position in the tileset
let map7_7 = [
    [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22],
    [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22],
    [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22],
    [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22],
    [61, 61, 61, 61, 61, 61, 61,  2,  2,  2, 61, 61, 61, 61, 61, 61, 61, ],
    [61, 61, 61, 61, 22, 61, 62,  2,  2,  2, 61, 61, 61, 61, 61, 61, 61, ],
    [61, 61, 61, 62,  2,  2,  2,  2,  2,  2, 61, 61, 61, 61, 61, 61, 61, ], 
    [61, 61, 62,  2,  2,  2,  2,  2,  2,  2, 61, 61, 61, 61, 61, 61, 61, ], 
    [61, 62,  2,  2,  2,  2,  2,  2,  2,  2, 60, 61, 61, 61, 61, 61, 61, ], 
    [ 2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, ],
    [43, 44,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 42, 43, ],
    [61, 61,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 61, 61, ], 
    [61, 61,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 61, 61, ], 
    [61, 61, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 61, 61, ], 
    [61, 61, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 61, 61, ],
    [61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, ],
];


// work on figuring this out
function drawMap (level){
    for (let i = 0; i < level.length; i++){
        for (j = 0; j < level[i].length; j++){
            // the tileset has 18 tiles per row. level[i][j] %18 *17 + 1 is the x value of the specific tile, and the math.floor... is the y, and the 16 is the width and height of the tile
            ctx.drawImage(worldTiles, ((level[i][j]%18) * 17) +1, 
            (Math.floor(level[i][j]/18) * 17) + 1,
            16, 16, j*16, i*16, 16, 16);
        }
    }
};

function draw () {
   setTimeout(function() {
   requestAnimationFrame(draw);
   ctx.fillStyle = "rgb(20,20,20)";
   ctx.fillRect(0,0,256,240);
   drawMap(map7_7);
   },1000/fps);
}
draw();
