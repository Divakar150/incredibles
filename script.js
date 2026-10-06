const st=document.getElementById('st'),$=s=>document.querySelector(s);
const NS='http://www.w3.org/2000/svg';
// villagers
let v='';[['#3b6ea5',560],['#a53b5c',620],['#4a8a4a',680]].forEach((p,i)=>{v+=`<g class="vil" style="--d:${i*.7}s"><g class="bob" transform="translate(${p[1]},520)"><path d="M-5 0v-40M5 0v-40" stroke="#5b3d22" stroke-width="6"/><rect x="-13" y="-92" width="26" height="54" rx="9" fill="${p[0]}"/><circle cy="-106" r="12" fill="#a8744c"/><ellipse cx="-4" cy="-128" rx="16" ry="10" fill="#d9b36a"/></g></g>`});
document.getElementById('vs').innerHTML=v;
// crops
let c='';for(let i=0;i<12;i++){const x=940+i*27,y=532+Math.sin(i/2)*6;c+=`<g transform="translate(${x},${y})"><g class="crop" style="--d:${3+i*.25}s"><line y2="-46" stroke="#3f8a2f" stroke-width="3"/><path d="M0 -20Q-14 -30 -16 -40M0 -28Q14 -36 16 -48" stroke="#3f8a2f" stroke-width="3" fill="none"/><ellipse cy="-52" rx="5" ry="10" fill="#f2c230"/></g></g>`}
document.getElementById('crops').innerHTML=c;
let k='';for(let i=0;i<18;i++){k+=`<circle class="coin" cx="${690+Math.random()*320|0}" cy="${500+Math.random()*30|0}" r="9" fill="#ffd35a" stroke="#b98400" stroke-width="2" style="--d:${1.5+i*.15}s"/>`}
document.getElementById('coins').innerHTML=k;
// timeline
const D=[6,10,10,10,9,10],S=[];let T=0;D.forEach(d=>{S.push(T);T+=d});
const C=[[6,'வறட்சி. ஊர் நம்பிக்கை இழந்து வெளியேறுகிறது.','Drought. The village loses hope and leaves.'],
[11.5,'ஆனால் ஒருவன் மட்டும் தங்கி, கிணறு தோண்டத் தொடங்குகிறான்.','But one man stays and begins to dig a well.'],
[16,'நாள்கள் கடக்கின்றன. கை சோர்கிறது; மனம் சோரவில்லை.','Days pass. His hands tire — his will never does.'],
[22,'இதுவே “அசைவிலா ஊக்கம்” — எதுவும் அவனை அசைக்கவில்லை.','This is “unshaken effort” — nothing moves him.'],
[26,'இதற்கிடையில், ஆக்கம் (செல்வம்) தகுதியானவனைத் தேடிப் புறப்படுகிறது.','Meanwhile, Wealth sets out in search of a worthy one.'],
[29.5,'சோம்பி உறங்குபவன் வீட்டை அது கடந்து செல்கிறது.','It passes the house of the idle sleeper.'],
[33,'வழிகாட்டிப் பலகையில் வழி கேட்கிறது… ஒளிரும் பாதை அவனை நோக்கி.','It asks the signpost the way… a glowing path leads to him.'],
[36,'ஒருநாள் மண்ணின் அடியிலிருந்து நீர் பீறிடுகிறது!','One day, water bursts from the earth!'],
[40.5,'செல்வம் வழி கேட்டு அவனிடமே வந்து சேர்கிறது.','Wealth asks the way — and arrives at his door.'],
[45,'','']];
let t=0,play=true,cur=-1,ci=-1;const cap=$('#cap');
function render(){let s=0;S.forEach((a,i)=>{if(t>=a)s=i});if(s!==cur){st.dataset.s=s;cur=s}
let n=-1;C.forEach((c,i)=>{if(t>=c[0])n=i});
if(n!==ci){ci=n;cap.classList.remove('on');if(n>=0&&C[n][1]){cap.querySelector('b').textContent=C[n][1];cap.querySelector('i').textContent=C[n][2];void cap.offsetWidth;cap.classList.add('on')}else{cap.querySelector('b').textContent='';cap.querySelector('i').textContent=''}}
$('#bar').style.width=(t/T*100)+'%'}
setInterval(()=>{if(!play)return;t=Math.min(T,t+.1);render();if(t>=T){play=false;$('#pp').textContent='▶'}},100);
$('#pp').onclick=()=>{if(t>=T)return rep();play=!play;st.classList.toggle('pause',!play);$('#pp').textContent=play?'❚❚':'▶'};
function rep(){t=0;cur=-1;ci=-1;st.dataset.s=-1;void st.offsetWidth;play=true;st.classList.remove('pause');$('#pp').textContent='❚❚';render()}
$('#rp').onclick=rep;render();

