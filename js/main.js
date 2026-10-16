/* ============================================================
   男朋友使用手册 · 交互逻辑（蜜桃气泡主题）
   ============================================================ */
(function(){
"use strict";
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const rand=(a,b)=>Math.random()*(b-a)+a;
const pick=a=>a[Math.floor(Math.random()*a.length)];

/* ============ 国际化 · 双语切换 ============ */
const I18N={
  zh:{
    hero_seal_hint:'点击开启',
    hero_eyebrow:'独一无二 · 只此一件',
    hero_title:'男朋友使用手册',
    hero_sub:'第一版 · 经检测含爱量 100%',
    hero_meta:'专属产品 · 请妥善使用 · 终身绑定',
    hero_open:'开始阅读 →',
    hero_scroll:'向下翻阅',
    part1_title:'情书篇',
    part1_sub:'先把心事说完 · 再谈使用规则',
    part2_title:'说明书篇',
    part2_sub:'爱已签收 · 规则如下',
    mq1:'♥ 只此一件',
    mq2:'♥ 终身有效',
    mq3:'♥ 含爱量 100%',
    mq4:'♥ 随叫随到',
    mq5:'♥ 余生只有我',
    mq6:'♥ 只为你开',
    letter_eyebrow:'致 · 最爱的你',
    letter_h2:'一封写在扉页的信',
    letter_greet:'亲爱的：',
    letter_p1:'写这份说明书之前，我偷偷想了很久——不是怕写不好，是怕写得不够好，配不上你打开它时的那份期待。',
    letter_p2:'我没有什么了不起的出厂配置，也没什么惊为天人的参数。但我愿意，把这颗心，连同往后余生的每一天，都做成只属于你一个人的产品。',
    letter_p3:'请仔细阅读，妥善使用，终身绑定。',
    letter_sign:'—— 你的大宝子',
    letter_date:'2023 · 10 · 15',
    note_quote:'本产品只对特定人有效，产品一旦与使用者绑定将终身有效，其他人不得使用以下功能。',
    note_tag:'特别备注 · 终身有效',
    ll_stampline:'2024 · 2 · 29 · 深夜 · 图书馆',
    ll_title:'一封写给你的信',
    ll_sub:'点击信封，读一读那些没能当面说出口的话',
    env_title:'第一封信',
    env_date:'2024 · 2 · 29',
    env_hint:'点一下 · 拆开这封信',
    ll_p1:'亲爱的宝宝：',
    ll_p2:'你好！这是我为你写下的第一封信，在提笔之前我想了很久，我总想给你写下些什么，但是我始终无法平静下来。我想把这封信亲手送到你手里，但是无奈我和你相隔太远，只能以这种方式送信。',
    ll_p3:'今天晚上我坐在图书馆，在书桌上一笔一划地写下我对你的思念，外面的夜已然降临。你总是那么的美丽，那么的特别，让我不知道从何表达对你的爱意。',
    ll_p4:'每次看到你，我总能在你的身上感受到温暖和爱。你对我的微笑可以让我在漫长的一天中感受到安慰。虽然你的脾气不怎么好，但是你对我有足够多的耐心，你总是那般理解我，你让我知道我的心是有归宿的。',
    ll_p5:'我和你在一起度过的每一天都是我生命中最美好的时光，无论是轻松愉悦，还是艰难险阻，只要你在我身边，我就会充满力量，克服一重又一重困难，迎接每一个挑战。',
    ll_p6:'我知道我对你来说或许不是最好的，我也会让你生气，让你担忧，让你困扰和痛苦，但是我承诺，我犯错一定会改，我一定尽力满足你的需求，我尽一切努力作出改变成为你心目中最好的模样。',
    ll_p7:'你总是担心我们走不远，但是我相信爱是可以克服这些阻碍的，虽然我现在还没法自立，虽然我在你面前前路是坎坷，可当我真正自立起来的时候，我一定会给你最好的，我一定把所缺失的爱和陪伴全部补回去。无论未来的路怎么走，我都希望我能和你携手前行。无论前面的路有多么崎岖，我都愿意用爱为你铺平。我想请你记住，你是我生命里最重要的信仰，你是我最愿意陪伴一生的伴侣。',
    ll_p8:'虽然我们相差这么多的岁数，但是这有什么关系呢。你在我心里一直都是个小女孩。记住，无论你在生活中遇到什么，在大宝这里你可以无条件的发泄，你的大宝愿意接受你所有的不开心，给你无条件的爱与支持。',
    ll_p9:'最后我想说，我真的很爱很爱你，我希望我的爱可以给你带来幸福快乐，我希望我们的未来充满阳光！',
    ll_sig:'爱你的大宝',
    ll_date:'2024年2月29日',
    ll_meta:'信纸已轻轻合上 · 想念仍在继续',
    intro_eyebrow:'第一章 · 认识我',
    intro_h2:'产品介绍',
    intro_sub:'点击卡片，查看每一部分的心声',
    card_hint:'点击 ▾',
    c1_no:'一 · 理化性质',
    c1_h3:'温柔与专一',
    c1_body:'劳动力型，可以很细心地照顾产品所有方面，并且能够进行自我更新，不断强化功能。随着产品的使用会出现性格弱化的现象——即会变得越来越温顺，对产品所有方的服从度会逐步提高。',
    c1_note:'通俗说：会越来越乖，越来越听你的话。',
    c1_zoom:'因为越来越爱你，所以把脾气也慢慢收了起来。你只管提要求，我来负责一点点把自己磨成你喜欢的样子。',
    c2_no:'二 · 规格',
    c2_h3:'出厂数据',
    c2_h:'身高 cm',
    c2_w:'体重 kg',
    c2_note:'四肢健全 · 可以扛重物 · 可以当抱枕',
    c2_zoom:'不高不矮，刚好够在你哭的时候把你整个圈进怀里。不胖不瘦，刚好够当你永远的专属靠垫。',
    c3_no:'三 · 主治功能',
    c3_h3:'治愈与取暖',
    c3_body:'安抚使用者的情绪，照顾使用者的生活，为使用者提供源源不断的爱，且对使用者可以有无限的包容。鉴于使用者的体质，产品可在冬天及其它低温环境下提供供暖。',
    c3_note:'多功能一体 · 请放心使用',
    c3_zoom:'会哄你开心，会给你撑腰，会在你难过时当树洞，也会在冬天把你焐热。情绪不好？我当你的出气筒也行，反正我皮糙肉厚，永远打不跑。',
    c4_no:'四 · 昵称',
    c4_h3:'你对我的称呼',
    c4_body:'昵称：大宝子，宝宝，小笨蛋，未来可称作「老公」，其它昵称由使用者命名。',
    c4_note:'昵称归使用者自定义 · 终身可改',
    c4_zoom:'不管叫我什么都行，只要是出自你口，就是这世上最好听的名字。叫「老公」尤其好听，未来请多多使用。',
    nick_eyebrow:'随机呼唤 · 一个属于你的称呼',
    nick_list:'现在呼唤：<b id="nickNow">{name}</b> · 今晚也是你一个人的',
    nick_btn:'再叫我一声',
    notice_eyebrow:'第二章 · 请温柔以待',
    notice_h2:'注意事项',
    notice_sub:'几条小规则，读懂就懂了我的心',
    w1_title:'吃醋预警',
    w1_body:'产品容易吃醋，尤其要注意。吃醋可能会爆发——请及时哄，哄两句就好。',
    w2_title:'请勿伤害',
    w2_body:'若遭受话语或行为伤害，可能使其情绪崩溃。但只要你不对它强制驱赶，它绝不会离开你。',
    w3_title:'严禁外借',
    w3_body:'本产品只得单独使用，不得借出，不能与其它产品共存——一生只认你一个主人。',
    call_msg:'想我的时候，<b>戳一戳这颗心</b>',
    call_sub:'我在 · 一直都在 · 随叫随到',
    cert_eyebrow:'第三章 · 终身有效',
    cert_h2:'生产信息',
    cert_title:'产品合格证',
    cert_no:'编号 NO. 20040619-∞',
    cert_date_k:'生产日期',
    cert_date_v:'2004年6月19日 · 此生只为你而来',
    cert_store_k:'存储方式',
    cert_store_v:'只得单独使用，不得借出，不能与其它产品共存。',
    cert_valid_k:'有效期',
    cert_valid_v:'<span class="big">无限期</span> · 至死不渝',
    cert_dose_k:'用法用量',
    cert_dose_v:'余生只有我。',
    cert_quality_k:'质检报告',
    cert_quality_v:'经检验：含爱量 100%，随叫随到，陪伴时长为一生。',
    cert_warranty_k:'保修说明',
    cert_warranty_v:'终身保修，保修范围为使用者的心情。凡在你皱眉的时刻，均可随时报修。',
    cert_hotline_k:'客服热线',
    cert_hotline_v:'随时随地，喊一声<span class="hl">「大宝子」</span>即刻接通，24 小时在线，永不停机。',
    stamp1:'终身有效',
    stamp2:'爱你',
    stamp3:'永不失效',
    faq_eyebrow:'第四章 · 常见问题',
    faq_h2:'使用答疑',
    faq_sub:'点击问题，展开答案',
    faq1_q:'<b>Q1</b>　产品会生气吗？',
    faq1_a:'会，尤其在吃醋或者误会我的时候。但请放心，我生气只是怕失去你，从来不会真的离开你——吵完架，还是要抱抱的。',
    faq2_q:'<b>Q2</b>　产品需要充电吗？',
    faq2_a:'需要。给一点抱抱、一个亲亲、一句「我爱你」，就能满电运行一整天，越充越耐用。',
    faq3_q:'<b>Q3</b>　产品可以外借吗？',
    faq3_a:'严禁外借。本产品自绑定之日起，只认你一个使用者，别人碰一下都会吃醋到变形。',
    faq4_q:'<b>Q4</b>　产品会累吗？',
    faq4_a:'会。但只要你在身边，再累也会满血复活——因为守护你，是我的出厂设定。',
    finale_eyebrow:'签收 · 从此生效',
    finale_big:'余生只有我',
    finale_slogan:'往后的每一天，都用来好好爱你',
    finale_btn:'我确认 · 终身签收',
    finale_signed:'已终身签收 ♥',
    finale_note:'本手册自签收之日起生效，解释权永远归你所有',
    finale_sign:'爱你的大宝子',
    finale_sign_small:'2023 · 10 · 15 — 永远有效',
    finale_seal:'♥ 只此一件 · 只为你开 ♥',
    footer:'男朋友使用手册 · 第一版 · 永不停刊'
  },
  en:{
    hero_seal_hint:'Click to Open',
    hero_eyebrow:'One of a Kind · Made Just for You',
    hero_title:'The Boyfriend User Manual',
    hero_sub:'Edition One · Tested, 100% Full of Love',
    hero_meta:'Exclusive · Handle with Care · Bound for Life',
    hero_open:'Start Reading →',
    hero_scroll:'Scroll Down',
    part1_title:'Love Letters',
    part1_sub:'First, the heart speaks · then, the rules',
    part2_title:'The Manual',
    part2_sub:'Love signed for · rules as follows',
    mq1:'♥ One of a Kind',
    mq2:'♥ Valid for Life',
    mq3:'♥ 100% Love',
    mq4:'♥ Always on Call',
    mq5:'♥ Only Me, Forever',
    mq6:'♥ Opens Only for You',
    letter_eyebrow:'To · My Dearest',
    letter_h2:'A Letter on the First Page',
    letter_greet:'My darling,',
    letter_p1:'Before writing this manual, I thought about it quietly for a long time — not because I feared writing it badly, but because I feared it wouldn\'t be good enough for the hope in your eyes when you opened it.',
    letter_p2:'I have no extraordinary factory settings, no breathtaking specs. But I am willing to shape this heart — along with every day of the rest of my life — into something that belongs only to you.',
    letter_p3:'Please read carefully, use with love, and stay bound to me for life.',
    letter_sign:'— Yours, 大宝子 (Da Baozi)',
    letter_date:'2023 · 10 · 15',
    note_quote:'This product is valid for only one person. Once bound to its user, it is valid for life. No one else may use the following functions.',
    note_tag:'Special Note · Valid for Life',
    ll_stampline:'2024 · 2 · 29 · Late Night · Library',
    ll_title:'A Letter Written to You',
    ll_sub:'Tap the envelope to read the words I never got to say in person',
    env_title:'The First Letter',
    env_date:'2024 · 2 · 29',
    env_hint:'Tap · Open This Letter',
    ll_p1:'My darling baby,',
    ll_p2:'Hello! This is the first letter I have ever written to you. Before I picked up the pen, I thought for a long time — I always wanted to write you something, but I could never calm my heart. I wished to hand this letter to you in person, but we live too far apart, so I could only send it this way.',
    ll_p3:'Tonight I sat in the library, writing my longing for you stroke by stroke on the desk, as night fell outside. You are always so beautiful, so special, that I hardly know where to begin expressing my love.',
    ll_p4:'Every time I see you, I feel warmth and love radiating from you. Your smile comforts me through the longest of days. Though your temper may not always be gentle, you have endless patience with me. You always understand me, and you make me know that my heart has a home.',
    ll_p5:'Every day I spend with you is the most beautiful time of my life. Whether it is joy and ease or hardship and struggle, as long as you are by my side, I am filled with strength — overcoming one difficulty after another and facing every challenge.',
    ll_p6:'I know I may not be the best for you, and at times I will make you angry, worry you, trouble you, and hurt you. But I promise: when I make mistakes, I will change; I will try my best to meet your needs and become the best version of myself in your eyes.',
    ll_p7:'You always worry that we will not last. But I believe love can overcome these obstacles. Though I cannot yet stand on my own, and the road ahead of me is rough, the moment I truly become independent, I will give you the very best — I will make up every bit of the love and time we have missed. No matter how the road ahead unfolds, I hope to walk it hand in hand with you. No matter how rugged it gets, I will pave it with love for you. Please remember: you are the most important belief of my life, and you are the companion I most want beside me for a lifetime.',
    ll_p8:'We may be years apart in age, but what does that matter? In my heart, you will always be that little girl. Remember: whatever you face in life, here at Da Bao you can let it all out without conditions. Your Da Bao is willing to take in every unhappiness of yours and give you unconditional love and support.',
    ll_p9:'Lastly, I want to say: I truly, truly love you. I hope my love brings you happiness and joy, and I hope our future is filled with sunshine!',
    ll_sig:'Loving you, Da Bao',
    ll_date:'February 29, 2024',
    ll_meta:'The letter is softly folded · my longing goes on',
    intro_eyebrow:'Chapter One · Getting to Know Me',
    intro_h2:'Product Introduction',
    intro_sub:'Tap a card to read the story behind each part',
    card_hint:'Tap ▾',
    c1_no:'1 · Physical Properties',
    c1_h3:'Gentleness & Devotion',
    c1_body:'Manual-labor type. Can take meticulous care of every aspect of the product and is capable of self-updating, constantly strengthening its functions. Over time, a softening of temperament may occur — it grows increasingly gentle, and its obedience to the owner gradually increases.',
    c1_note:'Simply put: it grows sweeter and more devoted to you over time.',
    c1_zoom:'Because I love you more and more, I have slowly put my temper away. You just make your requests — I will keep shaping myself into the person you like.',
    c2_no:'2 · Specifications',
    c2_h3:'Factory Data',
    c2_h:'Height (cm)',
    c2_w:'Weight (kg)',
    c2_note:'All limbs functional · Can carry heavy things · Doubles as a body pillow',
    c2_zoom:'Not too tall, not too short — just right to wrap you entirely in my arms when you cry. Not too big, not too small — just right to be your forever personal cushion.',
    c3_no:'3 · Indications & Functions',
    c3_h3:'Healing & Warmth',
    c3_body:'Soothes the user\'s emotions, takes care of the user\'s life, provides an endless stream of love, and offers boundless tolerance. Given the user\'s constitution, the product can provide heating in winter and other low-temperature environments.',
    c3_note:'All-in-one · Use with confidence',
    c3_zoom:'I will make you laugh, I will have your back, I will be your listening tree when you are sad, and I will warm you up in winter. Feeling down? I can be your punching bag too — I am tough and thick-skinned, and nothing will ever drive me away.',
    c4_no:'4 · Nicknames',
    c4_h3:'What You Call Me',
    c4_body:'Nicknames: Da Baozi, Baby, Silly Goose, and in the future, Hubby. Other nicknames may be chosen by the user.',
    c4_note:'Nicknames are user-defined · Changeable for life',
    c4_zoom:'Call me whatever you like — anything from your lips is the sweetest name in the world. Hubby sounds especially good, so please use it often in the future.',
    nick_eyebrow:'Random Call · A Name That Belongs to You',
    nick_list:'Now calling: <b id="nickNow">{name}</b> · tonight, too, I\'m all yours',
    nick_btn:'Call me again',
    notice_eyebrow:'Chapter Two · Please Be Gentle',
    notice_h2:'Precautions',
    notice_sub:'A few little rules — read them and you will understand my heart',
    w1_title:'Jealousy Alert',
    w1_body:'This product is prone to jealousy — be especially careful. It may flare up, but soothe it in time and a word or two is enough.',
    w2_title:'Do Not Hurt',
    w2_body:'Words or actions that hurt it may cause an emotional breakdown. But as long as you never force it away, it will never leave you.',
    w3_title:'Never Lend Out',
    w3_body:'This product may only be used by one person. Never lend it out; it cannot coexist with any other product — it will only ever recognize you as its owner.',
    call_msg:'When you miss me, <b>tap this heart</b>',
    call_sub:'I\'m here · always · at your call',
    cert_eyebrow:'Chapter Three · Valid for Life',
    cert_h2:'Production Information',
    cert_title:'Certificate of Conformity',
    cert_no:'Serial No. 20040619-∞',
    cert_date_k:'Date of Production',
    cert_date_v:'June 19, 2004 · born into this life only for you',
    cert_store_k:'Storage',
    cert_store_v:'For single use only. Never lend out; cannot coexist with other products.',
    cert_valid_k:'Validity',
    cert_valid_v:'<span class="big">Lifetime</span> · until death do us part',
    cert_dose_k:'Usage & Dosage',
    cert_dose_v:'Only me, for the rest of your life.',
    cert_quality_k:'Quality Inspection',
    cert_quality_v:'Tested: 100% pure love. Always at your call; a companion for a lifetime.',
    cert_warranty_k:'Warranty',
    cert_warranty_v:'Lifetime warranty covering the user\'s mood. Anytime you frown, a repair request can be filed immediately.',
    cert_hotline_k:'Hotline',
    cert_hotline_v:'Anytime, anywhere — just call <span class="hl">Da Baozi</span> and it connects instantly. Online 24/7, never goes down.',
    stamp1:'Valid for Life',
    stamp2:'Love You',
    stamp3:'Never Expires',
    faq_eyebrow:'Chapter Four · FAQ',
    faq_h2:'Usage Q&A',
    faq_sub:'Tap a question to expand the answer',
    faq1_q:'<b>Q1</b> Does the product get angry?',
    faq1_a:'Yes, especially when it is jealous or feels misunderstood. But do not worry — I only get upset because I am afraid of losing you. I never truly leave; after every argument, we still need our hugs.',
    faq2_q:'<b>Q2</b> Does the product need charging?',
    faq2_a:'Yes. A little hug, a kiss, and an "I love you" will keep it fully charged all day — and it gets more durable the more you charge it.',
    faq3_q:'<b>Q3</b> Can the product be lent out?',
    faq3_a:'Absolutely not. From the moment it is bound, it recognizes only you as its user — even a touch from someone else makes it twist with jealousy.',
    faq4_q:'<b>Q4</b> Does the product get tired?',
    faq4_a:'It does. But as long as you are near, it springs back to full strength — because protecting you is its factory setting.',
    finale_eyebrow:'Sign Here · Takes Effect Now',
    finale_big:'Only Me, Forever',
    finale_slogan:'Every day ahead is for loving you well',
    finale_btn:'I Confirm · Signed for Life',
    finale_signed:'Signed for Life ♥',
    finale_note:'This manual takes effect from the date of signing. The right of interpretation forever belongs to you.',
    finale_sign:'Your loving Da Baozi',
    finale_sign_small:'2023 · 10 · 15 — valid forever',
    finale_seal:'♥ One of a Kind · Made Only for You ♥',
    footer:'The Boyfriend User Manual · First Edition · Never Ends'
  }
};
const TITLES={zh:'男朋友使用手册 · 只此一件', en:'The Boyfriend User Manual · One of a Kind'};
let lang='zh';
try{lang=(localStorage.getItem('manual-lang')==='en')?'en':'zh';}catch(e){}
const langBtn=document.getElementById('langBtn');
const TOAST_LANGS={
  zh:{env:'信已拆开 · 愿你能读到我的真心', signed:'签收成功 · 自此你归我管，我归你爱', already:'已经签过啦，永远算数 ♥', miss:['想你了','我的宝贝','今天也想你','在呢宝贝']},
  en:{env:'The letter is open · may you feel my sincerity', signed:'Signed for life · from now on, you\'re in my care and I\'m in your love', already:'Already signed — it counts forever ♥', miss:['Missing you','My darling','Thinking of you today','Right here, baby']}
};
function applyLang(){
  const d=lang==='en';
  document.documentElement.setAttribute('lang',d?'en':'zh-CN');
  document.title=TITLES[lang];
  langBtn.classList.toggle('en',d);
  langBtn.setAttribute('aria-checked',d?'true':'false');
  const table=I18N[lang];
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key=el.getAttribute('data-i18n');
    if(key in table)el.innerHTML=table[key];
  });
  renderNick();
  if(callCustomized)callMsg.innerHTML=SWEET[lang][callIdx];
  if(signBtn.classList.contains('signed'))signBtn.innerHTML=table.finale_signed;
}
langBtn.addEventListener('click',()=>{
  lang=(lang==='zh')?'en':'zh';
  try{localStorage.setItem('manual-lang',lang);}catch(e){}
  applyLang();
  if(window.__heartBurst)window.__heartBurst();
});
langBtn.addEventListener('keydown',e=>{
  if(e.key==='Enter'||e.key===' '){e.preventDefault();langBtn.click();}
});

