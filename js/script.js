/* RB Properties – listings data, carousel, filters, routing, enquiry form and live chat. */
/* WhatsApp contact (international format, no + sign) */
var WA="2349079063117";
function scene(c,v){var a=c[0],b=c[1],i,s="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 375'><defs><linearGradient id='g' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='"+b+"'/><stop offset='1' stop-color='#fff'/></linearGradient></defs>",
R=function(x,y,w,h,f,r){return"<rect x='"+x+"' y='"+y+"' width='"+w+"' height='"+h+"' fill='"+f+"' rx='"+(r||0)+"'/>"},
C=function(x,y,r,f){return"<circle cx='"+x+"' cy='"+y+"' r='"+r+"' fill='"+f+"'/>"},
T=function(p,f){return"<polygon points='"+p+"' fill='"+f+"'/>"},
S="url(#g)",W="#eef3f4",FL="#cdbfa8",DK="#073b46";
switch(v){
case 1:s+=R(0,0,600,375,W)+R(0,270,600,105,FL)+R(360,50,190,170,S)+R(60,180,260,90,a,14)+R(60,150,260,45,a,14)+R(370,235,160,20,"#8b6b4a",4)+R(390,255,8,40,"#8b6b4a")+R(500,255,8,40,"#8b6b4a")+C(120,80,22,"#fff");break;
case 2:s+=R(0,0,600,375,S)+R(0,250,600,125,"#6aa383")+R(80,270,300,70,"#4fc3d6",10)+R(90,278,280,54,"#8fe0ec",8)+R(420,130,12,140,"#6b4f33")+"<ellipse cx='426' cy='125' rx='60' ry='22' fill='#2f7d5a'/>"+R(60,150,240,100,a)+R(50,140,260,14,DK);break;
case 3:s+=R(0,0,600,375,W)+R(0,290,600,85,FL)+R(40,50,520,75,a,6)+R(40,195,520,95,a,6)+R(30,185,540,14,"#e2e6e8",3)+R(250,175,100,10,"#333")+R(160,300,280,55,b,6)+R(150,288,300,14,"#e2e6e8",3);for(i=1;i<5;i++)s+=R(40+i*104,50,2,75,W)+R(40+i*104,195,2,95,W);break;
case 4:s+=R(0,0,600,375,W)+R(0,280,600,95,FL)+R(30,50,100,100,S,4)+R(170,100,260,100,a,8)+R(150,190,300,90,"#fff",8)+R(150,225,300,55,b,8)+R(190,175,90,30,"#fff",8)+R(320,175,90,30,"#fff",8)+R(90,200,45,80,"#8b6b4a",4)+R(465,200,45,80,"#8b6b4a",4)+R(450,60,100,70,b,4);break;
case 5:s+=R(0,0,600,375,"#e6f1f3")+R(0,285,600,90,"#bcd0d4")+R(60,215,270,85,"#fff",30)+R(75,225,240,30,b,12)+R(400,60,130,150,S,6)+R(390,235,150,18,"#fff",6)+R(400,253,130,70,a,4);break;
case 6:s+=R(0,0,600,375,W)+R(0,285,600,90,FL)+R(60,60,130,130,S,4)+R(298,0,4,70,"#555")+C(300,88,26,"#e7cf93")+R(150,210,300,16,"#8b6b4a",4)+R(180,226,12,70,"#8b6b4a")+R(408,226,12,70,"#8b6b4a")+R(120,210,14,80,a)+R(120,260,50,14,a)+R(466,210,14,80,a)+R(430,260,50,14,a);break;
case 7:s+=R(0,0,600,375,S);for(i=0;i<9;i++)s+=R(i*70-10,110+(i*47%80),56,300,i%2?a:"#2a8a9a",2);s+=R(0,300,600,75,FL)+R(0,285,600,10,"#fff");break;
case 8:s+=R(0,0,600,375,S)+R(0,300,600,75,"#8a8f94")+R(0,170,600,130,"#e6e0d6")+R(200,150,200,150,a,6);for(i=0;i<9;i++)s+=R(215+i*21,165,4,135,b);s+=R(30,255,130,35,"#b23a48",8)+R(55,232,80,28,"#b23a48",8)+C(60,292,13,"#222")+C(130,292,13,"#222");break;
case 9:s+=R(0,0,600,375,S)+R(0,285,600,90,"#5d6468");for(i=0;i<6;i++)s+=R(20+i*100,325,50,6,"#fff");for(i=0;i<4;i++){var x=20+i*145;s+=R(x,165,120,120,i%2?a:"#c9b79c")+T((x-10)+",165 "+(x+60)+",110 "+(x+130)+",165",DK)+R(x+48,225,26,60,DK)+R(x+15,185,22,22,"#e9f6f8")+R(x+83,185,22,22,"#e9f6f8")}break;
default:s+=R(0,0,600,375,S)+R(0,300,600,75,"#6aa383")+R(140,150,320,155,a)+T("120,150 300,70 480,150",DK);for(i=0;i<3;i++)s+=R(170+i*95,180,60,50,"#e9f6f8");s+=R(275,250,50,55,DK)+C(80,290,30,"#2f7d5a")+C(520,290,30,"#2f7d5a")}
return"data:image/svg+xml,"+encodeURIComponent(s+"</svg>")}
var L=["Exterior","Living room","Pool & garden","Kitchen","Master bedroom","Bathroom","Dining area","Balcony view","Compound & parking","Neighbourhood"],N=L.length;
var P=[
{id:1,t:"Luxury 5-Bedroom Detached Duplex",ty:"House",st:"Sale",loc:"Lekki Phase 1",pr:"₦450,000,000",bd:5,ba:6,ar:"620 sqm",pk:4,c:["#0b6e7f","#9ed3dc"],f:["Swimming pool","BQ","Smart home","24/7 power"]},
{id:2,t:"Modern 3-Bedroom Serviced Apartment",ty:"Apartment",st:"Rent",loc:"Victoria Island",pr:"₦12,000,000 / yr",bd:3,ba:3,ar:"210 sqm",pk:2,c:["#2d7f8c","#b5dde3"],f:["Gym","Elevator","Concierge","Backup power"]},
{id:3,t:"Contemporary 4-Bedroom Terrace",ty:"House",st:"Sale",loc:"Ikoyi",pr:"₦280,000,000",bd:4,ba:5,ar:"380 sqm",pk:3,c:["#145d6b","#a3cdd6"],f:["Gated estate","Garden","CCTV","BQ"]},
{id:4,t:"Prime Commercial Office Floor",ty:"Commercial",st:"Rent",loc:"Ikeja GRA",pr:"₦35,000,000 / yr",bd:0,ba:4,ar:"450 sqm",pk:12,c:["#3a6f7a","#c0dfe4"],f:["Open plan","Fibre ready","Elevator","Parking"]},
{id:5,t:"Serviced Residential Land (600 sqm)",ty:"Land",st:"Sale",loc:"Ajah",pr:"₦65,000,000",bd:0,ba:0,ar:"600 sqm",pk:0,c:["#2f8a74","#bfe3d8"],f:["C of O","Dry land","Good road","Estate"]},
{id:6,t:"Cozy 2-Bedroom Apartment",ty:"Apartment",st:"Rent",loc:"Maryland",pr:"₦6,500,000 / yr",bd:2,ba:2,ar:"120 sqm",pk:1,c:["#0f7a8c","#a9d9e1"],f:["Tiled","Water supply","Secure","Near mall"]}];
var B=[["Buying your first home: a 7-step checklist","Guide","#0b6e7f","Set a realistic budget, check title documents, inspect at different times of day, and always use a verified agent. Budget an extra 10–15% for legal, agency and closing fees."],
["How to read a land title before you pay","Legal","#145d6b","Ask for the Certificate of Occupancy or deed, verify it at the land registry, and have an independent surveyor confirm boundaries before any payment."],
["Rent or buy? Weighing the numbers","Market","#2d7f8c","Compare your annual rent to the full cost of ownership, including maintenance, service charges and the opportunity cost of your deposit."],
["5 upgrades that raise your property value","Tips","#3a6f7a","Fresh paint, reliable power, modern kitchen fittings, good landscaping and clear photography consistently help properties sell faster."]];
var $=function(s){return document.querySelector(s)},cur={};
function card(p){var im="",dots="<i class='on'></i>"+"<i></i>".repeat(N-1);for(var i=0;i<N;i++)im+="<img loading='lazy' alt='"+p.t+" – "+L[i]+"' src=\""+(p.img&&p.img[i]||scene(p.c,i))+"\">";
return"<article class='card'><div class='car'><span class='tag'>For "+p.st+"</span><span class='cap'>1/"+N+" · Exterior</span><div class='trk'>"+im+"</div><button class='pv' onclick='go(this,-1)' aria-label='Previous'>‹</button><button class='nx' onclick='go(this,1)' aria-label='Next'>›</button><div class='dots'>"+dots+"</div></div><div class='body'><div class='price'>"+p.pr+"</div><h3 style='font-size:18px;margin:0'>"+p.t+"</h3><div class='loc'>📍 "+p.loc+", Lagos · "+p.ty+"</div><div class='meta'>"+(p.bd?"<span>🛏 "+p.bd+" bed</span>":"")+(p.ba?"<span>🛁 "+p.ba+" bath</span>":"")+"<span>📐 "+p.ar+"</span>"+(p.pk?"<span>🚗 "+p.pk+"</span>":"")+"</div><div class='chips'>"+p.f.map(function(x){return"<span>"+x+"</span>"}).join("")+"</div><a class='btn' href='#contact' onclick='pick("+p.id+")'>Enquire about this property</a><a class='btn wb' target='_blank' rel='noopener' href='https://wa.me/"+WA+"?text="+encodeURIComponent("Hello RB Properties, I am interested in: "+p.t+" ("+p.loc+", "+p.pr+")")+"'>💬 Chat on WhatsApp</a></div></article>"}
function go(b,d){var e=b.closest(".car"),n=((+e.dataset.i||0)+d+N)%N;e.dataset.i=n;e.querySelector(".trk").style.transform="translateX(-"+n*100+"%)";e.querySelector(".cap").textContent=(n+1)+"/"+N+" · "+L[n];e.querySelectorAll(".dots i").forEach(function(x,i){x.className=i==n?"on":""})}
function pick(id){setTimeout(function(){$("#pp").value=id},50)}
function render(){var t=$("#ft").value,s=$("#fs").value,l=$("#fl").value,r=P.filter(function(p){return(!t||p.ty==t)&&(!s||p.st==s)&&(!l||p.loc==l)});$("#all").innerHTML=r.map(card).join("");$("#none").style.display=r.length?"none":"block"}
$("#feat").innerHTML=P.slice(0,3).map(card).join("");
var locs=[];P.forEach(function(p){if(locs.indexOf(p.loc)<0)locs.push(p.loc)});
$("#fl").innerHTML+=locs.map(function(x){return"<option>"+x+"</option>"}).join("");
$("#pp").innerHTML+=P.map(function(p){return"<option value='"+p.id+"'>"+p.t+" – "+p.loc+"</option>"}).join("");
["#ft","#fs","#fl"].forEach(function(x){$(x).onchange=render});render();
$("#posts").innerHTML=B.map(function(b,i){return"<article class='card post'><div class='th' style='background:linear-gradient(135deg,"+b[2]+",#074957)'>"+b[1]+"</div><div class='body'><div class='loc'>Oct "+(14-i*3)+", 2026 · "+b[1]+"</div><h3 style='font-size:19px'>"+b[0]+"</h3><details><summary>Read more</summary><p>"+b[3]+"</p></details></div></article>"}).join("");
function route(){var h=(location.hash||"#home").slice(1);if(!$("#"+h)||!$("#"+h).classList.contains("page"))h="home";document.querySelectorAll(".page").forEach(function(p){p.classList.toggle("on",p.id==h)});document.querySelectorAll("#nav a").forEach(function(a){a.classList.toggle("on",a.getAttribute("href")=="#"+h)});scrollTo(0,0)}
addEventListener("hashchange",route);route();
/* Enquiry form -> Formspree (sent in the background with fetch) */
var FORM_URL="https://formspree.io/f/xkjjqooo";
$("#ef").onsubmit=function(e){e.preventDefault();
var f=this,btn=f.querySelector("button[type=submit]"),ok=$("#ok");
if(f.dataset.busy)return; /* ignore extra submits while a request is running */
var d=new FormData(f),sel=$("#pp"),pp=P.filter(function(p){return p.id==sel.value})[0],first=$("#n").value.trim().split(" ")[0];
d.set("property",pp?pp.t+" ("+pp.loc+", "+pp.pr+")":"Not specified");
d.set("_subject","New enquiry from RB Properties website");
f.dataset.busy="1";btn.disabled=true;btn.textContent="Sending…";ok.innerHTML="";
fetch(FORM_URL,{method:"POST",body:d,headers:{Accept:"application/json"}}).then(function(r){
if(!r.ok)throw new Error("HTTP "+r.status);
var m=document.createElement("div");m.className="ok";m.textContent="Thank you, "+first+"! Your enquiry has been received. An RB Properties agent will contact you within 24 hours.";ok.appendChild(m);f.reset();
}).catch(function(){
ok.innerHTML="<div class='ok err'>Sorry, we could not send your enquiry. Please try again, or <a href='https://wa.me/message/7QCA44QNSNOZO1' target='_blank' rel='noopener' style='text-decoration:underline'>chat with us on WhatsApp</a>.</div>";
}).then(function(){delete f.dataset.busy;btn.disabled=false;btn.textContent="Send enquiry"});
};
var cw=$("#cw"),ms=$("#ms");
function say(t,c){var d=document.createElement("div");d.className="m "+c;d.textContent=t;ms.appendChild(d);ms.scrollTop=ms.scrollHeight}
function reply(q){q=q.toLowerCase();return/price|cost|how much/.test(q)?"Our listings range from ₦6.5M/yr rentals to ₦450M luxury homes. Tell me your budget and I will suggest options.":/rent/.test(q)?"We have rentals in Victoria Island, Ikeja GRA and Maryland. See the Properties page and filter by 'Rent'.":/buy|sale|sell/.test(q)?"Happy to help! Browse 'For Sale' listings, or use the enquiry form if you want to list your own property.":/view|visit|inspect/.test(q)?"Viewings can be booked Mon–Sat. Share your preferred date and property on the Contact page and we will confirm.":/hello|hi|hey/.test(q)?"Hello! How can I help you today?":"Thanks for your message! An agent will follow up shortly. For faster help, leave your details on the Contact page."}
say("Hi 👋 Welcome to RB Properties. How can we help?","b");
$("#qr").innerHTML=["Book a viewing","Prices","Rentals","Sell my property"].map(function(x){return"<button>"+x+"</button>"}).join("");
function send(t){if(!t.trim())return;say(t,"u");setTimeout(function(){say(reply(t),"b")},600)}
$("#qr").onclick=function(e){if(e.target.tagName=="BUTTON")send(e.target.textContent)};
$("#cf").onsubmit=function(e){e.preventDefault();send($("#ci").value);$("#ci").value=""};
$("#cb").onclick=function(){cw.classList.toggle("on");$("#cb").textContent=cw.classList.contains("on")?"✕":"💬"};

/* Swipe left/right on a property carousel (touch screens) */
var tx=null;
document.addEventListener("touchstart",function(e){var c=e.target.closest(".car");tx=c?e.touches[0].clientX:null},{passive:true});
document.addEventListener("touchend",function(e){if(tx===null)return;var c=e.target.closest(".car"),dx=e.changedTouches[0].clientX-tx;if(c&&Math.abs(dx)>40)go(c,dx<0?1:-1);tx=null});
