// KNN klasifikasi sederhana. Seluruh dataset adalah data sintetis untuk latihan.
const training = [
 {hours:2,attendance:55,label:"Perlu dukungan"},{hours:3,attendance:65,label:"Perlu dukungan"},
 {hours:4,attendance:60,label:"Perlu dukungan"},{hours:4,attendance:75,label:"Perlu dukungan"},
 {hours:5,attendance:68,label:"Perlu dukungan"},{hours:5,attendance:78,label:"Perlu dukungan"},
 {hours:6,attendance:72,label:"Perlu dukungan"},{hours:6,attendance:80,label:"Lulus"},
 {hours:7,attendance:78,label:"Lulus"},{hours:7,attendance:85,label:"Lulus"},
 {hours:8,attendance:82,label:"Lulus"},{hours:8,attendance:90,label:"Lulus"},
 {hours:9,attendance:88,label:"Lulus"},{hours:10,attendance:92,label:"Lulus"},
 {hours:11,attendance:95,label:"Lulus"},{hours:4,attendance:90,label:"Lulus"}
];
// Data uji sederhana disiapkan terpisah dari data latih.
const testData = [
 {hours:3,attendance:60,label:"Perlu dukungan"},
 {hours:7,attendance:82,label:"Lulus"},
 {hours:5,attendance:70,label:"Perlu dukungan"},
 {hours:9,attendance:90,label:"Lulus"}
];
const $=id=>document.getElementById(id);
function distance(a,b){
  // Skala fitur dinormalisasi agar jam belajar dan kehadiran punya rentang sebanding.
  return Math.sqrt(((a.hours-b.hours)/40)**2 + ((a.attendance-b.attendance)/100)**2);
}
function predict(sample,k){
  const nearest=training.map(row=>({...row,d:distance(sample,row)})).sort((a,b)=>a.d-b.d).slice(0,k);
  const votes={};
  nearest.forEach(row=>votes[row.label]=(votes[row.label]||0)+1);
  const label=Object.keys(votes).sort((a,b)=>votes[b]-votes[a])[0];
  return {label,nearest};
}
function accuracyScore(){
  let correct=0;
  testData.forEach(row=>{if(predict(row,3).label===row.label)correct++;});
  return correct/testData.length*100;
}
$("trainCount").textContent=training.length;
$("accuracy").textContent=`${accuracyScore().toFixed(0)}%`;
$("trainingRows").innerHTML=training.map(r=>`<tr><td>${r.hours} jam</td><td>${r.attendance}%</td><td>${r.label}</td></tr>`).join("");
$("evaluation").textContent=`Pada ${testData.length} contoh data uji, model KNN dengan K=3 memprediksi benar ${testData.filter(r=>predict(r,3).label===r.label).length} data. Akurasi data uji sederhana: ${accuracyScore().toFixed(0)}%.`;
$("predictForm").addEventListener("submit",e=>{
  e.preventDefault();
  const hours=Number($("hours").value),attendance=Number($("attendance").value),k=Number($("k").value);
  if(hours<0||hours>40||attendance<0||attendance>100){$("result").textContent="Masukkan jam belajar 0–40 dan kehadiran 0–100.";return;}
  const result=predict({hours,attendance},k);
  const neighbors=result.nearest.map(n=>`${n.label} (jarak ${n.d.toFixed(3)})`).join(", ");
  $("result").innerHTML=`Hasil prediksi: <strong>${result.label}</strong><br>Prediksi memakai ${k} tetangga terdekat.<br><span class="muted">Tetangga yang dibandingkan: ${neighbors}</span>`;
});