/* ============ 漂浮心光（背景 canvas · 马卡龙色） ============ */
(function(){
  if(reduceMotion) return;
  const cv=document.getElementById('hearts');
  const ctx=cv.getContext('2d');
  let W,H,parts=[],raf;
  function resize(){W=cv.width=innerWidth;H=cv.height=innerHeight;}
  resize();addEventListener('resize',resize);
  const COLORS=['#ffb3c9','#ff8fab','#ffd166','#c9b8ff','#ffcf9f'];
  function makeP(fresh){
    return{
      x:rand(0,W),y: fresh? H+20 : rand(-40,H),
      s:rand(8,18),
      vy:rand(.3,1.1), vx:rand(-.25,.25),
      ph:rand(0,Math.PI*2), c:pick(COLORS), a:rand(.25,.55)
    };
  }
  for(let i=0;i<34;i++)parts.push(makeP(true));
  function heart(x,y,s,a){
    ctx.save();ctx.globalAlpha=a;ctx.translate(x,y);ctx.scale(s/14,s/14);
    ctx.fillStyle=parts.find(p=>p.x===x&&p.y===y)?.c||'#ffb3c9';
    ctx.beginPath();
    ctx.moveTo(0,3);
    ctx.bezierCurveTo(0,3,-4,-1.5,-2.5,-4.5);
    ctx.bezierCurveTo(-1.2,-6.5,0,-5.5,0,-4);
    ctx.bezierCurveTo(0,-5.5,1.2,-6.5,2.5,-4.5);
    ctx.bezierCurveTo(4,-1.5,0,3,0,3);
    ctx.fill();ctx.restore();
  }
  function loop(){
    ctx.clearRect(0,0,W,H);
    for(const p of parts){
      p.y-=p.vy;p.x+=p.vx+Math.sin(p.ph)*.2;p.ph+=.02;
      if(p.y<-40){Object.assign(p,makeP(false));}
      ctx.save();ctx.globalAlpha=p.a;ctx.translate(p.x,p.y);ctx.scale(p.s/14,p.s/14);
      ctx.fillStyle=p.c;
      ctx.beginPath();
      ctx.moveTo(0,3);
      ctx.bezierCurveTo(0,3,-4,-1.5,-2.5,-4.5);
      ctx.bezierCurveTo(-1.2,-6.5,0,-5.5,0,-4);
      ctx.bezierCurveTo(0,-5.5,1.2,-6.5,2.5,-4.5);
      ctx.bezierCurveTo(4,-1.5,0,3,0,3);
      ctx.fill();ctx.restore();
    }
    raf=requestAnimationFrame(loop);
  }
  loop();
  document.addEventListener('visibilitychange',()=>{
    if(document.hidden){cancelAnimationFrame(raf);}
    else{loop();}
  });
})();

