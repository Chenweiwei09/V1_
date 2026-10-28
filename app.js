const data = window.SITE_DATA;
const app = document.getElementById('app');
document.getElementById('credit').textContent=data.footerCredit;
document.getElementById('homeBtn').onclick=()=>location.hash='#/';
const h=(v)=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const link=(p)=>`#/${p}`;
function home(){
 app.innerHTML=`<section class="hero"><div><span class="eyebrow">WELCOME TO OUR LITTLE CLASSROOM</span><h1>${h(data.siteTitle)}<span style="color:#79a58b">✿</span></h1><p>${h(data.subtitle)}<br>國語、數學、心智圖與有趣的小遊戲，都在這裡。</p></div><div class="hero-art" aria-hidden="true"><span class="big">📚</span><span class="mini-flower">🌼</span><span class="mini-spark">✨</span></div></section><section><div class="section-head"><div><h2>選擇學習教材</h2><p>點進科目 → 選擇課次 → 開始互動練習</p></div><span style="font-size:30px">☘</span></div><div class="subject-grid">${data.subjects.map(s=>`<button class="subject-card ${h(s.tone)}" data-subject="${h(s.id)}"><span class="emoji">${h(s.emoji)}</span><span><h3>${h(s.title)}</h3><p>${h(s.grade)} · ${h(s.publisher)}版 · ${h(s.subject)}</p></span><span class="arrow">›</span></button>`).join('')}</div></section>`;
 app.querySelectorAll('[data-subject]').forEach(b=>b.onclick=()=>location.hash=link('subject/'+encodeURIComponent(b.dataset.subject)));
}
function subject(s){
 const lessons=s.lessons||[];
 app.innerHTML=`<nav class="crumb"><a href="#/">首頁</a><span>›</span><strong>${h(s.title)}</strong></nav><h1 class="page-title">${h(s.emoji)} ${h(s.title)}</h1><p class="page-desc">選擇要練習的課次，進入後就能查看這一課的小遊戲與心智圖。</p>${lessons.length?`<div class="lesson-grid">${lessons.map((l,i)=>`<button class="lesson-card" data-lesson="${h(l.id)}"><span class="number">LESSON ${String(i+1).padStart(2,'0')}</span><h3>${h(l.title)}</h3><span class="bottom">${(l.activities||[]).length?'查看 '+l.activities.length+' 個教材 →':'教材準備中 →'}</span></button>`).join('')}</div>`:`<div class="empty"><div class="icon">🌱</div><h3>這個科目的小教具正在準備中</h3><p>之後只要在 site-data.js 加上課次，這裡就會自動出現。</p><a href="#/" class="secondary-link">返回首頁</a></div>`}`;
 app.querySelectorAll('[data-lesson]').forEach(b=>b.onclick=()=>location.hash=link('subject/'+encodeURIComponent(s.id)+'/lesson/'+encodeURIComponent(b.dataset.lesson)));
}
function lesson(s,l){const activities=l.activities||[];
 app.innerHTML=`<nav class="crumb"><a href="#/">首頁</a><span>›</span><a href="${link('subject/'+encodeURIComponent(s.id))}">${h(s.title)}</a><span>›</span><strong>${h(l.title)}</strong></nav><h1 class="page-title">${h(l.title)}</h1><p class="page-desc">選擇想玩的遊戲或學習教材。活動會在新分頁開啟，方便返回課程清單。</p>${activities.length?`<div class="activity-grid">${activities.map(a=>`<a class="activity-card" href="${h(a.url)}" target="_blank" rel="noopener"><span class="number">✦ ${h(a.type||'教材')}</span><h3>${h(a.title)}</h3><p class="desc">${h(a.description||'點擊開始練習')}</p><span class="bottom">點擊開始 →</span></a>`).join('')}</div>`:`<div class="empty"><div class="icon">🧩</div><h3>本課教材準備中</h3><p>未來可以在這裡放「本課生字遊戲」、「互動心智圖」、「閱讀小挑戰」等活動。</p><a href="${link('subject/'+encodeURIComponent(s.id))}" class="secondary-link">回到課次清單</a></div>`}`;}
function render(){const parts=decodeURIComponent(location.hash.replace(/^#\/?/,'')).split('/').filter(Boolean);const s=data.subjects.find(s=>s.id===parts[1]);if(parts[0]==='subject'&&s){const l=(s.lessons||[]).find(l=>l.id===parts[3]);if(parts[2]==='lesson'&&l)lesson(s,l);else subject(s)}else home();window.scrollTo(0,0)}
window.addEventListener('hashchange',render);render();
