"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4148],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return k}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=c(a),k=n,u=d["".concat(p,".").concat(k)]||d[k]||l[k]||i;return a?r.createElement(u,s(s({ref:t},m),{},{components:a})):r.createElement(u,s({ref:t},m))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},73569:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return m},default:function(){return d}});var r=a(83117),n=a(80102),i=(a(67294),a(3905)),s=["components"],o={id:"core.requestcontext",title:"Class: RequestContext",sidebar_label:"RequestContext",custom_edit_url:null,hide_title:!0},p="Class: RequestContext",c={unversionedId:"api/classes/core.requestcontext",id:"version-4.5/api/classes/core.requestcontext",title:"Class: RequestContext",description:"core.RequestContext",source:"@site/versioned_docs/version-4.5/api/classes/core.requestcontext.md",sourceDirName:"api/classes",slug:"/api/classes/core.requestcontext",permalink:"/docs/api/classes/core.requestcontext",editUrl:null,tags:[],version:"4.5",lastUpdatedBy:"Kalashnikov Igor",lastUpdatedAt:1640700611,formattedLastUpdatedAt:"12/28/2021",frontMatter:{id:"core.requestcontext",title:"Class: RequestContext",sidebar_label:"RequestContext",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"ReflectMetadataProvider",permalink:"/docs/api/classes/core.reflectmetadataprovider"},next:{title:"SerializationContext",permalink:"/docs/api/classes/core.serializationcontext"}},m=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[{value:"Parameters:",id:"parameters",children:[],level:4}],level:3}],level:2},{value:"Properties",id:"properties",children:[{value:"id",id:"id",children:[],level:3},{value:"map",id:"map",children:[],level:3},{value:"counter",id:"counter",children:[],level:3}],level:2},{value:"Accessors",id:"accessors",children:[{value:"em",id:"em",children:[],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"create",id:"create",children:[{value:"Parameters:",id:"parameters-1",children:[],level:4}],level:3},{value:"createAsync",id:"createasync",children:[{value:"Parameters:",id:"parameters-2",children:[],level:4}],level:3},{value:"createDomain",id:"createdomain",children:[{value:"Parameters:",id:"parameters-3",children:[],level:4}],level:3},{value:"currentRequestContext",id:"currentrequestcontext",children:[],level:3},{value:"getEntityManager",id:"getentitymanager",children:[{value:"Parameters:",id:"parameters-4",children:[],level:4}],level:3}],level:2}],l={toc:m};function d(e){var t=e.components,a=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"class-requestcontext"},"Class: RequestContext"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".RequestContext"),(0,i.kt)("p",null,"For node 14 and above it is suggested to use ",(0,i.kt)("inlineCode",{parentName:"p"},"AsyncLocalStorage")," instead,"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"see"))," ",(0,i.kt)("a",{parentName:"p",href:"https://mikro-orm.io/docs/async-local-storage/"},"https://mikro-orm.io/docs/async-local-storage/")),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"+"," ",(0,i.kt)("strong",{parentName:"p"},"new RequestContext"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"map"),": ",(0,i.kt)("em",{parentName:"p"},"Map"),"<string, ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymanager"},(0,i.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},(0,i.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},(0,i.kt)("em",{parentName:"a"},"Connection")),">",">",">","): ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.requestcontext"},(0,i.kt)("em",{parentName:"a"},"RequestContext"))),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"map")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"Map"),"<string, ",(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/core.entitymanager"},(0,i.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},(0,i.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},(0,i.kt)("em",{parentName:"a"},"Connection")),">",">",">")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.requestcontext"},(0,i.kt)("em",{parentName:"a"},"RequestContext"))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/RequestContext.ts#L14"},"packages/core/src/utils/RequestContext.ts:14")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"id"},"id"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"id"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/RequestContext.ts#L14"},"packages/core/src/utils/RequestContext.ts:14")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"map"},"map"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"map"),": ",(0,i.kt)("em",{parentName:"p"},"Map"),"<string, ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymanager"},(0,i.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},(0,i.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},(0,i.kt)("em",{parentName:"a"},"Connection")),">",">",">"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"counter"},"counter"),(0,i.kt)("p",null,"\u25aa ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"counter"),": ",(0,i.kt)("em",{parentName:"p"},"number"),"= 1"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/RequestContext.ts#L13"},"packages/core/src/utils/RequestContext.ts:13")),(0,i.kt)("h2",{id:"accessors"},"Accessors"),(0,i.kt)("h3",{id:"em"},"em"),(0,i.kt)("p",null,"\u2022 get ",(0,i.kt)("strong",{parentName:"p"},"em"),"(): ",(0,i.kt)("em",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymanager"},(0,i.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},(0,i.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},(0,i.kt)("em",{parentName:"a"},"Connection")),">",">"),(0,i.kt)("p",null,"Returns default EntityManager."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymanager"},(0,i.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},(0,i.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},(0,i.kt)("em",{parentName:"a"},"Connection")),">",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/RequestContext.ts#L21"},"packages/core/src/utils/RequestContext.ts:21")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"create"},"create"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static"),(0,i.kt)("strong",{parentName:"p"},"create"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"em"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymanager"},(0,i.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},(0,i.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},(0,i.kt)("em",{parentName:"a"},"Connection")),">",">"," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymanager"},(0,i.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},(0,i.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},(0,i.kt)("em",{parentName:"a"},"Connection")),">",">","[], ",(0,i.kt)("inlineCode",{parentName:"p"},"next"),": (...",(0,i.kt)("inlineCode",{parentName:"p"},"args"),": ",(0,i.kt)("em",{parentName:"p"},"any"),"[]) => ",(0,i.kt)("em",{parentName:"p"},"void"),"): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Creates new RequestContext instance and runs the code inside its domain."),(0,i.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"em")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/core.entitymanager"},(0,i.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},(0,i.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},(0,i.kt)("em",{parentName:"a"},"Connection")),">",">"," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/core.entitymanager"},(0,i.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},(0,i.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},(0,i.kt)("em",{parentName:"a"},"Connection")),">",">","[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"next")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(...",(0,i.kt)("inlineCode",{parentName:"td"},"args"),": ",(0,i.kt)("em",{parentName:"td"},"any"),"[]) => ",(0,i.kt)("em",{parentName:"td"},"void"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/RequestContext.ts#L28"},"packages/core/src/utils/RequestContext.ts:28")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"createasync"},"createAsync"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static"),(0,i.kt)("strong",{parentName:"p"},"createAsync"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"em"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymanager"},(0,i.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},(0,i.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},(0,i.kt)("em",{parentName:"a"},"Connection")),">",">"," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymanager"},(0,i.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},(0,i.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},(0,i.kt)("em",{parentName:"a"},"Connection")),">",">","[], ",(0,i.kt)("inlineCode",{parentName:"p"},"next"),": (...",(0,i.kt)("inlineCode",{parentName:"p"},"args"),": ",(0,i.kt)("em",{parentName:"p"},"any"),"[]) => ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">","): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("p",null,"Creates new RequestContext instance and runs the code inside its domain.\nAsync variant, when the ",(0,i.kt)("inlineCode",{parentName:"p"},"next")," handler needs to be awaited (like in Koa)."),(0,i.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"em")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/core.entitymanager"},(0,i.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},(0,i.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},(0,i.kt)("em",{parentName:"a"},"Connection")),">",">"," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/core.entitymanager"},(0,i.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},(0,i.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},(0,i.kt)("em",{parentName:"a"},"Connection")),">",">","[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"next")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(...",(0,i.kt)("inlineCode",{parentName:"td"},"args"),": ",(0,i.kt)("em",{parentName:"td"},"any"),"[]) => ",(0,i.kt)("em",{parentName:"td"},"Promise"),"<void",">")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/RequestContext.ts#L37"},"packages/core/src/utils/RequestContext.ts:37")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"createdomain"},"createDomain"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Static"),(0,i.kt)("strong",{parentName:"p"},"createDomain"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"em"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymanager"},(0,i.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},(0,i.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},(0,i.kt)("em",{parentName:"a"},"Connection")),">",">"," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymanager"},(0,i.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},(0,i.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},(0,i.kt)("em",{parentName:"a"},"Connection")),">",">","[]): ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/core#ormdomain"},(0,i.kt)("em",{parentName:"a"},"ORMDomain"))),(0,i.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"em")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/core.entitymanager"},(0,i.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},(0,i.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},(0,i.kt)("em",{parentName:"a"},"Connection")),">",">"," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/core.entitymanager"},(0,i.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},(0,i.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},(0,i.kt)("em",{parentName:"a"},"Connection")),">",">","[]")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/core#ormdomain"},(0,i.kt)("em",{parentName:"a"},"ORMDomain"))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/RequestContext.ts#L60"},"packages/core/src/utils/RequestContext.ts:60")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"currentrequestcontext"},"currentRequestContext"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static"),(0,i.kt)("strong",{parentName:"p"},"currentRequestContext"),"(): ",(0,i.kt)("em",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.requestcontext"},(0,i.kt)("em",{parentName:"a"},"RequestContext"))),(0,i.kt)("p",null,"Returns current RequestContext (if available)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.requestcontext"},(0,i.kt)("em",{parentName:"a"},"RequestContext"))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/RequestContext.ts#L47"},"packages/core/src/utils/RequestContext.ts:47")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getentitymanager"},"getEntityManager"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static"),(0,i.kt)("strong",{parentName:"p"},"getEntityManager"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"name?"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"): ",(0,i.kt)("em",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymanager"},(0,i.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},(0,i.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},(0,i.kt)("em",{parentName:"a"},"Connection")),">",">"),(0,i.kt)("p",null,"Returns current EntityManager (if available)."),(0,i.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"'default'")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymanager"},(0,i.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},(0,i.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},(0,i.kt)("em",{parentName:"a"},"Connection")),">",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/RequestContext.ts#L55"},"packages/core/src/utils/RequestContext.ts:55")))}d.isMDXComponent=!0}}]);