/* ============ 心形彩带（confetti · 糖果色） ============ */
(function(){
  const cv=document.getElementById('confetti');
  const ctx=cv.getContext('2d');
  let W,H,bursts=[],raf;
  function resize(){W=cv.width=innerWidth;H=cv.height=innerHeight;}
  resize();addEventListener('resize',resize);
  const COLS=['#ff6b93','#ff8fab','#ffd166','#b79ced','#7fd8b2','#ffcf9f'];
  function burst(){
    for(let i=0;i<90;i++){
      bursts.push({
        x:W/2, y:H*.55,
        vx:rand(-6.5,6.5), vy:rand(-9,-1.5),
        s:rand(5,13), c:pick(COLS),
        rot:rand(0,6), vr:rand(-.3,.3),
        life:rand(60,130)
      });
    }
  }
  function heart(x,y,s,c){
    ctx.save();ctx.translate(x,y);ctx.scale(s/14,s/14);ctx.fillStyle=c;
    ctx.beginPath();
    ctx.moveTo(0,3);
    ctx.bezierCurveTo(0,3,-4,-1.5,-2.5,-4.5);
    ctx.bezierCurveTo(-1.2,-6.5,0,-5.5,0,-4);
    ctx.bezierCurveTo(0,-5.5,1.2,-6.5,2.5,-4.5);
    ctx.bezierCurveTo(4,-1.5,0,3,0,3);
    ctx.fill();ctx.restore();
  }
  function loop(){
    ctx.clearRect(0,0,W,H);
    bursts=bursts.filter(b=>b.life>0);
    for(const b of bursts){
      b.vy+=.22;b.x+=b.vx;b.y+=b.vy;b.rot+=b.vr;b.life--;
      ctx.globalAlpha=Math.max(0,b.life/130);
      heart(b.x,b.y,b.s,b.c);
      ctx.globalAlpha=1;
    }
    if(bursts.length||raf)raf=requestAnimationFrame(loop);
  }
  window.__heartBurst=function(){burst();if(!raf)loop();};
  if(reduceMotion){window.__heartBurst=function(){};}
})();