(()=>{const q=s=>document.querySelector(s),svg=q('svg'),N='http://www.w3.org/2000/svg',R=(a,b)=>a+Math.random()*(b-a);
const G=(h,c)=>{const g=document.createElementNS(N,'g');if(c)g.setAttribute('class',c);g.innerHTML=h;return g};
const bf=(s,e)=>svg.insertBefore(e,q(s));
let h='';for(let i=0;i<5;i++)h+=`<g class="cloud" style="animation-duration:${R(70,120)|0}s;animation-delay:-${R(0,90)|0}s"><g transform="translate(0,${R(40,200)|0}) scale(${R(.7,1.4).toFixed(2)})"><ellipse rx="70" ry="22"/><ellipse cx="-40" cy="8" rx="45" ry="16"/><ellipse cx="45" cy="10" rx="50" ry="17"/><ellipse cx="10" cy="-14" rx="38" ry="18"/></g></g>`;
bf('.hill',G(h));
bf('#vs',G('<g transform="translate(0,585)"><g class="hop"><g class="roll"><circle r="16" fill="none" stroke="#7a5632" stroke-width="2.5"/><path d="M-16 0H16M0 -16V16M-11 -11L11 11M-11 11L11 -11" stroke="#7a5632" stroke-width="1.5"/></g></g></g>','tw'));
let v='';[['#3b6ea5',560],['#a53b5c',620],['#4a8a4a',680]].forEach((p,i)=>{v+=`<g class="vil" style="--d:${i*.7}s"><g transform="translate(${p[1]},520)"><rect class="lg" x="-8" y="-42" width="6" height="42" rx="3" fill="#5b3d22"/><rect class="lg b" x="2" y="-42" width="6" height="42" rx="3" fill="#5b3d22"/><circle class="puff" cx="-6" cy="-3" r="7" fill="#d9b37a"/><circle class="puff" style="animation-delay:.4s" cx="-6" cy="-3" r="7" fill="#d9b37a"/><g class="bob"><line x1="-8" y1="-100" x2="-20" y2="-70" stroke="#6b4a2a" stroke-width="3"/><circle cx="-20" cy="-66" r="11" fill="#8a6a3a"/><rect x="-13" y="-92" width="26" height="54" rx="9" fill="${p[0]}"/><circle cy="-106" r="12" fill="#a8744c"/><ellipse cx="-4" cy="-128" rx="16" ry="10" fill="#d9b37a"/></g></g></g>`});
q('#vs').innerHTML=v;
const he=q('.dig').closest('svg > g'),hw=document.createElementNS(N,'g');hw.setAttribute('class','hero');he.before(hw);hw.append(he);
q('.a3 ellipse').classList.add('br');
let c='';for(let i=0;i<12;i++){const x=940+i*27,y=532+Math.sin(i/2)*6;c+=`<g transform="translate(${x},${y})"><g class="crop" style="--d:${3+i*.25}s"><g class="sway" style="animation-delay:-${R(0,3).toFixed(1)}s"><line y2="-46" stroke="#3f8a2f" stroke-width="3"/><path d="M0 -20Q-14 -30 -16 -40M0 -28Q14 -36 16 -48" stroke="#3f8a2f" stroke-width="3" fill="none"/><ellipse cy="-52" rx="5" ry="10" fill="#f2c230"/></g></g></g>`}
q('#crops').innerHTML=c;
bf('#crops',G('<g transform="translate(965,522)"><path class="mound" d="M-48 0Q-22 -46 0 -50Q24 -44 48 0Z" fill="#7a5632"/></g>'));
let w='';for(let i=0;i<3;i++)w+=`<ellipse class="rp" style="--r:${i}" cy="4" rx="20" ry="5" fill="none" stroke="#e2f4ff" stroke-width="2"/>`;
for(let i=0;i<16;i++)w+=`<circle class="dp" style="--x:${R(-90,90)|0}px;--h:${R(70,190)|0}px;--d:${(1+R(0,2.4)).toFixed(2)}s" r="${R(2,4).toFixed(1)}" fill="#bfe8ff"/>`;
const wg=G(w);wg.setAttribute('transform','translate(880,522)');bf('#crops',wg);
bf('#crops',G('<path class="flow" d="M900 528 Q1020 548 1260 540" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"/>'));
let m='';for(let i=0;i<20;i++)m+=`<circle class="mote" style="--t:${R(6,14).toFixed(1)}s;--dx:${R(-60,60)|0}px;--dy:${R(-80,20)|0}px;animation-delay:-${R(0,10).toFixed(1)}s" cx="${R(0,1280)|0}" cy="${R(180,620)|0}" r="${R(1.5,3.6).toFixed(1)}"/>`;
bf('.night',G(m));
let b='';for(let i=0;i<4;i++)b+=`<g class="bird" style="animation-duration:${14+i*2}s;animation-delay:-${i*3.5}s"><g transform="translate(0,${90+i*38}) scale(${(1.1-i*.12).toFixed(2)})"><path class="fl" d="M-12 -2Q-6 -12 0 0Q6 -12 12 -2" fill="none" stroke="#3a3a3a" stroke-width="2.2" stroke-linecap="round" style="animation-delay:${i*.1}s"/></g></g>`;
bf('.night',G(b));
let s='';for(let i=0;i<45;i++)s+=`<circle style="animation-delay:-${R(0,1.3).toFixed(2)}s" cx="${R(0,1280)|0}" cy="${R(10,340)|0}" r="${R(.8,2.2).toFixed(1)}"/>`;
svg.append(G(s,'stars'));
const o=q('.orb');let ry='';for(let i=0;i<8;i++){const a=i*Math.PI/4;ry+=`<path d="M${(Math.cos(a)*36).toFixed(1)} ${(Math.sin(a)*36).toFixed(1)}L${(Math.cos(a)*58).toFixed(1)} ${(Math.sin(a)*58).toFixed(1)}" stroke="#ffe27a" stroke-width="3" stroke-linecap="round" opacity=".8"/>`}
o.insertBefore(G(ry,'rays'),q('.core'));
let t='';for(let i=0;i<8;i++)t+=`<circle class="tr" style="--d:${(i*.15).toFixed(2)}s;--y:${R(-20,25)|0}px" r="${R(2.5,5).toFixed(1)}" fill="#ffe27a"/>`;
o.append(G(t));
const f=document.createElement('div');f.className='flash';q('.shade').after(f);
})();

