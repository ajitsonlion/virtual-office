
const fs = require('fs');

const height=70;
const width=55;
const tiles=height*width;

const mapData = fs.readFileSync('./leipzig.json');
const mapObject=JSON.parse(mapData);


function buildMaze(x,y) {
  var n=x*y-1;
  if (n<0) {alert("illegal maze dimensions");return;}
  var horiz=[]; for (var j= 0; j<x+1; j++) horiz[j]= [];
  var verti=[]; for (var j= 0; j<y+1; j++) verti[j]= [];
  var here= [Math.floor(Math.random()*x), Math.floor(Math.random()*y)];
  var path= [here];
  var unvisited= [];
  for (var j= 0; j<x+2; j++) {
    unvisited[j]= [];
    for (var k= 0; k<y+1; k++)
      unvisited[j].push(j>0 && j<x+1 && k>0 && (j != here[0]+1 || k != here[1]+1));
  }
  while (0<n) {
    var potential= [[here[0]+1, here[1]], [here[0],here[1]+1],
      [here[0]-1, here[1]], [here[0],here[1]-1]];
    var neighbors= [];
    for (var j= 0; j < 4; j++)
      if (unvisited[potential[j][0]+1][potential[j][1]+1])
        neighbors.push(potential[j]);
    if (neighbors.length) {
      n= n-1;
      next= neighbors[Math.floor(Math.random()*neighbors.length)];
      unvisited[next[0]+1][next[1]+1]= false;
      if (next[0] == here[0])
        horiz[next[0]][(next[1]+here[1]-1)/2]= true;
      else
        verti[(next[0]+here[0]-1)/2][next[1]]= true;
      path.push(here= next);
    } else
      here= path.pop();
  }
  return ({x: x, y: y, horiz: horiz, verti: verti});
}


function display(m) {
  var text= [];
  for (var j= 0; j<m.x*2+1; j++) {
    var line= [];
    if (0 == j%2)
      for (var k=0; k<m.y*4+1; k++)
        if (0 == k%4)
          line[k]= '+';
        else
        if (j>0 && m.verti[j/2-1][Math.floor(k/4)])
          line[k]= ' ';
        else
          line[k]= '-';
    else
      for (var k=0; k<m.y*4+1; k++)
        if (0 == k%4)
          if (k>0 && m.horiz[(j-1)/2][k/4-1])
            line[k]= ' ';
          else
            line[k]= '|';
        else
          line[k]= ' ';
    if (0 == j) line[1]= line[2]= line[3]= ' ';
    if (m.x*2-1 == j) line[4*m.y]= ' ';
    text.push(line.join('')+'\r\n');
  }
  return text.join('');
}

const mazeWidth=15;
const mazeHeight=15;
const maze=buildMaze(mazeWidth,mazeHeight);
const mazeUi=display(maze);
const mazeRows=mazeUi.split('\r\n');
mazeRows.pop();

let tiled='';
mazeRows.forEach(mazeRow => {
 const tilesForRow= tileMapRow(mazeRow);
 tiled+=tilesForRow;
});


tiled=tiled.padEnd(tiles,'0');
const tiledMapWalls=tiled.split('').map(tile => parseInt(tile)===0?0:363);
mapObject.layers.find(layer => layer.name==='mazeLayer').data=tiledMapWalls;

fs.writeFile('./leipzig.json', JSON.stringify(mapObject), err => {
  // throws an error, you could also catch it here
  if (err) throw err;
});

function tileMapRow(mazeRow){
  console.log(mazeRow);
  const slimmedRow=mazeRow
  .split('+---').join('+-')
  .split('+   ').join('+ ')
  .split('|   ').join('| ')
  .split('    ').join('  ')
  ;
  const mazeBlocks=slimmedRow.split('').map(block=> !!block.trim()?'1':'0').join('');
  return mazeBlocks.padEnd(width,'0');
}