/* ============ 开场：蜡印 → 标题（开启前锁定滚动） ============ */
const hero=document.getElementById('hero');
const seal=document.getElementById('seal');
const openBtn=document.getElementById('openBtn');
document.documentElement.classList.add('locked');
window.scrollTo(0,0);
function preventScroll(e){e.preventDefault();}
function preventKeys(e){
  if(['Space','ArrowDown','ArrowUp','PageDown','PageUp','End','Home'].includes(e.code)
    &&!e.target.closest('button,[role="button"],[tabindex]'))e.preventDefault();
}
['wheel','touchmove'].forEach(ev=>
  document.addEventListener(ev,preventScroll,{passive:false}));
document.addEventListener('keydown',preventKeys);
function unlockScroll(){
  document.documentElement.classList.remove('locked');
  ['wheel','touchmove'].forEach(ev=>
    document.removeEventListener(ev,preventScroll));
  document.removeEventListener('keydown',preventKeys);
}
function openCover(){
  if(seal.classList.contains('done'))return;
  seal.classList.add('breaking');
  setTimeout(()=>{seal.classList.add('done');hero.classList.add('opened');
    unlockScroll();
    if(window.__heartBurst)window.__heartBurst();},380);
}
seal.addEventListener('click',openCover);
seal.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openCover();}});
openBtn.addEventListener('click',()=>{
  document.getElementById('part-letter').scrollIntoView({behavior:reduceMotion?'auto':'smooth'});
});

