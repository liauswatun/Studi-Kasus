// Data simulasi untuk latihan: pendapatan naik, laba melemah, dan piutang meningkat.
const data = [
["Jul 2024",82,14.6,12],["Agu 2024",85,15.1,12.8],["Sep 2024",87,14.9,13.9],["Okt 2024",89,15,14.5],
["Nov 2024",91,14.7,15.2],["Des 2024",96,15.3,16.4],["Jan 2025",94,14.1,17.1],["Feb 2025",97,14.3,18.5],
["Mar 2025",99,13.9,19.8],["Apr 2025",101,13.7,21.4],["Mei 2025",104,13.4,22.6],["Jun 2025",106,13.2,23.8],
["Jul 2025",108,12.9,25.1],["Agu 2025",110,12.7,26.7],["Sep 2025",112,12.4,28.2],["Okt 2025",114,12.1,29.6],
["Nov 2025",117,11.9,31.5],["Des 2025",119,11.6,33.2],["Jan 2026",121,11.3,34.8],["Feb 2026",124,11,36.5],
["Mar 2026",126,10.7,38.2],["Apr 2026",128,10.3,40.1],["Mei 2026",131,9.9,42.3],["Jun 2026",134,9.5,44.7]
].map(r=>({month:r[0],revenue:r[1]*1e6,profit:r[2]*1e6,receivables:r[3]*1e6}));
const names={revenue:"Pendapatan",profit:"Laba bersih",receivables:"Piutang"};
const rupiah=n=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(n);
const total=k=>data.reduce((s,r)=>s+r[k],0);
const first=data[0],last=data[data.length-1],pct=(a,b)=>(b-a)/a*100;
document.querySelector("#revenue").textContent=rupiah(total("revenue"));
document.querySelector("#profit").textContent=rupiah(total("profit"));
document.querySelector("#receivables").textContent=rupiah(last.receivables);
document.querySelector("#comparison").innerHTML=["revenue","profit","receivables"].map(k=>`<div><span>${names[k]}</span><strong>${pct(first[k],last[k])>0?"+":""}${pct(first[k],last[k]).toFixed(1)}%</strong></div>`).join("");
const chart=new Chart(document.querySelector("#trendChart"),{type:"line",data:{labels:data.map(r=>r.month),datasets:[{label:names.revenue,data:data.map(r=>r.revenue),borderWidth:2,tension:.25,pointRadius:2}]},options:{responsive:true,maintainAspectRatio:false,plugins:{tooltip:{callbacks:{label:c=>names[document.querySelector("#metric").value]+": "+rupiah(c.raw)}}},scales:{y:{ticks:{callback:v=>new Intl.NumberFormat("id-ID",{notation:"compact"}).format(v)}}}}});
document.querySelector("#metric").addEventListener("change",e=>{const k=e.target.value;chart.data.datasets[0].label=names[k];chart.data.datasets[0].data=data.map(r=>r[k]);chart.update();});
document.querySelector("#insight").textContent=`Dalam data simulasi, pendapatan berubah ${pct(first.revenue,last.revenue).toFixed(1)}%, sedangkan laba bersih berubah ${pct(first.profit,last.profit).toFixed(1)}% dan piutang meningkat ${pct(first.receivables,last.receivables).toFixed(1)}%. Ini menunjukkan penjualan yang naik belum tentu membuat laba naik. Periksa biaya, margin produk, diskon, dan umur piutang sebelum menentukan tindakan.`;
