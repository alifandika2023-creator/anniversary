// ===== Ubah data di sini =====
const CONFIG = {
  names: ["Alif", "Jihan"],
  start: "2026-01-20T00:00:00",   // tanggal jadian
  from: "Andi",
  timeline: [
    {date: "20 Januari 2026", title: "Awal cerita kita", text: "Hari pertama kita resmi bersama."},
    {date: "April 2026", title: "Jalan-jalan pertama", text: "Tertawa sepanjang perjalanan."},
    {date: "Agustus 2026", title: "Makin dekat", text: "Hal kecil jadi terasa istimewa."},
    {date: "Hari ini", title: "10 bulan bersama", text: "Terima kasih sudah memilih aku."}
  ]
};
// =============================

const $ = id => document.getElementById(id);
const start = new Date(CONFIG.start);

$("names").textContent = CONFIG.names[0] + " & " + CONFIG.names[1];
$("from").textContent = CONFIG.from;
$("since").textContent = "Bersama sejak " +
  start.toLocaleDateString("id-ID", {day: "numeric", month: "long", year: "numeric"});
document.title = "10 Bulan " + CONFIG.names[0] + " & " + CONFIG.names[1];

$("timeline").innerHTML = CONFIG.timeline.map(t =>
  <li><time>${t.date}</time><h3>${t.title}</h3><p>${t.text}</p></li>).join("");

function tick() {
  const now = new Date();
  let m = (now.getFullYear() - start.getFullYear()) * 12 + now.getMonth() - start.getMonth();
  let d = now.getDate() - start.getDate();
  let h = now.getHours() - start.getHours();
  let i = now.getMinutes() - start.getMinutes();
  let s = now.getSeconds() - start.getSeconds();
  if (s < 0) { s += 60; i--; }
  if (i < 0) { i += 60; h--; }
  if (h < 0) { h += 24; d--; }
  if (d < 0) { d += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); m--; }
  const v = {m, d, h, i, s};
  for (const k in v) $("c-" + k).textContent = Math.max(0, v[k]);
}
tick();
setInterval(tick, 1000);

$("openBtn").addEventListener("click", e => {
  const open = $("paper").classList.toggle("open");
  e.target.setAttribute("aria-expanded", open);
  e.target.textContent = open ? "Tutup surat" : "Buka surat";
});

document.addEventListener("pointerdown", e => {
  for (let n = 0; n < 5; n++) {
    const el = document.createElement("span");
    el.className = "heart";
    el.textContent = ["♡", "♥", "✿"][Math.floor(Math.random() * 3)];
    el.style.left = (e.clientX + Math.random() * 60 - 30) + "px";
    el.style.top = (e.clientY + Math.random() * 20 - 10) + "px";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2400);
  }
});