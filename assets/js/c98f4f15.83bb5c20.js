"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[82072],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return k}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),s=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(r),k=n,u=d["".concat(o,".").concat(k)]||d[k]||m[k]||i;return r?a.createElement(u,l(l({ref:t},c),{},{components:r})):a.createElement(u,l({ref:t},c))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var s=2;s<i;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9816:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var a=r(83117),n=r(80102),i=(r(67294),r(3905)),l=["components"],p={id:"core.driverexception",title:"Class: DriverException",sidebar_label:"DriverException",custom_edit_url:null,hide_title:!0},o="Class: DriverException",s={unversionedId:"api/classes/core.driverexception",id:"version-4.5/api/classes/core.driverexception",isDocsHomePage:!1,title:"Class: DriverException",description:"core.DriverException",source:"@site/versioned_docs/version-4.5/api/classes/core.driverexception.md",sourceDirName:"api/classes",slug:"/api/classes/core.driverexception",permalink:"/docs/api/classes/core.driverexception",editUrl:null,tags:[],version:"4.5",lastUpdatedBy:"Evan Trimboli",lastUpdatedAt:1637792647,formattedLastUpdatedAt:"11/24/2021",frontMatter:{id:"core.driverexception",title:"Class: DriverException",sidebar_label:"DriverException",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"DeadlockException",permalink:"/docs/api/classes/core.deadlockexception"},next:{title:"EntityAssigner",permalink:"/docs/api/classes/core.entityassigner"}},c=[{value:"Hierarchy",id:"hierarchy",children:[],level:2},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[{value:"Parameters:",id:"parameters",children:[],level:4}],level:3}],level:2},{value:"Properties",id:"properties",children:[{value:"code",id:"code",children:[],level:3},{value:"errmsg",id:"errmsg",children:[],level:3},{value:"errno",id:"errno",children:[],level:3},{value:"message",id:"message",children:[],level:3},{value:"name",id:"name",children:[],level:3},{value:"prepareStackTrace",id:"preparestacktrace",children:[{value:"Type declaration:",id:"type-declaration",children:[],level:4},{value:"Parameters:",id:"parameters-1",children:[],level:4}],level:3},{value:"sqlMessage",id:"sqlmessage",children:[],level:3},{value:"sqlState",id:"sqlstate",children:[],level:3},{value:"stack",id:"stack",children:[],level:3},{value:"stackTraceLimit",id:"stacktracelimit",children:[],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"captureStackTrace",id:"capturestacktrace",children:[{value:"Parameters:",id:"parameters-2",children:[],level:4}],level:3}],level:2}],m={toc:c};function d(e){var t=e.components,r=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"class-driverexception"},"Class: DriverException"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".DriverException"),(0,i.kt)("p",null,"Base class for all errors detected in the driver."),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Error")),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},"DriverException")),(0,i.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.connectionexception"},(0,i.kt)("em",{parentName:"a"},"ConnectionException"))),(0,i.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception"},(0,i.kt)("em",{parentName:"a"},"ServerException"))))),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"+"," ",(0,i.kt)("strong",{parentName:"p"},"new DriverException"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"previous"),": Error): ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.driverexception"},(0,i.kt)("em",{parentName:"a"},"DriverException"))),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"previous")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Error")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.driverexception"},(0,i.kt)("em",{parentName:"a"},"DriverException"))),(0,i.kt)("p",null,"Overrides: void"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L10"},"packages/core/src/exceptions.ts:10")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"code"},"code"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"code"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L6"},"packages/core/src/exceptions.ts:6")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"errmsg"},"errmsg"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"errmsg"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L10"},"packages/core/src/exceptions.ts:10")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"errno"},"errno"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"errno"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L7"},"packages/core/src/exceptions.ts:7")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"message"},"message"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"message"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Inherited from: void"),(0,i.kt)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:974"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"name"},"name"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"name"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Inherited from: void"),(0,i.kt)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:973"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"preparestacktrace"},"prepareStackTrace"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"prepareStackTrace"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"err"),": Error, ",(0,i.kt)("inlineCode",{parentName:"p"},"stackTraces"),": CallSite[]) => ",(0,i.kt)("em",{parentName:"p"},"any")),(0,i.kt)("p",null,"Optional override for formatting stack traces"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"see"))," ",(0,i.kt)("a",{parentName:"p",href:"https://v8.dev/docs/stack-trace-api#customizing-stack-traces"},"https://v8.dev/docs/stack-trace-api#customizing-stack-traces")),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration:"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"err"),": Error, ",(0,i.kt)("inlineCode",{parentName:"p"},"stackTraces"),": CallSite[]): ",(0,i.kt)("em",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"err")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Error")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"stackTraces")),(0,i.kt)("td",{parentName:"tr",align:"left"},"CallSite[]")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"any")),(0,i.kt)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:11"),(0,i.kt)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:11"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sqlmessage"},"sqlMessage"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"sqlMessage"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L9"},"packages/core/src/exceptions.ts:9")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sqlstate"},"sqlState"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"sqlState"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L8"},"packages/core/src/exceptions.ts:8")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"stack"},"stack"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"stack"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Inherited from: void"),(0,i.kt)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:975"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"stacktracelimit"},"stackTraceLimit"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"stackTraceLimit"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:13"),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"capturestacktrace"},"captureStackTrace"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"captureStackTrace"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"targetObject"),": ",(0,i.kt)("em",{parentName:"p"},"object"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"constructorOpt?"),": Function): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Create .stack property on a target object"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"targetObject")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"object"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"constructorOpt?")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Function")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:4"))}d.isMDXComponent=!0}}]);