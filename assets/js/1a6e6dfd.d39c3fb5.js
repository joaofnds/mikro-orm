"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[41843],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),i=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),k=i(a),d=n,N=k["".concat(l,".").concat(d)]||k[d]||c[d]||p;return a?r.createElement(N,o(o({ref:t},s),{},{components:a})):r.createElement(N,o({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,o=new Array(p);o[0]=k;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m.mdxType="string"==typeof e?e:n,o[1]=m;for(var i=2;i<p;i++)o[i]=a[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},60146:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return m},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return s},default:function(){return k}});var r=a(83117),n=a(80102),p=(a(67294),a(3905)),o=["components"],m={id:"core.changesetcomputer",title:"Class: ChangeSetComputer",sidebar_label:"ChangeSetComputer",custom_edit_url:null,hide_title:!0},l="Class: ChangeSetComputer",i={unversionedId:"api/classes/core.changesetcomputer",id:"version-4.5/api/classes/core.changesetcomputer",title:"Class: ChangeSetComputer",description:"core.ChangeSetComputer",source:"@site/versioned_docs/version-4.5/api/classes/core.changesetcomputer.md",sourceDirName:"api/classes",slug:"/api/classes/core.changesetcomputer",permalink:"/docs/api/classes/core.changesetcomputer",editUrl:null,tags:[],version:"4.5",lastUpdatedBy:"itsame-luigi",lastUpdatedAt:1643875051,formattedLastUpdatedAt:"2/3/2022",frontMatter:{id:"core.changesetcomputer",title:"Class: ChangeSetComputer",sidebar_label:"ChangeSetComputer",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"ChangeSet",permalink:"/docs/api/classes/core.changeset"},next:{title:"ChangeSetPersister",permalink:"/docs/api/classes/core.changesetpersister"}},s=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[{value:"Parameters:",id:"parameters",children:[],level:4}],level:3}],level:2},{value:"Properties",id:"properties",children:[{value:"comparator",id:"comparator",children:[],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"computeChangeSet",id:"computechangeset",children:[{value:"Type parameters:",id:"type-parameters",children:[],level:4},{value:"Parameters:",id:"parameters-1",children:[],level:4}],level:3},{value:"computePayload",id:"computepayload",children:[{value:"Type parameters:",id:"type-parameters-1",children:[],level:4},{value:"Parameters:",id:"parameters-2",children:[],level:4}],level:3},{value:"processProperty",id:"processproperty",children:[{value:"Type parameters:",id:"type-parameters-2",children:[],level:4},{value:"Parameters:",id:"parameters-3",children:[],level:4}],level:3},{value:"processToMany",id:"processtomany",children:[{value:"Type parameters:",id:"type-parameters-3",children:[],level:4},{value:"Parameters:",id:"parameters-4",children:[],level:4}],level:3},{value:"processToOne",id:"processtoone",children:[{value:"Type parameters:",id:"type-parameters-4",children:[],level:4},{value:"Parameters:",id:"parameters-5",children:[],level:4}],level:3}],level:2}],c={toc:s};function k(e){var t=e.components,a=(0,n.Z)(e,o);return(0,p.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"class-changesetcomputer"},"Class: ChangeSetComputer"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".ChangeSetComputer"),(0,p.kt)("h2",{id:"constructors"},"Constructors"),(0,p.kt)("h3",{id:"constructor"},"constructor"),(0,p.kt)("p",null,"+"," ",(0,p.kt)("strong",{parentName:"p"},"new ChangeSetComputer"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"validator"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entityvalidator"},(0,p.kt)("em",{parentName:"a"},"EntityValidator")),", ",(0,p.kt)("inlineCode",{parentName:"p"},"collectionUpdates"),": ",(0,p.kt)("em",{parentName:"p"},"Set"),"<",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.collection"},(0,p.kt)("em",{parentName:"a"},"Collection")),"<",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#anyentity"},(0,p.kt)("em",{parentName:"a"},"AnyEntity")),"<any",">",", unknown",">",">",", ",(0,p.kt)("inlineCode",{parentName:"p"},"removeStack"),": ",(0,p.kt)("em",{parentName:"p"},"Set"),"<",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#anyentity"},(0,p.kt)("em",{parentName:"a"},"AnyEntity")),"<any",">",">",", ",(0,p.kt)("inlineCode",{parentName:"p"},"metadata"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.metadatastorage"},(0,p.kt)("em",{parentName:"a"},"MetadataStorage")),", ",(0,p.kt)("inlineCode",{parentName:"p"},"platform"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.platform"},(0,p.kt)("em",{parentName:"a"},"Platform")),", ",(0,p.kt)("inlineCode",{parentName:"p"},"config"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.configuration"},(0,p.kt)("em",{parentName:"a"},"Configuration")),"<",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},(0,p.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},(0,p.kt)("em",{parentName:"a"},"Connection")),">",">","): ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.changesetcomputer"},(0,p.kt)("em",{parentName:"a"},"ChangeSetComputer"))),(0,p.kt)("h4",{id:"parameters"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"validator")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/classes/core.entityvalidator"},(0,p.kt)("em",{parentName:"a"},"EntityValidator")))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"collectionUpdates")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"Set"),"<",(0,p.kt)("a",{parentName:"td",href:"/docs/api/classes/core.collection"},(0,p.kt)("em",{parentName:"a"},"Collection")),"<",(0,p.kt)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},(0,p.kt)("em",{parentName:"a"},"AnyEntity")),"<any",">",", unknown",">",">")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"removeStack")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"Set"),"<",(0,p.kt)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},(0,p.kt)("em",{parentName:"a"},"AnyEntity")),"<any",">",">")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"metadata")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/classes/core.metadatastorage"},(0,p.kt)("em",{parentName:"a"},"MetadataStorage")))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"platform")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/classes/core.platform"},(0,p.kt)("em",{parentName:"a"},"Platform")))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"config")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/classes/core.configuration"},(0,p.kt)("em",{parentName:"a"},"Configuration")),"<",(0,p.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},(0,p.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,p.kt)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},(0,p.kt)("em",{parentName:"a"},"Connection")),">",">")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.changesetcomputer"},(0,p.kt)("em",{parentName:"a"},"ChangeSetComputer"))),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/ChangeSetComputer.ts#L12"},"packages/core/src/unit-of-work/ChangeSetComputer.ts:12")),(0,p.kt)("h2",{id:"properties"},"Properties"),(0,p.kt)("h3",{id:"comparator"},"comparator"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,p.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,p.kt)("strong",{parentName:"p"},"comparator"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitycomparator"},(0,p.kt)("em",{parentName:"a"},"EntityComparator"))),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/ChangeSetComputer.ts#L12"},"packages/core/src/unit-of-work/ChangeSetComputer.ts:12")),(0,p.kt)("h2",{id:"methods"},"Methods"),(0,p.kt)("h3",{id:"computechangeset"},"computeChangeSet"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"computeChangeSet"),"<T",">","(",(0,p.kt)("inlineCode",{parentName:"p"},"entity"),": T): ",(0,p.kt)("em",{parentName:"p"},"null")," ","|"," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.changeset"},(0,p.kt)("em",{parentName:"a"},"ChangeSet")),"<T",">"),(0,p.kt)("h4",{id:"type-parameters"},"Type parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"T")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},(0,p.kt)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),(0,p.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"entity")),(0,p.kt)("td",{parentName:"tr",align:"left"},"T")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"null")," ","|"," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.changeset"},(0,p.kt)("em",{parentName:"a"},"ChangeSet")),"<T",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/ChangeSetComputer.ts#L21"},"packages/core/src/unit-of-work/ChangeSetComputer.ts:21")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"computepayload"},"computePayload"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Private"),(0,p.kt)("strong",{parentName:"p"},"computePayload"),"<T",">","(",(0,p.kt)("inlineCode",{parentName:"p"},"entity"),": T): ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#entitydata"},(0,p.kt)("em",{parentName:"a"},"EntityData")),"<T",">"),(0,p.kt)("h4",{id:"type-parameters-1"},"Type parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"T")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},(0,p.kt)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),(0,p.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"entity")),(0,p.kt)("td",{parentName:"tr",align:"left"},"T")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#entitydata"},(0,p.kt)("em",{parentName:"a"},"EntityData")),"<T",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/ChangeSetComputer.ts#L50"},"packages/core/src/unit-of-work/ChangeSetComputer.ts:50")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"processproperty"},"processProperty"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Private"),(0,p.kt)("strong",{parentName:"p"},"processProperty"),"<T",">","(",(0,p.kt)("inlineCode",{parentName:"p"},"changeSet"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.changeset"},(0,p.kt)("em",{parentName:"a"},"ChangeSet")),"<T",">",", ",(0,p.kt)("inlineCode",{parentName:"p"},"prop"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.entityproperty"},(0,p.kt)("em",{parentName:"a"},"EntityProperty")),"<T",">","): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("h4",{id:"type-parameters-2"},"Type parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"T")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},(0,p.kt)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),(0,p.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"changeSet")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/classes/core.changeset"},(0,p.kt)("em",{parentName:"a"},"ChangeSet")),"<T",">")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"prop")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.entityproperty"},(0,p.kt)("em",{parentName:"a"},"EntityProperty")),"<T",">")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/ChangeSetComputer.ts#L63"},"packages/core/src/unit-of-work/ChangeSetComputer.ts:63")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"processtomany"},"processToMany"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Private"),(0,p.kt)("strong",{parentName:"p"},"processToMany"),"<T",">","(",(0,p.kt)("inlineCode",{parentName:"p"},"prop"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.entityproperty"},(0,p.kt)("em",{parentName:"a"},"EntityProperty")),"<T",">",", ",(0,p.kt)("inlineCode",{parentName:"p"},"changeSet"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.changeset"},(0,p.kt)("em",{parentName:"a"},"ChangeSet")),"<T",">","): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("h4",{id:"type-parameters-3"},"Type parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"T")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},(0,p.kt)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),(0,p.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"prop")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.entityproperty"},(0,p.kt)("em",{parentName:"a"},"EntityProperty")),"<T",">")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"changeSet")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/classes/core.changeset"},(0,p.kt)("em",{parentName:"a"},"ChangeSet")),"<T",">")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/ChangeSetComputer.ts#L83"},"packages/core/src/unit-of-work/ChangeSetComputer.ts:83")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"processtoone"},"processToOne"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Private"),(0,p.kt)("strong",{parentName:"p"},"processToOne"),"<T",">","(",(0,p.kt)("inlineCode",{parentName:"p"},"prop"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.entityproperty"},(0,p.kt)("em",{parentName:"a"},"EntityProperty")),"<T",">",", ",(0,p.kt)("inlineCode",{parentName:"p"},"changeSet"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.changeset"},(0,p.kt)("em",{parentName:"a"},"ChangeSet")),"<T",">","): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("h4",{id:"type-parameters-4"},"Type parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"T")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},(0,p.kt)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),(0,p.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"prop")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.entityproperty"},(0,p.kt)("em",{parentName:"a"},"EntityProperty")),"<T",">")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"changeSet")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/classes/core.changeset"},(0,p.kt)("em",{parentName:"a"},"ChangeSet")),"<T",">")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/ChangeSetComputer.ts#L73"},"packages/core/src/unit-of-work/ChangeSetComputer.ts:73")))}k.isMDXComponent=!0}}]);