(()=>{const Q=(s)=>document.querySelector(s),vs=[...document.querySelectorAll('.view')];let cur2='home',gameOn=0;
Q('#vslot').append(st);
window.go=n=>{if(cur2==='video'&&n!=='video'){play=false;st.classList.add('pause')}cur2=n;vs.forEach(v=>v.classList.toggle('on',v.id==='v-'+n));document.querySelectorAll('nav a').forEach(a=>a.classList.toggle('on',a.dataset.v===n));Q('nav').classList.remove('open');scrollTo(0,0);try{history.replaceState(0,'','#'+n)}catch(e){}gameOn=n==='game';if(n==='video')rep();if(n==='game'&&!G.on&&!G.win)over('கிணறு தோண்டுவோம்!','Choose a level to begin. Keep your spirit bar alive and dig until water bursts out.',1)};
window.seek=i=>{t=S[i];cur=-1;ci=-1;play=true;st.classList.remove('pause');Q('#pp').textContent='❚❚';render()};
document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>go(a.dataset.v));
for(let i=0;i<22;i++){const d=document.createElement('i');d.className='dot';d.style.cssText=`left:${Math.random()*100}vw;top:${60+Math.random()*50}vh;width:${2+Math.random()*4}px;height:${2+Math.random()*4}px;animation-duration:${9+Math.random()*12}s;animation-delay:-${Math.random()*15}s`;document.body.append(d)}
/* GAME */
const cv=Q('#gc'),x=cv.getContext('2d'),W=800,H=450,GY=190,PX=370,PW=90,NM=['சோம்பல்','ஏமாற்றம்','சந்தேகம்','அச்சம்'],R=(a,b)=>a+Math.random()*(b-a);
let G={on:0,d:0,en:100,lv:1,t:0,db:[],p:[],sw:0,win:0,wt:0,sp:2,sh:0,pu:[],cb:0,lt:0,mx:0},last=performance.now();window.G=G;
function over(h,p,lvOnly){const o=Q('#gov');o.style.display='flex';o.innerHTML=`<h3>${h}</h3><p>${p}</p><div>${[1,2,3].map(l=>`<button class="btn${l>1?' o':''}" onclick="startG(${l})">Level ${l}</button>`).join('')}</div>`}
window.startG=l=>{G=window.G={on:1,d:0,en:100,lv:l,t:0,db:[],p:[],sw:0,win:0,wt:0,sp:2,sh:0,pu:[],cb:0,lt:0,mx:0};Q('#gov').style.display='none'};
function dig(){if(!G.on)return;const n=G.t;G.cb=(n-G.lt<.45)?G.cb+1:1;G.lt=n;G.mx=Math.max(G.mx,G.cb);G.d+=1.5+Math.min(1.2,G.cb*.04);G.en=Math.min(100,G.en+5);G.sw=1;
for(let i=0;i<6;i++)G.p.push({x:PX+PW/2+R(-30,30),y:GY,vx:R(-90,90),vy:R(-240,-90),l:1,c:['#6b4a2a','#8a6a3a','#a07a4a'][i%3]});
if(G.cb%10===0){G.pu.push({x:PX+PW/2,y:GY-120,t:'COMBO x'+G.cb+'!',l:1.2,c:'#ffd35a'});G.en=Math.min(100,G.en+6)}}
function hit(e){const r=cv.getBoundingClientRect(),px=(e.clientX-r.left)*W/r.width,py=(e.clientY-r.top)*H/r.height;if(G.on){const i=G.db.findIndex(d=>Math.hypot(d.x-px,d.y-py)<48);if(i>=0){for(let k=0;k<10;k++)G.p.push({x:G.db[i].x,y:G.db[i].y,vx:R(-150,150),vy:R(-150,150),l:1,c:'#ffe27a'});G.en=Math.min(100,G.en+8);G.pu.push({x:G.db[i].x,y:G.db[i].y,t:'+8 ஊக்கம்',l:1.2,c:'#ffe27a'});G.db.splice(i,1);return}}dig()}
cv.onpointerdown=hit;Q('#dg').onpointerdown=e=>{e.preventDefault();dig()};
addEventListener('keydown',e=>{if(gameOn&&(e.code==='Space'||e.code==='Enter')){e.preventDefault();dig()}});
function finish(w){G.on=0;if(w){G.win=1;G.wt=0}else setTimeout(()=>over('மனம் தளராதே!','Your spirit ran out — but the kural teaches that effort never falters. Try again!'),600)}
function loop(n){requestAnimationFrame(loop);const dt=Math.min(.05,(n-last)/1000);last=n;if(!gameOn)return;
if(G.on){G.t+=dt;G.en-=dt*(6+G.lv*5);G.sw=Math.max(0,G.sw-dt*5);G.sp-=dt;if(G.sp<=0){G.db.push({x:W+40,y:R(40,130),vx:-(40+G.lv*18),n:NM[R(0,4)|0],ph:R(0,6)});G.sp=Math.max(1.4,4.2-G.lv*.8)}
G.db.forEach(d=>{d.x+=d.vx*dt;d.y+=Math.sin(G.t*2+d.ph)*.6;if(d.x<330){d.dead=1;G.en-=20;G.sh=.4}});G.db=G.db.filter(d=>!d.dead);
if(G.d>=100){G.d=100;finish(1);Q('#gov').style.display='none';setTimeout(()=>{const s=G.en>60?3:G.en>30?2:1;over('💧 நீர் பீறிடுகிறது! '+'⭐'.repeat(s),`You reached water on Level ${G.lv} — "ஊக்கம் உடையான் உழை" — wealth comes to the unshaken. Play a harder level?`)},3500)}else if(G.en<=0){G.en=0;finish(0)}}
if(G.win)G.wt+=dt;G.sh=Math.max(0,G.sh-dt);
G.p.forEach(p=>{p.x+=p.vx*dt;p.y+=p.vy*dt;p.vy+=500*dt;p.l-=dt*1.2});G.p=G.p.filter(p=>p.l>0);
if(G.win&&Math.random()<.4)G.p.push({x:R(300,560),y:-10,vx:R(-20,20),vy:R(50,150),l:2,c:'#ffd35a'});
draw();Q('#eb').style.width=G.en+'%';Q('#db').style.width=G.d+'%'}
const ml=(a,b,t)=>a.map((v,i)=>v+(b[i]-v)*t),rg=a=>`rgb(${a.map(v=>v|0)})`,rn=i=>Math.abs(Math.sin(i*12.9898)*43758.5453)%1;
function draw(){const T=performance.now()/1000,e=Math.max(0,G.en)/100,gw=Math.min(1,(G.wt||0)/3),C=(d,y,g)=>rg(ml(ml(d,y,e),g,gw));
x.save();if(G.sh>0)x.translate(R(-4,4),R(-4,4));
let g=x.createLinearGradient(0,0,0,GY);g.addColorStop(0,C([70,80,130],[250,160,95],[90,170,240]));g.addColorStop(1,C([130,115,140],[253,226,168],[200,235,255]));x.fillStyle=g;x.fillRect(0,0,W,GY+2);
x.save();x.translate(130,78);g=x.createRadialGradient(0,0,10,0,0,110);g.addColorStop(0,'rgba(255,220,120,'+(.35+e*.4)+')');g.addColorStop(1,'rgba(255,200,100,0)');x.fillStyle=g;x.fillRect(-120,-120,240,240);x.rotate(T*.25);x.strokeStyle='rgba(255,220,130,'+(.25+e*.3)+')';x.lineWidth=4;for(let i=0;i<14;i++){x.rotate(Math.PI/7);x.beginPath();x.moveTo(44,0);x.lineTo(62+Math.sin(T*2+i)*6,0);x.stroke()}x.restore();
x.fillStyle=C([200,140,70],[255,190,70],[255,200,80]);x.beginPath();x.arc(130,78,34,0,7);x.fill();
x.fillStyle='rgba(255,255,255,'+(.25+gw*.35)+')';for(let i=0;i<4;i++){const cx=((T*(6+i*3)+i*230)%(W+200))-100,cy=40+i*28;[[0,0,46,14],[-28,5,28,10],[30,6,32,11]].forEach(a=>{x.beginPath();x.ellipse(cx+a[0],cy+a[1],a[2],a[3],0,0,7);x.fill()})}
if(gw>.3)for(let i=0;i<7;i++){x.strokeStyle=`hsla(${i*40},90%,60%,${gw*.35})`;x.lineWidth=7;x.beginPath();x.arc(560,GY+60,230-i*7,Math.PI,0);x.stroke()}
[[0,GY-40,[110,80,60],[170,120,70],[70,150,80],.012,26],[.6,GY-16,[95,68,48],[150,104,60],[55,130,65],.02,18]].forEach(h=>{x.fillStyle=C(h[2],h[3],h[4]);x.beginPath();x.moveTo(0,GY);for(let i=0;i<=W;i+=16)x.lineTo(i,h[1]-Math.sin(i*h[5]+h[0]*9)*h[6]);x.lineTo(W,GY);x.fill()});
[[640,1],[725,.8]].forEach((a,i)=>{const z=a[1],sw=Math.sin(T*1.6+i)*4*z,k=.55+.45*Math.max(gw,e*.6);x.strokeStyle='#5a3d22';x.lineWidth=8*z;x.lineCap='round';x.beginPath();x.moveTo(a[0],GY+4);x.quadraticCurveTo(a[0]+sw,GY-40*z,a[0]+sw*1.5,GY-80*z);x.stroke();x.fillStyle=C([120,90,55],[140,115,60],[60,165,75]);[[0,-90,28],[-20,-72,20],[20,-72,20]].forEach(c=>{x.beginPath();x.arc(a[0]+sw*1.5+c[0]*z,GY+c[1]*z,c[2]*z*k,0,7);x.fill()})});
g=x.createLinearGradient(0,GY,0,H);g.addColorStop(0,'#b98a52');g.addColorStop(1,'#4a3019');x.fillStyle=g;x.fillRect(0,GY,W,H-GY);
x.strokeStyle='#0000001c';x.lineWidth=2;for(let i=1;i<5;i++){x.beginPath();x.moveTo(0,GY+i*55);for(let k=0;k<=W;k+=40)x.lineTo(k,GY+i*55+Math.sin(k*.02+i)*6);x.stroke()}
const pd=G.d*2.3,pp=()=>{x.beginPath();x.moveTo(PX,GY);x.lineTo(PX+PW,GY);x.lineTo(PX+PW-14,GY+pd);x.lineTo(PX+14,GY+pd);x.closePath()};
for(let i=0;i<46;i++){const px=rn(i)*W,py=GY+16+rn(i+99)*(H-GY-26);if(px>PX-8&&px<PX+PW+8&&py<GY+pd+4)continue;x.fillStyle=i%3?'rgba(50,32,16,.35)':'rgba(220,190,140,.3)';x.beginPath();x.ellipse(px,py,2+rn(i+7)*5,1.5+rn(i+3)*3,0,0,7);x.fill()}
for(let i=0;i<72;i++){const gx=i*11+rn(i)*6;if(gx>PX-6&&gx<PX+PW+6)continue;x.strokeStyle=C([125,100,50],[150,125,60],[60,170,70]);x.lineWidth=2;x.beginPath();x.moveTo(gx,GY+2);x.lineTo(gx+Math.sin(T*2+i)*3,GY-5-rn(i+5)*8*(.5+gw));x.stroke()}
if(pd>1){g=x.createLinearGradient(0,GY,0,GY+pd);g.addColorStop(0,'#4a3320');g.addColorStop(1,'#0e0804');pp();x.fillStyle=g;x.fill();x.save();pp();x.clip();x.fillStyle='rgba(255,230,150,.13)';x.beginPath();x.moveTo(PX+8,GY);x.lineTo(PX+PW-34,GY);x.lineTo(PX+PW-30,GY+pd);x.lineTo(PX+16,GY+pd);x.fill();x.fillStyle='rgba(255,255,255,.06)';x.fillRect(PX,GY,10,pd);
if(G.d>70||G.win){const wl=G.win?Math.min(pd,G.wt*140):(G.d-70)*1.2;g=x.createLinearGradient(0,GY+pd-wl,0,GY+pd);g.addColorStop(0,'rgba(110,200,245,.95)');g.addColorStop(1,'rgba(30,110,180,.95)');x.fillStyle=g;x.beginPath();x.moveTo(PX,GY+pd);for(let i=0;i<=PW;i+=6)x.lineTo(PX+i,GY+pd-wl+Math.sin(T*4+i*.2)*2.5);x.lineTo(PX+PW,GY+pd);x.fill()}x.restore()}
x.fillStyle='#8a6a3a';x.beginPath();x.ellipse(PX+PW+52,GY,52,8+G.d*.35,0,Math.PI,0);x.fill();
x.strokeStyle='#5a3a1a';x.lineWidth=6;x.beginPath();x.moveTo(PX-12,GY+2);x.lineTo(PX+PW/2,GY-95);x.moveTo(PX+PW+12,GY+2);x.lineTo(PX+PW/2,GY-95);x.stroke();x.fillStyle='#333';x.beginPath();x.arc(PX+PW/2,GY-95,6,0,7);x.fill();
const by=GY+Math.max(8,pd*.8)+Math.sin(T*3)*3;x.strokeStyle='#caa46a';x.lineWidth=2;x.beginPath();x.moveTo(PX+PW/2,GY-95);x.lineTo(PX+PW/2,by);x.stroke();x.fillStyle='#8a5a2a';x.beginPath();x.moveTo(PX+PW/2-9,by);x.lineTo(PX+PW/2+9,by);x.lineTo(PX+PW/2+6,by+14);x.lineTo(PX+PW/2-6,by+14);x.fill();
x.font='11px Mukta Malar';x.fillStyle='rgba(255,240,200,.75)';x.textAlign='left';for(let k=1;k<5;k++){const yy=GY+k*46;if(yy>GY+pd)break;x.fillRect(PX+PW+6,yy,8,1.5);x.fillText(((k*20)*.3|0)+'m',PX+PW+17,yy+4)}
if(G.win){const j=Math.min(190,G.wt*240);g=x.createLinearGradient(0,GY-j,0,GY);g.addColorStop(0,'rgba(200,238,255,.95)');g.addColorStop(1,'rgba(90,180,235,.9)');x.fillStyle=g;x.fillRect(PX+PW/2-10,GY-j,20,j);x.beginPath();x.arc(PX+PW/2,GY-j,17,0,7);x.fill();if(Math.random()<.9)G.p.push({x:PX+PW/2+R(-10,10),y:GY-j,vx:R(-90,90),vy:R(-140,20),l:1,c:'#bfe8ff'})}
const hx=300,sq=G.sw*6;x.save();x.translate(hx,GY);x.fillStyle='rgba(0,0,0,.25)';x.beginPath();x.ellipse(0,2,26,6,0,0,7);x.fill();
x.strokeStyle='#7a4a28';x.lineWidth=8;x.lineCap='round';x.beginPath();x.moveTo(-9,-8);x.lineTo(-12-sq,0);x.moveTo(9,-8);x.lineTo(12+sq,0);x.stroke();x.rotate(G.sw*.2);
x.fillStyle='#f6f1e4';x.beginPath();x.moveTo(-18,-10);x.lineTo(18,-10);x.lineTo(14,-52);x.lineTo(-14,-52);x.fill();x.fillStyle='#a8744c';x.fillRect(-15,-98,30,48);x.fillStyle='#d9a21b';x.fillRect(-15,-62,30,6);
x.fillStyle='#a8744c';x.beginPath();x.arc(0,-114,15,0,7);x.fill();x.fillStyle='#d83a3a';x.beginPath();x.ellipse(0,-124,17,9,0,Math.PI,0);x.fill();x.fillRect(-17,-125,34,5);x.fillStyle='#222';x.fillRect(5,-116,3,3);
x.save();x.translate(8,-90);x.rotate(-.6+G.sw*1.5);x.strokeStyle='#6b3f1d';x.lineWidth=5;x.beginPath();x.moveTo(0,-14);x.lineTo(0,92);x.stroke();x.fillStyle='#bfc8cd';x.beginPath();x.moveTo(-11,88);x.lineTo(11,88);x.lineTo(7,112);x.lineTo(-7,112);x.fill();x.strokeStyle='#a8744c';x.lineWidth=7;x.beginPath();x.moveTo(0,0);x.lineTo(0,34);x.stroke();x.restore();
if(e<.45){x.fillStyle='rgba(150,210,255,.9)';x.beginPath();x.arc(-18,-108+((T*60)%20),2.5,0,7);x.fill()}x.restore();
G.db.forEach(d=>{const w=Math.sin(T*3+d.ph)*2;x.fillStyle='rgba(38,34,58,.92)';[[0,0,46,24],[-28,7,28,17],[28,7,30,17],[0,12,40,14]].forEach(a=>{x.beginPath();x.ellipse(d.x+a[0],d.y+a[1]+w,a[2],a[3],0,0,7);x.fill()});x.fillStyle='#ffe27a';x.fillRect(d.x-14,d.y-6+w,7,5);x.fillRect(d.x+7,d.y-6+w,7,5);x.fillStyle='#fff';x.font='600 14px Mukta Malar';x.textAlign='center';x.fillText(d.n,d.x,d.y+26+w);if(Math.sin(T*5+d.ph)>.9){x.strokeStyle='#ffe27a';x.lineWidth=2;x.beginPath();x.moveTo(d.x-6,d.y+30);x.lineTo(d.x+2,d.y+42);x.lineTo(d.x-4,d.y+42);x.lineTo(d.x+6,d.y+56);x.stroke()}});
G.p.forEach(p=>{x.globalAlpha=Math.max(0,Math.min(1,p.l));x.fillStyle=p.c;const c=p.c==='#ffd35a';x.beginPath();x.arc(p.x,p.y,c?7:p.c==='#ffe27a'?2.5:3.5,0,7);x.fill();if(c){x.fillStyle='#fff3b0';x.beginPath();x.arc(p.x-2,p.y-2,2.5,0,7);x.fill()}});x.globalAlpha=1;
G.pu=(G.pu||[]).filter(u=>u.l>0);G.pu.forEach(u=>{u.y-=.7;u.l-=.016;x.globalAlpha=Math.min(1,u.l);x.fillStyle=u.c;x.font='700 17px Mukta Malar';x.textAlign='center';x.fillText(u.t,u.x,u.y)});x.globalAlpha=1;
g=x.createRadialGradient(W/2,H/2,H*.35,W/2,H/2,H*.9);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,e<.3&&G.on?`rgba(130,0,0,${.55-e})`:'rgba(0,0,0,.35)');x.fillStyle=g;x.fillRect(0,0,W,H);
x.shadowColor='#000';x.shadowBlur=4;x.textAlign='left';x.font='600 15px Mukta Malar';x.fillStyle='#fff';x.fillText(`ஆழம் ${(G.d*.3).toFixed(1)} m  ·  ⏱ ${G.t.toFixed(1)}s  ·  Level ${G.lv}`,14,26);
if(G.cb>2&&G.on&&G.t-G.lt<.6){x.textAlign='center';x.font='700 26px Mukta Malar';x.fillStyle='#ffd35a';x.fillText('x'+G.cb+' COMBO',W/2,54)}x.shadowBlur=0;x.restore()}
requestAnimationFrame(loop);
/* QUIZ */
const QS=[['Who composed the Thirukkural?',['Thiruvalluvar','Avvaiyar','Kambar','Ilango Adigal'],0,'Thiruvalluvar is the traditional author of the Thirukkural.'],['How many couplets does the Thirukkural contain?',['1000','1330','1500','1133'],1,'It has 1,330 couplets in 133 chapters.'],['What does "ஆக்கம்" mean in this kural?',['Sleep','Path','Wealth / prosperity','Water'],2,'ஆக்கம் means wealth, prosperity and progress.'],['According to the kural, wealth goes to…',['The loudest person','One with unshaken zeal','Whoever waits patiently','The oldest person'],1,'Wealth asks the way and goes to the person of unwavering effort.'],['Kural 594 belongs to which chapter?',['மடியின்மை (Unsluggishness)','கல்வி (Learning)','ஊக்கமுடைமை (Zeal)','ஒழுக்கமுடைமை (Conduct)'],2,'It is in Chapter 60, ஊக்கமுடைமை, in the Book of Wealth.']];
let qi=0,sc=0;function rq(){const b=Q('#qb');if(qi>=QS.length){const m=sc>=5?'Outstanding!':sc>=3?'Well done!':'Keep learning — effort never falters!';b.innerHTML=`<div class="q" style="text-align:center"><div style="font-size:3rem">🏆</div>You scored <b style="color:var(--gold)">${sc}/${QS.length}</b><br>${m}</div><div style="text-align:center"><button class="btn" onclick="qi=0;sc=0;rq()">Try again</button></div>`;Q('#qp').textContent='Quiz complete';return}
const q=QS[qi];Q('#qp').textContent=`Question ${qi+1} of ${QS.length} · Score ${sc}`;b.innerHTML=`<div class="q">${q[0]}</div>`+q[1].map((o,i)=>`<button class="opt" data-i="${i}">${o}</button>`).join('')+'<div id="ex" class="tr2" style="margin-top:12px"></div>';
b.querySelectorAll('.opt').forEach(o=>o.onclick=()=>{const i=+o.dataset.i;b.querySelectorAll('.opt').forEach(e=>{e.disabled=1;if(+e.dataset.i===q[2])e.classList.add('ok')});if(i!==q[2])o.classList.add('no');else sc++;Q('#ex').textContent=q[3];setTimeout(()=>{qi++;rq()},1800)})}
window.rq=rq;Object.defineProperty(window,'qi',{get:()=>qi,set:v=>qi=v});Object.defineProperty(window,'sc',{get:()=>sc,set:v=>sc=v});rq();
play=false;st.classList.add('pause');go((location.hash||'#home').slice(1).replace(/[^a-z]/g,'')||'home');
})();

