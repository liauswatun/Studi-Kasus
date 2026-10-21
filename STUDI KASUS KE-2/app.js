// Simulasi sederhana antrean pekerjaan HPC. Tidak terhubung ke infrastruktur HPC nyata.
const jobs = [];
let nextId = 1;
const $ = id => document.getElementById(id);
const fmt = (n, digits=1) => Number(n).toFixed(digits);
function getEnergy(job) {
  // Asumsi daya: 0,08 kW per core CPU + 0,025 kW per GB memori yang diminta.
  const powerKw = job.cores * 0.08 + job.memory * 0.025;
  return powerKw * job.duration;
}
function render() {
  $("totalJobs").textContent = jobs.length;
  const active = jobs.find(j => j.status === "Berjalan");
  $("cpuUsed").textContent = active ? `${Math.min(100, active.cores / 32 * 100).toFixed(0)}%` : "0%";
  $("memoryUsed").textContent = active ? `${active.memory} GB` : "0 GB";
  $("energy").textContent = `${fmt(jobs.reduce((s,j)=>s+getEnergy(j),0))} kWh`;
  $("jobRows").innerHTML = jobs.length ? jobs.map(j => `
    <tr>
      <td>${escapeHtml(j.name)}</td><td>${j.cores} core</td><td>${j.memory} GB</td><td>${j.duration} jam</td>
      <td><span class="status ${j.status === "Berjalan" ? "running" : j.status === "Selesai" ? "done" : ""}">${j.status}</span></td>
      <td><button class="remove" data-remove="${j.id}">Hapus</button></td>
    </tr>`).join("") : '<tr><td colspan="6">Belum ada pekerjaan. Tambahkan pekerjaan melalui formulir di atas.</td></tr>';
  const energy = jobs.reduce((s,j)=>s+getEnergy(j),0);
  $("energyNote").textContent = jobs.length
    ? `Untuk ${jobs.length} pekerjaan, perkiraan total energi adalah ${fmt(energy)} kWh berdasarkan asumsi daya di aplikasi. Untuk menghemat energi, pekerjaan dapat dijadwalkan agar sumber daya digunakan sesuai kebutuhan dan pekerjaan yang tidak mendesak dijalankan saat kapasitas tersedia.`
    : "Tambahkan pekerjaan untuk melihat perkiraan energi.";
}
function escapeHtml(value) {
  return value.replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
}
$("jobForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = $("jobName").value.trim();
  if (!name) return;
  jobs.push({
    id: nextId++, name,
    cores: Number($("cores").value),
    memory: Number($("memory").value),
    duration: Number($("duration").value),
    status: "Menunggu"
  });
  $("formMessage").textContent = `Pekerjaan "${name}" ditambahkan ke antrean.`;
  $("jobName").value = "";
  render();
});
$("jobRows").addEventListener("click", event => {
  const id = Number(event.target.dataset.remove);
  if (!id) return;
  const index = jobs.findIndex(j => j.id === id);
  if (index >= 0) jobs.splice(index, 1);
  render();
});
$("runButton").addEventListener("click", () => {
  let started = false;
  for (const job of jobs) {
    if (job.status === "Menunggu") {
      job.status = "Berjalan";
      started = true;
      break;
    }
  }
  if (started) {
    const current = jobs.find(j => j.status === "Berjalan");
    // Satu klik simulasi menandai satu pekerjaan selesai agar alur antrean mudah dipelajari.
    current.status = "Selesai";
    $("formMessage").textContent = `Simulasi selesai menjalankan pekerjaan "${current.name}".`;
    const next = jobs.find(j => j.status === "Menunggu");
    if (next) next.status = "Berjalan";
  } else {
    $("formMessage").textContent = jobs.length ? "Semua pekerjaan sudah diproses." : "Tambahkan pekerjaan terlebih dahulu.";
  }
  render();
});
render();
