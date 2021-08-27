canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "white";
ctx.lineWidth = 2;
ctx.arc(200, 200, 40, 0, 2 * Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e) {
    mouse_x = e.clientX-canvas.offsetLeft;
    mouse_y = e.clientY-canvas.offsetTop;
    console.log(mouse_x + ", " + mouse_y);
    circle(mouse_x, mouse_y);
}
function circle(mouse_x, mouse_y) {
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;
    ctx.arc(mouse_x, mouse_y, 40, 0, 2 * Math.PI);
    ctx.stroke();
}