(()=>{const c=document.getElementById('hc'),x=c.getContext('2d'),hv=document.getElementById('v-home'),h1=hv.querySelector('h1');let w,h,mx=0,my=0,tx=0,ty=0;
const rs=()=>{w=c.width=innerWidth;h=c.height=innerHeight};rs();addEventListener('resize',rs);
const S=[],P=[];for(let i=0;i<520;i++){const y=1-2*(i+.5)/520,r=Math.sqrt(1-y*y),a=i*2.39996;S.push([Math.cos(a)*r,y,Math.sin(a)*r])}
for(let i=0;i<260;i++)P.push([(Math.random()-.5)*2400,(Math.random()-.5)*1600,Math.random()*1800-500]);
addEventListener('mousemove',e=>{tx=e.clientX/innerWidth-.5;ty=e.clientY/innerHeight-.5});
document.querySelectorAll('.tile').forEach(t=>{t.addEventListener('mousemove',e=>{const r=t.getBoundingClientRect(),px=(e.clientX-r.left)/r.width-.5,py=(e.clientY-r.top)/r.height-.5;t.style.setProperty('--ry',px*18+'deg');t.style.setProperty('--rx',-py*18+'deg');t.style.setProperty('--gx',(px+.5)*100+'%');t.style.setProperty('--gy',(py+.5)*100+'%')});t.addEventListener('mouseleave',()=>{t.style.setProperty('--rx','0deg');t.style.setProperty('--ry','0deg')})});
function f(t){requestAnimationFrame(f);if(!hv.classList.contains('on'))return;mx+=(tx-mx)*.06;my+=(ty-my)*.06;x.clearRect(0,0,w,h);
const T=t/1000,cx=w/2,cy=h*.6,ry=T*.35+mx*1.2,rx=my*.8+.25,pj=(X,Y,Z,a2)=>{const A=X*Math.cos(a2)+Z*Math.sin(a2),B=-X*Math.sin(a2)+Z*Math.cos(a2),Y2=Y*Math.cos(rx)-B*Math.sin(rx),Z2=Y*Math.sin(rx)+B*Math.cos(rx),k=700/(900+Z2);return[cx+A*k,cy+Y2*k,k,Z2]};
h1.style.transform=`perspective(900px) rotateY(${mx*14}deg) rotateX(${-my*10}deg)`;
x.globalCompositeOperation='lighter';
P.forEach(p=>{p[2]-=3;if(p[2]<-500)p[2]=1800;const k=700/(900+p[2]);x.fillStyle=`rgba(255,210,100,${Math.min(.8,k*.5)})`;x.beginPath();x.arc(w/2+(p[0]-mx*260)*k,h/2+(p[1]-my*180)*k,Math.max(.4,1.8*k),0,7);x.fill()});
const g=x.createRadialGradient(cx,cy,10,cx,cy,280);g.addColorStop(0,'rgba(255,170,40,.28)');g.addColorStop(1,'rgba(255,170,40,0)');x.fillStyle=g;x.fillRect(0,0,w,h);
S.forEach(s=>{const q=pj(s[0]*190,s[1]*190,s[2]*190,ry),d=(q[3]+190)/380;x.fillStyle=`rgba(255,${170+d*60|0},${60+d*40|0},${.12+.55*(1-d)})`;x.beginPath();x.arc(q[0],q[1],1+2.2*q[2]*(1-d*.6),0,7);x.fill()});
[[270,.9,.6],[310,-.7,1.3],[350,.3,-.5]].forEach((r,j)=>{for(let i=0;i<110;i++){const a=i/110*6.283+T*(.3+j*.12)*(j%2?-1:1);let X=Math.cos(a)*r[0],Z=Math.sin(a)*r[0],Y=Z*Math.sin(r[1]);Z=Z*Math.cos(r[1]);const q=pj(X,Y,Z,ry+r[2]);x.fillStyle=`rgba(255,226,122,${.2+.45*(1-(q[3]+350)/700)})`;x.beginPath();x.arc(q[0],q[1],1.9*q[2],0,7);x.fill()}});
x.globalCompositeOperation='source-over'}
requestAnimationFrame(f)})();

