"use strict";(globalThis.webpackChunkinfinity_hitab_client=globalThis.webpackChunkinfinity_hitab_client||[]).push([[6774],{66774:(e,t,l)=>{l.r(t);l(57334);var o=l(66155),i=l(68398),a=l(69753),s=l(36683),n=l(57268),c=l(29445),r=l(70284),u=l(94209),p=l(80661),d=l.n(p),v=l(55943),x=l(61045),w=l(10435),m=l(94766);const h={class:"weather-modal-main hi-scroll h-full w-full overflow-x-hidden leading-none"},f={class:"content relative pt-[20px]"},y={class:"update-time relative h-[14px] text-center font-ali-55 text-color-t3"},_={class:"now relative my-[60px] flex h-[72px] justify-between pl-[56px]"},g={class:"flex items-center"},S={class:"mr-[48px] font-ali-75 text-[72px] text-color-t1"},b={class:"flex h-full flex-col justify-between pt-[4px] pb-[12px]"},U={class:"flex items-center text-color-t2"},k={class:"mr-[12px]"},C={class:"mr-[24px]"},D=["src"],z={class:"font-ali-55 text-color-t3"},Z={class:"mr-[24px]"},W={class:"mr-[24px]"},H={class:"mr-[24px]"},Y={key:0,class:"mr-[24px]"},j={key:1,class:"mr-[24px]"},M={class:"text-[16px] text-color-t1"},I=(e=>((0,n.dD)("data-v-a519de30"),e=e(),(0,n.Cn)(),e))((()=>(0,n._)("div",{class:"search-icon ml-[16px] flex h-[20px] w-[20px] items-center justify-center rounded-[6px] bg-color-white dark:bg-opacity-20"},[(0,n._)("i",{class:"iconfont icon-toggle_icon text-[12px] text-color-t2"})],-1))),F={class:"hour relative"},q={class:"ml-[56px] text-color-t2"},T={class:"inline-flex h-[160px] flex-nowrap items-center px-[36px] font-ali-55 text-color-t3"},$=["src"],B={class:"mt-[20px]"},K={class:"mt-[12px]"},A={class:"day mt-[40px]"},L={class:"ml-[56px] text-color-t2"},P={class:"mx-[36px] flex h-[160px] items-center justify-between font-ali-55 text-color-t3"},V=["src"],N={class:"mt-[20px]"},R={class:"mt-[12px]"},J=(0,n.aZ)({setup(e){v.ZP.use(x.Z);const t=(0,c.iH)(),l=(0,c.iH)(d()().format("YYYY-MM-DD HH:mm:ss")),o=(0,r.useWeatherStore)(),{activeNow:i,activeDay:a,activeHour:s,activeTempRange:p,activeCityLongName:J}=(0,w.Jk)(o);let O,X;return(0,n.bv)((()=>{O=new v.ZP(t.value,{scrollX:!0,scrollY:!1,mouseWheel:!0,bounce:!1,momentum:!1}),window.setInterval((()=>{l.value=d()().format("YYYY-MM-DD HH:mm:ss")}),1e3)})),(0,n.Ah)((()=>{X&&(clearInterval(X),X=void 0)})),(0,n.YP)((()=>{var e,t;return null===(e=s.value)||void 0===e||null===(t=e.list)||void 0===t?void 0:t.length}),(()=>{(0,n.Y3)((()=>{var e;null===(e=O)||void 0===e||e.refresh()}))})),(e,r)=>{var d,v,x,w,O,X,E,G,Q,ee,te,le,oe;return(0,n.wg)(),(0,n.iD)("section",h,[(0,n._)("div",f,[(0,n._)("div",{class:(0,u.C_)([[(0,c.SU)(m.i7)("modal",null===(d=(0,c.SU)(i))||void 0===d?void 0:d.type)],"absolute top-0 left-0 right-0 h-[260px] transition-[background]"])},null,2),(0,n._)("div",y,(0,u.zw)(l.value),1),(0,n._)("div",_,[(0,n._)("div",g,[(0,n._)("div",S,(0,u.zw)(null===(v=(0,c.SU)(i))||void 0===v?void 0:v.temp),1),(0,n._)("div",b,[(0,n._)("div",U,[(0,n._)("span",k,(0,u.zw)(null===(x=(0,c.SU)(i))||void 0===x?void 0:x.text),1),(0,n._)("span",C,(0,u.zw)((0,c.SU)(p)),1),(0,n._)("img",{class:"h-[32px] w-[32px]",src:(0,c.SU)(m.m_)(null===(w=(0,c.SU)(i))||void 0===w?void 0:w.icon)},null,8,D)]),(0,n._)("div",z,[(0,n._)("span",Z,(0,u.zw)((null===(O=(0,c.SU)(i))||void 0===O?void 0:O.windDir)+"："+(null===(X=(0,c.SU)(i))||void 0===X?void 0:X.windScale)),1),(0,n._)("span",W,(0,u.zw)("风速："+(null===(E=(0,c.SU)(i))||void 0===E?void 0:E.windSpeed)),1),(0,n._)("span",H,(0,u.zw)("相对湿度："+(null===(G=(0,c.SU)(i))||void 0===G?void 0:G.humidity)),1),"rain"===(null===(Q=(0,c.SU)(i))||void 0===Q?void 0:Q.type)?((0,n.wg)(),(0,n.iD)("span",Y,(0,u.zw)("当前降水量："+(null===(ee=(0,c.SU)(i))||void 0===ee?void 0:ee.precip)),1)):((0,n.wg)(),(0,n.iD)("span",j,(0,u.zw)("大气压强："+(null===(te=(0,c.SU)(i))||void 0===te?void 0:te.pressure)+"hPa"),1))])])]),(0,n._)("div",{class:"absolute right-0 mr-[56px] flex h-[20px] cursor-pointer items-center",onClick:r[0]||(r[0]=e=>(0,c.SU)(o).setSearchModal(!0))},[(0,n._)("div",M,(0,u.zw)((0,c.SU)(J)),1),I])]),(0,n._)("div",F,[(0,n._)("h1",q,(0,u.zw)("24小时预报"),1),(0,n._)("div",{ref_key:"wrapperRef",ref:t,"overflow-hidden":"",class:"box"},[(0,n._)("div",T,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(null===(le=(0,c.SU)(s))||void 0===le?void 0:le.list,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e.fxTime,class:"flex min-w-[78px] flex-shrink-0 flex-col items-center rounded-[12px] px-[20px] py-[20px] hover:bg-color-m2 hover:bg-opacity-[0.06]"},[(0,n._)("img",{class:"h-[32px] w-[32px]",src:(0,c.SU)(m.m_)(e.icon)},null,8,$),(0,n._)("span",B,(0,u.zw)(e.temp),1),(0,n._)("span",K,(0,u.zw)(e.fxTimeStr),1)])))),128))])],512)]),(0,n._)("div",A,[(0,n._)("h1",L,(0,u.zw)("未来7天预报"),1),(0,n._)("div",P,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(null===(oe=(0,c.SU)(a))||void 0===oe?void 0:oe.list,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e.fxDate,class:"flex flex-col items-center rounded-[12px] px-[20px] py-[20px] hover:bg-color-m2 hover:bg-opacity-[0.06]"},[(0,n._)("img",{class:"h-[32px] w-[32px]",src:(0,c.SU)(m.m_)(e.iconDay)},null,8,V),(0,n._)("span",N,(0,u.zw)(`${e.tempMax} ~ ${e.tempMin}`),1),(0,n._)("span",R,(0,u.zw)(e.fxDateStr),1)])))),128))])])])])}}});const O=(0,l(76911).Z)(J,[["__scopeId","data-v-a519de30"]]);var X=l(40108),E=l(19102),G=l(51930);var Q=l(26199);const ee={key:0,class:"iconfont icon-position_icon absolute top-[-4px] left-[-4px] text-[20px] text-color-t2"},te={class:"flex max-w-[210px] flex-col justify-between text-color-t2"},le={class:"flex items-center"},oe={class:"text-dot"},ie=["src"],ae={class:"font-ali-55 text-[12px]"},se={class:"mr-[4px]"},ne={class:"flex items-center text-color-t1"},ce={class:"ml-[12px] text-[28px]"},re=(0,n.aZ)({props:{city:null,location:{type:Boolean,default:!1}},setup(e){const t=e,l=(0,r.useWeatherStore)(),o=(0,n.Fl)((()=>l.getCityWeather(t.city.cid))),i=(0,n.Fl)((()=>{var e;return null===(e=o.value)||void 0===e?void 0:e.now})),a=(0,n.Fl)((()=>{var e;return null===(e=o.value)||void 0===e?void 0:e.day})),s=(0,n.Fl)((()=>{var e;if(null!==(e=a.value)&&void 0!==e&&e.list[0]){var t,l;const e=null===(t=a.value)||void 0===t?void 0:t.list[0].tempMin;return`${null===(l=a.value)||void 0===l?void 0:l.list[0].tempMax} ~ ${e}`}return""})),p=(0,n.Fl)((()=>t.city.adm2===t.city.name?t.city.name:t.city.adm2+" · "+t.city.name)),d=(0,c.iH)(!1),v=(0,n.Fl)((()=>({remove:{text:"删除",handler(){l.removeCity(t.city.cid)}}}))),x=(0,n.Fl)((()=>t.location&&l.activeCityId===m.zI||!t.location&&l.activeCityId===t.city.cid)),w=()=>{d.value||x.value||(l.setActive(t.location?m.zI:t.city.cid),setTimeout((()=>{l.setSearchModal(!1)}),200))};return(e,l)=>{var o,a,r,h;const f=Q.Z;return(0,n.wg)(),(0,n.iD)("section",{class:(0,u.C_)([[(0,c.SU)(m.i7)("card",null===(o=(0,c.SU)(i))||void 0===o?void 0:o.type),{"cursor-pointer":!(0,c.SU)(x)}],"weather-modal-card group relative mb-[12px] flex h-[80px] justify-between rounded-[8px] px-[20px] pt-[18px] pb-[20px]"]),onClick:w},[(0,c.SU)(x)?((0,n.wg)(),(0,n.iD)("i",ee)):(0,n.kq)("",!0),(0,n._)("div",te,[(0,n._)("div",le,[(0,n._)("span",oe,(0,u.zw)((0,c.SU)(p)+(t.location?"（我的位置）":"")),1),(0,n._)("img",{class:"ml-[8px] h-[20px] w-[20px]",src:(0,c.SU)(m.m_)(null===(a=(0,c.SU)(i))||void 0===a?void 0:a.icon)},null,8,ie)]),(0,n._)("div",ae,[(0,n._)("span",se,(0,u.zw)(null===(r=(0,c.SU)(i))||void 0===r?void 0:r.text),1),(0,n._)("span",null,(0,u.zw)((0,c.SU)(s)),1)])]),(0,n._)("div",ne,[t.location||(0,c.SU)(x)?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(f,{key:0,show:d.value,"onUpdate:show":l[0]||(l[0]=e=>d.value=e),class:"",options:(0,c.SU)(v)},{reference:(0,n.w5)((()=>[(0,n._)("button",{class:(0,u.C_)(d.value?"block":"hidden group-hover:block")},[(0,n._)("i",{class:(0,u.C_)([[d.value?"text-opacity-80":"text-opacity-60 hover:text-opacity-80"],"iconfont icon-single_hover_icon text-[20px] text-color-t1"])},null,2)],2)])),_:1},8,["show","options"])),(0,n._)("div",ce,(0,u.zw)(null===(h=(0,c.SU)(i))||void 0===h?void 0:h.temp),1)])],2)}}}),ue=re,pe={key:0,class:"loading absolute inset-0 flex items-center justify-center"},de=[(0,n._)("i",{class:"iconfont icon-loading_small animate-[spin_1.2s_linear_infinite] text-[40px] text-color-m2 text-opacity-20"},null,-1)],ve={key:1,class:"content relative mx-auto mt-[60px] w-[352px]"},xe={class:"citys mt-[33px]"},we=["onClick"],me={class:"text-color-t2"},he=(0,n.aZ)({setup(e){const t=(0,c.iH)(!1),l=(0,r.useWeatherStore)(),{searchValue:o,updateSearchValue:i,searchListShow:s,cityList:p}=(()=>{const e=(0,c.iH)(""),t=(0,c.iH)([]),l=(0,n.Fl)((()=>!!e.value));return{searchValue:e,searchListShow:l,cityList:t,updateSearchValue:async l=>{if(e.value=l,l){const[e,o]=await(0,G.fN)(l);if(e||!o)return void(t.value=[]);t.value=o}else setTimeout((()=>{t.value=[]}),0)}}})(),d=()=>{t.value||(l.setSearchModal(!1),i(""))};return(e,r)=>{const v=E.Z,x=X.Z,w=a.Z;return(0,n.wg)(),(0,n.j4)(w,{class:"absolute inset-0",ani:"fade",show:(0,c.SU)(l).searchModalShow},{default:(0,n.w5)((()=>[(0,n._)("div",{class:"mask absolute inset-0 bg-color-b3 bg-opacity-95",onClick:d}),t.value?((0,n.wg)(),(0,n.iD)("div",pe,de)):((0,n.wg)(),(0,n.iD)("div",ve,[(0,n.Wm)(v,{value:(0,c.SU)(o),icon:"icon-magnifier_icon  !text-color-t2",placeholder:"搜索",class:"","onUpdate:value":(0,c.SU)(i)},null,8,["value","placeholder","onUpdate:value"]),(0,n._)("div",xe,[(0,n.Wm)(w,{show:(0,c.SU)(s)},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,c.SU)(p),(e=>((0,n.wg)(),(0,n.iD)("div",{key:e.cid,class:"mb-[12px] flex h-[36px] cursor-pointer items-center justify-between rounded-[8px] px-[12px] transition-colors hover:bg-color-m2 hover:bg-opacity-[0.08]",onClick:o=>(async e=>{t.value=!0;try{await l.addCity(e)}catch(e){}t.value=!1,l.setActive(e.cid),l.setSearchModal(!1),i("")})(e)},[(0,n._)("div",me,(0,u.zw)((e.name===e.adm2?"":`${e.adm2}-`)+e.name),1)],8,we)))),128)),(0,c.SU)(s)&&0===(0,c.SU)(p).length?((0,n.wg)(),(0,n.j4)(x,{key:0,class:"mt-[80px]",icon:"icon-fail_icon",desc:"暂无搜索结果"},null,8,["desc"])):(0,n.kq)("",!0)])),_:1},8,["show"]),(0,n.Wm)(w,{show:!(0,c.SU)(s)},{default:(0,n.w5)((()=>[(0,n.Wm)(ue,{location:!0,city:(0,c.SU)(l).locationCity},null,8,["city"]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,c.SU)(l).addedCity,(e=>((0,n.wg)(),(0,n.j4)(ue,{key:e.cid,location:!1,city:e},null,8,["city"])))),128))])),_:1},8,["show"])])]))])),_:1},8,["show"])}}}),fe={class:"h-full w-full bg-color-b3"},ye=(0,n.aZ)({setup(e){const t=(0,r.useWeatherStore)();return(0,n.bv)((async()=>{"location"===t.activeCityId&&await t.reqLocation(!0),t.reqWeather(t.activeCid),setInterval((()=>{t.reqWeather(t.activeCid)}),3e5)})),(0,n.YP)((()=>t.activeCid),(()=>{t.reqWeather(t.activeCid)})),(e,l)=>{const o=s.Z,i=a.Z;return(0,n.wg)(),(0,n.j4)(i,{class:"widget-weather-modal",ani:"fade",show:(0,c.SU)(t).modalShow},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{"full-screen-btn":!1,onOnClose:l[0]||(l[0]=e=>(0,c.SU)(t).setModal(!1))},{default:(0,n.w5)((()=>[(0,n._)("div",fe,[(0,n.Wm)(O),(0,n.Wm)(he)])])),_:1})])),_:1},8,["show"])}}});var _e=l(94974),ge=l(58693),Se=l(62190);(()=>{const e=(0,Se.em)(),t=(0,i.ri)(ye);(0,ge.f)(t),t.use(_e.M),t.use(o.Z),t.mount(e)})()},26199:(e,t,l)=>{l.d(t,{Z:()=>p});var o=l(57268),i=l(94209);const a={class:"hi-select-menu overflow-hidden rounded-[8px] bg-color-b5 p-[4px] shadow-popover"},s=["onClick"],n=(0,o.aZ)({props:{options:null},emits:["update:value","menu-click"],setup(e,t){let{emit:l}=t;const n=e;return(e,t)=>((0,o.wg)(),(0,o.iD)("div",a,[(0,o._)("div",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.options,((e,t)=>((0,o.wg)(),(0,o.iD)(o.HY,{key:t},[e?((0,o.wg)(),(0,o.iD)("button",{key:0,type:"button",class:(0,i.C_)(["h-[32px] w-full cursor-pointer rounded-[4px] px-[16px] text-left text-[14px] text-color-t2 hover:bg-color-m2 hover:bg-opacity-[0.06] hover:text-color-t1 not-last:mb-[4px]",{[`text-color-${e.color}`]:e.color}]),onClick:e=>{return l("update:value",o=t),l("menu-click"),void(null===(i=(a=n.options[o]).handler)||void 0===i||i.call(a));var o,i,a}},(0,i.zw)(e.text),11,s)):(0,o.kq)("",!0)],64)))),128))])]))}});var c=l(29445),r=l(98567),u=l(63582);const p=(0,o.aZ)({props:{show:{type:Boolean},value:{default:""},options:{default:void 0},showArrow:{type:Boolean,default:!1},placement:{default:"bottom-end"},menuClass:{default:""},onlyTheme:{default:void 0}},emits:["update:show","update:value"],setup(e,t){let{emit:l}=t;const a=e,s=(0,o.Fl)({get:()=>a.show,set(e){l("update:show",e)}}),p=(0,o.Fl)({get:()=>a.value,set(e){l("update:value",e)}}),d=(0,c.iH)(0),v=(0,c.iH)(0);return(0,o.YP)(s,(e=>{e&&(v.value=(0,r.K)(),d.value=(0,r.K)())})),(t,l)=>{const r=n,x=(0,o.up)("van-popover");return(0,o.wg)(),(0,o.j4)(x,{show:(0,c.SU)(s),"onUpdate:show":l[2]||(l[2]=e=>(0,c.dq)(s)?s.value=e:null),placement:e.placement,"show-arrow":e.showArrow,style:(0,i.j5)({zIndex:d.value,...e.onlyTheme?(0,c.SU)(u.g)(e.onlyTheme):null}),overlay:"","overlay-class":"!bg-[transparent]","overlay-style":{zIndex:v.value}},{default:(0,o.w5)((()=>[(0,o.WI)(t.$slots,"default",{},(()=>[(0,o.Wm)(r,{value:(0,c.SU)(p),"onUpdate:value":l[0]||(l[0]=e=>(0,c.dq)(p)?p.value=e:null),options:a.options,class:(0,i.C_)(a.menuClass),onMenuClick:l[1]||(l[1]=e=>s.value=!1)},null,8,["value","options","class"])]))])),reference:(0,o.w5)((()=>[(0,o.WI)(t.$slots,"reference")])),_:3},8,["show","placement","show-arrow","style","overlay-style"])}}})},36683:(e,t,l)=>{l.d(t,{Z:()=>d});var o=l(64139),i=l(57268),a=l(94209);const s={class:"hi-widget-dialog absolute inset-0 z-20 flex h-full w-full min-w-[840px] items-center justify-center"},n={class:"pointer-events-auto relative z-[-1] h-full w-full bg-color-b4"},c={class:"pointer-events-auto absolute top-[20px] left-[20px] flex"},r=[(e=>((0,i.dD)("data-v-c8f1aacc"),e=e(),(0,i.Cn)(),e))((()=>(0,i._)("i",{class:"iconfont icon-close_window_icon text-[12px] text-color-white opacity-0 transition-opacity group-hover:opacity-100"},null,-1)))],u=(0,i.aZ)({inheritAttrs:!1}),p=(0,i.aZ)({...u,props:{fullScreen:{type:Boolean,default:!1},fullScreenBtn:{type:Boolean,default:!0}},emits:["on-close","on-fullscreen"],setup(e,t){let{emit:l}=t;const u=e,p=()=>{l("on-close")},d=()=>{l("on-fullscreen",!u.fullScreen)};return(e,t)=>{const l=o.Z;return(0,i.wg)(),(0,i.iD)("section",s,[(0,i.Wm)(l,{show:!0,opacity:60,"z-index":-2,onClick:p}),(0,i._)("div",{class:(0,a.C_)(["container pointer-events-none max-h-full max-w-full overflow-hidden",[u.fullScreen?"h-full w-full":"h-[640px] max-h-[calc(100vh-40px)] w-[1024px] max-w-[calc(100vw-40px)] rounded-[12px]",e.$attrs.class]])},[(0,i._)("div",n,[(0,i.WI)(e.$slots,"default"),(0,i._)("div",c,[(0,i._)("div",{class:"group flex h-[16px] w-[16px] items-center justify-center rounded-[50%] bg-[#FF7330]",onClick:p},r),u.fullScreenBtn?((0,i.wg)(),(0,i.iD)("div",{key:0,class:"group ml-[12px] flex h-[16px] w-[16px] items-center justify-center rounded-[50%] bg-[#34C759]",onClick:d},[(0,i._)("i",{class:(0,a.C_)([[u.fullScreen?"icon-reduction_window_icon":"icon-maximize_window_icon"],"iconfont text-[12px] text-color-white opacity-0 transition-opacity group-hover:opacity-100"])},null,2)])):(0,i.kq)("",!0)])])],2)])}}});const d=(0,l(76911).Z)(p,[["__scopeId","data-v-c8f1aacc"]])}}]);