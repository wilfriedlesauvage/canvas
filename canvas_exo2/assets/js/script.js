var wall = document.getElementById('canvas');
var drawWall = wall.getContext('2d');
drawWall.beginPath();
// La seule différence avec l'exercice précédent intervient ici, on dessine directement un rectangle au lieu de faire des traits.
// A noter qu'il existe également une fonction fillRect pour créer directement un rectangle qui sera rempli avec la couleur définie précédemment
drawWall.rect(100, 120, 200, 230);
drawWall.strokeStyle = '#A7D5E6';
drawWall.stroke();
drawWall.fillStyle = '#A7D5E6';
drawWall.fill();

var leftWindow = document.getElementById('canvas');
var drawLeftWindow = leftWindow.getContext('2d');
drawLeftWindow.beginPath();
drawLeftWindow.rect(130, 150, 35, 35);
drawLeftWindow.strokeStyle = '#C9C9C9';
drawLeftWindow.stroke();
drawLeftWindow.fillStyle = '#C9C9C9';
drawLeftWindow.fill();

var rightWindow = document.getElementById('canvas');
var drawRightWindow = rightWindow.getContext('2d');
drawRightWindow.beginPath();
drawRightWindow.rect(235, 150, 35, 35);
drawRightWindow.strokeStyle = '#C9C9C9';
drawRightWindow.stroke();
drawRightWindow.fillStyle = '#C9C9C9';
drawRightWindow.fill();

var door = document.getElementById('canvas');
var drawDoor = door.getContext('2d');
drawDoor.beginPath();
drawDoor.rect(170, 270, 60, 80);
drawDoor.strokeStyle = '#C9C9C9';
drawDoor.stroke();
drawDoor.fillStyle = '#C9C9C9';
drawDoor.fill();

var roof = document.getElementById('canvas');
var drawRoof = roof.getContext('2d');
drawRoof.beginPath();
drawRoof.moveTo(100, 120);
drawRoof.lineTo(200, 30);
drawRoof.lineTo(300, 120);
drawRoof.closePath();
drawRoof.strokeStyle = '#D08C37';
drawRoof.stroke();
drawRoof.fillStyle = '#D08C37';
drawRoof.fill();