(()=>{const $=s=>document.querySelector(s),syn=window.speechSynthesis;let tok=0,on=true;
const vs=()=>syn?syn.getVoices():[];
const pick=l=>{const a=vs(),L=l.toLowerCase();return a.find(v=>v.lang.replace('_','-').toLowerCase()===L)||a.find(v=>v.lang.toLowerCase().startsWith(L.slice(0,2)))};
function cancel(){tok++;if(syn)syn.cancel()}
function say(t,l,cb){if(!syn||!t)return;const k=tok,u=new SpeechSynthesisUtterance(t);u.lang=l;const v=pick(l);if(v)u.voice=v;u.rate=+$('#vr').value;u.onend=()=>{if(k===tok&&cb)cb()};syn.speak(u)}
window.KV={say,cancel};
function status(){const el=$('#vs2');if(!syn){el.textContent='⚠ This browser has no speech support. Try Chrome, Edge or Safari.';return}
const ta=!!vs().find(v=>v.lang.toLowerCase().startsWith('ta'));el.textContent=ta?'✔ Tamil voice found on this device.':'⚠ No Tamil voice installed on this device — Tamil may be silent or read oddly. Install a Tamil voice in your system\'s Text-to-speech / Speech settings, or choose English.'}
if(syn){syn.onvoiceschanged=status}status();
function set(b){on=b;$('#vt').textContent='🔊 Voice: '+(b?'On':'Off');$('#vb').classList.toggle('off',!b);$('#vb').textContent=b?'🔊':'🔇';if(!b)cancel()}
$('#vt').onclick=()=>set(!on);$('#vb').onclick=()=>set(!on);
function narrate(n){cancel();if(n<0||!C[n][1])return;const m=$('#vl').value,ta=C[n][1],en=C[n][2];
if(m==='ta')say(ta,'ta-IN');else if(m==='en')say(en,'en-IN');else say(ta,'ta-IN',()=>say(en,'en-IN'))}
let last=-2;
setInterval(()=>{const act=on&&play&&$('#v-video').classList.contains('on');
if(!act){if(last!==-2){if(!$('#v-chat').classList.contains('on'))cancel();last=-2}return}
if(ci!==last){last=ci;narrate(ci)}},100);
$('#vl').onchange=()=>{last=-2};
const g0=window.go;window.go=n=>{cancel();g0(n)};
})();

