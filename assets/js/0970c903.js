"use strict";(globalThis.webpackChunkinfinity_hitab_client=globalThis.webpackChunkinfinity_hitab_client||[]).push([[1785],{31785:(t,e,i)=>{i.r(e),i.d(e,{useTodoStore:()=>a});var o=i(59590),s=i(62190),d=i(10435);const n=i(20918).sM?[{id:"todogroup-1",updateTime:0,name:"日常计划",iconClass:"",children:[{id:"todo1-1",content:"👶 今天下午4:00去幼儿园接小儿子，千万别迟到",finished:!1,updateTime:0},{id:"todo1-2",content:"🚗 接完东东后，去集市买干辣椒和洗衣液",finished:!1,updateTime:0},{id:"todo1-3",content:"👜 晚上给爸妈打电话在网上买点东西",finished:!1,updateTime:0},{id:"todo1-4",content:"✈️ 预定下周去北京的机票",finished:!1,updateTime:0},{id:"todo1-5",content:"🎁 给老婆买生日礼物",finished:!0,updateTime:0}]},{id:"todogroup-2",updateTime:0,name:"工作计划",iconClass:"",children:[{id:"todo2-1",content:"上午10:30项目开会，讨论新产品后续调整计划",finished:!1,updateTime:0},{id:"todo2-2",content:"下午4:30针对上午会议进行简要汇报",finished:!1,updateTime:0}]}]:[{id:"todogroup-1",updateTime:0,name:"日常计划",iconClass:"",children:[{id:"todo1-1",content:"Go to the bank at 2pm.",finished:!1,updateTime:0},{id:"todo1-2",content:"Date Henry at 7pm, don't be late.",finished:!1,updateTime:0},{id:"todo1-3",content:"Go to the hospital to visit my aunt at 10am.",finished:!1,updateTime:0},{id:"todo1-4",content:"Book flight to Manchester next week.",finished:!1,updateTime:0},{id:"todo1-5",content:"Prepare Christmas gifts for kids.",finished:!0,updateTime:0}]},{id:"todogroup-2",updateTime:0,name:"工作计划",iconClass:"",children:[{id:"todo2-1",content:"Have a meeting with Kelly at 10am to discuss the plan, remember to bring materials.",finished:!1,updateTime:0},{id:"todo2-2",content:"Go to the factory for inspection at 3pm.",finished:!1,updateTime:0}]}],h=["rgba(255, 201, 104, 1)","rgba(152, 216, 93, 1)","rgba(255, 151, 101, 1)","rgba(133, 83, 255, 1)","rgba(146, 165, 255, 1)","rgba(212, 212, 212, 1)"],a=(0,d.Q_)(o.BU.todo,{syncStorage:{watch:["todos"]},syncCloud:{watch:["todos"]},state:()=>({todos:n,modalShow:!1,finishedShow:!1,activeGroupIndex:0,searchValue:"",activeSearch:!1,needTransition:!1}),getters:{allList(){return this.todos.reduce(((t,e)=>(e.children.forEach((e=>{t.push(e)})),t)),[])},finishedAllList(){return this.allList.filter((t=>t.finished))},unfinishedAllList(){return this.allList.filter((t=>!t.finished))},homeList(){return this.unfinishedAllList.map(((t,e)=>({...t,color:h[e]})))},finishedGroupList(){return 0===this.todos.length||"number"!=typeof this.activeGroupIndex?[]:this.todos[this.activeGroupIndex].children.filter((t=>t.finished))},unfinishedGroupList(){return 0===this.todos.length||"number"!=typeof this.activeGroupIndex?[]:this.todos[this.activeGroupIndex].children.filter((t=>!t.finished))},finishedList(){return this.activeSearch?this.finishedAllList.filter((t=>t.content.toLowerCase().includes(this.searchValue.toLowerCase()))):this.finishedGroupList},unfinishedList(){return this.activeSearch?this.unfinishedAllList.filter((t=>t.content.toLowerCase().includes(this.searchValue.toLowerCase()))):this.unfinishedGroupList}},actions:{setNeedTransition(t){this.needTransition=t},setSearchValue(t){t?(this.setNeedTransition(!1),this.activeSearch=!0):this.activeSearch=!1,this.searchValue=t},setModal(t){this.modalShow=t},setFinishedShow(t){this.finishedShow=t},clearCompleted(){this.finishedList.forEach((t=>{this.deleteTodo(t.id,!1)})),this.todos=[...this.todos]},saveGroup(t){let{id:e,name:i,iconClass:o}=t;e?this.todos.some((t=>{if(t.id===e)return t.name=i,t.iconClass=o,t.updateTime=Date.now(),!0})):this.todos.push({id:(0,s.kb)("todogroup-"),iconClass:o,name:i,updateTime:Date.now(),children:[]}),this.todos=[...this.todos]},deleteGroup(t){this.setNeedTransition(!1);const e=this.todos.findIndex((e=>e.id===t));e>-1&&(this.todos.splice(e,1),"number"==typeof this.activeGroupIndex&&this.activeGroupIndex>this.todos.length-1&&(this.activeGroupIndex=this.todos.length-1),0===this.todos.length?(this.saveGroup({name:"新建列表",iconClass:""}),this.selectGroup(0)):this.todos=[...this.todos])},selectGroup(t){this.setNeedTransition(!1),this.activeGroupIndex=t,this.activeSearch=!1},findTodoIndexes(t){let e,i;return this.todos.some(((o,s)=>o.children.some(((o,d)=>o.id===t&&(e=s,i=d,!0))))),"number"==typeof i?[e,i]:null},saveTodo(t){this.setNeedTransition(!0);const e=Date.now();if(t.id){const i=this.findTodoIndexes(t.id);if(i){const[o,s]=i;Object.assign(this.todos[o].children[s],{...t,updateTime:e}),this.todos[o].updateTime=e}}else"number"==typeof this.activeGroupIndex&&(this.todos[this.activeGroupIndex].children.push({...t,id:(0,s.kb)("todo-"),updateTime:e}),this.todos[this.activeGroupIndex].updateTime=e);this.todos=[...this.todos]},deleteTodo(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.setNeedTransition(!0);const i=this.findTodoIndexes(t);if(i){const[t,o]=i;this.todos[t].children.splice(o,1),this.todos[t].updateTime=Date.now(),!0===e&&(this.todos=[...this.todos])}}}})}}]);