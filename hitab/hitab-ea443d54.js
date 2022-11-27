(()=>{"use strict";var e,t,a,r,i,n,c,s={20918:(e,t,a)=>{a.d(t,{AN:()=>l,FH:()=>o,G9:()=>i,H:()=>f,Hj:()=>m,Ji:()=>h,Lt:()=>s,P0:()=>n,Pl:()=>r,c1:()=>u,s$:()=>c,sM:()=>b,tI:()=>d});const r=!0,i=!1,n=!1,c=!1,s="web",o=i||n||c,d="zh",l=!1,b=!0,h="0.0.11",f="https://api.wetab.link/api/",u=(location.origin,"https://static.wetab.link"),p=b?{"zh-CN":"中文简体"}:{"en-US":"English"},m=(Object.keys(p),b?"zh-CN":"en-US")},80622:(e,t,a)=>{var r=a(20918);globalThis.i18nLangCode=r.Hj;const i=(async()=>(globalThis.i18n=e=>`[${e}]`,globalThis.i18n))(),n=async()=>await i;var c=a(59590);(()=>{let e=0})();(async()=>{await Promise.all([(0,c.WT)(),n()]),await Promise.all([a.e(9447),a.e(435),a.e(3607),a.e(179)]).then(a.bind(a,96727))})()},59590:(e,t,a)=>{a.d(t,{BU:()=>c,Ar:()=>s,aQ:()=>d,WT:()=>h,gZ:()=>o,ES:()=>l});var r=a(20689);class i{static DBName="hitab";static storeNames=[];static ensureDB=async()=>{let e;if(this.dbPromise){const t=await this.dbPromise;e=t.version+1,t.close()}return this.dbPromise=(0,r.X3)(this.DBName,e,{upgrade:e=>{const t=this.storeNames.filter((t=>!e.objectStoreNames.contains(t)));t.length>0&&t.forEach((t=>{e.createObjectStore(t)}))}}),this.dbPromise};objStoreName="";driver="idb";constructor(e,t){if(!e)throw new Error("empty object store name");this.driver=t??this.driver,this.objStoreName=e,i.storeNames.push(this.objStoreName)}async getItem(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.driver;try{switch(t){case"idb":try{const t=await i.dbPromise;return await t.get(this.objStoreName,e)}catch(t){const a=await i.ensureDB();return await a.get(this.objStoreName,e)}case"storage.local":return await new Promise((t=>chrome.storage.local.get(e,(a=>t(a[e])))))}}catch(e){throw e}}async setItem(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.driver;try{switch(a){case"idb":try{const a=await i.dbPromise;return await a.put(this.objStoreName,t,e)}catch(a){const r=await i.ensureDB();return await r.put(this.objStoreName,t,e)}case"storage.local":return await new Promise((a=>chrome.storage.local.set({[e]:t},a)))}}catch(e){throw e}}async removeItem(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.driver;try{switch(t){case"idb":try{const t=await i.dbPromise;return await t.delete(this.objStoreName,e)}catch(t){const a=await i.ensureDB();return await a.delete(this.objStoreName,e)}case"storage.local":return await new Promise((t=>chrome.storage.local.remove(e,t)))}}catch(e){throw e}}async keys(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.driver;try{switch(e){case"idb":try{const e=await i.dbPromise;return await e.getAllKeys(this.objStoreName)}catch(e){const t=await i.ensureDB();return await t.getAllKeys(this.objStoreName)}case"storage.local":return await new Promise((e=>chrome.storage.local.get(null,(t=>e(Object.keys(t))))))}}catch(e){throw e}}}const n=new i("store");let c;i.ensureDB(),function(e){e.wallpaper="store-wallpaper",e.search="store-search",e.icon="store-icon",e.setting="store-setting",e.user="store-user",e.sync="store-sync",e.notice="store-notice",e.note="store-note",e.todo="store-todo",e.timerBirthday="store-timer-birthday",e.timerFestival="store-timer-festival",e.timerYear="store-timer-year",e.weather="store-weather",e.hotsearch="store-hotsearch",e.calculator="store-calculator",e.payment="store-payment",e.calendar="store-calendar"}(c||(c={}));class s{static instanceKeyMapper=new Map;static getInstanceFromKey(e){return this.instanceKeyMapper.has(e)?this.instanceKeyMapper.get(e):null}static hasInstanceFromKey(e){return this.instanceKeyMapper.has(e)}static async getAllInitdata(){const e=Array.from(this.instanceKeyMapper.values());return await Promise.all(e.map((e=>e.getInitdata())))}static async deleteAllForLogout(){const e=Array.from(this.instanceKeyMapper.values());let t;return(await Promise.all(e.map((e=>e.deleteForLogout())))).some((e=>{let[a]=e;return!!a&&(t=a,!0)}))?[t]:[null,null]}constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"idb";this.key=e,this.type=t,this.setInstanceMapper()}setInstanceMapper(){if(s.instanceKeyMapper.has(this.key))throw new Error("重复的 storage key");s.instanceKeyMapper.set(this.key,this)}write=async e=>{if(!e)return[{message:"空数据"}];e._writeStorageAt=Date.now();try{return[null,await n.setItem(this.key,e,this.type)]}catch(e){return[e]}};async read(){try{return[null,await n.getItem(this.key,this.type)]}catch(e){return[e]}}async getInitdata(){const[e,t]=await this.read();return e||(this.initData=t),this.initData}async update(e){const[t,a]=await this.read();if(t)return[t];if(a&&"object"==typeof a){const t={...a,...e};return await this.write(t)}return[{data:a}]}async delete(){try{return[null,await n.removeItem(this.key,this.type)]}catch(e){return[e]}}async deleteWithKeep(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];if(0===t.length)return[{keys:t}];const[r,i]=await this.read();if(r)return[r];if(i&&"object"==typeof i){const e={};return t.forEach((t=>{e[t]=i[t]})),await this.write(e)}return[{data:i}]}async deleteForLogout(){return await this.delete()}}new s(c.note),new s(c.search);const o=new s(c.setting),d=new s(c.icon),l=(new s(c.sync),new s(c.todo),new s(c.user)),b=(new s(c.wallpaper),new s(c.notice),new s(c.timerBirthday),new s(c.timerFestival),new s(c.timerYear),new s(c.weather),new s(c.hotsearch),new s(c.calculator),new s(c.payment),s.getAllInitdata()),h=async()=>await b}},o={};function d(e){var t=o[e];if(void 0!==t)return t.exports;var a=o[e]={id:e,loaded:!1,exports:{}};return s[e].call(a.exports,a,a.exports,d),a.loaded=!0,a.exports}d.m=s,d.amdO={},e=[],d.O=(t,a,r,i)=>{if(!a){var n=1/0;for(l=0;l<e.length;l++){for(var[a,r,i]=e[l],c=!0,s=0;s<a.length;s++)(!1&i||n>=i)&&Object.keys(d.O).every((e=>d.O[e](a[s])))?a.splice(s--,1):(c=!1,i<n&&(n=i));if(c){e.splice(l--,1);var o=r();void 0!==o&&(t=o)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[a,r,i]},d.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return d.d(t,{a:t}),t},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var i=Object.create(null);d.r(i);var n={};t=t||[null,a({}),a([]),a(a)];for(var c=2&r&&e;"object"==typeof c&&!~t.indexOf(c);c=a(c))Object.getOwnPropertyNames(c).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,d.d(i,n),i},d.d=(e,t)=>{for(var a in t)d.o(t,a)&&!d.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((t,a)=>(d.f[a](e,t),t)),[])),d.u=e=>"assets/js/"+{101:"7c08592f",167:"2003eab0",179:"cd22e111",284:"06868ba8",294:"c167204a",300:"b30ab8b9",399:"97768911",423:"e8929e5e",435:"8af70b7a",611:"6db394a1",711:"0ddf58b3",786:"258ebf95",817:"198d3538",842:"ebff6f9f",1282:"4aede92d",1365:"c4d689b7",1412:"48dd65a9",1462:"074f5a3d",1485:"5b57deac",1568:"398696cb",1572:"8fd4fd5f",1619:"866e61f8",1688:"86dc830c",1746:"94766e82",1754:"48dca3ee",1785:"0970c903",1843:"5723683a",2096:"017ac29c",2232:"16b4584d",2307:"d7252ed0",2344:"74b592d6",2346:"d69eca64",2382:"ed48fac7",2433:"83924b85",2451:"55c3532b",2669:"b1512591",2682:"cb13a01b",2742:"7fc59132",2759:"30adb129",2801:"29032e79",2823:"c5427e8c",3105:"0b05e9c9",3166:"0b88b69a",3243:"a05fac54",3268:"bfcd28f1",3309:"7875d381",3364:"a520bc4c",3368:"6fd762a3",3409:"4c46c2fe",3421:"a5cbd8f8",3528:"34269c0b",3536:"8fbba862",3578:"947d7cb9",3583:"2a2dd8e8",3606:"0a682390",3607:"9b2582aa",3774:"93c05d4c",3907:"7765d3c9",3919:"b2e34624",3969:"fc05691e",4010:"117488d0",4039:"8cca0ddc",4069:"4f6e5b29",4141:"aa4f2c2e",4198:"b90160eb",4261:"943f8fed",4431:"a312fb45",4445:"f4c3a66e",4496:"878d7a44",4534:"4b453dd1",4594:"d912cfca",4633:"2fb1eea5",4783:"57a51b7d",4801:"ec7803fb",4807:"204c5f37",4949:"5a5739fa",5005:"6c12360f",5028:"1295d99e",5096:"cea87104",5215:"ad8d7cf5",5344:"04a48587",5427:"d0f9af95",5428:"02e027a2",5655:"d8f62aa0",5854:"3f1f6ff8",5856:"2b42bedd",5887:"43839e54",5900:"14375a50",5965:"b0eb8498",6123:"5bd20f32",6183:"d3d0af4e",6263:"594871a6",6351:"1e0a9b88",6365:"cefaa307",6668:"87ca1ebe",6673:"9536eec8",6774:"bd705304",6917:"c48f46b5",6930:"6dd2d063",7066:"624378f9",7158:"926a652d",7712:"c2fb72e6",7737:"2f9de9fb",7873:"a0332719",7906:"c870be0d",7959:"1598e5cf",7976:"c5c3da1d",8054:"5c51b4f2",8091:"4f91b358",8127:"44a96d41",8185:"c25c7373",8214:"a5c52f03",8222:"f45a3a41",8267:"9f40cafd",8426:"7ff149ef",8585:"14d9b878",8653:"80f385a0",8657:"532980fd",8696:"ba3aed46",8702:"f8b22990",8722:"01150e8b",8754:"bd2c4222",8799:"56e2def8",8854:"c73dcdd5",8883:"69ff7c89",8929:"e68779d7",9003:"a9a5295e",9047:"23898ea9",9176:"ebb2f4ce",9207:"d80149e2",9278:"e886e985",9334:"1d0a63dc",9447:"535ae84b",9629:"da10bd2c",9686:"34435e09",9726:"d4b98828",9745:"382dda67",9750:"265f4de2",9820:"1d826b02",9906:"1e1aa05b",9965:"e13c6a77",9968:"5684c914"}[e]+".js",d.miniCssF=e=>"assets/css/"+(179===e?"main":e)+"-"+{101:"67e5cdb2",179:"dd167064",786:"4271d61c",817:"de23a270",842:"df3239f3",1568:"1d6b10ea",1572:"8de8f1ee",1746:"a3bbbbce",2096:"df3239f3",2232:"0c5e5f70",2344:"b6c9e6b2",2742:"0c5e5f70",2759:"0c5e5f70",2801:"c5f47a55",2823:"0c5e5f70",3606:"0c5e5f70",3969:"08b82f3d",4141:"121ce825",4198:"b14dd554",4261:"5058178b",4445:"120208d4",4594:"0c5e5f70",4633:"d0088f7f",4949:"35f385bd",5028:"d1bf8506",5428:"c399148a",5655:"0c5e5f70",6123:"0c5e5f70",6351:"62a77be8",6365:"4552719d",6774:"1ed66dd4",6930:"baa6f283",7712:"e9bea0f8",7873:"08b82f3d",8185:"0c5e5f70",8222:"af11397c",8426:"a0afcace",8854:"b47c645b",8929:"627a1b74",9047:"fcd117e6",9176:"0c5e5f70",9278:"c405e611",9334:"7b6e68d7",9447:"89726115",9686:"8a2f9c1f"}[e]+".css",d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},i="infinity-hitab-client:",d.l=(e,t,a,n)=>{if(r[e])r[e].push(t);else{var c,s;if(void 0!==a)for(var o=document.getElementsByTagName("script"),l=0;l<o.length;l++){var b=o[l];if(b.getAttribute("src")==e||b.getAttribute("data-webpack")==i+a){c=b;break}}c||(s=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,d.nc&&c.setAttribute("nonce",d.nc),c.setAttribute("data-webpack",i+a),c.src=e),r[e]=[t];var h=(t,a)=>{c.onerror=c.onload=null,clearTimeout(f);var i=r[e];if(delete r[e],c.parentNode&&c.parentNode.removeChild(c),i&&i.forEach((e=>e(a))),t)return t(a)},f=setTimeout(h.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=h.bind(null,c.onerror),c.onload=h.bind(null,c.onload),s&&document.head.appendChild(c)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;d.g.importScripts&&(e=d.g.location+"");var t=d.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),d.p=e+"../"})(),n=e=>new Promise(((t,a)=>{var r=d.miniCssF(e),i=d.p+r;if(((e,t)=>{for(var a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var i=(c=a[r]).getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(i===e||i===t))return c}var n=document.getElementsByTagName("style");for(r=0;r<n.length;r++){var c;if((i=(c=n[r]).getAttribute("data-href"))===e||i===t)return c}})(r,i))return t();((e,t,a,r)=>{var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",i.onerror=i.onload=n=>{if(i.onerror=i.onload=null,"load"===n.type)a();else{var c=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,o=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");o.code="CSS_CHUNK_LOAD_FAILED",o.type=c,o.request=s,i.parentNode.removeChild(i),r(o)}},i.href=t,document.head.appendChild(i)})(e,i,t,a)})),c={1080:0},d.f.miniCss=(e,t)=>{c[e]?t.push(c[e]):0!==c[e]&&{101:1,179:1,786:1,817:1,842:1,1568:1,1572:1,1746:1,2096:1,2232:1,2344:1,2742:1,2759:1,2801:1,2823:1,3606:1,3969:1,4141:1,4198:1,4261:1,4445:1,4594:1,4633:1,4949:1,5028:1,5428:1,5655:1,6123:1,6351:1,6365:1,6774:1,6930:1,7712:1,7873:1,8185:1,8222:1,8426:1,8854:1,8929:1,9047:1,9176:1,9278:1,9334:1,9447:1,9686:1}[e]&&t.push(c[e]=n(e).then((()=>{c[e]=0}),(t=>{throw delete c[e],t})))},(()=>{var e={1080:0};d.f.j=(t,a)=>{var r=d.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else if(/^(2344|8185)$/.test(t))e[t]=0;else{var i=new Promise(((a,i)=>r=e[t]=[a,i]));a.push(r[2]=i);var n=d.p+d.u(t),c=new Error;d.l(n,(a=>{if(d.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var i=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+n+")",c.name="ChunkLoadError",c.type=i,c.request=n,r[1](c)}}),"chunk-"+t,t)}},d.O.j=t=>0===e[t];var t=(t,a)=>{var r,i,[n,c,s]=a,o=0;if(n.some((t=>0!==e[t]))){for(r in c)d.o(c,r)&&(d.m[r]=c[r]);if(s)var l=s(d)}for(t&&t(a);o<n.length;o++)i=n[o],d.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return d.O(l)},a=globalThis.webpackChunkinfinity_hitab_client=globalThis.webpackChunkinfinity_hitab_client||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var l=d.O(void 0,[689],(()=>d(80622)));l=d.O(l)})();