(()=>{const $=s=>document.querySelector(s),cm=$('#cm'),ta=t=>/[\u0B80-\u0BFF]/.test(t);
/* [keywords, weight, Tamil answer, English answer] */
const KB=[
[['hello','hi ','hey','வணக்கம்','நலமா'],1,'வணக்கம்! 🙏 குறள் 594 பற்றி என்ன தெரிந்துகொள்ள விரும்புகிறீர்கள்?','Hello! 🙏 What would you like to know about Kural 594?'],
[['thank','நன்றி'],1,'மகிழ்ச்சி! வேறு ஏதாவது கேட்கலாம் 😊','You\'re welcome! Ask me anything else 😊'],
[['meaning','mean','explain','what does','what is this kural','பொருள்','விளக்க','அர்த்த','சொல்கிறது'],1,'ஆக்கம் (செல்வம்) வழி கேட்டுக்கொண்டே, அசையாத ஊக்கம் உடையவனைத் தேடிச் செல்லும். சோம்பியவனைத் தேடி செல்வம் வராது; விடாமுயற்சி உள்ளவனிடமே வந்து சேரும்.','Wealth goes asking the way to the person whose zeal never wavers. It does not chase the lazy — it seeks out the one with unshaken determination.'],
[['who wrote','author','thiruvalluvar','valluvar','எழுதி','இயற்றி','வள்ளுவர்','திருவள்ளுவர்'],2,'திருவள்ளுவர் — தமிழின் தலைசிறந்த அறநூலான திருக்குறளை இயற்றிய புலவர். இரண்டடிகளில் அமைந்த 1,330 குறள்களைப் படைத்தார்; அவரது கருத்துகள் எல்லா மனிதர்க்கும் பொருந்துவன.','Thiruvalluvar is the Tamil poet-sage who composed the Thirukkural — 1,330 two-line couplets on ethics and practical wisdom, universal enough to be read far beyond Tamil Nadu.'],
[['chapter','adhikaram','athikaram','அதிகாரம்','ஊக்கமுடைமை','zeal','which book','பால்','பொருட்பால்'],2,'இது பொருட்பாலில் 60-ஆவது அதிகாரமான “ஊக்கமுடைமை” (Possession of Zeal) இல் உள்ளது. அந்த அதிகாரத்தின் 591–600 குறள்களில் 594 நான்காவது.','It is the 4th kural (594) of Chapter 60, “ஊக்கமுடைமை” (Possession of Zeal), in the Book of Wealth (பொருட்பால் / Porul).'],
[['how many','1330','1,330','133','couplets','books','aram','inbam','எத்தனை','மூன்று பால்','அறம்','இன்பம்'],2,'திருக்குறளில் 1,330 குறள்கள், 133 அதிகாரங்கள் (ஒவ்வொன்றிலும் 10). மூன்று பால்கள்: அறம் (38 அதிகாரம்), பொருள் (70), இன்பம் (25).','The Thirukkural has 1,330 couplets in 133 chapters of ten each, in three books: Aram (virtue, 38 chapters), Porul (wealth & governance, 70) and Inbam (love, 25).'],
[['what is thirukkural','about thirukkural','thirukkural','திருக்குறள் என்றால்','திருக்குறள்'],1,'திருக்குறள் 2,000 ஆண்டுகளுக்கும் மேலான தமிழ் அறநூல். வாழ்க்கை, செல்வம், அன்பு பற்றிய நடைமுறை ஞானத்தை இரண்டடிக் குறள்களில் சொல்கிறது.','The Thirukkural is a 2,000+ year-old Tamil classic of ethics: short two-line couplets of practical wisdom on virtue, wealth and love.'],
[['ஆக்கம்','aakkam','akkam','wealth means'],3,'ஆக்கம் = செல்வம், வளர்ச்சி, உயர்வு. வீடியோவில் இதை பொன்னொளியாகக் காட்டுகிறோம்.','ஆக்கம் (aakkam) = wealth, prosperity, progress — shown as a golden light in the video.'],
[['அதர்','adhar','adar','path','way'],2,'அதர் = வழி, பாதை. “அதர்வினாய்ச் செல்லும்” = வழி கேட்டுக்கொண்டு செல்லும்.','அதர் (adhar) = path/way. “அதர்வினாய்ச் செல்லும்” = goes asking the way.'],
[['அசைவிலா','asaivila','unshaken','never waver'],3,'அசைவிலா = அசைவு இல்லாத, எதற்கும் தளராத. அசைவிலா ஊக்கம் = சோர்வற்ற, உறுதியான முயற்சி.','அசைவிலா (asaivilaa) = unshaken, never wavering. “Unshaken zeal” is tireless, steady effort.'],
[['ஊக்கம்','ookkam','ukkam'],3,'ஊக்கம் = மன எழுச்சி, விடாமுயற்சி. செயலைத் தொடர்ந்து செய்யும் உள்ளத் துணிவு.','ஊக்கம் (ookkam) = zeal, drive, spirit — the inner strength to keep going.'],
[['உழை','uzhai','ulai'],3,'உழை = இடம், அருகில். “ஊக்கமுடையான் உழை” = ஊக்கமுடையவனிடத்தே.','உழை (uzhai) = place, near. “ஊக்கமுடையான் உழை” = to the place of the zealous one.'],
[['story','video','village','well','கதை','வீடியோ','கிணறு','ஊர்'],1,'வறட்சியில் ஊரார் எல்லாம் நம்பிக்கை இழந்து வெளியேறுகிறார்கள். ஒருவன் மட்டும் தங்கி கிணறு தோண்டுகிறான். செல்வம் வழி கேட்டுத் தேடி, சோம்பியவனைக் கடந்து, அவனிடமே வருகிறது — நீர் பீறிடுகிறது!','In a drought the villagers give up and leave. One man stays and digs a well. Wealth sets out asking the way, passes the idle sleeper, and arrives at the digger — water bursts forth!'],
[['moral','lesson','learn','teach','நீதி','பாடம்','கற்க'],1,'1) சீராக முயலுதல் திறமையை வெல்லும். 2) பலன் தாமதமாகலாம், ஆனால் வரும். 3) வாய்ப்பு தயாராக இருப்பவனைத் தேடும். 4) சந்தேகமும் சோம்பலுமே உண்மையான தடைகள்.','1) Consistency beats talent. 2) Results lag effort but do come. 3) Opportunity seeks the ready. 4) Doubt and sloth — not the soil — are the real obstacles.'],
[['why','ask the way','asks the way','personif','வழி கேட்டு','ஏன்'],1,'வள்ளுவர் செல்வத்தை ஓர் ஆளாகக் கற்பனை செய்கிறார்: அது முகவரி தேடிச் செல்வது போல, முயற்சி உள்ளவன் இருக்கும் இடத்தை விசாரித்துச் சேர்கிறது.','Valluvar personifies wealth as a traveller asking for an address — and the address it finds is the home of the person with unshaken effort.'],
[['apply','motivat','daily life','tips','how to','habit','முயற்சி','ஊக்கம் பெற','எப்படி'],1,'சிறிய தினசரி முயற்சி செய்யுங்கள்; பலன் உடனே தெரியாவிட்டாலும் தொடருங்கள்; சந்தேகம், சோம்பலிலிருந்து மனதைக் காத்துக்கொள்ளுங்கள்.','Make small daily effort, keep going even when results are invisible (the well looked empty for days), and guard your mind from doubt and sloth.'],
[['595','next kural','related','lotus','மலர்','595'],1,'குறள் 595: “வெள்ளத் தனைய மலர்நீட்டம் மாந்தர்தம் உள்ளத் தனைய துயர்வு.” — நீரின் ஆழம் அளவே தாமரைத் தண்டின் நீளம்; மனத்தின் உயர்வு அளவே மனிதன் உயர்வு.','Kural 595: “வெள்ளத் தனைய மலர்நீட்டம் மாந்தர்தம் உள்ளத் தனைய துயர்வு.” — A lotus stem is as long as the water is deep; a person rises as high as their mind aims.'],
[['read','recite','transliter','pronounce','ஓதுக','படி'],1,'ஆக்கம் அதர்வினாய்ச் செல்லும் அசைவிலா\nஊக்க முடையா னுழை.\n(Aakkam adharvinaaych chellum asaivilaa / Ookka mudaiyaan uzhai.)','ஆக்கம் அதர்வினாய்ச் செல்லும் அசைவிலா\nஊக்க முடையா னுழை.\n(Aakkam adharvinaaych chellum asaivilaa / Ookka mudaiyaan uzhai.)'],
[['game','dig','play','விளையாட்டு'],1,'“Game” பகுதியில் தட்டி/SPACE அழுத்தி தோண்டுங்கள்; சந்தேக மேகங்களைக் கிளிக் செய்து ஊக்கத்தைக் காத்துக்கொள்ளுங்கள்.','In the Game tab, click or press SPACE to dig and click the dark doubt-clouds to protect your spirit until water bursts out.'],
[['quiz','test','வினா'],1,'“Quiz” பகுதியில் குறள் பற்றிய 5 கேள்விகள் உள்ளன. முயன்று பாருங்கள்!','The Quiz tab has five questions on the kural — give it a try!'],
[['voice','speak','audio','sound','குரல்','ஒலி'],1,'Video பகுதியின் கீழுள்ள “AI Voice” பகுதியில் மொழி (தமிழ்/English), வேகம் தேர்வு செய்யலாம். 🔊 பொத்தானால் ஆன்/ஆஃப்.','Under the video, the “AI Voice” panel lets you pick Tamil/English and the speed; the 🔊 button toggles it.']
];
const SUG=['What does this kural mean?','Who wrote it?','What is the moral?','ஆக்கம் என்றால் என்ன?','கதை என்ன?'];
function local(q){const l=q.toLowerCase();let b=null,bs=0;KB.forEach(e=>{let sc=0;e[0].forEach(k=>{if(l.includes(k))sc+=k.length*e[1]});if(sc>bs){bs=sc;b=e}});
const T=ta(q);if(!b)return T?'மன்னிக்கவும், இதற்கான பதில் என்னிடம் இல்லை. குறளின் பொருள், கதை, சொற்கள், திருவள்ளுவர் பற்றிக் கேட்கலாம்; அல்லது 🤖 AI-ஐ இணைத்தால் எதையும் கேட்கலாம்.':'Sorry, I don\'t have an answer for that. Try asking about the meaning, story, words, Thiruvalluvar — or connect AI (button below) to ask anything.';
return T?b[2]:b[3]}
function add(t,c){const d=document.createElement('div');d.className='mg '+c;d.textContent=t;if(c==='b'){const r=document.createElement('button');r.className='rd';r.textContent='🔊 Listen';r.onclick=()=>{KV.cancel();KV.say(t.replace(/\n.*$/s,''),ta(t)?'ta-IN':'en-IN')};d.append(r)}cm.append(d);cm.scrollTop=cm.scrollHeight;return d}
let key='';try{key=localStorage.getItem('kk')||''}catch(e){}
const hist=[],SYS='You are a friendly assistant on a learning site about Thirukkural couplet 594 (Chapter 60, Possession of Zeal, Book of Wealth): "ஆக்கம் அதர்வினாய்ச் செல்லும் அசைவிலா ஊக்க முடையா னுழை." Meaning: wealth goes asking the way to the one whose zeal never wavers. The site has an animated video of a man digging a well during a drought while villagers leave. Answer concisely in the language the user writes in (Tamil or English). You may answer general questions on Thirukkural, Tamil culture, and motivation.';
async function ai(){const r=await fetch('https://api.anthropic.com/v1/messages',{method:'POST',headers:{'content-type':'application/json','x-api-key':key,'anthropic-version':'2023-06-01','anthropic-dangerous-direct-browser-access':'true'},body:JSON.stringify({model:'claude-sonnet-4-6',max_tokens:700,system:SYS,messages:hist.slice(-8)})});
const d=await r.json();if(!r.ok)throw new Error(d.error&&d.error.message||r.status);return d.content.map(c=>c.text||'').join('')}
function mode(){$('#cst').textContent=key?'🤖 AI mode on':'📚 Built-in answers'}
async function send(q){q=(q||$('#ci2').value).trim();if(!q)return;$('#ci2').value='';add(q,'u');hist.push({role:'user',content:q});
const w=add('…','b');let a;
if(key){try{a=await ai()}catch(e){a=local(q)+'\n\n(AI unavailable: '+e.message+')'}}else a=local(q);
hist.push({role:'assistant',content:a});w.remove();add(a,'b');if($('#crd').checked){KV.cancel();KV.say(a.replace(/\n.*$/s,''),ta(a)?'ta-IN':'en-IN')}}
$('#csd').onclick=()=>send();$('#ci2').onkeydown=e=>{if(e.key==='Enter')send()};
$('#cs').innerHTML=SUG.map(x=>`<button>${x}</button>`).join('');$('#cs').onclick=e=>{if(e.target.tagName==='BUTTON')send(e.target.textContent)};
$('#cai').onclick=()=>{const k=prompt('Paste your Anthropic API key to enable full AI answers (stored only in this browser). Leave empty to turn AI off.\n\nNote: only use a personal key on your own device.',key);if(k===null)return;key=k.trim();try{localStorage.setItem('kk',key)}catch(e){}mode()};
const SR=window.SpeechRecognition||window.webkitSpeechRecognition,mic=$('#cmic');
if(!SR)mic.style.display=$('#cl').style.display='none';else mic.onclick=()=>{const r=new SR();r.lang=$('#cl').value;mic.classList.add('rec');r.onresult=e=>send(e.results[0][0].transcript);r.onend=r.onerror=()=>mic.classList.remove('rec');r.start()};
add('வணக்கம்! 🙏 Hello! Ask me anything about Kural 594 — in Tamil or English.','b');mode();
})();