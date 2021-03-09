var canvas = new fabric.Canvas("myCanvas");
var position_x_player = 10;
var position_y_player = 10;
var block_width = 30;
var block_height = 30;
var player_object = "";
var block_object = "";

function draw_player() {
  fabric.Image.fromURL("images.jpg", function (Img) {
    player_object = Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(150);
    player_object.set({
      top: position_y_player,
      left: position_x_player,
    });
    canvas.add(player_object);
  });
}
function draw_object(imagename) {
  fabric.Image.fromURL(imagename, function (Img) {
    block_object = Img;
    block_object.scaleToWidth(block_width);
    block_object.scaleToHeight(block_height);
    block_object.set({
      top: position_y_player,
      left: position_x_player,
    });
    canvas.add(block_object);
  });
}
window.addEventListener("keydown", my_keypress);
function my_keypress(e) {
  console.log(e);
  if (e.keyCode == 37) {
    left();
  }
  if (e.keyCode == 38) {
    up();
  }
  if (e.keyCode == 39) {
right();
  }
  if (e.keyCode == 40) {
    down();
  }
  if (e.keyCode == 82) {
    console.log("roof");
    draw_object("roof.jpg");
  }
  if (e.keyCode == 89) {
    console.log("yellow");
    draw_object("yellow_wall.png");
  }
  if (e.keyCode == 68) {
    console.log("darkgreen");
    draw_object("dark_green.png");
  }
  if (e.keyCode == 85) {
    console.log("u");
    draw_object("unique.png");
  }
  if (e.keyCode == 67) {
    console.log("c");
    draw_object("cloud.jpg");
  }
  if (e.keyCode == 76) {
    console.log("l");
    draw_object("light_green.png");
  }
  if (e.keyCode == 71) {
    console.log("g");
    draw_object("ground.png");
  }
  if (e.keyCode == 84) {
    console.log("t");
    draw_object("trunk.jpg");
  }
  if (e.keyCode == 87) {
    console.log("w");
    draw_object("wall.jpg");
  }
 if (e.keyCode==80 && e.shiftKey==true) {
   console.log("p");
   block_width=block_width+10;
   console.log(block_width);
   block_height=block_height+10;
   console.log(block_height);
   document.getElementById("height").innerHTML=block_height;
   document.getElementById("width").innerHTML=block_width;
 }
 if (e.keyCode==77 && e.shiftKey==true) {
   console.log("m");
   block_width=block_width-10;
   console.log(block_width);
   block_height=block_height-10;
   console.log(block_height);
   document.getElementById("height").innerHTML=block_height;
   document.getElementById("width").innerHTML=block_width;
 }
}
function up(){
  if (position_y_player>0) {
    position_y_player=position_y_player-block_height;
  canvas.remove(player_object);
  draw_player();
  }
}
function down(){
  if (position_y_player<450) {
    position_y_player=position_y_player+block_height;
    canvas.remove(player_object);
    draw_player();
  }
}
function left(){
  if (position_x_player>0) {
    position_x_player=position_x_player-block_width;
  canvas.remove(player_object);
  draw_player();
  }
}
function right(){
  if (position_x_player<850) {
    position_x_player=position_x_player+block_width;
 canvas.remove(player_object);
 draw_player();
  }
}