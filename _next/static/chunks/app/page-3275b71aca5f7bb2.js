(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{455:e=>{e.exports={table:"table_table__mLpe6"}},486:(e,t,s)=>{Promise.resolve().then(s.bind(s,7797))},3711:(e,t,s)=>{"use strict";s.d(t,{V:()=>d,default:()=>l});var n=s(5155),r=s(2115),a=s(1500);let i=(0,r.createContext)({}),l=e=>{let{children:t}=e,[s,l]=(0,a.A)("tasks",{defaultValue:[]}),[d,o]=(0,a.A)("rewards",{defaultValue:[]}),[c,h]=(0,a.A)("tasksPerWeek",{defaultValue:{}}),[u,x]=(0,a.A)("rewardsPerWeek",{defaultValue:{}}),[j,p]=(0,a.A)("points",{defaultValue:0}),[v,b]=(0,r.useState)(new Date);return(0,n.jsx)(i.Provider,{value:{tasks:s||[],setTasks:l,rewards:d||[],setRewards:o,tasksPerWeek:c||{},setTasksPerWeek:h,rewardsPerWeek:u||{},setRewardsPerWeek:x,points:j||0,setPoints:p,currentWeekDate:v,setCurrentWeekDate:b},children:t})},d=()=>(0,r.useContext)(i)},4918:e=>{e.exports={root:"tasks_root__XJSlh",weekSelection:"tasks_weekSelection___dpw4",input:"tasks_input__J5Ahb"}},7068:e=>{e.exports={root:"page_root___eQ0n",navbar:"page_navbar__l_Nh8",navbarButton:"page_navbarButton__42XfT"}},7797:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>S});var n=s(5155),r=s(2115),a=s(7068),i=s.n(a),l=s(3711);let d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:16,t="qwertyuiopasdfghjklzxcvbnm0123456789",s="";for(let n=0;n<e;n++)s+=t[Math.floor(Math.random()*t.length)];return s},o=e=>new Date(6048e5*(e+3/7)),c=e=>Math.floor((e.getTime()-2592e5)/864e5/7),h=e=>{let{task:t}=e,{tasksPerWeek:s,setTasksPerWeek:r,currentWeekDate:a}=(0,l.V)(),i=c(a),d=i in s&&s[i].includes(t.id);return(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:t.description}),(0,n.jsx)("td",{children:(0,n.jsx)("input",{type:"checkbox",checked:d,onChange:()=>{i in s||r({...s,[i]:[]}),r({...s,[i]:d?s[i].filter(e=>e!=t.id):[...s[i],t.id]})}})})]})};var u=s(4918),x=s.n(u);let j=()=>{let[e,t]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{t(!0)},[]),e},p=e=>{let t=e.getFullYear(),s=String(e.getMonth()+1).padStart(2,"0"),n=String(e.getDate()).padStart(2,"0");return"".concat(t,"-").concat(s,"-").concat(n)},v=()=>{let{tasks:e,currentWeekDate:t,setCurrentWeekDate:s}=(0,l.V)(),r=j(),a=c(t),i=o(a),d=new Date(i.getTime()+5184e5),u=(r?e:[]).map(e=>(0,n.jsx)(h,{task:e},e.id));return(0,n.jsxs)("div",{className:x().root,children:[(0,n.jsxs)("div",{className:x().weekSelection,children:[(0,n.jsx)("input",{className:x().input,type:"date",value:p(t),onChange:e=>{let t=e.target.valueAsDate;t&&s(t)}}),(0,n.jsxs)("div",{children:[i.toLocaleDateString("en-il"),"-",d.toLocaleDateString("en-il")," (",a,")"]})]}),(0,n.jsx)("div",{children:(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"task"}),(0,n.jsx)("th",{children:"done?"})]})}),(0,n.jsx)("tbody",{children:u})]})})]})},b=e=>{let{task:t}=e,{tasks:s,setTasks:r}=(0,l.V)(),a=e=>{r(s.map(s=>s.id==t.id?{...s,description:e}:s))},i=e=>{r(s.map(s=>s.id==t.id?{...s,pointsForCompletion:e}:s))};return(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("input",{value:t.description,onChange:e=>a(e.target.value)})}),(0,n.jsx)("td",{children:(0,n.jsx)("input",{type:"number",value:t.pointsForCompletion,onChange:e=>i(e.target.valueAsNumber)})}),(0,n.jsx)("td",{children:(0,n.jsx)("button",{onClick:()=>r(s.filter(e=>e.id!=t.id)),children:"delete"})})]})};var k=s(455),_=s.n(k);let m=()=>{let{tasks:e}=(0,l.V)(),t=e.map(e=>(0,n.jsx)(b,{task:e},e.id));return(0,n.jsxs)("table",{className:_().table,children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"text"}),(0,n.jsx)("th",{children:"points"}),(0,n.jsx)("th",{children:"actions"})]})}),(0,n.jsx)("tbody",{children:t})]})},g=e=>{let{reward:t}=e,{rewards:s,setRewards:r}=(0,l.V)(),a=e=>{r(s.map(s=>s.id==t.id?{...s,description:e}:s))},i=e=>{r(s.map(s=>s.id==t.id?{...s,cost:e}:s))};return(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("input",{value:t.description,onChange:e=>a(e.target.value)})}),(0,n.jsx)("td",{children:(0,n.jsx)("input",{type:"number",value:t.cost,onChange:e=>i(e.target.valueAsNumber)})}),(0,n.jsx)("td",{children:(0,n.jsx)("button",{onClick:()=>r(s.filter(e=>e.id!=t.id)),children:"delete"})})]})},f=()=>{let{rewards:e}=(0,l.V)(),t=e.map(e=>(0,n.jsx)(g,{reward:e},e.id));return(0,n.jsxs)("table",{className:_().table,children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"text"}),(0,n.jsx)("th",{children:"cost"}),(0,n.jsx)("th",{children:"actions"})]})}),(0,n.jsx)("tbody",{children:t})]})};var C=s(9449),w=s.n(C);let N=()=>{let{tasks:e,setTasks:t,rewards:s,setRewards:r}=(0,l.V)();return(0,n.jsxs)("div",{className:w().root,children:[(0,n.jsxs)("div",{children:["tasks ",(0,n.jsx)("button",{onClick:()=>{t([...e,{id:d(),description:"",pointsForCompletion:0}])},children:"add task"})]}),(0,n.jsx)(m,{}),(0,n.jsxs)("div",{children:["rewards ",(0,n.jsx)("button",{onClick:()=>{r([...s,{id:d(),description:"",cost:0}])},children:"add reward"})]}),(0,n.jsx)(f,{})]})};function S(){let[e,t]=(0,r.useState)(0),s=e=>()=>{t(e)};return(0,n.jsxs)("div",{className:i().root,children:[(0,n.jsxs)("div",{className:i().navbar,children:[(0,n.jsx)("button",{className:i().navbarButton,onClick:s(0),children:"tasks"}),(0,n.jsx)("button",{className:i().navbarButton,onClick:s(1),children:"rewards"}),(0,n.jsx)("button",{className:i().navbarButton,onClick:s(2),children:"settings"})]}),0==e&&(0,n.jsx)(v,{}),2==e&&(0,n.jsx)(N,{})]})}},9449:e=>{e.exports={root:"settings_root__d7dTJ"}}},e=>{var t=t=>e(e.s=t);e.O(0,[673,500,441,684,358],()=>t(486)),_N_E=e.O()}]);