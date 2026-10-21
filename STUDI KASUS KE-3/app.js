// Titik dan atribut di bawah ini merupakan data simulasi untuk latihan GIS.
const locations = [
  {id:1,name:"Klinik Contoh A",category:"Kesehatan",lat:-3.7902,lng:102.2654,note:"Contoh fasilitas kesehatan"},
  {id:2,name:"Puskesmas Contoh B",category:"Kesehatan",lat:-3.8038,lng:102.2792,note:"Contoh layanan kesehatan"},
  {id:3,name:"Sekolah Contoh C",category:"Pendidikan",lat:-3.7789,lng:102.2521,note:"Contoh fasilitas pendidikan"},
  {id:4,name:"Sekolah Contoh D",category:"Pendidikan",lat:-3.8165,lng:102.2605,note:"Contoh fasilitas pendidikan"},
  {id:5,name:"Kantor Layanan Contoh E",category:"Layanan publik",lat:-3.7954,lng:102.2458,note:"Contoh layanan publik"},
  {id:6,name:"Klinik Contoh F",category:"Kesehatan",lat:-3.8272,lng:102.2821,note:"Contoh fasilitas kesehatan"},
  {id:7,name:"Sekolah Contoh G",category:"Pendidikan",lat:-3.7655,lng:102.2788,note:"Contoh fasilitas pendidikan"},
  {id:8,name:"Kantor Layanan Contoh H",category:"Layanan publik",lat:-3.7841,lng:102.2922,note:"Contoh layanan publik"}
];
const map = L.map("map").setView([-3.795,102.27],13);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
  maxZoom:19, attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
const markerLayer=L.layerGroup().addTo(map);
const $=id=>document.getElementById(id);
const escapeHtml=s=>s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function filteredLocations(){
  const category=$("category").value;
  const search=$("search").value.trim().toLowerCase();
  return locations.filter(p=>(category==="Semua"||p.category===category)&&p.name.toLowerCase().includes(search));
}
function render(){
  const shown=filteredLocations();
  markerLayer.clearLayers();
  shown.forEach(p=>{
    const marker=L.marker([p.lat,p.lng]).bindPopup(`<b>${escapeHtml(p.name)}</b><br>Kategori: ${escapeHtml(p.category)}<br>${escapeHtml(p.note)}`);
    marker.addTo(markerLayer);
  });
  $("total").textContent=shown.length;
  $("healthCount").textContent=shown.filter(p=>p.category==="Kesehatan").length;
  $("schoolCount").textContent=shown.filter(p=>p.category==="Pendidikan").length;
  $("rows").innerHTML=shown.length?shown.map(p=>`<tr data-id="${p.id}"><td>${escapeHtml(p.name)}</td><td>${escapeHtml(p.category)}</td><td>${p.lat.toFixed(4)}, ${p.lng.toFixed(4)}</td><td>${escapeHtml(p.note)}</td></tr>`).join(""):'<tr><td colspan="4">Tidak ada titik yang sesuai filter.</td></tr>';
  $("insight").textContent=shown.length
    ? `Saat ini peta menampilkan ${shown.length} dari ${locations.length} titik simulasi. Kategori terbanyak pada hasil yang tampil adalah ${mostCommon(shown)}. Filter membantu pengguna memusatkan perhatian pada jenis lokasi tertentu.`
    : "Tidak ada titik yang sesuai dengan pilihan filter. Ubah kategori atau kata pencarian.";
}
function mostCommon(items){
  const counts={};
  items.forEach(p=>counts[p.category]=(counts[p.category]||0)+1);
  return Object.keys(counts).sort((a,b)=>counts[b]-counts[a])[0];
}
$("category").addEventListener("change",render);
$("search").addEventListener("input",render);
$("reset").addEventListener("click",()=>{$("category").value="Semua";$("search").value="";render();});
$("rows").addEventListener("click",e=>{
  const row=e.target.closest("tr[data-id]");
  if(!row)return;
  const p=locations.find(x=>x.id===Number(row.dataset.id));
  if(p){map.setView([p.lat,p.lng],16);markerLayer.eachLayer(m=>{if(m.getLatLng().lat===p.lat&&m.getLatLng().lng===p.lng)m.openPopup();});}
});
render();
