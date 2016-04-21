var c = document.getElementById("dvd");
var ctx = c.getContext("2d");

/* GLOBAL VARIABLES */
var logo = function() {
  var logoX = 10; // X pos of logo
  var logoY = 10; // Y pos of logo
  var logo = new Image();
  logo.src = "logo_dvd.jpg";
  var dx = 1;
  var dy = 1;

  var requestID;

  var getX = function() {return this.logoX;};
  var getY = function() {return this.logoY;};
  var setX = function(x) {this.logoX += x;};
  var setX = function(y) {this.logoy += y;};
  var getdX = function() {return this.dx;};
  var getdY = function() {return this.dy;};
  var set


}




var dvdGo = function() {
  var draw = function() {
    ctx.clearRect(0,0,550,550);
    ctx.drawImage(logo,logoX,logoY, 150, 100);

    if (logoX == 0 || logoX == 550-150) {
      dx = -dx;
    }
    else if (logoY == 0 || logoY == 550-100) {
      dy = -dy;
    }

    logoX += dx;
    logoY += dy;

    requestID = window.requestAnimationFrame(draw);
  }
  draw();
}

var btn = document.getElementById("stop");
btn.addEventListener("click", stop );

var stop = function() {
  window.cancelAnimationFrame( requestID );
  console.log("stop");
}