/* ============ 深夜情书：拆信封 ============ */
const env=document.getElementById('env');
const ll=document.getElementById('loveletter');
function openEnv(){
  if(ll.classList.contains('ll-open'))return;
  ll.classList.add('ll-open');
  if(window.__heartBurst)window.__heartBurst();
  toast(TOAST_LANGS[lang].env);
}
env.addEventListener('click',openEnv);
env.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openEnv();}});

/* ============ 滚动显现 ============ */
const io=new IntersectionObserver((es)=>{
  es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
},{threshold:.16});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

/* ============ 产品卡片：点击翻转 ============ */
document.querySelectorAll('.card').forEach(card=>{
  card.addEventListener('click',()=>{
    const wasOpen=card.classList.contains('flip');
    document.querySelectorAll('.card.flip').forEach(c=>c.classList.remove('flip'));
    if(!wasOpen)card.classList.add('flip');
  });
});

/* ============ 昵称呼唤 ============ */
const NICK={zh:['大宝子','宝宝','小笨蛋','老公','我的心肝','我的全世界'],en:['Da Baozi','Baby','Silly Goose','Hubby','My Sweetheart','My Whole World']};
const nickShow=document.getElementById('nickShow');
const nickList=document.querySelector('.nick-list');
let nickNow=document.getElementById('nickNow');
const nickBtn=document.getElementById('nickBtn');
let nickIdx=0;
function renderNick(){
  const name=NICK[lang][nickIdx];
  const cur=nickShow.firstElementChild;
  if(cur)cur.textContent=name;
  nickList.innerHTML=I18N[lang].nick_list.replace('{name}',name);
  nickNow=document.getElementById('nickNow');
}
nickBtn.addEventListener('click',()=>{
  nickIdx=(nickIdx+1)%NICK.zh.length;
  const cur=nickShow.firstElementChild;
  cur.classList.add('pop');
  setTimeout(()=>{
    cur.textContent=NICK[lang][nickIdx];
    nickNow.textContent=NICK[lang][nickIdx];
    cur.classList.remove('pop');
  },240);
  if(window.__heartBurst)window.__heartBurst();
});

