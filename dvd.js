var c = document.getElementById("dvd");
var ctx = c.getContext("2d");
var requestID;

var logo = function() {
  var logoX = 10; // X pos of logo
  var logoY = 10; // Y pos of logo
  var logo = new Image();
  logo.src = "logo_dvd.jpg";
  console.log(logo);
  var dx = 3;
  var dy = 3;

  var getX = function() {return logoX;};
  var getY = function() {return logoY;};
  var setX = function(x) {logoX += x;};
  var setY = function(y) {logoY += y;};
  var getdX = function() {return dx;};
  var getdY = function() {return dy;};
  var setdX = function(){dx = -1*dx;};
  var setdY = function(){dy = -1*dy;};
  console.log(getX());
  var update = function(width, height){
    ctx.drawImage(logo, getX(), getY(), 150, 100);
    if(getX() == 0 || getX() == width-150){
      console.log("bounce");
      setdX();
      console.log(getdX());
    };
    if(getY() == 0 || getY() == 50){
      console.log("bounce");
      setdY();
      console.log(getdY());
    };
    setX(getdX());
    setY(getdY());
  }
  
  return {
    update:update,
    getX:getX,
    getY:getY
  }


}




var dvdGo = function() {
  var l1 = logo();
  console.log("create logo");
  var draw = function() {
    //console.log("called animation frame");
    //console.log("X" + l1.getX());
    //console.log("Y" + l1.getY());
    ctx.clearRect(0,0,550,550);
    l1.update(550, 550);
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

dvdGo();