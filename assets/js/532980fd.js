"use strict";(globalThis.webpackChunkinfinity_hitab_client=globalThis.webpackChunkinfinity_hitab_client||[]).push([[8657],{48657:(e,t,i)=>{i.r(t),i.d(t,{useHotsearchStore:()=>H,widgetInfo:()=>L});var o,a=i(10435),n=i(20918);!function(e){e.weibo="weibo",e.baidu="baidu",e.zhihu="zhihu",e.bilibili="bilibili",e.kr36="kr36",e.toutiao="toutiao",e.sspai="sspai",e.csdn="csdn",e.douyin="douyin",e.wechat="wechat"}(o||(o={}));const s=[{type:o.weibo,name:"微博",label:"热搜榜",icon:"/hot-search-icon/weibo.png"},{type:o.baidu,name:"百度",label:"热搜",icon:"/hot-search-icon/baidu.png"},{type:o.zhihu,name:"知乎",label:"热榜",icon:"/hot-search-icon/zhihu.png"},{type:o.wechat,name:"微信",label:"24小时热文榜",icon:"/hot-search-icon/weixin.png"},{type:o.bilibili,name:"哔哩哔哩",label:"热门",icon:"/hot-search-icon/bilibili.png"},{type:o.kr36,name:"36氪",label:"24小时热榜",icon:"/hot-search-icon/kr36.png"},{type:o.douyin,name:"抖音",label:"视频榜",icon:"/hot-search-icon/douyin.png"},{type:o.toutiao,name:"今日头条",label:"热文榜",icon:"/hot-search-icon/toutiao.png"},{type:o.sspai,name:"少数派",label:"热门文章",icon:"/hot-search-icon/sspai.png"},{type:o.csdn,name:"CSDN",label:"今日热点",icon:"/hot-search-icon/csdn.png"}].map((e=>({...e,icon:n.c1+e.icon,list:[],expired:0,updatetime:0})));var h=i(43747),r=i(59590),c=i(52561),l=i(39547),p=i(60275),d=Math.ceil,y=Math.max;const m=function(e,t,i){t=(i?(0,l.Z)(e,t,i):void 0===t)?1:y((0,p.Z)(t),0);var o=null==e?0:e.length;if(!o||t<1)return[];for(var a=0,n=0,s=Array(d(o/t));a<o;)s[n++]=(0,c.Z)(e,a,a+=t);return s};var u=i(81212),g=i(34906),v=i(97188),w=i(75538),T=i(62190),b=i(38734);const f=new T._P("hotsearch/types",6e5);var A=i(57268);const L=(0,h.E0)("widget-hotsearch"),H=(0,a.Q_)(r.BU.hotsearch,{syncStorage:{watch:["trigger","all","homeType"]},syncCloud:{watch:["trigger","homeType"]},state:()=>({trigger:[],modalShow:!1,modalState:{size:"m",openType:"edit"},all:s,loading:!1,modalActiveType:"",homeActiveType:"",homeType:s[0].type}),getters:{allList(){return this.all.map((e=>({...e,selected:e.type===this.homeType})))},sortedAllList(){return[this.allList.find((e=>e.type===this.homeType)),...this.allList.filter((e=>e.type!==this.homeType))]},notHomeTypesList(){return this.all.map((e=>e.type)).filter((e=>e!==this.homeType))},getListItem:e=>t=>{const i=e.all.find((e=>e.type===t));return i||null},getHomeListItem:e=>t=>{const i=e.all.find((e=>e.type===t));return i?{...i,list:m(i.list,5)}:null}},actions:{changeHomeType(e){this.homeType=e,this.homeActiveType=e},addToHome(e,t){(0,w.i)().saveIcon({type:"widget",name:L.title,widgetSize:t,widgetName:L.name,origin:"add",widgetData:e})},async reqAll(){const[e,t]=await(async()=>{try{if(f.isLocked)return["locked error"];const e=await b.hj.get(`${n.H}hotsearch/types`,{},{_delay:0});if(0===e.code&&e.data.list.length>0)return f.setLock(),[null,e.data.list.map((e=>({...e,icon:n.c1+e.icon})))];throw e}catch(e){return["catch error"]}})();if(e||!t)return;const i=t.map((e=>{const{list:t,expired:i,updatetime:o,...a}=e;return a})),o=this.all.map((e=>{const{list:t,expired:i,updatetime:o,...a}=e;return a}));if((0,u.Z)(i,o))return;const a=new Map;this.all.forEach((e=>{e.list.length>0&&Date.now()>e.expired&&a.set(e.type,e)})),this.all=t.map((e=>{const t=a.get(e.type);return t?(e.list=t.list,e.expired=t.expired,e.updatetime=t.updatetime):(e.list=[],e.expired=0,e.updatetime=0),e}))},async reqHotsearchList(e){const t=this.getListItem(e);if(!t)return;if(Date.now()<t.expired)return;const[i,o]=await(async e=>{try{const t=await b.hj.get(`${n.H}hotsearch/list`,{type:e},{_delay:0});if(0===t.code&&t.data.list.length>0)return[null,t.data];throw t}catch(e){return["catch error"]}})(e);if(i||!o)return;this.all.some((t=>{if(t.type===e)return t.list=o.list,t.expired=(0,g.Z)(o.expired,Date.now()+12e4,Date.now()+36e5),t.updatetime=o.updatetime,!0}))&&(this.all=[...this.all])},openModal(e,t){this.reqAll(),t?this.setModalActive(t):this.setModalActive(this.all[0].type),this.modalState=e,this.modalShow=!0},closeModal(){this.modalShow=!1},setModalActive(e){this.reqHotsearchList(e),this.modalActiveType=e},switchHomeActive(e){if("next"===e&&this.homeActiveType!==(0,v.Z)(this.notHomeTypesList)){const e=this.notHomeTypesList.findIndex((e=>e===this.homeActiveType));this.homeActiveType=this.notHomeTypesList[e+1]}else if("prev"===e&&this.homeActiveType!==this.homeType){const e=this.notHomeTypesList.findIndex((e=>e===this.homeActiveType));e>0&&(this.homeActiveType=this.notHomeTypesList[e-1]),0===e&&(this.homeActiveType=this.homeType)}this.reqHotsearchList(this.homeActiveType)}}});(0,A.YP)((()=>H().homeType),(e=>{H().reqHotsearchList(e)}))},39547:(e,t,i)=>{i.d(t,{Z:()=>h});var o=i(57422),a=i(60385),n=i(20684),s=i(9860);const h=function(e,t,i){if(!(0,s.Z)(i))return!1;var h=typeof t;return!!("number"==h?(0,a.Z)(i)&&(0,n.Z)(t,i.length):"string"==h&&t in i)&&(0,o.Z)(i[t],e)}},34906:(e,t,i)=>{i.d(t,{Z:()=>n});const o=function(e,t,i){return e==e&&(void 0!==i&&(e=e<=i?e:i),void 0!==t&&(e=e>=t?e:t)),e};var a=i(21774);const n=function(e,t,i){return void 0===i&&(i=t,t=void 0),void 0!==i&&(i=(i=(0,a.Z)(i))==i?i:0),void 0!==t&&(t=(t=(0,a.Z)(t))==t?t:0),o((0,a.Z)(e),t,i)}}}]);