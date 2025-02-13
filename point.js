// let p0x = 20;
// let p0y = 20;

// let p1x = 380;
// let p1y = 400;

// let p2x = 0
// let p2y = 0

// let p3x = 780;
// let p3y = 20;


//        ctx.moveTo(20, 20);

//   ctx.quadraticCurveTo((800 - 40) / 2, 0.8 * 500, 800 - 20, 20);


// function quadratic(p0, p1, p2, t){ 
//     return (Math.pow((1 - t), 2) * p0) +  (2 * (1-t) * t * p1) + (Math.pow(t,2) * p2)
// }

// let t1 = 0.8
// let r1x = quadratic(p0x,p1x,p2x,p3x,t1);
// let r1y = quadratic(p0y,p1y,p2y,p3y,t1);
// console.log(r1x, r1y)



const P0 = { x: 20, y: 20 };
const P1 = { x: 380, y: 400 };
const P2 = { x: 780, y: 20 };

function getBezierPoint(t, P0, P1, P2) {
    const x = (1 - t) ** 2 * P0.x + 2 * (1 - t) * t * P1.x + t ** 2 * P2.x;
    const y = (1 - t) ** 2 * P0.y + 2 * (1 - t) * t * P1.y + t ** 2 * P2.y;
    return { x, y };
}

const points = [];
for (let t = 0; t <= 1; t += 0.1) {
    points.push(getBezierPoint(t, P0, P1, P2));
}
console.log(points);