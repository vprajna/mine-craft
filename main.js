var canvas = new fabric.Canvas("myCanvas");
var position_x_player = 10;
var position_y_player = 10;
var block_width = 30;
var block_height = 30;
var player_object = "";
var block_object = "";

function draw_player() {
  fabric.Image.fromURL("player.png", function (Img) {
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
function draw_object() {}
