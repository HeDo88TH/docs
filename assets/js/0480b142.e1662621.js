"use strict";(self.webpackChunkddb_docs=self.webpackChunkddb_docs||[]).push([[836],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(r),f=a,m=c["".concat(l,".").concat(f)]||c[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3584:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:6,description:"Frequently asked questions"},i="FAQ",s={unversionedId:"faq",id:"faq",title:"FAQ",description:"Frequently asked questions",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/faq",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,description:"Frequently asked questions"},sidebar:"tutorialSidebar",previous:{title:"CLI",permalink:"/docs/cli"}},l={},d=[{value:"What&#39;s the difference between Registry and Server?",id:"whats-the-difference-between-registry-and-server",level:3},{value:"Where can I buy a license for DroneDB Desktop?",id:"where-can-i-buy-a-license-for-dronedb-desktop",level:3}],p={toc:d};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"whats-the-difference-between-registry-and-server"},"What's the difference between Registry and Server?"),(0,a.kt)("p",null,"Both implementations allow you to access the functionalities of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/DroneDB/Hub"},"Hub"),". The biggest difference is how they store data. Registry will assign unique identifiers to datasets when you create one. A supporting database that maps unique identifiers to datasets is therefore also used. Server stores everything on the file system. Check them both and see which one suits your needs best! If you're undecided, use Registry."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},"Registry"),(0,a.kt)("th",{parentName:"tr",align:null},"Server"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"OS")),(0,a.kt)("td",{parentName:"tr",align:null},"Windows, Linux, macOS"),(0,a.kt)("td",{parentName:"tr",align:null},"Linux, macOS")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Data Storage")),(0,a.kt)("td",{parentName:"tr",align:null},"Database + File System"),(0,a.kt)("td",{parentName:"tr",align:null},"File System Only")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Language")),(0,a.kt)("td",{parentName:"tr",align:null},".NET 6.0"),(0,a.kt)("td",{parentName:"tr",align:null},"NodeJS")))),(0,a.kt)("h3",{id:"where-can-i-buy-a-license-for-dronedb-desktop"},"Where can I buy a license for DroneDB Desktop?"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://dronedb.app/buy-ddb-desktop"},"https://dronedb.app/buy-ddb-desktop")))}u.isMDXComponent=!0}}]);