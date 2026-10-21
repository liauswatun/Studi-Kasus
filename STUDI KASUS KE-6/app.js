// Dataset simulasi. Ini bukan data satelit atau hasil model AI yang nyata.
const records = [
 {id:"D-001",region:"Utara",year:2024,area:18.4,cause:"Pertanian",status:"Perlu verifikasi"},
 {id:"D-002",region:"Tengah",year:2024,area:7.2,cause:"Penebangan",status:"Perlu verifikasi"},
 {id:"D-003",region:"Selatan",year:2024,area:11.6,cause:"Kebakaran",status:"Perlu verifikasi"},
 {id:"D-004",region:"Utara",year:2025,area:23.1,cause:"Pertanian",status:"Perlu verifikasi"},
 {id:"D-005",region:"Tengah",year:2025,area:5.8,cause:"Pertambangan",status:"Perlu verifikasi"},
 {id:"D-006",region:"Selatan",year:2025,area:3.4,cause:"Gangguan alami",status:"Perlu verifikasi"},
 {id:"D-007",region:"Utara",year:2026,area:14.7,cause:"Penebangan",status:"Perlu verifikasi"},
 {id:"D-008",region:"Tengah",year:2026,area:20.5,cause:"Pertanian",status:"Perlu verifikasi"},
 {id:"D-009",region:"Selatan",year:2026,area:9.3,cause:"Kebakaran",status:"Perlu verifikasi"},
 {id:"D-010",region:"Tengah",year:2024,area:4.9,cause:"Gangguan alami",status:"Perlu verifikasi"},
 {id:"D-011",region:"Utara",year:2025,area:8.1,cause:"Pertambangan",status:"Perlu verifikasi"},
 {id:"D-012",region:"Selatan",year:2025,area:12.2,cause:"Penebangan",status:"Perlu verifikasi"}
];
const $=id=>document.getElementById(id);
let chart;
function filteredRecords(){
 const region=$("region").value,year=$("year").value,cause=$("cause").value;
 return records.filter(r=>(region==="all"||r.region===region)&&(year==="all"||String(r.year)===year)&&(cause==="all"||r.cause===cause));
}
function render(){
 const data=filteredRecords();
 const review=data.filter(r=>r.status==="Perlu verifikasi").length;
 const largest=data.slice().sort((a,b)=>b.area-a.area)[0];
 $("total").textContent=data.length;
 $("review").textContent=review;
 $("largest").textContent=largest?`${largest.region} (${largest.area} ha)`:"-";
 $("rows").innerHTML=data.length?data.map(r=>`<tr><td>${r.id}</td><td>${r.region}</td><td>${r.year}</td><td>${r.area.toFixed(1)}</td><td>${r.cause}</td><td><span class="status">${r.status}</span></td></tr>`).join(""):'<tr><td colspan="6">Tidak ada data yang sesuai dengan filter.</td></tr>';
 const causes=["Pertanian","Penebangan","Pertambangan","Kebakaran","Gangguan alami"];
 const sums=causes.map(c=>data.filter(r=>r.cause===c).reduce((s,r)=>s+r.area,0));
 if(chart)chart.destroy();
 chart=new Chart($("causeChart"),{type:"bar",data:{labels:causes,datasets:[{label:"Perkiraan area indikasi (ha)",data:sums}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:"Perkiraan area (ha)"}}}}});
 $("insight").textContent=data.length?`Filter menampilkan ${data.length} indikasi dengan total perkiraan area ${data.reduce((s,r)=>s+r.area,0).toFixed(1)} ha. Semua catatan masih berstatus perlu verifikasi, sehingga kategori penyebab tidak boleh dianggap sebagai kesimpulan pasti.`:"Tidak ada data yang cocok. Silakan ubah filter.";
}
["region","year","cause"].forEach(id=>$(id).addEventListener("change",render));
$("reset").addEventListener("click",()=>{$("region").value="all";$("year").value="all";$("cause").value="all";render();});
render();
