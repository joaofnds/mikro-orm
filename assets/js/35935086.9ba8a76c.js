"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[19291],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(a),d=n,k=u["".concat(p,".").concat(d)]||u[d]||c[d]||i;return a?r.createElement(k,l(l({ref:t},m),{},{components:a})):r.createElement(k,l({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},68890:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return m},default:function(){return u}});var r=a(83117),n=a(80102),i=(a(67294),a(3905)),l=["components"],o={layout:"homepage",title:"MikroORM v3",hide_title:!0},p=void 0,s={unversionedId:"index",id:"version-3.6/index",isDocsHomePage:!1,title:"MikroORM v3",description:"Table of contents",source:"@site/versioned_docs/version-3.6/index.md",sourceDirName:".",slug:"/index",permalink:"/docs/3.6/index",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-3.6/index.md",tags:[],version:"3.6",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1637568869,formattedLastUpdatedAt:"11/22/2021",frontMatter:{layout:"homepage",title:"MikroORM v3",hide_title:!0}},m=[{value:"Table of contents",id:"table-of-contents",children:[],level:2}],c={toc:m};function u(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Overview",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/3.6/installation"},"Installation & Usage")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/3.6/defining-entities"},"Defining Entities")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/3.6/entity-manager"},"Persisting, Cascading and Fetching Entities with ",(0,i.kt)("inlineCode",{parentName:"a"},"EntityManager"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/3.6/repositories"},"Using ",(0,i.kt)("inlineCode",{parentName:"a"},"EntityRepository")," instead of ",(0,i.kt)("inlineCode",{parentName:"a"},"EntityManager"))))),(0,i.kt)("li",{parentName:"ul"},"Fundamentals",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/3.6/identity-map"},"Identity Map and Request Context")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/3.6/entity-references"},"Entity References and ",(0,i.kt)("inlineCode",{parentName:"a"},"Reference<T>")," Wrapper")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/3.6/entity-constructors"},"Using Entity Constructors")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/3.6/relationships"},"Modelling Relationships")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/3.6/collections"},"Collections")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/3.6/unit-of-work"},"Unit of Work")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/3.6/transactions"},"Transactions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/3.6/cascading"},"Cascading persist and remove")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/3.6/deployment"},"Deployment")))),(0,i.kt)("li",{parentName:"ul"},"Advanced Features",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/3.6/nested-populate"},"Smart Nested Populate")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/3.6/query-conditions"},"Smart Query Conditions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/3.6/query-builder"},"Using ",(0,i.kt)("inlineCode",{parentName:"a"},"QueryBuilder"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/3.6/serializing"},"Serializing")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/3.6/entity-helper"},"Updating Entity Values with ",(0,i.kt)("inlineCode",{parentName:"a"},"Entity.assign()"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/3.6/property-validation"},"Property Validation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/3.6/lifecycle-hooks"},"Lifecycle Hooks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/3.6/naming-strategy"},"Naming Strategy")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/3.6/metadata-providers"},"Metadata Providers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/3.6/metadata-cache"},"Metadata Cache")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/3.6/debugging"},"Debugging")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/3.6/schema-generator"},"Schema Generator")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/3.6/entity-generator"},"Entity Generator")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/3.6/migrations"},"Migrations")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/3.6/read-connections"},"Read Replica Connections")))),(0,i.kt)("li",{parentName:"ul"},"Usage with Different Drivers",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/3.6/usage-with-sql"},"Usage with SQL Drivers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/3.6/usage-with-mongo"},"Usage with MongoDB")))),(0,i.kt)("li",{parentName:"ul"},"Recipes",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/3.6/usage-with-nestjs"},"Usage with NestJS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/3.6/usage-with-js"},"Usage with Vanilla JS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/3.6/custom-driver"},"Creating Custom Driver")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/3.6/multiple-schemas"},"Using Multiple Schemas")))),(0,i.kt)("li",{parentName:"ul"},"Example Integrations",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm-examples/tree/master/express-ts"},"Express + MongoDB + TypeScript")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm-examples/tree/master/nest"},"Nest + MySQL + TypeScript")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/nestjs-realworld-example-app"},"RealWorld example app (Nest + MySQL)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm-examples/tree/master/express-js"},"Express + MongoDB + JavaScript"))))))}u.isMDXComponent=!0}}]);