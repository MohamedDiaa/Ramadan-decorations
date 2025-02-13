// const P0 = { x: 20, y: 20 };
// const P1 = { x: 380, y: 400 };
// const P2 = { x: 780, y: 20 };

function getBezierPoint(t, P0, P1, P2) {
  const x = (1 - t) ** 2 * P0.x + 2 * (1 - t) * t * P1.x + t ** 2 * P2.x;
  const y = (1 - t) ** 2 * P0.y + 2 * (1 - t) * t * P1.y + t ** 2 * P2.y;
  return { x, y };
}

// -------- Dom code -----------

const canvas = document.getElementById("myCanvas");
resizeCanvas();

// resize the canvas to fill browser window dynamically
window.addEventListener("resize", resizeCanvas, false);

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawStuff();
}

function drawStuff() {
  // do your drawing stuff here
  const width = window.innerWidth;
  const height = window.innerHeight;

  console.log(width, height);

  let p0 = { x: 0, y: 0 };
  let p1 = { x: width / 2, y: 0.8 * height };
  let p2 = { x: width, y: 0 };

  const ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(p0.x, p0.y);
  ctx.quadraticCurveTo(p1.x, p1.y, p2.x, p2.y);
  ctx.stroke();

  const points = [];
  for (let t = 0; t <= 1; t += 0.1) {
    points.push(getBezierPoint(t, p0, p1, p2));
  }

  var colors = ["#ff0000", "#00ff00", "#0000ff"];

  points.forEach((pt) => {
    var random_color = colors[Math.floor(Math.random() * colors.length)];

    ctx.beginPath();
    ctx.moveTo(pt.x, pt.y);
    ctx.lineTo(pt.x + 40, pt.y + 60);
    ctx.lineTo(pt.x - 40, pt.y + 60);
    ctx.lineTo(pt.x, pt.y);

    ctx.fillStyle = random_color;

    ctx.fill();
  });

  //const div = document.getElementById("lamps");

  //let items = points.map(pt => `<h1 style="position: absolute;color: red;left: ${pt.x}px;top: ${pt.y}px">X</h1>`);
  // let items = points.map(pt =>
  //   `<img src="assets/noun-fanoos-7130645.png" alt="" width="60px" height="60px" style="position: absolute; left: ${pt.x}px;top: ${pt.y}px">`
  // )
  //div.innerHTML = items;

  setTimeout(() => {
    drawStuff()
    console.log("timeout")
  }, 200);
}



