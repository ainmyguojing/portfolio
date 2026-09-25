/*
  Sketch 01 — Dappled Light on Paper, Breathing

  Dark atmosphere with bright bokeh light breaking through.
  Dense field of soft spots, visible plaster texture underneath.
  Some spots are ovals — stretched in a random direction.
*/

const LIGHT_WARM = [235, 230, 215];
const LIGHT_COOL = [200, 210, 205];

// Background gradient
const BG_TOP = [0x62, 0x61, 0x57];    // #626157
const BG_BOTTOM = [0x32, 0x47, 0x51]; // #324751

let timeSpeed = 0.0003;
let lightSpots = [];
let textureImg;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  noStroke();

  textureImg = createGraphics(width, height);
  generatePlasterTexture(textureImg);

  generateSpots();
}

function generateSpots() {
  lightSpots = [];
  let count = 175;

  // create cluster centers for uneven distribution
  let clusters = [];
  let numClusters = floor(random(4, 7));
  for (let c = 0; c < numClusters; c++) {
    clusters.push({
      x: random(width * 0.1, width * 0.9),
      y: random(height * 0.1, height * 0.9),
      radius: random(150, 400),
    });
  }

  for (let i = 0; i < count; i++) {
    let px, py;

    // 55% cluster around centers, 45% scattered freely
    if (random() < 0.55) {
      let c = clusters[floor(random(clusters.length))];
      let angle = random(TWO_PI);
      let dist = random() * random() * c.radius; // squared for tighter clustering
      px = c.x + cos(angle) * dist;
      py = c.y + sin(angle) * dist;
    } else {
      px = random(-100, width + 100);
      py = random(-100, height + 100);
    }

    let aspect = random() < 0.5 ? 1.0 : random(0.7, 0.85);

    lightSpots.push({
      baseX: px,
      baseY: py,
      size: random(135, 200),
      aspect: aspect,
      angle: random(TWO_PI),
      brightness: random(0.2, 1.0),
      warmth: random(0, 1),
      noiseOffX: random(1000),
      noiseOffY: random(2000),
      noiseOffSize: random(3000),
      noiseOffAlpha: random(4000),
      speed: random(0.5, 1.2),
    });
  }
}

function draw() {
  let t = frameCount * timeSpeed;

  // textured background
  image(textureImg, 0, 0);

  // gradient overlay
  drawBackground(t);

  // light field
  drawLightField(t);
}

function drawBackground(t) {
  let ctx = drawingContext;
  let grad = ctx.createLinearGradient(0, 0, 0, height);
  grad.addColorStop(0, `rgba(${BG_TOP[0]},${BG_TOP[1]},${BG_TOP[2]},0.7)`);
  grad.addColorStop(1, `rgba(${BG_BOTTOM[0]},${BG_BOTTOM[1]},${BG_BOTTOM[2]},0.7)`);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);
}

function drawLightField(t) {
  let ctx = drawingContext;

  for (let spot of lightSpots) {
    let st = t * spot.speed;

    // organic drift
    let dx = (noise(spot.noiseOffX, st * 0.4) - 0.5) * 100;
    let dy = (noise(spot.noiseOffY, st * 0.35) - 0.5) * 100;
    let x = spot.baseX + dx;
    let y = spot.baseY + dy;

    // breathing size
    let sizeMod = noise(spot.noiseOffSize, st * 0.5);
    sizeMod = map(sizeMod, 0, 1, 0.7, 1.3);
    let s = spot.size * sizeMod;

    // pulsing intensity
    let alphaMod = noise(spot.noiseOffAlpha, st * 0.6);
    alphaMod = smoothstep(0.2, 0.8, alphaMod);
    let intensity = spot.brightness * alphaMod;

    if (intensity < 0.05) continue;

    // color blend
    let r = lerp(LIGHT_COOL[0], LIGHT_WARM[0], spot.warmth);
    let g = lerp(LIGHT_COOL[1], LIGHT_WARM[1], spot.warmth);
    let b = lerp(LIGHT_COOL[2], LIGHT_WARM[2], spot.warmth);

    let radius = s / 2;
    let coreAlpha = intensity * 0.9;
    let edgeAlpha = intensity * 0.4;

    // radial gradient for soft edge
    let grad = ctx.createRadialGradient(0, 0, 0, 0, 0, radius);
    grad.addColorStop(0, `rgba(${r},${g},${b},${coreAlpha})`);
    grad.addColorStop(0.75, `rgba(${r},${g},${b},${edgeAlpha})`);
    grad.addColorStop(1, `rgba(${r},${g},${b},0)`);

    // transform to create oval + rotation
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(spot.angle);
    ctx.scale(1, spot.aspect);

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, TWO_PI);
    ctx.fill();

    ctx.restore();
  }
}

function generatePlasterTexture(g) {
  g.loadPixels();
  for (let i = 0; i < g.pixels.length; i += 4) {
    let px = (i / 4) % g.width;
    let py = floor((i / 4) / g.width);

    // very coarse structure — plaster patches
    let coarse = (noise(px * 0.004, py * 0.004) - 0.5) * 70;
    // medium grain
    let medium = (noise(px * 0.02, py * 0.02) - 0.5) * 45;
    // fine grit
    let fine = random(-20, 20);

    let base = 75 + coarse + medium + fine;

    g.pixels[i] = base;
    g.pixels[i + 1] = base + 3;
    g.pixels[i + 2] = base + 1;
    g.pixels[i + 3] = 255;
  }
  g.updatePixels();
}

function smoothstep(edge0, edge1, x) {
  let t = constrain((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  textureImg = createGraphics(width, height);
  generatePlasterTexture(textureImg);
  generateSpots();
}