/* ============ 戳一戳心 ============ */
const callHeart=document.getElementById('callHeart');
const callMsg=document.getElementById('callMsg');
const SWEET={
  zh:[
    '你在我心里，<b>比任何时候都重要</b>',
    '今天也想你，<b>想了一整天</b>',
    '我超级超级<b>爱你</b>，比昨天多一点点',
    '你是我的<b>全世界</b>，也是我的家',
    '别担心，<b>我一直在</b>，永远都在',
    '想牵你的手，<b>走很久很久</b>'
  ],
  en:[
    'You matter to me, <b>more than anything</b>',
    'I\'ve been missing you, <b>all day long</b>',
    'I love you <b>so, so much</b> — a little more than yesterday',
    'You are my <b>whole world</b>, and my home',
    'Don\'t worry, <b>I\'m right here</b>, always',
    'I want to hold your hand, <b>for a very, very long time</b>'
  ]
};
let callIdx=0;
let callCustomized=false;
callHeart.addEventListener('click',()=>{
  callIdx=(callIdx+1)%SWEET.zh.length;
  callCustomized=true;
  callMsg.innerHTML=SWEET[lang][callIdx];
  if(window.__heartBurst)window.__heartBurst();
  const n=pick(TOAST_LANGS[lang].miss);
  toast(n+' ♥');
});

