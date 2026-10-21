// Data contoh untuk menunjukkan prinsip IMK dan visualisasi data.
const records = [
 {month:"Jan",category:"Akademik",requests:120,resolved:108},
 {month:"Jan",category:"Administrasi",requests:95,resolved:82},
 {month:"Jan",category:"Teknis",requests:70,resolved:62},
 {month:"Feb",category:"Akademik",requests:135,resolved:119},
 {month:"Feb",category:"Administrasi",requests:110,resolved:96},
 {month:"Feb",category:"Teknis",requests:76,resolved:68},
 {month:"Mar",category:"Akademik",requests:142,resolved:126},
 {month:"Mar",category:"Administrasi",requests:102,resolved:91},
 {month:"Mar",category:"Teknis",requests:83,resolved:73},
 {month:"Apr",category:"Akademik",requests:128,resolved:116},
 {month:"Apr",category:"Administrasi",requests:118,resolved:105},
 {month:"Apr",category:"Teknis",requests:90,resolved:81},
 {month:"Mei",category:"Akademik",requests:150,resolved:134},
 {month:"Mei",category:"Administrasi",requests:125,resolved:112},
 {month:"Mei",category:"Teknis",requests:94,resolved:85},
 {month:"Jun",category:"Akademik",requests:160,resolved:143},
 {month:"Jun",category:"Administrasi",requests:132,resolved:119},
 {month:"Jun",category:"Teknis",requests:101,resolved:92}
];
const $=id=>document.getElementById(id);
const monthOrder=["Jan","Feb","Mar","Apr","Mei","Jun"];
let trendChart,categoryChart;
function getFiltered(){
 const period=$("period").value, category=$("category").value;
 return records.filter(r=>{
  const inPeriod=period==="all"||(period==="semester1"?["Jan","Feb","Mar"].includes(r.month):["Apr","Mei","Jun"].includes(r.month));
  return inPeriod&&(category==="all"||r.category===category);
 });
}
function groupByMonth(rows){
 return monthOrder.filter(m=>rows.some(r=>r.month===m)).map(m=>({month:m,requests:rows.filter(r=>r.month===m).reduce((s,r)=>s+r.requests,0)}));
}
function groupByCategory(rows){
 return ["Akademik","Administrasi","Teknis"].map(c=>({category:c,requests:rows.filter(r=>r.category===c).reduce((s,r)=>s+r.requests,0)})).filter(x=>x.requests>0);
}
function render(){
 const rows=getFiltered(), total=rows.reduce((s,r)=>s+r.requests,0), resolved=rows.reduce((s,r)=>s+r.resolved,0);
 const cats=groupByCategory(rows), top=cats.slice().sort((a,b)=>b.requests-a.requests)[0];
 $("totalRequests").textContent=total.toLocaleString("id-ID");
 $("avgResolved").textContent=total?`${(resolved/total*100).toFixed(1)}%`:"0%";
 $("topCategory").textContent=top?top.category:"-";
 $("dataRows").innerHTML=rows.length?rows.map(r=>`<tr><td>${r.month}</td><td>${r.category}</td><td>${r.requests}</td><td>${r.resolved}</td><td>${(r.resolved/r.requests*100).toFixed(1)}%</td></tr>`).join(""):'<tr><td colspan="5">Tidak ada data sesuai filter.</td></tr>';
 const monthly=groupByMonth(rows);
 if(trendChart)trendChart.destroy();
 trendChart=new Chart($("trendChart"),{type:"line",data:{labels:monthly.map(x=>x.month),datasets:[{label:"Jumlah permintaan",data:monthly.map(x=>x.requests),borderWidth:3,tension:.25,pointRadius:4}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:"Jumlah permintaan"}}}}});
 if(categoryChart)categoryChart.destroy();
 categoryChart=new Chart($("categoryChart"),{type:"bar",data:{labels:cats.map(x=>x.category),datasets:[{label:"Jumlah permintaan",data:cats.map(x=>x.requests)}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{y:{beginAtZero:true,title:{display:true,text:"Jumlah permintaan"}}}}});
 $("insight").textContent=rows.length?`Filter saat ini menampilkan ${rows.length} kelompok data dengan ${total} permintaan. Kategori terbanyak adalah ${top.category}. Persentase penyelesaian keseluruhan ${total?(resolved/total*100).toFixed(1):0}%. Angka ini dapat membantu menentukan layanan yang perlu diperiksa, tetapi keputusan sebaiknya mempertimbangkan penyebab dan kebutuhan pengguna juga.`:"Tidak ada data yang cocok dengan filter. Coba pilih filter lain.";
}
$("period").addEventListener("change",render);
$("category").addEventListener("change",render);
$("reset").addEventListener("click",()=>{$("period").value="all";$("category").value="all";render();});
render();
