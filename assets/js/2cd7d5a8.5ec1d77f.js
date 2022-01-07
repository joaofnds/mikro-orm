"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8949],{3905:function(e,t,r){r.d(t,{Zo:function(){return i},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},i=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),k=s(r),m=n,u=k["".concat(l,".").concat(m)]||k[m]||d[m]||p;return r?a.createElement(u,o(o({ref:t},i),{},{components:r})):a.createElement(u,o({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=k;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<p;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},69731:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return i},default:function(){return k}});var a=r(83117),n=r(80102),p=(r(67294),r(3905)),o=["components"],c={id:"core.deadlockexception",title:"Class: DeadlockException",sidebar_label:"DeadlockException",custom_edit_url:null,hide_title:!0},l="Class: DeadlockException",s={unversionedId:"api/classes/core.deadlockexception",id:"version-4.5/api/classes/core.deadlockexception",title:"Class: DeadlockException",description:"core.DeadlockException",source:"@site/versioned_docs/version-4.5/api/classes/core.deadlockexception.md",sourceDirName:"api/classes",slug:"/api/classes/core.deadlockexception",permalink:"/docs/api/classes/core.deadlockexception",editUrl:null,tags:[],version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1641471304,formattedLastUpdatedAt:"1/6/2022",frontMatter:{id:"core.deadlockexception",title:"Class: DeadlockException",sidebar_label:"DeadlockException",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"DateType",permalink:"/docs/api/classes/core.datetype"},next:{title:"DriverException",permalink:"/docs/api/classes/core.driverexception"}},i=[{value:"Hierarchy",id:"hierarchy",children:[],level:2},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[{value:"Parameters:",id:"parameters",children:[],level:4}],level:3}],level:2},{value:"Properties",id:"properties",children:[{value:"code",id:"code",children:[],level:3},{value:"errmsg",id:"errmsg",children:[],level:3},{value:"errno",id:"errno",children:[],level:3},{value:"message",id:"message",children:[],level:3},{value:"name",id:"name",children:[],level:3},{value:"prepareStackTrace",id:"preparestacktrace",children:[{value:"Type declaration:",id:"type-declaration",children:[],level:4},{value:"Parameters:",id:"parameters-1",children:[],level:4}],level:3},{value:"sqlMessage",id:"sqlmessage",children:[],level:3},{value:"sqlState",id:"sqlstate",children:[],level:3},{value:"stack",id:"stack",children:[],level:3},{value:"stackTraceLimit",id:"stacktracelimit",children:[],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"captureStackTrace",id:"capturestacktrace",children:[{value:"Parameters:",id:"parameters-2",children:[],level:4}],level:3}],level:2}],d={toc:i};function k(e){var t=e.components,r=(0,n.Z)(e,o);return(0,p.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"class-deadlockexception"},"Class: DeadlockException"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".DeadlockException"),(0,p.kt)("p",null,"Exception for a deadlock error of a transaction detected in the driver."),(0,p.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception"},(0,p.kt)("em",{parentName:"a"},"ServerException"))),(0,p.kt)("p",{parentName:"li"},"\u21b3 ",(0,p.kt)("strong",{parentName:"p"},"DeadlockException")))),(0,p.kt)("h2",{id:"constructors"},"Constructors"),(0,p.kt)("h3",{id:"constructor"},"constructor"),(0,p.kt)("p",null,"+"," ",(0,p.kt)("strong",{parentName:"p"},"new DeadlockException"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"previous"),": Error): ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.deadlockexception"},(0,p.kt)("em",{parentName:"a"},"DeadlockException"))),(0,p.kt)("h4",{id:"parameters"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"previous")),(0,p.kt)("td",{parentName:"tr",align:"left"},"Error")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.deadlockexception"},(0,p.kt)("em",{parentName:"a"},"DeadlockException"))),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception"},"ServerException")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L10"},"packages/core/src/exceptions.ts:10")),(0,p.kt)("h2",{id:"properties"},"Properties"),(0,p.kt)("h3",{id:"code"},"code"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,p.kt)("strong",{parentName:"p"},"code"),": ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception"},"ServerException"),".",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception#code"},"code")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L6"},"packages/core/src/exceptions.ts:6")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"errmsg"},"errmsg"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,p.kt)("strong",{parentName:"p"},"errmsg"),": ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception"},"ServerException"),".",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception#errmsg"},"errmsg")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L10"},"packages/core/src/exceptions.ts:10")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"errno"},"errno"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,p.kt)("strong",{parentName:"p"},"errno"),": ",(0,p.kt)("em",{parentName:"p"},"number")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception"},"ServerException"),".",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception#errno"},"errno")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L7"},"packages/core/src/exceptions.ts:7")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"message"},"message"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("strong",{parentName:"p"},"message"),": ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception"},"ServerException"),".",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception#message"},"message")),(0,p.kt)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:974"),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"name"},"name"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("strong",{parentName:"p"},"name"),": ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception"},"ServerException"),".",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception#name"},"name")),(0,p.kt)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:973"),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"preparestacktrace"},"prepareStackTrace"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,p.kt)("strong",{parentName:"p"},"prepareStackTrace"),": (",(0,p.kt)("inlineCode",{parentName:"p"},"err"),": Error, ",(0,p.kt)("inlineCode",{parentName:"p"},"stackTraces"),": CallSite[]) => ",(0,p.kt)("em",{parentName:"p"},"any")),(0,p.kt)("p",null,"Optional override for formatting stack traces"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"see"))," ",(0,p.kt)("a",{parentName:"p",href:"https://v8.dev/docs/stack-trace-api#customizing-stack-traces"},"https://v8.dev/docs/stack-trace-api#customizing-stack-traces")),(0,p.kt)("h4",{id:"type-declaration"},"Type declaration:"),(0,p.kt)("p",null,"\u25b8 (",(0,p.kt)("inlineCode",{parentName:"p"},"err"),": Error, ",(0,p.kt)("inlineCode",{parentName:"p"},"stackTraces"),": CallSite[]): ",(0,p.kt)("em",{parentName:"p"},"any")),(0,p.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"err")),(0,p.kt)("td",{parentName:"tr",align:"left"},"Error")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"stackTraces")),(0,p.kt)("td",{parentName:"tr",align:"left"},"CallSite[]")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"any")),(0,p.kt)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:11"),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception"},"ServerException"),".",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception#preparestacktrace"},"prepareStackTrace")),(0,p.kt)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:11"),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"sqlmessage"},"sqlMessage"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,p.kt)("strong",{parentName:"p"},"sqlMessage"),": ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception"},"ServerException"),".",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception#sqlmessage"},"sqlMessage")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L9"},"packages/core/src/exceptions.ts:9")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"sqlstate"},"sqlState"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,p.kt)("strong",{parentName:"p"},"sqlState"),": ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception"},"ServerException"),".",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception#sqlstate"},"sqlState")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L8"},"packages/core/src/exceptions.ts:8")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"stack"},"stack"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,p.kt)("strong",{parentName:"p"},"stack"),": ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception"},"ServerException"),".",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception#stack"},"stack")),(0,p.kt)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:975"),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"stacktracelimit"},"stackTraceLimit"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("strong",{parentName:"p"},"stackTraceLimit"),": ",(0,p.kt)("em",{parentName:"p"},"number")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception"},"ServerException"),".",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception#stacktracelimit"},"stackTraceLimit")),(0,p.kt)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:13"),(0,p.kt)("h2",{id:"methods"},"Methods"),(0,p.kt)("h3",{id:"capturestacktrace"},"captureStackTrace"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"captureStackTrace"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"targetObject"),": ",(0,p.kt)("em",{parentName:"p"},"object"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"constructorOpt?"),": Function): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Create .stack property on a target object"),(0,p.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"targetObject")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"object"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"constructorOpt?")),(0,p.kt)("td",{parentName:"tr",align:"left"},"Function")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception"},"ServerException")),(0,p.kt)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:4"))}k.isMDXComponent=!0}}]);