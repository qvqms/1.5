"use strict";(globalThis.webpackChunkinfinity_hitab_client=globalThis.webpackChunkinfinity_hitab_client||[]).push([[9047],{41865:(e,o,t)=>{t.r(o);t(57334);var r=t(66155),i=t(68398),n=t(94974),l=t(69753),a=t(36683),c=t(57268),s=t(29445),d=t(19102),u=t(48885),b=t(89745),g=t(26199),p=t(94209);const h={class:"flex min-h-[20px] items-center justify-between leading-[20px]"},m={class:"title text-dot mr-[12px] font-ali-75 text-[16px] text-color-note-t1"},v={class:"text-dot mt-[10px] mb-[8px] min-h-[14px] font-ali-55 text-color-t2"},x={class:"font-ali-55 text-color-t3"},f=(0,c.aZ)({props:{item:null,active:{type:Boolean}},setup(e){const o=e,t=(0,b.useNoteStore)(),r=(0,s.iH)(!1),i=(0,c.Fl)((()=>({edit:{text:o.item.isTop?"取消置顶":"置顶",handler(){t.setTop(o.item.id)}},remove:{text:"删除",handler(){t.deleteNote(o.item.id)}}})));return(e,t)=>{const n=g.Z;return(0,c.wg)(),(0,c.iD)("section",{class:(0,p.C_)([[o.active?"bg-color-m2 bg-opacity-[0.06]":o.item.isTop?"bg-color-m2 bg-opacity-[0.08]":"hover:bg-color-m2 hover:bg-opacity-[0.06]"],"sidebar-list-item group relative w-[283px] rounded-[8px] px-[12px] pt-[14px] pb-[16px] leading-none"])},[(0,c._)("div",h,[(0,c._)("h1",m,(0,p.zw)(o.item.title),1),(0,c.Wm)(n,{show:r.value,"onUpdate:show":t[0]||(t[0]=e=>r.value=e),class:"",options:(0,s.SU)(i)},{reference:(0,c.w5)((()=>[(0,c._)("button",{class:(0,p.C_)(r.value?"block":"hidden group-hover:block")},[(0,c._)("i",{class:(0,p.C_)([[r.value?"text-opacity-80":"text-opacity-60 hover:text-opacity-80"],"iconfont icon-single_hover_icon text-[20px] text-color-t1"])},null,2)],2)])),_:1},8,["show","options"])]),(0,c._)("div",v,(0,p.zw)(o.item.desc),1),(0,c._)("div",x,(0,p.zw)(o.item.timeStr),1)],2)}}});var w=t(76911);const k=(0,w.Z)(f,[["__scopeId","data-v-2dc1d842"]]),y={class:"note-modal-sidbar"},$={class:"relative h-[112px] overflow-hidden border-b-[1px] border-color-m2 border-opacity-[0.06] px-[20px] dark:border-opacity-[0.08]"},_=[(e=>((0,c.dD)("data-v-1135ed12"),e=e(),(0,c.Cn)(),e))((()=>(0,c._)("i",{class:"iconfont icon-pen_icon text-[20px] text-color-note-t1"},null,-1)))],z=(0,c.aZ)({setup(e){const o=(0,b.useNoteStore)(),t=(0,c.Fl)({get:()=>o.searchValue,set(e){o.setSearchValue(e)}}),r=(0,s.iH)(),i=(0,u.Z)((()=>{const e=o.saveNote({title:"新建笔记",content:"",desc:"",isTop:!1});o.setActive(e),(0,c.Y3)((()=>{var t;null===(t=r.value)||void 0===t||t.scrollTo({top:e*r.value.scrollHeight/o.notes.length,behavior:"smooth"}),requestAnimationFrame((()=>{var e;null===(e=document.querySelector(".note-title-input"))||void 0===e||e.focus()}))}))}),1e3,{leading:!0,trailing:!1});return(e,n)=>{const l=d.Z;return(0,c.wg)(),(0,c.iD)("section",y,[(0,c._)("div",$,[(0,c.Wm)(l,{value:(0,s.SU)(t),"onUpdate:value":n[0]||(n[0]=e=>(0,s.dq)(t)?t.value=e:null),icon:"icon-magnifier_icon  !text-color-t2",placeholder:"搜索","always-show-close-btn":"",class:"mt-[56px] w-[260px] flex-1"},null,8,["value","placeholder"]),(0,c._)("div",{class:"absolute top-[14px] right-[20px] flex h-[28px] w-[28px] cursor-pointer items-center justify-center rounded-[6px] transition-colors hover:bg-color-m2 hover:bg-opacity-[0.06]",onClick:n[1]||(n[1]=function(){return(0,s.SU)(i)&&(0,s.SU)(i)(...arguments)})},_)]),(0,c._)("div",{ref_key:"listRef",ref:r,class:"list hi-scroll overflow-x-hidden p-[8px]"},[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)((0,s.SU)(o).sidebarList,((e,t)=>((0,c.wg)(),(0,c.j4)(k,{key:e.id,active:e.id===(0,s.SU)(o).activeId,item:e,class:"not-last:mb-[4px]",onClick:e=>(0,s.SU)(o).setActive(t)},null,8,["active","item","onClick"])))),128))],512)])}}}),S=(0,w.Z)(z,[["__scopeId","data-v-1135ed12"]]);var U=t(13528),I=t(10233),L=t(49951),T=t(3969),W=t(74335),C=t(31398),Z=t(81470),q=t(62866),M=t(16304),P=t(11868),j=t(6124),A=t(74622),D=t(59066),N=t(72),E=t(88500),H=t(9229),K=t(66253),F=t(52254),R=t(75063),G=t(45911),B=t(32737),X=t(12533),Y=t(59808);const O={h1:{label:"一级标题",icon:"icon-h1"},h2:{label:"二级标题",icon:"icon-h3"},h3:{label:"三级标题",icon:"icon-h3"},loading:{label:"loading",icon:"icon-loading"},quote:{label:"引用",icon:"icon-qmx"},code:{label:"代码块",icon:"icon-code"},table:{label:"表格",icon:"icon-sheet"},divider:{label:"水平线",icon:"icon-line"},image:{label:"上传图片",icon:"icon-picture"},brokenImage:{label:"broken image",icon:"icon-picture"},bulletList:{label:"无序列表",icon:"icon-bullet_list"},orderedList:{label:"有序列表",icon:"icon-ordered_list"},taskList:{label:"任务列表",icon:"icon-task_list"},bold:{label:"粗体",icon:"icon-bold"},italic:{label:"斜体",icon:"icon-tilt"},inlineCode:{label:"inline code",icon:"icon-code"},strikeThrough:{label:"删除线",icon:"icon-strikethrough"},link:{label:"链接",icon:"icon-link"},leftArrow:{label:"left arrow",icon:"icon-plus_left"},rightArrow:{label:"right arrow",icon:"icon-plus_right"},upArrow:{label:"up arrow",icon:"icon-plus_up"},downArrow:{label:"down arrow",icon:"icon-drop_down"},alignLeft:{label:"align left",icon:"icon-align_left"},alignRight:{label:"align right",icon:"icon-align_right"},alignCenter:{label:"align center",icon:"icon-center"},delete:{label:"delete",icon:"icon-delete"},select:{label:"选择",icon:"icon-select"},unchecked:{label:"unchecked",icon:"icon-uncheck"},checked:{label:"checked",icon:"icon-checking"},undo:{label:"撤销",icon:"icon-undo"},redo:{label:"重做",icon:"icon-redo"},liftList:{label:"减少缩进",icon:"icon-left_list"},sinkList:{label:"增加缩进",icon:"icon-right_list"}};var V=t(4);const{dark:Q,light:J}=V,ee={shadow:"none",line:`rgb(${J["--color-m2"]} / 0.08)`,primary:J["--color-note-t1"],secondary:J["--color-t1"],neutral:J["--color-t2"],solid:J["--color-t3"],background:J["--color-b4"],surface:J["--color-b5"]},oe={shadow:"none",line:`rgb(${Q["--color-m2"]} / 0.08)`,primary:Q["--color-note-t1"],secondary:Q["--color-t1"],neutral:Q["--color-t2"],solid:Q["--color-t3"],background:Q["--color-b4"],surface:Q["--color-b5"]},te={typography:["ali-65"],code:["ali-65"]},re={radius:"4px",lineWidth:"1px"},ie=e=>(o,t)=>{const{css:r}=o,i=e?oe:ee;t.set(L.tP,(e=>{if(!e)return;const[o,t]=e,r=i[o];return r?"none"===r?"rgba(0,0,0,0)":r.startsWith("rgb")?r:`rgb(${r} / ${t||1})`:void 0})),t.set(L.dz,(e=>{if(e)return re[e]})),t.set(L.Az,(e=>{if(e)return te[e].join(", ")})),t.set(L.eK,(()=>r`
      scrollbar-width: thin;
      scrollbar-color: rgb(var(--color-t1) / 0.2) transparent;

      &::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background-color: transparent;
        border: 1px dashed transparent;
        background-clip: padding-box;
        &:hover {
          background-color: rgb(var(--color-t1) / 0.4);
          background-clip: border-box;
        }
      }
      &:hover {
        &::-webkit-scrollbar-thumb {
          background-color: rgb(var(--color-t1) / 0.2);
          &:hover {
            background-color: rgb(var(--color-t1) / 0.4);
            background-clip: border-box;
          }
        }
      }
      &::-webkit-scrollbar-track {
        background-color: transparent;
      }
    `)),t.set(L.I9,(()=>{const e=t.get(L.dz,"lineWidth"),o=e=>t.get(L.tP,["shadow",e]);return r`
      box-shadow: 0 ${e} ${e} ${o(.14)},
        0 2px ${e} ${o(.12)}, 0 ${e} 3px ${o(.2)};
    `})),t.set(L.UT,(e=>{const o=t.get(L.dz,"lineWidth"),i=t.get(L.tP,["line"]);return e?r`
      ${`border-${e}`}: ${o} solid ${i};
    `:r`
        border: ${o} solid ${i};
      `})),t.set(L.kS,(e=>{if(e)return(e=>{const o=O[e];if(!o)return;const t=document.createElement("span");return t.className=`icon iconfont ${o.icon}`,{dom:t,label:o.label}})(e)})),t.set(L._G,(()=>{((e,o)=>{const{injectGlobal:t,css:r}=o,i=(0,L.XN)(e),n=e.get(L.dz,"radius"),l=i("line",.1),a=i("secondary",.38),c=r`
    .math-block {
      background-color: rgb(var(--color-m2) / 0.05);
    }
    .ProseMirror-selectednode {
      outline: ${e.get(L.dz,"lineWidth")} solid ${l};
    }

    li.ProseMirror-selectednode {
      outline: none;
    }

    li.ProseMirror-selectednode::after {
      ${e.get(L.UT,void 0)};
    }

    & ::selection {
      background: ${a};
    }
  `,s=r`
    p {
      font-size: 1em;
      line-height: 1.5;
      letter-spacing: 0.5px;
    }
  `,d=r`
    blockquote {
      padding-left: 1.875em;
      line-height: 1.75em;
      border-left: 4px solid rgb(var(--color-note-t2) / 1);
      margin-left: 0;
      margin-right: 0;
      * {
        font-size: 1em;
        line-height: 1.5em;
      }
    }
  `,u=r`
    h1 {
      font-size: 3em;
      line-height: 1.167;
    }
    h2 {
      font-size: 2.5em;
      line-height: 1.2;
    }
    h3 {
      font-size: 2.125em;
      line-height: 1.05;
    }
    h4 {
      font-size: 1.75em;
      line-height: 1.14;
    }
    h5 {
      font-size: 1.5em;
      line-height: 1;
    }
    h6 {
      font-size: 1.25em;
      line-height: 1;
    }
    .heading {
      margin: 1em 0;
      font-weight: 400;
    }
  `,b=r`
    hr {
      height: ${e.get(L.dz,"lineWidth")};
      background-color: ${l};
      border-width: 0;
    }
  `,g=r`
    .list-item,
    .list-item > * {
      margin: 0.5em 0;
    }

    li {
      &::marker {
        color: ${i("primary")};
      }
    }

    .task-list-item {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      &_checkbox {
        margin: 0.5em 0.5em 0.5em 0;
        height: 1em;
      }
      .icon {
        font-size: 20px;
      }
    }
  `,p=r`
    .code-fence {
      background-color: rgb(var(--color-m2) / 0.05);
      .code-fence_selector-list-item:hover {
        background-color: rgb(var(--color-m2) / 0.05);
      }
      pre {
        font-family: ${e.get(L.Az,"code")};
        margin: 0 1.2em !important;
        white-space: pre;
        overflow: auto;
        ${e.get(L.eK,["x"])}

        color: ${i("neutral")};
        font-size: 0.875em;
        border-radius: ${n};

        code {
          line-height: 1.5;
          font-family: ${e.get(L.Az,"code")};
        }
      }
    }
  `,h=r`
    .image {
      display: inline-block;
      margin: 0 auto;
      object-fit: contain;
      width: 100%;
      position: relative;
      height: auto;
      text-align: center;
    }
  `,m=r`
    .code-inline {
      background-color: rgb(var(--color-note-t2) / 1);
      color: ${i("background")};
      border-radius: ${n};
      font-weight: 500;
      font-family: ${p};
      padding: 0 0.2em;
      font-size: 1.2em;
    }

    .strong {
      font-family: ali-75;
      color: rgb(var(--color-t1) / 1);
    }

    .link,
    a {
      color: rgb(var(--color-note-t2) / 1);
      cursor: pointer;
      text-decoration: underline;
      transition: all 0.2s ease-in-out;
      &:hover {
        color: rgb(var(--color-note-t1) / 1);
        background-color: transparent;
        box-shadow: none;
      }
    }

    .strike-through {
      text-decoration-color: rgb(var(--color-note-t1) / 0.8);
      color: rgb(var(--color-note-t2) / 0.8);
    }
  `,v=r`
    .footnote-definition {
      ${e.get(L.UT,void 0)};
      border-radius: ${e.get(L.dz,"radius")};
      background-color: ${i("background")};
      padding: 1em;
      display: flex;
      flex-direction: row;
      & > .footnote-definition_content {
        flex: 1;
        width: calc(100% - 1em);
        & > dd {
          margin-inline-start: 1em;
        }
        & > dt {
          color: ${i("secondary")};
          font-weight: 500;
        }
      }
      & > .footnote-definition_anchor {
        width: 1em;
      }
    }
  `,x=r`
    /* copy from https://github.com/ProseMirror/prosemirror-tables/blob/master/style/tables.css */
    .tableWrapper {
      overflow-x: auto;
      margin: 0;
      ${e.get(L.eK,["x"])}
      width: 100%;
      * {
        margin: 0;
        box-sizing: border-box;
        font-size: 1em;
      }
    }
    table {
      border-collapse: collapse;
      table-layout: fixed;
      width: 100%;
      overflow: auto;
      border-radius: ${e.get(L.dz,"radius")};
      p {
        line-height: unset;
      }
    }
    tr {
      ${e.get(L.UT,"bottom")};
    }
    td,
    th {
      padding: 0 1em;
      vertical-align: top;
      box-sizing: border-box;
      position: relative;

      min-width: 100px;
      ${e.get(L.UT,void 0)};
      text-align: left;
      line-height: 3;
      height: 3em;
    }
    th {
      background-color: rgb(var(--color-m2) / 0.05);
      font-family: ali-75;
    }
    .column-resize-handle {
      position: absolute;
      right: -2px;
      top: 0;
      bottom: 0;
      z-index: 20;
      pointer-events: none;
      background: ${i("secondary")};
      width: ${e.get(L.dz,"lineWidth")};
    }
    .resize-cursor {
      cursor: ew-resize;
      cursor: col-resize;
    }

    .selectedCell {
      &::after {
        z-index: 2;
        position: absolute;
        content: '';
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: ${i("secondary",.38)};
        pointer-events: none;
      }

      & ::selection {
        background: transparent;
      }
    }
  `,f=r`
    ol,
    ul {
      padding-left: 40px;
    }
    ol {
      list-style-type: decimal;
    }
    ul {
      list-style-type: disc;
      ul {
        list-style-type: circle;
        ul {
          list-style-type: square;
        }
      }
    }
    .emoji {
      display: inherit;
    }
  `,w=r`
    .milkdown-menu {
      background: rgb(var(--color-b4) / 1);
      border-top: 1px solid rgb(var(--color-m2) / 0.05);
      border-bottom: 1px solid rgb(var(--color-m2) / 0.05);
      border-left: none;
      border-right: none;
      padding: 3px 8px;
      .divider {
        background-color: rgb(var(--color-m2) / 0.08);
      }
      .icon {
        font-size: 24px;
      }
      & > .button {
        border-radius: 6px;
        transition-duration: 200ms;
        background-color: rgb(var(--color-b4) / 1);
        &.active,
        &:hover {
          background-color: rgb(var(--color-m2) / 0.05);
          color: rgb(var(--color-t2) / 1);
          color: rgb(var(--color-note-t1) / 1);
        }
      }
      .menu-selector-wrapper {
        border: none;
        &.fold .menu-selector {
          color: rgb(var(--color-t3) / 1);
        }
        .menu-selector {
          color: rgb(var(--color-t2) / 1);
          background-color: transparent;
          font-size: 14px;
          width: 8em;
          padding: 0 0.25em;
        }
      }
      .menu-selector .icon {
        font-size: inherit;
      }
      .menu-selector-list {
        overflow: hidden;
        border: none;
        background: rgb(var(--color-b5) / 1);
        box-shadow: 0px 2px 14px 0px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        padding: 0 4px;
      }
      .menu-selector-list-item {
        border-radius: 6px;
        margin: 4px auto;
        &:hover {
          background-color: rgb(var(--color-m2) / 0.05);
          // color: rgb(var(--color-t1) / 1);
        }
      }
    }
  `;(0,Y.le)(o);const k=r`
    .table-tooltip {
      margin-top: 70px;
      margin-left: 36px;
    }
    .tooltip,
    .table-tooltip {
      border: 1px solid rgb(var(--color-m2) / 0.05);
      box-shadow: 0px 2px 14px 0px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      .icon {
        font-size: 24px;
        line-height: 1.333;
        margin: 4px;
        width: 32px;
        height: 32px;
        border-radius: 4px;
        transition-duration: 150ms;
        &::after {
          background: transparent !important;
        }
        &.active,
        &:hover {
          color: rgb(var(--color-note-t1) / 1);
          background: rgb(var(--color-m2) / 0.05);
        }
      }
    }
    .slash-dropdown {
      box-shadow: 0px 2px 14px 0px rgba(0, 0, 0, 0.1);
      border: none;
      .icon {
        font-size: 20px;
      }
      .slash-dropdown-item.active {
        background: rgb(var(--color-m2) / 0.05);
      }
    }
    .tooltip-input {
      box-shadow: 0px 2px 14px 0px rgba(0, 0, 0, 0.1);
      border: none;
      button {
        border-radius: 4px;
      }
    }
    .milkdown-emoji-filter_item:hover {
      background: rgb(var(--color-m2) / 0.05);
    }
    .table-tooltip .icon-drop_down:before {
      content: \"\\e6e8\";
    }
  `,y=r`
    .paragraph .image-container {
      background-color: rgb(var(--color-m2) / 0.05);
    }
    .ProseMirror-widget .icon,
    .image-container .icon {
      font-size: 36px;
      color: rgb(var(--color-t2) / 0.6);
    }
    .milkdown-cell-point .icon-select:before {
      content: \"\\e6ed\";
      color: rgb(var(--color-t3) / 0.8);
    }
    .tableWrapper table .milkdown-cell-point.ProseMirror-widget::after {
      // background: rgb(28 28 30 / 0);
    }
  `;t`
        .milkdown-menu-wrapper {
            height: 100%;
            ${w}
        }
        .milkdown {
            position: relative;
            height: calc(100% - 64px);
            overflow: auto;
            box-shadow: none;
            color: rgb(var(--color-t2) / 1);
            background-color: rgb(var(--color-b4) / 1);
            ${f}
            ${e.get(L.eK,void 0)}
            ${c};

            ${k}
            ${y}
            .editor {
                min-height: 100%;
                outline: none;
                padding: 1.2em 1.5em 1.5em;
                & > * {
                    margin: 20px 0;
                }

                ${s};
                ${u};
                ${d};
                ${b};
                ${g};
                ${p};
                ${h};

                ${x};
                ${v};

                ${m};
            }
        }
    `})(t,o)})),(0,Y.v)(t,o)},ne=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(0,I.LS)(((o,t)=>ie(e)(o,t)))},le=ne(!1),ae=ne(!0);var ce=t(62190);const se=(0,ce.Gb)()({h1:{label:"一级标题",icon:"h1"},h2:{label:"二级标题",icon:"h2"},h3:{label:"三级标题",icon:"h3"},bulletList:{label:"无序列表",icon:"bulletList"},orderedList:{label:"有序列表",icon:"orderedList"},taskList:{label:"任务列表",icon:"taskList"},image:{label:"图片链接",icon:"image"},blockquote:{label:"引用",icon:"quote"},table:{label:"表格",icon:"table"},code:{label:"代码块",icon:"code"},divider:{label:"水平线",icon:"divider"}});var de=t(19053);let ue;const be=(e,o,t,r,i,n,l,a)=>(ue=I.ML.make().config((r=>{r.set(I.KP,e),r.set(I.Dn,o),r.update(I.i8,(e=>({...e,editable:()=>!t}))),r.get(P.QC).blur((e=>{const o=e.get(I.U7).state.doc.toJSON(),t=ge(o);n(t)})).markdownUpdated((0,G.Z)(((e,o)=>{null==i||i(o)}),300,{leading:!0,trailing:!0})).mounted((e=>{l(e)}))})).use(Z.r).use(F.r0.configure(R.p4,{input:{placeholder:"请输入链接",buttonText:"确认"}}).configure(R.BH,{input:{placeholder:"请输入图片链接",buttonText:"确认"},placeholder:"添加图片"})).use(P.X3).use(T.B).use(q.m8).use(W.o).use(D.M).use(j.mA).use(M.WY).use(K.ws.configure(K.GH,{enableHtmlFileUploader:!0,uploader:fe})).use(C.vY).use(E.Md).use(N.xI.configure(N.Eg,{config:e=>o=>{let{content:t,isTopLevel:r}=o;if(!r)return null;if(!t)return{placeholder:"输入“/”可插入内容"};const i=o=>{const{id:t=""}=o,r=se[t];return r&&(o.dom=(0,N.GK)(e.get(L.Xc),r.label,r.icon)),o};return t.startsWith("/")?"/"===t?{placeholder:"类型筛选",actions:(0,N.Wx)(e).map(i)}:{actions:(0,N.Wx)(e,t).map(i)}:null}})).use(r?ae:le).use(H.Q$).use(he(a)).use(A.GI.configure(A.wy,{config:A.u_.map((e=>e.map((e=>"select"===e.type&&"Heading"===e.text?{...e,text:"标题",options:[{id:"1",text:se.h1.label},{id:"2",text:se.h2.label},{id:"3",text:se.h3.label},{id:"0",text:"正文"}]}:("image"===e.icon&&(e.key=pe),e)))))})),ue),ge=e=>{let o="";const t=e=>{o.length>50||("text"===e.type?o+=` ${e.text}`:e.content&&e.content.forEach((e=>{t(e)})))};return t(e),o},pe=(0,I.uW)(),he=e=>()=>async o=>{await o.wait(I.rm);o.get(I.Xo).create(pe,(()=>me(e)))},me=e=>()=>{if(!e())return;const o=document.createElement("input");o.type="file",o.click(),o.addEventListener("change",(e=>{xe(e.target.files[0]).then((e=>{const o=ue.action((e=>e.get(I.U7))).state.tr;o.selection.empty||o.deleteSelection(),ue.action((t=>{const r=t.get(I.U7),i=t.get(I._z)(`![image](${e})`);if(!i)return;const n=r.state;r.dispatch(n.tr.replace(o.selection.from,o.selection.from,new B.p2(i.content,0,0)))}))}))}))},ve=new de.k,xe=async e=>{if(e.size>5242880)throw de.R.fail({message:"文件超出限制"}),new Error("limit size");ve.loading({message:"上传中",duration:6e4});const[o,t]=await(0,X.E)("user-note-img",e);if(ve.hide(),o)throw de.R.fail({message:"上传失败"}),new Error(o);return t},fe=async(e,o)=>{const t=[];for(let o=0;o<e.length;o++){const r=e.item(o);r&&(r.type.includes("image")&&t.push(r))}return await Promise.all(t.map((async e=>{const t=await xe(e),r=e.name;return o.nodes.image.createAndFill({src:t,alt:r})})))},we=(0,c.aZ)({props:{value:{default:""},isDark:{type:Boolean},beforeUploadImage:null},emits:["update:value","change-desc"],setup(e,o){let{emit:t}=o;const r=e,n=(0,s.iH)(null),l=(0,s.iH)();(0,c.bv)((()=>{setTimeout((()=>{const e=document.querySelector(".milkdown-menu");e&&e.addEventListener("wheel",ce.K1)}),20)}));const a=e=>{t("update:value",e)},d=e=>{t("change-desc",e)},u=e=>{n.value=e.get(I.o4)},b=(0,U.jE)((e=>be(e,r.value,!1,r.isDark,a,d,u,r.beforeUploadImage)));return(0,c.YP)((()=>r.isDark),(()=>{var e;null===(e=n.value)||void 0===e||e.action((e=>{e.get(L.Xc).switch(e,r.isDark?ae:le)}))})),(e,o)=>((0,c.wg)(),(0,c.j4)((0,s.SU)(U.bR),{ref_key:"vueEditorRef",ref:l,class:"hi-editor relative h-full",editor:(0,s.SU)(b),onContextmenu:o[0]||(o[0]=(0,i.iM)((()=>{}),["stop"]))},null,8,["editor"]))}}),ke=we;var ye=t(2842),$e=t(71435);const _e={class:"note-modal-content relative"},ze={class:"flex h-[60px] items-center px-[20px] leading-none"},Se=["readonly","onKeyup"],Ue={spellcheck:"false",class:"editor"},Ie=(0,c.aZ)({setup(e){const o=(0,b.useNoteStore)(),t=(0,ye.V)(),r=(0,$e.useUserStore)(),n=(0,s.iH)(),l=(0,c.Fl)({get(){var e;return(null===(e=o.activeItem)||void 0===e?void 0:e.content)||""},set(e){o.activeItem&&o.saveNote({...o.activeItem,content:e})}}),a=(0,c.Fl)({get(){var e;return(null===(e=o.activeItem)||void 0===e?void 0:e.title)||""},set(e){o.activeItem&&o.saveNote({...o.activeItem,title:e})}}),d=()=>!!r.isLogin||(de.R.warn({message:"请登录后再上传图片",btnText:"去登录",onBtnClick:()=>{r.showLogin(!1)}}),!1),u=e=>{o.activeItem&&o.saveNote({...o.activeItem,desc:e})},g=()=>{var e;null===(e=document.querySelector(".ProseMirror"))||void 0===e||e.focus()},h=(0,c.Fl)((()=>"dark"===t.currentTheme));return(e,t)=>{const r=ke;return(0,c.wg)(),(0,c.iD)("section",_e,[(0,c._)("div",ze,[(0,c.wy)((0,c._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>(0,s.dq)(a)?a.value=e:null),readonly:!(0,s.SU)(o).activeId,spellcheck:"false",class:"note-title-input w-full bg-color-none font-ali-75 text-[24px] text-color-t1",type:"text",onKeyup:(0,i.D2)(g,["enter"])},null,40,Se),[[i.nr,(0,s.SU)(a)]])]),(0,c._)("div",Ue,[((0,c.wg)(),(0,c.j4)(r,{key:(0,s.SU)(o).activeId,ref_key:"editorRef",ref:n,value:(0,s.SU)(l),"onUpdate:value":t[1]||(t[1]=e=>(0,s.dq)(l)?l.value=e:null),class:(0,p.C_)([{"pointer-events-none":!(0,s.SU)(o).activeId}]),"is-dark":(0,s.SU)(h),"before-upload-image":d,onChangeDesc:u},null,8,["value","class","is-dark"]))])])}}}),Le=(0,w.Z)(Ie,[["__scopeId","data-v-40490158"]]);var Te=t(89062);const We={class:"content flex h-full w-full"},Ce=(0,c._)("div",{class:""},null,-1),Ze=(0,c.aZ)({setup(e){const o=(0,b.useNoteStore)(),{fullScreen:t,setSullScreen:r}=(0,Te.O)();return(e,i)=>{const n=a.Z,d=l.Z;return(0,c.wg)(),(0,c.j4)(d,{class:"widget-note-modal",ani:"fade",show:(0,s.SU)(o).modalShow},{default:(0,c.w5)((()=>[(0,c.Wm)(n,{"full-screen":(0,s.SU)(t),onOnClose:i[0]||(i[0]=e=>(0,s.SU)(o).setModal(!1)),onOnFullscreen:i[1]||(i[1]=e=>(0,s.SU)(r)(e))},{default:(0,c.w5)((()=>[(0,c._)("div",We,[(0,c.Wm)(S,{class:"h-full w-[300px] border-r-[1px] border-color-m2 border-opacity-[0.08] bg-color-b3"}),(0,c.Wm)(Le,{class:"h-full grow"})])])),_:1},8,["full-screen"]),Ce])),_:1},8,["show"])}}});var qe=t(58693);(()=>{const e=(0,ce.em)(),o=(0,i.ri)(Ze);(0,qe.f)(o),o.use(n.M),o.use(r.Z),o.mount(e)})()}}]);