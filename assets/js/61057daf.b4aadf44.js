"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[54997],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=s(t),m=o,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||i;return t?r.createElement(d,c(c({ref:n},l),{},{components:t})):r.createElement(d,c({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=f;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},42462:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return f}});var r=t(83117),o=t(80102),i=(t(67294),t(3905)),c=["components"],a={id:"core.connectionconfig",title:"Interface: ConnectionConfig",sidebar_label:"ConnectionConfig",custom_edit_url:null,hide_title:!0},p="Interface: ConnectionConfig",s={unversionedId:"api/interfaces/core.connectionconfig",id:"version-4.5/api/interfaces/core.connectionconfig",isDocsHomePage:!1,title:"Interface: ConnectionConfig",description:"core.ConnectionConfig",source:"@site/versioned_docs/version-4.5/api/interfaces/core.connectionconfig.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/core.connectionconfig",permalink:"/docs/api/interfaces/core.connectionconfig",editUrl:null,tags:[],version:"4.5",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1637568869,formattedLastUpdatedAt:"11/22/2021",frontMatter:{id:"core.connectionconfig",title:"Interface: ConnectionConfig",sidebar_label:"ConnectionConfig",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"CacheAdapter",permalink:"/docs/api/interfaces/core.cacheadapter"},next:{title:"ConnectionOptions",permalink:"/docs/api/interfaces/core.connectionoptions"}},l=[{value:"Properties",id:"properties",children:[{value:"database",id:"database",children:[],level:3},{value:"host",id:"host",children:[],level:3},{value:"password",id:"password",children:[],level:3},{value:"port",id:"port",children:[],level:3},{value:"user",id:"user",children:[],level:3}],level:2}],u={toc:l};function f(e){var n=e.components,t=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interface-connectionconfig"},"Interface: ConnectionConfig"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".ConnectionConfig"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"database"},"database"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"database"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/connections/Connection.ts#L138"},"packages/core/src/connections/Connection.ts:138")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"host"},"host"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"host"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/connections/Connection.ts#L134"},"packages/core/src/connections/Connection.ts:134")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"password"},"password"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"password"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/connections/Connection.ts#L137"},"packages/core/src/connections/Connection.ts:137")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"port"},"port"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"port"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/connections/Connection.ts#L135"},"packages/core/src/connections/Connection.ts:135")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"user"},"user"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"user"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/connections/Connection.ts#L136"},"packages/core/src/connections/Connection.ts:136")))}f.isMDXComponent=!0}}]);