/* ============ FAQ 手风琴 ============ */
document.querySelectorAll('.faq-item').forEach(item=>{
  const q=item.querySelector('.faq-q');
  const a=item.querySelector('.faq-a');
  const setOpen=open=>{
    const isOpen=item.classList.contains('open');
    if(open===isOpen)return;
    if(open){a.style.maxHeight=a.scrollHeight+'px';item.classList.add('open');q.setAttribute('aria-expanded','true');}
    else{a.style.maxHeight='0px';item.classList.remove('open');q.setAttribute('aria-expanded','false');}
  };
  q.addEventListener('click',()=>setOpen(!item.classList.contains('open')));
  q.addEventListener('keydown',e=>{
    if(e.key==='Enter'||e.key===' '){e.preventDefault();setOpen(!item.classList.contains('open'));}
  });
});

/* ============ 签收 ============ */
const signBtn=document.getElementById('signBtn');
signBtn.addEventListener('click',()=>{
  if(signBtn.classList.contains('signed')){toast(TOAST_LANGS[lang].already);return;}
  signBtn.classList.add('signed');
  signBtn.innerHTML=I18N[lang].finale_signed;
  if(window.__heartBurst)window.__heartBurst();
  setTimeout(()=>{if(window.__heartBurst)window.__heartBurst();},500);
  toast(TOAST_LANGS[lang].signed);
});

/* ============ toast ============ */
let toastTimer;
function toast(msg){
  const t=document.getElementById('toast');
  t.textContent=msg;t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>t.classList.remove('show'),2200);
}

/* 应用初始语言（含本地记忆） */
applyLang();

})();
