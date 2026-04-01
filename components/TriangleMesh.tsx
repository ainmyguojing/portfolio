"use client";

import { useEffect, useRef, useState } from "react";

// ─── Delaunay (Bowyer–Watson) ─────────────────────────────────────────────────

function circumcircle(ax: number, ay: number, bx: number, by: number, cx: number, cy: number) {
  const D = 2 * (ax * (by - cy) + bx * (cy - ay) + cx * (ay - by));
  if (Math.abs(D) < 1e-10) return null;
  const ux = ((ax*ax + ay*ay) * (by - cy) + (bx*bx + by*by) * (cy - ay) + (cx*cx + cy*cy) * (ay - by)) / D;
  const uy = ((ax*ax + ay*ay) * (cx - bx) + (bx*bx + by*by) * (ax - cx) + (cx*cx + cy*cy) * (bx - ax)) / D;
  const r  = Math.hypot(ax - ux, ay - uy);
  return { x: ux, y: uy, r };
}

interface Pt { x: number; y: number; bx: number; by: number; }
interface Tri { i: number; j: number; k: number; }

function delaunay(points: Pt[]): Tri[] {
  const n = points.length;
  if (n < 3) return [];

  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (const p of points) {
    if (p.x < minX) minX = p.x; if (p.y < minY) minY = p.y;
    if (p.x > maxX) maxX = p.x; if (p.y > maxY) maxY = p.y;
  }
  const dmax = Math.max(maxX - minX, maxY - minY) * 2;
  const mx = (minX + maxX) / 2, my = (minY + maxY) / 2;

  const sp: Pt[] = [
    { x: mx - dmax * 2, y: my - dmax,    bx: 0, by: 0 },
    { x: mx,            y: my + dmax * 2, bx: 0, by: 0 },
    { x: mx + dmax * 2, y: my - dmax,    bx: 0, by: 0 },
  ];
  const all = [...points, ...sp];
  const si = n, sj = n + 1, sk = n + 2;

  let triangles: Tri[] = [{ i: si, j: sj, k: sk }];

  for (let p = 0; p < n; p++) {
    const px = all[p].x, py = all[p].y;
    const edges: [number, number][] = [];

    triangles = triangles.filter(t => {
      const c = circumcircle(all[t.i].x, all[t.i].y, all[t.j].x, all[t.j].y, all[t.k].x, all[t.k].y);
      if (!c) return true;
      if (Math.hypot(px - c.x, py - c.y) < c.r + 1e-8) {
        edges.push([t.i, t.j], [t.j, t.k], [t.k, t.i]);
        return false;
      }
      return true;
    });

    const unique: [number, number][] = [];
    outer: for (let e = 0; e < edges.length; e++) {
      for (let f = 0; f < edges.length; f++) {
        if (e !== f &&
          ((edges[e][0] === edges[f][0] && edges[e][1] === edges[f][1]) ||
           (edges[e][0] === edges[f][1] && edges[e][1] === edges[f][0]))) {
          continue outer;
        }
      }
      unique.push(edges[e]);
    }
    for (const [a, b] of unique) triangles.push({ i: a, j: b, k: p });
  }

  return triangles.filter(t => t.i < n && t.j < n && t.k < n);
}

// ─── Point generation ─────────────────────────────────────────────────────────

function generateBasePoints(w: number, h: number, spacing: number): Pt[] {
  const pts: Pt[] = [];
  const cols = Math.ceil(w / spacing) + 2;
  const rows = Math.ceil(h / spacing) + 2;
  for (let r = -1; r <= rows; r++) {
    for (let c = -1; c <= cols; c++) {
      const jx = (Math.random() - 0.5) * spacing * 0.85;
      const jy = (Math.random() - 0.5) * spacing * 0.85;
      pts.push({ bx: c * spacing + jx, by: r * spacing + jy, x: c * spacing + jx, y: r * spacing + jy });
    }
  }
  return pts;
}

function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }
function easeOut(t: number) { return 1 - Math.pow(1 - t, 3); }

// ─── Component ────────────────────────────────────────────────────────────────

const BASE_SPACING = 95;
const ATTRACT_R    = 260;
const ATTRACT_STR  = 0.58;
const DOT_THRESHOLD = 100;

