

var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];
var letterColors = [red, orange, green, blue, purple];
var ni = document.getElementsByName('tb1')[0].value  // first element in DOM  (index 0) with name="txtJob"
var load = function() {
   var ni = document.getElementsByName('tb1')[0].value 
}

drawName(ni, letterColors);

if(10 < 3)
{
    bubbleShape = 'square';
}
else
{
    bubbleShape = 'circle';
}

bounceBubbles();