export default function TriangleMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: -200, y: -200 });
  const onCardRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width  = W;
    canvas.height = H;

    let basePoints = generateBasePoints(W, H, BASE_SPACING);
    const mouse  = { x: W / 2, y: H / 2 };
    const target = { x: W / 2, y: H / 2 };
    let frameId: number;
    let lastTime = 0;
    let globalAlpha = 1; // smoothly lerped between 1 (default) and 0.08 (on card)

    function draw(ts: number) {
      const dt = Math.min((ts - lastTime) / 1000, 0.05);
      lastTime = ts;

      // smooth global fade when on card
      const targetAlpha = onCardRef.current ? 0.08 : 1;
      globalAlpha = lerp(globalAlpha, targetAlpha, 1 - Math.pow(0.01, dt));

      mouse.x = lerp(mouse.x, target.x, 1 - Math.pow(0.04, dt));
      mouse.y = lerp(mouse.y, target.y, 1 - Math.pow(0.04, dt));

      for (const p of basePoints) {
        const dx = mouse.x - p.bx;
        const dy = mouse.y - p.by;
        const dist = Math.hypot(dx, dy);
        const influence = Math.max(0, 1 - dist / ATTRACT_R);
        const t = easeOut(influence) * ATTRACT_STR;
        p.x = lerp(p.x, p.bx + dx * t, 1 - Math.pow(0.04, dt));
        p.y = lerp(p.y, p.by + dy * t, 1 - Math.pow(0.04, dt));
      }

      const pts = basePoints;
      const tris = delaunay(pts);

      ctx.clearRect(0, 0, W, H);
      ctx.save();
      ctx.globalAlpha = globalAlpha;

      for (const t of tris) {
        const ax = pts[t.i].x, ay = pts[t.i].y;
        const bx = pts[t.j].x, by = pts[t.j].y;
        const cx = pts[t.k].x, cy = pts[t.k].y;

        const centX = (ax + bx + cx) / 3;
        const centY = (ay + by + cy) / 3;
        const dist  = Math.hypot(centX - mouse.x, centY - mouse.y);
        const fadeR = W * 0.5;
        const linear = Math.max(0, 1 - dist / fadeR);
        const prox  = Math.pow(linear, 4);

        ctx.beginPath();
        ctx.moveTo(ax, ay);
        ctx.lineTo(bx, by);
        ctx.lineTo(cx, cy);
        ctx.closePath();

        ctx.fillStyle = `rgba(255,255,5,${prox})`;
        ctx.fill();

        ctx.strokeStyle = `rgba(23,23,23,${lerp(0, 0.2, prox)})`;
        ctx.lineWidth   = lerp(0.3, 0.8, prox);
        ctx.stroke();
      }

      // single closest dot
      let closestDist = Infinity, closestPt: Pt | null = null;
      for (const p of pts) {
        const d = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (d < closestDist) { closestDist = d; closestPt = p; }
      }
      if (closestPt && closestDist < DOT_THRESHOLD) {
        const fade = Math.max(0, 1 - closestDist / DOT_THRESHOLD);
        ctx.beginPath();
        ctx.arc(closestPt.x, closestPt.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(23,23,23,${fade * 0.8})`;
        ctx.fill();
      }

      ctx.restore();
      frameId = requestAnimationFrame(draw);
    }

    frameId = requestAnimationFrame(ts => { lastTime = ts; draw(ts); });

    const onResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width  = W;
      canvas.height = H;
      basePoints = generateBasePoints(W, H, BASE_SPACING);
    };

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      setCursorPos({ x: e.clientX, y: e.clientY });
      const el = document.elementFromPoint(e.clientX, e.clientY);
      onCardRef.current = !!(el?.closest('.card'));
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
      />

      {/* Custom cursor */}
      <div
        className="fixed z-[9999] pointer-events-none"
        style={{
          left: cursorPos.x,
          top:  cursorPos.y,
          transform: "translate(-50%, -50%)",
          transition: "transform 0.12s ease",
        }}
      >
        <div style={{
          width: 7, height: 7,
          borderRadius: "50%",
          background: "#171717",
          opacity: 0.7,
        }} />
      </div>
    </>
  );
}
